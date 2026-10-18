import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

async function testPdf(filePath, outPath) {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdf(dataBuffer);
  console.log(`Parsed ${filePath}:`);
  console.log(`Pages: ${data.numpages}`);
  console.log(`Text length: ${data.text.length}`);
  fs.writeFileSync(outPath, data.text, 'utf8');
  console.log(`Saved to ${outPath}`);
}

async function main() {
  await testPdf('C:/Users/akk/.gemini/antigravity-ide/brain/9144ea92-e5ec-4ae5-a2ad-021b6e843880/.user_uploaded/media_1792301410578.pdf', 'scripts/pdf1_text.txt');
  await testPdf('C:/Users/akk/.gemini/antigravity-ide/brain/9144ea92-e5ec-4ae5-a2ad-021b6e843880/.user_uploaded/media_1792301411624.pdf', 'scripts/pdf2_text.txt');
}

main().catch(console.error);
