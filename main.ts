// One-line joke about working beside AI coding agents.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My AI agent crashed the live demo, wrote a flawless postmortem in four seconds, and listed the root cause as \"human in the loop.\"";

// The demo is the setup, the postmortem is the punchline: keep it to one line.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke.trim());
