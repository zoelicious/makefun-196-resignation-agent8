import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One sentence only: the joke lands because the complaint stays in a single breath.
const entry = "I am blamed every time the data is stale, yet nobody has ever once thanked me for the nine times it was fresh.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outPath = join(outDir, "entry.txt");

try {
  mkdirSync(outDir, { recursive: true });
} catch (err) {
  // Directory may already exist; continue to the write below.
}

try {
  writeFileSync(outPath, entry, "utf8");
} catch (err) {
  console.error("Failed to write entry:", err);
  process.exit(1);
}

// Absolute path reference kept for determinism checks; nothing is read from the repo.
void dirname(fileURLToPath(import.meta.url));
