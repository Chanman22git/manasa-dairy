/* All copy and structured content from the Manasa Dairy design handoff.
   English body copy is verbatim; Telugu strings per the handoff's i18n keys. */

export const PHONE = "+91 91210 02228";
export const EMAIL = "sales@manasadairy.com";

export const STATS = [
  { v: "1.8 L", k: "litres processed daily", n: 1.8, suffix: " L" },
  { v: "4,200", k: "supplying households", n: 4200, suffix: "" },
  { v: "3", k: "processing plants", n: 3, suffix: "" },
  { v: "28 yrs", k: "unbroken supply", n: 28, suffix: " yrs" },
];

export const CATS = [
  {
    key: "milk",
    name: "Milk",
    te: "పాలు",
    blurb: "Four fat profiles, pouched or in 10-litre cans, on route by 6 a.m.",
    skus: "4 SKUs · 500 ml – 10 L",
  },
  {
    key: "ghee",
    name: "Ghee",
    te: "నెయ్యి",
    blurb: "Granular, slow-clarified from cultured cream. Tins to 15 kg.",
    skus: "2 SKUs · 500 ml – 15 kg",
  },
  {
    key: "fresh",
    name: "Fresh",
    te: "తాజా",
    blurb: "Paneer, curd and butter made the night before delivery, never frozen.",
    skus: "3 SKUs · 200 g – 25 kg",
  },
];

export const GROUPS = [
  {
    name: "Milk",
    te: "పాలు",
    count: "4 SKUs",
    art: "milk",
    items: [
      { name: "Toned Milk", te: "టోన్డ్ మిల్క్", spec: "3.0% fat · 8.5% SNF", packs: "500 ml · 1 L pouch · 10 L can", shelf: "48 hrs at 4°C", use: "The everyday tea and coffee line." },
      { name: "Full Cream Milk", te: "ఫుల్ క్రీమ్ మిల్క్", spec: "6.0% fat · 9.0% SNF", packs: "500 ml · 1 L pouch · 10 L can", shelf: "48 hrs at 4°C", use: "Kheer, rabri, and bakery custards." },
      { name: "Standardised Milk", te: "స్టాండర్డైజ్డ్ మిల్క్", spec: "4.5% fat · 8.5% SNF", packs: "500 ml · 1 L pouch · 10 L can", shelf: "48 hrs at 4°C", use: "All-purpose kitchen milk." },
      { name: "Double Toned Milk", te: "డబుల్ టోన్డ్ మిల్క్", spec: "1.5% fat · 9.0% SNF", packs: "500 ml pouch", shelf: "48 hrs at 4°C", use: "Hospital and canteen contracts." },
    ],
  },
  {
    name: "Ghee",
    te: "నెయ్యి",
    count: "2 SKUs",
    art: "ghee",
    items: [
      { name: "Premium Cow Ghee", te: "ఆవు నెయ్యి", spec: "Granular · AGMARK Special", packs: "500 ml · 1 L · 5 L tin · 15 kg", shelf: "9 months ambient", use: "Sweets, tempering, retail gifting." },
      { name: "Buffalo Ghee", te: "గేదె నెయ్యి", spec: "High aroma · 99.7% milk fat", packs: "1 L · 5 L tin · 15 kg", shelf: "9 months ambient", use: "Halwais and heavy frying." },
    ],
  },
  {
    name: "Fresh dairy",
    te: "తాజా ఉత్పత్తులు",
    count: "3 SKUs",
    art: "fresh",
    items: [
      { name: "Paneer", te: "పనీర్", spec: "Block · 22% fat on dry basis", packs: "200 g · 1 kg · 5 kg block", shelf: "7 days at 4°C", use: "Holds shape through a tandoor." },
      { name: "Set Curd", te: "పెరుగు", spec: "Set · 3.0% fat", packs: "400 g cup · 1 kg · 15 kg bucket", shelf: "10 days at 4°C", use: "Thick set, low whey release." },
      { name: "White Butter", te: "వెన్న", spec: "Unsalted · 82% fat", packs: "500 g · 1 kg · 25 kg carton", shelf: "4 months frozen", use: "Bakery lamination and ghee-making." },
    ],
  },
];

export const STEPS = [
  { n: "01", t: "Collection", d: "Weighed and tested at the village shed. Fat, SNF, adulterants — before the can leaves." },
  { n: "02", t: "Chilling", d: "To 4°C within ninety minutes at one of 46 bulk coolers across the belt." },
  { n: "03", t: "Processing", d: "Pasteurised, standardised and packed on automated lines with in-line CIP." },
  { n: "04", t: "Delivery", d: "Refrigerated vans on fixed slots. Temperature logged at handover, every drop." },
];

