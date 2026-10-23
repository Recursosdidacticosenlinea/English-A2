# CAA English A2 — notes for Claude Code

Static website (no build step) of 50 self-access English units for level A2, CAA Virtual (BUAP self-access center).
Units are grouped in 10 modules of 5, built on the CEFR A2 descriptors. Sibling site: CAA English A1 (same engine). B1, B2 and C1–C2 are planned.
Same engine as CAA English Practice (`~/Documents/CAA VIRTUAL REP/caa-english-48-unidades`).
The owner is Angelica, an English teacher. Talk to her in Spanish; all student-facing content is in English.

## Structure
- `index.html` — home page. `UNITS` lists every unit (`n`, `mod`, title, focus, url); `MODULES` has each module's name and CEFR can-do.
- `assets/unit.js` + `assets/unit.css` — shared engine. Each unit folder has an identical `index.html` that loads
  `../assets/config.js`, its own `data.js` (`window.UNIT = {...}`), then `../assets/unit.js`.
- `assets/config.js` — `writingEndpoint` (Google Apps Script web app URL), `speakingPlatformName/Url`, `homeUrl`.
- `_template/` — copy to start a new unit. `tools/writing-collector.gs` — Apps Script that stores writing submissions.
- Each `data.js` has `number` (1–50), shown in the unit header as "Unit N · A2".
- Grammar progression: A1 grammar is assumed; A2 structures (used to, present perfect, passive, first conditional, might) are introduced in their own units.

## Conventions (keep them)
- Five steps per unit, IDs `mainsec-0` … `mainsec-4`; skill tabs `actsec-list`, `actsec-read`, `actsec-writ`, `actsec-spea`.
  Never use generic IDs like `id="presentation"`.
- Vary activity types; avoid repetitive multiple choice. Types: match (right-hand answers must be unique), sort, gap (`[[answer|alt]]`),
  tiles, rewrite, tf, write, speak, repeat.
- Speaking activity 1 in every unit is `repeat` (6 short sentences from the unit, `items: [...]`): TTS plays each sentence and the
  browser's SpeechRecognition scores it (`scoreSpeech` in unit.js: normalizes contractions, numbers and homophones, then matches words
  in order; 70% passes). Browsers without SpeechRecognition (Firefox) get listen + record + "I practiced" instead.
  Speaking activity 2 is a `speak` solo recording (the evidence). Keep repeat sentences short (3–10 words) and avoid proper names.
- Every unit: 4 objectives, 6 can-do statements rated 1–5, each with a `review` hint.
- Each `slug` in `data.js` must equal its folder name (saved progress: `localStorage["a2:" + slug]`).
- Speaker voices: give every speaker a gender in `speakers: { "Name": "f" | "m" }` in data.js.
- Colors are CSS tokens with light and dark themes; keep the home page and units on the same palette.

## Deploying
Angelica uploads through the GitHub website, which accepts at most 100 files per upload, so the site is shipped in two zips:
part 1 = everything except units 26–50; part 2 = units 26–50 (by number in index.html). With `gh`: `git init && git add -A && git commit -m "CAA English A2"`,
`gh repo create caa-english-a2 --public --source=. --push` (ask for the repo name first), then enable Pages on `main` / root.
`.nojekyll` is present so `_template/` is served as is.

## Checking changes
- No Node on Angelica's Mac: check a data.js with `osascript -l JavaScript` (evaluate it with `new Function("window", src)`).
- Open a unit with a local server (`python3 -m http.server`) and click through all five steps and four skills.
