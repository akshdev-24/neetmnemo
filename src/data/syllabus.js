// Full NTA NEET UG Official Syllabus Architecture (Class 11 & Class 12)
export const SYLLABUS_DATA = {
  physics: {
    id: 'physics',
    name: 'Physics',
    color: '#3b82f6',
    accentColor: '#dbeafe',
    darkAccent: '#1d4ed8',
    icon: 'Atom',
    class11: [
      { id: 'phy-11-1', name: 'Units & Measurements', weightage: 'High (2-3 Qs)', ncertChapter: 'Ch 1', cardsCount: 6 },
      { id: 'phy-11-2', name: 'Motion in a Straight Line', weightage: 'Medium (1-2 Qs)', ncertChapter: 'Ch 2', cardsCount: 5 },
      { id: 'phy-11-3', name: 'Motion in a Plane (Vectors & Projectile)', weightage: 'High (2-3 Qs)', ncertChapter: 'Ch 3', cardsCount: 7 },
      { id: 'phy-11-4', name: 'Laws of Motion & Friction', weightage: 'High (2-3 Qs)', ncertChapter: 'Ch 4', cardsCount: 8 },
      { id: 'phy-11-5', name: 'Work, Energy & Power', weightage: 'High (2-3 Qs)', ncertChapter: 'Ch 5', cardsCount: 6 },
      { id: 'phy-11-6', name: 'System of Particles & Rotational Motion', weightage: 'Very High (3-4 Qs)', ncertChapter: 'Ch 6', cardsCount: 9 },
      { id: 'phy-11-7', name: 'Gravitation', weightage: 'Medium (2 Qs)', ncertChapter: 'Ch 7', cardsCount: 5 },
      { id: 'phy-11-8', name: 'Mechanical Properties of Solids & Fluids', weightage: 'High (2-3 Qs)', ncertChapter: 'Ch 8-9', cardsCount: 7 },
      { id: 'phy-11-9', name: 'Thermal Properties & Thermodynamics', weightage: 'Very High (3 Qs)', ncertChapter: 'Ch 10-11', cardsCount: 8 },
      { id: 'phy-11-10', name: 'Oscillations & Waves (SHM)', weightage: 'High (2-3 Qs)', ncertChapter: 'Ch 12-13', cardsCount: 7 }
    ],
    class12: [
      { id: 'phy-12-1', name: 'Electric Charges & Fields (Electrostatics)', weightage: 'Very High (3 Qs)', ncertChapter: 'Ch 1', cardsCount: 8 },
      { id: 'phy-12-2', name: 'Electrostatic Potential & Capacitance', weightage: 'High (2 Qs)', ncertChapter: 'Ch 2', cardsCount: 6 },
      { id: 'phy-12-3', name: 'Current Electricity', weightage: 'Super High (3-4 Qs)', ncertChapter: 'Ch 3', cardsCount: 10 },
      { id: 'phy-12-4', name: 'Moving Charges & Magnetism', weightage: 'High (2-3 Qs)', ncertChapter: 'Ch 4', cardsCount: 7 },
      { id: 'phy-12-5', name: 'Magnetism & Matter', weightage: 'Low (1 Q)', ncertChapter: 'Ch 5', cardsCount: 4 },
      { id: 'phy-12-6', name: 'Electromagnetic Induction & AC', weightage: 'High (2-3 Qs)', ncertChapter: 'Ch 6-7', cardsCount: 8 },
      { id: 'phy-12-7', name: 'Electromagnetic Waves', weightage: 'Low (1 Q)', ncertChapter: 'Ch 8', cardsCount: 3 },
      { id: 'phy-12-8', name: 'Ray Optics & Optical Instruments', weightage: 'Super High (3-4 Qs)', ncertChapter: 'Ch 9', cardsCount: 9 },
      { id: 'phy-12-9', name: 'Wave Optics (Interference & Diffraction)', weightage: 'Medium (2 Qs)', ncertChapter: 'Ch 10', cardsCount: 5 },
      { id: 'phy-12-10', name: 'Dual Nature of Radiation & Matter', weightage: 'High (2 Qs)', ncertChapter: 'Ch 11', cardsCount: 5 },
      { id: 'phy-12-11', name: 'Atoms & Nuclei', weightage: 'Very High (3 Qs)', ncertChapter: 'Ch 12-13', cardsCount: 7 },
      { id: 'phy-12-12', name: 'Semiconductor Electronics & Devices', weightage: 'Super High (3 Qs)', ncertChapter: 'Ch 14', cardsCount: 8 }
    ]
  },
  chemistry: {
    id: 'chemistry',
    name: 'Chemistry',
    color: '#10b981',
    accentColor: '#d1fae5',
    darkAccent: '#047857',
    icon: 'FlaskConical',
    class11: [
      { id: 'chem-11-1', name: 'Some Basic Concepts of Chemistry (Mole Concept)', weightage: 'High (2 Qs)', ncertChapter: 'Ch 1', cardsCount: 6 },
      { id: 'chem-11-2', name: 'Structure of Atom', weightage: 'High (2 Qs)', ncertChapter: 'Ch 2', cardsCount: 7 },
      { id: 'chem-11-3', name: 'Classification of Elements & Periodicity', weightage: 'High (2 Qs)', ncertChapter: 'Ch 3', cardsCount: 6 },
      { id: 'chem-11-4', name: 'Chemical Bonding & Molecular Structure', weightage: 'Super High (4 Qs)', ncertChapter: 'Ch 4', cardsCount: 11 },
      { id: 'chem-11-5', name: 'Chemical Thermodynamics & Energetics', weightage: 'High (2-3 Qs)', ncertChapter: 'Ch 5', cardsCount: 8 },
      { id: 'chem-11-6', name: 'Equilibrium (Physical & Ionic)', weightage: 'Super High (3-4 Qs)', ncertChapter: 'Ch 6', cardsCount: 9 },
      { id: 'chem-11-7', name: 'Redox Reactions', weightage: 'Medium (1-2 Qs)', ncertChapter: 'Ch 7', cardsCount: 5 },
      { id: 'chem-11-8', name: 'Organic Chemistry: Basic Principles & GOC', weightage: 'Super High (4 Qs)', ncertChapter: 'Ch 8', cardsCount: 12 },
      { id: 'chem-11-9', name: 'Hydrocarbons (Alkanes, Alkenes, Alkynes, Aromatic)', weightage: 'Very High (3 Qs)', ncertChapter: 'Ch 9', cardsCount: 9 }
    ],
    class12: [
      { id: 'chem-12-1', name: 'Solutions & Colligative Properties', weightage: 'High (2 Qs)', ncertChapter: 'Ch 1', cardsCount: 7 },
      { id: 'chem-12-2', name: 'Electrochemistry', weightage: 'High (2-3 Qs)', ncertChapter: 'Ch 2', cardsCount: 8 },
      { id: 'chem-12-3', name: 'Chemical Kinetics', weightage: 'High (2 Qs)', ncertChapter: 'Ch 3', cardsCount: 6 },
      { id: 'chem-12-4', name: 'd- and f- Block Elements', weightage: 'High (2 Qs)', ncertChapter: 'Ch 4', cardsCount: 6 },
      { id: 'chem-12-5', name: 'Coordination Compounds', weightage: 'Super High (3-4 Qs)', ncertChapter: 'Ch 5', cardsCount: 10 },
      { id: 'chem-12-6', name: 'Haloalkanes & Haloarenes', weightage: 'Medium (1-2 Qs)', ncertChapter: 'Ch 6', cardsCount: 6 },
      { id: 'chem-12-7', name: 'Alcohols, Phenols & Ethers', weightage: 'High (2 Qs)', ncertChapter: 'Ch 7', cardsCount: 7 },
      { id: 'chem-12-8', name: 'Aldehydes, Ketones & Carboxylic Acids', weightage: 'Super High (3-4 Qs)', ncertChapter: 'Ch 8', cardsCount: 10 },
      { id: 'chem-12-9', name: 'Amines & Nitrogen Compounds', weightage: 'High (2 Qs)', ncertChapter: 'Ch 9', cardsCount: 6 },
      { id: 'chem-12-10', name: 'Biomolecules (Proteins, DNA, Carbohydrates)', weightage: 'High (2 Qs)', ncertChapter: 'Ch 10', cardsCount: 7 }
    ]
  },
  botany: {
    id: 'botany',
    name: 'Botany',
    color: '#84cc16',
    accentColor: '#ecfccb',
    darkAccent: '#4d7c0f',
    icon: 'Sprout',
    class11: [
      { id: 'bot-11-1', name: 'The Living World', weightage: 'Medium (1-2 Qs)', ncertChapter: 'Ch 1', cardsCount: 5 },
      { id: 'bot-11-2', name: 'Biological Classification (Monera, Fungi, Viruses)', weightage: 'Super High (3-4 Qs)', ncertChapter: 'Ch 2', cardsCount: 9 },
      { id: 'bot-11-3', name: 'Plant Kingdom (Algae, Bryo, Pterido, Gymno, Angio)', weightage: 'Super High (3-4 Qs)', ncertChapter: 'Ch 3', cardsCount: 10 },
      { id: 'bot-11-4', name: 'Morphology of Flowering Plants', weightage: 'Very High (3 Qs)', ncertChapter: 'Ch 4', cardsCount: 8 },
      { id: 'bot-11-5', name: 'Anatomy of Flowering Plants (Tissues & Secondary Growth)', weightage: 'High (2-3 Qs)', ncertChapter: 'Ch 5', cardsCount: 7 },
      { id: 'bot-11-6', name: 'Cell: The Unit of Life (Organelles & Membranes)', weightage: 'Super High (4 Qs)', ncertChapter: 'Ch 6', cardsCount: 10 },
      { id: 'bot-11-7', name: 'Cell Cycle & Cell Division (Mitosis & Meiosis)', weightage: 'Very High (3 Qs)', ncertChapter: 'Ch 7', cardsCount: 8 },
      { id: 'bot-11-8', name: 'Photosynthesis in Higher Plants (C3, C4, Z-Scheme)', weightage: 'Very High (3 Qs)', ncertChapter: 'Ch 8', cardsCount: 8 },
      { id: 'bot-11-9', name: 'Respiration in Plants (Glycolysis, Krebs, ETS)', weightage: 'High (2 Qs)', ncertChapter: 'Ch 9', cardsCount: 7 },
      { id: 'bot-11-10', name: 'Plant Growth & Development (Auxins, Gibberellins, Cytokinins)', weightage: 'High (2 Qs)', ncertChapter: 'Ch 10', cardsCount: 6 }
    ],
    class12: [
      { id: 'bot-12-1', name: 'Sexual Reproduction in Flowering Plants (Micro/Megasporogenesis)', weightage: 'Super High (4 Qs)', ncertChapter: 'Ch 1', cardsCount: 11 },
      { id: 'bot-12-2', name: 'Principles of Inheritance & Variation (Mendelian Genetics)', weightage: 'Super High (4-5 Qs)', ncertChapter: 'Ch 2', cardsCount: 12 },
      { id: 'bot-12-3', name: 'Molecular Basis of Inheritance (DNA, RNA, Transcription, Lac Operon)', weightage: 'Super High (5-6 Qs)', ncertChapter: 'Ch 3', cardsCount: 14 },
      { id: 'bot-12-4', name: 'Microbes in Human Welfare (Fermentation & Biocontrol)', weightage: 'Medium (2 Qs)', ncertChapter: 'Ch 4', cardsCount: 5 },
      { id: 'bot-12-5', name: 'Organisms & Populations (Ecological Adaptations & Interactions)', weightage: 'High (3 Qs)', ncertChapter: 'Ch 5', cardsCount: 7 },
      { id: 'bot-12-6', name: 'Ecosystem (Food Chains, Pyramids, Energy Flow)', weightage: 'High (2 Qs)', ncertChapter: 'Ch 6', cardsCount: 6 },
      { id: 'bot-12-7', name: 'Biodiversity & Conservation (Hotspots & In-situ/Ex-situ)', weightage: 'High (2 Qs)', ncertChapter: 'Ch 7', cardsCount: 6 }
    ]
  },
  zoology: {
    id: 'zoology',
    name: 'Zoology',
    color: '#ec4899',
    accentColor: '#fce7f3',
    darkAccent: '#be185d',
    icon: 'Dna',
    class11: [
      { id: 'zoo-11-1', name: 'Animal Kingdom (Non-Chordates & Chordates)', weightage: 'Super High (4-5 Qs)', ncertChapter: 'Ch 1', cardsCount: 12 },
      { id: 'zoo-11-2', name: 'Structural Organisation in Animals (Tissues & Cockroach/Frog)', weightage: 'High (2-3 Qs)', ncertChapter: 'Ch 2', cardsCount: 7 },
      { id: 'zoo-11-3', name: 'Biomolecules (Enzymes, Amino Acids, Lipids)', weightage: 'Super High (3-4 Qs)', ncertChapter: 'Ch 3', cardsCount: 9 },
      { id: 'zoo-11-4', name: 'Breathing & Exchange of Gases (Respiratory Volumes)', weightage: 'High (2 Qs)', ncertChapter: 'Ch 4', cardsCount: 6 },
      { id: 'zoo-11-5', name: 'Body Fluids & Circulation (Heart, Cardiac Cycle, ECG)', weightage: 'Very High (3 Qs)', ncertChapter: 'Ch 5', cardsCount: 8 },
      { id: 'zoo-11-6', name: 'Excretory Products & their Elimination (Nephron & Counter Current)', weightage: 'High (2-3 Qs)', ncertChapter: 'Ch 6', cardsCount: 7 },
      { id: 'zoo-11-7', name: 'Locomotion & Movement (Sliding Filament & Joints)', weightage: 'High (2 Qs)', ncertChapter: 'Ch 7', cardsCount: 6 },
      { id: 'zoo-11-8', name: 'Neural Control & Coordination (Neuron Impulse & Eye/Ear)', weightage: 'High (2 Qs)', ncertChapter: 'Ch 8', cardsCount: 7 },
      { id: 'zoo-11-9', name: 'Chemical Coordination & Integration (Endocrine Hormones)', weightage: 'Very High (3 Qs)', ncertChapter: 'Ch 9', cardsCount: 8 }
    ],
    class12: [
      { id: 'zoo-12-1', name: 'Human Reproduction (Spermatogenesis, Oogenesis & Menstrual Cycle)', weightage: 'Super High (3-4 Qs)', ncertChapter: 'Ch 1', cardsCount: 10 },
      { id: 'zoo-12-2', name: 'Reproductive Health (Contraceptive Methods & ART)', weightage: 'High (2-3 Qs)', ncertChapter: 'Ch 2', cardsCount: 7 },
      { id: 'zoo-12-3', name: 'Evolution (Hardy-Weinberg, Homology & Human Evolution)', weightage: 'Super High (3-4 Qs)', ncertChapter: 'Ch 3', cardsCount: 9 },
      { id: 'zoo-12-4', name: 'Human Health & Disease (Immunity, Antibodies, Malaria & Cancer)', weightage: 'Super High (3-4 Qs)', ncertChapter: 'Ch 4', cardsCount: 10 },
      { id: 'zoo-12-5', name: 'Biotechnology: Principles & Processes (rDNA & PCR)', weightage: 'Super High (4 Qs)', ncertChapter: 'Ch 5', cardsCount: 9 },
      { id: 'zoo-12-6', name: 'Biotechnology & its Applications (Bt Cotton, Insulin & Gene Therapy)', weightage: 'Very High (3 Qs)', ncertChapter: 'Ch 6', cardsCount: 8 }
    ]
  }
};
