import fs from 'fs';

const p1 = JSON.parse(fs.readFileSync('scripts/pdf1_pages.json', 'utf8'));
const p2 = JSON.parse(fs.readFileSync('scripts/pdf2_pages.json', 'utf8'));

console.log('--- PDF 1 PAGE HEADERS ---');
const p1Headers = new Map();
p1.forEach((pg, i) => {
  const lines = pg.text.split('\n').map(l => l.trim()).filter(Boolean);
  const titleLine = lines.slice(0, 4).join(' | ');
  // Find "Chapter XX"
  const m = titleLine.match(/Chapter\s+(\d+)[:\s]+([^|]+)/i);
  const chKey = m ? `Ch ${m[1]}: ${m[2].trim()}` : lines[0] || 'Unknown';
  if (!p1Headers.has(chKey)) p1Headers.set(chKey, []);
  p1Headers.get(chKey).push(i + 1);
});

for (const [k, pages] of p1Headers.entries()) {
  console.log(`${k} -> Pages ${pages[0]} to ${pages[pages.length - 1]} (${pages.length} pages)`);
}

console.log('\n--- PDF 2 PAGE HEADERS ---');
const p2Headers = new Map();
p2.forEach((pg, i) => {
  const lines = pg.text.split('\n').map(l => l.trim()).filter(Boolean);
  const titleLine = lines.slice(0, 4).join(' | ');
  const m = titleLine.match(/Chapter\s+(\d+)[:\s]+([^|]+)/i);
  const chKey = m ? `Ch ${m[1]}: ${m[2].trim()}` : lines[0] || 'Unknown';
  if (!p2Headers.has(chKey)) p2Headers.set(chKey, []);
  p2Headers.get(chKey).push(i + 1);
});

for (const [k, pages] of p2Headers.entries()) {
  console.log(`${k} -> Pages ${pages[0]} to ${pages[pages.length - 1]} (${pages.length} pages)`);
}
