import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { CHAPTERS } from '../src/data/chapters.js';
import { MNEMONICS } from '../src/data/mnemonics.js';
import { BIOLOGY_UNITS } from '../src/data/subjects.js';
import { siteConfig, getRouteMetadata, generateStructuredData } from '../src/utils/seo.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('====================================================');
console.log('🔍 NEETMONIC AUTOMATED SEO & TECHNICAL AUDIT ENGINE');
console.log('====================================================\n');

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
    passedTests++;
  } else {
    console.error(`❌ FAIL: ${testName}`);
    if (details) console.error(`   Details: ${details}`);
    failedTests++;
  }
}

// -----------------------------------------------------------------------------
// TEST 1: BRAND IDENTITY & DOMAIN CONFIGURATION
// -----------------------------------------------------------------------------
console.log('\n--- 1. Brand Identity & Production Domain ---');
assert(siteConfig.name === 'NEETMONIC', 'siteConfig.name is NEETMONIC', siteConfig.name);
assert(siteConfig.shortName === 'NEETMONIC', 'siteConfig.shortName is NEETMONIC', siteConfig.shortName);
assert(siteConfig.url === 'https://neetmonic.akshdev.site', 'siteConfig.url points to https://neetmonic.akshdev.site', siteConfig.url);
assert(siteConfig.ogImage === 'https://neetmonic.akshdev.site/og-image.svg', 'siteConfig.ogImage uses new domain', siteConfig.ogImage);
assert(siteConfig.parentBrand === 'AKSHDEV', 'siteConfig.parentBrand is AKSHDEV', siteConfig.parentBrand);

// -----------------------------------------------------------------------------
// TEST 2: DEDICATED CLASS 11 & CLASS 12 SEO METADATA & CANONICALS
// -----------------------------------------------------------------------------
console.log('\n--- 2. Class 11 & Class 12 Landing Page SEO ---');
const class11Meta = getRouteMetadata({ route: 'class-11' });
assert(
  class11Meta.title === 'Class 11 Biology Mnemonics for NEET | NEETMONIC',
  'Class 11 SEO title matches exact requirement',
  class11Meta.title
);
assert(
  class11Meta.description.includes('Class 11 Biology mnemonics for NEET'),
  'Class 11 meta description is optimized and present'
);
assert(
  class11Meta.canonical === 'https://neetmonic.akshdev.site/class-11-biology-mnemonics',
  'Class 11 canonical URL is self-referencing and correct',
  class11Meta.canonical
);

const class12Meta = getRouteMetadata({ route: 'class-12' });
assert(
  class12Meta.title === 'Class 12 Biology Mnemonics for NEET | NEETMONIC',
  'Class 12 SEO title matches exact requirement',
  class12Meta.title
);
assert(
  class12Meta.description.includes('Class 12 Biology for NEET'),
  'Class 12 meta description is optimized and present'
);
assert(
  class12Meta.canonical === 'https://neetmonic.akshdev.site/class-12-biology-mnemonics',
  'Class 12 canonical URL is self-referencing and correct',
  class12Meta.canonical
);

// Structured data for class-11 and class-12
const class11Schemas = generateStructuredData({ route: 'class-11', metadata: class11Meta });
const hasClass11Collection = class11Schemas.some((s) => s['@type'] === 'CollectionPage');
const hasClass11Faq = class11Schemas.some((s) => s['@type'] === 'FAQPage');
assert(hasClass11Collection && hasClass11Faq, 'Class 11 generates CollectionPage and FAQPage structured data');

const class12Schemas = generateStructuredData({ route: 'class-12', metadata: class12Meta });
const hasClass12Collection = class12Schemas.some((s) => s['@type'] === 'CollectionPage');
const hasClass12Faq = class12Schemas.some((s) => s['@type'] === 'FAQPage');
assert(hasClass12Collection && hasClass12Faq, 'Class 12 generates CollectionPage and FAQPage structured data');

// -----------------------------------------------------------------------------
// TEST 3: CHAPTER ROUTES & BIOLOGY INTEGRITY
// -----------------------------------------------------------------------------
console.log('\n--- 3. Chapter Routes & Mnemonics Coverage ---');
assert(CHAPTERS.length === 32, 'Exactly 32 Biology chapters exist', `Found: ${CHAPTERS.length}`);
assert(MNEMONICS.length >= 1180, 'Over 1,180 Biology mnemonics exist', `Found: ${MNEMONICS.length}`);

