/**
 * High-Yield NEET Biology Quick Revision Sets
 * Timed active recall sprints mapped to NCERT Biology
 */

export const REVISION_SETS = [
  {
    id: 'rev-daily',
    title: 'Daily High-Yield Sprint',
    description: 'Quick daily active recall session across high-yield Botany and Zoology topics.',
    duration: '5 Mins',
    itemsCount: 10,
    accent: '#FF8D78',
    bg: '#FFF0ED',
    category: 'daily',
    icon: 'zap'
  },
  {
    id: 'rev-class11',
    title: 'Class 11 Biology Sprint',
    description: 'Comprehensive review deck covering Units 1–5: Diversity, Anatomy, Cell & Human Physiology.',
    duration: '15 Mins',
    itemsCount: 15,
    accent: '#3DBE75',
    bg: '#EFFBF4',
    category: 'class11',
    classLevel: 11,
    icon: 'sprout'
  },
  {
    id: 'rev-class12',
    title: 'Class 12 Biology Sprint',
    description: 'High-frequency review deck covering Units 6–10: Reproduction, Genetics, Biotech & Ecology.',
    duration: '15 Mins',
    itemsCount: 15,
    accent: '#5B8DEF',
    bg: '#EDF4FF',
    category: 'class12',
    classLevel: 12,
    icon: 'dna'
  },
  {
    id: 'rev-traps',
    title: 'NEET Traps & Common Mistakes',
    description: 'Specialized active-recall round targeting tricky NCERT exceptions, misleading questions & common confusions.',
    duration: '10 Mins',
    itemsCount: 12,
    accent: '#FF6B6B',
    bg: '#FFF5F5',
    category: 'traps',
    type: 'trap-alert',
    icon: 'alert-triangle'
  },
  {
    id: 'rev-fill-blanks',
    title: 'Fill-in-the-Blank Recall',
    description: 'Test your precise memory of NCERT keywords, definitions, and numbers with active blank-filling.',
    duration: '10 Mins',
    itemsCount: 10,
    accent: '#A66CFF',
    bg: '#F7F0FF',
    category: 'fill-blank',
    type: 'fill-blank',
    icon: 'edit-3'
  },
  {
    id: 'rev-plant-physio',
    title: 'Plant Physiology Sprint',
    description: 'Light reactions Z-scheme, Calvin cycle, glycolysis, Krebs cycle & plant hormone functions.',
    duration: '8 Mins',
    itemsCount: 10,
    accent: '#3DBE75',
    bg: '#EFFBF4',
    category: 'unit',
    unitId: 'plant-physiology',
    icon: 'leaf'
  },
  {
    id: 'rev-human-physio',
    title: 'Human Physiology Master Sprint',
    description: 'Cardiac cycle, respiratory volumes, nephron RAAS, sliding filament, nerve impulse & endocrine glands.',
    duration: '10 Mins',
    itemsCount: 12,
    accent: '#5B8DEF',
    bg: '#EDF4FF',
    category: 'unit',
    unitId: 'human-physiology',
    icon: 'heart'
  },
  {
    id: 'rev-genetics-sprint',
    title: 'Genetics & Molecular Sprint',
    description: 'Mendelian ratios, Central Dogma, Lac operon enzymes, genetic code and aneuploidies.',
    duration: '8 Mins',
    itemsCount: 10,
    accent: '#A66CFF',
    bg: '#F7F0FF',
    category: 'unit',
    unitId: 'genetics-and-evolution',
    icon: 'dna'
  },
  {
    id: 'rev-ecology',
    title: 'Ecology & Biodiversity Sprint',
    description: 'Evil Quartet, population growth models, succession, pyramid rules & conservation hotspots.',
    duration: '8 Mins',
    itemsCount: 10,
    accent: '#8DD8FF',
    bg: '#F0F9FF',
    category: 'unit',
    unitId: 'ecology-and-environment',
    icon: 'bookmark'
  },
  {
    id: 'rev-biotech',
    title: 'Biotechnology & Processes',
    description: 'Restriction enzymes, pBR322 selectable markers, PCR steps, ADA gene therapy & Bt toxin.',
    duration: '7 Mins',
    itemsCount: 8,
    accent: '#FFE681',
    bg: '#FFFBE6',
    category: 'unit',
    unitId: 'biotechnology',
    icon: 'activity'
  }
];
