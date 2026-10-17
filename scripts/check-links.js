const http = require('http');

const BASE_URL = 'http://localhost:3001';
const visited = new Set();
const toVisit = ['/'];
const brokenLinks = [];
let checkedCount = 0;

async function fetchPage(urlPath) {
    return new Promise((resolve) => {
        const fullUrl = urlPath.startsWith('http') ? urlPath : `${BASE_URL}${urlPath}`;
        http.get(fullUrl, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, html: data }));
        }).on('error', (err) => {
            resolve({ status: 500, error: err.message, html: '' });
        });
    });
}

function extractLinks(html) {
    const links = [];
    const hrefRegex = /href=["'](\/[a-zA-Z0-9_\-\/]*)["']/g;
    let match;
    while ((match = hrefRegex.exec(html)) !== null) {
        const link = match[1];
        if (link.startsWith('/_next') || link.startsWith('/api') || link.endsWith('.png') || link.endsWith('.svg') || link.endsWith('.ico')) continue;
        links.push(link);
    }
    return links;
}

async function run() {
    console.log('=== RUNNING INTERNAL BROKEN LINK CHECKER ===');

    while (toVisit.length > 0 && checkedCount < 100) {
        const current = toVisit.pop();
        if (visited.has(current)) continue;
        visited.add(current);
        checkedCount++;

        const res = await fetchPage(current);
        if (res.status >= 400) {
            brokenLinks.push({ path: current, status: res.status });
        } else {
            const found = extractLinks(res.html);
            for (const link of found) {
                if (!visited.has(link) && !toVisit.includes(link)) {
                    toVisit.push(link);
                }
            }
        }
    }

    console.log(`Checked ${visited.size} internal URLs.`);
    if (brokenLinks.length > 0) {
        console.error('Broken links found:', brokenLinks);
    } else {
        console.log('✓ ZERO broken internal links detected across entire crawl tree!');
    }
}

run();
