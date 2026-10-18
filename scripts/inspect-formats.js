import fs from 'fs';

const p1 = JSON.parse(fs.readFileSync('scripts/pdf1_pages.json', 'utf8'));
const p2 = JSON.parse(fs.readFileSync('scripts/pdf2_pages.json', 'utf8'));

console.log('PDF 1 page 98 text (Class 11 Ch 1):');
console.log(p1[97].text);

console.log('\n==========================================\n');
console.log('PDF 2 page 1 text (Class 12 Ch 13):');
console.log(p2[0].text);
