// Generates branded OG card SVGs into public/og/.
// Card copy mirrors src/data/products.ts (copy approved 2026-10-16).
// Run: node scripts/og.mjs && node scripts/og-rasterize.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "og");
mkdirSync(outDir, { recursive: true });

function fontDataUri(pkg, file) {
  const buf = readFileSync(
    join(root, "node_modules", "@fontsource-variable", pkg, "files", file)
  );
  return `data:font/woff2;base64,${buf.toString("base64")}`;
}

const grotesk = fontDataUri("space-grotesk", "space-grotesk-latin-wght-normal.woff2");
const mono = fontDataUri("jetbrains-mono", "jetbrains-mono-latin-wght-normal.woff2");

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Wrap a string into lines of at most maxChars, max 3 lines.
function wrap(s, maxChars = 30, maxLines = 3) {
  const words = s.split(" ");
  const lines = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > maxChars && cur) {
      lines.push(cur);
      cur = w;
      if (lines.length === maxLines) break;
    } else {
      cur = (cur + " " + w).trim();
    }
  }
  if (lines.length < maxLines && cur) lines.push(cur);
  return lines;
}

function card({ eyebrow, title, sub }) {
  const titleLines = wrap(title, 22, 3);
  const subLines = sub ? wrap(sub, 52, 2) : [];
  const titleY = 300;
  const lineH = 92;
  const startY = titleY - ((titleLines.length - 1) * lineH) / 2;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <style>
    @font-face { font-family: 'Space Grotesk'; src: url('${grotesk}') format('woff2'); font-weight: 100 900; }
    @font-face { font-family: 'JetBrains Mono'; src: url('${mono}') format('woff2'); font-weight: 100 900; }
  </style>
  <rect width="1200" height="630" fill="#0b0e0c"/>
  <rect x="0" y="0" width="1200" height="6" fill="#34d399"/>
  <text x="72" y="104" font-family="'JetBrains Mono', monospace" font-size="26" letter-spacing="6" fill="#34d399">FLUX STUDIO</text>
  <text x="72" y="196" font-family="'JetBrains Mono', monospace" font-size="24" letter-spacing="4" fill="#6f776b">${esc(eyebrow.toUpperCase())}</text>
  ${titleLines
    .map(
      (l, i) =>
        `<text x="68" y="${startY + i * lineH}" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="96" letter-spacing="-2" fill="#ecefe8">${esc(l)}</text>`
    )
    .join("\n  ")}
  ${subLines
    .map(
      (l, i) =>
        `<text x="72" y="${startY + titleLines.length * lineH + 8 + i * 40}" font-family="'JetBrains Mono', monospace" font-size="26" fill="#a9b1a4">${esc(l)}</text>`
    )
    .join("\n  ")}
  <text x="72" y="580" font-family="'JetBrains Mono', monospace" font-size="22" fill="#6f776b">fluxyai.codes</text>
</svg>`;
}

const pages = [
  { file: "home", eyebrow: "Independent software studio", title: "Flux Studio", sub: "AI products and full-stack applications, from idea to production." },
  { file: "products", eyebrow: "Products", title: "Everything we ship", sub: "Listed with its status. Live means you can use it today." },
  { file: "about", eyebrow: "About", title: "One person, building in the open", sub: "" },
  { file: "contact", eyebrow: "Contact", title: "Tell us what you are building", sub: "" },
  { file: "changelog", eyebrow: "Changelog", title: "A dated record of what shipped", sub: "" },
];

// Mirrors src/data/products.ts (copy approved 2026-10-16).
const productCards = [
  { slug: "prism", name: "PRISM", tagline: "Explore any repo's history as a 3D timeline.", status: "Live" },
  { slug: "spec2run", name: "Spec2Run", tagline: "Type your API into existence.", status: "Live" },
  { slug: "api-contract-firewall", name: "API Contract Firewall", tagline: "Contract testing without writing contracts.", status: "Live" },
  { slug: "ghostcode", name: "GhostCode", tagline: "Turns dead code into a P&L statement.", status: "In Development" },
  { slug: "env-machine", name: "Env Machine", tagline: "Version control for .env files.", status: "In Development" },
  { slug: "promostack", name: "promostack", tagline: "API-first promotion infrastructure for indie SaaS.", status: "In Development" },
  { slug: "trace", name: "Trace", tagline: "", status: "Upcoming" },
  { slug: "patchpilot", name: "PatchPilot", tagline: "", status: "Upcoming" },
];

for (const p of pages) {
  writeFileSync(join(outDir, `${p.file}.svg`), card(p));
}
for (const p of productCards) {
  writeFileSync(
    join(outDir, `product-${p.slug}.svg`),
    card({ eyebrow: `Product · ${p.status}`, title: p.name, sub: p.tagline })
  );
}
console.log(`Wrote ${pages.length + productCards.length} SVGs to public/og/`);
