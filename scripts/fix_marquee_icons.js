const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '../public/images/tech');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const iconsToFix = [
    { name: "flutter", slug: "flutter" },
    { name: "reactnative", slug: "react" }, // Use React logo for React Native
    { name: "swift", slug: "swift" },
    { name: "kotlin", slug: "kotlin" },
    { name: "figma", slug: "figma" },
    { name: "framer", slug: "framer" },
    { name: "threejs", slug: "threedotjs" }
];

const download = (item) => {
    return new Promise((resolve) => {
        const url = `https://cdn.simpleicons.org/${item.slug}`;
        const filePath = path.join(targetDir, `${item.name}.svg`);

        console.log(`Downloading ${item.name} from ${url}...`);

        const file = fs.createWriteStream(filePath);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`✅ Saved ${item.name}.svg`);
                    resolve();
                });
            } else {
                console.log(`❌ Failed to download ${item.name} (Status: ${response.statusCode})`);
                file.close();
                resolve();
            }
        }).on('error', (err) => {
            console.error(`Error: ${err.message}`);
            file.close();
            resolve();
        });
    });
};

const run = async () => {
    for (const item of iconsToFix) {
        await download(item);
    }
    console.log("Marquee icons fixed.");
};

run();
