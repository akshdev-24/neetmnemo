/**
 * NEETMONIC Master Biology Question Bank Index
 * 1,600+ Verified NCERT-mapped Practice Questions across all 32 Chapters
 * Class 11 Biology (Chapters 1-19) & Class 12 Biology (Chapters 20-32)
 */

import { quizBioCh01 } from './quiz-ch-01.js';
import { quizBioCh02 } from './quiz-ch-02.js';
import { quizBioCh03 } from './quiz-ch-03.js';
import { quizBioCh04 } from './quiz-ch-04.js';
import { quizBioCh05 } from './quiz-ch-05.js';
import { quizBioCh06 } from './quiz-ch-06.js';
import { quizBioCh07 } from './quiz-ch-07.js';
import { quizBioCh08 } from './quiz-ch-08.js';
import { quizBioCh09 } from './quiz-ch-09.js';
import { quizBioCh10 } from './quiz-ch-10.js';
import { quizBioCh11 } from './quiz-ch-11.js';
import { quizBioCh12 } from './quiz-ch-12.js';
import { quizBioCh13 } from './quiz-ch-13.js';
import { quizBioCh14 } from './quiz-ch-14.js';
import { quizBioCh15 } from './quiz-ch-15.js';
import { quizBioCh16 } from './quiz-ch-16.js';
import { quizBioCh17 } from './quiz-ch-17.js';
import { quizBioCh18 } from './quiz-ch-18.js';
import { quizBioCh19 } from './quiz-ch-19.js';
import { quizBioCh20 } from './quiz-ch-20.js';
import { quizBioCh21 } from './quiz-ch-21.js';
import { quizBioCh22 } from './quiz-ch-22.js';
import { quizBioCh23 } from './quiz-ch-23.js';
import { quizBioCh24 } from './quiz-ch-24.js';
import { quizBioCh25 } from './quiz-ch-25.js';
import { quizBioCh26 } from './quiz-ch-26.js';
import { quizBioCh27 } from './quiz-ch-27.js';
import { quizBioCh28 } from './quiz-ch-28.js';
import { quizBioCh29 } from './quiz-ch-29.js';
import { quizBioCh30 } from './quiz-ch-30.js';
import { quizBioCh31 } from './quiz-ch-31.js';
import { quizBioCh32 } from './quiz-ch-32.js';

// Legacy quick reference questions for backward compatibility
export const LEGACY_QUIZZES = [
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

// Map of chapter ID to its questions
export const CHAPTER_QUIZZES_MAP = {
  'bio-ch-01': quizBioCh01,
  'bio-ch-02': quizBioCh02,
  'bio-ch-03': quizBioCh03,
  'bio-ch-04': quizBioCh04,
  'bio-ch-05': quizBioCh05,
  'bio-ch-06': quizBioCh06,
  'bio-ch-07': quizBioCh07,
  'bio-ch-08': quizBioCh08,
  'bio-ch-09': quizBioCh09,
  'bio-ch-10': quizBioCh10,
  'bio-ch-11': quizBioCh11,
  'bio-ch-12': quizBioCh12,
  'bio-ch-13': quizBioCh13,
  'bio-ch-14': quizBioCh14,
  'bio-ch-15': quizBioCh15,
  'bio-ch-16': quizBioCh16,
  'bio-ch-17': quizBioCh17,
  'bio-ch-18': quizBioCh18,
  'bio-ch-19': quizBioCh19,
  'bio-ch-20': quizBioCh20,
  'bio-ch-21': quizBioCh21,
  'bio-ch-22': quizBioCh22,
  'bio-ch-23': quizBioCh23,
  'bio-ch-24': quizBioCh24,
  'bio-ch-25': quizBioCh25,
  'bio-ch-26': quizBioCh26,
  'bio-ch-27': quizBioCh27,
  'bio-ch-28': quizBioCh28,
  'bio-ch-29': quizBioCh29,
  'bio-ch-30': quizBioCh30,
  'bio-ch-31': quizBioCh31,
  'bio-ch-32': quizBioCh32,
};

// All 1,600+ questions combined
export const ALL_QUIZZES = [
  ...LEGACY_QUIZZES,
  ...quizBioCh01,
  ...quizBioCh02,
  ...quizBioCh03,
  ...quizBioCh04,
  ...quizBioCh05,
  ...quizBioCh06,
  ...quizBioCh07,
  ...quizBioCh08,
  ...quizBioCh09,
  ...quizBioCh10,
  ...quizBioCh11,
  ...quizBioCh12,
  ...quizBioCh13,
  ...quizBioCh14,
  ...quizBioCh15,
  ...quizBioCh16,
  ...quizBioCh17,
  ...quizBioCh18,
  ...quizBioCh19,
  ...quizBioCh20,
  ...quizBioCh21,
  ...quizBioCh22,
  ...quizBioCh23,
  ...quizBioCh24,
  ...quizBioCh25,
  ...quizBioCh26,
  ...quizBioCh27,
  ...quizBioCh28,
  ...quizBioCh29,
  ...quizBioCh30,
  ...quizBioCh31,
  ...quizBioCh32,
];

// Helper to retrieve questions by chapter ID
export function getQuestionsForChapter(chapterId) {
  return CHAPTER_QUIZZES_MAP[chapterId] || [];
}

// Helper to retrieve questions for Class 11 or 12
export function getQuestionsForClass(classLevel) {
  return ALL_QUIZZES.filter(q => q.classLevel === Number(classLevel));
}

// Helper to get questions by quiz mode
export function getQuestionsByMode({
  mode = 'mixed',
  chapterId = null,
  classLevel = null,
  count = 10,
  difficulty = 'all',
  mistakeIds = []
}) {
  let pool = [];

  switch (mode) {
    case 'chapter':
      pool = chapterId ? (CHAPTER_QUIZZES_MAP[chapterId] || []) : ALL_QUIZZES;
      break;
    case 'class11':
      pool = getQuestionsForClass(11);
      break;
    case 'class12':
      pool = getQuestionsForClass(12);
      break;
    case 'daily':
      // Predictable daily slice based on day of year
      const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
      const start = (dayOfYear * 15) % ALL_QUIZZES.length;
      pool = [...ALL_QUIZZES.slice(start), ...ALL_QUIZZES.slice(0, start)];
      break;
    case 'mistakes':
      if (mistakeIds && mistakeIds.length > 0) {
        pool = ALL_QUIZZES.filter(q => mistakeIds.includes(q.id));
      }
      if (pool.length === 0) {
        // Fallback to high-yield questions
        pool = ALL_QUIZZES.filter(q => q.difficulty === 'hard');
      }
      break;
    case 'quick':
      pool = ALL_QUIZZES;
      break;
    case 'timed':
      pool = ALL_QUIZZES;
      break;
    case 'mixed':
    default:
      pool = ALL_QUIZZES;
      break;
  }

  // Filter by difficulty if specified
  if (difficulty && difficulty !== 'all') {
    const diffPool = pool.filter(q => q.difficulty === difficulty);
    if (diffPool.length >= count) {
      pool = diffPool;
    }
  }

  // Shuffle or slice
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, pool.length));
}
