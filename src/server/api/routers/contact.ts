import { TRPCError } from "@trpc/server";
import { Resend } from "resend";

import { env } from "~/env";
import { ContactFormEmail } from "~/emails/contact-form";
import { contactSubmissionSchema } from "~/lib/validations/contact";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// Cloudflare Turnstile verification
interface TurnstileVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
}

async function verifyTurnstileToken(token: string): Promise<boolean> {
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    }
  );

  const data = (await response.json()) as TurnstileVerifyResponse;
  return data.success;
}

const resend = new Resend(env.RESEND_API_KEY);

// Map service slugs to readable names
const serviceNames: Record<string, string> = {
  "project-management": "Project Management",
  "first-fix": "First Fix Carpentry",
  "second-fix": "Second Fix Carpentry",
  "dry-lining": "Dry Lining",
  extensions: "Extensions",
  "traditional-cut-roofs": "Traditional Cut Roofs",
  "new-build": "New Build",
  renovations: "Renovations",
  "bespoke-joinery": "Bespoke Joinery",
  "kitchen-fitting": "Kitchen Fitting",
  "timber-frame": "Timber Frame Construction",
  other: "Other",
};

export const contactRouter = createTRPCRouter({
  submit: publicProcedure
    .input(contactSubmissionSchema)
    .mutation(async ({ input }) => {
      const { firstName, lastName, email, phone, service, message, turnstileToken } = input;

      // Verify Turnstile token
      const isValidToken = await verifyTurnstileToken(turnstileToken);
      if (!isValidToken) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Security verification failed. Please try again.",
        });
      }

      // Map service slug to readable name
      const serviceName = service
        ? (serviceNames[service] ?? service)
        : undefined;

      try {
        const { error } = await resend.emails.send({
          from: "Clarke Carpentry Website <noreply@clarkecarpentry.co.uk>",
          to: env.CONTACT_EMAIL,
          replyTo: email,
          subject: `Website Enquiry from ${firstName} ${lastName}`,
          react: ContactFormEmail({
            firstName,
            lastName,
            email,
            phone: phone ?? undefined,
            service: serviceName,
            message,
          }),
        });

        if (error) {
          console.error("Resend error:", error);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message:
              "Failed to send email. Please try again or call us directly.",
          });
        }

        return { success: true };
      } catch (err) {
        // Re-throw if it's already a TRPCError
        if (err instanceof TRPCError) {
          throw err;
        }

        console.error("Contact form error:", err);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message:
            "An unexpected error occurred. Please try again or call us directly.",
        });
      }
    }),
});
