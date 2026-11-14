export interface ProductItem {
  id: string;
  name: string;
  nameUrdu: string;
  shortDesc: string;
  shortDescUrdu: string;
  idealFor: string;
  barrierGrade: string;
  closures: string;
  thicknessRange: string;
  diagramType: 'standup' | 'sachet' | 'flatbottom' | 'sidegusset' | 'spouted' | 'rollstock';
}

export interface IndustryItem {
  id: string;
  name: string;
  nameUrdu: string;
  description: string;
  keyPackagingNeeds: string[];
  recommendedStructure: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  fullName: string;
  role: string;
  specifications: string[];
  notes: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  titleUrdu: string;
  summary: string;
  summaryUrdu: string;
  keyAction: string;
  leadTimeIndicator: string;
}

export const COMPANY_INFO = {
  name: "Elite Packages",
  tagline: "Rotogravure and 7-color flexographic flexible packaging manufactured in Lahore for brands across Pakistan.",
  taglineUrdu: "لاہور میں تیار کردہ روٹوگریویور اور 7 رنگوں کی فلیکسوگرافک لچکدار پیکجنگ، پاکستان بھر کے برانڈز کے لیے۔",
  heroSentence: "We manufacture rotogravure and 7-color flexographic flexible packaging for food and consumer brands across Pakistan.",
  heroSentenceUrdu: "ہم پاکستان بھر کے فوڈ اور کنزیومر برانڈز کے لیے روٹوگریویور اور 7 رنگوں والی فلیکسوگرافک فلیکسیبل پیکجنگ تیار کرتے ہیں۔",
  phone: "+92 42 3588 4190",
  whatsappNumber: "+92 300 8472910",
  whatsappClean: "923008472910",
  email: "inquiries@elitepackages.pk",
  salesEmail: "sales@elitepackages.pk",
  address: "Plot 42-B, Sector 3, Quaid-e-Azam Industrial Estate, Kot Lakhpat, Lahore, Punjab, Pakistan",
  city: "Lahore, Pakistan",
  hours: "Monday – Saturday: 08:30 – 18:00 PKT (Sunday Closed)",
  establishedStory: "Elite Packages operates an industrial flexible packaging manufacturing plant in Quaid-e-Azam Industrial Estate, Lahore. We manufacture printed barrier laminates and preformed pouches for food, beverage, and consumer goods companies across Pakistan. We stand for dimensional consistency, strict food-contact compliance, and scheduled factory dispatches without delays.",
  aboutTenets: [
    {
      title: "Dimensional Consistency",
      desc: "Every pouch run meets precise gauge thickness and seal width specifications."
    },
    {
      title: "Certified Food-Grade Materials",
      desc: "All films, solventless laminating adhesives, and gravure inks comply with direct food-contact standards."
    },
    {
      title: "Scheduled Factory Dispatches",
      desc: "Cylinder engraving, printing, lamination, and pouch-forming operate under strict batch tracking."
    }
  ]
};

