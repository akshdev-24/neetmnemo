import fs from 'fs';
import path from 'path';

// Helper to format mnemonic object
export function formatMnemonic(m) {
  return JSON.stringify(m, null, 2);
}

// Helper to save chapter file
export function saveChapterFile(filePath, varName, mnemonics) {
  const content = `export const ${varName} = ${JSON.stringify(mnemonics, null, 2)};\n`;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Saved ${mnemonics.length} mnemonics to ${filePath}`);
}
