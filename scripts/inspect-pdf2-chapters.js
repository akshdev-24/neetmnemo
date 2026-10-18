import fs from 'fs';

const pages = JSON.parse(fs.readFileSync('scripts/pdf2_pages.json', 'utf8'));

// Check how chapters are structured across pages 1 to 76
console.log('Sample from Ch 13 (page 1):', pages[0].text.slice(0, 300));
console.log('\nSample from Ch 12 (page 5):', pages[4].text.slice(0, 300));
console.log('\nSample from Ch 11 (page 11):', pages[10].text.slice(0, 300));
console.log('\nSample from Ch 10 (page 16):', pages[15].text.slice(0, 300));
console.log('\nSample from Ch 9 (page 22):', pages[21].text.slice(0, 300));
console.log('\nSample from Ch 8 (page 27):', pages[26].text.slice(0, 300));
console.log('\nSample from Ch 7 (page 32):', pages[31].text.slice(0, 300));
console.log('\nSample from Ch 6 (page 37):', pages[36].text.slice(0, 300));
console.log('\nSample from Ch 5 (page 42):', pages[41].text.slice(0, 300));
console.log('\nSample from Ch 4 (page 47):', pages[46].text.slice(0, 300));
console.log('\nSample from Ch 3 (page 52):', pages[51].text.slice(0, 300));
console.log('\nSample from Ch 2 (page 57):', pages[56].text.slice(0, 300));
console.log('\nSample from Ch 1 (page 67):', pages[66].text.slice(0, 300));
