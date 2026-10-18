import { MNEMONICS } from '../data/mnemonics';
import { CHAPTERS } from '../data/chapters';

/**
 * Returns the exact count of unique, published mnemonics for a specific chapter.
 */
export function getMnemonicCountForChapter(chapterId) {
  if (!chapterId) return 0;
  return MNEMONICS.filter((m) => m.chapterId === chapterId).length;
}

/**
 * Returns the exact count of unique, published mnemonics for a specific subject.
 */
export function getMnemonicCountForSubject(subjectId) {
  if (!subjectId) return 0;
  return MNEMONICS.filter((m) => m.subject === subjectId).length;
}

/**
 * Returns the exact count of unique, published mnemonics for a specific class level (11 or 12).
 */
export function getMnemonicCountForClass(classLevel, subjectId = 'biology') {
  return MNEMONICS.filter((m) => 
    m.classLevel === classLevel && (!subjectId || m.subject === subjectId)
  ).length;
}

/**
 * Returns total count of all unique mnemonics across the entire platform.
 */
export function getTotalMnemonicCount() {
  return MNEMONICS.length;
}