export const PRODUCTS: ProductItem[] = [
  {
    id: "stand-up-pouches",
    name: "Stand-Up Pouches",
    nameUrdu: "اسٹینڈ اپ پاؤچز",
    shortDesc: "Formed with a bottom gusset so the pouch stands upright on store shelves. Available with grip-hole or zipper closure.",
    shortDescUrdu: "نیچے گسٹ کے ساتھ تیار کیا گیا تاکہ پاؤچ دکان کی شیلف پر سیدھا کھڑا رہ سکے۔ زپ اور گرپ ہول کے ساتھ دستیاب۔",
    idealFor: "Snacks, powders, dried fruits, confectionery",
    barrierGrade: "Medium to High Barrier (PET / AL / PE or BOPP / MET-BOPP / PE)",
    closures: "Press-to-close zipper, tear notch, euro punch slot",
    thicknessRange: "70 to 140 microns",
    diagramType: "standup"
  },
  {
    id: "sachets",
    name: "Sachets",
    nameUrdu: "ساشے",
    shortDesc: "Three-side or four-side sealed flat packets for single-use portions of powders, liquids, and granules.",
    shortDescUrdu: "تین یا چار طرفہ سیل شدہ فلیٹ پیکٹس جو سنگل استعمال پاؤڈرز، مائعات اور دانوں کے لیے ہیں۔",
    idealFor: "Spices, seasonings, instant mixes, sauces, shampoo",
    barrierGrade: "Foil laminate or metalized barrier",
    closures: "Hermetic heat seal with V-notch tear points",
    thicknessRange: "50 to 90 microns",
    diagramType: "sachet"
  },
  {
    id: "flat-bottom-pouches",
    name: "Flat-Bottom Pouches",
    nameUrdu: "فلیٹ باٹم پاؤچز",
    shortDesc: "Box-style pouches with a flat base and four vertical printable panels for high volume stability.",
    shortDescUrdu: "باکس طرز کے پاؤچز جن کا نچلا حصہ ہموار ہوتا ہے اور زیادہ حجم اور پائیداری کے لیے چاروں طرف پرنٹنگ ہوتی ہے۔",
    idealFor: "Coffee beans, pet kibble, protein supplements, premium tea",
    barrierGrade: "High gas and moisture barrier with one-way degassing valve option",
    closures: "Pocket zipper, front zipper, tin-tie",
    thicknessRange: "110 to 160 microns",
    diagramType: "flatbottom"
  },
  {
    id: "side-gusset-bags",
    name: "Side Gusset Bags",
    nameUrdu: "سائیڈ گسٹ بیگز",
    shortDesc: "Expandable side folds that maximize fill volume while maintaining a slender vertical footprint.",
    shortDescUrdu: "پھیلنے والی سائیڈ کی تہیں جو عمودی سائز کو برقرار رکھتے ہوئے بھرنے کے حجم کو زیادہ سے زیادہ بناتی ہیں۔",
    idealFor: "Whole bean coffee, flours, bulk spices, dry pet food",
    barrierGrade: "Heavy gauge multi-layer foil structure",
    closures: "Center back seal, quad-seal, fold-over top tape",
    thicknessRange: "90 to 150 microns",
    diagramType: "sidegusset"
  },
  {
    id: "spouted-pouches",
    name: "Spouted Pouches",
    nameUrdu: "اسپاؤٹڈ پاؤچز",
    shortDesc: "Fitted with a rigid plastic spout and screw cap for controlled pouring of viscous liquids and purees.",
    shortDescUrdu: "گاڑھے مائعات اور شربت وغیرہ کو آسانی سے انڈیلنے کے لیے پلاسٹک اسپاؤٹ اور ڈھکن کے ساتھ لیس۔",
    idealFor: "Cooking oils, sauces, fruit purees, liquid detergents",
    barrierGrade: "Puncture-resistant high seal strength laminate",
    closures: "8mm to 22mm diameter tamper-evident screw caps",
    thicknessRange: "110 to 180 microns",
    diagramType: "spouted"
  },
  {
    id: "rollstock-film",
    name: "Rollstock Film",
    nameUrdu: "رول اسٹاک فلم",
    shortDesc: "Continuous printed multi-layer film wound on cores for form-fill-seal (FFS) automated packaging lines.",
    shortDescUrdu: "خودکار پیکجنگ لائنوں کے لیے کور پر لپٹی ہوئی مسلسل پرنٹ شدہ ملٹی لیئر فلم۔",
    idealFor: "Automated pillow packs, flow-wrap biscuits, high-speed snack packing",
    barrierGrade: "Co-extruded and laminated rollstock tailored to machine COF",
    closures: "Automated thermal or ultrasonic fin/lap sealing",
    thicknessRange: "20 to 90 microns per film ply",
    diagramType: "rollstock"
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "snacks",
    name: "Snacks",
    nameUrdu: "اسنیکس",
    description: "Packaging for potato crisps, extruded snacks, nimko, roasted nuts, and savory biscuits requiring crispness retention.",
    keyPackagingNeeds: [
      "High moisture barrier to prevent oil oxidation and staleness",
      "Nitrogen gas-flush compatibility without seam leakage",
      "Controlled coefficient of friction (COF) for high-speed packing lines"
    ],
    recommendedStructure: "BOPP / Metalized BOPP or PET / Foil / PE"
  },
  {
    id: "spices",
    name: "Spices",
    nameUrdu: "مصالحہ جات",
    description: "Barrier packaging for ground chili, turmeric, mixed masala blends, and whole spices manufactured across Pakistan.",
    keyPackagingNeeds: [
      "Zero essential oil and volatile aroma permeation",
      "Strong seal through powder dust contamination in the seal zone",
      "Total light protection to prevent spice discoloration"
    ],
    recommendedStructure: "Reverse Printed PET / Aluminium Foil / Polyethylene"
  },
  {
    id: "coffee",
    name: "Coffee",
    nameUrdu: "کافی",
    description: "Pouches and laminate films for whole bean coffee, ground roast, and instant coffee granules.",
    keyPackagingNeeds: [
      "One-way degassing valve integration for freshly roasted beans",
      "Extreme oxygen barrier to prevent rancidity of coffee oils",
      "Stiff multi-ply laminate for upright shelf presentation"
    ],
    recommendedStructure: "Matte PET / Aluminium Foil / LLDPE"
  },
  {
    id: "pet-food",
    name: "Pet Food",
    nameUrdu: "پالتو جانوروں کی خوراک",
    description: "Heavy-duty bags and stand-up pouches for dry kibble, cat treats, and nutritional animal feeds.",
    keyPackagingNeeds: [
      "High puncture and drop resistance for heavy bulk weights",
      "Fat and grease resistance across internal contact layers",
      "Reclosable press-to-close zippers to preserve freshness after opening"
    ],
    recommendedStructure: "PET / Metallized Film / Heavy Gauge LLDPE"
  },
  {
    id: "supplements",
    name: "Supplements",
    nameUrdu: "غذائی سپلیمنٹس",
    description: "Packaging for protein powders, nutraceutical blends, electrolyte mixes, and herbal extracts.",
    keyPackagingNeeds: [
      "Zero moisture ingress to eliminate powder caking",
      "Secure tamper-evident heat seals",
      "Wide-mouth gussets for easy scoop access"
    ],
    recommendedStructure: "BOPP / Aluminium Foil / Food-Grade Polyethylene"
  }
];

