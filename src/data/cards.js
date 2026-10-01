// Expanded High-Yield NEET Card Database — Phase 2
// All content mapped to NCERT Class 11 & 12, NTA NEET UG Official Syllabus

export const INITIAL_CARDS = [

  // ======================================================
  // =========== BOTANY ===================================
  // ======================================================

  {
    id: 'card-bot-01',
    subject: 'botany',
    chapterId: 'bot-11-3',
    chapterName: 'Plant Kingdom',
    title: 'Phaeophyceae (Brown Algae) — Pigments & Food Reserve',
    type: 'mnemonic',
    handwrittenNote: 'Brown Algae: Fucoxanthin + Laminarin/Mannitol = FML! (Easy to remember 😅)',
    mnemonic: 'FML: Fucoxanthin, Mannitol, Laminarin → Brown Algae trio!',
    content: 'Phaeophyceae are predominantly marine. Pigments: Chlorophyll a, c + Fucoxanthin (brown color). Stored food: Laminarin or Mannitol. Cell wall: Cellulose + Algin. Flagella: two unequal, lateral.',
    ncertRef: 'NCERT Class 11, Ch 3, Pg 32–33',
    pyqTag: 'NEET 2022, 2020',
    tags: ['Algae', 'Phaeophyceae', 'HighYield', 'NCERTDirect'],
    classLevel: 11,
    highYield: true,
    keyPoints: [
      'Pigments: Chl a, c + Fucoxanthin (gives brown-olive tint)',
      'Food Reserve: Laminarin & Mannitol (complex carbs)',
      'Cell Wall: Cellulose + Algin (phycocolloid)',
      'Flagella: 2 unequal, lateral flagella on reproductive cells',
      'Examples: Ectocarpus, Dictyota, Laminaria, Sargassum, Fucus'
    ],
    sillyMistakeTrap: 'Floridean starch = Red Algae (Rhodophyceae). Laminarin/Mannitol = Brown Algae only!',
    doodle: 'algae',
    diagramHotspots: [
      { id: 'h1', label: 'Holdfast', text: 'Root-like anchor to substrate', x: 50, y: 82 },
      { id: 'h2', label: 'Stipe', text: 'Stem-like elongated axis', x: 50, y: 55 },
      { id: 'h3', label: 'Frond', text: 'Leaf-like photosynthetic blade', x: 50, y: 22 }
    ]
  },

  {
    id: 'card-bot-02',
    subject: 'botany',
    chapterId: 'bot-12-3',
    chapterName: 'Molecular Basis of Inheritance',
    title: 'The Lac Operon — ON vs OFF Switch States',
    type: 'diagram',
    handwrittenNote: 'Lactose present → Inducer binds Repressor → Operon turns ON! Think of lactose as the KEY 🔑',
    mnemonic: 'ZYA → z = β-galactosidase, y = Permease, a = Transacetylase (ZIP-A: Z-Y-A)',
    content: 'Lac Operon = inducible, polycistronic. Regulatory gene i codes repressor continuously. Without lactose: repressor binds operator → RNA Pol blocked. With lactose: allolactose (inducer) binds repressor → operator free → transcription on.',
    ncertRef: 'NCERT Class 12, Ch 3, Pg 116–117',
    pyqTag: 'NEET 2023, 2021',
    tags: ['Genetics', 'LacOperon', 'MolecularBio', 'SuperHighYield'],
    classLevel: 12,
    highYield: true,
    keyPoints: [
      'i-gene: constitutively produces repressor protein (always ON)',
      'z-gene: encodes β-galactosidase (splits lactose → glucose + galactose)',
      'y-gene: encodes Permease (increases membrane permeability to lactose)',
      'a-gene: encodes Transacetylase (function less clear)',
      'Inducer = Allolactose (isomer of lactose, NOT lactose directly)',
      'Glucose present + Lactose absent → Operon fully OFF'
    ],
    sillyMistakeTrap: 'Glucose or Galactose CANNOT induce lac operon. Only Allolactose (formed from lactose) acts as inducer!',
    doodle: 'dna',
    diagramHotspots: [
      { id: 'p1', label: 'Promoter (p)', text: 'RNA Polymerase binding site', x: 18, y: 45 },
      { id: 'o1', label: 'Operator (o)', text: 'Repressor protein binding site; gate for transcription', x: 37, y: 45 },
      { id: 'z1', label: 'z (lacZ)', text: 'β-galactosidase — lactose hydrolysis enzyme', x: 56, y: 45 },
      { id: 'y1', label: 'y (lacY)', text: 'Permease — transports lactose into cell', x: 75, y: 45 },
      { id: 'a1', label: 'a (lacA)', text: 'Transacetylase enzyme', x: 90, y: 45 }
    ]
  },

  {
    id: 'card-bot-03',
    subject: 'botany',
    chapterId: 'bot-11-8',
    chapterName: 'Photosynthesis in Higher Plants',
    title: 'C4 Pathway (Hatch–Slack) — Kranz Anatomy Key Facts',
    type: 'formula',
    handwrittenNote: 'Mesophyll → PEPcase (NO RuBisCO!). Bundle Sheath → RuBisCO (No PEPcase). Division of labour! ✂️',
    mnemonic: 'PM-RBS: PEPcase in Mesophyll → RuBisCO in Bundle Sheath',
    content: 'C4 plants adapted to hot, dry, high-light tropical environments. Kranz anatomy: large bundle sheath cells rich in chloroplasts surround vascular bundles. Two-step CO2 fixation eliminates photorespiration.',
    ncertRef: 'NCERT Class 11, Ch 13, Pg 218–220',
    pyqTag: 'NEET 2023, 2019, 2017',
    tags: ['Photosynthesis', 'C4Plants', 'KranzAnatomy', 'VeryHighYield'],
    classLevel: 11,
    highYield: true,
    keyPoints: [
      'Primary CO2 acceptor: PEP (3C) → via PEPcase → OAA (4C oxaloacetate)',
      'Mesophyll chloroplasts: Grana-rich, PEPcase present, NO RuBisCO',
      'Bundle sheath chloroplasts: Grana-less (agranal), RuBisCO present',
      'Zero photorespiration: bundle sheath is anaerobic → no O2 competition with CO2',
      'C4 examples: Maize, Sugarcane, Sorghum, Saccharum'
    ],
    sillyMistakeTrap: 'CO2 fixation in C4 occurs FIRST in Mesophyll (by PEPcase), but Calvin Cycle occurs ONLY in Bundle Sheath!',
    doodle: 'leaf'
  },

  {
    id: 'card-bot-04',
    subject: 'botany',
    chapterId: 'bot-11-7',
    chapterName: 'Cell Cycle & Cell Division',
    title: 'Meiosis I vs Meiosis II — What Separates When?',
    type: 'flashcard',
    handwrittenNote: 'Meiosis I = Reductional (Homologous chromosomes separate). Meiosis II = Equational (Sister chromatids separate). Like Mitosis!',
    mnemonic: 'MeioI = HOMOlogous separate → "I go HOME first". MeioII = SISTER chromatids → "Sisters stay together till II"',
    content: 'Meiosis I is reductional division: homologous chromosomes pair (synapsis), form bivalents, undergo crossing over at chiasmata, then separate → two haploid cells. Meiosis II is equational (like mitosis): sister chromatids separate.',
    ncertRef: 'NCERT Class 11, Ch 10, Pg 169–175',
    pyqTag: 'NEET 2022, 2021, 2018',
    tags: ['CellDivision', 'Meiosis', 'Genetics', 'HighYield'],
    classLevel: 11,
    highYield: true,
    keyPoints: [
      'Crossing over (recombination) occurs at Pachytene stage of Prophase I at chiasmata',
      'Chiasmata = visible site of cross-over; terminalize toward end of Diplotene',
      'Zygotene: synapsis (homologs pair to form bivalents/tetrads)',
      'Meiosis I output: 2 haploid cells (n) — each with sister chromatids still joined',
      'Meiosis II output: 4 haploid cells (n) — each cell genetically unique'
    ],
    sillyMistakeTrap: 'Crossing over happens in PROPHASE I (Pachytene), NOT Metaphase I! Bivalents align at Metaphase I.',
    doodle: 'cell'
  },

  {
    id: 'card-bot-05',
    subject: 'botany',
    chapterId: 'bot-11-2',
    chapterName: 'Biological Classification',
    title: 'Kingdom Fungi — Classes & Key Diagnostic Features',
    type: 'mnemonic',
    handwrittenNote: 'PHY-ASC-BAS-DEU → "PHysics ASC BASketball DEUteragonist" classes of Fungi!',
    mnemonic: 'Classes: Phycomycetes → Ascomycetes → Basidiomycetes → Deuteromycetes (PABD: "People Always Bring Dogs")',
    content: 'Fungi: heterotrophic, cell wall of chitin, food as glycogen. Reproduction: sexual (perfect stage) and asexual (imperfect stage). Spore types are diagnostic for classification.',
    ncertRef: 'NCERT Class 11, Ch 2, Pg 22–26',
    pyqTag: 'NEET 2023, 2022',
    tags: ['Fungi', 'Classification', 'Kingdoms', 'HighYield'],
    classLevel: 11,
    highYield: true,
    keyPoints: [
      'Phycomycetes: aseptate coenocytic hyphae, sexual spores = zygospores (Mucor, Rhizopus)',
      'Ascomycetes: septate hyphae, sexual spores = ascospores in asci (Aspergillus, Penicillium, Neurospora)',
      'Basidiomycetes: sexual spores = basidiospores on basidia (Agaricus, Ustilago, Puccinia)',
      'Deuteromycetes: ONLY asexual spores (conidia), sexual stage absent/unknown (Alternaria, Colletotrichum)',
      'Lichens = Algae (phycobiont) + Fungi (mycobiont) — symbiosis'
    ],
    sillyMistakeTrap: 'Neurospora belongs to ASCOMYCETES (used in genetics experiments by Beadle & Tatum), NOT Basidiomycetes!',
    doodle: 'mushroom'
  },

  {
    id: 'card-bot-06',
    subject: 'botany',
    chapterId: 'bot-12-1',
    chapterName: 'Sexual Reproduction in Flowering Plants',
    title: 'Microsporogenesis — From Pollen Mother Cell to Pollen Grain',
    type: 'diagram',
    handwrittenNote: 'Pollen Mother Cell (2n) → Meiosis → 4 Microspores → each matures into Pollen Grain! PMC is DIPLOID!',
    mnemonic: 'PMC → 4 Haploid Microspores → Pollen Grain (with Vegetative + Generative cell) = "PMC Makes 4 Pollen Gifts"',
    content: 'Microsporogenesis occurs in microsporangia (pollen sacs) within the anther. Tapetum (innermost layer of anther wall) nourishes developing pollen. Pollen grain has 2 coats: Exine (sporopollenin — highly resistant) and Intine (cellulose + pectin).',
    ncertRef: 'NCERT Class 12, Ch 1, Pg 5–9',
    pyqTag: 'NEET 2023, 2022, 2020',
    tags: ['FloweringPlants', 'Microsporogenesis', 'Pollen', 'SuperHighYield'],
    classLevel: 12,
    highYield: true,
    keyPoints: [
      'Anther wall layers (outer→inner): Epidermis, Endothecium, Middle layers, Tapetum',
      'Tapetum: provides nutrition to developing microspores; has Ubisch bodies (sporopollenin)',
      'Pollen wall: Exine (outer, sporopollenin) and Intine (inner, cellulose+pectin)',
      'Sporopollenin: most resistant biological material known; not degraded by any enzyme',
      'Mature pollen grain: 2-celled (1 vegetative + 1 generative) or 3-celled (1 veg + 2 male gametes)'
    ],
    sillyMistakeTrap: 'Sporopollenin is present in EXINE (outer wall), NOT Intine! It makes pollen fossils preserved for millions of years.',
    doodle: 'pollen',
    diagramHotspots: [
      { id: 'ep', label: 'Epidermis', text: 'Outermost protective anther wall layer', x: 20, y: 20 },
      { id: 'en', label: 'Endothecium', text: 'Fibrous layer; helps anther dehiscence', x: 40, y: 20 },
      { id: 'tp', label: 'Tapetum', text: 'Innermost nutritive layer; produces Ubisch bodies', x: 70, y: 20 },
      { id: 'ms', label: 'Microspore', text: 'Haploid (n) pollen mother cell product after meiosis', x: 50, y: 60 }
    ]
  },

  {
    id: 'card-bot-07',
    subject: 'botany',
    chapterId: 'bot-12-2',
    chapterName: 'Principles of Inheritance & Variation',
    title: 'Codominance vs Incomplete Dominance — Key Difference',
    type: 'flashcard',
    handwrittenNote: 'Incomplete Dominance → BLEND of parents (pink from red+white). Codominance → BOTH phenotypes expressed (AB blood group = A AND B antigens!)',
    mnemonic: 'InComplete = BLEND. CoDominance = BOTH SHOW (Co = Together = both appear simultaneously)',
    content: 'Incomplete dominance: F1 heterozygous shows intermediate phenotype (Mirabilis/Antirrhinum: RR red × WW white → RW pink). Codominance: both alleles express fully and simultaneously in heterozygous (ABO blood type: IAIB = AB).',
    ncertRef: 'NCERT Class 12, Ch 5, Pg 82–85',
    pyqTag: 'NEET 2023, 2021, 2019',
    tags: ['Genetics', 'Dominance', 'BloodGroups', 'HighYield'],
    classLevel: 12,
    highYield: true,
    keyPoints: [
      'Incomplete dominance example: Mirabilis jalapa (4 O\'Clock plant), Antirrhinum',
      'Codominance example: ABO blood groups — IAIB shows both A & B antigens on RBCs',
      'ABO blood group: IA > i and IB > i (dominance). But IA and IB are CODOMINANT to each other',
      'Blood group O = ii (two recessive alleles), universal donor',
      'Blood group AB = IAIB (codominant), universal recipient'
    ],
    sillyMistakeTrap: 'In incomplete dominance, phenotype ratio changes (1:2:1 but in phenotype too, NOT 3:1). F2 of pink × pink = 1 red : 2 pink : 1 white!',
    doodle: 'punnett'
  },

  {
    id: 'card-bot-08',
    subject: 'botany',
    chapterId: 'bot-12-3',
    chapterName: 'Molecular Basis of Inheritance',
    title: 'DNA Replication — Enzymes & Their Exact Roles',
    type: 'formula',
    handwrittenNote: 'Helicase unzips → Primase adds RNA primer → DNA Pol III elongates → DNA Pol I removes primer → Ligase seals! H-P-III-I-L 🔑',
    mnemonic: 'HPDL: Helicase → Primase → DNA Pol III (main worker) → DNA Pol I (cleaner) → Ligase (stitcher)',
    content: 'DNA replication is semiconservative (Meselson–Stahl experiment). Origin of replication (ori) → two replication forks move bidirectionally. Leading strand: continuous synthesis (5\'→3\'). Lagging strand: Okazaki fragments (5\'→3\') stitched by ligase.',
    ncertRef: 'NCERT Class 12, Ch 3, Pg 101–107',
    pyqTag: 'NEET 2023, 2022, 2021',
    tags: ['DNAReplication', 'Enzymes', 'MolecularBio', 'SuperHighYield'],
    classLevel: 12,
    highYield: true,
    keyPoints: [
      'Helicase: unwinds double helix at replication fork',
      'Primase: synthesizes short RNA primer (DNA Pol cannot start de novo)',
      'DNA Pol III: main enzyme, synthesizes new DNA strand in 5\'→3\' direction only',
      'DNA Pol I: removes RNA primer (5\'→3\' exonuclease) and fills gap',
      'DNA Ligase: seals nicks between Okazaki fragments on lagging strand',
      'SSB proteins: keep strands apart; Topoisomerase: relieves torsional stress ahead of fork'
    ],
    sillyMistakeTrap: 'DNA Polymerase can only extend (not initiate) — that\'s why RNA primer (by Primase) is essential before DNA Pol III can work!',
    doodle: 'dna'
  },

  // ======================================================
  // =========== ZOOLOGY ==================================
  // ======================================================

  {
    id: 'card-zoo-01',
    subject: 'zoology',
    chapterId: 'zoo-11-5',
    chapterName: 'Body Fluids & Circulation',
    title: 'ECG Waves — Cardiac Events Mapped Precisely',
    type: 'diagram',
    handwrittenNote: 'P = Atria depolarise. QRS = Ventricles depolarise. T = Ventricles repolarise. P-A, QRS-V, T-R!',
    mnemonic: 'PAVER: P = Atria, V (QRS) = Ventricle depolarise, E (T) = End repolarise Relaxes',
    content: 'ECG is graphical record of cardiac electrical activity. Each heartbeat: SA node → AV node → Bundle of His → Purkinje fibres. Rhythm set by SA node (Pacemaker). Normal heart rate: 72 beats/min.',
    ncertRef: 'NCERT Class 11, Ch 18, Pg 285–286',
    pyqTag: 'NEET 2023, 2022, 2020',
    tags: ['ECG', 'Circulation', 'CardiacCycle', 'SuperHighYield'],
    classLevel: 11,
    highYield: true,
    keyPoints: [
      'P-wave: depolarisation of both atria (initiates atrial systole)',
      'QRS complex: ventricular depolarisation (initiates ventricular systole)',
      'T-wave: ventricular repolarisation (marks end of ventricular systole)',
      'Atrial repolarisation is HIDDEN within QRS complex (not separately visible)',
      'P–R interval: time from atrial excitation to ventricular excitation (~0.16 sec normal)'
    ],
    sillyMistakeTrap: 'QRS = VENTRICULAR depolarisation, NOT atrial repolarisation! Atrial repolarisation is obscured by QRS complex.',
    doodle: 'heart',
    diagramHotspots: [
      { id: 'pwave', label: 'P Wave', text: 'Atrial depolarisation — both atria contract', x: 15, y: 55 },
      { id: 'qrs', label: 'QRS Complex', text: 'Ventricular depolarisation — initiates ventricular systole', x: 45, y: 18 },
      { id: 'twave', label: 'T Wave', text: 'Ventricular repolarisation — ventricles return to resting state', x: 80, y: 50 }
    ]
  },

  {
    id: 'card-zoo-02',
    subject: 'zoology',
    chapterId: 'zoo-12-4',
    chapterName: 'Human Health & Disease',
    title: 'Immunoglobulin Classes — Structure, Site & Function',
    type: 'mnemonic',
    handwrittenNote: 'GAMED → G=Greatest, A=sAliva/milk, M=Massive pentamer/first, E=allErgy, D=Differentiation of B-cells',
    mnemonic: 'GAMED Order: IgG (75%) > IgA > IgM > IgE > IgD (by abundance in blood)',
    content: 'Antibodies (immunoglobulins) are Y-shaped glycoproteins: 2 heavy (H) + 2 light (L) chains linked by disulfide bonds. Constant (C) and Variable (V) regions. Variable region forms antigen-binding site (Fab). Constant region = Fc (crystallizable fragment).',
    ncertRef: 'NCERT Class 12, Ch 8, Pg 151–153',
    pyqTag: 'NEET 2023, 2022',
    tags: ['Immunity', 'Antibodies', 'Immunoglobulins', 'SuperHighYield'],
    classLevel: 12,
    highYield: true,
    keyPoints: [
      'IgG: most abundant (75–80%), ONLY Ig crossing placenta → fetal passive immunity',
      'IgA: in secretions — saliva, tears, breast milk/COLOSTRUM, mucosal surfaces',
      'IgM: Largest (pentamer, 10 binding sites), first produced in primary immune response',
      'IgE: triggers allergic reactions (binds Mast cells & Basophils → histamine release)',
      'IgD: mainly on naive B-cell surface; role in B-cell activation/differentiation'
    ],
    sillyMistakeTrap: 'IgA is in COLOSTRUM (breast milk) but IgG crosses the PLACENTA during pregnancy — different routes!',
    doodle: 'antibody'
  },

  {
    id: 'card-zoo-03',
    subject: 'zoology',
    chapterId: 'zoo-11-9',
    chapterName: 'Chemical Coordination & Integration',
    title: 'Adrenal Cortex Zones — "Salt Sugar Sex" Rule',
    type: 'mnemonic',
    handwrittenNote: 'Outer to Inner: GFR → Salt, Sugar, Sex! (Zona Glomerulosa, Fasciculata, Reticularis)',
    mnemonic: 'GFR → Salt → Sugar → Sex: G=Glomerulosa/Aldosterone, F=Fasciculata/Cortisol, R=Reticularis/Androgens',
    content: 'Adrenal gland = Cortex (outer, 3 zones) + Medulla (inner). Cortex produces steroid hormones. Medulla produces catecholamines (Adrenaline 80%, Noradrenaline 20%) = emergency "fight or flight" hormones.',
    ncertRef: 'NCERT Class 11, Ch 22, Pg 332–334',
    pyqTag: 'NEET 2022, 2018, 2016',
    tags: ['Endocrinology', 'AdrenalGland', 'Hormones', 'HighYield'],
    classLevel: 11,
    highYield: true,
    keyPoints: [
      'Zona Glomerulosa (outermost): Mineralocorticoids → Aldosterone (Na⁺ reabsorption & K⁺ excretion)',
      'Zona Fasciculata (middle, largest): Glucocorticoids → Cortisol (gluconeogenesis, anti-inflammatory)',
      'Zona Reticularis (innermost): Gonadocorticoids → DHEA & Androgens (secondary sex characters)',
      'Adrenal Medulla: Catecholamines → Epinephrine (adrenaline) & Norepinephrine (NE)',
      'Cortisol: ↑blood glucose, ↑gluconeogenesis, anti-inflammatory, immunosuppressive'
    ],
    sillyMistakeTrap: 'Adrenal MEDULLA secretes catecholamines (not steroids). Adrenal CORTEX secretes all the steroids (salt/sugar/sex hormones)!',
    doodle: 'gland'
  },

  {
    id: 'card-zoo-04',
    subject: 'zoology',
    chapterId: 'zoo-11-3',
    chapterName: 'Biomolecules',
    title: 'Enzyme Inhibition — Competitive vs Non-Competitive',
    type: 'flashcard',
    handwrittenNote: 'Competitive: inhibitor = SAME active site, can be out-competed by ↑substrate. Non-Comp: different allosteric site, substrate can\'t help!',
    mnemonic: 'Competitive = Active site FIGHT (more substrate wins). Non-competitive = Allosteric ambush (no escape!)',
    content: 'Enzyme inhibition: Competitive inhibitor structurally similar to substrate; competes for active site; effect reversed by ↑substrate. Non-competitive inhibitor binds allosteric site; changes enzyme shape; substrate can\'t displace it.',
    ncertRef: 'NCERT Class 11, Ch 9, Pg 155–158',
    pyqTag: 'NEET 2022, 2020, 2018',
    tags: ['Enzymes', 'Inhibition', 'Biochemistry', 'HighYield'],
    classLevel: 11,
    highYield: true,
    keyPoints: [
      'Competitive: binds ACTIVE site → Km increases, Vmax unchanged',
      'Non-competitive: binds ALLOSTERIC site → Km unchanged, Vmax decreases',
      'Feedback inhibition: end-product inhibits its own pathway enzyme (non-competitive)',
      'Example competitive: Malonate inhibits Succinate dehydrogenase (Krebs cycle)',
      'Example non-competitive: Heavy metals (Hg²⁺, Pb²⁺) permanently inactivate enzymes'
    ],
    sillyMistakeTrap: 'In competitive inhibition Vmax is UNCHANGED (just need more substrate). In non-competitive Vmax is permanently REDUCED even with excess substrate!',
    doodle: 'enzyme'
  },

  {
    id: 'card-zoo-05',
    subject: 'zoology',
    chapterId: 'zoo-12-3',
    chapterName: 'Evolution',
    title: 'Hardy–Weinberg Equilibrium — All 5 Conditions',
    type: 'formula',
    handwrittenNote: 'HWE: p² + 2pq + q² = 1 and p + q = 1. Allele frequencies stay constant if... NAMES! (No mutation, no selection, etc.)',
    mnemonic: 'HWE breaks when: MATING is non-random, Migration happens, Mutations occur, Natural selection acts, Small population (Genetic drift) → MiMMoNS breaks HWE!',
    content: 'Hardy–Weinberg Principle states that allele and genotype frequencies in a large, randomly-mating population remain constant across generations unless evolutionary forces act upon it. p + q = 1 and p² + 2pq + q² = 1.',
    ncertRef: 'NCERT Class 12, Ch 7, Pg 130–131',
    pyqTag: 'NEET 2023, 2021, 2019',
    tags: ['Evolution', 'HardyWeinberg', 'PopulationGenetics', 'HighYield'],
    classLevel: 12,
    highYield: true,
    keyPoints: [
      'p = frequency of dominant allele (A), q = frequency of recessive allele (a)',
      'p² = homozygous dominant (AA), 2pq = heterozygous (Aa), q² = homozygous recessive (aa)',
      'Genetic drift: random change in allele frequency in SMALL populations (founder/bottleneck effect)',
      'Gene flow/Migration: movement of individuals/alleles between populations disturbs equilibrium',
      'HWE violation = Evolution is occurring'
    ],
    sillyMistakeTrap: 'HWE requires LARGE population — genetic drift is most significant in SMALL populations (bottleneck/founder effects are drift examples)!',
    doodle: 'graph'
  },

  {
    id: 'card-zoo-06',
    subject: 'zoology',
    chapterId: 'zoo-12-1',
    chapterName: 'Human Reproduction',
    title: 'Spermatogenesis vs Oogenesis — Key Differences',
    type: 'flashcard',
    handwrittenNote: 'Spermatogenesis: 1 PMC → 4 sperms (equal). Oogenesis: 1 Oogonium → 1 ovum + 3 polar bodies (UNequal)!',
    mnemonic: 'SPERMs = 4 equal. OOCYTE = 1 big egg + 3 tiny polar bodies. "One QUEEN one egg!"',
    content: 'Spermatogenesis in seminiferous tubules. Oogenesis starts at foetal stage; primary oocytes arrested in Prophase I at birth; resume at puberty. Secondary oocyte arrested in Metaphase II; completes meiosis II only after fertilisation.',
    ncertRef: 'NCERT Class 12, Ch 3, Pg 42–47',
    pyqTag: 'NEET 2023, 2022, 2020',
    tags: ['Reproduction', 'Spermatogenesis', 'Oogenesis', 'SuperHighYield'],
    classLevel: 12,
    highYield: true,
    keyPoints: [
      'Spermatogonium (2n) → Primary spermatocyte (2n) → Secondary spermatocyte (n) → Spermatid (n) → Sperm',
      'Oogonium (2n) → Primary oocyte (2n, arrested in Prophase I) → at puberty: Secondary oocyte (n) + 1st polar body',
      'Secondary oocyte arrested at Metaphase II — ovulated in this state',
      'Meiosis II complete ONLY after sperm penetration (fertilisation trigger)',
      'Sertoli cells nourish spermatids (like Tapetum in plants); Leydig cells secrete testosterone'
    ],
    sillyMistakeTrap: 'The ovulated cell is SECONDARY OOCYTE (n), NOT ovum! True ovum forms only AFTER fertilisation completes Meiosis II!',
    doodle: 'cell'
  },

  {
    id: 'card-zoo-07',
    subject: 'zoology',
    chapterId: 'zoo-12-5',
    chapterName: 'Biotechnology: Principles & Processes',
    title: 'PCR — 3 Steps & Their Temperatures',
    type: 'formula',
    handwrittenNote: 'PCR: Denature (94°C) → Annealing (50-65°C) → Extension (72°C, Taq Pol). Cycle 30x → 10⁶ copies! 🧬',
    mnemonic: 'DAE Temperature cycle: D=Denaturation@94°C, A=Annealing@55°C, E=Extension@72°C',
    content: 'Polymerase Chain Reaction (PCR) amplifies specific DNA sequences in vitro without living cells. Thermostable Taq polymerase (from Thermus aquaticus) allows repeated high-temperature cycles. Developed by Kary Mullis (Nobel Prize 1993).',
    ncertRef: 'NCERT Class 12, Ch 11, Pg 198–199',
    pyqTag: 'NEET 2023, 2022, 2021',
    tags: ['PCR', 'Biotechnology', 'DNAAmplification', 'SuperHighYield'],
    classLevel: 12,
    highYield: true,
    keyPoints: [
      'Step 1 — Denaturation: ~94°C, DNA strands separate (H-bonds break)',
      'Step 2 — Annealing: ~50–65°C, primers bind to complementary sequences',
      'Step 3 — Extension: ~72°C, Taq polymerase synthesises new strand from primers',
      'Taq polymerase: thermostable (active at 72°C, sourced from Thermus aquaticus hot spring bacteria)',
      '30 cycles → 2³⁰ ≈ 10⁹ copies of target sequence'
    ],
    sillyMistakeTrap: 'Primers in PCR are SHORT SYNTHETIC OLIGONUCLEOTIDES (DNA), NOT RNA primers like in cellular DNA replication!',
    doodle: 'pcr'
  },

  // ======================================================
  // =========== PHYSICS ==================================
  // ======================================================

  {
    id: 'card-phy-01',
    subject: 'physics',
    chapterId: 'phy-12-3',
    chapterName: 'Current Electricity',
    title: 'Drift Velocity, Current Density & Ohm\'s Microscopic Form',
    type: 'formula',
    handwrittenNote: 'I = n·e·A·vd → "NEAVD" or just say "I Knew Everything About Voltage Drops" 😄',
    mnemonic: 'NEAVD: n=charge density, e=electron charge, A=area, vd=drift velocity → I = neAvd',
    content: 'Drift velocity vd = (eEτ)/m. Current density J = I/A = nevd (vector). Electrical conductivity σ = ne²τ/m. Vector Ohm\'s Law: J = σE. Mobility μ = vd/E = eτ/m. Temperature ↑ → τ ↓ → vd ↓ → resistivity ↑.',
    ncertRef: 'NCERT Class 12, Ch 3, Pg 98–102',
    pyqTag: 'NEET 2023, 2022, 2021',
    tags: ['Electricity', 'DriftVelocity', 'CurrentDensity', 'SuperHighYield'],
    classLevel: 12,
    highYield: true,
    keyPoints: [
      'vd = eEτ/m (proportional to E, proportional to τ)',
      'Current I = neAvd (scalar despite using vectors in derivation)',
      'Current density J = nevd (VECTOR quantity, same direction as E)',
      'Mobility μ = vd/E = eτ/m, units: m²V⁻¹s⁻¹',
      'Conductors: temperature ↑ → τ ↓ → resistivity ρ ↑ (positive temperature coefficient)'
    ],
    sillyMistakeTrap: 'Current I is SCALAR. Current Density J is VECTOR. Mobility μ is always positive (even though electrons are negative, drift velocity is opposite to E).',
    doodle: 'circuit'
  },

  {
    id: 'card-phy-02',
    subject: 'physics',
    chapterId: 'phy-12-8',
    chapterName: 'Ray Optics & Optical Instruments',
    title: 'Prism — Minimum Deviation Formula & Conditions',
    type: 'formula',
    handwrittenNote: 'At δmin: i=e, r₁=r₂=A/2. Ray inside ∥ to base! μ = sin[(A+δ)/2] / sin[A/2]',
    mnemonic: 'SISO at minimum deviation: Same In Same Out (i = e, r₁ = r₂)',
    content: 'Refraction through prism: angle of deviation δ = i + e − A. At minimum deviation, refraction is symmetric: i = e and r₁ = r₂ = A/2. The refracted ray is parallel to the prism base (for equilateral prism). Cauchy\'s formula: μ = A + B/λ².',
    ncertRef: 'NCERT Class 12, Ch 9, Pg 331–333',
    pyqTag: 'NEET 2023, 2020, 2018',
    tags: ['RayOptics', 'Prism', 'Refraction', 'HighYield'],
    classLevel: 12,
    highYield: true,
    keyPoints: [
      'Prism formula: μ = sin[(A + δmin)/2] / sin(A/2)',
      'At minimum deviation: i = e (symmetric), r₁ = r₂ = A/2',
      'Thin prism (A < 10°): δ = (μ − 1)A (simple approximation)',
      'Angle of refraction at faces sum: r₁ + r₂ = A',
      'Dispersion: violet light (smallest λ) deviates most; red deviates least'
    ],
    sillyMistakeTrap: 'Ray inside prism is parallel to base ONLY for equilateral/isosceles prism AT minimum deviation. Not a universal rule!',
    doodle: 'prism'
  },

  {
    id: 'card-phy-03',
    subject: 'physics',
    chapterId: 'phy-11-9',
    chapterName: 'Thermal Properties & Thermodynamics',
    title: 'Thermodynamic Processes — Quick Comparison Table',
    type: 'formula',
    handwrittenNote: 'Isochoric: Q=ΔU. Isothermal: Q=W. Isobaric: all three. Adiabatic: Q=0 → W=-ΔU. ISO-TIMA!',
    mnemonic: 'ISO-TIMA: ISOchoric (V const), Thermic (T const), Isobaric (P const), AdIAbatic (Q=0)',
    content: 'First Law: ΔQ = ΔU + W. Sign convention: W = +ve when gas expands (does work ON surroundings). Adiabatic: PVγ = constant, γ = Cp/Cv. Carnot efficiency = 1 − T2/T1 (max possible).',
    ncertRef: 'NCERT Class 11, Ch 12, Pg 306–314',
    pyqTag: 'NEET 2023, 2021, 2019',
    tags: ['Thermodynamics', 'ThermodynamicProcesses', 'FirstLaw', 'HighYield'],
    classLevel: 11,
    highYield: true,
    keyPoints: [
      'Isochoric (ΔV=0): W=0, ΔQ=ΔU=nCvΔT',
      'Isothermal (ΔT=0): ΔU=0, Q=W=nRT·ln(V₂/V₁)',
      'Isobaric (P=const): W=PΔV=nRΔT, ΔQ=nCpΔT, ΔU=nCvΔT',
      'Adiabatic (ΔQ=0): W=−ΔU, PVγ=const, TVγ⁻¹=const, TP^(−γ/(γ-1))=const',
      'Carnot efficiency η = 1 − TL/TH (depends only on temperatures)'
    ],
    sillyMistakeTrap: 'Physics: W = +ve when gas expands. Chemistry: W = −PΔV (+ve for compression). Both use the SAME system but opposite sign conventions!',
    doodle: 'graph'
  },

  {
    id: 'card-phy-04',
    subject: 'physics',
    chapterId: 'phy-12-11',
    chapterName: 'Atoms & Nuclei',
    title: 'Bohr\'s Model — Radii, Velocity & Energy Levels',
    type: 'formula',
    handwrittenNote: 'rₙ = 0.529 × n²/Z Å. vₙ = 2.18×10⁶ × Z/n m/s. Eₙ = −13.6 × Z²/n² eV',
    mnemonic: 'r∝n², v∝1/n, E∝1/n² → "Radius grows, Velocity shrinks, Energy climbs to zero"',
    content: 'Bohr quantisation: mvr = nh/2π. Hydrogen-like atom energy levels: En = −13.6 Z²/n² eV. Ground state H: n=1, E₁ = −13.6 eV. Ionisation energy from ground state = 13.6 eV. Lyman series (UV): n→1. Balmer (visible): n→2. Paschen (IR): n→3.',
    ncertRef: 'NCERT Class 12, Ch 12, Pg 407–414',
    pyqTag: 'NEET 2023, 2022, 2020',
    tags: ['AtomicPhysics', 'BohrModel', 'EnergyLevels', 'SuperHighYield'],
    classLevel: 12,
    highYield: true,
    keyPoints: [
      'Bohr radius a₀ = 0.529 Å for H (n=1, Z=1)',
      'rₙ = 0.529 × n²/Z Å (r ∝ n², r ∝ 1/Z)',
      'Orbital velocity vₙ = 2.18×10⁶ × Z/n m/s (v ∝ Z, v ∝ 1/n)',
      'Energy Eₙ = −13.6 × Z²/n² eV (E ∝ Z², E ∝ 1/n²)',
      'Emission: Lyman (n≥2→1, UV), Balmer (n≥3→2, visible), Paschen (n≥4→3, IR)'
    ],
    sillyMistakeTrap: 'Bohr model gives NEGATIVE energy (electron is bound). n→∞ means E→0 (electron just barely free = ionised). Ground state = most negative = most stable!',
    doodle: 'atom'
  },

  {
    id: 'card-phy-05',
    subject: 'physics',
    chapterId: 'phy-12-12',
    chapterName: 'Semiconductor Electronics & Devices',
    title: 'Logic Gates — Truth Tables in One Memory Sheet',
    type: 'mnemonic',
    handwrittenNote: 'AND → "BOTH must be 1". OR → "EITHER can be 1". NOT → flip. NAND/NOR = AND/OR + NOT. XOR → "different inputs → 1"',
    mnemonic: 'Boolean Expressions: AND=AB, OR=A+B, NOT=Ā, NAND=AB̄, NOR=A+B̄, XOR=A⊕B (opposite gives 1)',
    content: 'Logic gates are electronic circuits implementing Boolean functions. Universal gates: NAND and NOR (any other gate can be made from either). De Morgan\'s theorems: A̅B̅ = Ā+B̄ (NAND = OR with NOTs). A̅+B̅ = Ā·B̄ (NOR = AND with NOTs).',
    ncertRef: 'NCERT Class 12, Ch 14, Pg 488–494',
    pyqTag: 'NEET 2023, 2022, 2021',
    tags: ['Semiconductors', 'LogicGates', 'BooleanAlgebra', 'HighYield'],
    classLevel: 12,
    highYield: true,
    keyPoints: [
      'AND gate: Y=A·B; output 1 only when A=1 AND B=1',
      'OR gate: Y=A+B; output 1 when A=1 OR B=1 (or both)',
      'NOT gate: Y=Ā; output is always opposite of input',
      'NAND gate: Y=A̅·B̅ = Ā+B̄; NOT of AND (Universal gate)',
      'NOR gate: Y=A̅+B̅ = Ā·B̄; NOT of OR (Universal gate)',
      'XOR gate: Y=A⊕B; output 1 only when inputs are DIFFERENT'
    ],
    sillyMistakeTrap: 'XOR gives output 1 for DIFFERENT inputs (0,1 or 1,0), NOT for same inputs (0,0→0, 1,1→0). XNOR is the opposite!',
    doodle: 'circuit'
  },

  {
    id: 'card-phy-06',
    subject: 'physics',
    chapterId: 'phy-11-6',
    chapterName: 'System of Particles & Rotational Motion',
    title: 'Moment of Inertia — Common Shapes Reference Card',
    type: 'formula',
    handwrittenNote: 'Rod about centre: ML²/12. About end: ML²/3. Disc: MR²/2. Ring: MR². Solid Sphere: 2MR²/5',
    mnemonic: 'RDDS formula: Ring=MR², Disc=MR²/2, Disc-axis-rim=3MR²/2, Solid Sphere=2MR²/5, Hollow Sphere=2MR²/3',
    content: 'Moment of Inertia I = Σmr² (resistance to rotational motion). Parallel Axis Theorem: I = Icm + Md². Perpendicular Axis Theorem (planar bodies only): Iz = Ix + Iy. Radius of gyration K: I = MK².',
    ncertRef: 'NCERT Class 11, Ch 7, Pg 154–159',
    pyqTag: 'NEET 2023, 2022, 2020',
    tags: ['RotationalMotion', 'MomentOfInertia', 'Mechanics', 'SuperHighYield'],
    classLevel: 11,
    highYield: true,
    keyPoints: [
      'Ring about diameter: MR²/2 (use perpendicular axis theorem: Iz=MR², so Ix=Iy=MR²/2)',
      'Disc about central axis (⊥ to plane): MR²/2',
      'Disc about diameter: MR²/4',
      'Solid Sphere: 2MR²/5 (axis through centre)',
      'Hollow Sphere (shell): 2MR²/3',
      'Parallel Axis theorem: I_edge = I_cm + Md²'
    ],
    sillyMistakeTrap: 'Perpendicular Axis theorem applies ONLY to planar 2D laminae, NOT 3D objects like sphere or cylinder!',
    doodle: 'wheel'
  },

  // ======================================================
  // =========== CHEMISTRY ================================
  // ======================================================

  {
    id: 'card-chem-01',
    subject: 'chemistry',
    chapterId: 'chem-11-4',
    chapterName: 'Chemical Bonding & Molecular Structure',
    title: 'VSEPR — Shape Table for Common Molecules',
    type: 'mnemonic',
    handwrittenNote: 'Steric No 2=Linear, 3=Trigonal planar, 4=Tetrahedral, 5=Trigonal Bipyramidal, 6=Octahedral + lone pairs distort!',
    mnemonic: 'SN → Shape: 2=Lin, 3=TPlan, 4=Tetra, 5=TBipyr, 6=Octa. Lone pairs REMOVE axial first in TBP, equatorial in Octa!',
    content: 'VSEPR: electron pairs repel; lone pairs repel more than bond pairs. Repulsion order: lp-lp > lp-bp > bp-bp. Steric number = bond pairs + lone pairs. NH₃: 4 pairs, 1 lp → pyramidal (107°). H₂O: 4 pairs, 2 lp → bent (104.5°).',
    ncertRef: 'NCERT Class 11, Ch 4, Pg 110–115',
    pyqTag: 'NEET 2023, 2022, 2021',
    tags: ['ChemicalBonding', 'VSEPR', 'MolecularShape', 'SuperHighYield'],
    classLevel: 11,
    highYield: true,
    keyPoints: [
      'SF₄ (sp³d, 1 lp): See-Saw shape',
      'ClF₃ (sp³d, 2 lp): T-Shaped',
      'XeF₂ (sp³d, 3 lp): Linear',
      'XeF₄ (sp³d², 2 lp): Square Planar (lp at axial in octahedral arrangement)',
      'BrF₅ (sp³d², 1 lp): Square Pyramidal',
      'Bond angle: CH₄ (109.5°) > NH₃ (107°) > H₂O (104.5°) — lone pair compresses bond pairs'
    ],
    sillyMistakeTrap: 'Electron pair geometry vs molecular geometry: NH₃ is TETRAHEDRAL in e-pair geometry but PYRAMIDAL in molecular shape (lone pair not counted in shape)',
    doodle: 'molecule'
  },

  {
    id: 'card-chem-02',
    subject: 'chemistry',
    chapterId: 'chem-11-8',
    chapterName: 'Organic Chemistry: GOC',
    title: 'Inductive Effect Order — -I and +I Groups Ranked',
    type: 'mnemonic',
    handwrittenNote: '-I Order: NF₃⁺ > NO₂ > CN > COOH > F > Cl > Br > I > OH > NH₂ > CH₃ > H',
    mnemonic: 'Strongest -I EWGs: "Never No Cute Frenchman Can Bring Ideas Over New Hotness" (NF₃⁺, NO₂, CN, F, Cl, Br, I, OH, NH₂, H)',
    content: 'Inductive effect: permanent electron displacement along σ bonds due to electronegativity differences. -I groups withdraw electron density (EWG). +I groups donate electron density (EDG). Decreases rapidly — negligible beyond 3rd carbon.',
    ncertRef: 'NCERT Class 11, Ch 12, Pg 351–354',
    pyqTag: 'NEET 2023, 2022, 2020',
    tags: ['GOC', 'InductiveEffect', 'Stability', 'HighYield'],
    classLevel: 11,
    highYield: true,
    keyPoints: [
      '-I order: –NF₃⁺ > –NR₃⁺ > –NO₂ > –SO₃H > –CN > –CHO > –COOH > –F > –Cl > –Br > –I > –OR > –OH > –NH₂ > Aryl > –CH₃',
      '+I order: –O⁻ > –COO⁻ > tert-alkyl > sec-alkyl > prim-alkyl > –CH₃ > –D > –H',
      'Carbocation stability: 3° > 2° > 1° > CH₃⁺ (stabilised by +I alkyl groups)',
      'Carbanion stability: CH₃⁻ > 1° > 2° > 3° (destabilised by +I groups, stabilised by -I groups)',
      'Acidity of carboxylic acids: more -I substituent → stronger acid (more stable carboxylate)'
    ],
    sillyMistakeTrap: '-I effect travels through SIGMA bonds only and fades beyond 2–3 carbons. Mesomeric effect travels through PI bonds and doesn\'t fade with distance!',
    doodle: 'molecule'
  },

  {
    id: 'card-chem-03',
    subject: 'chemistry',
    chapterId: 'chem-12-5',
    chapterName: 'Coordination Compounds',
    title: 'Spectrochemical Series — Strongest to Weakest Field Ligand',
    type: 'mnemonic',
    handwrittenNote: 'I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < CN⁻ < CO → Weakest to Strongest!',
    mnemonic: '"I Bring Some Clubs For Our Happy And Energetic Curious Colleagues" (I⁻, Br⁻, S²⁻, Cl⁻, F⁻, OH⁻, H₂O, NH₃, en, CN⁻, CO)',
    content: 'Spectrochemical series arranges ligands by Δ₀ (crystal field splitting). Strong field ligands (CN⁻, CO, en) → high Δ₀ → force electron pairing → low-spin. Weak field (I⁻, Br⁻, Cl⁻) → low Δ₀ → no forced pairing → high-spin.',
    ncertRef: 'NCERT Class 12, Ch 9, Pg 252–255',
    pyqTag: 'NEET 2023, 2022, 2021',
    tags: ['CoordinationChemistry', 'SpectrochemicalSeries', 'Ligands', 'SuperHighYield'],
    classLevel: 12,
    highYield: true,
    keyPoints: [
      'CO is THE STRONGEST field ligand in the series',
      'Strong field (Δ₀ > P): electron pairing → inner orbital complex (d²sp³ or dsp²)',
      'Weak field (Δ₀ < P): no forced pairing → outer orbital complex (sp³d² or sp³)',
      '[Ni(CO)₄]: Ni is zero-valent, CO = strong, square planar → dsp² (diamagnetic)',
      '[CoF₆]³⁻: F⁻ = weak field → sp³d² outer orbital, paramagnetic (4 unpaired e⁻)'
    ],
    sillyMistakeTrap: 'CO > CN⁻ in spectrochemical series. CO is the strongest! NH₃ comes AFTER H₂O (NH₃ is moderate-strong, not weak).',
    doodle: 'molecule'
  },

  {
    id: 'card-chem-04',
    subject: 'chemistry',
    chapterId: 'chem-11-6',
    chapterName: 'Equilibrium',
    title: 'pH & Buffer Systems — Henderson–Hasselbalch & Indicators',
    type: 'formula',
    handwrittenNote: 'pH = pKa + log([A⁻]/[HA]). Buffer works best when pH ≈ pKa. Blood buffer = H₂CO₃/HCO₃⁻ (pKa 6.1)!',
    mnemonic: 'HH equation: pH = pKa + log(Salt/Acid). At half-equivalence point: [acid]=[salt] → pH = pKa!',
    content: 'Buffer resists pH change on addition of acid/base. Acidic buffer: weak acid + its conjugate base (salt). Henderson–Hasselbalch equation: pH = pKa + log([A⁻]/[HA]). Blood buffer: carbonic acid/bicarbonate (7.35–7.45 normal range).',
    ncertRef: 'NCERT Class 11, Ch 7, Pg 213–217',
    pyqTag: 'NEET 2022, 2020, 2018',
    tags: ['Equilibrium', 'Buffer', 'pH', 'HighYield'],
    classLevel: 11,
    highYield: true,
    keyPoints: [
      'Acidic buffer: weak acid + salt of same acid (e.g., CH₃COOH + CH₃COONa)',
      'Basic buffer: weak base + salt of same base (e.g., NH₄OH + NH₄Cl)',
      'Buffer capacity: maximum near pH = pKa (ratio A⁻/HA = 1)',
      'Common indicator ranges: Phenolphthalein 8.3–10 (colourless → pink); Methyl Orange 3.1–4.4 (red→orange)',
      'Kw = Ka × Kb (at 25°C, Kw = 10⁻¹⁴); pKa + pKb = 14'
    ],
    sillyMistakeTrap: 'Phenolphthalein is COLOURLESS in acidic solution and PINK/RED in basic solution (not the other way!). Methyl orange is RED in acid, YELLOW/ORANGE in base.',
    doodle: 'flask'
  },

  {
    id: 'card-chem-05',
    subject: 'chemistry',
    chapterId: 'chem-12-8',
    chapterName: 'Aldehydes, Ketones & Carboxylic Acids',
    title: 'Aldol Condensation vs Cannizzaro Reaction — When Each Occurs',
    type: 'flashcard',
    handwrittenNote: 'Aldol: needs α-Hydrogen → forms β-hydroxy aldehyde. Cannizzaro: NO α-H → one oxidises, one reduces (disproportionation)!',
    mnemonic: 'ALPHA H → ALDOL. NO ALPHA H → CANNIZZARO! (A for Alpha = Aldol)',
    content: 'Aldol condensation: Aldehydes/ketones with at least one α-hydrogen undergo base-catalysed self-condensation → β-hydroxy carbonyl compound. Cannizzaro reaction: Aldehydes WITHOUT α-hydrogen (HCHO, PhCHO) undergo disproportionation in conc. NaOH → one becomes acid (salt), one becomes alcohol.',
    ncertRef: 'NCERT Class 12, Ch 12, Pg 354–358',
    pyqTag: 'NEET 2023, 2022, 2021',
    tags: ['OrganicChemistry', 'Carbonyl', 'Reactions', 'SuperHighYield'],
    classLevel: 12,
    highYield: true,
    keyPoints: [
      'Aldol: dilute NaOH + aldehyde with α-H → β-hydroxy aldehyde → dehydration → α,β-unsaturated aldehyde',
      'Cannizzaro: HCHO (formaldehyde), (CH₃)₃C-CHO (trimethylacetaldehyde), PhCHO (benzaldehyde) — no α-H',
      'Cross-aldol condensation: with two different aldehydes → mixture of products (less useful)',
      'Intramolecular Cannizzaro: with non-enolisable keto-aldehyde',
      'Tollen\'s test: distinguishes aldehyde from ketone (silver mirror with CHO, not C=O)'
    ],
    sillyMistakeTrap: 'Benzaldehyde (PhCHO) has NO α-H (the carbon α to CHO is the aromatic ring which has no H free for enolisation) → Cannizzaro, NOT Aldol!',
    doodle: 'flask'
  },

  {
    id: 'card-chem-06',
    subject: 'chemistry',
    chapterId: 'chem-12-2',
    chapterName: 'Electrochemistry',
    title: 'Nernst Equation, Cell EMF & Electrolysis Key Formulas',
    type: 'formula',
    handwrittenNote: 'E = E° − (RT/nF)·ln Q. At 25°C: E = E° − (0.0592/n)·log Q. Remember: at equilibrium, E=0, Q=K!',
    mnemonic: 'NERNST: Normal-E minus Reactant Natural log divided by n and F, Simplified at 25°C: 0.0592/n × log Q',
    content: 'Nernst equation gives cell potential as function of ion concentrations. At equilibrium (E=0): ln K = nFE°/RT. Faraday\'s laws: m = (M/nF)·Q (mass deposited ∝ charge passed). 1 Faraday = 96500 C = charge of 1 mol electrons.',
    ncertRef: 'NCERT Class 12, Ch 3 [Electrochemistry], Pg 68–74',
    pyqTag: 'NEET 2023, 2022',
    tags: ['Electrochemistry', 'NernstEquation', 'CellEMF', 'HighYield'],
    classLevel: 12,
    highYield: true,
    keyPoints: [
      'E_cell = E°_cell − (0.0592/n)·log₁₀[Q] at 25°C',
      'ΔG° = −nFE° = −RT ln K',
      'If E° > 0 → ΔG° < 0 → spontaneous cell reaction',
      'Kohlrausch\'s law: Λ°m(electrolyte) = Σνᵢ·λ°ᵢ (sum of ionic conductivities)',
      'Faraday\'s 1st law: m ∝ Q. 2nd law: m ∝ M/n (equivalent weight)'
    ],
    sillyMistakeTrap: 'At equilibrium E_cell = 0 (not E°!). E° is standard EMF at 1M, 25°C. E is actual cell potential at given concentrations.',
    doodle: 'circuit'
  },

  {
    id: 'card-chem-07',
    subject: 'chemistry',
    chapterId: 'chem-11-2',
    chapterName: 'Structure of Atom',
    title: 'Quantum Numbers — Rules, Ranges & Aufbau Principle',
    type: 'mnemonic',
    handwrittenNote: 'n=shell, l=subshell, mₗ=orbital, mₛ=spin. Pauli: no 2 e⁻ same 4 QNs. Hund: half-fill before full-fill!',
    mnemonic: 'PLUMS rule for QN ranges: Principal (n: 1,2,3...), L (0 to n-1), mL (−l to +l), mS (±½). "Put Large Mango Slices"',
    content: 'Four quantum numbers completely describe an electron in an atom. n: principal (energy, size). l: azimuthal (shape). mₗ: magnetic (orientation). mₛ: spin (+½ or −½). Aufbau principle: fill lower energy orbitals first. Pauli: max 2 electrons per orbital (opposite spins). Hund: maximum multiplicity.',
    ncertRef: 'NCERT Class 11, Ch 2, Pg 62–70',
    pyqTag: 'NEET 2022, 2021, 2019',
    tags: ['AtomicStructure', 'QuantumNumbers', 'Electrons', 'HighYield'],
    classLevel: 11,
    highYield: true,
    keyPoints: [
      'n = 1,2,3... → K,L,M... shells; max e⁻ = 2n²',
      'l = 0 (s), 1 (p), 2 (d), 3 (f) → shape; range: 0 to n−1',
      'mₗ = −l to +l (including 0) → (2l+1) orbitals per subshell',
      'mₛ = +½ or −½ (spin up or spin down)',
      'Hund\'s rule: degenerate orbitals filled with 1 e⁻ each first, then paired; maximises S',
      'Energy order for filling: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d...'
    ],
    sillyMistakeTrap: 'Cr = [Ar]3d⁵4s¹ and Cu = [Ar]3d¹⁰4s¹ — EXCEPTIONS because half-filled and fully-filled d orbitals are extra stable!',
    doodle: 'atom'
  },
];
