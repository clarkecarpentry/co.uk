"use client";

import * as React from "react";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

import { env } from "~/env";
import { api } from "~/trpc/react";
import {
  contactFormSchema,
  type ContactFormData,
} from "~/lib/validations/contact";

type FormErrors = Partial<Record<keyof ContactFormData | "turnstile", string>>;

export function ContactForm() {
  const [formData, setFormData] = React.useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [submitted, setSubmitted] = React.useState(false);
  const [turnstileToken, setTurnstileToken] = React.useState<string | null>(null);
  const turnstileRef = React.useRef<TurnstileInstance>(null);

  const submitMutation = api.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    },
    onError: () => {
      // Reset Turnstile on error so user can try again
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    },
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const error of result.error.errors) {
        const field = error.path[0] as keyof ContactFormData;
        fieldErrors[field] ??= error.message;
      }
      setErrors(fieldErrors);
      return;
    }

    // Check for Turnstile token
    if (!turnstileToken) {
      setErrors((prev) => ({ ...prev, turnstile: "Please complete the security check" }));
      return;
    }

    submitMutation.mutate({ ...result.data, turnstileToken });
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-green-500/20 bg-green-950/20 p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
        <h3 className="mt-4 text-xl font-semibold">Message Sent</h3>
        <p className="text-muted-foreground mt-2">
          Thank you for your enquiry. We&apos;ll get back to you as soon as
          possible.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-green-500 hover:text-green-400"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClasses = (fieldName: keyof ContactFormData) =>
    `mt-1 block w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
      errors[fieldName]
        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
        : "border-border/50 focus:border-green-500 focus:ring-green-500"
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitMutation.error && (
        <div className="flex items-start gap-2 rounded-md border border-red-500/20 bg-red-950/20 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
          <p className="text-sm text-red-400">{submitMutation.error.message}</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={inputClasses("firstName")}
            placeholder="John"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={inputClasses("lastName")}
            placeholder="Smith"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses("email")}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone (optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses("phone")}
          placeholder="07123 456789"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={inputClasses("service")}
        >
          <option value="">Select a service...</option>
          <option value="project-management">Project Management</option>
          <option value="first-fix">First Fix Carpentry</option>
          <option value="second-fix">Second Fix Carpentry</option>
          <option value="dry-lining">Dry Lining</option>
          <option value="extensions">Extensions</option>
          <option value="traditional-cut-roofs">Traditional Cut Roofs</option>
          <option value="new-build">New Build</option>
          <option value="renovations">Renovations</option>
          <option value="bespoke-joinery">Bespoke Joinery</option>
          <option value="kitchen-fitting">Kitchen Fitting</option>
          <option value="timber-frame">Timber Frame Construction</option>
          <option value="other">Other</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-red-500">{errors.service}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={inputClasses("message")}
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      {/* Turnstile CAPTCHA */}
      <div>
        <Turnstile
          ref={turnstileRef}
          siteKey={env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          onSuccess={setTurnstileToken}
          onError={() => setTurnstileToken(null)}
          onExpire={() => setTurnstileToken(null)}
          options={{
            theme: "dark",
          }}
        />
        {errors.turnstile && (
          <p className="mt-1 text-sm text-red-500">{errors.turnstile}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitMutation.isPending}
        className="focus:ring-offset-background w-full rounded-md bg-green-600 px-4 py-3 font-medium text-white transition-colors hover:bg-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      >
        {submitMutation.isPending ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
