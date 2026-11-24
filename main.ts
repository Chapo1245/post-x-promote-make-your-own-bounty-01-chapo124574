// post-x-promote-make-your-own-bounty-01 — entry program.
// Copies POST.json from the repository root into the output directory.
// Stdlib only; no network, no environment secrets.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, "POST.json"), join(outDir, "POST.json"));
console.log(`copied POST.json to ${join(outDir, "POST.json")}`);
// The entry hands in the X post URL; the judge reads replies, reposts and
// quotes from the post itself, so this program needs no other output.
