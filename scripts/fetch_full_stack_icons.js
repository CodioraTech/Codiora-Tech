const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '../public/images/tech');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

console.log(`Target Directory: ${targetDir}`);

const iconMap = [
    // Web & Core
    { name: "react", slug: "react", color: "61DAFB" },
    { name: "reactjs", slug: "react", color: "61DAFB" },
    { name: "nextjs", slug: "nextdotjs", color: "ffffff" },
    { name: "nodejs", slug: "nodedotjs", color: "339933" },
    { name: "mongodb", slug: "mongodb", color: "47A248" },
    { name: "mysql", slug: "mysql", color: "4479A1" },
    { name: "aws", slug: "amazonaws", color: "FF9900" },
    { name: "postgresql", slug: "postgresql", color: "336791" },
    { name: "redis", slug: "redis", color: "DC382D" },
    { name: "typescript", slug: "typescript", color: "3178C6" },
    { name: "tailwindcss", slug: "tailwindcss", color: "38B2AC" },
    { name: "graphql", slug: "graphql", color: "E10098" },
    { name: "docker", slug: "docker", color: "2496ED" },
    { name: "prisma", slug: "prisma", color: "ffffff" },

    // SaaS
    { name: "awscognito", slug: "amazonaws", color: "FF9900" },
    { name: "stripeapi", slug: "stripe", color: "635BFF" },
    { name: "kubernetes", slug: "kubernetes", color: "326CE5" },
    { name: "auth0", slug: "auth0", color: "EB5424" },
    { name: "terraform", slug: "terraform", color: "7B42BC" },
    { name: "dynamodb", slug: "amazondynamodb", color: "4053D6" },
    { name: "golang", slug: "go", color: "00ADD8" },
    { name: "sendgrid", slug: "twilio", color: "F22F46" },
    { name: "vmware", slug: "vmware", color: "607078" },
    { name: "cloudendure", slug: "amazonaws", color: "FF9900" },
    { name: "snowball", slug: "amazonaws", color: "FF9900" },

    // PWA
    { name: "serviceworkers", slug: "pwa", color: "5A0FC8" },
    { name: "webmanifest", slug: "w3c", color: "E44D26" },
    { name: "indexeddb", slug: "javascript", color: "F7DF1E" },
    { name: "workbox", slug: "googlechrome", color: "4285F4" },
    { name: "lighthouse", slug: "lighthouse", color: "F44B21" },
    { name: "pushapi", slug: "javascript", color: "F7DF1E" },
    { name: "cacheapi", slug: "javascript", color: "F7DF1E" },
    { name: "webpack", slug: "webpack", color: "8DD6F9" },

    // API
    { name: "rest", slug: "fastapi", color: "009688" },
    { name: "python", slug: "python", color: "ffffff" },
    { name: "swaggeropenapi", slug: "swagger", color: "85EA2D" },
    { name: "apolloserver", slug: "apollographql", color: "311C87" },
    { name: "postman", slug: "postman", color: "FF6C37" },
    { name: "jwt", slug: "jsonwebtokens", color: "ffffff" },
    { name: "oauth2", slug: "auth0", color: "EB5424" },
    { name: "grpc", slug: "grpc", color: "ffffff" },

    // Mobile
    { name: "swift", slug: "swift", color: "F05138" },
    { name: "swiftui", slug: "swift", color: "F05138" },
    { name: "reactnative", slug: "react", color: "61DAFB" },
    { name: "xcode", slug: "xcode", color: "147EFB" },
    { name: "cocoapods", slug: "cocoapods", color: "EE3322" },
    { name: "testflight", slug: "testflight", color: "0067FF" },
    { name: "coredata", slug: "swift", color: "F05138" },
    { name: "arkit", slug: "apple", color: "ffffff" },
    { name: "combine", slug: "apple", color: "ffffff" },
    { name: "kotlin", slug: "kotlin", color: "7F52FF" },
    { name: "jetpackcompose", slug: "jetpackcompose", color: "4285F4" },
    { name: "androidstudio", slug: "androidstudio", color: "3DDC84" },
    { name: "gradle", slug: "gradle", color: "ffffff" },
    { name: "firebase", slug: "firebase", color: "FFCA28" },
    { name: "roomdb", slug: "sqlite", color: "003B57" },
    { name: "coroutines", slug: "kotlin", color: "7F52FF" },
    { name: "retrofit", slug: "square", color: "ffffff" },
    { name: "flutter", slug: "flutter", color: "02569B" },
    { name: "dart", slug: "dart", color: "0175C2" },
    { name: "expo", slug: "expo", color: "ffffff" },
    { name: "redux", slug: "redux", color: "764ABC" },
    { name: "mobx", slug: "mobx", color: "FF9955" },
    { name: "nativebase", slug: "react", color: "61DAFB" },

    // UI/UX
    { name: "hotjar", slug: "hotjar", color: "FD3A4A" },
    { name: "googleanalytics", slug: "googleanalytics", color: "E37400" },
    { name: "usertestingcom", slug: "usertesting", color: "ffffff" },
    { name: "miro", slug: "miro", color: "050038" },
    { name: "typeform", slug: "typeform", color: "262627" },
    { name: "dscout", slug: "android", color: "3DDC84" },
    { name: "lookback", slug: "android", color: "3DDC84" },
    { name: "figma", slug: "figma", color: "F24E1E" },
    { name: "adobexd", slug: "adobexd", color: "FF61F6" },
    { name: "sketch", slug: "sketch", color: "F7B500" },
    { name: "invision", slug: "invision", color: "FF3366" },
    { name: "axure", slug: "axure", color: "ffffff" },
    { name: "marvel", slug: "marvel", color: "EC1D24" },
    { name: "principle", slug: "framer", color: "ffffff" },
    { name: "framer", slug: "framer", color: "ffffff" },

    // DevOps
    { name: "jenkins", slug: "jenkins", color: "D24939" },
    { name: "githubactions", slug: "githubactions", color: "2088FF" },
    { name: "gitlabci", slug: "gitlab", color: "FC6D26" },
    { name: "circleci", slug: "circleci", color: "343434" },
    { name: "travisci", slug: "travisci", color: "3EAAAF" },
    { name: "argocd", slug: "argo", color: "EF7B4D" },
    { name: "spinnaker", slug: "spinnaker", color: "139BB4" },
    { name: "bitbucketpipelines", slug: "bitbucket", color: "0052CC" },

    // AI
    { name: "tensorflow", slug: "tensorflow", color: "FF6F00" },
    { name: "pytorch", slug: "pytorch", color: "EE4C2C" },
    { name: "scikitlearn", slug: "scikitlearn", color: "F7931E" },
    { name: "keras", slug: "keras", color: "D00000" },
    { name: "jupyter", slug: "jupyter", color: "F37626" },
    { name: "pandas", slug: "pandas", color: "150458" },
    { name: "numpy", slug: "numpy", color: "013243" },
    { name: "huggingface", slug: "huggingface", color: "FFD21E" },
    { name: "openaiapi", slug: "openai", color: "ffffff" },
    { name: "langchain", slug: "chainlink", color: "375BD2" },
    { name: "dialogflow", slug: "dialogflow", color: "FF9800" },
    { name: "pinecone", slug: "googlecloud", color: "4285F4" },
    { name: "rasa", slug: "rasa", color: "5A17EE" },
    { name: "microsoftbotframework", slug: "microsoft", color: "0078D4" },
    { name: "witai", slug: "facebook", color: "1877F2" },

    // Growth
    { name: "googlesearchconsole", slug: "google", color: "4285F4" },
    { name: "ahrefs", slug: "ahrefs", color: "0064FA" },
    { name: "semrush", slug: "semrush", color: "EC5E06" },
    { name: "schemaorg", slug: "schema-dot-org", color: "800000" },
    { name: "screamingfrog", slug: "google", color: "4285F4" },
    { name: "moz", slug: "moz", color: "8B8F91" },
    { name: "yoast", slug: "wordpress", color: "21759B" },
    { name: "pagespeedinsights", slug: "google", color: "4285F4" },
    { name: "googleoptimize", slug: "google", color: "4285F4" },
    { name: "crazyegg", slug: "hotjar", color: "FD3A4A" },
    { name: "vwo", slug: "visualstudio", color: "5C2D91" },
    { name: "unbounce", slug: "unbounce", color: "0033FF" },
    { name: "optimizely", slug: "optimizely", color: "0033FF" },
    { name: "mixpanel", slug: "mixpanel", color: "7856FF" }
];

