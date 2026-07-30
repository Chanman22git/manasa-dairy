/* All copy from the Manasa Dairy design handoff.
 *
 * i18n: every user-facing string is an { en, te } pair. Render it through
 * `useTx()` / `tx()` from ui.jsx, which unwraps the pair for the active
 * language and passes plain strings through untouched.
 *
 * NOT translated, deliberately:
 *   - postal addresses, phone numbers, email (delivery data, must stay literal)
 *   - licence numbers and standard names (FSSAI, ISO 22000:2018, AGMARK, NABL)
 *   - measurement tokens and units (%, ml, L, kg, MT, °C, SNF, MBRT, HTST, CIP)
 *
 * The Telugu below still needs a native speaker's review before launch —
 * see the note in README.md.
 */

/* Client-supplied contact details (authoritative).
   Address is kept in the client's own capitalisation, verbatim. */
export const PHONE = "+91 70329 96099";
export const PHONE_TEL = "+917032996099";
export const EMAIL = "info@manasadairy.com";
export const ADDRESS_LINES = [
  "PLOT NO:76, SY NO:1109/E,",
  "UPPARIGUDA (V), IBRAHIMPATNAM (M),",
  "R.R DIST",
];
export const ADDRESS = ADDRESS_LINES.join(" ");

export const STATS = [
  { v: "1.8 L", k: { en: "litres processed daily", te: "రోజుకు ప్రాసెస్ చేసే లీటర్లు" }, n: 1.8, suffix: " L" },
  { v: "4,200", k: { en: "supplying households", te: "సరఫరా చేసే కుటుంబాలు" }, n: 4200, suffix: "" },
  { v: "3", k: { en: "processing plants", te: "ప్రాసెసింగ్ ప్లాంట్లు" }, n: 3, suffix: "" },
  { v: "28 yrs", k: { en: "unbroken supply", te: "నిరంతర సరఫరా" }, n: 28, suffix: { en: " yrs", te: " ఏళ్లు" } },
];

export const CATS = [
  {
    key: "milk",
    name: { en: "Milk", te: "పాలు" },
    te: "పాలు",
    blurb: {
      en: "Four fat profiles, pouched or in 10-litre cans, on route by 6 a.m.",
      te: "నాలుగు ఫ్యాట్ స్థాయిలు, పౌచ్‌లలో లేదా 10 లీటర్ల క్యాన్లలో, ఉదయం 6 గంటలకే రవాణాలో.",
    },
    skus: { en: "4 SKUs · 500 ml – 10 L", te: "4 SKUలు · 500 ml – 10 L" },
  },
  {
    key: "ghee",
    name: { en: "Ghee", te: "నెయ్యి" },
    te: "నెయ్యి",
    blurb: {
      en: "Granular, slow-clarified from cultured cream. Tins to 15 kg.",
      te: "కల్చర్డ్ క్రీమ్ నుండి నెమ్మదిగా కాచిన గ్రాన్యులర్ నెయ్యి. 15 కిలోల టిన్ల వరకు.",
    },
    skus: { en: "2 SKUs · 500 ml – 15 kg", te: "2 SKUలు · 500 ml – 15 kg" },
  },
  {
    key: "fresh",
    name: { en: "Fresh", te: "తాజా" },
    te: "తాజా",
    blurb: {
      en: "Paneer, curd and butter made the night before delivery, never frozen.",
      te: "డెలివరీకి ముందు రాత్రి తయారుచేసిన పనీర్, పెరుగు, వెన్న — ఎప్పుడూ ఫ్రోజెన్ కాదు.",
    },
    skus: { en: "3 SKUs · 200 g – 25 kg", te: "3 SKUలు · 200 g – 25 kg" },
  },
];

