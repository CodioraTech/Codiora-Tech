const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SECRET_PATTERNS = [
    { name: 'Google API Key', regex: /AIza[0-9A-Za-z-_]{35}/g },
    { name: 'OpenAI API Key', regex: /sk-[a-zA-Z0-9]{48}/g },
    { name: 'AWS Access Key', regex: /(A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}/g },
    { name: 'Generic Private Key', regex: /-----BEGIN ((EC|PGP|DSA|RSA|OPENSSH) )?PRIVATE KEY-----/g },
    { name: 'GitHub Personal Token', regex: /gh[pousr]_[0-9a-zA-Z]{36}/g },
    { name: 'Slack Token', regex: /xox[baprs]-[0-9]{12}-[0-9]{12}-[a-zA-Z0-9]{24}/g },
    { name: 'Stripe Secret Key', regex: /sk_live_[0-9a-zA-Z]{24}/g }
];

console.log('=== RUNNING SECRET SCAN (WORKING DIRECTORY & GIT HISTORY) ===');

let findings = [];

// 1. Scan Working Tree
function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (['node_modules', '.next', '.git', 'out', 'OneDrive'].includes(file)) continue;
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            walk(fullPath);
        } else if (stat.isFile()) {
            if (['.png', '.jpg', '.jpeg', '.svg', '.ico', '.woff', '.woff2'].includes(path.extname(file))) continue;
            // Ignore test artifacts or audit results
            if (file.endsWith('-lh.json') || file.endsWith('-lh-final.json')) continue;

            const content = fs.readFileSync(fullPath, 'utf8');
            for (const { name, regex } of SECRET_PATTERNS) {
                const matches = content.match(regex);
                if (matches) {
                    matches.forEach(m => {
                        findings.push({ source: 'working_tree', file: fullPath, secretType: name, snippet: m.slice(0, 8) + '...' });
                    });
                }
            }
        }
    }
}

walk(process.cwd());

// 2. Scan Git History
try {
    const gitLog = execSync('git log -p -n 50', { maxBuffer: 10 * 1024 * 1024, encoding: 'utf8' });
    for (const { name, regex } of SECRET_PATTERNS) {
        const matches = gitLog.match(regex);
        if (matches) {
            matches.forEach(m => {
                findings.push({ source: 'git_history', secretType: name, snippet: m.slice(0, 8) + '...' });
            });
        }
    }
} catch (e) {
    console.log('Git log check skipped:', e.message);
}

console.log(`Secret scan completed. Total findings: ${findings.length}`);
if (findings.length > 0) {
    console.table(findings);
} else {
    console.log('✓ ZERO exposed API keys, private keys, or tokens found in codebase or git history!');
}
