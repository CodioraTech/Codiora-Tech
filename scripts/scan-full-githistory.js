const { execSync } = require('child_process');

const SECRET_PATTERNS = [
  { name: 'Google API Key', regex: /AIza[0-9A-Za-z\-_]{35}/g },
  { name: 'AWS Access Key ID', regex: /(?:A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}/g },
  { name: 'AWS Secret Key', regex: /aws_secret_access_key\s*=\s*['"]?[A-Za-z0-9\/+=]{40}['"]?/gi },
  { name: 'GitHub Personal Access Token', regex: /gh[pousr]_[A-Za-z0-9_]{36,255}/g },
  { name: 'Stripe Secret Key', regex: /sk_live_[0-9a-zA-Z]{24}/g },
  { name: 'Slack Token', regex: /xox[baprs]-[0-9a-zA-Z]{10,48}/g },
  { name: 'Private Key', regex: /-----BEGIN (?:RSA|EC|DSA|OPENSSH|PRIVATE) KEY-----/g },
  { name: 'Generic Secret Assignment', regex: /(?:api_key|apiKey|secret|privateKey|auth_token)\s*[:=]\s*['"][0-9a-zA-Z\-_\.]{20,}['"]/gi }
];

console.log('=== FULL GIT HISTORY SCAN (ALL COMMITS FROM ROOT) ===');

const totalCommitsCount = parseInt(execSync('git rev-list --count HEAD', { encoding: 'utf8' }).trim(), 10);
console.log(`Total commits in repository history: ${totalCommitsCount}`);

const commitsRaw = execSync('git log --reverse --format="%H|%an|%ad|%s"', { encoding: 'utf8' }).trim().split('\n');

const findings = [];

commitsRaw.forEach((line, idx) => {
  if (!line.trim()) return;
  const [hash, author, date, subject] = line.split('|');
  const patch = execSync(`git show -p ${hash}`, { maxBuffer: 10 * 1024 * 1024, encoding: 'utf8' });

  for (const pat of SECRET_PATTERNS) {
    const matches = patch.match(pat.regex);
    if (matches) {
      for (const match of matches) {
        // Exclude dummy or test strings
        if (match.includes('AIzaSyAW...') || match.includes('example') || match.includes('YOUR_')) continue;
        findings.push({
          commitIndex: `${idx + 1}/${totalCommitsCount}`,
          commitHash: hash.substring(0, 8),
          author,
          date: date.substring(0, 16),
          subject: subject.substring(0, 40),
          secretType: pat.name,
          snippet: match.substring(0, 12) + '...'
        });
      }
    }
  }
});

console.log(`Full history scan completed. Total findings: ${findings.length}`);
console.table(findings);
