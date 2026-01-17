const https = require('https');

const icons = [
    { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
    { name: "Tailwind", url: "https://cdn.simpleicons.org/tailwindcss/38B2AC" },
    { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "GraphQL", url: "https://cdn.simpleicons.org/graphql/E10098" },
    { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "JavaScript", url: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "HTML5", url: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", url: "https://cdn.simpleicons.org/css3/1572B6" },
    { name: "AWS", url: "https://cdn.simpleicons.org/amazonaws/FF9900" },
    { name: "Docker", url: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Kubernetes", url: "https://cdn.simpleicons.org/kubernetes/326CE5" },
    { name: "Terraform", url: "https://cdn.simpleicons.org/terraform/7B42BC" },
    { name: "Jenkins", url: "https://cdn.simpleicons.org/jenkins/D24939" },
    { name: "Google Cloud", url: "https://cdn.simpleicons.org/googlecloud/4285F4" },
    { name: "Azure", url: "https://cdn.simpleicons.org/microsoftazure/007FFF" },
    { name: "Python", url: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "Rust", url: "https://cdn.simpleicons.org/rust/ffffff" },
    { name: "Solidity", url: "https://cdn.simpleicons.org/solidity/ffffff" },
    { name: "Golang", url: "https://cdn.simpleicons.org/go/00ADD8" },
    { name: "Swift", url: "https://cdn.simpleicons.org/swift/F05138" },
    { name: "Kotlin", url: "https://cdn.simpleicons.org/kotlin/7F52FF" },
    { name: "Dart", url: "https://cdn.simpleicons.org/dart/0175C2" },
    { name: "React Native", url: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Flutter", url: "https://cdn.simpleicons.org/flutter/02569B" },
    { name: "Android Studio", url: "https://cdn.simpleicons.org/androidstudio/3DDC84" },
    { name: "Xcode", url: "https://cdn.simpleicons.org/xcode/147EFB" },
    { name: "Firebase", url: "https://cdn.simpleicons.org/firebase/FFCA28" },
    { name: "Figma", url: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Adobe XD", url: "https://cdn.simpleicons.org/adobexd/FF61F6" },
    { name: "Sketch", url: "https://cdn.simpleicons.org/sketch/F7B500" },
    { name: "Framer", url: "https://cdn.simpleicons.org/framer/0055FF" },
    { name: "Blender", url: "https://cdn.simpleicons.org/blender/E87D0D" },
    { name: "Three.js", url: "https://cdn.simpleicons.org/threedotjs/ffffff" },
    { name: "TensorFlow", url: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
    { name: "PyTorch", url: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
    { name: "OpenAI API", url: "https://cdn.simpleicons.org/openai/412991" },
    { name: "Pandas", url: "https://cdn.simpleicons.org/pandas/150458" },
    { name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "PostgreSQL", url: "https://cdn.simpleicons.org/postgresql/336791" },
    { name: "Redis", url: "https://cdn.simpleicons.org/redis/DC382D" },
    { name: "MySQL", url: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "Google Analytics", url: "https://cdn.simpleicons.org/googleanalytics/E37400" },
    { name: "SEMrush", url: "https://cdn.simpleicons.org/semrush/EC5E06" },
    { name: "Ahrefs", url: "https://cdn.simpleicons.org/ahrefs/0064FA" },
    { name: "HubSpot", url: "https://cdn.simpleicons.org/hubspot/FF7A59" },
    { name: "Hotjar", url: "https://cdn.simpleicons.org/hotjar/FD3A4A" }
];

async function checkUrl(item) {
    return new Promise((resolve) => {
        const req = https.request(item.url, { method: 'HEAD' }, (res) => {
            if (res.statusCode === 200) {
                console.log(`✅ OK: ${item.name}`);
                resolve(true);
            } else {
                console.error(`❌ FAIL (${res.statusCode}): ${item.name} -> ${item.url}`);
                resolve(false);
            }
        });

        req.on('error', (e) => {
            console.error(`❌ ERROR: ${item.name} -> ${e.message}`);
            resolve(false);
        });

        req.end();
    });
}

async function run() {
    console.log("Checking Icon URLs...");
    for (const item of icons) {
        await checkUrl(item);
    }
}

run();
