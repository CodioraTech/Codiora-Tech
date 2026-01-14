const fs = require('fs');
const path = require('path');

const targetDir = path.join(process.cwd(), 'public', 'images', 'tech');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// 1. Existing files (from list_dir)
const existingFiles = [
    "aws.png", "azure.png", "docker.jpg", "docker.png", "framermotion.png",
    "gcp.png", "graphql.png", "kubernetes.jpg", "mongodb.png", "nextjs.png",
    "nodejs.png", "postgresql.png", "python.png", "react.png", "rust.png",
    "solidity.png", "tailwind.png", "threejs.png", "typescript.png", "vue.png"
];

// 2. All required technologies (flattened from lib/services.js)
const requiredTechs = [
    // Web Architecture
    "React.js", "Next.js", "Node.js", "MongoDB", "MySQL", "AWS", "PostgreSQL", "Redis", "TypeScript", "Tailwind CSS", "GraphQL", "Docker", "Prisma",

    // SaaS
    "AWS Cognito", "Stripe API", "Kubernetes", "Auth0", "Terraform", "DynamoDB", "Golang", "SendGrid",

    // PWA
    "Service Workers", "Web Manifest", "IndexedDB", "React", "Workbox", "Lighthouse", "Push API", "Cache API", "Webpack",

    // API
    "GraphQL", "REST", "Node.js", "Python", "Swagger/OpenAPI", "Apollo Server", "Postman", "JWT", "OAuth2", "gRPC",

    // iOS
    "Swift", "SwiftUI", "React Native", "Xcode", "CocoaPods", "TestFlight", "CoreData", "ARKit", "Combine",

    // Android
    "Kotlin", "Jetpack Compose", "React Native", "Android Studio", "Gradle", "Firebase", "Room DB", "Coroutines", "Retrofit",

    // Cross-Platform
    "React Native", "Flutter", "Dart", "JavaScript", "Expo", "Redux", "MobX", "NativeBase",

    // Research
    "Hotjar", "Google Analytics", "UserTesting.com", "Miro", "Typeform", "Dscout", "Lookback",

    // Wireframing
    "Figma", "Adobe XD", "Sketch", "InVision", "Axure", "Marvel", "Principle", "Framer",

    // Cloud Migration
    "AWS", "Azure", "Google Cloud", "Database Migration Service", "VMware", "CloudEndure", "Snowball",

    // CI/CD
    "Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "Travis CI", "ArgoCD", "Spinnaker", "Bitbucket Pipelines",

    // AI
    "Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Jupyter", "Pandas", "NumPy", "Hugging Face",
    "OpenAI API", "LangChain", "Dialogflow", "Pinecone", "Rasa", "Microsoft Bot Framework", "Wit.ai",

    // SEO
    "Google Search Console", "Ahrefs", "SEMrush", "Schema.org", "Screaming Frog", "Moz", "Yoast", "PageSpeed Insights",
    "Google Optimize", "Hotjar", "Crazy Egg", "VWO", "Unbounce", "Optimizely", "Mixpanel"
];

// Helper to sanitize name
function getFilename(name) {
    return name.toLowerCase().replace(/\s+/g, '').replace(/\./g, '').replace(/\//g, '');
}

// Helper to generate SVG
function generateSvg(name) {
    // Generate a pleasant random deep color for the background or border?
    // User requested "professional". Let's stick to a clean dark style or just the text.
    // The card container already has a background.
    // So the "Icon" should be... just the text?
    // Or a colored circle with the first letter?
    // Let's do a stylish colored text icon.

    // Random hue
    const hue = Math.floor(Math.random() * 360);
    const color = `hsl(${hue}, 70%, 60%)`;

    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.5" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="none"/>
  
  <!-- Text based logo -->
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-weight="bold" font-size="40" fill="url(#grad)" text-anchor="middle" dominant-baseline="middle">
    ${name}
  </text>
</svg>`;
}

// Processing
const uniqueTechs = [...new Set(requiredTechs)];

uniqueTechs.forEach(tech => {
    // Determine expected filename base
    // Note: My TechMarquee logic uses: nameStr.toLowerCase().replace(/\s+/g, '') without stripping dots entirely, but let's check.
    // Logic: `logo: /images/tech/${nameStr.toLowerCase().replace(/\s+/g, '')}.png`
    // "React.js" -> "react.js.png" ? No.
    // Let's match the logic exactly:
    const safeName = tech.toLowerCase().replace(/\s+/g, '');

    // Check if a file matches this base
    // Matches if `safeName.png`, `safeName.jpg`, etc exists
    const hasPng = existingFiles.some(f => f.startsWith(safeName + '.'));

    if (!hasPng) {
        // Create SVG
        const fileName = `${safeName}.svg`;
        const filePath = path.join(targetDir, fileName);

        // Only write if doesn't exist (or overwrite to ensure consistency?)
        // Overwrite to fix valid 404s
        fs.writeFileSync(filePath, generateSvg(tech));
        console.log(`Generated: ${fileName}`);
    } else {
        console.log(`Exists: ${tech} (${safeName})`);
    }
});
