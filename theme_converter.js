const fs = require('fs');
const path = require('path');

const directories = ['pages', 'components'];

const replacements = [
    // Backgrounds
    { regex: /bg-\[#020202\]/g, replacement: 'bg-[#f8fafc]' },
    { regex: /bg-\[#080808\]/g, replacement: 'bg-white' },
    { regex: /bg-\[#0a0a0a\]/g, replacement: 'bg-white' },
    { regex: /bg-\[#111111\]/g, replacement: 'bg-[#f1f5f9]' },
    { regex: /bg-black/g, replacement: 'bg-[#f8fafc]' },
    { regex: /bg-dark/g, replacement: 'bg-[#f8fafc]' },
    
    // Gradients
    { regex: /from-black/g, replacement: 'from-[#f8fafc]' },
    { regex: /to-black/g, replacement: 'to-[#f8fafc]' },
    { regex: /from-white/g, replacement: 'from-[#122a46]' },
    { regex: /via-gray-200/g, replacement: 'via-slate-500' },
    { regex: /to-gray-600/g, replacement: 'to-teal-500' },
    
    // Borders
    { regex: /border-white\/10/g, replacement: 'border-[#122a46]/10' },
    { regex: /border-white\/20/g, replacement: 'border-[#122a46]/20' },
    { regex: /border-white\/5/g, replacement: 'border-[#122a46]/5' },
    
    // Transparent Backgrounds
    { regex: /bg-white\/5(?!0)/g, replacement: 'bg-[#122a46]/5' },
    { regex: /bg-white\/10/g, replacement: 'bg-[#122a46]/10' },
    { regex: /bg-white\/20/g, replacement: 'bg-[#122a46]/20' },
    
    // Text Colors
    { regex: /text-gray-400/g, replacement: 'text-slate-500' },
    { regex: /text-gray-500/g, replacement: 'text-slate-500' },
    { regex: /text-gray-300/g, replacement: 'text-slate-600' },
    
    // Accent Colors
    { regex: /text-cyan-400/g, replacement: 'text-teal-600' },
    { regex: /text-cyan-500/g, replacement: 'text-teal-600' },
    { regex: /bg-cyan-500/g, replacement: 'bg-teal-500' },
    { regex: /bg-cyan-400/g, replacement: 'bg-teal-500' },
    { regex: /border-cyan-500/g, replacement: 'border-teal-500' },
    
    // Nebulas & Glows
    { regex: /bg-purple-[0-9]{3}\/[0-9]{2}/g, replacement: 'bg-teal-500/10' },
    { regex: /bg-cyan-[0-9]{3}\/[0-9]{2}/g, replacement: 'bg-[#122a46]/5' },
];

function processFile(filePath) {
    if (filePath.includes('index.js') && filePath.includes('pages\\index.js')) return; // handled via css mainly
    if (filePath.includes('Navbar.js')) return; // already done
    if (filePath.includes('Footer.js')) return; // already done

    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Apply basic replacements
    for (const rule of replacements) {
        content = content.replace(rule.regex, rule.replacement);
    }

    // Special logic for text-white
    // Replace text-white with text-[#122a46] ONLY if it's not inside a solid background like bg-teal-500
    // Actually, simple regex: look for text-white. If it's a file that was dark mode, most text-white means main text.
    // Let's just do a naive replace, if some buttons get dark text, they will still be readable.
    content = content.replace(/text-white/g, 'text-[#122a46]');
    
    // Wait, let's fix the text-white inside teal-500 manually if possible.
    // Or just restore text-white for primary buttons.
    content = content.replace(/bg-teal-500 text-\[#122a46\]/g, 'bg-teal-500 text-white');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
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
console.log('Done!');
