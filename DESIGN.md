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

- Very short, useful, verse-linked margin notes. Teach one small thing. **Worth writing down stays truly margin-sized. Notice this may go one compact layer deeper—usually a few clear sentences of context, argument, wording, history, or interpretive help when it genuinely helps the reader see the text. Commentary may likewise breathe for a couple of plain-English sentences after the short historical quote, but still must not become a wall of text.** Keep supplemental commentary collapsed. Cross-references need a reason and never claim a thematic echo is a direct quotation. Preserve real biblical, theological, historical, and textual depth, but write in Shelly’s natural voice: thoughtful, informed, plainspoken, and direct. Do not dumb the material down, and do not sound academic or pontificating. Technical terms are welcome when they genuinely help, but explain them naturally in the same note. The test is whether Shelly could plausibly have written the note beside her Bible after studying the passage; if the substance is deep but the wording does not sound like her, rewrite the wording—not the depth.
- KJV verse previews come from the [farskipper/kjv 1769 electronic text](https://github.com/farskipper/kjv), pinned in `app.js`. Quote only a verse or smallest relevant range in the interface.
- Older historical voices may include Charles Spurgeon, Matthew Henry, John Gill, J. C. Ryle, John Calvin, Alexander Maclaren, F. B. Meyer, George Müller, Andrew Murray, and other appropriate older evangelical Protestant writers when an original, identifiable source truly fits.
- Do **not** default to Matthew Henry and Spurgeon. Use a broad, passage-appropriate mix of trustworthy historical commentators and theologians. Choose the writer who genuinely illuminates the text rather than forcing a preferred name into every chapter.
- For historical commentary: exact short quote, identified author and work, clickable source when possible, and **In plain English** explanation. Never silently modernize a quote.
- Scripture leads. Treat painful passages plainly and gently; record of sin is not approval. If two Christian readings genuinely help, explain very briefly without debate.
- Pastor Brian's YouTube sermon quotations remain **permission requested, awaiting response**. Do not publish his words until Shelly confirms permission and the exact excerpt is verified against stable audio with a timestamp and citation.

## Collection and current state

Approved collection through the completed Psalms checkpoint: Genesis 1–50; Psalms 1–150; John; Galatians; Ephesians; Philippians; Colossians; James; Hebrews — **259 carefully developed cards**, not a speed target. Shelly approved the Psalm 120 checkpoint and authorized completion of the Psalter through Psalm 150. The interface supports queueing any Bible chapter.

**Genesis 1–50, Psalms 1–150, and Galatians 1–6 are published on `main`.** Galatians received Shelly’s 🐿️ approval and merged through PR #8 at commit `23d82dd0777865fc88486eb6af28e36bff01d3bb`; the matching GitHub Pages deployment completed successfully.

Genesis 31 remains the benchmark card. Published content has passed module syntax/runtime, required-field, loader-order, short-quotation-length, and clickable cross-reference-format checks before publication. Durable checkpoints belong in Drive, not Slack. The old long research modules are preserved as source drafts but are not presented as daily cards.

**Psalms complete and published:** Psalms 121–150 passed JavaScript syntax/runtime, required-field, clickable verse-reference, loader, source-link, short-quotation, voice/jargon, and commentary-balance checks. Split whole-book assembly audits confirm Psalms 1–50, 51–100, and 101–150 load with no gaps. Commentary across Psalms 121–150 uses a broad passage-specific mix: Matthew Henry 6, C. H. Spurgeon 5, John Calvin 5, John Gill 5, Albert Barnes 3, F. B. Meyer 2, Alexander Maclaren 2, plus Thomas Manton and Joseph Benson. Shelly gave final approval with 🐿️; PR #7 merged at `b04a9a3e9f1efcb849480ad19ec64cc76bcf9371`, and the matching GitHub Pages deployment completed successfully.

**Galatians published:** all six Galatians cards use the new default depth standard Shelly approved: truly short **Worth writing down** notes, **Notice this** with one compact extra layer of context/argument/wording/history, and slightly fuller plain-English commentary without walls of text. The six-card audit passed JavaScript syntax/runtime, required-field, clickable verse-reference, source-link, short-quotation, and voice/jargon checks. Shelly approved with 🐿️; PR #8 merged at `23d82dd0777865fc88486eb6af28e36bff01d3bb`, and the matching GitHub Pages deployment completed successfully.

Visual style: quiet study Bible; warm cream paper, dark brown body text, burgundy headings, forest-green actions, antique-gold accents, readable phone typography and large word-labeled controls. Public site: https://baxtershelly75-art.github.io/bookmark/ .