export const GROUPS = [
  {
    name: { en: "Milk", te: "పాలు" },
    te: "పాలు",
    count: { en: "4 SKUs", te: "4 SKUలు" },
    art: "milk",
    items: [
      {
        name: { en: "Toned Milk", te: "టోన్డ్ మిల్క్" }, teName: "టోన్డ్ మిల్క్",
        spec: { en: "3.0% fat · 8.5% SNF", te: "3.0% ఫ్యాట్ · 8.5% SNF" },
        packs: { en: "500 ml · 1 L pouch · 10 L can", te: "500 ml · 1 L పౌచ్ · 10 L క్యాన్" },
        shelf: { en: "48 hrs at 4°C", te: "4°C వద్ద 48 గంటలు" },
        use: { en: "The everyday tea and coffee line.", te: "రోజువారీ టీ, కాఫీ కోసం." },
      },
      {
        name: { en: "Full Cream Milk", te: "ఫుల్ క్రీమ్ మిల్క్" }, teName: "ఫుల్ క్రీమ్ మిల్క్",
        spec: { en: "6.0% fat · 9.0% SNF", te: "6.0% ఫ్యాట్ · 9.0% SNF" },
        packs: { en: "500 ml · 1 L pouch · 10 L can", te: "500 ml · 1 L పౌచ్ · 10 L క్యాన్" },
        shelf: { en: "48 hrs at 4°C", te: "4°C వద్ద 48 గంటలు" },
        use: { en: "Kheer, rabri, and bakery custards.", te: "ఖీర్, రబ్రీ, బేకరీ కస్టర్డ్‌ల కోసం." },
      },
      {
        name: { en: "Standardised Milk", te: "స్టాండర్డైజ్డ్ మిల్క్" }, teName: "స్టాండర్డైజ్డ్ మిల్క్",
        spec: { en: "4.5% fat · 8.5% SNF", te: "4.5% ఫ్యాట్ · 8.5% SNF" },
        packs: { en: "500 ml · 1 L pouch · 10 L can", te: "500 ml · 1 L పౌచ్ · 10 L క్యాన్" },
        shelf: { en: "48 hrs at 4°C", te: "4°C వద్ద 48 గంటలు" },
        use: { en: "All-purpose kitchen milk.", te: "అన్ని అవసరాలకు వంటగది పాలు." },
      },
      {
        name: { en: "Double Toned Milk", te: "డబుల్ టోన్డ్ మిల్క్" }, teName: "డబుల్ టోన్డ్ మిల్క్",
        spec: { en: "1.5% fat · 9.0% SNF", te: "1.5% ఫ్యాట్ · 9.0% SNF" },
        packs: { en: "500 ml pouch", te: "500 ml పౌచ్" },
        shelf: { en: "48 hrs at 4°C", te: "4°C వద్ద 48 గంటలు" },
        use: { en: "Hospital and canteen contracts.", te: "ఆసుపత్రి, క్యాంటీన్ ఒప్పందాల కోసం." },
      },
    ],
  },
  {
    name: { en: "Ghee", te: "నెయ్యి" },
    te: "నెయ్యి",
    count: { en: "2 SKUs", te: "2 SKUలు" },
    art: "ghee",
    items: [
      {
        name: { en: "Premium Cow Ghee", te: "ఆవు నెయ్యి" }, teName: "ఆవు నెయ్యి",
        spec: { en: "Granular · AGMARK Special", te: "గ్రాన్యులర్ · AGMARK స్పెషల్" },
        packs: { en: "500 ml · 1 L · 5 L tin · 15 kg", te: "500 ml · 1 L · 5 L టిన్ · 15 kg" },
        shelf: { en: "9 months ambient", te: "సాధారణ ఉష్ణోగ్రతలో 9 నెలలు" },
        use: { en: "Sweets, tempering, retail gifting.", te: "స్వీట్లు, తాళింపు, రిటైల్ గిఫ్టింగ్." },
      },
      {
        name: { en: "Buffalo Ghee", te: "గేదె నెయ్యి" }, teName: "గేదె నెయ్యి",
        spec: { en: "High aroma · 99.7% milk fat", te: "అధిక సువాసన · 99.7% మిల్క్ ఫ్యాట్" },
        packs: { en: "1 L · 5 L tin · 15 kg", te: "1 L · 5 L టిన్ · 15 kg" },
        shelf: { en: "9 months ambient", te: "సాధారణ ఉష్ణోగ్రతలో 9 నెలలు" },
        use: { en: "Halwais and heavy frying.", te: "హల్వాయిలు, ఎక్కువ వేపుడు కోసం." },
      },
    ],
  },
  {
    name: { en: "Fresh dairy", te: "తాజా ఉత్పత్తులు" },
    te: "తాజా ఉత్పత్తులు",
    count: { en: "3 SKUs", te: "3 SKUలు" },
    art: "fresh",
    items: [
      {
        name: { en: "Paneer", te: "పనీర్" }, teName: "పనీర్",
        spec: { en: "Block · 22% fat on dry basis", te: "బ్లాక్ · పొడి ప్రాతిపదికన 22% ఫ్యాట్" },
        packs: { en: "200 g · 1 kg · 5 kg block", te: "200 g · 1 kg · 5 kg బ్లాక్" },
        shelf: { en: "7 days at 4°C", te: "4°C వద్ద 7 రోజులు" },
        use: { en: "Holds shape through a tandoor.", te: "తందూర్‌లోనూ ఆకారం చెదరదు." },
      },
      {
        name: { en: "Set Curd", te: "పెరుగు" }, teName: "పెరుగు",
        spec: { en: "Set · 3.0% fat", te: "సెట్ · 3.0% ఫ్యాట్" },
        packs: { en: "400 g cup · 1 kg · 15 kg bucket", te: "400 g కప్ · 1 kg · 15 kg బకెట్" },
        shelf: { en: "10 days at 4°C", te: "4°C వద్ద 10 రోజులు" },
        use: { en: "Thick set, low whey release.", te: "గట్టి సెట్, తక్కువ నీరు." },
      },
      {
        name: { en: "White Butter", te: "వెన్న" }, teName: "వెన్న",
        spec: { en: "Unsalted · 82% fat", te: "ఉప్పు లేనిది · 82% ఫ్యాట్" },
        packs: { en: "500 g · 1 kg · 25 kg carton", te: "500 g · 1 kg · 25 kg కార్టన్" },
        shelf: { en: "4 months frozen", te: "ఫ్రోజెన్‌లో 4 నెలలు" },
        use: { en: "Bakery lamination and ghee-making.", te: "బేకరీ లామినేషన్, నెయ్యి తయారీకి." },
      },
    ],
  },
];

