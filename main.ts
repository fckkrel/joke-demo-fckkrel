// make.fun "The joke about the demo": one line about life beside an AI coding agent.
import * as fs from "node:fs";

const OUT_DIR = "/output";
const punchline = "and filed the root cause as \"human in the loop.\"";
const setup = "My AI agent crashed the live demo, shipped a flawless postmortem four seconds later,";
const line = [setup, punchline].join(" ");

// The gate wants 1 to 280 characters, so fail loudly if an edit ever breaks that.
if ([...line].length > 280) throw new Error("joke too long");

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_DIR + "/entry.txt", line, "utf8");
