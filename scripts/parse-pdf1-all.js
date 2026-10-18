import fs from 'fs';

const pages = JSON.parse(fs.readFileSync('scripts/pdf1_pages.json', 'utf8'));

// We know the structure:
// Pages 8-12: Ch 19
// Pages 13-17: Ch 18
// Pages 18-22: Ch 17
// Pages 23-27: Ch 16
// Pages 28-32: Ch 15
// Pages 33-37: Ch 14
// Pages 38-42: Ch 13
// Pages 43-47: Ch 12
// Pages 48-52: Ch 11
// Pages 53-57: Ch 10
// Pages 58-62: Ch 9
// Pages 63-67: Ch 8
// Pages 68-72: Ch 7
// Pages 73-77: Ch 6
// Pages 78-82: Ch 5
// Pages 83-87: Ch 4
// Pages 88-92: Ch 3
// Pages 93-97: Ch 2
// Pages 98-102: Ch 1

// And pages 1-5: Ch 21 (Neural Control variant)
// And pages 6-7: Ch 20 (Locomotion sheet)

const chapterRanges = [
  { chNum: 1, name: 'The Living World', startPg: 98, endPg: 102 },
  { chNum: 2, name: 'Biological Classification', startPg: 93, endPg: 97 },
  { chNum: 3, name: 'Plant Kingdom', startPg: 88, endPg: 92 },
  { chNum: 4, name: 'Animal Kingdom', startPg: 83, endPg: 87 },
  { chNum: 5, name: 'Morphology of Flowering Plants', startPg: 78, endPg: 82 },
  { chNum: 6, name: 'Anatomy of Flowering Plants', startPg: 73, endPg: 77 },
  { chNum: 7, name: 'Structural Organisation in Animals', startPg: 68, endPg: 72 },
  { chNum: 8, name: 'Cell: The Unit of Life', startPg: 63, endPg: 67 },
  { chNum: 9, name: 'Biomolecules', startPg: 58, endPg: 62 },
  { chNum: 10, name: 'Cell Cycle and Cell Division', startPg: 53, endPg: 57 },
  { chNum: 11, name: 'Photosynthesis in Higher Plants', startPg: 48, endPg: 52 },
  { chNum: 12, name: 'Respiration in Plants', startPg: 43, endPg: 47 },
  { chNum: 13, name: 'Plant Growth and Development', startPg: 38, endPg: 42 },
  { chNum: 14, name: 'Breathing and Exchange of Gases', startPg: 33, endPg: 37 },
  { chNum: 15, name: 'Body Fluids and Circulation', startPg: 28, endPg: 32 },
  { chNum: 16, name: 'Excretory Products and Their Elimination', startPg: 23, endPg: 27 },
  { chNum: 17, name: 'Locomotion and Movement', startPg: 18, endPg: 22 },
  { chNum: 18, name: 'Neural Control and Coordination', startPg: 13, endPg: 17 },
  { chNum: 19, name: 'Chemical Coordination and Integration', startPg: 8, endPg: 12 }
];

console.log('Testing PDF 1 chapter parsing...');

function parsePdf1Chapter(chDef) {
  const mnemonics = [];
  for (let p = chDef.startPg; p <= chDef.endPg; p++) {
    const pgText = pages[p - 1].text;
    const lines = pgText.split('\n');
    let currentItem = null;
    let bulletPoints = [];
    let shortExplanation = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      if (line.startsWith('Topic - ')) {
        if (currentItem) {
          currentItem.bullets = bulletPoints;
          currentItem.explanation = shortExplanation;
          mnemonics.push(currentItem);
          bulletPoints = [];
          shortExplanation = '';
        }
        currentItem = {
          chapterNumber: chDef.chNum,
          chapterName: chDef.name,
          pdfPage: p,
          topic: line.replace('Topic - ', '').trim(),
          mnemonic: '',
          bullets: [],
          explanation: ''
        };
      } else if (currentItem && line.startsWith('Mnemonic: ')) {
        currentItem.mnemonic = line.replace('Mnemonic: ', '').replace(/^[“"']|[”"']$/g, '').trim();
      } else if (currentItem && (line.startsWith('Short Explanation: ') || line.startsWith('Short Explanation:'))) {
        shortExplanation = line.replace(/^Short Explanation:\s*/, '').trim();
      } else if (currentItem && line.startsWith('- ')) {
        bulletPoints.push(line.slice(2).trim());
      } else if (currentItem) {
        // Could be continuing line of bullet or explanation, or standalone description line at bottom of box
        if (shortExplanation) {
          shortExplanation += ' ' + line;
        } else if (bulletPoints.length > 0) {
          // If line doesn't start with dash, could be summary line or continued bullet
          if (line.includes('Page ') || line.includes('Mnemonics Master')) {
            // footer or header, ignore
          } else if (line.endsWith('.')) {
            // summary line
            shortExplanation = line;
          } else {
            bulletPoints[bulletPoints.length - 1] += ' ' + line;
          }
        }
      }
    }
    if (currentItem) {
      currentItem.bullets = bulletPoints;
      currentItem.explanation = shortExplanation;
      mnemonics.push(currentItem);
    }
  }
  return mnemonics;
}

let totalMnemonics = 0;
const results = [];
chapterRanges.forEach(ch => {
  const list = parsePdf1Chapter(ch);
  console.log(`Ch ${ch.chNum.toString().padStart(2, ' ')}: ${ch.name.padEnd(42, ' ')} -> ${list.length} mnemonics (pages ${ch.startPg}-${ch.endPg})`);
  totalMnemonics += list.length;
  results.push(...list);
});

console.log(`\nTOTAL Class 11 Mnemonics extracted from PDF 1: ${totalMnemonics}`);
fs.writeFileSync('scripts/pdf1_extracted_mnemonics.json', JSON.stringify(results, null, 2), 'utf8');
