const fs = require('fs');
const path = require('path');

const directories = ['pages', 'components'];

const replacements = [
    { regex: /text-gray-100/g, replacement: 'text-slate-700' },
    { regex: /text-gray-200/g, replacement: 'text-slate-600' },
    { regex: /text-gray-300/g, replacement: 'text-slate-500' },
    { regex: /text-slate-100/g, replacement: 'text-slate-700' },
    { regex: /text-slate-200/g, replacement: 'text-slate-600' },
    { regex: /text-slate-300/g, replacement: 'text-slate-500' },
    { regex: /text-white\/80/g, replacement: 'text-[#122a46]/80' },
    { regex: /text-white\/60/g, replacement: 'text-[#122a46]/60' },
    { regex: /text-white\/50/g, replacement: 'text-[#122a46]/50' },
    { regex: /text-white\/40/g, replacement: 'text-[#122a46]/40' },
    { regex: /text-white\/20/g, replacement: 'text-[#122a46]/20' },
    { regex: /text-white\/10/g, replacement: 'text-[#122a46]/10' },
    { regex: /text-\[\#0a0a0a\]/g, replacement: 'text-[#122a46]' },
    { regex: /text-\[\#111111\]/g, replacement: 'text-[#122a46]' }
];

function processFile(filePath) {
    if (filePath.includes('Navbar.js')) return; // handled
    if (filePath.includes('Footer.js')) return; // handled
    if (filePath.includes('LiveChat.js')) return; // handled
    if (filePath.includes('expertise.js')) return; // handled recently, don't want to mess up the CTA text-white

    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    for (const rule of replacements) {
        content = content.replace(rule.regex, rule.replacement);
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed contrast in: ${filePath}`);
    }
}

function processDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.js')) {
            processFile(fullPath);
        }
    }
}

directories.forEach(dir => {
    const dirPath = path.join(__dirname, dir);
    if (fs.existsSync(dirPath)) {
        processDirectory(dirPath);
    }
});
console.log('Contrast check complete!');
