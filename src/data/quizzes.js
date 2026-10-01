export const ALL_QUIZZES = [
  // Physics Quizzes
  {
    id: 'quiz-phy-01',
    subject: 'physics',
    chapterId: 'phy-ch-01',
    topic: 'Units and Dimensions',
    type: 'mcq',
    question: 'Which of the following physical quantities has the dimensional formula [M¹ L² T⁻²]?',
    options: ['Power', 'Work and Torque', 'Impulse', 'Force'],
    correctIndex: 1,
    explanation: 'Both Work (F · s) and Torque (r × F) possess the dimensional formula [M¹ L² T⁻²]. Power has [M¹ L² T⁻³].',
    ncertRef: 'NCERT Class 11 Physics Chapter 2'
  },
  {
    id: 'quiz-phy-02',
    subject: 'physics',
    chapterId: 'phy-ch-06',
    topic: 'Gravitation',
    type: 'mcq',
    question: 'If the orbital velocity of a near-Earth satellite is vo, its escape velocity ve is equal to:',
    options: ['2 · vo', '√2 · vo', 'vo / √2', '4 · vo'],
    correctIndex: 1,
    explanation: 'Escape velocity ve = √(2GM/R) and orbital velocity vo = √(GM/R), hence ve = √2 · vo ≈ 1.414 · vo.',
    ncertRef: 'NCERT Class 11 Physics Chapter 8'
  },
  {
    id: 'quiz-phy-03',
    subject: 'physics',
    chapterId: 'phy-ch-12',
    topic: 'Current Electricity',
    type: 'mcq',
    question: 'A wire of resistance R is stretched uniformly such that its length increases by 100% (doubles). What is its new resistance?',
    options: ['2 R', '4 R', 'R / 2', '8 R'],
    correctIndex: 1,
    explanation: 'Since wire volume is conserved (V = A·L = const), doubling length (2L) halves cross-sectional area (A/2). R\' = ρ(2L)/(A/2) = 4 R.',
    ncertRef: 'NCERT Class 12 Physics Chapter 3'
  },
  {
    id: 'quiz-phy-04',
    subject: 'physics',
    chapterId: 'phy-ch-14',
    topic: 'LCR Resonance',
    type: 'mcq',
    question: 'In a series LCR circuit at electrical resonance, which statement is TRUE?',
    options: [
      'Impedance Z is at its maximum value',
      'Power factor is cos Φ = 1 (purely resistive)',
      'Current is at its minimum value',
      'Inductive reactance XL is zero'
    ],
    correctIndex: 1,
    explanation: 'At resonance, XL = XC, so net reactance is zero. The impedance Z = R (minimum), current is maximum, and power factor is cos(0) = 1.',
    ncertRef: 'NCERT Class 12 Physics Chapter 7'
  },
  {
    id: 'quiz-phy-05',
    subject: 'physics',
    chapterId: 'phy-ch-15',
    topic: 'EM Waves',
    type: 'mcq',
    question: 'Which electromagnetic waves have the highest photon energy and highest frequency in the spectrum?',
    options: ['X-rays', 'Radio waves', 'Gamma rays', 'Microwaves'],
    correctIndex: 2,
    explanation: 'Gamma rays have the highest frequency (> 10¹⁹ Hz) and highest photon energy E = hν according to the EM spectrum sequence.',
    ncertRef: 'NCERT Class 12 Physics Chapter 8'
  },

  // Chemistry Quizzes
  {
    id: 'quiz-chem-01',
    subject: 'chemistry',
    chapterId: 'chem-ch-01',
    topic: 'Mole Concept',
    type: 'mcq',
    question: 'Which concentration term is temperature-independent because it relies strictly on solvent mass rather than solution volume?',
    options: ['Molarity (M)', 'Normality (N)', 'Molality (m)', 'Volume percentage (% v/v)'],
    correctIndex: 2,
    explanation: 'Molality (m = moles of solute / kg of solvent) depends only on mass, which does not expand or contract with temperature.',
    ncertRef: 'NCERT Class 11 Chemistry Chapter 1'
  },
  {
    id: 'quiz-chem-02',
    subject: 'chemistry',
    chapterId: 'chem-ch-03',
    topic: 'Periodic Trends',
    type: 'mcq',
    question: 'Why is the first ionization enthalpy of Nitrogen higher than that of Oxygen?',
    options: [
      'Nitrogen has higher atomic radius',
      'Nitrogen has an extra-stable half-filled 2p³ subshell',
      'Oxygen has smaller nuclear charge',
      'Nitrogen is more electronegative than Oxygen'
    ],
    correctIndex: 1,
    explanation: 'Nitrogen (1s² 2s² 2p³) has a half-filled 2p subshell with high exchange energy, making electron removal harder than in Oxygen (2p⁴).',
    ncertRef: 'NCERT Class 11 Chemistry Chapter 3'
  },
  {
    id: 'quiz-chem-03',
    subject: 'chemistry',
    chapterId: 'chem-ch-04',
    topic: 'Hybridization',
    type: 'mcq',
    question: 'What is the hybridization and geometry of Xenon Tetrafluoride (XeF4)?',
    options: ['sp³d, See-saw', 'sp³d², Square Planar', 'sp³d², Octahedral', 'sp³, Tetrahedral'],
    correctIndex: 1,
    explanation: 'XeF4 has Steric Number ½(8+4) = 6 (sp³d²) with 4 bond pairs and 2 lone pairs situated axially, resulting in a square planar geometry.',
    ncertRef: 'NCERT Class 11 Chemistry Chapter 4'
  },
  {
    id: 'quiz-chem-04',
    subject: 'chemistry',
    chapterId: 'chem-ch-14',
    topic: 'Coordination Compounds',
    type: 'mcq',
    question: 'Which of the following ligands produces the strongest crystal field splitting (Δo) in octahedral complexes?',
    options: ['Cl⁻', 'H₂O', 'CN⁻', 'CO (Carbonyl)'],
    correctIndex: 3,
    explanation: 'Carbon monoxide (CO) is the strongest ligand in the spectrochemical series due to synergistic π-backbonding with transition metals.',
    ncertRef: 'NCERT Class 12 Chemistry Chapter 9'
  },
  {
    id: 'quiz-chem-05',
    subject: 'chemistry',
    chapterId: 'chem-ch-17',
    topic: 'Aldol vs Cannizzaro',
    type: 'mcq',
    question: 'Which of the following aldehydes undergoes Cannizzaro reaction when treated with concentrated 50% NaOH solution?',
    options: ['Acetaldehyde (CH₃CHO)', 'Benzaldehyde (C₆H₅CHO)', 'Acetone (CH₃COCH₃)', 'Propanal (CH₃CH₂CHO)'],
    correctIndex: 1,
    explanation: 'Benzaldehyde has no alpha-hydrogens attached to the carbonyl carbon, so it disproportionates via the Cannizzaro reaction into benzyl alcohol and sodium benzoate.',
    ncertRef: 'NCERT Class 12 Chemistry Chapter 12'
  },
  {
    id: 'quiz-chem-06',
    subject: 'chemistry',
    chapterId: 'chem-ch-19',
    topic: 'Biomolecules',
    type: 'mcq',
    question: 'Which of the following standard natural amino acids is optically inactive (achiral)?',
    options: ['Alanine', 'Glycine', 'Valine', 'Leucine'],
    correctIndex: 1,
    explanation: 'Glycine (H₂N-CH₂-COOH) has two identical hydrogen atoms on its α-carbon, making it symmetrical and optically inactive.',
    ncertRef: 'NCERT Class 12 Chemistry Chapter 14'
  },

  // Biology Quizzes
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
    id: 'quiz-bio-03',
    subject: 'biology',
    chapterId: 'bio-ch-10',
    topic: 'Cell Cycle',
    type: 'mcq',
    question: 'During which stage of Meiosis I does crossing over between non-sister chromatids take place?',
    options: ['Zygotene', 'Pachytene', 'Diplotene', 'Diakinesis'],
    correctIndex: 1,
    explanation: 'Crossing over is an enzyme-mediated process catalyzed by Recombinase that occurs specifically in the Pachytene stage.',
    ncertRef: 'NCERT Class 11 Biology Chapter 10'
  },
  {
    id: 'quiz-bio-04',
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
    id: 'quiz-bio-05',
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
    id: 'quiz-bio-06',
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
    id: 'quiz-bio-07',
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
    id: 'quiz-bio-08',
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
