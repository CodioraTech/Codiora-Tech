const http = require('http');

const sampleRoutes = ['/', '/about', '/contact', '/services/ai-automation', '/portfolio/neonmarket', '/faq', '/why-us', '/blog'];

async function verify() {
    for (const route of sampleRoutes) {
        await new Promise((resolve) => {
            http.get(`http://localhost:3001${route}`, (res) => {
                let html = '';
                res.on('data', chunk => html += chunk);
                res.on('end', () => {
                    const h1s = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim());
                    const title = (html.match(/<title[^>]*>([^<]+)<\/title>/i) || [])[1] || '';
                    const desc = (html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) || [])[1] || '';
                    const canon = (html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i) || [])[1] || '';
                    const jsonLd = (html.match(/application\/ld\+json/g) || []).length;
                    
                    console.log(`\nRoute: ${route}`);
                    console.log(`  Status: ${res.statusCode}`);
                    console.log(`  Title (${title.length} chars): ${title}`);
                    console.log(`  Desc (${desc.length} chars): ${desc}`);
                    console.log(`  Canonical: ${canon}`);
                    console.log(`  H1 Count (${h1s.length}): ${JSON.stringify(h1s)}`);
                    console.log(`  JSON-LD Blocks: ${jsonLd}`);
                    resolve();
                });
            });
        });
    }
}

verify();
