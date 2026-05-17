const fs = require('fs');
let content = fs.readFileSync('pages/partner-apply.js', 'utf8');
content = content.replace(/bg-\\[#111\\]/g, 'bg-white shadow-sm');
content = content.replace(/focus:bg-\\[#161616\\]/g, 'focus:bg-[#f8fafc] focus:shadow-md');
fs.writeFileSync('pages/partner-apply.js', content);
console.log('Fixed partner-apply.js');
