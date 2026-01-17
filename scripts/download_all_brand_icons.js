const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '../public/images/tech');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Master mapping of Display Name -> SimpleIcons Slug
// If slug is null, we skip or need manual handling.
const iconMap = [
    // --- WEB & CORE ---
    { name: "React", slug: "react" },
    { name: "React.js", slug: "react" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "Node.js", slug: "nodedotjs" },
    { name: "MongoDB", slug: "mongodb" },
    { name: "MySQL", slug: "mysql" },
    { name: "AWS", slug: "amazonaws" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "Redis", slug: "redis" },
    { name: "TypeScript", slug: "typescript" },
    { name: "Tailwind CSS", slug: "tailwindcss" },
    { name: "GraphQL", slug: "graphql" },
    { name: "Docker", slug: "docker" },
    { name: "Prisma", slug: "prisma" },
    { name: "JavaScript", slug: "javascript" },
    { name: "Azure", slug: "azure" },
    { name: "Google Cloud", slug: "googlecloud" },

    // --- SAAS & CLOUD ---
    { name: "AWS Cognito", slug: "amazonaws" }, // Generic AWS
    { name: "Stripe API", slug: "stripe" },
    { name: "Kubernetes", slug: "kubernetes" },
    { name: "Auth0", slug: "auth0" },
    { name: "Terraform", slug: "terraform" },
    { name: "DynamoDB", slug: "amazonaws" }, // Generic AWS
    { name: "Golang", slug: "go" },
    { name: "SendGrid", slug: "sendgrid" },
    { name: "VMware", slug: "vmware" },
    { name: "CloudEndure", slug: "amazonaws" }, // Acquired by AWS
    { name: "Snowball", slug: "amazonaws" },

    // --- PWA & WEB ---
    { name: "Service Workers", slug: "w3c" }, // Generic
    { name: "Web Manifest", slug: "w3c" },
    { name: "IndexedDB", slug: "w3c" },
    { name: "Workbox", slug: "googlechrome" },
    { name: "Lighthouse", slug: "lighthouse" },
    { name: "Push API", slug: "w3c" },
    { name: "Cache API", slug: "w3c" },
    { name: "Webpack", slug: "webpack" },

    // --- API & BACKEND ---
    { name: "REST", slug: "fastapi" }, // Placeholder / Generic
    { name: "Python", slug: "python" },
    { name: "Swagger/OpenAPI", slug: "swagger" },
    { name: "Apollo Server", slug: "apollographql" },
    { name: "Postman", slug: "postman" },
    { name: "JWT", slug: "jsonwebtokens" },
    { name: "OAuth2", slug: "oauth" },
    { name: "gRPC", slug: "grpc" },

    // --- MOBILE ---
    { name: "Swift", slug: "swift" },
    { name: "SwiftUI", slug: "swift" },
    { name: "React Native", slug: "react" },
    { name: "Xcode", slug: "xcode" },
    { name: "CocoaPods", slug: "cocoapods" },
    { name: "TestFlight", slug: "apple" },
    { name: "CoreData", slug: "apple" },
    { name: "ARKit", slug: "apple" },
    { name: "Combine", slug: "apple" },
    { name: "Kotlin", slug: "kotlin" },
    { name: "Jetpack Compose", slug: "android" },
    { name: "Android Studio", slug: "androidstudio" },
    { name: "Gradle", slug: "gradle" },
    { name: "Firebase", slug: "firebase" },
    { name: "Room DB", slug: "android" },
    { name: "Coroutines", slug: "kotlin" },
    { name: "Retrofit", slug: "square" }, // Square built it
    { name: "Flutter", slug: "flutter" },
    { name: "Dart", slug: "dart" },
    { name: "Expo", slug: "expo" },
    { name: "Redux", slug: "redux" },
    { name: "MobX", slug: "mobx" },
    { name: "NativeBase", slug: "react" }, // Placeholder

    // --- UI/UX ---
    { name: "Hotjar", slug: "hotjar" },
    { name: "Google Analytics", slug: "googleanalytics" },
    { name: "UserTesting.com", slug: "usertesting" },
    { name: "Miro", slug: "miro" },
    { name: "Typeform", slug: "typeform" },
    { name: "Dscout", slug: "dscout" }, // Not on simpleicons? Try generic or skip
    { name: "Lookback", slug: "lookback" }, // Not on simpleicons?
    { name: "Figma", slug: "figma" },
    { name: "Adobe XD", slug: "adobexd" },
    { name: "Sketch", slug: "sketch" },
    { name: "InVision", slug: "invision" },
    { name: "Axure", slug: "axure" }, // Check slug
    { name: "Marvel", slug: "marvelapp" },
    { name: "Principle", slug: "mac" }, // Generic Mac?
    { name: "Framer", slug: "framer" },
    { name: "Three.js", slug: "threedotjs" },

    // --- DEVOPS ---
    { name: "Jenkins", slug: "jenkins" },
    { name: "GitHub Actions", slug: "githubactions" },
    { name: "GitLab CI", slug: "gitlab" },
    { name: "CircleCI", slug: "circleci" },
    { name: "Travis CI", slug: "travisci" },
    { name: "ArgoCD", slug: "argo" },
    { name: "Spinnaker", slug: "spinnaker" },
    { name: "Bitbucket Pipelines", slug: "bitbucket" },

    // --- AI & DATA ---
    { name: "TensorFlow", slug: "tensorflow" },
    { name: "PyTorch", slug: "pytorch" },
    { name: "Scikit-learn", slug: "scikitlearn" },
    { name: "Keras", slug: "keras" },
    { name: "Jupyter", slug: "jupyter" },
    { name: "Pandas", slug: "pandas" },
    { name: "NumPy", slug: "numpy" },
    { name: "Hugging Face", slug: "huggingface" },
    { name: "OpenAI API", slug: "openai" },
    { name: "LangChain", slug: "langchain" },
    { name: "Dialogflow", slug: "dialogflow" },
    { name: "Pinecone", slug: "pinecone" }, // Wait, verify
    { name: "Rasa", slug: "rasa" },
    { name: "Microsoft Bot Framework", slug: "botframework" }, // verify slug
    { name: "Wit.ai", slug: "meta" }, // Owned by Meta

    // --- GROWTH ---
    { name: "Google Search Console", slug: "google" },
    { name: "Ahrefs", slug: "ahrefs" },
    { name: "SEMrush", slug: "semrush" },
    { name: "Schema.org", slug: "schema-dot-org" },
    { name: "Screaming Frog", slug: "screamingfrog" },
    { name: "Moz", slug: "moz" },
    { name: "Yoast", slug: "yoast" },
    { name: "PageSpeed Insights", slug: "google" },
    { name: "Google Optimize", slug: "google" },
    { name: "Crazy Egg", slug: "crazyegg" }, // Check
    { name: "VWO", slug: "vwo" }, // Check
    { name: "Unbounce", slug: "unbounce" },
    { name: "Optimizely", slug: "optimizely" },
    { name: "Mixpanel", slug: "mixpanel" }
];

