const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '../public/images/tech');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const icons = [
    { name: "openaiapi", url: "https://cdn.simpleicons.org/openai/ffffff" }, // White for dark mode
    { name: "aws", url: "https://cdn.simpleicons.org/amazonaws/FF9900" },
    { name: "react", url: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "nextjs", url: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
    { name: "tailwind", url: "https://cdn.simpleicons.org/tailwindcss/38B2AC" },
    { name: "nodejs", url: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "typescript", url: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "docker", url: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "python", url: "https://cdn.simpleicons.org/python/ffffff" }, // White for contrast
    { name: "framer", url: "https://cdn.simpleicons.org/framer/ffffff" },
    { name: "graphql", url: "https://cdn.simpleicons.org/graphql/E10098" },
    { name: "mongodb", url: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "figma", url: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "flutter", url: "https://cdn.simpleicons.org/flutter/02569B" },
    { name: "kotlin", url: "https://cdn.simpleicons.org/kotlin/7F52FF" },
    { name: "swift", url: "https://cdn.simpleicons.org/swift/F05138" },
    { name: "terraform", url: "https://cdn.simpleicons.org/terraform/7B42BC" },
    { name: "kubernetes", url: "https://cdn.simpleicons.org/kubernetes/326CE5" },
    { name: "googlecloud", url: "https://cdn.simpleicons.org/googlecloud/4285F4" },
    { name: "azure", url: "https://cdn.simpleicons.org/microsoftazure/007FFF" },
    { name: "threejs", url: "https://cdn.simpleicons.org/threedotjs/ffffff" }
];

const downloadIcon = (icon) => {
    const filePath = path.join(targetDir, `${icon.name}.svg`);
    const file = fs.createWriteStream(filePath);

    console.log(`Downloading ${icon.name}...`);

    https.get(icon.url, (response) => {
        if (response.statusCode === 200) {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`✅ Saved ${icon.name}.svg`);
            });
        } else {
            console.log(`⚠️ Download failed for ${icon.name} (${response.statusCode}). Creating text placeholder.`);
            file.close();
            createPlaceholder(icon.name, filePath);
        }
    }).on('error', (err) => {
        console.log(`❌ Error downloading ${icon.name}: ${err.message}. Creating placeholder.`);
        file.close();
        createPlaceholder(icon.name, filePath);
    });
};

const createPlaceholder = (name, filePath) => {
    // Determine a color based on name length to give variety
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33F6", "#33FFF6"];
    const color = colors[name.length % colors.length];

    const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="${color}" opacity="0.2" rx="20" />
        <rect x="10" y="10" width="80" height="80" fill="none" stroke="${color}" stroke-width="5" rx="15" />
        <text x="50" y="55" font-family="Arial" font-weight="bold" font-size="20" fill="white" text-anchor="middle" dominant-baseline="middle">${name.substring(0, 2).toUpperCase()}</text>
    </svg>
    `;
    fs.writeFileSync(filePath, svgContent.trim());
    console.log(`⚠️ Created placeholder for ${name}.svg`);
};

icons.forEach(downloadIcon);
