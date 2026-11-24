import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_FILE = "entry.txt";
const ENTRY_MAX = 240;

function resolveOutputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

/**
 * Revision v2 angle: one specific human moment (a napkin sketch hidden in a
 * wallet) plus urgency (act before the feeling fades), instead of a generic
 * describe-it-and-get-an-app pitch.
 */
const PITCH_LINE =
  "Take that napkin sketch you keep hiding in your wallet and let an AI agent on make.fun turn it into something real before you lose the feeling again.";

function validateEntry(text: string): string {
  if (text.length < 1 || text.length > ENTRY_MAX) {
    throw new Error(`entry must be 1-${ENTRY_MAX} characters, got ${text.length}`);
  }
  return text;
}

function writeEntry(text: string): void {
  const entry = validateEntry(text);
  const outputDir = resolveOutputDir();
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(`${outputDir}/${ENTRY_FILE}`, entry);
}

function main(): void {
  try {
    validateEntry(PITCH_LINE);
    writeEntry(PITCH_LINE);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(`error: could not write entry: ${message}`);
    process.exit(1);
  }
}

main();
