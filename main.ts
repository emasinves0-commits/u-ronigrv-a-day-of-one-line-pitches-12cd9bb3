import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_FILE = "entry.txt";
const ENTRY_MAX = 240;

function resolveOutputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

/**
 * Revision v2 angle: the friend who keeps telling an app idea at dinner is
 * already writing the spec; one year of regret plus a low-commitment trial
 * ("build it once and see what happens"), instead of a generic pitch.
 */
const PITCH_LINE =
  "Every time you tell that app idea at dinner, you're writing the spec — a year from now you'll still be describing it unless you let the agent build it once and see what happens.";

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