export const STEPS = [
  {
    n: "01",
    t: { en: "Collection", te: "సేకరణ" },
    d: {
      en: "Weighed and tested at the village shed. Fat, SNF, adulterants — before the can leaves.",
      te: "గ్రామ కేంద్రంలోనే తూకం, పరీక్ష. ఫ్యాట్, SNF, కల్తీ — క్యాన్ బయలుదేరక ముందే.",
    },
  },
  {
    n: "02",
    t: { en: "Chilling", te: "చిల్లింగ్" },
    d: {
      en: "To 4°C within ninety minutes at one of 46 bulk coolers across the belt.",
      te: "బెల్ట్‌లోని 46 బల్క్ కూలర్లలో ఒకదానిలో తొంభై నిమిషాల్లోపు 4°C కు.",
    },
  },
  {
    n: "03",
    t: { en: "Processing", te: "ప్రాసెసింగ్" },
    d: {
      en: "Pasteurised, standardised and packed on automated lines with in-line CIP.",
      te: "పాశ్చరైజ్, స్టాండర్డైజ్ చేసి, ఇన్-లైన్ CIP ఉన్న ఆటోమేటెడ్ లైన్లలో ప్యాకింగ్.",
    },
  },
  {
    n: "04",
    t: { en: "Delivery", te: "డెలివరీ" },
    d: {
      en: "Refrigerated vans on fixed slots. Temperature logged at handover, every drop.",
      te: "నిర్ణీత సమయాల్లో రిఫ్రిజిరేటెడ్ వ్యాన్లు. ప్రతి డెలివరీలోనూ ఉష్ణోగ్రత నమోదు.",
    },
  },
];

export const PROTOCOL = [
  {
    n: "01",
    t: { en: "Farm-gate screening", te: "క్షేత్ర స్థాయి పరీక్ష" },
    d: {
      en: "Organoleptic check, lactometer reading and clot-on-boiling at the shed. Rejections are recorded against the collection centre, not the household.",
      te: "గ్రామ కేంద్రంలోనే ఆర్గనోలెప్టిక్ పరీక్ష, లాక్టోమీటర్ రీడింగ్, క్లాట్-ఆన్-బాయిలింగ్. తిరస్కరణలు కుటుంబంపై కాకుండా సేకరణ కేంద్రంపై నమోదవుతాయి.",
    },
  },
  {
    n: "02",
    t: { en: "Adulterant panel", te: "కల్తీ పరీక్షల ప్యానెల్" },
    d: {
      en: "Urea, detergent, starch, neutralisers and maltodextrin — a rotating strip panel on every third can, and on every can from a flagged route.",
      te: "యూరియా, డిటర్జెంట్, స్టార్చ్, న్యూట్రలైజర్లు, మాల్టోడెక్స్‌ట్రిన్ — ప్రతి మూడో క్యాన్‌కు, అనుమానిత రూట్ నుండి వచ్చే ప్రతి క్యాన్‌కు స్ట్రిప్ ప్యానెల్ పరీక్ష.",
    },
  },
  {
    n: "03",
    t: { en: "Bulk chilling", te: "బల్క్ చిల్లింగ్" },
    d: {
      en: "4°C within ninety minutes. Cooler temperature logs are pulled daily; any excursion quarantines the lot.",
      te: "తొంభై నిమిషాల్లోపు 4°C. కూలర్ ఉష్ణోగ్రత లాగ్‌లు రోజూ తనిఖీ చేస్తాం; ఏ తేడా వచ్చినా ఆ లాట్ క్వారంటైన్‌లోకి.",
    },
  },
  {
    n: "04",
    t: { en: "Dock analysis", te: "డాక్ విశ్లేషణ" },
    d: {
      en: "Fat, SNF, acidity, MBRT and antibiotic residue before the tanker is accepted into the silo.",
      te: "ట్యాంకర్‌ను సైలోలోకి స్వీకరించే ముందు ఫ్యాట్, SNF, ఆమ్లత్వం, MBRT, యాంటీబయాటిక్ అవశేషాల పరీక్ష.",
    },
  },
  {
    n: "05",
    t: { en: "Process control", te: "ప్రాసెస్ నియంత్రణ" },
    d: {
      en: "HTST pasteurisation at 72°C for 15 seconds with automatic flow diversion, followed by in-line homogenisation and CIP between runs.",
      te: "ఆటోమేటిక్ ఫ్లో డైవర్షన్‌తో 72°C వద్ద 15 సెకన్ల HTST పాశ్చరైజేషన్; తర్వాత ఇన్-లైన్ హోమోజెనైజేషన్, రన్‌ల మధ్య CIP.",
    },
  },
  {
    n: "06",
    t: { en: "Retained samples", te: "నిల్వ ఉంచిన నమూనాలు" },
    d: {
      en: "One sealed sample per batch, held at 4°C for the full shelf life and re-tested at expiry. Reports available to any buyer on request.",
      te: "ప్రతి బ్యాచ్‌కు ఒక సీల్డ్ నమూనా, పూర్తి షెల్ఫ్ లైఫ్ వరకు 4°C వద్ద ఉంచి గడువు నాటికి మళ్లీ పరీక్ష. కోరిన ఏ కొనుగోలుదారుకైనా నివేదికలు అందుబాటులో.",
    },
  },
];

