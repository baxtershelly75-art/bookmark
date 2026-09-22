# Bookmark — approved design and build status

Public name: **Shelly’s Bible Notes**. Subtitle: **Living Bookmark**. Internal repository name: **Bookmark**.

## Design authority

Google Drive is the durable source of truth for continuity. Read **MASTER CONTINUITY — READ FIRST** and **BIBLE PROJECT - MASTER CONTINUITY** before substantial build work. Slack is legacy/secondary history only; no current workflow should depend on a successful Slack write.

Genesis 31 remains the approved early structural prototype for chapter-card flow and interaction. **Galatians 1–6 is the current content-depth benchmark for all new Bible work.** Historical Slack references may still be consulted when an older approved design detail must be recovered or a conflict resolved:

- [Genesis 31 prototype](https://chicken-mkz9241.slack.com/archives/C0C1KHVSN01/p1790003630184499)
- [Chapter-card approval](https://chicken-mkz9241.slack.com/archives/C0C1KHVSN01/p1790004564256239)
- [Visual approval](https://chicken-mkz9241.slack.com/archives/C0C1KHVSN01/p1790005309000789)
- [Home-screen approval](https://chicken-mkz9241.slack.com/archives/C0C1KHVSN01/p1790005775814029)
- [Find a Verse approval](https://chicken-mkz9241.slack.com/archives/C0C1KHVSN01/p1790005956523619)

## Reader flow

1. The reader uses their own Bible; never display whole chapters in the interface.
2. Enter chapters by free text or book/chapter menus. A range becomes separate cards. Preserve entry order; do not impose a two-chapter limit.
3. Each card first invites reading in one's own Bible. Only **I finished reading — show my notes** reveals the card.
4. Card order: chapter in one sentence; **Worth writing down**; **Notice this**; explained cross-references beside relevant notes; reflection questions; optional **Commentary**; **I have a question**; **Mark as Read**.
5. Mark as Read collapses the card to a read status with Undo. A next-chapter button is voluntary; never automatically advance or change a different card's status.
6. No accounts, streaks, quotas, or journal. Save the queue and read state on the reader's device.
7. Find a Verse is global, separate from the queue. Support exact wording and remembered ideas; label results as possible matches, show KJV verse text and address, copy text with address and KJV, and allow Show more / Back to reading. Searching does not affect completion.

## Content and sources

- Very short, useful, verse-linked margin notes. Teach one small thing. **Worth writing down stays truly margin-sized. Galatians 1–6 is the depth benchmark: Notice this may briefly unpack wording, historical setting, biblical theology, translation questions, interpretive limits, cross-Scripture connections, and common misuse when those details genuinely clarify the text. Commentary may likewise breathe for a couple of plain-English sentences after the short historical quote, but still must not become a wall of text.** Keep supplemental commentary collapsed. Cross-references need a reason and never claim a thematic echo is a direct quotation. Preserve real biblical, theological, historical, and textual depth, but write in Shelly’s natural voice: thoughtful, informed, plainspoken, and direct. Do not dumb the material down, and do not sound academic or pontificating. Technical terms are welcome when they genuinely help, but explain them naturally in the same note. The test is whether Shelly could plausibly have written the note beside her Bible after studying the passage; if the substance is deep but the wording does not sound like her, rewrite the wording—not the depth.
- KJV verse previews come from the [farskipper/kjv 1769 electronic text](https://github.com/farskipper/kjv), pinned in `app.js`. Quote only a verse or smallest relevant range in the interface.
- Older historical voices may include Charles Spurgeon, Matthew Henry, John Gill, J. C. Ryle, John Calvin, Alexander Maclaren, F. B. Meyer, George Müller, Andrew Murray, and other appropriate older evangelical Protestant writers when an original, identifiable source truly fits.
- Do **not** default to Matthew Henry and Spurgeon. Use a broad, passage-appropriate mix of trustworthy historical commentators and theologians. Choose the writer who genuinely illuminates the text rather than forcing a preferred name into every chapter.
- For historical commentary: exact short quote, identified author and work, clickable source when possible, and **In plain English** explanation. Never silently modernize a quote.
- Scripture leads. Treat painful passages plainly and gently; record of sin is not approval. If two Christian readings genuinely help, explain very briefly without debate.
- Pastor Brian's YouTube sermon quotations remain **permission requested, awaiting response**. Do not publish his words until Shelly confirms permission and the exact excerpt is verified against stable audio with a timestamp and citation.

## Collection and current state

Current published study collection: Genesis 1–50; Psalms 1–150; **Hosea, Joel, Amos, Obadiah, Jonah, Micah, Nahum, Habakkuk, Zephaniah, Haggai, and Malachi**; and **all New Testament letters Romans–Jude** — **374 carefully developed chapter cards**. This remains a quality responsibility, not a speed target. The interface supports queueing any Bible chapter.

**Genesis 1–50, Psalms 1–150, Hosea, Joel, Amos, Obadiah, Jonah, Micah, Nahum, Habakkuk, Zephaniah, Haggai, Malachi, and all New Testament letters Romans–Jude are published on `main`.** The final letters wave, James through Jude, merged through PR #17 at commit `d5fd4a97db9e904a42f77566fd571c07f0ce0c1a`; GitHub Pages run `35741806121` completed successfully on that exact commit.

Genesis 31 remains the early structural prototype; Galatians 1–6 is the content-depth benchmark. Published content has passed module syntax/runtime, required-field, loader-order, short-quotation-length, and clickable cross-reference-format checks before publication. Durable checkpoints belong in Drive, not Slack. The old long research modules are preserved as source drafts but are not presented as daily cards.

**Psalms complete and published:** Psalms 121–150 passed JavaScript syntax/runtime, required-field, clickable verse-reference, loader, source-link, short-quotation, voice/jargon, and commentary-balance checks. Split whole-book assembly audits confirm Psalms 1–50, 51–100, and 101–150 load with no gaps. Commentary across Psalms 121–150 uses a broad passage-specific mix: Matthew Henry 6, C. H. Spurgeon 5, John Calvin 5, John Gill 5, Albert Barnes 3, F. B. Meyer 2, Alexander Maclaren 2, plus Thomas Manton and Joseph Benson. Shelly gave final approval with 🐿️; PR #7 merged at `b04a9a3e9f1efcb849480ad19ec64cc76bcf9371`, and the matching GitHub Pages deployment completed successfully.

**Galatians published:** all six Galatians cards use the new default depth standard Shelly approved: truly short **Worth writing down** notes, **Notice this** with one compact extra layer of context/argument/wording/history, and slightly fuller plain-English commentary without walls of text. The six-card audit passed JavaScript syntax/runtime, required-field, clickable verse-reference, source-link, short-quotation, and voice/jargon checks. Shelly approved with 🐿️; PR #8 merged at `23d82dd0777865fc88486eb6af28e36bff01d3bb`, and the matching GitHub Pages deployment completed successfully.

**New Testament letters complete and published:** Shelly authorized continuous manual work through the remaining letters without per-book approval stops. The Galatians depth standard remained locked: truly short **Worth writing down** notes, deeper but phone-readable **Notice this**, slightly fuller plain-English commentary, no walls of text, and honest uncertainty where faithful Christian interpretation is genuinely divided. Final assembled audits on `main` confirm **121/121 letter chapters** with no gaps or runtime errors: Romans–2 Corinthians 45/45; Galatians–Philemon 42/42; Hebrews–Jude 34/34. The live `index.html` includes all required loaders, including Hebrews and James–Jude, and its availability line correctly says the New Testament letters Romans–Jude are ready. Final publication was verified by GitHub Pages run `35741806121` on commit `d5fd4a97db9e904a42f77566fd571c07f0ce0c1a`.


**Minor Prophets — first short-book wave:** Obadiah (1 chapter), Haggai (2), Joel (3), Nahum (3), Habakkuk (3), and Zephaniah (3) were built at the Galatians depth standard as the first shortest-to-longest Minor Prophets wave. Difficult or commonly misused passages receive explicit context guardrails, including Obadiah’s date uncertainty, Haggai 2:7, Joel 2:25 and 3:14, Nahum’s judgment imagery, Habakkuk 2:2–4, and Zephaniah 3:17. The 4-chapter wave adds Jonah 1–4 and Malachi 1–4 at the same Galatians depth standard. Micah 1–7 is the next completed wave, preserving its judgment/restoration structure, Bethlehem prophecy, justice themes, and common-context guardrails. Amos 1–9 is complete. Hosea 1–14 is the next completed wave, preserving the marriage/covenant imagery, New Testament reuse, difficult judgment texts, and the book’s final healing-and-return movement. The final planned Minor Prophets step is Zechariah 1–14 after Hosea is audited and publication is verified.

Visual style: quiet study Bible; warm cream paper, dark brown body text, burgundy headings, forest-green actions, antique-gold accents, readable phone typography and large word-labeled controls. Public site: https://baxtershelly75-art.github.io/bookmark/ .
