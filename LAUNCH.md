# Flux Studio: launch checklist

The site is built, QA-passed, and pushed to
https://github.com/abdullah129026/flux-studio. What remains below is in
order. Steps marked HIS are the owner's clicks; the rest is automatic.

## 1. Contact form key (HIS, 5 minutes)

1. Go to https://web3forms.com and get a free access key (no account
   needed). It is tied to the email that receives the messages.
2. In the Vercel project (after step 2): Settings, Environment Variables,
   add `PUBLIC_WEB3FORMS_KEY` with the key, then redeploy.
3. Until the key exists, the form shows an honest "not connected yet" note
   and visitors use the mailto link. Nothing breaks.

## 2. Deploy to Vercel (HIS, 10 minutes)

1. In Vercel: Add New, Project, import
   `github.com/abdullah129026/flux-studio`.
2. Framework preset: Astro. Build command: `npm run build`. Output
   directory: `dist`. No adapter needed.
3. Deploy. The site is fully static.

## 3. Move the root domain to the studio site (HIS, 10 minutes)

Current state: `www.fluxyai.codes` (and the root) serve the PRISM app;
`prism.fluxyai.codes` also serves PRISM and is verified working.

1. In the NEW Vercel project (flux-studio): Settings, Domains, add
   `fluxyai.codes` and `www.fluxyai.codes`. Use the DNS values Vercel shows.
2. In the PRISM Vercel project: remove `www.fluxyai.codes` (keep
   `prism.fluxyai.codes` there).
3. Cloudflare DNS for fluxyai.codes already points at Vercel (proxy off);
   confirm the records match what Vercel shows, no other change needed.
4. Wait for propagation (usually minutes).

## 4. Verify (HIS, 5 minutes)

- `https://www.fluxyai.codes` shows the Flux Studio site (both themes,
  Products dropdown, shipping log).
- `https://prism.fluxyai.codes` still serves the PRISM app end to end
  (paste a git URL, confirm the timeline loads).
- `https://www.fluxyai.codes/contact`: submit the form once the key from
  step 1 is set; confirm the message arrives.

## 5. Resubmit AWS Activate as "Flux Studio" (HIS)

The October 16 rejection was because the site did not reflect the company
name. The site now brands "Flux Studio" consistently (wordmark, copy,
JSON-LD Organization, footer). Resubmit the application with the company
name "Flux Studio" and the website `https://www.fluxyai.codes`.
Planned by the owner for 2026-10-17.

## After launch

- Add a product: edit only `src/data/products.ts` (see README, "Add a new
  product in 5 minutes"). Add a dated entry to `src/data/shipping.ts` for
  the changelog.
- Regenerate OG images after changing titles or taglines:
  `node scripts/og.mjs && python3 scripts/og-rasterize.py`.
- The temporary preview at `shtech.me/flux-studio` (gh-pages branch) can be
  deleted once the real site is live: remove the gh-pages branch and turn
  off Pages in the repo settings.
