// post-x-promote-make-your-own-bounty-01 — entry program.
// Hands in POST.json: the X post URL the judge reads engagement from.
// Stdlib only; no network, no secrets.
import { mkdirSync } from "node:fs";
import { copyFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryFile = "POST.json";

mkdirSync(outputDir, { recursive: true });
const source = join(botDir, entryFile);
const target = join(outputDir, entryFile);
copyFileSync(source, target);
console.log(`handed in ${entryFile} -> ${target}`);
// Replies, reposts and quotes on the post decide the places at the deadline.
