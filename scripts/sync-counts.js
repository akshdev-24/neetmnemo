import fs from 'fs';
import { MNEMONICS } from '../src/data/mnemonics.js';
import { CHAPTERS } from '../src/data/chapters.js';
import { SUBJECTS } from '../src/data/subjects.js';

console.log('Total mnemonics in MNEMONICS:', MNEMONICS.length);

// Count per chapter
const chapterCounts = new Map();
MNEMONICS.forEach(m => {
  chapterCounts.set(m.chapterId, (chapterCounts.get(m.chapterId) || 0) + 1);
});

// Count per subject
const subjectCounts = new Map();
MNEMONICS.forEach(m => {
  subjectCounts.set(m.subject, (subjectCounts.get(m.subject) || 0) + 1);
});

console.log('\n--- Subject Counts ---');
for (const s of SUBJECTS) {
  const count = subjectCounts.get(s.id) || 0;
  console.log(`${s.id}: ${count} mnemonics (was ${s.totalMnemonics})`);
}

// Read chapters.js content and update mnemonicsCount
let chaptersContent = fs.readFileSync('src/data/chapters.js', 'utf8');

// For each chapter in CHAPTERS, replace mnemonicsCount in its block
CHAPTERS.forEach(ch => {
  const actualCount = chapterCounts.get(ch.id) || 0;
  // Replace the chapter-level mnemonicsCount
  const regex = new RegExp(`(id:\\s*['"]${ch.id}['"][\\s\\S]*?mnemonicsCount:\\s*)\\d+`, 'm');
  chaptersContent = chaptersContent.replace(regex, `$1${actualCount}`);
});

fs.writeFileSync('src/data/chapters.js', chaptersContent, 'utf8');
console.log('✅ Updated src/data/chapters.js with exact counts!');

// Update subjects.js with actual counts
let subjectsContent = fs.readFileSync('src/data/subjects.js', 'utf8');
SUBJECTS.forEach(s => {
  const actualCount = subjectCounts.get(s.id) || 0;
  const regex = new RegExp(`(id:\\s*['"]${s.id}['"][\\s\\S]*?totalMnemonics:\\s*)\\d+`, 'm');
  subjectsContent = subjectsContent.replace(regex, `$1${actualCount}`);
});
fs.writeFileSync('src/data/subjects.js', subjectsContent, 'utf8');
console.log('✅ Updated src/data/subjects.js with exact counts!');
