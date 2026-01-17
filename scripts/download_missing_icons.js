const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '../public/images/tech');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

console.log("Downloading supplemental icons...");

const iconMap = [
    { name: "azure", slug: "azure", color: "007FFF" },
    { name: "googlecloud", slug: "googlecloud", color: "4285F4" },
    { name: "javascript", slug: "javascript", color: "F7DF1E" },
    { name: "database", slug: "postgresql", color: "336791" }, // Generic DB
    { name: "databasemigrationservice", slug: "amazonaws", color: "FF9900" }, // AWS DMS proxy
    { name: "visualstudiocode", slug: "visualstudiocode", color: "007ACC" }
];

const download = async (item) => {
    return new Promise((resolve) => {
        const url = `https://cdn.simpleicons.org/${item.slug}/${item.color}`;
        const filePath = path.join(targetDir, `${item.name}.svg`);
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
                console.log(`❌ Failed ${item.name}`);
                file.close();
                resolve();
            }
        }).on('error', (err) => {
            file.close();
            resolve();
        });
    });
};

const run = async () => {
    for (const item of iconMap) {
        await download(item);
    }
    console.log("Supplemental icons downloaded.");
};

run();
