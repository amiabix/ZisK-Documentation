const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://zisk.technology';
const PAGES_DIR = path.join(__dirname, '../pages');

// Map of page paths to their last modified times (you can update these manually)
const pages = [
  { path: '', priority: 1.0, changefreq: 'weekly' },
  { path: 'getting-started/installation', priority: 0.9, changefreq: 'monthly' },
  { path: 'getting-started/quickstart', priority: 0.9, changefreq: 'monthly' },
  { path: 'developer/setup', priority: 0.8, changefreq: 'monthly' },
  { path: 'developer/io', priority: 0.8, changefreq: 'monthly' },
  { path: 'developer/build-and-prove', priority: 0.8, changefreq: 'monthly' },
  { path: 'developer/writing-programs', priority: 0.8, changefreq: 'monthly' },
  { path: 'optimization/precompiles', priority: 0.7, changefreq: 'monthly' },
  { path: 'optimization/concurrent-proof-generation', priority: 0.7, changefreq: 'monthly' },
  { path: 'optimization/gpu-proof-generation', priority: 0.7, changefreq: 'monthly' },
  { path: 'distributed/introduction', priority: 0.8, changefreq: 'monthly' },
  { path: 'distributed/manual-deployment', priority: 0.8, changefreq: 'monthly' },
  { path: 'distributed/docker-deployment', priority: 0.8, changefreq: 'monthly' },
  { path: 'distributed/configuration-guide', priority: 0.7, changefreq: 'monthly' },
  { path: 'reference/glossary', priority: 0.6, changefreq: 'monthly' },
  { path: 'reference/utilities', priority: 0.7, changefreq: 'monthly' },
  { path: 'reference/ziskof', priority: 0.7, changefreq: 'monthly' },
  { path: 'reference/sdk', priority: 0.8, changefreq: 'monthly' },
];

function generateSitemap() {
  const currentDate = new Date().toISOString();
  
  const urls = pages.map(page => {
    const url = page.path ? `${BASE_URL}/${page.path}` : BASE_URL;
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, sitemap, 'utf8');
  console.log(`Sitemap generated at ${outputPath}`);
}

generateSitemap();

