const { execSync } = require('child_process');
const fs = require('fs');

try {
    execSync('npx lighthouse http://localhost:3001/ --form-factor=mobile --screenEmulation.mobile=true --output=json --output-path=lh-detail.json --chrome-flags="--headless=new --no-sandbox" --quiet');
    const data = JSON.parse(fs.readFileSync('lh-detail.json', 'utf8'));
    fs.unlinkSync('lh-detail.json');

    console.log('=== LCP Element ===');
    console.log(JSON.stringify(data.audits['largest-contentful-paint-element']?.details?.items, null, 2));

    console.log('\n=== Render Blocking Resources ===');
    console.log(JSON.stringify(data.audits['render-blocking-resources']?.details?.items, null, 2));

    console.log('\n=== LCP Diagnostic Breakdown ===');
    const lcpAudit = data.audits['largest-contentful-paint'];
    console.log('LCP Numeric Value (ms):', lcpAudit.numericValue);
    console.log('LCP Metric Savings:', JSON.stringify(lcpAudit.metricSavings, null, 2));
} catch (e) {
    console.error(e.message);
}