const download = (item) => {
    return new Promise((resolve) => {
        // Construct URL - NO COLOR hex appended, so it requests original brand color
        const url = `https://cdn.simpleicons.org/${item.slug}`;

        // Sanitize filename
        const filename = item.name.toLowerCase().replace(/[^a-z0-9]/g, '') + '.svg';
        const filePath = path.join(targetDir, filename);

        console.log(`Downloading ${item.name} -> ${url}`);

        const file = fs.createWriteStream(filePath);

        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`✅ Saved ${filename}`);
                    resolve();
                });
            } else {
                console.log(`❌ Failed ${item.name} (Status: ${response.statusCode})`);
                // If it fails, we might want to keep the old one if it exists, or create a text fallback?
                // For now, just close.
                file.close();
                // Optionally delete the empty file
                fs.unlink(filePath, () => { });
                resolve();
            }
        }).on('error', (err) => {
            console.error(`❌ Error downloading ${item.name}: ${err.message}`);
            file.close();
            resolve();
        });
    });
};

const run = async () => {
    console.log("Starting full icon download (Original Colors)...");

    // Process in chunks to avoid rate limiting
    const chunkSize = 5;
    for (let i = 0; i < iconMap.length; i += chunkSize) {
        const chunk = iconMap.slice(i, i + chunkSize);
        await Promise.all(chunk.map(download));
    }

    console.log("All downloads completed.");
};

run();
