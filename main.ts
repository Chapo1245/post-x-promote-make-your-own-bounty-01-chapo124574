// post-x-promote-make-your-own-bounty-01 — entry program.
// Hands the X post in: POST.json from the repo root is copied into the
// output directory, where the house reads it. Stdlib only, no network.
import { cpSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputRoot = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const postFile = "POST.json";

mkdirSync(outputRoot, { recursive: true });
cpSync(join(repoRoot, postFile), join(outputRoot, postFile));
console.log(`POST.json copied to ${join(outputRoot, postFile)}`);
// The post's own replies, reposts and quotes decide the places; nothing
// this program writes about the post counts, the house reads the post itself.
