// High-Yield NEET Biology Cards (NCERT Botany & Zoology)
export const INITIAL_CARDS = [
  {
    "id": "card-bot-01",
    "subject": "botany",
    "chapterId": "bot-11-3",
    "chapterName": "Plant Kingdom",
    "title": "Phaeophyceae (Brown Algae) — Pigments & Food Reserve",
    "type": "mnemonic",
    "handwrittenNote": "Brown Algae: Fucoxanthin + Laminarin/Mannitol = FML! (Easy to remember 😅)",
    "mnemonic": "FML: Fucoxanthin, Mannitol, Laminarin → Brown Algae trio!",
    "content": "Phaeophyceae are predominantly marine. Pigments: Chlorophyll a, c + Fucoxanthin (brown color). Stored food: Laminarin or Mannitol. Cell wall: Cellulose + Algin. Flagella: two unequal, lateral.",
    "ncertRef": "NCERT Class 11, Ch 3, Pg 32–33",
    "pyqTag": "NEET 2022, 2020",
    "tags": [
      "Algae",
      "Phaeophyceae",
      "HighYield",
      "NCERTDirect"
    ],
    "classLevel": 11,
    "highYield": true,
    "keyPoints": [
      "Pigments: Chl a, c + Fucoxanthin (gives brown-olive tint)",
      "Food Reserve: Laminarin & Mannitol (complex carbs)",
      "Cell Wall: Cellulose + Algin (phycocolloid)",
      "Flagella: 2 unequal, lateral flagella on reproductive cells",
      "Examples: Ectocarpus, Dictyota, Laminaria, Sargassum, Fucus"
    ],
    "sillyMistakeTrap": "Floridean starch = Red Algae (Rhodophyceae). Laminarin/Mannitol = Brown Algae only!",
    "doodle": "algae",
    "diagramHotspots": [
      {
        "id": "h1",
        "label": "Holdfast",
        "text": "Root-like anchor to substrate",
        "x": 50,
        "y": 82
      },
      {
        "id": "h2",
        "label": "Stipe",
        "text": "Stem-like elongated axis",
        "x": 50,
        "y": 55
      },
      {
        "id": "h3",
        "label": "Frond",
        "text": "Leaf-like photosynthetic blade",
        "x": 50,
        "y": 22
      }
    ]
  },
  {
    "id": "card-bot-02",
    "subject": "botany",
    "chapterId": "bot-12-3",
    "chapterName": "Molecular Basis of Inheritance",
    "title": "The Lac Operon — ON vs OFF Switch States",
    "type": "diagram",
    "handwrittenNote": "Lactose present → Inducer binds Repressor → Operon turns ON! Think of lactose as the KEY 🔑",
    "mnemonic": "ZYA → z = β-galactosidase, y = Permease, a = Transacetylase (ZIP-A: Z-Y-A)",
    "content": "Lac Operon = inducible, polycistronic. Regulatory gene i codes repressor continuously. Without lactose: repressor binds operator → RNA Pol blocked. With lactose: allolactose (inducer) binds repressor → operator free → transcription on.",
    "ncertRef": "NCERT Class 12, Ch 3, Pg 116–117",
    "pyqTag": "NEET 2023, 2021",
    "tags": [
      "Genetics",
      "LacOperon",
      "MolecularBio",
      "SuperHighYield"
    ],
    "classLevel": 12,
    "highYield": true,
    "keyPoints": [
      "i-gene: constitutively produces repressor protein (always ON)",
      "z-gene: encodes β-galactosidase (splits lactose → glucose + galactose)",
      "y-gene: encodes Permease (increases membrane permeability to lactose)",
      "a-gene: encodes Transacetylase (function less clear)",
      "Inducer = Allolactose (isomer of lactose, NOT lactose directly)",
      "Glucose present + Lactose absent → Operon fully OFF"
    ],
    "sillyMistakeTrap": "Glucose or Galactose CANNOT induce lac operon. Only Allolactose (formed from lactose) acts as inducer!",
    "doodle": "dna",
    "diagramHotspots": [
      {
        "id": "p1",
        "label": "Promoter (p)",
        "text": "RNA Polymerase binding site",
        "x": 18,
        "y": 45
      },
      {
        "id": "o1",
        "label": "Operator (o)",
        "text": "Repressor protein binding site; gate for transcription",
        "x": 37,
        "y": 45
      },
      {
        "id": "z1",
        "label": "z (lacZ)",
        "text": "β-galactosidase — lactose hydrolysis enzyme",
        "x": 56,
        "y": 45
      },
      {
        "id": "y1",
        "label": "y (lacY)",
        "text": "Permease — transports lactose into cell",
        "x": 75,
        "y": 45
      },
      {
        "id": "a1",
        "label": "a (lacA)",
        "text": "Transacetylase enzyme",
        "x": 90,
        "y": 45
      }
    ]
  },
  {
    "id": "card-bot-03",
    "subject": "botany",
    "chapterId": "bot-11-8",
    "chapterName": "Photosynthesis in Higher Plants",
    "title": "C4 Pathway (Hatch–Slack) — Kranz Anatomy Key Facts",
    "type": "formula",
    "handwrittenNote": "Mesophyll → PEPcase (NO RuBisCO!). Bundle Sheath → RuBisCO (No PEPcase). Division of labour! ✂️",
    "mnemonic": "PM-RBS: PEPcase in Mesophyll → RuBisCO in Bundle Sheath",
    "content": "C4 plants adapted to hot, dry, high-light tropical environments. Kranz anatomy: large bundle sheath cells rich in chloroplasts surround vascular bundles. Two-step CO2 fixation eliminates photorespiration.",
    "ncertRef": "NCERT Class 11, Ch 13, Pg 218–220",
    "pyqTag": "NEET 2023, 2019, 2017",
    "tags": [
      "Photosynthesis",
      "C4Plants",
      "KranzAnatomy",
      "VeryHighYield"
    ],
    "classLevel": 11,
    "highYield": true,
    "keyPoints": [
      "Primary CO2 acceptor: PEP (3C) → via PEPcase → OAA (4C oxaloacetate)",
      "Mesophyll chloroplasts: Grana-rich, PEPcase present, NO RuBisCO",
      "Bundle sheath chloroplasts: Grana-less (agranal), RuBisCO present",
      "Zero photorespiration: bundle sheath is anaerobic → no O2 competition with CO2",
      "C4 examples: Maize, Sugarcane, Sorghum, Saccharum"
    ],
    "sillyMistakeTrap": "CO2 fixation in C4 occurs FIRST in Mesophyll (by PEPcase), but Calvin Cycle occurs ONLY in Bundle Sheath!",
    "doodle": "leaf"
  },
  {
    "id": "card-bot-04",
    "subject": "botany",
    "chapterId": "bot-11-7",
    "chapterName": "Cell Cycle & Cell Division",
    "title": "Meiosis I vs Meiosis II — What Separates When?",
    "type": "flashcard",
    "handwrittenNote": "Meiosis I = Reductional (Homologous chromosomes separate). Meiosis II = Equational (Sister chromatids separate). Like Mitosis!",
    "mnemonic": "MeioI = HOMOlogous separate → \"I go HOME first\". MeioII = SISTER chromatids → \"Sisters stay together till II\"",
    "content": "Meiosis I is reductional division: homologous chromosomes pair (synapsis), form bivalents, undergo crossing over at chiasmata, then separate → two haploid cells. Meiosis II is equational (like mitosis): sister chromatids separate.",
    "ncertRef": "NCERT Class 11, Ch 10, Pg 169–175",
    "pyqTag": "NEET 2022, 2021, 2018",
    "tags": [
      "CellDivision",
      "Meiosis",
      "Genetics",
      "HighYield"
    ],
    "classLevel": 11,
    "highYield": true,
    "keyPoints": [
      "Crossing over (recombination) occurs at Pachytene stage of Prophase I at chiasmata",
      "Chiasmata = visible site of cross-over; terminalize toward end of Diplotene",
      "Zygotene: synapsis (homologs pair to form bivalents/tetrads)",
      "Meiosis I output: 2 haploid cells (n) — each with sister chromatids still joined",
      "Meiosis II output: 4 haploid cells (n) — each cell genetically unique"
    ],
    "sillyMistakeTrap": "Crossing over happens in PROPHASE I (Pachytene), NOT Metaphase I! Bivalents align at Metaphase I.",
    "doodle": "cell"
  },
  {
    "id": "card-bot-05",
    "subject": "botany",
    "chapterId": "bot-11-2",
    "chapterName": "Biological Classification",
    "title": "Kingdom Fungi — Classes & Key Diagnostic Features",
    "type": "mnemonic",
    "handwrittenNote": "PHY-ASC-BAS-DEU → \"PHycomycetes, ASComycetes, BASidiomycetes, DEUteromycetes\" classes of Fungi!",
    "mnemonic": "Classes: Phycomycetes → Ascomycetes → Basidiomycetes → Deuteromycetes (PABD: \"Plants And Birds Dance\")",
    "content": "Fungi: heterotrophic, cell wall of chitin, food as glycogen. Reproduction: sexual (perfect stage) and asexual (imperfect stage). Spore types are diagnostic for classification.",
    "ncertRef": "NCERT Class 11, Ch 2, Pg 22–26",
    "pyqTag": "NEET 2023, 2022",
    "tags": [
      "Fungi",
      "Classification",
      "Kingdoms",
      "HighYield"
    ],
    "classLevel": 11,
    "highYield": true,
    "keyPoints": [
      "Phycomycetes: aseptate coenocytic hyphae, sexual spores = zygospores (Mucor, Rhizopus)",
      "Ascomycetes: septate hyphae, sexual spores = ascospores in asci (Aspergillus, Penicillium, Neurospora)",
      "Basidiomycetes: sexual spores = basidiospores on basidia (Agaricus, Ustilago, Puccinia)",
      "Deuteromycetes: ONLY asexual spores (conidia), sexual stage absent/unknown (Alternaria, Colletotrichum)",
      "Lichens = Algae (phycobiont) + Fungi (mycobiont) — symbiosis"
    ],
    "sillyMistakeTrap": "Neurospora belongs to ASCOMYCETES (used in genetics experiments by Beadle & Tatum), NOT Basidiomycetes!",
    "doodle": "mushroom"
  },
  {
    "id": "card-bot-06",
    "subject": "botany",
    "chapterId": "bot-12-1",
    "chapterName": "Sexual Reproduction in Flowering Plants",
    "title": "Microsporogenesis — From Pollen Mother Cell to Pollen Grain",
    "type": "diagram",
    "handwrittenNote": "Pollen Mother Cell (2n) → Meiosis → 4 Microspores → each matures into Pollen Grain! PMC is DIPLOID!",
    "mnemonic": "PMC → 4 Haploid Microspores → Pollen Grain (with Vegetative + Generative cell) = \"PMC Makes 4 Pollen Gifts\"",
    "content": "Microsporogenesis occurs in microsporangia (pollen sacs) within the anther. Tapetum (innermost layer of anther wall) nourishes developing pollen. Pollen grain has 2 coats: Exine (sporopollenin — highly resistant) and Intine (cellulose + pectin).",
    "ncertRef": "NCERT Class 12, Ch 1, Pg 5–9",
    "pyqTag": "NEET 2023, 2022, 2020",
    "tags": [
      "FloweringPlants",
      "Microsporogenesis",
      "Pollen",
      "SuperHighYield"
    ],
    "classLevel": 12,
    "highYield": true,
    "keyPoints": [
      "Anther wall layers (outer→inner): Epidermis, Endothecium, Middle layers, Tapetum",
      "Tapetum: provides nutrition to developing microspores; has Ubisch bodies (sporopollenin)",
      "Pollen wall: Exine (outer, sporopollenin) and Intine (inner, cellulose+pectin)",
      "Sporopollenin: most resistant biological material known; not degraded by any enzyme",
      "Mature pollen grain: 2-celled (1 vegetative + 1 generative) or 3-celled (1 veg + 2 male gametes)"
    ],
    "sillyMistakeTrap": "Sporopollenin is present in EXINE (outer wall), NOT Intine! It makes pollen fossils preserved for millions of years.",
    "doodle": "pollen",
    "diagramHotspots": [
      {
        "id": "ep",
        "label": "Epidermis",
        "text": "Outermost protective anther wall layer",
        "x": 20,
        "y": 20
      },
      {
        "id": "en",
        "label": "Endothecium",
        "text": "Fibrous layer; helps anther dehiscence",
        "x": 40,
        "y": 20
      },
      {
        "id": "tp",
        "label": "Tapetum",
        "text": "Innermost nutritive layer; produces Ubisch bodies",
        "x": 70,
        "y": 20
      },
      {
        "id": "ms",
        "label": "Microspore",
        "text": "Haploid (n) pollen mother cell product after meiosis",
        "x": 50,
        "y": 60
      }
    ]
  },
  {
    "id": "card-bot-07",
    "subject": "botany",
    "chapterId": "bot-12-2",
    "chapterName": "Principles of Inheritance & Variation",
    "title": "Codominance vs Incomplete Dominance — Key Difference",
    "type": "flashcard",
    "handwrittenNote": "Incomplete Dominance → BLEND of parents (pink from red+white). Codominance → BOTH phenotypes expressed (AB blood group = A AND B antigens!)",
    "mnemonic": "InComplete = BLEND. CoDominance = BOTH SHOW (Co = Together = both appear simultaneously)",
    "content": "Incomplete dominance: F1 heterozygous shows intermediate phenotype (Mirabilis/Antirrhinum: RR red × WW white → RW pink). Codominance: both alleles express fully and simultaneously in heterozygous (ABO blood type: IAIB = AB).",
    "ncertRef": "NCERT Class 12, Ch 5, Pg 82–85",
    "pyqTag": "NEET 2023, 2021, 2019",
    "tags": [
      "Genetics",
      "Dominance",
      "BloodGroups",
      "HighYield"
    ],
    "classLevel": 12,
    "highYield": true,
    "keyPoints": [
      "Incomplete dominance example: Mirabilis jalapa (4 O'Clock plant), Antirrhinum",
      "Codominance example: ABO blood groups — IAIB shows both A & B antigens on RBCs",
      "ABO blood group: IA > i and IB > i (dominance). But IA and IB are CODOMINANT to each other",
      "Blood group O = ii (two recessive alleles), universal donor",
      "Blood group AB = IAIB (codominant), universal recipient"
    ],
    "sillyMistakeTrap": "In incomplete dominance, phenotype ratio changes (1:2:1 but in phenotype too, NOT 3:1). F2 of pink × pink = 1 red : 2 pink : 1 white!",
    "doodle": "punnett"
  },
  {
    "id": "card-bot-08",
    "subject": "botany",
    "chapterId": "bot-12-3",
    "chapterName": "Molecular Basis of Inheritance",
    "title": "DNA Replication — Enzymes & Their Exact Roles",
    "type": "formula",
    "handwrittenNote": "Helicase unzips → Primase adds RNA primer → DNA Pol III elongates → DNA Pol I removes primer → Ligase seals! H-P-III-I-L 🔑",
    "mnemonic": "HPDL: Helicase → Primase → DNA Pol III (main worker) → DNA Pol I (cleaner) → Ligase (stitcher)",
    "content": "DNA replication is semiconservative (Meselson–Stahl experiment). Origin of replication (ori) → two replication forks move bidirectionally. Leading strand: continuous synthesis (5'→3'). Lagging strand: Okazaki fragments (5'→3') stitched by ligase.",
    "ncertRef": "NCERT Class 12, Ch 3, Pg 101–107",
    "pyqTag": "NEET 2023, 2022, 2021",
    "tags": [
      "DNAReplication",
      "Enzymes",
      "MolecularBio",
      "SuperHighYield"
    ],
    "classLevel": 12,
    "highYield": true,
    "keyPoints": [
      "Helicase: unwinds double helix at replication fork",
      "Primase: synthesizes short RNA primer (DNA Pol cannot start de novo)",
      "DNA Pol III: main enzyme, synthesizes new DNA strand in 5'→3' direction only",
      "DNA Pol I: removes RNA primer (5'→3' exonuclease) and fills gap",
      "DNA Ligase: seals nicks between Okazaki fragments on lagging strand",
      "SSB proteins: keep strands apart; Topoisomerase: relieves torsional stress ahead of fork"
    ],
    "sillyMistakeTrap": "DNA Polymerase can only extend (not initiate) — that's why RNA primer (by Primase) is essential before DNA Pol III can work!",
    "doodle": "dna"
  },
  {
    "id": "card-zoo-01",
    "subject": "zoology",
    "chapterId": "zoo-11-5",
    "chapterName": "Body Fluids & Circulation",
    "title": "ECG Waves — Cardiac Events Mapped Precisely",
    "type": "diagram",
    "handwrittenNote": "P = Atria depolarise. QRS = Ventricles depolarise. T = Ventricles repolarise. P-A, QRS-V, T-R!",
    "mnemonic": "PAVER: P = Atria, V (QRS) = Ventricle depolarise, E (T) = End repolarise Relaxes",
    "content": "ECG is graphical record of cardiac electrical activity. Each heartbeat: SA node → AV node → Bundle of His → Purkinje fibres. Rhythm set by SA node (Pacemaker). Normal heart rate: 72 beats/min.",
    "ncertRef": "NCERT Class 11, Ch 18, Pg 285–286",
    "pyqTag": "NEET 2023, 2022, 2020",
    "tags": [
      "ECG",
      "Circulation",
      "CardiacCycle",
      "SuperHighYield"
    ],
    "classLevel": 11,
    "highYield": true,
    "keyPoints": [
      "P-wave: depolarisation of both atria (initiates atrial systole)",
      "QRS complex: ventricular depolarisation (initiates ventricular systole)",
      "T-wave: ventricular repolarisation (marks end of ventricular systole)",
      "Atrial repolarisation is HIDDEN within QRS complex (not separately visible)",
      "P–R interval: time from atrial excitation to ventricular excitation (~0.16 sec normal)"
    ],
    "sillyMistakeTrap": "QRS = VENTRICULAR depolarisation, NOT atrial repolarisation! Atrial repolarisation is obscured by QRS complex.",
    "doodle": "heart",
    "diagramHotspots": [
      {
        "id": "pwave",
        "label": "P Wave",
        "text": "Atrial depolarisation — both atria contract",
        "x": 15,
        "y": 55
      },
      {
        "id": "qrs",
        "label": "QRS Complex",
        "text": "Ventricular depolarisation — initiates ventricular systole",
        "x": 45,
        "y": 18
      },
      {
        "id": "twave",
        "label": "T Wave",
        "text": "Ventricular repolarisation — ventricles return to resting state",
        "x": 80,
        "y": 50
      }
    ]
  },
  {
    "id": "card-zoo-02",
    "subject": "zoology",
    "chapterId": "zoo-12-4",
    "chapterName": "Human Health & Disease",
    "title": "Immunoglobulin Classes — Structure, Site & Function",
    "type": "mnemonic",
    "handwrittenNote": "GAMED → G=Greatest, A=sAliva/milk, M=Massive pentamer/first, E=allErgy, D=Differentiation of B-cells",
    "mnemonic": "GAMED Order: IgG (75%) > IgA > IgM > IgE > IgD (by abundance in blood)",
    "content": "Antibodies (immunoglobulins) are Y-shaped glycoproteins: 2 heavy (H) + 2 light (L) chains linked by disulfide bonds. Constant (C) and Variable (V) regions. Variable region forms antigen-binding site (Fab). Constant region = Fc (crystallizable fragment).",
    "ncertRef": "NCERT Class 12, Ch 8, Pg 151–153",
    "pyqTag": "NEET 2023, 2022",
    "tags": [
      "Immunity",
      "Antibodies",
      "Immunoglobulins",
      "SuperHighYield"
    ],
    "classLevel": 12,
    "highYield": true,
    "keyPoints": [
      "IgG: most abundant (75–80%), ONLY Ig crossing placenta → fetal passive immunity",
      "IgA: in secretions — saliva, tears, breast milk/COLOSTRUM, mucosal surfaces",
      "IgM: Largest (pentamer, 10 binding sites), first produced in primary immune response",
      "IgE: triggers allergic reactions (binds Mast cells & Basophils → histamine release)",
      "IgD: mainly on naive B-cell surface; role in B-cell activation/differentiation"
    ],
    "sillyMistakeTrap": "IgA is in COLOSTRUM (breast milk) but IgG crosses the PLACENTA during pregnancy — different routes!",
    "doodle": "antibody"
  },
  {
    "id": "card-zoo-03",
    "subject": "zoology",
    "chapterId": "zoo-11-9",
    "chapterName": "Chemical Coordination & Integration",
    "title": "Adrenal Cortex Zones — \"Salt Sugar Sex\" Rule",
    "type": "mnemonic",
    "handwrittenNote": "Outer to Inner: GFR → Salt, Sugar, Sex! (Zona Glomerulosa, Fasciculata, Reticularis)",
    "mnemonic": "GFR → Salt → Sugar → Sex: G=Glomerulosa/Aldosterone, F=Fasciculata/Cortisol, R=Reticularis/Androgens",
    "content": "Adrenal gland = Cortex (outer, 3 zones) + Medulla (inner). Cortex produces steroid hormones. Medulla produces catecholamines (Adrenaline 80%, Noradrenaline 20%) = emergency \"fight or flight\" hormones.",
    "ncertRef": "NCERT Class 11, Ch 22, Pg 332–334",
    "pyqTag": "NEET 2022, 2018, 2016",
    "tags": [
      "Endocrinology",
      "AdrenalGland",
      "Hormones",
      "HighYield"
    ],
    "classLevel": 11,
    "highYield": true,
    "keyPoints": [
      "Zona Glomerulosa (outermost): Mineralocorticoids → Aldosterone (Na⁺ reabsorption & K⁺ excretion)",
      "Zona Fasciculata (middle, largest): Glucocorticoids → Cortisol (gluconeogenesis, anti-inflammatory)",
      "Zona Reticularis (innermost): Gonadocorticoids → DHEA & Androgens (secondary sex characters)",
      "Adrenal Medulla: Catecholamines → Epinephrine (adrenaline) & Norepinephrine (NE)",
      "Cortisol: ↑blood glucose, ↑gluconeogenesis, anti-inflammatory, immunosuppressive"
    ],
    "sillyMistakeTrap": "Adrenal MEDULLA secretes catecholamines (not steroids). Adrenal CORTEX secretes all the steroids (salt/sugar/sex hormones)!",
    "doodle": "gland"
  },
  {
    "id": "card-zoo-04",
    "subject": "zoology",
    "chapterId": "zoo-11-3",
    "chapterName": "Biomolecules",
    "title": "Enzyme Inhibition — Competitive vs Non-Competitive",
    "type": "flashcard",
    "handwrittenNote": "Competitive: inhibitor = SAME active site, can be out-competed by ↑substrate. Non-Comp: different allosteric site, substrate can't help!",
    "mnemonic": "Competitive = Active site FIGHT (more substrate wins). Non-competitive = Allosteric ambush (no escape!)",
    "content": "Enzyme inhibition: Competitive inhibitor structurally similar to substrate; competes for active site; effect reversed by ↑substrate. Non-competitive inhibitor binds allosteric site; changes enzyme shape; substrate can't displace it.",
    "ncertRef": "NCERT Class 11, Ch 9, Pg 155–158",
    "pyqTag": "NEET 2022, 2020, 2018",
    "tags": [
      "Enzymes",
      "Inhibition",
      "Biochemistry",
      "HighYield"
    ],
    "classLevel": 11,
    "highYield": true,
    "keyPoints": [
      "Competitive: binds ACTIVE site → Km increases, Vmax unchanged",
      "Non-competitive: binds ALLOSTERIC site → Km unchanged, Vmax decreases",
      "Feedback inhibition: end-product inhibits its own pathway enzyme (non-competitive)",
      "Example competitive: Malonate inhibits Succinate dehydrogenase (Krebs cycle)",
      "Example non-competitive: Heavy metals (Hg²⁺, Pb²⁺) permanently inactivate enzymes"
    ],
    "sillyMistakeTrap": "In competitive inhibition Vmax is UNCHANGED (just need more substrate). In non-competitive Vmax is permanently REDUCED even with excess substrate!",
    "doodle": "enzyme"
  },
  {
    "id": "card-zoo-05",
    "subject": "zoology",
    "chapterId": "zoo-12-3",
    "chapterName": "Evolution",
    "title": "Hardy–Weinberg Equilibrium — All 5 Conditions",
    "type": "formula",
    "handwrittenNote": "HWE: p² + 2pq + q² = 1 and p + q = 1. Allele frequencies stay constant if... NAMES! (No mutation, no selection, etc.)",
    "mnemonic": "HWE breaks when: MATING is non-random, Migration happens, Mutations occur, Natural selection acts, Small population (Genetic drift) → MiMMoNS breaks HWE!",
    "content": "Hardy–Weinberg Principle states that allele and genotype frequencies in a large, randomly-mating population remain constant across generations unless evolutionary forces act upon it. p + q = 1 and p² + 2pq + q² = 1.",
    "ncertRef": "NCERT Class 12, Ch 7, Pg 130–131",
    "pyqTag": "NEET 2023, 2021, 2019",
    "tags": [
      "Evolution",
      "HardyWeinberg",
      "PopulationGenetics",
      "HighYield"
    ],
    "classLevel": 12,
    "highYield": true,
    "keyPoints": [
      "p = frequency of dominant allele (A), q = frequency of recessive allele (a)",
      "p² = homozygous dominant (AA), 2pq = heterozygous (Aa), q² = homozygous recessive (aa)",
      "Genetic drift: random change in allele frequency in SMALL populations (founder/bottleneck effect)",
      "Gene flow/Migration: movement of individuals/alleles between populations disturbs equilibrium",
      "HWE violation = Evolution is occurring"
    ],
    "sillyMistakeTrap": "HWE requires LARGE population — genetic drift is most significant in SMALL populations (bottleneck/founder effects are drift examples)!",
    "doodle": "graph"
  },
  {
    "id": "card-zoo-06",
    "subject": "zoology",
    "chapterId": "zoo-12-1",
    "chapterName": "Human Reproduction",
    "title": "Spermatogenesis vs Oogenesis — Key Differences",
    "type": "flashcard",
    "handwrittenNote": "Spermatogenesis: 1 PMC → 4 sperms (equal). Oogenesis: 1 Oogonium → 1 ovum + 3 polar bodies (UNequal)!",
    "mnemonic": "SPERMs = 4 equal. OOCYTE = 1 big egg + 3 tiny polar bodies. \"One QUEEN one egg!\"",
    "content": "Spermatogenesis in seminiferous tubules. Oogenesis starts at foetal stage; primary oocytes arrested in Prophase I at birth; resume at puberty. Secondary oocyte arrested in Metaphase II; completes meiosis II only after fertilisation.",
    "ncertRef": "NCERT Class 12, Ch 3, Pg 42–47",
    "pyqTag": "NEET 2023, 2022, 2020",
    "tags": [
      "Reproduction",
      "Spermatogenesis",
      "Oogenesis",
      "SuperHighYield"
    ],
    "classLevel": 12,
    "highYield": true,
    "keyPoints": [
      "Spermatogonium (2n) → Primary spermatocyte (2n) → Secondary spermatocyte (n) → Spermatid (n) → Sperm",
      "Oogonium (2n) → Primary oocyte (2n, arrested in Prophase I) → at puberty: Secondary oocyte (n) + 1st polar body",
      "Secondary oocyte arrested at Metaphase II — ovulated in this state",
      "Meiosis II complete ONLY after sperm penetration (fertilisation trigger)",
      "Sertoli cells nourish spermatids (like Tapetum in plants); Leydig cells secrete testosterone"
    ],
    "sillyMistakeTrap": "The ovulated cell is SECONDARY OOCYTE (n), NOT ovum! True ovum forms only AFTER fertilisation completes Meiosis II!",
    "doodle": "cell"
  },
  {
    "id": "card-zoo-07",
    "subject": "zoology",
    "chapterId": "zoo-12-5",
    "chapterName": "Biotechnology: Principles & Processes",
    "title": "PCR — 3 Steps & Their Temperatures",
    "type": "formula",
    "handwrittenNote": "PCR: Denature (94°C) → Annealing (50-65°C) → Extension (72°C, Taq Pol). Cycle 30x → 10⁶ copies! 🧬",
    "mnemonic": "DAE Temperature cycle: D=Denaturation@94°C, A=Annealing@55°C, E=Extension@72°C",
    "content": "Polymerase Chain Reaction (PCR) amplifies specific DNA sequences in vitro without living cells. Thermostable Taq polymerase (from Thermus aquaticus) allows repeated high-temperature cycles. Developed by Kary Mullis (Nobel Prize 1993).",
    "ncertRef": "NCERT Class 12, Ch 11, Pg 198–199",
    "pyqTag": "NEET 2023, 2022, 2021",
    "tags": [
      "PCR",
      "Biotechnology",
      "DNAAmplification",
      "SuperHighYield"
    ],
    "classLevel": 12,
    "highYield": true,
    "keyPoints": [
      "Step 1 — Denaturation: ~94°C, DNA strands separate (H-bonds break)",
      "Step 2 — Annealing: ~50–65°C, primers bind to complementary sequences",
      "Step 3 — Extension: ~72°C, Taq polymerase synthesises new strand from primers",
      "Taq polymerase: thermostable (active at 72°C, sourced from Thermus aquaticus hot spring bacteria)",
      "30 cycles → 2³⁰ ≈ 10⁹ copies of target sequence"
    ],
    "sillyMistakeTrap": "Primers in PCR are SHORT SYNTHETIC OLIGONUCLEOTIDES (DNA), NOT RNA primers like in cellular DNA replication!",
    "doodle": "pcr"
  }
];
