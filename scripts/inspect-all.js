import fs from 'fs';
import path from 'path';

const dir = './src/data/mnemonics/biology';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
console.log('Biology files in', dir);
let total = 0;
for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const count = (content.match(/"id":/g) || []).length;
  console.log(`${f}: ${count} entries`);
  total += count;
}
console.log(`Total across files: ${total}`);