/* PLANTS — intentionally empty.
 *
 * The handoff listed three plants (Toopran, Siddipet, Gajwel) with capacities,
 * production lines and cold-store tonnages. All three were named after the
 * districts the client has since told us to drop, which makes the capacities
 * attached to them unverified too. Rather than invent replacements, the block
 * is empty and the Quality page hides the whole section while it stays empty.
 *
 * To restore it, add entries in this shape — the page picks them up as-is:
 *   { name: "…", teName: "…",
 *     since: { en: "Commissioned 20XX", te: "20XXలో ప్రారంభం" },
 *     cap:   { en: "00,000 L/day",      te: "00,000 L/రోజు" },
 *     lines: { en: "Milk · Curd",       te: "పాలు · పెరుగు" },
 *     cold:  "000 MT" }
 */
export const PLANTS = [];

export const CERTS = [
  { n: "FSSAI", d: { en: "Licence 10014042000123", te: "లైసెన్స్ 10014042000123" } },
  { n: "ISO 22000:2018", d: { en: "Food safety management", te: "ఆహార భద్రతా నిర్వహణ" } },
  { n: "AGMARK", d: { en: "Ghee, Special grade", te: "నెయ్యి, స్పెషల్ గ్రేడ్" } },
  { n: "NABL", d: { en: "Partner laboratory testing", te: "భాగస్వామ్య ప్రయోగశాల పరీక్షలు" } },
];

export const TIMELINE = [
  {
    y: "1998",
    d: {
      en: "K. Rajeshwar Rao begins collecting from eleven households and selling to highway tea shops.",
      te: "కె. రాజేశ్వర్ రావు పదకొండు కుటుంబాల నుండి పాలు సేకరించి, హైవే టీ దుకాణాలకు అమ్మడం ప్రారంభించారు.",
    },
  },
  {
    y: "2004",
    d: {
      en: "First processing plant commissioned. Pouch milk reaches the wholesale market for the first time.",
      te: "మొదటి ప్రాసెసింగ్ ప్లాంట్ ప్రారంభం. పౌచ్ పాలు తొలిసారి హోల్‌సేల్ మార్కెట్‌కు చేరాయి.",
    },
  },
  {
    y: "2013",
    d: {
      en: "A dedicated paneer line opens after demand from hotel kitchens.",
      te: "హోటల్ వంటశాలల డిమాండ్ మేరకు ప్రత్యేక పనీర్ లైన్ ప్రారంభం.",
    },
  },
  {
    y: "2021",
    d: {
      en: "A new ghee unit and a 46-cooler collection network bring daily intake past 1.8 lakh litres.",
      te: "కొత్త నెయ్యి యూనిట్, 46 కూలర్ల సేకరణ నెట్‌వర్క్‌తో రోజువారీ సేకరణ 1.8 లక్షల లీటర్లు దాటింది.",
    },
  },
];

