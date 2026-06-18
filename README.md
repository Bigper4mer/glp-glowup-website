## GLP GlowUp Site

Marketing site and intake flow for GLP GlowUp.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The site uses the App Router in `src/app` and serves a Netlify-backed intake form at `/fit-form`.

## Netlify Form Handoff

- The coaching intake form is a Netlify Form named `fit-form`.
- Netlify form notifications should be configured to send submission emails to `start@glpglowups.com`.
- Visible general contact surfaces should continue using `hello@glpglowups.com`.
- The thank-you flow is manual review first. Do not auto-send a booking link unless the process is intentionally changed.

## Deploy

Build and deploy:

```bash
npm run build
```

Production is expected to deploy through Netlify from the connected GitHub repo.

## Domain Attachment

- Temporary production URL: `https://glp-glowup-website.netlify.app`
- Future primary domain after client transfer: `glpglowups.com`
- Add both apex and `www` in Netlify and update `siteUrl` after the domain DNS is transferred.

## Reference

- [Next.js Documentation](https://nextjs.org/docs)
