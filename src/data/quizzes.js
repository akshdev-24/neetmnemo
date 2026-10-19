/**
 * High-Yield NEET Biology Quizzes
 * 100% NCERT verified questions across Botany & Zoology (Class 11 & Class 12)
 */

export const ALL_QUIZZES = [
  {
    id: 'quiz-bio-01',
    subject: 'biology',
    chapterId: 'bio-ch-01',
    topic: 'Taxonomic Hierarchy',
    type: 'mcq',
    question: 'In the taxonomic hierarchy (King Philip Came Over For Good Soup), which category comes immediately between Class and Family?',
    options: ['Phylum', 'Order', 'Genus', 'Species'],
    correctIndex: 1,
    explanation: 'Order comes immediately after Class and before Family (Kingdom → Phylum → Class → Order → Family → Genus → Species).',
    ncertRef: 'NCERT Class 11 Biology Chapter 1'
  },
  {
    id: 'quiz-bio-02',
    subject: 'biology',
    chapterId: 'bio-ch-02',
    topic: 'Biological Classification',
    type: 'mcq',
    question: 'According to Whittaker\'s 5-Kingdom system, which kingdom includes unicellular eukaryotic organisms such as Amoeba, Paramecium, and Euglena?',
    options: ['Monera', 'Protista', 'Fungi', 'Plantae'],
    correctIndex: 1,
    explanation: 'Kingdom Protista encompasses all single-celled eukaryotic organisms including Chrysophytes, Dinoflagellates, Euglenoids, Slime moulds, and Protozoans.',
    ncertRef: 'NCERT Class 11 Biology Chapter 2'
  },
  {
    id: 'quiz-bio-03',
    subject: 'biology',
    chapterId: 'bio-ch-03',
    topic: 'Plant Kingdom',
    type: 'mcq',
    question: 'Floridean starch found as stored food in red algae (Rhodophyceae) is structurally very similar to:',
    options: ['Cellulose and Chitin', 'Amylopectin and Glycogen', 'Mannitol and Laminarin', 'Inulin and Sucrose'],
    correctIndex: 1,
    explanation: 'NCERT states that Floridean starch stored in Rhodophyceae has branched structural similarity to amylopectin and glycogen.',
    ncertRef: 'NCERT Class 11 Biology Chapter 3'
  },
  {
    id: 'quiz-bio-04',
    subject: 'biology',
    chapterId: 'bio-ch-04',
    topic: 'Animal Kingdom',
    type: 'mcq',
    question: 'Which of the following invertebrate phyla exhibits a pseudocoelom (false body cavity derived from blastocoel)?',
    options: ['Platyhelminthes', 'Aschelminthes (Roundworms)', 'Annelida', 'Arthropoda'],
    correctIndex: 1,
    explanation: 'Aschelminthes (Nematodes) possess a pseudocoelom where mesoderm is present as scattered pouches between ectoderm and endoderm.',
    ncertRef: 'NCERT Class 11 Biology Chapter 4'
  },
  {
    id: 'quiz-bio-05',
    subject: 'biology',
    chapterId: 'bio-ch-08',
    topic: 'Cell Biology',
    type: 'mcq',
    question: 'Which organelle is semi-autonomous, contains 70S ribosomes and circular DNA, and divides by fission like bacteria?',
    options: ['Golgi apparatus', 'Mitochondria', 'Endoplasmic reticulum', 'Lysosome'],
    correctIndex: 1,
    explanation: 'Mitochondria (and Chloroplasts) have their own circular double-stranded DNA, 70S ribosomes, and divide independently via binary fission.',
    ncertRef: 'NCERT Class 11 Biology Chapter 8'
  },
  {
    id: 'quiz-bio-06',
    subject: 'biology',
    chapterId: 'bio-ch-10',
    topic: 'Cell Cycle & Meiosis',
    type: 'mcq',
    question: 'During which stage of Meiosis I does crossing over between non-sister chromatids of homologous chromosomes take place?',
    options: ['Zygotene', 'Pachytene', 'Diplotene', 'Diakinesis'],
    correctIndex: 1,
    explanation: 'Crossing over is an enzyme-mediated process catalyzed by Recombinase that occurs specifically in the Pachytene stage.',
    ncertRef: 'NCERT Class 11 Biology Chapter 10'
  },
  {
    id: 'quiz-bio-07',
    subject: 'biology',
    chapterId: 'bio-ch-11',
    topic: 'Photosynthesis',
    type: 'mcq',
    question: 'In C4 plants (e.g. Maize, Sugarcane), the primary CO2 acceptor and the first stable 4-carbon product are respectively:',
    options: ['RuBP and 3-PGA', 'PEP and Oxaloacetate (OAA)', 'Pyruvate and Malate', 'RuBisCO and Glucose'],
    correctIndex: 1,
    explanation: 'In C4 plants, PEP (Phosphoenolpyruvate, 3C) is the primary CO2 acceptor catalyzed by PEPcase, producing OAA (4C).',
    ncertRef: 'NCERT Class 11 Biology Chapter 13'
  },
  {
    id: 'quiz-bio-08',
    subject: 'biology',
    chapterId: 'bio-ch-13',
    topic: 'Plant Hormones',
    type: 'mcq',
    question: 'Which phytohormone is widely known as the "stress hormone" for inducing stomatal closure under water scarcity?',
    options: ['Gibberellic Acid', 'Abscisic Acid (ABA)', 'Cytokinin', 'Auxin'],
    correctIndex: 1,
    explanation: 'Abscisic Acid (ABA) stimulates the closure of stomata during water stress and increases plant tolerance to adverse conditions.',
    ncertRef: 'NCERT Class 11 Biology Chapter 15'
  },
  {
    id: 'quiz-bio-09',
    subject: 'biology',
    chapterId: 'bio-ch-15',
    topic: 'Heart Valves',
    type: 'mcq',
    question: 'According to the mnemonic "Try Before You Buy", which valve is situated between the Right Atrium and Right Ventricle?',
    options: ['Bicuspid (Mitral) Valve', 'Tricuspid Valve', 'Aortic Semilunar Valve', 'Pulmonary Valve'],
    correctIndex: 1,
    explanation: 'The Tricuspid valve (TRI = Right) guards the right atrioventricular aperture, while Bicuspid (BI = Left) guards the left.',
    ncertRef: 'NCERT Class 11 Biology Chapter 18'
  },
  {
    id: 'quiz-bio-10',
    subject: 'biology',
    chapterId: 'bio-ch-19',
    topic: 'Endocrine Glands',
    type: 'mcq',
    question: 'Which layer of the adrenal cortex is outermost and secretes mineralocorticoids (Aldosterone)?',
    options: ['Zona Reticularis', 'Zona Fasciculata', 'Zona Glomerulosa', 'Adrenal Medulla'],
    correctIndex: 2,
    explanation: 'Outer to inner layers follow G-F-R: Zona Glomerulosa (Mineralocorticoids/Salt), Zona Fasciculata (Glucocorticoids/Sugar), Zona Reticularis (Sex corticoids).',
    ncertRef: 'NCERT Class 11 Biology Chapter 22'
  },
  {
    id: 'quiz-bio-11',
    subject: 'biology',
    chapterId: 'bio-ch-24',
    topic: 'Molecular Genetics',
    type: 'mcq',
    question: 'Which of the following triplet codons serves dual function as translation initiator codon and coding for Methionine?',
    options: ['UAA', 'AUG', 'UGA', 'UAG'],
    correctIndex: 1,
    explanation: 'AUG has dual functions: it codes for Methionine (Met) and acts as the initiator codon for protein translation.',
    ncertRef: 'NCERT Class 12 Biology Chapter 6'
  },
  {
    id: 'quiz-bio-12',
    subject: 'biology',
    chapterId: 'bio-ch-32',
    topic: 'Ecology & Biodiversity',
    type: 'mcq',
    question: 'According to Edward Wilson\'s "Evil Quartet", which is the single MOST important cause driving species extinction?',
    options: ['Alien species invasion', 'Habitat loss and fragmentation', 'Co-extinctions', 'Over-exploitation'],
    correctIndex: 1,
    explanation: 'Habitat loss and fragmentation (e.g., clearing of Amazon rainforest) is the single most important factor driving animal and plant extinctions.',
    ncertRef: 'NCERT Class 12 Biology Chapter 15'
  }
];