/* One office — the client-supplied address. The handoff's other two entries
   (a Hyderabad sales floor and a Siddipet plant desk) came with their own
   invented addresses and phone numbers, so they are gone rather than guessed at.
   Add more entries here and the Contact page lays them out automatically. */
export const OFFICES = [
  {
    kind: { en: "Head office", te: "ప్రధాన కార్యాలయం" },
    city: { en: "Ibrahimpatnam", te: "ఇబ్రహీంపట్నం" },
    addrLines: ADDRESS_LINES,
    phone: PHONE,
    phoneTel: PHONE_TEL,
    email: EMAIL,
  },
];

export const NEXT_STEPS = [
  { n: "01", d: { en: "We confirm route availability for your area — usually the same day.", te: "మీ ప్రాంతానికి రూట్ అందుబాటును నిర్ధారిస్తాం — సాధారణంగా అదే రోజు." } },
  { n: "02", d: { en: "A rate card is sent against your indicated volumes and pack sizes.", te: "మీరు తెలిపిన పరిమాణాలు, ప్యాక్ సైజుల ఆధారంగా ధరల జాబితా పంపుతాం." } },
  { n: "03", d: { en: "Samples are delivered free for tasting and yield testing.", te: "రుచి, దిగుబడి పరీక్ష కోసం ఉచితంగా నమూనాలు అందిస్తాం." } },
  { n: "04", d: { en: "Contract, credit terms and a named account manager before the first delivery.", te: "మొదటి డెలివరీకి ముందే ఒప్పందం, క్రెడిట్ నిబంధనలు, ప్రత్యేక అకౌంట్ మేనేజర్." } },
];

export const BUSINESS_TYPES = [
  { en: "Hotel / restaurant", te: "హోటల్ / రెస్టారెంట్" },
  { en: "Bakery / confectionery", te: "బేకరీ / కన్ఫెక్షనరీ" },
  { en: "Sweet house", te: "స్వీట్ షాప్" },
  { en: "Caterer / cloud kitchen", te: "కేటరర్ / క్లౌడ్ కిచెన్" },
  { en: "Distributor", te: "డిస్ట్రిబ్యూటర్" },
  { en: "Institution / canteen", te: "సంస్థ / క్యాంటీన్" },
];

