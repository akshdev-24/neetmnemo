import { PDFParse } from 'pdf-parse';
import fs from 'fs';

async function extract(pdfPath, outJsonPath, outTxtPath) {
  const buf = fs.readFileSync(pdfPath);
  const parser = new PDFParse({ data: buf });
  await parser.load();
  const textObj = await parser.getText();
  console.log(`Extracted ${pdfPath}: ${textObj.pages.length} pages, ${textObj.text.length} chars`);
  fs.writeFileSync(outJsonPath, JSON.stringify(textObj.pages, null, 2), 'utf8');
  fs.writeFileSync(outTxtPath, textObj.text, 'utf8');
}

async function main() {
  const p1 = 'C:/Users/akk/.gemini/antigravity-ide/brain/9144ea92-e5ec-4ae5-a2ad-021b6e843880/.user_uploaded/media_1792301410578.pdf';
  const p2 = 'C:/Users/akk/.gemini/antigravity-ide/brain/9144ea92-e5ec-4ae5-a2ad-021b6e843880/.user_uploaded/media_1792301411624.pdf';

  await extract(p1, 'scripts/pdf1_pages.json', 'scripts/pdf1_full.txt');
  await extract(p2, 'scripts/pdf2_pages.json', 'scripts/pdf2_full.txt');
  console.log('Done extracting both PDFs!');
}

main().catch(console.error);
