import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { CHAPTERS } from '../src/data/chapters.js';
import { MNEMONICS } from '../src/data/mnemonics.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://neetmonic.akshdev.site';

function generateSitemap() {
  const publicDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const urls = [];

  // 1. Core High-Priority Biology Pages
  urls.push({ loc: `${BASE_URL}/`, changefreq: 'daily', priority: '1.0' });
  urls.push({ loc: `${BASE_URL}/class-11-biology-mnemonics`, changefreq: 'weekly', priority: '0.9' });
  urls.push({ loc: `${BASE_URL}/class-12-biology-mnemonics`, changefreq: 'weekly', priority: '0.9' });
  urls.push({ loc: `${BASE_URL}/chapters`, changefreq: 'weekly', priority: '0.9' });
  urls.push({ loc: `${BASE_URL}/revision`, changefreq: 'weekly', priority: '0.8' });
  urls.push({ loc: `${BASE_URL}/quiz`, changefreq: 'weekly', priority: '0.8' });
  urls.push({ loc: `${BASE_URL}/about`, changefreq: 'monthly', priority: '0.7' });
  urls.push({ loc: `${BASE_URL}/privacy`, changefreq: 'monthly', priority: '0.5' });
  urls.push({ loc: `${BASE_URL}/terms`, changefreq: 'monthly', priority: '0.5' });
  urls.push({ loc: `${BASE_URL}/disclaimer`, changefreq: 'monthly', priority: '0.5' });
  urls.push({ loc: `${BASE_URL}/contact`, changefreq: 'monthly', priority: '0.5' });

  // 2. All 32 Published Biology Chapter Pages
  CHAPTERS.forEach((ch) => {
    urls.push({
      loc: `${BASE_URL}/chapters/${ch.id}`,
      changefreq: 'weekly',
      priority: '0.8'
    });
  });

  // 3. All Published Biology Mnemonic Detail Pages
  MNEMONICS.forEach((m) => {
    urls.push({
      loc: `${BASE_URL}/mnemonics/${m.id}`,
      changefreq: 'weekly',
      priority: '0.8'
    });
  });

  // Build XML String
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml.trim() + '\n', 'utf-8');
  console.log(`✅ Generated sitemap.xml with ${urls.length} indexable canonical URLs.`);

  // 4. Generate robots.txt
  const robotsTxt = `# NEETMONIC Robots.txt (https://neetmonic.akshdev.site)
User-agent: *
Allow: /
Disallow: /favorites
Disallow: /progress
Disallow: /search

# Search Engine Sitemap Location
Sitemap: ${BASE_URL}/sitemap.xml
`;

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt.trim() + '\n', 'utf-8');
  console.log(`✅ Generated robots.txt.`);
}

generateSitemap();
