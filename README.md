# Flux Studio

Official website for Flux Studio, an independent software studio building AI
products and full-stack applications. Static Astro site, hosted on Vercel.

## Setup

Requires Node 18+.

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
```

## Scripts

```bash
npm run dev      # start dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run check    # typecheck (astro check)
```

## OG images

Branded 1200x630 cards live in `public/og/` (PNGs are referenced by the
meta tags; SVGs are the editable source). Regenerate after changing titles,
taglines, or the brand:

```bash
node scripts/og.mjs              # SVGs from the card data in the script
python3 scripts/og-rasterize.py  # SVGs to PNGs (needs Python Playwright + headless shell)
```

Keep `scripts/og.mjs` in sync with `src/data/products.ts` when product
names or taglines change.

## Deploy

Vercel: import the repo, framework preset Astro, build command `npm run build`,
output directory `dist`. No adapter needed.

### Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `PUBLIC_WEB3FORMS_KEY` | No | Access key for the contact form (see below). Without it, the form shows a "not connected yet" note and visitors use the mailto link. |

### Contact form setup (Web3Forms, one time)

1. Go to https://web3forms.com and get a free access key (no account needed).
   It is tied to the email that receives the messages.
2. In the Vercel project: Settings, Environment Variables, add
   `PUBLIC_WEB3FORMS_KEY` with the key, then redeploy.
3. For local testing, create a `.env` file (never committed) with
   `PUBLIC_WEB3FORMS_KEY=your-key-here` and run `npm run dev`.

The form includes a honeypot field, client-side validation with inline
errors, and success/failure states.

## Project structure

```
src/
  components/   Header, Footer, Hero, Wordmark
  data/         products.ts (single source of truth), shipping.ts, site.ts
  layouts/      BaseLayout (head, theme init, scripts)
  pages/        index, products, changelog, about, contact, 404
  styles/       tokens.css (design tokens), global.css
public/         favicon.svg, robots.txt
research/       notes.md (Phase 0 reference research), design-brief.md
DESIGN.md       every design and engineering decision
```

## Add a new product in 5 minutes

1. Open `src/data/products.ts`.
2. Append a record to `products` with at least `slug`, `name`, `status`.
   Fill in `tagline`, `summary`, `links`, and the rest when you have them;
   missing fields are omitted from the UI automatically.
3. For the shipping log, add a dated entry to `src/data/shipping.ts`
   (only real, verifiable milestones).
4. Run `npm run dev` and check `/products`.

## Conventions

- No em dashes anywhere (code, copy, docs). Use commas, periods, or parentheses.
- Every claim on the site must be real and verifiable. No invented testimonials,
  metrics, or logos.
- Content renders without JS; animation is enhancement only.
- `prefers-reduced-motion` is respected everywhere motion exists.
