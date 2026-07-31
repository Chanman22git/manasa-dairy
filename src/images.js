/* Photography slots, carried over from the design handoff.
 *
 * IMPORTANT — these are Unsplash *placeholders*, exactly as delivered in the
 * handoff bundle. The handoff's own instruction stands: replace every entry
 * below with Manasa's real photography before launch. The ghee and paneer
 * shots in particular are approximations, not the actual product.
 *
 * Each slot keeps its stable handoff id (md-hero, md-p1 …) so real shots can
 * be dropped in one line at a time. To swap: change `src` to the new asset
 * (e.g. "/photos/hero.jpg") and clear `credit`/`href`.
 */

const u = (id, w) =>
  `https://images.unsplash.com/photo-${id}?fm=jpg&q=70&w=${w}&auto=format&fit=crop`;

export const IMAGES = {
  "md-hero": {
    src: u("1440428099904-c6d459a7e7b5", 1400),
    alt: "Dairy cattle grazing on open pasture at first light.",
    // landscape shot in a portrait box — bias the crop down onto the herd
    pos: "center 72%",
    credit: "Photo by Leon Ephraïm on Unsplash",
    href: "https://unsplash.com/@leonephraim",
  },
  /* the hero's second frame — Manasa's own asset, so no credit line */
  "md-hero-glass": {
    // BASE_URL, not a bare "/" — the site is served under /manasa-dairy/
    src: `${import.meta.env.BASE_URL}manasa-glass.jpg`,
    alt: "A branded Manasa Dairy glass, filled to the brim with fresh milk.",
  },
  "md-story": {
    src: u("1626561921730-200b9a3ecc95", 1200),
    alt: "Founder with farmers at a village collection point.",
    credit: "Photo by caroline gunderson on Unsplash",
    href: "https://unsplash.com/@cgunderson",
  },
  "md-plant": {
    // handoff placeholder here was a supermarket dairy aisle full of
    // competitor packaging — wrong for a manufacturing page
    src: u("1689348745037-21adeb31dd2a", 1600),
    alt: "Plant floor — stainless processing tanks and pipework.",
    pos: "center 45%",
    credit: "Photo by iwin on Unsplash",
    href: "https://unsplash.com/@mono_log",
  },
  "md-about": {
    src: u("1636998980792-63f27ddea4e3", 1200),
    alt: "Portrait — the founder at a village collection centre.",
    credit: "Photo by Suvrajit S on Unsplash",
    href: "https://unsplash.com/@fotobee",
  },
  "md-farmer": {
    src: u("1571938574727-cd5ea31dafbd", 1200),
    alt: "Farmer household with cattle, early morning.",
    credit: "Photo by Oriol Pascual on Unsplash",
    href: "https://unsplash.com/@oriolpascual",
  },
  "md-map": {
    // handoff placeholder here was a close-up of cattle — it sits under
    // "Find us", where a cow photo reads as a broken map
    src: u("1775119249927-b669c9470bc5", 1600),
    alt: "Farmland across the collection belt, from above.",
    credit: "Photo by Barbare Kacharava on Unsplash",
    href: "https://unsplash.com/@babikacharava",
  },

  /* categories */
  "md-cat-milk": {
    src: u("1639151082235-406d8eb262b9", 1000),
    alt: "Milk pouches and cans on the loading dock.",
    credit: "Photo by Mary Skrynnikova on Unsplash",
    href: "https://unsplash.com/@mary_skr",
  },
  "md-cat-ghee": {
    // handoff placeholder here was a jar of milk, not ghee
    src: u("1573812461383-e5f8b759d12e", 1000),
    alt: "Ghee in an open jar with a spoon.",
    credit: "Photo by Megumi Nachev on Unsplash",
    href: "https://unsplash.com/@meguminachev",
  },
  "md-cat-fresh": {
    src: u("1635407862451-58962c048a76", 1000),
    alt: "A block of fresh white cheese on a wooden board.",
    credit: "Photo by Aleksey Melkomukov on Unsplash",
    href: "https://unsplash.com/@alldiz",
  },

  /* the nine SKUs */
  "md-p1": { src: u("1550583724-b2692b85b150", 900), alt: "Toned milk pouches.", credit: "Photo by Eiliv Aceron on Unsplash", href: "https://unsplash.com/@shootdelicious" },
  "md-p2": { src: u("1601436423474-51738541c1b1", 900), alt: "Full cream milk pouch.", credit: "Photo by Sandi Benedicta on Unsplash", href: "https://unsplash.com/@sendun" },
  "md-p3": { src: u("1611211301828-be4b317d0707", 900), alt: "Standardised milk can.", credit: "Photo by engin akyurt on Unsplash", href: "https://unsplash.com/@enginakyurt" },
  "md-p4": { src: u("1596151163116-98a5033814c2", 900), alt: "Double toned milk pouch.", credit: "Photo by an_vision on Unsplash", href: "https://unsplash.com/@anvision" },
  /* md-p5 … md-p9 — the handoff's own placeholders for ghee, paneer, curd and
     butter all showed milk imagery (a jar of milk, milk and cookies, a bottling
     line). Swapped for free-licence shots that at least depict the right
     product. Still placeholders: replace with Manasa's own product shots. */
  "md-p5": { src: u("1573812461383-e5f8b759d12e", 900), alt: "Ghee in an open jar with a spoon.", credit: "Photo by Megumi Nachev on Unsplash", href: "https://unsplash.com/@meguminachev" },
  "md-p6": { src: u("1601232265936-6da280cff563", 900), alt: "Clarified butter in a glass jar.", credit: "Photo by M Draa on Unsplash", href: "https://unsplash.com/@nouvellebeautybymarion" },
  "md-p7": { src: u("1635407862451-58962c048a76", 900), alt: "A block of fresh white cheese on a board.", credit: "Photo by Aleksey Melkomukov on Unsplash", href: "https://unsplash.com/@alldiz" },
  "md-p8": { src: u("1571212515416-fef01fc43637", 900), alt: "Thick set curd in a bowl with a spoon.", credit: "Photo by Micheile Henderson on Unsplash", href: "https://unsplash.com/@micheile" },
  // unbranded — an earlier candidate turned out to be a Kerrygold pack
  "md-p9": { src: u("1719148162837-63d2f256231f", 900), alt: "A pat of unsalted butter on a white plate.", credit: "Photo by Marine Le Gac on Unsplash", href: "https://unsplash.com/@plustrenn" },
};

/* slot ids in page order, for the products grid */
export const PRODUCT_SLOTS = ["md-p1", "md-p2", "md-p3", "md-p4", "md-p5", "md-p6", "md-p7", "md-p8", "md-p9"];
