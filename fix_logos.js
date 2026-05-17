const fs = require('fs');

let content = fs.readFileSync('components/TechMarquee.js', 'utf8');
content = content.replace(/\/white/g, '/0f172a');
content = content.replace(/fill="white"/g, 'fill="#0f172a"');
content = content.replace(/fill='white'/g, "fill='#0f172a'");
fs.writeFileSync('components/TechMarquee.js', content);
console.log('Logos fixed for light theme!');
