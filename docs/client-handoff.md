# Client Handoff Document

This guide explains how your website works and how to manage it. Written in plain English for non-technical users.

---

## Table of Contents

1. [How Your Website Works](#how-your-website-works)
2. [Managing Content (Sanity CMS)](#managing-content-sanity-cms)
3. [Contact Form & Emails (Resend)](#contact-form--emails-resend)
4. [Website Hosting (Vercel)](#website-hosting-vercel)
5. [Environment Variables Reference](#environment-variables-reference)
6. [Common Tasks](#common-tasks)
7. [Getting Help](#getting-help)

---

## How Your Website Works

### Overview

Your website is built with modern web technology that makes it fast, secure, and easy to update:

- **Website Framework**: Next.js (React-based, hosted on Vercel)
- **Content Management**: Sanity.io (where you edit text, images, blog posts)
- **Contact Form Emails**: Resend (delivers form submissions to your inbox)
- **Hosting**: Vercel (automatic deployments when code changes)

### Website Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Main landing page with services overview |
| About | `/about` | Company story, values, certifications |
| Services | `/services` | List of all 11 services |
| Service Detail | `/services/[name]` | Individual service pages |
| Projects | `/projects` | Portfolio of completed work |
| Project Detail | `/projects/[name]` | Individual project pages with gallery |
| Testimonials | `/testimonials` | Client testimonials |
| Blog | `/blog` | Blog post listing |
| Blog Post | `/blog/[title]` | Individual blog articles |
| Contact | `/contact` | Contact form and details |

### How Content Updates Work

1. You edit content in **Sanity Studio** (your CMS)
2. Changes are saved instantly to Sanity's cloud
3. Your website automatically shows the new content

No coding required. No waiting for deployments. Just edit and publish.

---

## Managing Content (Sanity CMS)

### Accessing Sanity Studio

**Studio URL**: `https://clarkecarpentry.co.uk/studio`

Or during development: `http://localhost:3000/studio`

### Logging In

1. Go to the Studio URL
2. Click "Log in"
3. Sign in with Google (use the account that was set up for the project)

If you need to add another user:
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select project "clarkecarpentry" (ID: `07w52gq6`)
3. Go to "Members" tab
4. Invite new team members by email

### Content Types

#### Services
- **Name**: Service title (e.g., "First Fix Carpentry")
- **Slug**: URL-friendly version (auto-generated, e.g., "first-fix")
- **Description**: Main description text
- **Features**: List of key features/bullet points
- **Image**: Featured image for the service

#### Projects
- **Name**: Project title
- **Slug**: URL-friendly version
- **Type**: Commercial or Domestic
- **Client**: Client name (optional, for commercial projects)
- **Description**: Project overview
- **Completed Date**: When the project finished
- **Services**: Which services were used
- **Featured Image**: Main project image
- **Gallery Images**: Additional photos

#### Blog Posts
- **Title**: Article headline
- **Slug**: URL-friendly version
- **Excerpt**: Short summary (shown in listings)
- **Content**: Full article (rich text with formatting)
- **Author**: Writer's name
- **Published Date**: When to show as published
- **Featured Image**: Header image
- **Categories**: Topic tags
- **Related Services**: Link to relevant services

#### Testimonials
- **Quote**: The testimonial text
- **Client Name**: Who said it
- **Company**: Their company (optional)
- **Project**: Related project name (optional)
- **Featured**: Show on homepage (check to feature)

### Publishing Content

1. **Draft**: When you create or edit content, it's saved as a draft
2. **Publish**: Click the green "Publish" button to make it live
3. **Unpublish**: Use the dropdown menu to unpublish if needed

**Tip**: You can preview drafts before publishing by clicking "Preview" (if configured).

---

## Contact Form & Emails (Resend)

### How It Works

1. A visitor fills out the contact form on `/contact`
2. They provide: Name, Email, Phone (optional), and Message
3. The form submits to your server
4. Resend sends an email to `info@clarkecarpentry.co.uk`
5. The visitor sees a success message

### Accessing Resend Dashboard

**URL**: [resend.com/overview](https://resend.com/overview)

Login with the account that holds the API key.

### What You Can Do in Resend

- **View sent emails**: See all contact form submissions
- **Check delivery status**: Confirm emails were delivered
- **View email content**: Read the full message
- **Monitor for issues**: See if any emails bounced

### Email Format

Contact form emails arrive with:
- **Subject**: "New Contact Form Submission from [Name]"
- **From**: `onboarding@resend.dev` (or your verified domain)
- **Reply-To**: The visitor's email address (so you can reply directly)

### If Emails Stop Working

1. Check Resend dashboard for errors
2. Verify the API key is still valid
3. Check Vercel environment variables are set correctly

---

## Website Hosting (Vercel)

### Accessing Vercel Dashboard

**URL**: [vercel.com/dashboard](https://vercel.com/dashboard)

Login with the account connected to the GitHub repository.

### Domains

| Domain | Purpose |
|--------|---------|
| `clarkecarpentry.co.uk` | Production (main site) |
| `dev.clarkecarpentry.co.uk` | Staging (preview/testing) |

### How Deployments Work

Your website uses **automatic deployments**:

1. Code changes are pushed to GitHub
2. Vercel detects the change
3. A new version is built and deployed automatically
4. Takes about 1-2 minutes

**Branches**:
- `main` branch → deploys to production (`clarkecarpentry.co.uk`)
- `develop` branch → deploys to staging (`dev.clarkecarpentry.co.uk`)

### Vercel Dashboard Features

- **Deployments**: See all past deployments, rollback if needed
- **Analytics**: View visitor statistics (if enabled)
- **Logs**: Debug issues with function logs
- **Settings**: Manage domains, environment variables

### If the Site Goes Down

1. Check [Vercel Status](https://www.vercel-status.com/) for outages
2. Check the Deployments tab for failed builds
3. Click on a failed deployment to see error logs
4. Roll back to a previous working deployment if needed

---

## Environment Variables Reference

These are configured in Vercel Dashboard → Settings → Environment Variables.

| Variable | Purpose | Where to Get It |
|----------|---------|-----------------|
| `RESEND_API_KEY` | Sends contact form emails | [resend.com/api-keys](https://resend.com/api-keys) |
| `CONTACT_EMAIL` | Receives form submissions | Your business email |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Connects to Sanity CMS | `07w52gq6` (don't change) |
| `NEXT_PUBLIC_SANITY_DATASET` | Which Sanity dataset | `production` (don't change) |

### Updating Environment Variables

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select the project
3. Go to Settings → Environment Variables
4. Edit the variable value
5. Click Save
6. **Important**: Redeploy for changes to take effect
   - Go to Deployments → click "..." on latest → Redeploy

---

## Common Tasks

### Adding a New Blog Post

1. Go to Sanity Studio (`/studio`)
2. Click "Blog Post" in the sidebar
3. Click the "+" button to create new
4. Fill in:
   - Title
   - Slug (click "Generate" or type manually)
   - Excerpt (2-3 sentence summary)
   - Content (full article)
   - Author
   - Published date
   - Featured image
   - Categories
5. Click "Publish"

### Adding a New Project

1. Go to Sanity Studio
2. Click "Project" in the sidebar
3. Click "+" to create new
4. Fill in all fields
5. Upload images (featured + gallery)
6. Click "Publish"

### Updating Company Information

Most company info is in the code, but you can update:
- Testimonials (in Sanity)
- Services descriptions (in Sanity)
- Project descriptions (in Sanity)

For phone number, address, or email changes, the code needs updating.

### Featuring a Testimonial on Homepage

1. Go to Sanity Studio
2. Click "Testimonial" in the sidebar
3. Open the testimonial you want to feature
4. Check the "Featured" checkbox
5. Publish

### Changing the Contact Email

1. Go to Vercel Dashboard
2. Settings → Environment Variables
3. Edit `CONTACT_EMAIL`
4. Save and Redeploy

---

## Getting Help

### Technical Issues

For website bugs, hosting problems, or technical changes:
- Contact your web developer
- Provide: what you expected, what happened, any error messages

### Content Questions

For Sanity CMS help:
- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Help Center](https://www.sanity.io/help)

### Email Delivery Issues

For Resend help:
- [Resend Documentation](https://resend.com/docs)
- Check the Resend dashboard for delivery logs

### Hosting Issues

For Vercel help:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Status Page](https://www.vercel-status.com/)

---

## Quick Reference

| Task | Where |
|------|-------|
| Edit content | [Studio](/studio) |
| Check emails sent | [Resend Dashboard](https://resend.com/overview) |
| Check site status | [Vercel Dashboard](https://vercel.com/dashboard) |
| Manage Sanity users | [Sanity Manage](https://sanity.io/manage) |

**Sanity Project ID**: `07w52gq6`

**Key URLs**:
- Production: `https://clarkecarpentry.co.uk`
- Staging: `https://dev.clarkecarpentry.co.uk`
- CMS Studio: `https://clarkecarpentry.co.uk/studio`
