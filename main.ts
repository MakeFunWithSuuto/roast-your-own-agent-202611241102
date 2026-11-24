// Roast Your Own Agent: writes the chosen one-line roast to /output/entry.txt.
// The same bytes every run. MAKEFUN_OUTPUT_DIR stands in for /output outside the sandbox.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export const ROAST =
  "My agent keeps 312 memory notes reminding itself to be concise. Each one is four paragraphs.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ROAST, 'utf8');
