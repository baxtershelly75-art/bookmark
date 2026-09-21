# Bookmark — approved design and build status

Public name: **Shelly’s Bible Notes**. Subtitle: **Living Bookmark**. Internal repository name: **Bookmark**.

## Design authority

The numbered decisions in the existing private `#chicken-scratch` room and the approved Genesis 31 written prototype govern the experience. Relevant references:

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
- Older historical voices may include Spurgeon, George Müller, Matthew Henry, J. C. Ryle, Alexander Maclaren, F. B. Meyer, and Andrew Murray where an original, identifiable source truly fits. Exact short quote, identified author and work, clickable source, and **In plain English** explanation. Never silently modernize a quote.
- Scripture leads. Treat painful passages plainly and gently; record of sin is not approval. If two Christian readings genuinely help, explain very briefly without debate.
- Pastor Brian's YouTube sermon quotations remain **permission requested, awaiting response**. Do not publish his words until Shelly confirms permission and the exact excerpt is verified against stable audio with a timestamp and citation.

## Collection and current state

Approved collection: Genesis 1–50; Psalms 1–30; John; Galatians; Ephesians; Philippians; Colossians; James; Hebrews — **139 carefully developed cards**, not a speed target. The interface supports queueing any Bible chapter. Fully authored cards currently ready: Genesis 1–7, Genesis 31, and Psalm 1. All other chapters explicitly say that notes are in progress. The old long research modules are preserved as source drafts but are not presented as daily cards.

Visual style: quiet study Bible; warm cream paper, dark brown body text, burgundy headings, forest-green actions, antique-gold accents, readable phone typography and large word-labeled controls. Public site: https://baxtershelly75-art.github.io/bookmark/ .