export const MATERIALS: MaterialItem[] = [
  {
    id: "bopp",
    name: "BOPP Film",
    fullName: "Biaxially Oriented Polypropylene Film",
    role: "Outer printable substrate and clear barrier film",
    specifications: [
      "Available in transparent, matte, and metalized surface finishes",
      "High tensile strength and dimensional stability during cylinder press runs",
      "Natural moisture barrier protecting outer layers from ambient humidity"
    ],
    notes: "Used as the external print carrier or internal moisture blocker in multi-ply food laminates."
  },
  {
    id: "foil",
    name: "Foil Laminate",
    fullName: "Aluminium Foil Barrier Composite",
    role: "Absolute core barrier against oxygen, moisture, and UV light",
    specifications: [
      "Near-zero oxygen transmission rate (OTR) and water vapor transmission rate (WVTR)",
      "Blocks 100% of ambient light rays that degrade sensitive food lipids and aromatics",
      "Dead-fold characteristic supporting clean structural pouch folds"
    ],
    notes: "Essential for spices, coffee, milk powders, and shelf-stable dry consumer goods."
  },
  {
    id: "adhesive",
    name: "Laminating Adhesive",
    fullName: "Food-Grade Solventless & Solvent-Based Polyurethane",
    role: "Permanent bonding agent connecting film substrates",
    specifications: [
      "Certified low-migration formula conforming to direct food-contact regulations",
      "Uniform dry bond strength preventing pouch layer delamination",
      "Resistant to high processing temperatures during heat sealing"
    ],
    notes: "Applied with precision metering rollers to maintain optical clarity and uniform bond strength."
  },
  {
    id: "inks",
    name: "CMYK Gravure Inks",
    fullName: "High-Adhesion Food-Safe Rotogravure Printing Inks",
    role: "High-definition image and text reproduction",
    specifications: [
      "Formulated for reverse printing onto BOPP and PET films",
      "Fast solvent release ensures zero residual solvent odor in finished packaging",
      "High optical density for vibrant brand colors and fine halftone screen reproduction"
    ],
    notes: "Mixed and color-matched under controlled viscosity parameters for batch-to-batch repeatability."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Artwork & Cylinder Making",
    titleUrdu: "آرٹ ورک اور سلنڈر کی تیاری",
    summary: "Pre-press design separation, color traps check, and high-precision electromechanical copper cylinder engraving.",
    summaryUrdu: "پری پریس ڈیزائن چیک، کلر سیپریشن، اور تانبے کے سلنڈرز کی درست نقش نگاری۔",
    keyAction: "Cylinder Engraving",
    leadTimeIndicator: "Phase 01"
  },
  {
    step: 2,
    title: "Rotogravure & Flexo Printing",
    titleUrdu: "روٹوگریویور اور فلیکسو پرنٹنگ",
    summary: "High-speed reverse printing onto BOPP or PET outer film with inline viscosity control and 7-color flexographic registration.",
    summaryUrdu: "بی او پی پی یا پی ای ٹی فلم پر 7 رنگوں تک تیز رفتار درست پرنٹنگ۔",
    keyAction: "7-Color Printing Press",
    leadTimeIndicator: "Phase 02"
  },
  {
    step: 3,
    title: "Multi-Layer Lamination",
    titleUrdu: "ملٹی لیئر لیمینیشن",
    summary: "Bonding the printed film to barrier foil and food-grade inner sealant plies using solventless laminating adhesive.",
    summaryUrdu: "پرنٹ شدہ فلم کو فوائل اور فوڈ گریڈ اندرونی فلم کے ساتھ لیمینیشن ایڈہیسیو کے ذریعے جوڑنا۔",
    keyAction: "Solventless Lamination",
    leadTimeIndicator: "Phase 03"
  },
  {
    step: 4,
    title: "Slitting & Pouch Making",
    titleUrdu: "سلٹنگ اور پاؤچ بنانا",
    summary: "Curing the laminate rolls, slitting to required rollstock widths, or converting into stand-up pouches with zippers and gussets.",
    summaryUrdu: "رولز کی درست کٹائی یا زپ اور گسٹ کے ساتھ ریڈی میڈ پاؤچز کی تیاری۔",
    keyAction: "Converting & Sealing",
    leadTimeIndicator: "Phase 04"
  },
  {
    step: 5,
    title: "Quality Check & Dispatch",
    titleUrdu: "کوالٹی چیک اور ڈسپیچ",
    summary: "Seal tensile testing, burst pressure checks, barcode scannability verification, pallet wrapping, and dispatch across Pakistan.",
    summaryUrdu: "سیل مضبوطی کی جانچ، برسٹ پریشر ٹیسٹ، پیکنگ اور پورے پاکستان میں ترسیل۔",
    keyAction: "Inspection & Delivery",
    leadTimeIndicator: "Phase 05"
  }
];

