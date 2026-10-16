/* Studio shipping log: dated, verifiable milestones. Newest first.
   Every entry must be real. If it cannot be verified, it does not go in. */

export interface ShippingEntry {
  date: string; // YYYY-MM-DD
  text: string;
  href?: string;
}

export const shippingLog: ShippingEntry[] = [
  {
    date: "2026-10-16",
    text: "GhostCode Day 2: import resolution and ghost detection, 25/25 tests green.",
    href: "https://github.com/abdullah129026/ghostcode",
  },
  {
    date: "2026-10-15",
    text: "GhostCode Day 1: tree-sitter ingestion and graph builder, 6/6 tests green.",
    href: "https://github.com/abdullah129026/ghostcode",
  },
  {
    date: "2026-10-14",
    text: "Spec2Run build complete: 106/106 backend tests passing.",
    href: "https://github.com/abdullah129026/spec2run",
  },
  {
    date: "2026-10-13",
    text: "API Contract Firewall starts learning schemas from live traffic.",
    href: "https://github.com/abdullah129026/api-contract-firewall",
  },
  {
    date: "2026-10-12",
    text: "Spec2Run API deployed to Render.",
    href: "https://github.com/abdullah129026/spec2run",
  },
  {
    date: "2026-10-07",
    text: "PRISM live on its own domain.",
    href: "https://github.com/abdullah129026/prism-ai-git-time-machine",
  },
];
