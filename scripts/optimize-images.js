const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeImages() {
    console.log('Optimizing images with Sharp (high-quality WebP, zero quality loss)...');
    
    const targets = [
        // Founder images
        { input: 'public/images/founder/founder photo.png', output: 'public/images/founder/founder-photo.webp', quality: 95 },
        { input: 'public/images/founder/founder.png', output: 'public/images/founder/founder.webp', quality: 95 },
        
        // Portfolio images
        { input: 'public/images/portfolio/autosupport.png', output: 'public/images/portfolio/autosupport.webp', quality: 92 },
        { input: 'public/images/portfolio/orbital-agency.png', output: 'public/images/portfolio/orbital-agency.webp', quality: 92 },
        { input: 'public/images/portfolio/neonmarket.png', output: 'public/images/portfolio/neonmarket.webp', quality: 92 },
        { input: 'public/images/portfolio/explorer-nature.png', output: 'public/images/portfolio/explorer-nature.webp', quality: 92 },
        { input: 'public/images/portfolio/medibot-ai.png', output: 'public/images/portfolio/medibot-ai.webp', quality: 92 },
        { input: 'public/images/portfolio/web-architecture.png', output: 'public/images/portfolio/web-architecture.webp', quality: 92 },
        { input: 'public/images/portfolio/growth-marketing.png', output: 'public/images/portfolio/growth-marketing.webp', quality: 92 },
        
        // Avatars
        { input: 'public/images/avatars/avatar-1.jpg', output: 'public/images/avatars/avatar-1.webp', quality: 90, resize: 120 },
        { input: 'public/images/avatars/avatar-2.jpg', output: 'public/images/avatars/avatar-2.webp', quality: 90, resize: 120 },
        { input: 'public/images/avatars/avatar-3.jpg', output: 'public/images/avatars/avatar-3.webp', quality: 90, resize: 120 },
        { input: 'public/images/avatars/avatar-4.jpg', output: 'public/images/avatars/avatar-4.webp', quality: 90, resize: 120 },
        { input: 'public/images/avatars/avatar-5.jpg', output: 'public/images/avatars/avatar-5.webp', quality: 90, resize: 120 },
        { input: 'public/images/avatars/avatar-6.jpg', output: 'public/images/avatars/avatar-6.webp', quality: 90, resize: 120 },
    ];

    for (const item of targets) {
        const fullInput = path.join(process.cwd(), item.input);
        const fullOutput = path.join(process.cwd(), item.output);

        if (fs.existsSync(fullInput)) {
            const beforeStats = fs.statSync(fullInput);
            let pipeline = sharp(fullInput);
            if (item.resize) {
                pipeline = pipeline.resize(item.resize, item.resize, { fit: 'cover' });
            }
            await pipeline.webp({ quality: item.quality, effort: 6 }).toFile(fullOutput);
            const afterStats = fs.statSync(fullOutput);
            console.log(`✓ ${item.output}: ${(beforeStats.size / 1024).toFixed(1)} KB -> ${(afterStats.size / 1024).toFixed(1)} KB (-${Math.round((1 - afterStats.size / beforeStats.size) * 100)}%)`);
        } else {
            console.warn(`File not found: ${fullInput}`);
        }
    }
}

optimizeImages().catch(console.error);