const downloadIcon = async (icon) => {
    return new Promise((resolve) => {
        const url = `https://cdn.simpleicons.org/${icon.slug}/${icon.color}`;
        const filePath = path.join(targetDir, `${icon.name}.svg`);
        const file = fs.createWriteStream(filePath);

        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`✅ Saved ${icon.name}.svg`);
                    resolve();
                });
            } else {
                file.close();
                console.log(`⚠️ Failed ${icon.name} (${response.statusCode}). Creating placeholder.`);
                createPlaceholder(icon.name, icon.color, filePath);
                resolve();
            }
        }).on('error', (err) => {
            file.close();
            console.log(`❌ Error ${icon.name}: ${err.message}. Creating placeholder.`);
            createPlaceholder(icon.name, icon.color, filePath);
            resolve();
        });
    });
};

const createPlaceholder = (name, color, filePath) => {
    const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="#${color || '333'}" opacity="0.2" rx="20" />
        <rect x="10" y="10" width="80" height="80" fill="none" stroke="#${color || 'fff'}" stroke-width="5" rx="15" />
        <text x="50" y="55" font-family="Arial" font-weight="bold" font-size="20" fill="#${color || 'fff'}" text-anchor="middle" dominant-baseline="middle">${name.substr(0, 2).toUpperCase()}</text>
    </svg>
    `;
    fs.writeFileSync(filePath, svgContent.trim());
    console.log(`⚠️ Created placeholder for ${name}.svg`);
};

const run = async () => {
    console.log(`Fetching ${iconMap.length} icons...`);
    for (const item of iconMap) {
        await downloadIcon(item);
    }
    console.log("All icons processed.");
};

run();
