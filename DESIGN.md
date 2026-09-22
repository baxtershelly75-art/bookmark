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

- Very short, useful, verse-linked margin notes. Teach one small thing. Keep supplemental commentary collapsed. Cross-references need a reason and never claim a thematic echo is a direct quotation.
- KJV verse previews come from the [farskipper/kjv 1769 electronic text](https://github.com/farskipper/kjv), pinned in `app.js`. Quote only a verse or smallest relevant range in the interface.
- Older historical voices may include Charles Spurgeon, Matthew Henry, John Gill, J. C. Ryle, John Calvin, Alexander Maclaren, F. B. Meyer, George Müller, Andrew Murray, and other appropriate older evangelical Protestant writers when an original, identifiable source truly fits.
- Do **not** default to Matthew Henry and Spurgeon. Use a broad, passage-appropriate mix of trustworthy historical commentators and theologians. Choose the writer who genuinely illuminates the text rather than forcing a preferred name into every chapter.
- For historical commentary: exact short quote, identified author and work, clickable source when possible, and **In plain English** explanation. Never silently modernize a quote.
- Scripture leads. Treat painful passages plainly and gently; record of sin is not approval. If two Christian readings genuinely help, explain very briefly without debate.
- Pastor Brian's YouTube sermon quotations remain **permission requested, awaiting response**. Do not publish his words until Shelly confirms permission and the exact excerpt is verified against stable audio with a timestamp and citation.

## Collection and current state

Approved collection: Genesis 1–50; Psalms 1–40; John; Galatians; Ephesians; Philippians; Colossians; James; Hebrews — **149 carefully developed cards**, not a speed target. Shelly explicitly extended the current Psalms run through Psalm 40 and requested a review checkpoint there. The interface supports queueing any Bible chapter.

**Genesis 1–50 and Psalms 1–10 are published on `main`.** Psalms 6–10 were approved when Shelly instructed Miles to continue in the same manner through Psalm 40, then merged through PR #3 at commit `c8675fca7f2b05b14e108c2f4c78f1caf9383980`.

Genesis 31 remains the benchmark card. Published content has passed module syntax/runtime, required-field, loader-order, short-quotation-length, and clickable cross-reference-format checks before publication. Durable checkpoints belong in Drive, not Slack. The old long research modules are preserved as source drafts but are not presented as daily cards.

**Psalm 40 checkpoint:** protected branch `psalms-11-40` contains authored cards for Psalms 11–40. Six five-psalm module checkpoints passed syntax/runtime, required-field, verse-reference, loader, source-link, and short-quotation checks. Commentary distribution across Psalms 11–40: Matthew Henry 6, John Gill 6, C. H. Spurgeon 6, Alexander Maclaren 6, John Calvin 4, F. B. Meyer 2. This branch remains off live `main` pending Shelly’s Psalm 40 checkpoint review.

Visual style: quiet study Bible; warm cream paper, dark brown body text, burgundy headings, forest-green actions, antique-gold accents, readable phone typography and large word-labeled controls. Public site: https://baxtershelly75-art.github.io/bookmark/ .