let chaptersWithZeroMnemonics = 0;
let duplicateTitles = 0;
const seenTitles = new Set();

CHAPTERS.forEach((ch) => {
  const count = MNEMONICS.filter((m) => m.chapterId === ch.id).length;
  if (count === 0) chaptersWithZeroMnemonics++;

  const meta = getRouteMetadata({ route: 'chapter', chapter: ch });
  if (seenTitles.has(meta.title)) {
    duplicateTitles++;
  }
  seenTitles.add(meta.title);
});

assert(chaptersWithZeroMnemonics === 0, 'Every chapter has at least one mnemonic', `Empty: ${chaptersWithZeroMnemonics}`);
assert(duplicateTitles === 0, 'All 32 chapter SEO titles are globally unique', `Duplicates: ${duplicateTitles}`);

// -----------------------------------------------------------------------------
// TEST 4: STRICT 100% BIOLOGY-ONLY VALIDATION (NO PHYSICS / CHEMISTRY LEAKS)
// -----------------------------------------------------------------------------
console.log('\n--- 4. Biology-Only Enforcement (Zero Non-Biology Leaks) ---');
const nonBioChapters = CHAPTERS.filter((c) => c.subject !== 'biology');
assert(nonBioChapters.length === 0, 'Zero non-biology chapters in database', `Found: ${nonBioChapters.length}`);

const nonBioMnemonics = MNEMONICS.filter((m) => m.subject !== 'biology');
assert(nonBioMnemonics.length === 0, 'Zero non-biology mnemonics in database', `Found: ${nonBioMnemonics.length}`);

// -----------------------------------------------------------------------------
// TEST 5: SITEMAP & ROBOTS.TXT INTEGRITY
// -----------------------------------------------------------------------------
console.log('\n--- 5. Sitemap & Robots.txt Directives ---');
const sitemapPath = path.join(rootDir, 'public/sitemap.xml');
assert(fs.existsSync(sitemapPath), 'public/sitemap.xml exists');

if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const urls = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  
  assert(urls.length >= 1220, `Sitemap contains all canonical URLs (Count: ${urls.length})`);
  assert(
    urls.includes('https://neetmonic.akshdev.site/class-11-biology-mnemonics'),
    'Sitemap includes /class-11-biology-mnemonics'
  );
  assert(
    urls.includes('https://neetmonic.akshdev.site/class-12-biology-mnemonics'),
    'Sitemap includes /class-12-biology-mnemonics'
  );

  const oldDomainLeaks = urls.filter((u) => !u.startsWith('https://neetmonic.akshdev.site'));
  assert(oldDomainLeaks.length === 0, 'Zero URLs with old domain in sitemap', `Leaks: ${oldDomainLeaks.length}`);
}

const robotsPath = path.join(rootDir, 'public/robots.txt');
assert(fs.existsSync(robotsPath), 'public/robots.txt exists');
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  assert(
    robotsContent.includes('Sitemap: https://neetmonic.akshdev.site/sitemap.xml'),
    'robots.txt points to new domain sitemap'
  );
}

// -----------------------------------------------------------------------------
// TEST 6: KEYWORD MAP JSON
// -----------------------------------------------------------------------------
console.log('\n--- 6. Keyword Map File ---');
const keywordMapPath = path.join(rootDir, 'seo/keyword-map.json');
assert(fs.existsSync(keywordMapPath), 'seo/keyword-map.json exists');
if (fs.existsSync(keywordMapPath)) {
  const mapData = JSON.parse(fs.readFileSync(keywordMapPath, 'utf8'));
  assert(mapData.platform === 'NEETMONIC', 'Keyword map platform is NEETMONIC');
  assert(mapData.domain === 'https://neetmonic.akshdev.site', 'Keyword map domain is https://neetmonic.akshdev.site');
  assert(mapData.clusters && mapData.clusters.length >= 35, `Keyword clusters mapped (${mapData.clusters.length} clusters)`);
}

// -----------------------------------------------------------------------------
// SUMMARY REPORT
// -----------------------------------------------------------------------------
console.log('\n====================================================');
console.log(`TOTAL TESTS: ${passedTests + failedTests}`);
console.log(`PASSED: ${passedTests}`);
console.log(`FAILED: ${failedTests}`);
console.log('====================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL SEO AUDIT & TECHNICAL INTEGRITY CHECKS PASSED!\n');
}
