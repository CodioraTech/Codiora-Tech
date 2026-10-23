const fs = require('fs');
const path = require('path');

const claims = require('./claims-inventory.json');

console.log('| # | Category | File:Line | Exact Verbatim Claim Text |');
console.log('|---|---|---|---|');

claims.forEach((c, i) => {
    // Sanitize pipe characters
    const cleanRaw = c.raw.replace(/\|/g, '\\|').replace(/\s+/g, ' ');
    console.log(`| ${i + 1} | ${c.category} | [${path.basename(c.file)}:${c.line}](file:///${path.resolve(__dirname, '..', c.file).replace(/\\/g, '/')}#L${c.line}) | \`${cleanRaw}\` |`);
});
