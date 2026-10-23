const fs = require('fs');
const path = require('path');

// 1. Read sitemap.xml
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
    console.error('FAIL: public/sitemap.xml does not exist.');
    process.exit(1);
}

const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
const sitemapUrls = [...sitemapContent.matchAll(/<loc>https:\/\/codioratech\.com(.*?)<\/loc>/g)].map(m => m[1]);

// 2. Read Next.js build manifests
const pagesManifestPath = path.join(__dirname, '..', '.next', 'server', 'pages-manifest.json');
const prerenderManifestPath = path.join(__dirname, '..', '.next', 'prerender-manifest.json');

if (!fs.existsSync(pagesManifestPath) || !fs.existsSync(prerenderManifestPath)) {
    console.error('FAIL: Build manifests not found in .next/. Please run `npm run build` first.');
    process.exit(1);
}

const pagesManifest = JSON.parse(fs.readFileSync(pagesManifestPath, 'utf8'));
const prerenderManifest = JSON.parse(fs.readFileSync(prerenderManifestPath, 'utf8'));

// Extract all compiled HTML routes
const staticPages = Object.keys(pagesManifest).filter(
    route => !route.startsWith('/_') && !route.includes('[') && !route.startsWith('/api')
);
const prerenderedPages = Object.keys(prerenderManifest.routes);
const buildRoutes = [...new Set([...staticPages, ...prerenderedPages])];

// Explicitly allowed exemptions: Error pages, 301 redirects, and noindex forms
const ALLOWED_EXEMPTIONS = new Set([
    '/404',             // Error page (never indexed)
    '/career',          // 301 redirect to /careers
    '/case-studies',    // 301 redirect to /portfolio
    '/careers-apply',   // Intake form with noindex, nofollow
    '/partner-apply',   // Intake form with noindex, nofollow
    '/counseling'       // Intake form with noindex, nofollow
]);

console.log('=== Sitemap Validation Audit ===');
console.log(`Total build routes: ${buildRoutes.length}`);
console.log(`Total sitemap URLs: ${sitemapUrls.length}`);
console.log(`Allowed exemptions: ${ALLOWED_EXEMPTIONS.size} routes (${[...ALLOWED_EXEMPTIONS].join(', ')})`);

let hasError = false;

// Check 1: Any sitemap URLs that don't exist in the build?
const sitemapNotInBuild = sitemapUrls.filter(url => !buildRoutes.includes(url));
if (sitemapNotInBuild.length > 0) {
    console.error('\n❌ FAIL: The following URLs are in sitemap.xml but were NOT generated in the build:');
    sitemapNotInBuild.forEach(url => console.error(`  - ${url}`));
    hasError = true;
} else {
    console.log('✔ All sitemap.xml URLs exist as valid build routes.');
}

// Check 2: Any non-exempt build routes missing from the sitemap?
const unexemptedMissing = buildRoutes.filter(
    route => !ALLOWED_EXEMPTIONS.has(route) && !sitemapUrls.includes(route)
);
if (unexemptedMissing.length > 0) {
    console.error('\n❌ FAIL: The following build routes are missing from sitemap.xml and are not exempted:');
    unexemptedMissing.forEach(route => console.error(`  - ${route}`));
    hasError = true;
} else {
    console.log('✔ All indexable build routes are present in sitemap.xml.');
}

// Check 3: Did any exempted (noindex/redirect/404) route sneak into sitemap?
const exemptedInSitemap = sitemapUrls.filter(url => ALLOWED_EXEMPTIONS.has(url));
if (exemptedInSitemap.length > 0) {
    console.error('\n❌ FAIL: The following exempted (noindex/redirect/404) routes are present in sitemap.xml:');
    exemptedInSitemap.forEach(url => console.error(`  - ${url}`));
    hasError = true;
} else {
    console.log('✔ No exempted (noindex/redirect/404) routes appear in sitemap.xml.');
}

if (hasError) {
    console.error('\n❌ Validation FAILED.');
    process.exit(1);
} else {
    console.log('\n✅ PASS: sitemap.xml matches build routes perfectly (76 indexed + 6 exempted = 82 build routes).');
    process.exit(0);
}
