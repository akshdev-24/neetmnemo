import { CHAPTERS } from '../src/data/chapters.js';

console.log('Total chapters in chapters.js:', CHAPTERS.length);

for (const sub of ['physics', 'chemistry', 'biology']) {
  const subChapters = CHAPTERS.filter(c => c.subject === sub);
  console.log(`\n=== ${sub.toUpperCase()} (${subChapters.length} chapters) ===`);
  subChapters.forEach(c => {
    console.log(`${c.id} | Ch ${c.number}: ${c.title} (Class ${c.classLevel}) | Topics: ${c.topics.length}`);
  });
}