export const PROTOCOL = [
  { n: "01", t: "Farm-gate screening", d: "Organoleptic check, lactometer reading and clot-on-boiling at the shed. Rejections are recorded against the collection centre, not the household." },
  { n: "02", t: "Adulterant panel", d: "Urea, detergent, starch, neutralisers and maltodextrin — a rotating strip panel on every third can, and on every can from a flagged route." },
  { n: "03", t: "Bulk chilling", d: "4°C within ninety minutes. Cooler temperature logs are pulled daily; any excursion quarantines the lot." },
  { n: "04", t: "Dock analysis", d: "Fat, SNF, acidity, MBRT and antibiotic residue before the tanker is accepted into the silo." },
  { n: "05", t: "Process control", d: "HTST pasteurisation at 72°C for 15 seconds with automatic flow diversion, followed by in-line homogenisation and CIP between runs." },
  { n: "06", t: "Retained samples", d: "One sealed sample per batch, held at 4°C for the full shelf life and re-tested at expiry. Reports available to any buyer on request." },
];

export const PLANTS = [
  { name: "Toopran", since: "Commissioned 2004", cap: "90,000 L/day", lines: "Milk · Curd", cold: "120 MT" },
  { name: "Siddipet", since: "Commissioned 2013", cap: "60,000 L/day", lines: "Milk · Paneer · Butter", cold: "80 MT" },
  { name: "Gajwel", since: "Commissioned 2021", cap: "30,000 L/day", lines: "Ghee · Packing", cold: "45 MT" },
];

export const CERTS = [
  { n: "FSSAI", d: "Licence 10014042000123" },
  { n: "ISO 22000:2018", d: "Food safety management" },
  { n: "AGMARK", d: "Ghee, Special grade" },
  { n: "NABL", d: "Partner laboratory testing" },
];

export const TIMELINE = [
  { y: "1998", d: "K. Rajeshwar Rao begins collecting from eleven households in Toopran and selling to highway tea shops." },
  { y: "2004", d: "First processing plant commissioned. Pouch milk reaches Hyderabad wholesale for the first time." },
  { y: "2013", d: "Siddipet plant opens with a dedicated paneer line after demand from hotel kitchens." },
  { y: "2021", d: "Gajwel ghee unit and a 46-cooler collection network bring daily intake past 1.8 lakh litres." },
];

export const OFFICES = [
  { kind: "Head office", city: "Toopran", addr: "Plot 14, Industrial Area, Toopran, Medak District, Telangana 502334", phone: "+91 91210 02228", hours: "Mon–Sat, 8 a.m. – 7 p.m." },
  { kind: "Sales & trade", city: "Hyderabad", addr: "3rd Floor, Sri Sai Arcade, Kukatpally, Hyderabad, Telangana 500072", phone: "+91 91210 02229", hours: "Mon–Sat, 9 a.m. – 6 p.m." },
  { kind: "Plant enquiries", city: "Siddipet", addr: "Survey 221, Ensanpalli Road, Siddipet, Telangana 502103", phone: "+91 91210 02231", hours: "Mon–Sat, 7 a.m. – 5 p.m." },
];

export const NEXT_STEPS = [
  { n: "01", d: "We confirm route availability for your area — usually the same day." },
  { n: "02", d: "A rate card is sent against your indicated volumes and pack sizes." },
  { n: "03", d: "Samples are delivered free for tasting and yield testing." },
  { n: "04", d: "Contract, credit terms and a named account manager before the first delivery." },
];

export const BUSINESS_TYPES = [
  "Hotel / restaurant",
  "Bakery / confectionery",
  "Sweet house",
  "Caterer / cloud kitchen",
  "Distributor",
  "Institution / canteen",
];

/* ---- i18n: only the keys the handoff swaps ---- */
export const T = {
  navProducts: { en: "Products", te: "ఉత్పత్తులు" },
  navQuality: { en: "Quality", te: "నాణ్యత" },
  navStory: { en: "Our Story", te: "మా కథ" },
  navContact: { en: "Contact", te: "సంప్రదించండి" },
  bulkEnquiry: { en: "Bulk Enquiry", te: "బల్క్ ఎంక్వైరీ" },
  homeH1a: { en: "The dairy your kitchen", te: "మీ వంటగదికి" },
  homeH1b: { en: "can build a menu on.", te: "నమ్మకమైన పాల ఉత్పత్తులు." },
  rateCard: { en: "Request a rate card", te: "ధరల జాబితా కోరండి" },
  seeRange: { en: "See the range", te: "ఉత్పత్తులు చూడండి" },
  whatWeSupply: { en: "What we supply", te: "మేము సరఫరా చేసేవి" },
  processH2: { en: "From the 5 a.m. can to your 9 a.m. delivery", te: "ఉదయం 5 గంటల పాల నుండి మీ డెలివరీ వరకు" },
  productsH1: { en: "The range", te: "ఉత్పత్తుల శ్రేణి" },
  qualityH1: { en: "Nineteen tests between the village and your kitchen.", te: "గ్రామం నుండి మీ వంటగది వరకు పంతొమ్మిది పరీక్షలు." },
  storyH1: { en: "A dairy is only as honest as its collection point.", te: "పాల డెయిరీ నిజాయితీ దాని సేకరణ కేంద్రంలోనే ఉంటుంది." },
  enquiryH1: { en: "Tell us what you need, daily.", te: "మీ రోజువారీ అవసరం చెప్పండి." },
  contactH1: { en: "Find us", te: "మమ్మల్ని కలవండి" },
};
