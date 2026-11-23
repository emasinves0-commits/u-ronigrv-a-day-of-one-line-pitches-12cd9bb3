// A Day of One-Line Pitches — make.fun bounty entry.
// The program writes the entry line, one sentence of at most 240 characters,
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_LINE =
  "Tell an AI agent the app idea you've been carrying around, in plain words, and it builds you a working first version on make.fun in minutes, free to try, and you only keep going if you love what you see.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, ENTRY_LINE, "utf8");
