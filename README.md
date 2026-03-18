# SaaS Website Template

Production-ready SaaS marketing website built with Next.js App Router, React, and Tailwind CSS.  
The project is designed for overseas B2B visitors and includes the core legal and contact pages commonly required for developer-platform app reviews.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- TypeScript

## Included Pages

- `/` Home
- `/privacy-policy` Privacy Policy
- `/terms-of-service` Terms of Service
- `/contact` Contact
- `404` custom not-found page

## SEO and Crawl Setup

- Global metadata with title, description, Open Graph
- Favicon placeholder at `src/app/favicon.ico`
- Robots route at `src/app/robots.ts`
- Sitemap route at `src/app/sitemap.ts`

## Brand Info Replacement

All core brand fields are centralized in:

- `src/config/site.ts`

Update these values:

- `brandName`
- `productName`
- `domain`
- `siteUrl`
- `supportEmail`
- `salesEmail`
- `mainCta`
- `secondaryCta`
- `announcement`

Also replace logo and favicon placeholders:

- Logo: `public/logo-placeholder.svg`
- Favicon: `src/app/favicon.ico`

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build Check

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Keep default Next.js build settings.
4. Deploy.
5. After deployment, update `siteUrl` in `src/config/site.ts` to your real domain and redeploy.

## Content Editing Guide

- Home sections: `src/app/page.tsx`
- Navbar: `src/components/site-navbar.tsx`
- Footer: `src/components/site-footer.tsx`
- Privacy policy text: `src/app/privacy-policy/page.tsx`
- Terms text: `src/app/terms-of-service/page.tsx`
- Contact page content/form: `src/app/contact/page.tsx`
