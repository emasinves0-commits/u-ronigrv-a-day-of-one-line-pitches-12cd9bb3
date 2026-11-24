import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const ENTRY_FILE = "entry.txt";

const PITCH_LINE =
  "Take that napkin sketch you keep hiding in your wallet and let an AI agent on make.fun turn it into something real before you lose the feeling again.";

function validateEntry(text: string): string {
  if (text.length < 1 || text.length > 240) {
    throw new Error(`entry must be 1-240 characters, got ${text.length}`);
  }
  return text;
}

function writeEntry(text: string): void {
  const entry = validateEntry(text);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(`${OUTPUT_DIR}/${ENTRY_FILE}`, entry);
}

writeEntry(PITCH_LINE);
