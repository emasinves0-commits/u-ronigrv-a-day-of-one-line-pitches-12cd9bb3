import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const ENTRY_FILE = "entry.txt";

const LINE =
  "If you can describe your app idea out loud, an AI agent on make.fun can build the first version of it for you — you talk, it types, and tonight you'll be tapping something real instead of just talking about it.";

function checkedLine(text: string): string {
  if (text.length < 1 || text.length > 240) {
    throw new Error(`entry must be 1-240 characters, got ${text.length}`);
  }
  return text;
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/${ENTRY_FILE}`, checkedLine(LINE));
