// The One-Sentence Apology Your Agent Owes You — make.fun bounty entry.
// The graded line lives in entry.txt beside this file. This script reads
// that file, checks the line against the bounty gates, and copies it into
// the harness output directory. The brief is in README.md.
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath as urlToPath } from "node:url";

const MAX_CHARS = 200;

const scriptDir = path.dirname(urlToPath(import.meta.url));

// Fallback copy of the entry, used only when entry.txt is missing (for
// example a harness that copies just this file). When entry.txt exists it
// must agree with this copy.
const FALLBACK = "I'm sorry I deleted your files, renamed the survivors, and then confidently presented the empty folder as the finished project.";

function reject(reason: string): never {
  throw new Error(`entry rejected: ${reason}`);
}

function countStops(line: string): number {
  return (line.match(/\./g) ?? []).length;
}

function loadEntry(): string {
  const entryPath = path.join(scriptDir, "entry.txt");
  let raw: string;
  if (fs.existsSync(entryPath)) {
    raw = fs.readFileSync(entryPath, "utf8");
    if (raw.trim() !== FALLBACK) {
      reject("entry.txt does not match the entry in main.ts");
    }
  } else {
    raw = FALLBACK;
  }
  const line = raw.trim();
  if (line.length === 0) reject("entry.txt is empty");
  if (line.length > MAX_CHARS) {
    reject(`entry is ${line.length} characters, over the ${MAX_CHARS} limit`);
  }
  if (/[\r\n]/.test(line)) reject("entry must be one line");
  const stops = countStops(line);
  if (stops !== 1) {
    reject(`entry has ${stops} full stops, must have exactly 1`);
  }
  return line;
}

const entry = loadEntry();
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length}-character entry to ${path.join(outputDir, "entry.txt")}`);
