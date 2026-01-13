const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'image', 'Codiora Tech logo.png');
const dest = path.join(__dirname, 'public', 'logo.png');

try {
    fs.copyFileSync(src, dest);
    console.log('Logo copied successfully!');
} catch (err) {
    console.error('Error copying logo:', err);
}