/* ---- headings, labels and body copy ---- */
export const T = {
  /* chrome */
  navProducts: { en: "Products", te: "ఉత్పత్తులు" },
  navQuality: { en: "Quality", te: "నాణ్యత" },
  navStory: { en: "Our Story", te: "మా కథ" },
  navContact: { en: "Contact", te: "సంప్రదించండి" },
  bulkEnquiry: { en: "Bulk Enquiry", te: "బల్క్ ఎంక్వైరీ" },
  tasteTheBest: { en: "Taste the best", te: "అత్యుత్తమ రుచి" },
  estTelangana: { en: "EST. 1998 · TELANGANA", te: "స్థాపన 1998 · తెలంగాణ" },
  homeLink: { en: "Manasa Dairy, home", te: "మానస డైరీ, హోమ్" },
  openMenu: { en: "Open menu", te: "మెనూ తెరవండి" },
  closeMenu: { en: "Close menu", te: "మెనూ మూసివేయండి" },
  language: { en: "Language", te: "భాష" },

  /* home */
  heroEyebrow: {
    en: "Serving Telangana, Andhra Pradesh & Maharashtra",
    te: "తెలంగాణ, ఆంధ్రప్రదేశ్, మహారాష్ట్రలకు సేవలు",
  },
  homeH1a: { en: "The purity your kitchen", te: "మీ వంటగదికి" },
  homeH1b: { en: "can count on.", te: "నమ్మకమైన పాల ఉత్పత్తులు." },
  heroLede: {
    en: "Twenty-eight years of collection from 4,200 farmer households — processed, tested and cold-chained for hotels, bakeries and sweet houses across Telangana, Andhra Pradesh and Maharashtra that cannot afford a variable batch.",
    te: "4,200 రైతు కుటుంబాల నుండి ఇరవై ఎనిమిదేళ్లుగా సేకరణ — ప్రతి బ్యాచ్ ఒకేలా ఉండాలని కోరుకునే తెలంగాణ, ఆంధ్రప్రదేశ్, మహారాష్ట్రలోని హోటళ్లు, బేకరీలు, స్వీట్ షాపుల కోసం ప్రాసెస్ చేసి, పరీక్షించి, కోల్డ్ చైన్‌లో సరఫరా.",
  },
  rateCard: { en: "Request a rate card", te: "ధరల జాబితా కోరండి" },
  seeRange: { en: "See the range", te: "ఉత్పత్తులు చూడండి" },
  farmerHouseholds: { en: "farmer households", te: "రైతు కుటుంబాలు" },
  threeLines: { en: "Three lines", te: "మూడు విభాగాలు" },
  whatWeSupply: { en: "What we supply", te: "మేము సరఫరా చేసేవి" },
  allNineSkus: { en: "All 9 SKUs →", te: "అన్ని 9 SKUలు →" },
  ourStory: { en: "Our story", te: "మా కథ" },
  homeStoryH2: {
    en: "Two cans of milk, one bicycle, and a route that never missed a morning.",
    te: "రెండు పాల క్యాన్లు, ఒక సైకిల్, ఒక్క ఉదయం కూడా తప్పని దారి.",
  },
  homeStoryP1: {
    en: "Manasa began in 1998, buying from eleven households and selling to the tea shops on the highway. The rule then is the rule now: pay the farmer the same day, and refuse the can that fails the test — however short the morning.",
    te: "మానస 1998లో మొదలైంది — పదకొండు కుటుంబాల నుండి పాలు కొని, హైవే టీ దుకాణాలకు అమ్మడంతో. అప్పటి నియమమే ఇప్పటికీ: రైతుకు అదే రోజు చెల్లింపు, పరీక్షలో విఫలమైన క్యాన్‌ను తిరస్కరించడం — ఆ ఉదయం ఎంత కొరత ఉన్నా సరే.",
  },
  homeStoryP2: {
    en: "Today three plants run the same discipline at 1.8 lakh litres a day, and the chefs who buy from us have, in many cases, been buying for a decade.",
    te: "ఈరోజు మూడు ప్లాంట్లు రోజుకు 1.8 లక్షల లీటర్ల వద్ద అదే క్రమశిక్షణతో నడుస్తున్నాయి; మా నుండి కొనే చాలామంది చెఫ్‌లు దశాబ్దంగా మాతోనే ఉన్నారు.",
  },
  readFullStory: { en: "Read the full story", te: "పూర్తి కథ చదవండి" },
  theRoute: { en: "The route", te: "ప్రయాణం" },
  processH2: { en: "From the 5 a.m. can to your 9 a.m. delivery", te: "ఉదయం 5 గంటల పాల నుండి మీ డెలివరీ వరకు" },
  qualityProtocolLink: { en: "Quality protocol →", te: "నాణ్యతా ప్రమాణాలు →" },
  enqEyebrow: {
    en: "For hotels, bakeries, sweet houses and caterers",
    te: "హోటళ్లు, బేకరీలు, స్వీట్ షాపులు, కేటరర్ల కోసం",
  },
  enqBandH2: {
    en: "Tell us your daily volume. We'll send a rate card in two working days.",
    te: "మీ రోజువారీ పరిమాణం చెప్పండి. రెండు పని దినాల్లో ధరల జాబితా పంపుతాం.",
  },
  enqBandP: {
    en: "Contract pricing, dedicated route slots, and a named account manager from the first delivery. Minimum order 50 litres or equivalent.",
    te: "ఒప్పంద ధరలు, ప్రత్యేక రూట్ స్లాట్లు, మొదటి డెలివరీ నుండే ప్రత్యేక అకౌంట్ మేనేజర్. కనీస ఆర్డర్ 50 లీటర్లు లేదా తత్సమానం.",
  },
  startEnquiry: { en: "Start a bulk enquiry", te: "బల్క్ ఎంక్వైరీ ప్రారంభించండి" },
  orCall: { en: "or call", te: "లేదా కాల్ చేయండి" },

  /* products */
  productsH1: { en: "The range", te: "ఉత్పత్తుల శ్రేణి" },
  productsIntro: {
    en: "Nine SKUs across three lines, all available in institutional pack sizes. Specifications below are batch guarantees, not typical values — every tanker carries its own analysis sheet.",
    te: "మూడు విభాగాల్లో తొమ్మిది SKUలు, అన్నీ సంస్థాగత ప్యాక్ సైజుల్లో లభ్యం. కింది వివరాలు సగటు విలువలు కాదు, ప్రతి బ్యాచ్‌కు ఇచ్చే హామీ — ప్రతి ట్యాంకర్‌కు దాని స్వంత విశ్లేషణ పత్రం ఉంటుంది.",
  },
  specLabel: { en: "Spec", te: "వివరాలు" },
  packsLabel: { en: "Packs", te: "ప్యాక్‌లు" },
  shelfLabel: { en: "Shelf", te: "నిల్వ కాలం" },
  privateLabelH3: { en: "Need a private-label or custom fat profile?", te: "ప్రైవేట్-లేబుల్ లేదా ప్రత్యేక ఫ్యాట్ స్థాయి కావాలా?" },
  privateLabelP: { en: "We run dedicated batches from 500 litres upward.", te: "500 లీటర్ల నుండి ప్రత్యేక బ్యాచ్‌లు తయారు చేస్తాం." },
  talkToUs: { en: "Talk to us", te: "మమ్మల్ని సంప్రదించండి" },

  /* quality */
  qualityEyebrow: { en: "Quality & manufacturing", te: "నాణ్యత & తయారీ" },
  qualityH1: {
    en: "Nineteen tests between the village and your kitchen.",
    te: "గ్రామం నుండి మీ వంటగది వరకు పంతొమ్మిది పరీక్షలు.",
  },
  qualityIntro: {
    en: "Every can is tested at the collection point, again at the dock, and a retained sample from each batch is held for the full shelf life. Rejected milk is paid for and returned — the farmer is never penalised for our standard.",
    te: "ప్రతి క్యాన్ సేకరణ కేంద్రంలో ఒకసారి, డాక్ వద్ద మరోసారి పరీక్షిస్తాం; ప్రతి బ్యాచ్ నమూనాను పూర్తి షెల్ఫ్ లైఫ్ వరకు నిల్వ ఉంచుతాం. తిరస్కరించిన పాలకూ చెల్లించి తిరిగి ఇస్తాం — మా ప్రమాణం కోసం రైతుపై ఎప్పుడూ భారం వేయం.",
  },
  nineteenChecks: { en: "Nineteen checks", te: "పంతొమ్మిది పరీక్షలు" },
  protocolH2: { en: "The protocol, stage by stage", te: "దశలవారీగా మా ప్రమాణాలు" },
  capacity: { en: "Capacity", te: "సామర్థ్యం" },
  accredited: { en: "Accredited", te: "ధ్రువీకరణలు" },
  plantsH2: { en: "Plants & capacity", te: "ప్లాంట్లు & సామర్థ్యం" },
  certsH2: { en: "Certified, and audited to prove it", te: "ధ్రువీకరణలు, తనిఖీలతో సహా" },
  capacityLabel: { en: "Capacity", te: "సామర్థ్యం" },
  linesLabel: { en: "Lines", te: "లైన్లు" },
  coldStoreLabel: { en: "Cold store", te: "కోల్డ్ స్టోర్" },

  /* story */
  storyH1: {
    en: "A dairy is only as honest as its collection point.",
    te: "పాల డెయిరీ నిజాయితీ దాని సేకరణ కేంద్రంలోనే ఉంటుంది.",
  },
  storyLede: {
    en: "Everything Manasa sells is decided before sunrise, in a village shed, on a weighing scale that either the farmer trusts or he doesn't. We have spent twenty-eight years making sure he does.",
    te: "మానస అమ్మే ప్రతిదీ సూర్యోదయానికి ముందే — ఒక గ్రామ కేంద్రంలో, రైతు నమ్మే లేదా నమ్మని ఒక తూకం యంత్రం దగ్గర — నిర్ణయమవుతుంది. ఆ నమ్మకం కోసమే మేము ఇరవై ఎనిమిదేళ్లు పనిచేశాం.",
  },
  twentyEightYears: { en: "Twenty-eight years", te: "ఇరవై ఎనిమిదేళ్లు" },
  timelineH2: { en: "How the route grew", te: "ఈ ప్రయాణం ఎలా సాగింది" },
  otherSide: { en: "The other side of the scale", te: "తూకం యంత్రం అవతలి వైపు" },
  farmerGetsH2: { en: "What the farmer gets", te: "రైతుకు దక్కేది" },
  farmerP1: {
    en: "Same-day payment into the account, at a rate posted on the shed wall every morning. Veterinary visits twice a month, subsidised feed against the milk bill, and no deduction for a rejected can that fails through no fault of the household.",
    te: "ప్రతి ఉదయం కేంద్రం గోడపై ప్రకటించిన ధర ప్రకారం, అదే రోజు ఖాతాలోకి చెల్లింపు. నెలకు రెండుసార్లు పశువైద్య సేవలు, పాల బిల్లుపై రాయితీ దాణా, కుటుంబం తప్పు లేకుండా తిరస్కరించిన క్యాన్‌కు ఎలాంటి కోత ఉండదు.",
  },
  farmerP2: {
    en: "Sixty-one per cent of our supplying households are headed by women. Their milk built this company; we do not intend to be coy about it.",
    te: "మాకు పాలు అందించే కుటుంబాల్లో అరవై ఒక్క శాతం మహిళల నేతృత్వంలోనివి. వారి పాలే ఈ సంస్థను నిర్మించాయి; దాన్ని చెప్పుకోవడానికి మేము సంకోచించం.",
  },

  /* enquiry */
  enquiryEyebrow: { en: "Bulk & distributor enquiry", te: "బల్క్ & డిస్ట్రిబ్యూటర్ విచారణ" },
  enquiryH1: { en: "Tell us what you need, daily.", te: "మీ రోజువారీ అవసరం చెప్పండి." },
  fBusiness: { en: "Business name", te: "వ్యాపారం పేరు" },
  fPerson: { en: "Contact person", te: "సంప్రదించవలసిన వ్యక్తి" },
  fPhone: { en: "Phone", te: "ఫోన్" },
  fEmail: { en: "Email", te: "ఇమెయిల్" },
  fType: { en: "Business type", te: "వ్యాపార రకం" },
  fCity: { en: "City / area", te: "నగరం / ప్రాంతం" },
  fQty: { en: "Products & approximate daily quantity", te: "ఉత్పత్తులు & సుమారు రోజువారీ పరిమాణం" },
  fQtyPlaceholder: {
    en: "e.g. 120 L toned milk, 15 kg paneer, 5 L ghee weekly",
    te: "ఉదా. 120 L టోన్డ్ మిల్క్, 15 kg పనీర్, వారానికి 5 L నెయ్యి",
  },
  fSelect: { en: "Select…", te: "ఎంచుకోండి…" },
  fRequired: { en: "This field is required.", te: "ఈ వివరం తప్పనిసరి." },
  sendEnquiry: { en: "Send enquiry", te: "విచారణ పంపండి" },
  replyNote: { en: "We reply within two working days.", te: "రెండు పని దినాల్లో స్పందిస్తాం." },
  sentH2: { en: "Received — thank you.", te: "అందింది — ధన్యవాదాలు." },
  sentPa: {
    en: "A rate card and route availability for your area will reach you within two working days. For anything urgent, call",
    te: "మీ ప్రాంతానికి ధరల జాబితా, రూట్ అందుబాటు వివరాలు రెండు పని దినాల్లో అందుతాయి. అత్యవసరమైతే కాల్ చేయండి",
  },
  whatHappensNext: { en: "What happens next", te: "తర్వాత ఏమి జరుగుతుంది" },
  reachDirectly: { en: "Or reach us directly", te: "లేదా నేరుగా సంప్రదించండి" },

  /* contact */
  contactH1: { en: "Find us", te: "మమ్మల్ని కలవండి" },
  contactEyebrow: { en: "Contact", te: "సంప్రదించండి" },
  beltCaption: {
    en: "The collection belt — 46 bulk coolers across the villages we buy from.",
    te: "సేకరణ బెల్ట్ — మేము పాలు కొనే గ్రామాల్లో 46 బల్క్ కూలర్లు.",
  },
  mapTodo: {
    en: "An interactive map goes here once the plant coordinates are confirmed.",
    te: "ప్లాంట్ల ఖచ్చితమైన స్థానాలు నిర్ధారించాక ఇక్కడ ఇంటరాక్టివ్ మ్యాప్ వస్తుంది.",
  },
  fasterThroughForm: { en: "Supply enquiries move faster through the form.", te: "ఫారం ద్వారా విచారణలు వేగంగా పరిష్కరిస్తాం." },

  /* footer */
  ftrRange: { en: "Range", te: "శ్రేణి" },
  ftrCompany: { en: "Company", te: "సంస్థ" },
  ftrTrade: { en: "Trade", te: "వ్యాపారం" },
  ftrMilk: { en: "Milk", te: "పాలు" },
  ftrGhee: { en: "Ghee", te: "నెయ్యి" },
  ftrFresh: { en: "Fresh dairy", te: "తాజా ఉత్పత్తులు" },
  ftrOurStory: { en: "Our story", te: "మా కథ" },
  ftrQualityPlants: { en: "Quality & plants", te: "నాణ్యత & ప్లాంట్లు" },
  ftrContact: { en: "Contact", te: "సంప్రదించండి" },
  ftrBulk: { en: "Bulk enquiry", te: "బల్క్ ఎంక్వైరీ" },
  ftrDistributor: { en: "Become a distributor", te: "డిస్ట్రిబ్యూటర్ కావాలంటే" },
  /* address is postal data — same literal text in both languages */
  ftrAddress: { en: ADDRESS_LINES.join("\n"), te: ADDRESS_LINES.join("\n") },
  ftrCopyright: { en: "© 2026 Manasa Dairy Products Pvt. Ltd.", te: "© 2026 మానస డైరీ ప్రొడక్ట్స్ ప్రై. లి." },
  ftrLicences: { en: "FSSAI 10014042000123 · ISO 22000:2018", te: "FSSAI 10014042000123 · ISO 22000:2018" },
};
