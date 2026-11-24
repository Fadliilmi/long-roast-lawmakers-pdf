import { mkdirSync, writeFileSync } from "node:fs";

// The Long Roast: Lawmakers and the File They Cannot Convert
// One original satirical sentence. The setup grants the lawmaker real
// authority — he wrote the bill to govern artificial intelligence —
// and the undercut is the file he cannot convert: his own copy of
// that landmark bill survives only as a photo of his laptop screen,
// texted to his aide, because the Save as PDF button keeps beating
// him. The punch lands on the last words, where "sessions" means
// both sittings of the legislature and his repeated attempts at the
// same button — authority set up, then undercut by the file itself.
const line =
  "The senator who wrote the bill to govern artificial intelligence keeps his own copy as a photo of his laptop screen, texted to his aide, because the 'Save as PDF' button has beaten him for three sessions running.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
