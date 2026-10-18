import fs from 'fs';

const transcriptPath = 'C:/Users/akk/.gemini/antigravity-ide/brain/9144ea92-e5ec-4ae5-a2ad-021b6e843880/.system_generated/logs/transcript_full.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');
const line92 = lines[92];
const obj = JSON.parse(line92);
const content = typeof obj.content === 'string' ? obj.content : JSON.stringify(obj.content);

// Find PDF 1 and PDF 2
const p1Start = content.indexOf('==Start of PDF==');
const p1End = content.indexOf('==End of PDF==');
const p2Start = content.indexOf('==Start of PDF==', p1End + 1);
const p2End = content.indexOf('==End of PDF==', p2Start + 1);

console.log('PDF 1:', p1Start, p1End);
console.log('PDF 2:', p2Start, p2End);

if (p1Start !== -1 && p1End !== -1) {
  const pdf1 = content.slice(p1Start, p1End + '==End of PDF=='.length);
  fs.writeFileSync('scripts/pdf1_extracted.txt', pdf1, 'utf8');
  console.log('Wrote scripts/pdf1_extracted.txt, length:', pdf1.length);
}

if (p2Start !== -1 && p2End !== -1) {
  const pdf2 = content.slice(p2Start, p2End + '==End of PDF=='.length);
  fs.writeFileSync('scripts/pdf2_extracted.txt', pdf2, 'utf8');
  console.log('Wrote scripts/pdf2_extracted.txt, length:', pdf2.length);
}
