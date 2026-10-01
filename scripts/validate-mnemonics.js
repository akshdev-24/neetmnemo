import { CHAPTERS } from '../src/data/chapters.js';

export async function validateMnemonicBatch(mnemonicsArray, expectedSubject, expectedChapterId) {
  const errors = [];
  const warnings = [];
  const ids = new Set();

  if (!Array.isArray(mnemonicsArray)) {
    return { valid: false, errors: ['Input is not an array'], count: 0 };
  }

  if (mnemonicsArray.length !== 20) {
    warnings.push(`Chapter has ${mnemonicsArray.length} entries (target is 20)`);
  }

  const validTypes = [
    'acronym', 'sentence', 'story', 'visual', 'sequence', 
    'formula', 'comparison', 'exception', 'classification', 'concept'
  ];

  const validDifficulties = ['easy', 'medium', 'hard'];

  mnemonicsArray.forEach((m, idx) => {
    const prefix = `[#${idx + 1} ID: ${m.id || 'MISSING'}]`;

    // ID uniqueness
    if (!m.id) {
      errors.push(`${prefix} Missing 'id'`);
    } else if (ids.has(m.id)) {
      errors.push(`${prefix} Duplicate ID '${m.id}'`);
    } else {
      ids.add(m.id);
    }

    // Subject check
    if (m.subject !== expectedSubject) {
      errors.push(`${prefix} Subject '${m.subject}' does not match expected '${expectedSubject}'`);
    }

    // Chapter ID check
    if (expectedChapterId && m.chapterId !== expectedChapterId) {
      errors.push(`${prefix} ChapterId '${m.chapterId}' does not match expected '${expectedChapterId}'`);
    }

    // Required fields check
    const requiredStrings = ['title', 'mnemonic', 'fact', 'explanation'];
    requiredStrings.forEach(f => {
      if (!m[f] || typeof m[f] !== 'string' || m[f].trim().length === 0) {
        errors.push(`${prefix} Missing or empty required field '${f}'`);
      }
    });

    // Mnemonic Type check
    const mType = m.mnemonicType || m.visualType;
    if (!mType || !validTypes.includes(mType)) {
      warnings.push(`${prefix} Mnemonic type '${mType}' not in standard list`);
    }

    // Difficulty check
    if (m.difficulty && !validDifficulties.includes(m.difficulty)) {
      warnings.push(`${prefix} Invalid difficulty '${m.difficulty}'`);
    }

    // Quiz check
    if (m.quiz) {
      if (!m.quiz.question || !Array.isArray(m.quiz.options) || m.quiz.options.length < 2) {
        errors.push(`${prefix} Invalid quiz question or options`);
      }
      if (typeof m.quiz.answerIndex !== 'number' || m.quiz.answerIndex < 0 || m.quiz.answerIndex >= m.quiz.options.length) {
        errors.push(`${prefix} Quiz answerIndex out of bounds`);
      }
    }
  });

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    count: mnemonicsArray.length
  };
}

if (process.argv[1]?.endsWith('validate-mnemonics.js')) {
  import('../src/data/mnemonics.js').then(async (mod) => {
    console.log('Running validation on current MNEMONICS library...');
    const all = mod.MNEMONICS;
    console.log(`Total mnemonics loaded: ${all.length}`);
    const idMap = new Map();
    let dupes = 0;
    all.forEach(m => {
      if (idMap.has(m.id)) {
        console.error(`DUPLICATE ID: ${m.id} in ${m.chapterId}`);
        dupes++;
      }
      idMap.set(m.id, true);
    });
    console.log(`Duplicate IDs: ${dupes}`);
  });
}
