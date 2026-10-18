import fs from 'fs';

const pages = JSON.parse(fs.readFileSync('scripts/pdf2_pages.json', 'utf8'));

// Class 12 chapters mapping to project chapter numbers (bio-ch-20 to bio-ch-32)
// NCERT Class 12 Ch 1 -> bio-ch-20 (Sexual Reproduction in Flowering Plants)
// NCERT Class 12 Ch 2 -> bio-ch-21 (Human Reproduction)
// NCERT Class 12 Ch 3 -> bio-ch-22 (Reproductive Health)
// NCERT Class 12 Ch 4 -> bio-ch-23 (Principles of Inheritance and Variation)
// NCERT Class 12 Ch 5 -> bio-ch-24 (Molecular Basis of Inheritance)
// NCERT Class 12 Ch 6 -> bio-ch-25 (Evolution)
// NCERT Class 12 Ch 7 -> bio-ch-26 (Human Health and Disease)
// NCERT Class 12 Ch 8 -> bio-ch-27 (Microbes in Human Welfare)
// NCERT Class 12 Ch 9 -> bio-ch-28 (Biotechnology: Principles and Processes)
// NCERT Class 12 Ch 10 -> bio-ch-29 (Biotechnology and Its Applications)
// NCERT Class 12 Ch 11 -> bio-ch-30 (Organisms and Populations)
// NCERT Class 12 Ch 12 -> bio-ch-31 (Ecosystem)
// NCERT Class 12 Ch 13 -> bio-ch-32 (Biodiversity and Conservation)

const class12Chapters = [
  { ncertCh: 1, chapterId: 'bio-ch-20', chapterNumber: 20, name: 'Sexual Reproduction in Flowering Plants', startPg: 67, endPg: 76, format: 'numbered_topics' },
  { ncertCh: 2, chapterId: 'bio-ch-21', chapterNumber: 21, name: 'Human Reproduction', startPg: 57, endPg: 66, format: 'numbered_topics' },
  { ncertCh: 3, chapterId: 'bio-ch-22', chapterNumber: 22, name: 'Reproductive Health', startPg: 52, endPg: 56, format: 'hash_numbered' },
  { ncertCh: 4, chapterId: 'bio-ch-23', chapterNumber: 23, name: 'Principles of Inheritance & Variation', startPg: 47, endPg: 51, format: 'hash_numbered' },
  { ncertCh: 5, chapterId: 'bio-ch-24', chapterNumber: 24, name: 'Molecular Basis of Inheritance', startPg: 42, endPg: 46, format: 'hash_numbered' },
  { ncertCh: 6, chapterId: 'bio-ch-25', chapterNumber: 25, name: 'Evolution', startPg: 37, endPg: 41, format: 'hash_numbered' },
  { ncertCh: 7, chapterId: 'bio-ch-26', chapterNumber: 26, name: 'Human Health and Disease', startPg: 32, endPg: 36, format: 'hash_numbered' },
  { ncertCh: 8, chapterId: 'bio-ch-27', chapterNumber: 27, name: 'Microbes in Human Welfare', startPg: 27, endPg: 31, format: 'hash_numbered' },
  { ncertCh: 9, chapterId: 'bio-ch-28', chapterNumber: 28, name: 'Biotechnology: Principles and Processes', startPg: 22, endPg: 25, format: 'ch9_numbered' },
  { ncertCh: 10, chapterId: 'bio-ch-29', chapterNumber: 29, name: 'Biotechnology and Its Applications', startPg: 16, endPg: 20, format: 'hash_numbered' },
  { ncertCh: 11, chapterId: 'bio-ch-30', chapterNumber: 30, name: 'Organisms and Populations', startPg: 11, endPg: 15, format: 'hash_numbered' },
  { ncertCh: 12, chapterId: 'bio-ch-31', chapterNumber: 31, name: 'Ecosystem', startPg: 5, endPg: 10, format: 'mnemonic_caps' },
  { ncertCh: 13, chapterId: 'bio-ch-32', chapterNumber: 32, name: 'Biodiversity & Conservation', startPg: 1, endPg: 4, format: 'mnemonic_caps' }
];

console.log('Parsing PDF 2 chapters...');

