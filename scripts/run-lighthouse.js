const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const routes = [
    { name: 'home', path: '/' },
    { name: 'service', path: '/services/ai-automation' },
    { name: 'portfolio', path: '/portfolio' },
    { name: 'contact', path: '/contact' }
];

const results = {};

function runLighthouse(url) {
    const tmpFile = path.join(__dirname, 'lh-tmp.json');
    if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile);

    const cmd = `npx lighthouse "${url}" --form-factor=mobile --screenEmulation.mobile=true --only-categories=performance --output=json --output-path="${tmpFile}" --chrome-flags="--headless=new --no-sandbox --disable-gpu" --quiet`;
    execSync(cmd, { stdio: 'inherit' });

    const raw = JSON.parse(fs.readFileSync(tmpFile, 'utf8'));
    if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile);

    const score = Math.round((raw.categories.performance?.score || 0) * 100);
    const lcp = parseFloat(((raw.audits['largest-contentful-paint']?.numericValue || 0) / 1000).toFixed(2));
    const tbt = Math.round(raw.audits['total-blocking-time']?.numericValue || 0);
    const cls = parseFloat((raw.audits['cumulative-layout-shift']?.numericValue || 0).toFixed(3));

    return { score, lcp, tbt, cls };
}

function getMedian(runs, key) {
    const sorted = [...runs].sort((a, b) => a[key] - b[key]);
    return sorted[1][key]; // median of 3 is index 1
}

async function main() {
    console.log('Starting 3 Lighthouse Mobile runs per route on http://localhost:3001...\n');

    for (const r of routes) {
        console.log(`\n=== Testing ${r.path} ===`);
        const runs = [];
        for (let i = 1; i <= 3; i++) {
            process.stdout.write(`  Run ${i}/3: `);
            const res = runLighthouse(`http://localhost:3001${r.path}`);
            runs.push(res);
            console.log(`Perf: ${res.score} | LCP: ${res.lcp}s | TBT: ${res.tbt}ms | CLS: ${res.cls}`);
        }

        const medianPerf = getMedian(runs, 'score');
        const medianLcp = getMedian(runs, 'lcp');
        const medianTbt = getMedian(runs, 'tbt');
        const medianCls = getMedian(runs, 'cls');

        results[r.path] = {
            runs,
            median: { score: medianPerf, lcp: medianLcp, tbt: medianTbt, cls: medianCls }
        };

        console.log(`>> Median for ${r.path}: Perf: ${medianPerf} | LCP: ${medianLcp}s | TBT: ${medianTbt}ms | CLS: ${medianCls}`);
    }

    fs.writeFileSync(path.join(__dirname, 'lighthouse-results.json'), JSON.stringify(results, null, 2));
    console.log('\nAll runs completed! Saved to scripts/lighthouse-results.json');
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
