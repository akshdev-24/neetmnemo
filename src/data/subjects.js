/**
 * NEET Mnemo — Subject & Biology Units Architecture
 * Dedicated 100% to NEET Biology (Botany & Zoology) mapped to NCERT Class 11 & Class 12.
 */

export const SUBJECTS = [
  {
    id: 'biology',
    name: 'Biology',
    tagline: 'Visual NCERT facts, taxonomy, pathways & diagrams!',
    description: 'Botany • Zoology • Human Physiology • Genetics & Evolution',
    accentColor: '#3DBE75',
    lightColor: '#DDF7E8',
    bgColor: '#EFFBF4',
    borderColor: '#A7E8C1',
    icon: 'leaf',
    totalChapters: 32,
    totalTopics: 280,
    totalMnemonics: 1187,
    ncertScope: 'Official NTA NEET UG Biology (Complete NCERT 11th & 12th)',
    highlights: [
      'Taxonomic Hierarchy & Kingdom Classification',
      'Plant Kingdom Algae Pigments & Storage',
      'Plant Hormones & Photosynthesis Z-Scheme',
      'PMAT Mitosis & Meiosis Crossing Over',
      'Heart Valves & Cardiac Double Circulation',
      'Genetics Dihybrid Cross & Lac Operon',
      'Molecular Central Dogma & Genetic Code',
      'Biotechnology PCR & Recombinant Vectors',
      'Ecology Evil Quartet & Biodiversity Conservation'
    ]
  }
];

export const BIOLOGY_UNITS = [
  {
    id: 'diversity-in-living-world',
    number: 1,
    title: 'Diversity in Living World',
    classLevel: 11,
    icon: 'Sprout',
    color: '#3DBE75',
    bgColor: '#EFFBF4',
    borderColor: '#A7E8C1',
    chapterIds: ['bio-ch-01', 'bio-ch-02', 'bio-ch-03', 'bio-ch-04'],
    totalChapters: 4,
    totalMnemonics: 120,
    description: 'Taxonomic hierarchy, Whittaker 5 kingdoms, Algae classes, Porifera to Chordata classification.'
  },
  {
    id: 'structural-organisation',
    number: 2,
    title: 'Structural Organisation in Animals and Plants',
    classLevel: 11,
    icon: 'Flower2',
    color: '#10B981',
    bgColor: '#ECFDF5',
    borderColor: '#A7F3D0',
    chapterIds: ['bio-ch-05', 'bio-ch-06', 'bio-ch-07'],
    totalChapters: 3,
    totalMnemonics: 90,
    description: 'Root & stem modifications, floral formulas, plant anatomy, epithelial/connective tissues & frog anatomy.'
  },
  {
    id: 'cell-structure-and-function',
    number: 3,
    title: 'Cell: Structure and Function',
    classLevel: 11,
    icon: 'Atom',
    color: '#059669',
    bgColor: '#E6FFFA',
    borderColor: '#99F6E4',
    chapterIds: ['bio-ch-08', 'bio-ch-09', 'bio-ch-10'],
    totalChapters: 3,
    totalMnemonics: 90,
    description: 'Cell organelles, biomolecules enzymes & Km, PMAT mitosis and LZPDD prophase stages.'
  },
  {
    id: 'plant-physiology',
    number: 4,
    title: 'Plant Physiology',
    classLevel: 11,
    icon: 'Leaf',
    color: '#16A34A',
    bgColor: '#F0FDF4',
    borderColor: '#BBF7D0',
    chapterIds: ['bio-ch-11', 'bio-ch-12', 'bio-ch-13'],
    totalChapters: 3,
    totalMnemonics: 90,
    description: 'Photosynthesis Z-scheme & Calvin cycle, glycolysis & Krebs cycle, plant growth regulators.'
  },
  {
    id: 'human-physiology',
    number: 5,
    title: 'Human Physiology',
    classLevel: 11,
    icon: 'Heart',
    color: '#E11D48',
    bgColor: '#FFF1F2',
    borderColor: '#FECDD3',
    chapterIds: ['bio-ch-14', 'bio-ch-15', 'bio-ch-16', 'bio-ch-17', 'bio-ch-18', 'bio-ch-19'],
    totalChapters: 6,
    totalMnemonics: 180,
    description: 'Respiratory volumes, cardiac cycle, nephron RAAS, sliding filament, nerve impulse, endocrine hormones.'
  },
  {
    id: 'reproduction',
    number: 6,
    title: 'Reproduction',
    classLevel: 12,
    icon: 'Heart',
    color: '#D946EF',
    bgColor: '#FDF4FF',
    borderColor: '#F5D0FE',
    chapterIds: ['bio-ch-20', 'bio-ch-21', 'bio-ch-22'],
    totalChapters: 3,
    totalMnemonics: 150,
    description: 'Flower double fertilization, human spermatogenesis/oogenesis, menstrual cycle, contraception & ART.'
  },
  {
    id: 'genetics-and-evolution',
    number: 7,
    title: 'Genetics and Evolution',
    classLevel: 12,
    icon: 'Dna',
    color: '#7C3AED',
    bgColor: '#F5F3FF',
    borderColor: '#DDD6FE',
    chapterIds: ['bio-ch-23', 'bio-ch-24', 'bio-ch-25'],
    totalChapters: 3,
    totalMnemonics: 150,
    description: 'Mendelian ratios, DNA replication, Lac operon, genetic code, Hardy-Weinberg & human evolution sequence.'
  },
  {
    id: 'biology-and-human-welfare',
    number: 8,
    title: 'Biology and Human Welfare',
    classLevel: 12,
    icon: 'ShieldCheck',
    color: '#2563EB',
    bgColor: '#EFF6FF',
    borderColor: '#BFDBFE',
    chapterIds: ['bio-ch-26', 'bio-ch-27'],
    totalChapters: 2,
    totalMnemonics: 76,
    description: 'Malaria lifecycle, antibody classes GAMED, innate immunity, sewage treatment & industrial microbes.'
  },
  {
    id: 'biotechnology',
    number: 9,
    title: 'Biotechnology',
    classLevel: 12,
    icon: 'FlaskConical',
    color: '#0284C7',
    bgColor: '#F0F9FF',
    borderColor: '#BAE6FD',
    chapterIds: ['bio-ch-28', 'bio-ch-29'],
    totalChapters: 2,
    totalMnemonics: 100,
    description: 'Restriction endonucleases, PCR steps (DAE), pBR322 vector, Bt cotton genes, Humulin & ADA gene therapy.'
  },
  {
    id: 'ecology-and-environment',
    number: 10,
    title: 'Ecology and Environment',
    classLevel: 12,
    icon: 'Globe',
    color: '#0D9488',
    bgColor: '#F0FDFA',
    borderColor: '#99F6E4',
    chapterIds: ['bio-ch-30', 'bio-ch-31', 'bio-ch-32'],
    totalChapters: 3,
    totalMnemonics: 141,
    description: 'Population interactions, decomposition steps FL CHM, 10% energy law, Evil Quartet & in-situ conservation.'
  }
];
