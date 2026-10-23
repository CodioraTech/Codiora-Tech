const fs = require('fs');
const path = require('path');

const buildManifest = JSON.parse(fs.readFileSync('.next/build-manifest.json', 'utf8'));

function getFileSize(relPath) {
  try {
    const full = path.join('.next', relPath);
    const stats = fs.statSync(full);
    return stats.size;
  } catch (e) {
    return 0;
  }
}

// Compute shared vendor/framework chunks
const sharedFiles = (buildManifest.lowPriorityFiles || []).concat(
  buildManifest.rootMainFiles || [],
  buildManifest.polyfillFiles || []
);

const sharedSize = sharedFiles.reduce((acc, f) => acc + getFileSize(f), 0);

console.log('=== FIRST LOAD JS SIZE PER ROUTE (NEXT.JS 16.4.2 BUILD) ===');

const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/services/ai-automation',
  '/portfolio',
  '/portfolio/neonmarket',
  '/faq',
  '/privacy-policy',
  '/terms-conditions',
  '/blog',
  '/careers'
];

const results = [];

for (const r of routes) {
  const pageFiles = buildManifest.pages[r] || [];
  const pageSize = pageFiles.reduce((acc, f) => acc + getFileSize(f), 0);
  const totalFirstLoad = pageSize + sharedSize;

  results.push({
    Route: r,
    'Page JS (kB)': (pageSize / 1024).toFixed(1) + ' kB',
    'First Load JS (kB)': (totalFirstLoad / 1024).toFixed(1) + ' kB'
  });
}

console.table(results);
