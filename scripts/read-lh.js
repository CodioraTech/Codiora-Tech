const fs = require('fs');
const d = JSON.parse(fs.readFileSync('baseline-lh.json', 'utf8'));
console.log('Categories in report:');
for (const [k, v] of Object.entries(d.categories)) {
  console.log(`${k}: ${v.score !== null ? Math.round(v.score * 100) : 'N/A'}`);
}
