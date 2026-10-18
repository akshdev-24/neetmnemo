/**
 * Final integrity check for all biology mnemonic chapter files.
 * Validates: schema completeness, ID uniqueness, chapter counts, quiz validity.
 */
import { readdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { join, resolve } from 'node:path';

const BIOLOGY_DIR = resolve('src/data/mnemonics/biology');
const files = (await readdir(BIOLOGY_DIR)).filter(f => f.startsWith('bio-ch-') && f.endsWith('.js')).sort();

const REQUIRED_FIELDS = [
  'id', 'subject', 'chapterId', 'chapterNumber', 'chapterTitle', 'classLevel',
  'topicTitle', 'mnemonicNumber', 'title', 'mnemonic', 'fact', 'breakdown',
  'explanation', 'ncertConnection', 'tags', 'quiz'
];

const allIds = new Set();
let totalMnemonics = 0;
let errors = 0;

for (const file of files) {
  const fullPath = join(BIOLOGY_DIR, file);
  const mod = await import(pathToFileURL(fullPath).href);
  const exportName = Object.keys(mod).find(k => k.endsWith('Mnemonics'));
  const data = mod[exportName];

  if (!Array.isArray(data) || data.length === 0) {
    console.error(`❌ ${file}: Empty or missing export "${exportName}"`);
    errors++;
    continue;
  }

  let fileErrors = 0;
  for (const m of data) {
    // Check required fields
    for (const field of REQUIRED_FIELDS) {
      if (m[field] === undefined || m[field] === null || m[field] === '') {
        console.error(`  ❌ ${file} ID=${m.id}: Missing field "${field}"`);
        fileErrors++;
      }
    }
    // Check ID uniqueness
    if (allIds.has(m.id)) {
      console.error(`  ❌ ${file}: Duplicate ID "${m.id}"`);
      fileErrors++;
    }
    allIds.add(m.id);

    // Validate quiz structure
    if (m.quiz) {
      if (!m.quiz.question || !Array.isArray(m.quiz.options) || m.quiz.options.length !== 4) {
        console.error(`  ❌ ${file} ID=${m.id}: Invalid quiz structure`);
        fileErrors++;
      }
      if (typeof m.quiz.answerIndex !== 'number' || m.quiz.answerIndex < 0 || m.quiz.answerIndex > 3) {
        console.error(`  ❌ ${file} ID=${m.id}: Invalid quiz answerIndex`);
        fileErrors++;
      }
    }
  }

  const icon = fileErrors === 0 ? '✅' : '⚠️';
  console.log(`${icon} ${file}: ${data.length} mnemonics${fileErrors > 0 ? `, ${fileErrors} issues` : ''}`);
  totalMnemonics += data.length;
  errors += fileErrors;
}

console.log(`\n📊 Summary:`);
console.log(`   Files: ${files.length}`);
console.log(`   Total mnemonics: ${totalMnemonics}`);
console.log(`   Unique IDs: ${allIds.size}`);
console.log(`   Errors: ${errors}`);
console.log(errors === 0 ? '\n✅ ALL CHECKS PASSED' : '\n❌ SOME CHECKS FAILED');
