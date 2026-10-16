/* Product data: the single source of truth for every product surface.
   Rules: only include what the owner provided or what is publicly verifiable.
   Omit a field when it is unknown; the UI must degrade gracefully.
   Copy approved by the owner, 2026-10-16. */

export type ProductStatus = "Live" | "Beta" | "In Development" | "Upcoming" | "Open Source";
export type ProductCategory = "AI" | "Full-Stack" | "Developer Tool";

export interface ProductLinks {
  live?: string | null;
  github?: string | null;
  demo?: string | null;
  docs?: string | null;
}

export interface Product {
  slug: string;
  name: string;
  tagline?: string;
  category?: ProductCategory;
  status: ProductStatus;
  summary?: string;
  problem?: string;
  howItWorks?: string[];
  keyFeatures?: { title: string; description: string }[];
  techStack?: string[];
  architectureNote?: string;
  links?: ProductLinks;
  year?: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: "prism",
    name: "PRISM",
    tagline: "Explore any repo's history as a 3D timeline.",
    category: "AI",
    status: "Live",
    summary:
      "Paste a git URL and PRISM clones it, parses every commit, and renders the history as an interactive 3D timeline. Select any commit to inspect what it changed and why.",
    problem:
      "Git history holds the reasoning behind a codebase, but git log is unreadable at scale. Intent gets lost the moment the author moves on.",
    howItWorks: [
      "Paste any public git URL.",
      "PRISM clones the repo and parses every commit.",
      "History renders as a 3D timeline you can scrub, with per-commit detail on selection.",
    ],
    keyFeatures: [
      { title: "3D commit timeline", description: "Scrub years of history on one axis; click any node to inspect it." },
      { title: "Commit intent", description: "Each commit is summarized so you read why, not just what." },
    ],
    techStack: ["Next.js", "Python", "Vercel", "Render"],
    links: {
      live: "https://prism.fluxyai.codes",
      github: "https://github.com/abdullah129026/prism-ai-git-time-machine",
    },
    year: "2026",
    featured: true,
  },
  {
    slug: "spec2run",
    name: "Spec2Run",
    tagline: "Type your API into existence.",
    category: "AI",
    status: "Live",
    summary:
      "Describe an API in plain English and get a live, deployed microservice. Prompt Studio on the left, live Swagger, generated code, diffs, and logs on the right.",
    problem:
      "Turning an idea into a running API means days of scaffolding: schemas, boilerplate, validation, deployment. Most of it is mechanical.",
    howItWorks: [
      "Type what the API should do in plain English.",
      "An LLM drafts an OpenAPI 3.0 spec through function calling, then a validator checks it.",
      "A template and LLM hybrid generates a FastAPI and SQLAlchemy service.",
      "The service runs in a live sandbox with Swagger, code, diff, and log views. Download the ZIP or push to GitHub.",
    ],
    keyFeatures: [
      { title: "Prompt Studio", description: "Typed prompts with auth, database, and language options, plus example prompts." },
      { title: "Four live tabs", description: "Swagger UI, Monaco code view, diff view, and live logs for every generated service." },
      { title: "Spec versioning", description: "Patch an existing spec and keep history, like git for APIs." },
    ],
    techStack: ["Next.js", "FastAPI", "Groq", "Neon Postgres", "Render", "Vercel"],
    links: {
      live: "https://spec2run.fluxyai.codes",
      github: "https://github.com/abdullah129026/spec2run",
    },
    year: "2026",
    featured: true,
  },
  {
    slug: "api-contract-firewall",
    name: "API Contract Firewall",
    tagline: "Contract testing without writing contracts.",
    category: "Developer Tool",
    status: "Live",
    summary:
      "A Cloudflare Worker forward proxy that watches your API traffic, learns the JSON schemas your endpoints actually return, and blocks deploys that would break them.",
    problem:
      "APIs break silently. Someone renames a field, a type drifts, latency creeps up, and the frontend finds out in production. Hand-written contracts rot because nobody maintains them.",
    howItWorks: [
      "Point your API through the worker proxy.",
      "It learns request and response schemas from real traffic, no contract files needed.",
      "Schema drift, breaking changes, and latency regressions are flagged on a dashboard.",
      "A CI gate blocks the deploy when a change would break consumers.",
    ],
    keyFeatures: [
      { title: "Learning proxy", description: "Schemas are inferred from live traffic, including a learning mode per endpoint." },
      { title: "Drift detection", description: "Breaking changes and schema drift surface before they ship." },
      { title: "Latency watch", description: "P95 regressions are tracked alongside correctness." },
    ],
    techStack: ["Cloudflare Workers", "Next.js", "Supabase Postgres", "Vercel"],
    links: {
      live: "https://api-contract-firewall.vercel.app",
      github: "https://github.com/abdullah129026/api-contract-firewall",
    },
    year: "2026",
    featured: true,
  },
  {
    slug: "ghostcode",
    name: "GhostCode",
    tagline: "Turns dead code into a P&L statement.",
    category: "Developer Tool",
    status: "In Development",
    summary:
      "AST-based analysis that maps your codebase into a dependency graph, finds the code nothing calls, and prices it: lines of dead code times complexity, in dollars.",
    problem:
      "Dead code is invisible debt. Nobody deletes it because nobody can prove it is dead, so it keeps getting maintained, tested around, and read.",
    howItWorks: [
      "Tree-sitter parses Python and JavaScript/TypeScript into ASTs.",
      "Imports resolve and call sites link into a NetworkX dependency graph.",
      "Functions with zero incoming edges are flagged as ghosts, each with a reason string.",
      "A cost model prices every ghost: lines of code times complexity.",
    ],
    keyFeatures: [
      { title: "Ghost detection", description: "Zero-incoming-edge analysis with a human-readable reason per ghost." },
      { title: "Entry-point analysis", description: "Mains, handlers, and exports are treated as roots so live code is never flagged." },
      { title: "Cost model", description: "Dead code priced in dollars, so cleanup can be prioritized like any budget line." },
    ],
    techStack: ["Python", "tree-sitter", "NetworkX", "pytest"],
    links: {
      github: "https://github.com/abdullah129026/ghostcode",
    },
    year: "2026",
    featured: false,
  },
  {
    slug: "env-machine",
    name: "Env Machine",
    tagline: "Version control for .env files.",
    category: "Developer Tool",
    status: "In Development",
    summary:
      "History, diff, one-click rollback, auto-sync, and an audit log for environment files. The config changes nobody reviews, finally reviewable.",
    problem:
      ".env changes are invisible: edited by hand, shared over chat, never diffed. When production breaks, nobody knows which variable changed.",
    howItWorks: [
      "Connect your .env files.",
      "Every change is recorded with a diff.",
      "Roll back to any version in one click.",
      "The audit log shows who changed what, and when.",
    ],
    keyFeatures: [
      { title: "One-click rollback", description: "Restore any previous version of an environment instantly." },
      { title: "Audit log", description: "Every change attributed and timestamped." },
    ],
    techStack: ["Next.js", "Vercel"],
    links: {
      live: "https://env-time-machine.vercel.app",
      github: "https://github.com/abdullah129026/env-time-machine",
    },
    year: "2026",
    featured: false,
  },
  {
    slug: "promostack",
    name: "promostack",
    tagline: "API-first promotion infrastructure for indie SaaS.",
    category: "Full-Stack",
    status: "In Development",
    // Note: GitHub repo is private, so no link.
    summary:
      "Coupons, gift cards, referrals, loyalty, and fraud controls behind one API. The promotion layer every SaaS rebuilds, done once.",
    problem:
      "Every indie SaaS hand-rolls coupons and referral codes, then discovers edge cases: double redemption, fake referrals, gift card balances.",
    howItWorks: [
      "One API issues coupons, gift cards, and referral codes.",
      "Loyalty rules run on top of the same ledger.",
      "Fraud controls catch double redemption and abuse.",
    ],
    keyFeatures: [
      { title: "One promotion API", description: "Coupons, gift cards, referrals, and loyalty from a single integration." },
      { title: "Fraud controls", description: "Abuse detection built in, not bolted on." },
    ],
    links: {
      live: "https://promostack-eight.vercel.app",
      github: null,
    },
    year: "2026",
    featured: false,
  },
  {
    slug: "trace",
    name: "Trace",
    status: "Upcoming",
    year: "2026",
  },
  {
    slug: "patchpilot",
    name: "PatchPilot",
    status: "Upcoming",
    year: "2026",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function liveProducts(): Product[] {
  return products.filter((p) => p.status === "Live");
}
