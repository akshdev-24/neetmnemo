import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CHAPTERS } from '../src/data/chapters.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seoDir = path.resolve(__dirname, '../seo');
if (!fs.existsSync(seoDir)) {
  fs.mkdirSync(seoDir, { recursive: true });
}

const BASE_URL = 'https://neetmonic.study';

const keywordMap = {
  platform: 'NEETMONIC',
  parentBrand: 'AKSHDEV',
  domain: BASE_URL,
  scope: '100% NEET Biology Mnemonics & NCERT Revision',
  lastUpdated: new Date().toISOString(),
  clusters: [
    {
      targetUrl: `${BASE_URL}/`,
      primarySearchIntent: 'Informational / Core Platform Navigation',
      primaryKeyword: 'NEET mnemonics',
      supportingKeywords: [
        'NEET Biology mnemonics',
        'Biology mnemonics for NEET',
        'NEET Biology memory tricks',
        'Biology memory tricks for NEET',
        'NCERT Biology mnemonics',
        'easy mnemonics for NEET Biology',
        'NEET Biology revision tricks',
        'Biology tricks to remember for NEET'
      ],
      seoTitle: 'NEETMONIC \u2013 NEET Biology Mnemonics & NCERT Class 11 & 12',
      h1: 'NEET Biology Mnemonics to Remember More and Revise Smarter',
      relatedInternalLinks: [
        '/class-11-biology-mnemonics',
        '/class-12-biology-mnemonics',
        '/chapters',
        '/revision',
        '/quiz'
      ],
      contentStatus: 'Published & Canonical'
    },
    {
      targetUrl: `${BASE_URL}/class-11-biology-mnemonics`,
      primarySearchIntent: 'Class 11 Curriculum Mnemonic Discovery',
      primaryKeyword: 'Class 11 Biology mnemonics',
      supportingKeywords: [
        'Class 11 Biology mnemonics for NEET',
        'NEET Class 11 Biology memory tricks',
        'Class 11 Biology chapter-wise mnemonics',
        'NCERT Class 11 Biology mnemonics',
        'Class 11 Biology tricks to remember',
        'NEET Biology mnemonics Class 11',
        'Class 11 Biology important examples mnemonics',
        'Class 11 Botany mnemonics for NEET',
        'Class 11 Zoology mnemonics for NEET'
      ],
      seoTitle: 'Class 11 Biology Mnemonics for NEET | NEETMONIC',
      h1: 'Class 11 Biology Mnemonics for NEET',
      relatedInternalLinks: [
        '/class-12-biology-mnemonics',
        '/chapters/bio-ch-01',
        '/chapters/bio-ch-03',
        '/chapters/bio-ch-04',
        '/chapters/bio-ch-08',
        '/chapters/bio-ch-10',
        '/chapters/bio-ch-15'
      ],
      contentStatus: 'Published & Canonical'
    },
    {
      targetUrl: `${BASE_URL}/class-12-biology-mnemonics`,
      primarySearchIntent: 'Class 12 Curriculum Mnemonic Discovery',
      primaryKeyword: 'Class 12 Biology mnemonics',
      supportingKeywords: [
        'Class 12 Biology mnemonics for NEET',
        'NEET Class 12 Biology memory tricks',
        'Class 12 Biology chapter-wise mnemonics',
        'NCERT Class 12 Biology mnemonics',
        'Class 12 Biology tricks to remember',
        'NEET Biology mnemonics Class 12',
        'Class 12 Biology important examples mnemonics',
        'Class 12 Botany mnemonics for NEET',
        'Class 12 Zoology mnemonics for NEET',
        'Genetics mnemonics for NEET',
        'Biotechnology mnemonics for NEET',
        'Ecology mnemonics for NEET'
      ],
      seoTitle: 'Class 12 Biology Mnemonics for NEET | NEETMONIC',
      h1: 'Class 12 Biology Mnemonics for NEET',
      relatedInternalLinks: [
        '/class-11-biology-mnemonics',
        '/chapters/bio-ch-20',
        '/chapters/bio-ch-23',
        '/chapters/bio-ch-24',
        '/chapters/bio-ch-28',
        '/chapters/bio-ch-30',
        '/chapters/bio-ch-32'
      ],
      contentStatus: 'Published & Canonical'
    },
    {
      targetUrl: `${BASE_URL}/chapters`,
      primarySearchIntent: 'Comprehensive Chapter-Wise Directory',
      primaryKeyword: 'NEET Biology chapter-wise mnemonics',
      supportingKeywords: [
        'NCERT Biology chapters mnemonics',
        'NEET Botany chapters',
        'NEET Zoology chapters',
        'NEET memory tricks'
      ],
      seoTitle: 'NEET Biology Chapters & NCERT Memory Tricks | NEETMONIC',
      h1: 'Explore 32 NEET Biology Chapters',
      relatedInternalLinks: [
        '/class-11-biology-mnemonics',
        '/class-12-biology-mnemonics',
        '/revision'
      ],
      contentStatus: 'Published & Canonical'
    },
    {
      targetUrl: `${BASE_URL}/revision`,
      primarySearchIntent: 'Fast-Paced Exam Sprint & Active Recall',
      primaryKeyword: 'NEET Biology revision tricks',
      supportingKeywords: [
        'Quick Biology revision sprints',
        'active recall NEET Biology',
        'timed Biology revision'
      ],
      seoTitle: 'Quick Biology Revision Sprints for NEET UG | NEETMONIC',
      h1: 'Speed Revision Sprints',
      relatedInternalLinks: ['/chapters', '/quiz'],
      contentStatus: 'Published & Canonical'
    },
    {
      targetUrl: `${BASE_URL}/quiz`,
      primarySearchIntent: 'Interactive Concept Testing & Retention',
      primaryKeyword: 'NEET Biology quiz',
      supportingKeywords: [
        'interactive Biology quiz NEET',
        'NCERT Biology recall practice',
        'micro flash quiz Biology'
      ],
      seoTitle: 'Interactive NEET Biology Quiz & Recall Practice | NEETMONIC',
      h1: 'Interactive NEET Biology Quiz',
      relatedInternalLinks: ['/chapters', '/revision'],
      contentStatus: 'Published & Canonical'
    }
  ]
};

// Add all 32 chapters
CHAPTERS.forEach((ch) => {
  keywordMap.clusters.push({
    targetUrl: `${BASE_URL}/chapters/${ch.id}`,
    primarySearchIntent: `${ch.title} specific mnemonic search`,
    primaryKeyword: `${ch.title} mnemonics for NEET`,
    supportingKeywords: [
      `${ch.title} memory tricks`,
      `${ch.title} NEET Biology`,
      `Class ${ch.classLevel} ${ch.title} revision`,
      `${ch.title} NCERT examples`,
      `easy tricks for ${ch.title}`
    ],
    seoTitle: `${ch.title} Mnemonics & NCERT Revision | NEET Biology | NEETMONIC`,
    h1: `${ch.title} Mnemonics & NCERT Revision`,
    relatedInternalLinks: [
      ch.classLevel === 12 ? '/class-12-biology-mnemonics' : '/class-11-biology-mnemonics',
      '/chapters',
      '/quiz'
    ],
    contentStatus: 'Published & Canonical'
  });
});

fs.writeFileSync(path.join(seoDir, 'keyword-map.json'), JSON.stringify(keywordMap, null, 2), 'utf-8');
console.log(`✅ Generated seo/keyword-map.json with ${keywordMap.clusters.length} keyword clusters.`);