export const POUCH_LAYERS = [
  {
    id: "layer-1",
    name: "Outer Layer: BOPP / PET Film",
    thickness: "12 - 20 Micron",
    role: "Print carrier, abrasion resistance, and mechanical strength",
    property: "Reverse-printed surface keeps inks safely encapsulated away from product contact."
  },
  {
    id: "layer-2",
    name: "Bonding: Laminating Adhesive",
    thickness: "2 - 3 GSM",
    role: "Uniform ply adhesion without solvent retention",
    property: "Food-grade polyurethane adhesive cures to form a permanent bond."
  },
  {
    id: "layer-3",
    name: "Barrier Core: Aluminium Foil / Met-Film",
    thickness: "7 - 12 Micron",
    role: "Total barrier against oxygen, ambient moisture, and light",
    property: "Blocks 100% of UV rays and volatile gas migration to keep contents fresh."
  },
  {
    id: "layer-4",
    name: "Bonding: Secondary Tie Adhesive",
    thickness: "2 - 3 GSM",
    role: "Secures barrier core to inner sealant ply",
    property: "Maintains bond under thermal seal cycle stress and flex cracks."
  },
  {
    id: "layer-5",
    name: "Inner Layer: Food-Grade PE / CPP",
    thickness: "40 - 100 Micron",
    role: "Direct food contact sealant and hermetic heat seal layer",
    property: "Low seal-initiation temperature creates an airtight seal even through powder dust."
  }
];

export const GALLERY_SLOTS = [
  {
    id: "slot-01",
    title: "Stand-Up Pouch with Zipper",
    format: "Stand-Up Pouch",
    finish: "Matte Finish with Spot Gloss",
    specs: "PET / AL / PE - 120 Micron",
    placeholderLabel: "Product 01",
    aspect: "1:1",
    dims: "150mm x 230mm + 80mm"
  },
  {
    id: "slot-02",
    title: "Flat-Bottom Coffee Bag",
    format: "Flat-Bottom",
    finish: "Soft Matte with Degassing Valve",
    specs: "Matte BOPP / AL / PE - 140 Micron",
    placeholderLabel: "Product 02",
    aspect: "1:1",
    dims: "120mm x 280mm + 70mm"
  },
  {
    id: "slot-03",
    title: "Printed Snack Rollstock Film",
    format: "Rollstock Film",
    finish: "High Gloss Reverse Gravure",
    specs: "BOPP / Met-BOPP - 45 Micron",
    placeholderLabel: "Product 03",
    aspect: "1:1",
    dims: "Core 76mm, Width 420mm"
  },
  {
    id: "slot-04",
    title: "High-Barrier Spice Sachet",
    format: "Sachets",
    finish: "Gloss Metallic Foil",
    specs: "PET / Foil / PE - 80 Micron",
    placeholderLabel: "Product 04",
    aspect: "1:1",
    dims: "90mm x 130mm 4-Side Seal"
  },
  {
    id: "slot-05",
    title: "Side Gusset Bulk Bag",
    format: "Side Gusset Bags",
    finish: "Matte with Transparent Window",
    specs: "BOPP / PET / PE - 130 Micron",
    placeholderLabel: "Product 05",
    aspect: "1:1",
    dims: "180mm x 340mm + 90mm"
  },
  {
    id: "slot-06",
    title: "Spouted Liquid Pouch",
    format: "Spouted Pouches",
    finish: "Gloss Puncture-Resistant",
    specs: "NYLON / PE - 150 Micron",
    placeholderLabel: "Product 06",
    aspect: "1:1",
    dims: "140mm x 210mm + 15mm Spout"
  }
];
