const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'public', 'images', 'avatars');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const avatars = [
  { name: 'avatar-1.svg', initials: 'RA', bg1: '#0f172a', bg2: '#0d9488' },
  { name: 'avatar-2.svg', initials: 'SL', bg1: '#134e4a', bg2: '#14b8a6' },
  { name: 'avatar-3.svg', initials: 'MK', bg1: '#1e293b', bg2: '#0284c7' },
  { name: 'avatar-4.svg', initials: 'ER', bg1: '#042f2e', bg2: '#10b981' },
  { name: 'avatar-5.svg', initials: 'DC', bg1: '#111827', bg2: '#38bdf8' },
  { name: 'avatar-6.svg', initials: 'AO', bg1: '#1e1b4b', bg2: '#2dd4bf' },
];

avatars.forEach(a => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="g_${a.initials}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${a.bg1}" />
      <stop offset="100%" stop-color="${a.bg2}" />
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="50" fill="url(#g_${a.initials})" />
  <text x="50" y="59" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="36" font-weight="700" fill="#ffffff" text-anchor="middle">${a.initials}</text>
</svg>`;
  fs.writeFileSync(path.join(dir, a.name), svg.trim());
});

console.log('Successfully generated local avatar SVGs in public/images/avatars/');
