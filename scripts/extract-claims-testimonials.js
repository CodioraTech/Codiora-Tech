const fs = require('fs');
const path = require('path');

const claims = [];
const testimonials = [];

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Look for stats patterns like 99.9%, 10x, 50+, $2M+, etc.
  const statRegex = /\b(\d+(?:\.\d+)?(?:%|\+|x|\b\s*ms|\b\s*s|\b\s*hrs|\b\s*days|\b\s*M\b|\b\s*K\b|\b\s*B\b))\b/gi;
  const lines = content.split('\n');

  lines.forEach((line, lineIdx) => {
    // Skip imports, CSS values like 100%, 0%, 50% in gradients, hex colors, and standard widths
    if (line.includes('import ') || line.includes('className=') && line.includes('w-full') && !line.includes('title')) {
      // check if it's UI copy
    }

    // Match numbers in visible text / labels
    const copyMatches = line.match(/(['"`])([^'"`]*\d+[^'"`]*)(['"`])/g);
    if (copyMatches) {
      for (const m of copyMatches) {
        const text = m.slice(1, -1).trim();
        // filter out pure class names, dates, colors, SVG paths, tailwind classes
        if (text.length > 2 && text.length < 80 && !text.startsWith('#') && !text.startsWith('M') && !text.startsWith('http') && !text.includes('px') && !text.includes('rem') && !text.includes('rgb')) {
          if (/\b\d+(?:\.\d+)?(?:\%|\+|x|\b\s*ms|\b\s*s|\b\s*hrs|\b\s*days|\b\s*projects|\b\s*clients|\b\s*uptime|\b\s*rate)\b/i.test(text) || /\b(?:150\+|99\.9%|500\+|10x|40%|98%|24\/7|5\+|10\+|15\+|100%|30\+)\b/.test(text)) {
            claims.push({
              file: path.relative(process.cwd(), filePath),
              line: lineIdx + 1,
              claim: text
            });
          }
        }
      }
    }
  });

  // Specifically check for testimonials structure
  if (filePath.includes('Testimonials') || filePath.includes('testimonials')) {
    const jsonMatch = content.match(/const\s+(?:TESTIMONIALS|testimonials)\s*=\s*(\[[\s\S]*?\]);/);
    if (jsonMatch) {
      try {
        // extract using simple regex or eval
        const raw = jsonMatch[1];
        const entries = raw.match(/\{[\s\S]*?\}/g);
        if (entries) {
          entries.forEach(e => {
            const name = (e.match(/name:\s*['"`]([^'"`]+)['"`]/) || [])[1];
            const role = (e.match(/role:\s*['"`]([^'"`]+)['"`]/) || [])[1];
            const company = (e.match(/company:\s*['"`]([^'"`]+)['"`]/) || [])[1];
            const text = (e.match(/(?:content|quote|text):\s*['"`]([^'"`]+)['"`]/) || [])[1];
            if (name || text) {
              testimonials.push({ file: path.relative(process.cwd(), filePath), name, role, company, quote: text });
            }
          });
        }
      } catch (e) {}
    }
  }
}

function traverse(dir) {
  const list = fs.readdirSync(dir);
  for (const f of list) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.next' && f !== '.git' && f !== 'test-results') {
        traverse(full);
      }
    } else if (f.endsWith('.js') || f.endsWith('.jsx')) {
      scanFile(full);
    }
  }
}

['pages', 'components', 'lib'].forEach(d => {
  if (fs.existsSync(d)) traverse(d);
});

// Deduplicate claims
const uniqueClaims = [];
const seen = new Set();
claims.forEach(c => {
  const key = `${c.claim}|${c.file}`;
  if (!seen.has(key)) {
    seen.add(key);
    uniqueClaims.push(c);
  }
});

console.log('=== NUMERIC CLAIMS & STATS FOUND IN CODEBASE ===');
console.log(`Total unique claims: ${uniqueClaims.length}`);
console.table(uniqueClaims);

console.log('\n=== TESTIMONIALS FOUND IN CODEBASE ===');
console.log(`Total testimonials: ${testimonials.length}`);
console.table(testimonials);
