# Bookmark — approved design and build status

Public name: **Shelly’s Bible Notes**. Subtitle: **Living Bookmark**. Internal repository name: **Bookmark**.

## Design authority

Google Drive is the durable source of truth for continuity. Read **MASTER CONTINUITY — READ FIRST** and **BIBLE PROJECT - MASTER CONTINUITY** before substantial build work. Slack is legacy/secondary history only; no current workflow should depend on a successful Slack write.

The approved Genesis 31 written prototype remains the chapter-card benchmark. Historical Slack references may still be consulted when an older approved design detail must be recovered or a conflict resolved:

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

- Very short, useful, verse-linked margin notes. Teach one small thing. Keep supplemental commentary collapsed. Cross-references need a reason and never claim a thematic echo is a direct quotation. Preserve real biblical, theological, historical, and textual depth, but write in Shelly’s natural voice: thoughtful, informed, plainspoken, and direct. Do not dumb the material down, and do not sound academic or pontificating. Technical terms are welcome when they genuinely help, but explain them naturally in the same note. The test is whether Shelly could plausibly have written the note beside her Bible after studying the passage; if the substance is deep but the wording does not sound like her, rewrite the wording—not the depth.
- KJV verse previews come from the [farskipper/kjv 1769 electronic text](https://github.com/farskipper/kjv), pinned in `app.js`. Quote only a verse or smallest relevant range in the interface.
- Older historical voices may include Charles Spurgeon, Matthew Henry, John Gill, J. C. Ryle, John Calvin, Alexander Maclaren, F. B. Meyer, George Müller, Andrew Murray, and other appropriate older evangelical Protestant writers when an original, identifiable source truly fits.
- Do **not** default to Matthew Henry and Spurgeon. Use a broad, passage-appropriate mix of trustworthy historical commentators and theologians. Choose the writer who genuinely illuminates the text rather than forcing a preferred name into every chapter.
- For historical commentary: exact short quote, identified author and work, clickable source when possible, and **In plain English** explanation. Never silently modernize a quote.
- Scripture leads. Treat painful passages plainly and gently; record of sin is not approval. If two Christian readings genuinely help, explain very briefly without debate.
- Pastor Brian's YouTube sermon quotations remain **permission requested, awaiting response**. Do not publish his words until Shelly confirms permission and the exact excerpt is verified against stable audio with a timestamp and citation.

## Collection and current state

Approved collection through the current checkpoint: Genesis 1–50; Psalms 1–120; John; Galatians; Ephesians; Philippians; Colossians; James; Hebrews — **229 carefully developed cards**, not a speed target. Shelly approved the Psalm 80 checkpoint with 🐿️ and authorized the next forty Psalms through Psalm 120. The interface supports queueing any Bible chapter.

**Genesis 1–50 and Psalms 1–80 are published on `main`.** Psalms 41–80 were approved at the Psalm 80 checkpoint and merged through PR #5 at commit `767c3804369a0a679cf15ee2358f4e4af7e2411c`; the matching GitHub Pages deployment completed successfully.

Genesis 31 remains the benchmark card. Published content has passed module syntax/runtime, required-field, loader-order, short-quotation-length, and clickable cross-reference-format checks before publication. Durable checkpoints belong in Drive, not Slack. The old long research modules are preserved as source drafts but are not presented as daily cards.

**Psalm 120 checkpoint:** protected branch `psalms-81-120` contains authored cards for Psalms 81–120 in eight five-psalm modules. The full block passed JavaScript syntax/runtime, required-field, clickable verse-reference, loader, source-link, short-quotation, voice, and commentary-balance checks. Split assembly audits confirm Psalms 1–60 and Psalms 61–120 load without gaps. Commentary across Psalms 81–120 uses a broad passage-specific mix: C. H. Spurgeon 8, Matthew Henry 7, John Gill 6, John Calvin 4, Albert Barnes 4, Joseph Benson 4, Alexander Maclaren 3, plus Richard Cecil, B. M. Duncan, Le Blanc, and George Horne. This branch remains off live `main` pending Shelly’s Psalm 120 checkpoint review.

Visual style: quiet study Bible; warm cream paper, dark brown body text, burgundy headings, forest-green actions, antique-gold accents, readable phone typography and large word-labeled controls. Public site: https://baxtershelly75-art.github.io/bookmark/ .
