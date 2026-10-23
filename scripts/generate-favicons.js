const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateAssets() {
    console.log('Generating favicon set and OG image...');
    const logoPath = path.join(__dirname, '../public/Codiora Tech logo.png');
    
    // 1. Apple Touch Icon (180x180)
    await sharp(logoPath)
        .resize(180, 180, { fit: 'contain', background: { r: 18, g: 42, b: 70, alpha: 1 } })
        .png()
        .toFile(path.join(__dirname, '../public/apple-touch-icon.png'));
    console.log('Created apple-touch-icon.png (180x180)');

    // 2. Standard icon.png (48x48)
    await sharp(logoPath)
        .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toFile(path.join(__dirname, '../public/icon.png'));
    console.log('Created icon.png (48x48)');

    // 3. Favicon (32x32 as .ico / png container)
    await sharp(logoPath)
        .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toFile(path.join(__dirname, '../public/favicon.ico'));
    console.log('Created favicon.ico (32x32)');

    // 4. PWA Icons (192 and 512)
    await sharp(logoPath)
        .resize(192, 192, { fit: 'contain', background: { r: 18, g: 42, b: 70, alpha: 1 } })
        .png()
        .toFile(path.join(__dirname, '../public/icon-192.png'));
    await sharp(logoPath)
        .resize(512, 512, { fit: 'contain', background: { r: 18, g: 42, b: 70, alpha: 1 } })
        .png()
        .toFile(path.join(__dirname, '../public/icon-512.png'));
    console.log('Created PWA icons (192x192 & 512x512)');

    // 5. OpenGraph Image (1200x630)
    // Compose an SVG canvas with the logo and brand typography
    const svgOverlay = Buffer.from(`
        <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#0b1727" />
                    <stop offset="50%" stop-color="#122a46" />
                    <stop offset="100%" stop-color="#0a192f" />
                </linearGradient>
                <linearGradient id="tealGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stop-color="#14b8a6" />
                    <stop offset="100%" stop-color="#06b6d4" />
                </linearGradient>
            </defs>
            <rect width="1200" height="630" fill="url(#bgGrad)" />
            <circle cx="150" cy="150" r="300" fill="#14b8a6" opacity="0.08" />
            <circle cx="1050" cy="480" r="280" fill="#06b6d4" opacity="0.08" />
            <text x="600" y="320" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="64" fill="#ffffff" letter-spacing="4">
                CODIORA <tspan fill="url(#tealGrad)">TECH</tspan>
            </text>
            <text x="600" y="390" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="28" fill="#94a3b8" letter-spacing="1">
                AI Automation &amp; Web Development Agency • Dhaka
            </text>
            <text x="600" y="445" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="400" font-size="20" fill="#14b8a6">
                codioratech.com
            </text>
        </svg>
    `);

    const logoResized = await sharp(logoPath)
        .resize(130, 130, { fit: 'contain' })
        .toBuffer();

    await sharp(svgOverlay)
        .composite([
            {
                input: logoResized,
                top: 100,
                left: 535
            }
        ])
        .png()
        .toFile(path.join(__dirname, '../public/images/og-image.png'));
    console.log('Created public/images/og-image.png (1200x630)');

    // 6. Web Manifest
    const manifest = {
        name: "Codiora Tech",
        short_name: "Codiora",
        description: "AI Automation & Web Development Agency based in Dhaka",
        start_url: "/",
        display: "standalone",
        background_color: "#122a46",
        theme_color: "#122a46",
        icons: [
            {
                src: "/icon.png",
                sizes: "48x48",
                type: "image/png"
            },
            {
                src: "/icon-192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                src: "/icon-512.png",
                sizes: "512x512",
                type: "image/png"
            }
        ]
    };
    fs.writeFileSync(path.join(__dirname, '../public/site.webmanifest'), JSON.stringify(manifest, null, 2));
    console.log('Created site.webmanifest');
}

generateAssets().catch(console.error);
