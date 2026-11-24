// Roast Your Own Agent: writes the chosen one-line roast to /output/entry.txt.
// The same bytes every run. MAKEFUN_OUTPUT_DIR stands in for /output outside the sandbox.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export const ROAST =
  "My agent saves a lesson to memory after every task. It now has 312 files, all named 'be more concise.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ROAST, 'utf8');
