## GLP GlowUp Site

Marketing site for GLP GlowUp.

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

The site uses the App Router in `src/app`. Application, inquiry, and question actions use the external Short Fit site at exactly `https://shortfit.glpglowups.com`, without query parameters.

## Application and Inquiry Handoff

- Short Fit is the only application and inquiry collection surface linked from this marketing site.
- Local Netlify forms and their notification setup are retired; this repository does not collect or process form submissions.
- The legacy `/fit-form` path intentionally returns 404 instead of redirecting, so old answer-bearing query parameters are not forwarded or retained.
- Direct current users to the exact query-free URL `https://shortfit.glpglowups.com`.
- `hello@glpglowups.com` remains visible as a non-clickable administrative address; it is not an application or inquiry action.

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
