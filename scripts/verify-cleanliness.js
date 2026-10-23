const fs = require('fs');
const path = require('path');

const DIRS_TO_CHECK = ['pages', 'components', 'lib'];
let totalFilesChecked = 0;
const issues = [];

function checkFile(filePath) {
    totalFilesChecked++;
    const content = fs.readFileSync(filePath, 'utf8');

    if (content.toLowerCase().includes('lorem ipsum')) {
        issues.push({ file: filePath, issue: 'Contains lorem ipsum' });
    }
    if (content.includes('—')) {
        issues.push({ file: filePath, issue: 'Contains em dash (—)' });
    }
    if (content.includes('randomuser.me')) {
        issues.push({ file: filePath, issue: 'Contains randomuser.me' });
    }
    const purpleRegex = /(bg|text|border|from|to|via)-purple-[0-9]+/i;
    if (purpleRegex.test(content)) {
        issues.push({ file: filePath, issue: `Contains purple class match: ${content.match(purpleRegex)[0]}` });
    }
}

function traverse(dir) {
    if (!fs.existsSync(dir)) return;
    for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, f.name);
        if (f.isDirectory()) {
            traverse(full);
        } else if (/\.(js|jsx|ts|tsx|json)$/.test(f.name)) {
            checkFile(full);
        }
    }
}

DIRS_TO_CHECK.forEach(traverse);

// Also check for .map files in .next/static
function findMaps(dir) {
    let maps = [];
    if (!fs.existsSync(dir)) return maps;
    for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, f.name);
        if (f.isDirectory()) maps = maps.concat(findMaps(full));
        else if (f.name.endsWith('.map')) maps.push(full);
    }
    return maps;
}

const mapFiles = findMaps('.next/static');

console.log('=== CLEANLINESS AUDIT REPORT ===');
console.log(`Files checked: ${totalFilesChecked}`);
console.log(`Code issues found: ${issues.length}`);
if (issues.length > 0) {
    console.table(issues);
} else {
    console.log('✓ ZERO hits for lorem, em dash, randomuser, or purple classes in pages, components, and lib!');
}
console.log(`Map files found in .next/static: ${mapFiles.length}`);
if (mapFiles.length === 0) {
    console.log('✓ ZERO .map files served in production static output!');
}
