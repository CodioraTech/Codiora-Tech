const fs = require('fs');
const path = require('path');

const targetDirs = ['components', 'pages', 'lib', 'public'];
const fileExtensions = ['.js', '.jsx', '.ts', '.tsx', '.json', '.html'];

const findings = [];

function cleanLine(line) {
    // Remove tailwind opacity modifiers like bg-teal-500/10, border-[#122a46]/20, text-white/80, blur-[120px]
    return line.replace(/[a-zA-Z0-9#_\[\]-]+(?:\/[0-9]+)/g, '');
}

function scanFile(filePath) {
    const ext = path.extname(filePath);
    if (!fileExtensions.includes(ext) && !filePath.endsWith('robots.txt')) return;

    // Skip analyzer output or generated files
    if (filePath.includes('.next') || filePath.includes('claims-inventory') || filePath.includes('scan-claims')) return;

    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');

    lines.forEach((rawLine, idx) => {
        const lineNum = idx + 1;
        const line = rawLine.trim();
        if (!line || line.startsWith('//') || line.startsWith('/*') || line.startsWith('*')) return;
        if (line.startsWith('import ') || line.startsWith('export {') || line.startsWith('require(')) return;
        if (line.includes('d="M') || line.includes('<path') || line.includes('viewBox=')) return;

        const stripped = cleanLine(line);

        // Claim Categories:
        // 1. Numerical claims & percentages (e.g., 98%, 60+, 1000+, 4.9/5, 99.9%, 10x, 2-3 weeks, 24h)
        // 2. Client & Country stats (e.g., "60+ clients", "12 countries", "projects delivered")
        // 3. Client & Partner company names (e.g., NexaCorp, BrightMed, UrbanCart, Finvault, HealthOS, LogiTrack, AeroBase)
        // 4. Testimonials (quotes, feedback, review text)
        // 5. Guarantees, SLAs & turnarounds ("satisfaction guarantee", "first response", "guaranteed")
        // 6. Leadership & founder roles

        const patterns = [
            { type: 'Stat / Metric', regex: /\b(\d+(\.\d+)?%|\d+\/5|\d+\+|[0-9]+k\+?)\b/i },
            { type: 'Client / Country Stat', regex: /\b(clients?|countr(y|ies)|projects?\s+delivered|global\s+reach)\b/i },
            { type: 'Company Name', regex: /\b(NexaCorp|BrightMed|UrbanCart|Finvault|HealthOS|LogiTrack|AeroBase)\b/ },
            { type: 'SLA / Guarantee', regex: /\b(guarantee|guaranteed|satisfaction|first\s+response|turnaround|99\.9%|uptime|nda)\b/i },
            { type: 'Testimonial', regex: /\b(testimonial|review|feedback|trusted\s+by|Rafiq A|Sophia L|Mohammed K|Elena R|David C|Amara O)\b/i },
            { type: 'Leadership Claim', regex: /\b(Asif Mahamud Shaon|Sarah Jenkins|Founder & CEO|Head of Engineering)\b/i }
        ];

        for (const p of patterns) {
            if (p.regex.test(stripped)) {
                // Filter out common JS code false positives
                if (line.match(/^(const|let|var)\s+[a-zA-Z0-9_]+\s*=\s*['"]?[a-zA-Z0-9_-]+['"]?;?$/)) return;
                if (line.includes('width:') || line.includes('height:') || line.includes('gridHelper') || line.includes('fontSize')) return;
                if (line.includes('translate-x') || line.includes('blur-[') || line.includes('rounded-')) {
                    // Check if it really has text
                    if (!line.match(/(>|"|')[^<"']*(60\+|98%|4\.9\/5|1000\+|24h|NexaCorp|BrightMed|UrbanCart|Finvault|HealthOS|LogiTrack|AeroBase|client|satisfaction|guarantee|founder|Asif Mahamud Shaon|Sarah Jenkins)/i)) {
                        return;
                    }
                }

                const relPath = path.relative(path.join(__dirname, '..'), filePath).replace(/\\/g, '/');
                findings.push({
                    category: p.type,
                    file: relPath,
                    line: lineNum,
                    raw: line.length > 140 ? line.slice(0, 137) + '...' : line
                });
                break;
            }
        }
    });
}

function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (entry.name !== 'node_modules' && entry.name !== '.next' && entry.name !== '.git') {
                walkDir(fullPath);
            }
        } else {
            scanFile(fullPath);
        }
    }
}

targetDirs.forEach(d => walkDir(path.join(__dirname, '..', d)));

console.log(`Audited ${findings.length} verified claims across repo.`);
fs.writeFileSync(path.join(__dirname, 'claims-inventory.json'), JSON.stringify(findings, null, 2));