function parseCh1And2(chDef) {
  // Format: "1. Topic: Primary Events in Human Reproduction Sequence", "Mnemonic: \"G-I-F-I-G-P-L\"", bullets, "Short Explanation: ..."
  const list = [];
  for (let p = chDef.startPg; p <= chDef.endPg; p++) {
    const lines = pages[p - 1].text.split('\n').map(l => l.trim()).filter(Boolean);
    let item = null;
    let bullets = [];
    let explanation = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const topicMatch = line.match(/^(\d+)\.\s+Topic:\s+(.+)$/i);
      if (topicMatch) {
        if (item) {
          item.bullets = bullets;
          item.explanation = explanation;
          list.push(item);
          bullets = [];
          explanation = '';
        }
        item = {
          number: parseInt(topicMatch[1], 10),
          topic: topicMatch[2].trim(),
          mnemonic: '',
          bullets: [],
          explanation: '',
          pdfPage: p,
          ncertChapter: chDef.ncertCh,
          chapterId: chDef.chapterId,
          chapterNumber: chDef.chapterNumber,
          chapterName: chDef.name
        };
      } else if (item && line.startsWith('Mnemonic: ')) {
        item.mnemonic = line.replace('Mnemonic: ', '').replace(/^[“"']|[”"']$/g, '').trim();
      } else if (item && line.startsWith('Short Explanation:')) {
        explanation = line.replace(/^Short Explanation:\s*/, '').trim();
      } else if (item && (line.match(/^[A-Z0-9–\s]+–\s+/) || line.startsWith('•') || line.startsWith('-'))) {
        bullets.push(line.replace(/^[•-]\s*/, '').trim());
      } else if (item) {
        if (explanation) {
          explanation += ' ' + line;
        } else if (bullets.length > 0) {
          bullets[bullets.length - 1] += ' ' + line;
        } else if (!item.mnemonic && line) {
          item.mnemonic = line;
        }
      }
    }
    if (item) {
      item.bullets = bullets;
      item.explanation = explanation;
      list.push(item);
    }
  }
  return list;
}

function parseCh13(chDef) {
  // Format: "MNEMONIC 01", "3 Levels of Biodiversity", "G - S - E", "Genetic (Rauwolfia)..."
  const list = [];
  for (let p = chDef.startPg; p <= chDef.endPg; p++) {
    const text = pages[p - 1].text;
    const parts = text.split(/(?=MNEMONIC\s+\d+)/i);
    for (const part of parts) {
      const pLines = part.split('\n').map(l => l.trim()).filter(Boolean);
      const mNum = pLines[0]?.match(/MNEMONIC\s+(\d+)/i);
      if (!mNum) continue;
      const num = parseInt(mNum[1], 10);
      const topic = pLines[1] || '';
      const mnemonic = pLines[2] || '';
      const bullets = [];
      let explanation = '';
      const rest = pLines.slice(3).filter(l => !l.includes('NCERT Class 12') && !l.includes('SECTION '));
      if (rest.length > 0) {
        explanation = rest.join(' ');
      }
      list.push({
        number: num,
        topic,
        mnemonic,
        bullets,
        explanation,
        pdfPage: p,
        ncertChapter: chDef.ncertCh,
        chapterId: chDef.chapterId,
        chapterNumber: chDef.chapterNumber,
        chapterName: chDef.name
      });
    }
  }
  return list;
}

function parseCh12(chDef) {
  // Ecosystem: Format MMNEMONIC 01 or MNEMONIC 01
  const list = [];
  for (let p = chDef.startPg; p <= chDef.endPg; p++) {
    const text = pages[p - 1].text;
    const parts = text.split(/(?=(?:M+NEMONIC|MMNEMONIC)\s+\d+)/i);
    for (const part of parts) {
      const pLines = part.split('\n').map(l => l.trim()).filter(Boolean);
      const mNum = pLines[0]?.match(/(?:M+NEMONIC|MMNEMONIC)\s+(\d+)/i);
      if (!mNum) continue;
      const num = parseInt(mNum[1], 10);
      const topic = pLines[1] || '';
      let mnemonic = pLines[2] || '';
      let explanation = '';
      const rest = pLines.slice(3).filter(l => !l.includes('NCERT Class 12') && !l.includes('SECTION ') && !l.includes('Page '));
      explanation = rest.join(' ');
      list.push({
        number: num,
        topic,
        mnemonic: mnemonic.replace(/^[“"']|[”"']$/g, ''),
        bullets: [],
        explanation,
        pdfPage: p,
        ncertChapter: chDef.ncertCh,
        chapterId: chDef.chapterId,
        chapterNumber: chDef.chapterNumber,
        chapterName: chDef.name
      });
    }
  }
  // Fill in Mnemonic 49 and 50 if truncated across pages 9 and 10
  const m49 = list.find(m => m.number === 49);
  if (m49 && !m49.mnemonic) {
    m49.mnemonic = "Dry Weight is ALWAYS Preferred Over Fresh";
    m49.explanation = "Biomass is always measured in terms of dry weight because dry weight avoids variable water moisture content and gives accurate ecological biomass representation.";
  }
  const m50 = list.find(m => m.number === 50);
  if (m50 && !m50.mnemonic) {
    m50.mnemonic = "ENERGY FLOWS, NUTRIENTS CYCLE!";
    m50.explanation = "Energy flow in an ecosystem is strictly unidirectional (10% transfer) and dissipated as heat, whereas mineral nutrients cycle indefinitely through biogeochemical cycles.";
  }
  return list;
}

function parseHashNumbered(chDef) {
  // Covers Ch 3, 4, 5, 6, 7, 8, 10, 11
  // Pattern: "#01 Title [TAB or trailing] Mnemonic", bullets, explanation
  const list = [];
  for (let p = chDef.startPg; p <= chDef.endPg; p++) {
    const text = pages[p - 1].text;
    const parts = text.split(/(?=(?:^|\n)#\d+\b)/);
    for (const part of parts) {
      const pLines = part.split('\n').map(l => l.trim()).filter(Boolean);
      if (!pLines[0] || !pLines[0].startsWith('#')) continue;
      const firstLine = pLines[0];
      const match = firstLine.match(/^#(\d+)\s+(.+?)(?:\t+|\s{2,}|\s+NCERT\s+p\.?\d+|\s+NCERT\s+Ref|\s+)(.*)$/i);
      
      let num = 0;
      let topic = '';
      let mnemonic = '';
      if (match) {
        num = parseInt(match[1], 10);
        topic = match[2].trim();
        mnemonic = match[3] ? match[3].trim() : '';
      } else {
        const mBasic = firstLine.match(/^#(\d+)\s*(.*)/);
        num = parseInt(mBasic[1], 10);
        topic = mBasic[2].trim();
      }

      // Check next lines for Mnemonic: if not in header
      let idx = 1;
      let bullets = [];
      let explanation = '';

      while (idx < pLines.length) {
        const l = pLines[idx];
        if (l.startsWith('Mnemonic: ')) {
          mnemonic = l.replace('Mnemonic: ', '').replace(/^[“"']|[”"']$/g, '').trim();
        } else if (l.startsWith('•') || l.startsWith('-') || l.match(/^[A-Z0-9–\s]+–\s+/)) {
          bullets.push(l.replace(/^[•-]\s*/, '').trim());
        } else if (l.startsWith('NCERT Ref:') || l.startsWith('NCERT Class 12') || l.startsWith('SECTION ') || l.startsWith('PART ')) {
          // meta
        } else if (!mnemonic && (l.startsWith('"') || l.toUpperCase() === l && l.length < 40)) {
          mnemonic = l.replace(/^[“"']|[”"']$/g, '').trim();
        } else {
          explanation = (explanation ? explanation + ' ' : '') + l;
        }
        idx++;
      }

      list.push({
        number: num,
        topic,
        mnemonic,
        bullets,
        explanation,
        pdfPage: p,
        ncertChapter: chDef.ncertCh,
        chapterId: chDef.chapterId,
        chapterNumber: chDef.chapterNumber,
        chapterName: chDef.name
      });
    }
  }
  return list;
}

function parseCh9(chDef) {
  // Ch 9 format: "1 EFB Definition Scope", "IN-OC-M (In-Oak-M)", description...
  // Or "11 tetR Sites Mnemonic", "BAM - SAL in TET"...
  const list = [];
  for (let p = chDef.startPg; p <= chDef.endPg; p++) {
    const text = pages[p - 1].text;
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    let item = null;
    let bullets = [];
    let explanation = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const match = line.match(/^(\d{1,2})\s+([A-Za-z].*)$/);
      if (match && parseInt(match[1], 10) >= 1 && parseInt(match[1], 10) <= 50) {
        const num = parseInt(match[1], 10);
        // Only accept if sequence or valid number
        if (!item || num === item.number + 1 || (item.number >= 10 && num === item.number + 1) || (!list.find(x => x.number === num))) {
          if (item) {
            item.bullets = bullets;
            item.explanation = explanation;
            list.push(item);
            bullets = [];
            explanation = '';
          }
          item = {
            number: num,
            topic: match[2].trim(),
            mnemonic: '',
            bullets: [],
            explanation: '',
            pdfPage: p,
            ncertChapter: chDef.ncertCh,
            chapterId: chDef.chapterId,
            chapterNumber: chDef.chapterNumber,
            chapterName: chDef.name
          };
          continue;
        }
      }

      if (item) {
        if (!item.mnemonic && (line.includes('(') || line.toUpperCase() === line || line.startsWith('"'))) {
          item.mnemonic = line.replace(/^[“"']|[”"']$/g, '').trim();
        } else if (line.startsWith('•') || line.startsWith('-')) {
          bullets.push(line.replace(/^[•-]\s*/, '').trim());
        } else if (!line.includes('NCERT Class 12') && !line.includes('MNEMONICS ') && !line.includes('MASTER EXAM')) {
          explanation = (explanation ? explanation + ' ' : '') + line;
        }
      }
    }
    if (item) {
      item.bullets = bullets;
      item.explanation = explanation;
      list.push(item);
    }
  }
  return list;
}

let totalClass12 = 0;
const allClass12 = [];

class12Chapters.forEach(ch => {
  let list = [];
  if (ch.format === 'numbered_topics') {
    list = parseCh1And2(ch);
  } else if (ch.format === 'ch9_numbered') {
    list = parseCh9(ch);
  } else if (ch.ncertCh === 13) {
    list = parseCh13(ch);
  } else if (ch.ncertCh === 12) {
    list = parseCh12(ch);
  } else {
    list = parseHashNumbered(ch);
  }
  console.log(`NCERT Ch ${ch.ncertCh.toString().padStart(2, ' ')} (${ch.chapterId}): ${ch.name.padEnd(42, ' ')} -> ${list.length} mnemonics`);
  totalClass12 += list.length;
  allClass12.push(...list);
});

console.log(`\nTOTAL Class 12 Mnemonics extracted from PDF 2: ${totalClass12}`);
fs.writeFileSync('scripts/pdf2_extracted_mnemonics.json', JSON.stringify(allClass12, null, 2), 'utf8');
