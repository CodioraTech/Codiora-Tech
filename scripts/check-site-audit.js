const http = require('http');

const routes = [
    '/',
    '/about',
    '/contact',
    '/portfolio',
    '/portfolio/neonmarket',
    '/services/ai-automation',
    '/services/enterprise-apps',
    '/services/web-architecture',
    '/services/mobile-innovation',
    '/services/immersive-ui-ux',
    '/services/devops-cloud',
    '/services/web-scraping',
    '/services/growth-marketing',
    '/process',
    '/platform',
    '/expertise',
    '/partners',
    '/history',
    '/team',
    '/culture',
    '/careers',
    '/testimonials',
    '/blog',
    '/codecamp',
    '/internship',
    '/faq',
    '/privacy-policy',
    '/terms-conditions',
    '/refund-policy',
    '/sitemap',
    '/why-us',
    '/leadership',
    '/pricing',
    '/case-studies',
    '/counseling',
    '/robots.txt',
    '/sitemap.xml',
    '/non-existent-page-404-check'
];

async function fetchRoute(path) {
    return new Promise((resolve) => {
        const req = http.get(`http://localhost:3001${path}`, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                resolve({
                    path,
                    statusCode: res.statusCode,
                    headers: res.headers,
                    html: data
                });
            });
        });
        req.on('error', (err) => {
            resolve({
                path,
                statusCode: 0,
                error: err.message
            });
        });
    });
}

async function run() {
    console.log('--- STARTING ROUTE AUDIT ---');
    const results = [];
    for (const r of routes) {
        const res = await fetchRoute(r);
        const html = res.html || '';
        const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
        const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
        const title = titleMatch ? titleMatch[1].trim() : '';
        const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                          html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
        const desc = descMatch ? descMatch[1].trim() : '';
        const canonMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) ||
                           html.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["']/i);
        const canonical = canonMatch ? canonMatch[1].trim() : '';
        const jsonLdMatches = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
        
        const hasRandomUser = html.includes('randomuser.me');
        const hasEmDash = html.includes('—');
        const hasLorem = html.toLowerCase().includes('lorem ipsum');
        const hasZeroStats = html.includes('>0+<') || html.includes('>0%<') || html.includes('>0h<');

        results.push({
            path: r,
            status: res.statusCode,
            h1Count: h1Matches.length,
            h1s: h1Matches.map(h => h.replace(/<[^>]+>/g, '').trim()),
            title,
            titleLen: title.length,
            desc,
            descLen: desc.length,
            canonical,
            jsonLdCount: jsonLdMatches.length,
            hasRandomUser,
            hasEmDash,
            hasLorem,
            hasZeroStats
        });
    }

    console.table(results.map(r => ({
        path: r.path,
        status: r.status,
        h1Count: r.h1Count,
        titleLen: r.titleLen,
        descLen: r.descLen,
        canonical: r.canonical ? 'YES' : 'MISSING',
        jsonLd: r.jsonLdCount,
        randomuser: r.hasRandomUser,
        emDash: r.hasEmDash,
        lorem: r.hasLorem
    })));

    console.log('\n--- DETAILED SUMMARY ---');
    results.forEach(r => {
        if (r.h1Count !== 1 && r.status === 200) {
            console.log(`[H1 MISMATCH] ${r.path}: has ${r.h1Count} H1 tags: ${JSON.stringify(r.h1s)}`);
        }
        if (r.titleLen > 60) {
            console.log(`[TITLE TOO LONG] ${r.path}: (${r.titleLen} chars) "${r.title}"`);
        }
        if (r.descLen > 160 || r.descLen === 0) {
            console.log(`[DESC ISSUE] ${r.path}: (${r.descLen} chars) "${r.desc}"`);
        }
        if (!r.canonical && r.status === 200 && !r.path.includes('.')) {
            console.log(`[CANONICAL MISSING] ${r.path}`);
        }
    });
}

run();
