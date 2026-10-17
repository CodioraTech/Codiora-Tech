const fs = require('fs');

const sitemapContent = fs.readFileSync('public/sitemap.xml', 'utf8');
const sitemapUrls = [];
const locMatches = sitemapContent.match(/<loc>https:\/\/codioratech\.com([^<]*)<\/loc>/g);
if (locMatches) {
  for (const m of locMatches) {
    const p = m.replace('<loc>https://codioratech.com', '').replace('</loc>', '') || '/';
    sitemapUrls.push(p);
  }
}

// Read prerender-manifest.json
const prerenderManifest = JSON.parse(fs.readFileSync('.next/prerender-manifest.json', 'utf8'));
const prerenderRoutes = Object.keys(prerenderManifest.routes);

// Read build-manifest.json
const buildManifest = JSON.parse(fs.readFileSync('.next/build-manifest.json', 'utf8'));
const staticPages = Object.keys(buildManifest.pages).filter(p => !p.startsWith('/_') && !p.startsWith('/api') && !p.includes('['));

const allGeneratedPages = Array.from(new Set([...staticPages, ...prerenderRoutes])).sort();

console.log(`Total generated pages in build: ${allGeneratedPages.length}`);
console.log(`Total URLs in sitemap: ${sitemapUrls.length}`);

const nonSitemapPages = allGeneratedPages.filter(p => !sitemapUrls.includes(p));

console.log(`\nNon-sitemap pages count: ${nonSitemapPages.length}`);
console.log(JSON.stringify(nonSitemapPages, null, 2));
