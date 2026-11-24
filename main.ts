// Make the AI Judge Laugh: Cat Reviews Its Human — entry program.
//
// Writes a single line to /output/entry.txt: a one-star review written
// by a house cat about its human. One line, 128 characters, no trailing
// newline. Runs fully offline: only node:fs, no network, no randomness,
// no clock.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star. He moved my box to make room for his 'standing desk', then stood on it himself for six minutes and called it exercise.";

// The entry is a single line: 128 characters, 1-200 per the gate,
// printable ASCII only. The two beats: the box moved for a
// "standing desk" (setup), then the human standing on the box himself
// for six minutes and calling it exercise (sting, in the last words).
const line = ENTRY.trim();
if (!/^[\x20-\x7e]+$/.test(line)) {
  throw new Error("entry must be printable ASCII");
}
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry length ${line.length} outside gate 1-200`);
}
if (line.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote /output/entry.txt (${line.length} chars)`);
