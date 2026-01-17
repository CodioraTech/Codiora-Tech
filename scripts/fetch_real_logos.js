const fs = require('fs');
const path = require('path');
const https = require('https');

const targetDir = path.join(process.cwd(), 'public/images/tech');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const techMap = [
    { name: "React", slug: "react", color: "61DAFB", filename: "react.svg" },
    { name: "Next.js", slug: "nextdotjs", color: "white", filename: "nextjs.svg" },
    { name: "Tailwind", slug: "tailwindcss", color: "38B2AC", filename: "tailwind.svg" },
    { name: "Node.js", slug: "nodedotjs", color: "339933", filename: "nodejs.svg" },
    { name: "GraphQL", slug: "graphql", color: "E10098", filename: "graphql.svg" },
    { name: "TypeScript", slug: "typescript", color: "3178C6", filename: "typescript.svg" },
    { name: "JavaScript", slug: "javascript", color: "F7DF1E", filename: "javascript.svg" },
    { name: "HTML5", slug: "html5", color: "E34F26", filename: "html5.svg" },
    { name: "CSS3", slug: "css3", color: "1572B6", filename: "css3.svg" },
    { name: "AWS", slug: "amazonwebservices", color: "FF9900", filename: "aws.svg" },
    { name: "Docker", slug: "docker", color: "2496ED", filename: "docker.svg" },
    { name: "Kubernetes", slug: "kubernetes", color: "326CE5", filename: "kubernetes.svg" },
    { name: "Terraform", slug: "terraform", color: "7B42BC", filename: "terraform.svg" },
    { name: "Jenkins", slug: "jenkins", color: "D24939", filename: "jenkins.svg" },
    { name: "Google Cloud", slug: "googlecloud", color: "4285F4", filename: "gcp.svg" },
    { name: "Azure", slug: "microsoftazure", color: "007FFF", filename: "azure.svg" },
    { name: "Python", slug: "python", color: "3776AB", filename: "python.svg" },
    { name: "Rust", slug: "rust", color: "white", filename: "rust.svg" },
    { name: "Solidity", slug: "solidity", color: "363636", filename: "solidity.svg" },
    { name: "Golang", slug: "go", color: "00ADD8", filename: "golang.svg" },
    { name: "Swift", slug: "swift", color: "F05138", filename: "swift.svg" },
    { name: "Kotlin", slug: "kotlin", color: "7F52FF", filename: "kotlin.svg" },
    { name: "Dart", slug: "dart", color: "0175C2", filename: "dart.svg" },
    { name: "Flutter", slug: "flutter", color: "02569B", filename: "flutter.svg" },
    { name: "Android Studio", slug: "androidstudio", color: "3DDC84", filename: "androidstudio.svg" },
    { name: "Xcode", slug: "xcode", color: "147EFB", filename: "xcode.svg" },
    { name: "Firebase", slug: "firebase", color: "FFCA28", filename: "firebase.svg" },
    { name: "Figma", slug: "figma", color: "F24E1E", filename: "figma.svg" },
    { name: "Adobe XD", slug: "adobexd", color: "FF61F6", filename: "adobexd.svg" },
    { name: "Sketch", slug: "sketch", color: "F7B500", filename: "sketch.svg" },
    { name: "Framer", slug: "framer", color: "0055FF", filename: "framer.svg" },
    { name: "Blender", slug: "blender", color: "E87D0D", filename: "blender.svg" },
    { name: "Three.js", slug: "threedotjs", color: "white", filename: "threejs.svg" },
    { name: "TensorFlow", slug: "tensorflow", color: "FF6F00", filename: "tensorflow.svg" },
    { name: "PyTorch", slug: "pytorch", color: "EE4C2C", filename: "pytorch.svg" },
    { name: "OpenAI", slug: "openai", color: "412991", filename: "openaiapi.svg" },
    { name: "Pandas", slug: "pandas", color: "150458", filename: "pandas.svg" },
    { name: "MongoDB", slug: "mongodb", color: "47A248", filename: "mongodb.svg" },
    { name: "PostgreSQL", slug: "postgresql", color: "336791", filename: "postgresql.svg" },
    { name: "Redis", slug: "redis", color: "DC382D", filename: "redis.svg" },
    { name: "MySQL", slug: "mysql", color: "4479A1", filename: "mysql.svg" },
    { name: "Google Analytics", slug: "googleanalytics", color: "E37400", filename: "googleanalytics.svg" },
    { name: "SEMrush", slug: "semrush", color: "EC5E06", filename: "semrush.svg" },
    { name: "Ahrefs", slug: "ahrefs", color: "0064FA", filename: "ahrefs.svg" },
    { name: "HubSpot", slug: "hubspot", color: "FF7A59", filename: "hubspot.svg" },
    { name: "Hotjar", slug: "hotjar", color: "FD3A4A", filename: "hotjar.svg" }
];

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to GET ${url} (status: ${response.statusCode})`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
};

async function fetchAll() {
    console.log("Starting download of real logos from SimpleIcons...");

    for (const tech of techMap) {
        // Construct URL: cdn.simpleicons.org/SLUG/COLOR
        const url = `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`;
        const dest = path.join(targetDir, tech.filename);

        try {
            await downloadFile(url, dest);
            console.log(`Downloaded: ${tech.name} -> ${tech.filename}`);
        } catch (err) {
            console.error(`Error downloading ${tech.name}: ${err.message}`);
        }
    }
    console.log("Download complete.");
}

fetchAll();
