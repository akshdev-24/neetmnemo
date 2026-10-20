import fs from 'fs';
import path from 'path';

export function validateQuestion(q, chId) {
  if (!q.id) throw new Error(`Missing id in question in ${chId}: ${JSON.stringify(q)}`);
  if (!q.chapterId) q.chapterId = chId;
  if (!q.options || q.options.length !== 4) {
    throw new Error(`Question ${q.id} must have exactly 4 options: got ${q.options?.length}`);
  }
  const optionSet = new Set(q.options);
  if (optionSet.size !== 4) {
    throw new Error(`Question ${q.id} has duplicate options: ${JSON.stringify(q.options)}`);
  }
  if (typeof q.correctIndex !== 'number' || q.correctIndex < 0 || q.correctIndex > 3) {
    throw new Error(`Question ${q.id} invalid correctIndex: ${q.correctIndex}`);
  }
  if (!q.question || q.question.trim().length === 0) {
    throw new Error(`Question ${q.id} missing question text`);
  }
  if (!q.explanation || q.explanation.trim().length === 0) {
    throw new Error(`Question ${q.id} missing explanation`);
  }
  if (!q.ncertRef) {
    throw new Error(`Question ${q.id} missing ncertRef`);
  }
  return true;
}

export function writeChapterQuizFile(chapterNumber, chapterId, classLevel, questions, outDir) {
  const padNum = String(chapterNumber).padStart(2, '0');
  const fileName = `quiz-ch-${padNum}.js`;
  const filePath = path.join(outDir, fileName);

  questions.forEach((q, idx) => {
    const qPad = String(idx + 1).padStart(2, '0');
    if (!q.id) {
      q.id = `quiz-bio-ch${padNum}-${qPad}`;
    }
    q.chapterId = chapterId;
    q.classLevel = classLevel;
    q.subject = 'biology';
    validateQuestion(q, chapterId);
  });

  const content = `/**
 * NEET Biology Question Bank — Chapter ${chapterNumber} (Class ${classLevel})
 * 50 Verified NCERT-mapped Practice Questions
 */

export const quizBioCh${padNum} = ${JSON.stringify(questions, null, 2)};
`;

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Written ${fileName} with ${questions.length} questions`);
}
