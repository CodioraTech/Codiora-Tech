const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../public/images/tech');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Full list from previous step
const iconMap = [
    // Web & Core
    { name: "react", color: "61DAFB", text: "React" },
    { name: "reactjs", color: "61DAFB", text: "React" },
    { name: "nextjs", color: "000000", text: "Next" }, // Black bg, white text handled
    { name: "nodejs", color: "339933", text: "Node" },
    { name: "mongodb", color: "47A248", text: "Mongo" },
    { name: "mysql", color: "4479A1", text: "MySQL" },
    { name: "aws", color: "FF9900", text: "AWS" },
    { name: "postgresql", color: "336791", text: "PSQL" },
    { name: "redis", color: "DC382D", text: "Redis" },
    { name: "typescript", color: "3178C6", text: "TS" },
    { name: "tailwindcss", color: "38B2AC", text: "Tail" },
    { name: "graphql", color: "E10098", text: "GQL" },
    { name: "docker", color: "2496ED", text: "Dock" },
    { name: "prisma", color: "0C344B", text: "Prisma" },

    // SaaS
    { name: "awscognito", color: "FF9900", text: "Cog" },
    { name: "stripeapi", color: "635BFF", text: "Stripe" },
    { name: "kubernetes", color: "326CE5", text: "K8s" },
    { name: "auth0", color: "EB5424", text: "Auth0" },
    { name: "terraform", color: "7B42BC", text: "Terra" },
    { name: "dynamodb", color: "4053D6", text: "DDB" },
    { name: "golang", color: "00ADD8", text: "Go" },
    { name: "sendgrid", color: "F22F46", text: "Send" },
    { name: "vmware", color: "607078", text: "VMw" },
    { name: "cloudendure", color: "FF9900", text: "Cloud" },
    { name: "snowball", color: "FF9900", text: "Snow" },

    // PWA
    { name: "serviceworkers", color: "5A0FC8", text: "SW" },
    { name: "webmanifest", color: "E44D26", text: "WebM" },
    { name: "indexeddb", color: "F7DF1E", text: "IDB" },
    { name: "workbox", color: "4285F4", text: "Work" },
    { name: "lighthouse", color: "F44B21", text: "LH" },
    { name: "pushapi", color: "F7DF1E", text: "Push" },
    { name: "cacheapi", color: "F7DF1E", text: "Cache" },
    { name: "webpack", color: "8DD6F9", text: "Pack" },

    // API
    { name: "rest", color: "009688", text: "REST" },
    { name: "python", color: "3776AB", text: "Py" },
    { name: "swaggeropenapi", color: "85EA2D", text: "Swag" },
    { name: "apolloserver", color: "311C87", text: "Apollo" },
    { name: "postman", color: "FF6C37", text: "Post" },
    { name: "jwt", color: "000000", text: "JWT" },
    { name: "oauth2", color: "EB5424", text: "OAuth" },
    { name: "grpc", color: "000000", text: "gRPC" },

    // Mobile
    { name: "swift", color: "F05138", text: "Swift" },
    { name: "swiftui", color: "F05138", text: "SwUI" },
    { name: "reactnative", color: "61DAFB", text: "RN" },
    { name: "xcode", color: "147EFB", text: "Xcode" },
    { name: "cocoapods", color: "EE3322", text: "Cocoa" },
    { name: "testflight", color: "0067FF", text: "TF" },
    { name: "coredata", color: "F05138", text: "Data" },
    { name: "arkit", color: "000000", text: "AR" },
    { name: "combine", color: "000000", text: "Comb" },
    { name: "kotlin", color: "7F52FF", text: "Kt" },
    { name: "jetpackcompose", color: "4285F4", text: "Jet" },
    { name: "androidstudio", color: "3DDC84", text: "AS" },
    { name: "gradle", color: "02303A", text: "Gradle" },
    { name: "firebase", color: "FFCA28", text: "Fire" },
    { name: "roomdb", color: "003B57", text: "Room" },
    { name: "coroutines", color: "7F52FF", text: "Co" },
    { name: "retrofit", color: "000000", text: "Retro" },
    { name: "flutter", color: "02569B", text: "Flut" },
    { name: "dart", color: "0175C2", text: "Dart" },
    { name: "expo", color: "000000", text: "Expo" },
    { name: "redux", color: "764ABC", text: "Redux" },
    { name: "mobx", color: "FF9955", text: "MobX" },
    { name: "nativebase", color: "61DAFB", text: "Base" },

    // UI/UX
    { name: "hotjar", color: "FD3A4A", text: "Hot" },
    { name: "googleanalytics", color: "E37400", text: "GA" },
    { name: "usertestingcom", color: "000000", text: "UserT" },
    { name: "miro", color: "050038", text: "Miro" },
    { name: "typeform", color: "262627", text: "Type" },
    { name: "dscout", color: "3DDC84", text: "Dsc" },
    { name: "lookback", color: "3DDC84", text: "Look" },
    { name: "figma", color: "F24E1E", text: "Figma" },
    { name: "adobexd", color: "FF61F6", text: "Xd" },
    { name: "sketch", color: "F7B500", text: "Sketch" },
    { name: "invision", color: "FF3366", text: "InVis" },
    { name: "axure", color: "000000", text: "Axure" },
    { name: "marvel", color: "EC1D24", text: "Mrvl" },
    { name: "principle", color: "000000", text: "Prin" },
    { name: "framer", color: "0055FF", text: "Framer" },

    // DevOps
    { name: "jenkins", color: "D24939", text: "Jenk" },
    { name: "githubactions", color: "2088FF", text: "GHA" },
    { name: "gitlabci", color: "FC6D26", text: "GL" },
    { name: "circleci", color: "343434", text: "Circ" },
    { name: "travisci", color: "3EAAAF", text: "Trav" },
    { name: "argocd", color: "EF7B4D", text: "Argo" },
    { name: "spinnaker", color: "139BB4", text: "Spin" },
    { name: "bitbucketpipelines", color: "0052CC", text: "BitB" },

    // AI
    { name: "tensorflow", color: "FF6F00", text: "TF" },
    { name: "pytorch", color: "EE4C2C", text: "PyT" },
    { name: "scikitlearn", color: "F7931E", text: "Sci" },
    { name: "keras", color: "D00000", text: "Keras" },
    { name: "jupyter", color: "F37626", text: "Jup" },
    { name: "pandas", color: "150458", text: "Pan" },
    { name: "numpy", color: "013243", text: "Num" },
    { name: "huggingface", color: "FFD21E", text: "Hug" },
    { name: "openaiapi", color: "000000", text: "OAI" },
    { name: "langchain", color: "375BD2", text: "Lang" },
    { name: "dialogflow", color: "FF9800", text: "Dia" },
    { name: "pinecone", color: "4285F4", text: "Pine" },
    { name: "rasa", color: "5A17EE", text: "Rasa" },
    { name: "microsoftbotframework", color: "0078D4", text: "Bot" },
    { name: "witai", color: "1877F2", text: "Wit" },

    // Growth
    { name: "googlesearchconsole", color: "4285F4", text: "GSC" },
    { name: "ahrefs", color: "0064FA", text: "Ahref" },
    { name: "semrush", color: "EC5E06", text: "SEM" },
    { name: "schemaorg", color: "800000", text: "Sch" },
    { name: "screamingfrog", color: "4285F4", text: "Frog" },
    { name: "moz", color: "8B8F91", text: "Moz" },
    { name: "yoast", color: "21759B", text: "Yoast" },
    { name: "pagespeedinsights", color: "4285F4", text: "PSI" },
    { name: "googleoptimize", color: "4285F4", text: "Opt" },
    { name: "crazyegg", color: "FD3A4A", text: "Egg" },
    { name: "vwo", color: "5C2D91", text: "VWO" },
    { name: "unbounce", color: "0033FF", text: "Unb" },
    { name: "optimizely", color: "0033FF", text: "Opt" },
    { name: "mixpanel", color: "7856FF", text: "Mix" }
];

const generateAndSave = (item) => {
    const filePath = path.join(targetDir, `${item.name}.svg`);
    // Determine text color (white for most, black for light bg? assume white for now for dark mode consistency)
    const textColor = "#ffffff";
    const bgColor = "#" + item.color;

    const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="16" fill="${bgColor}" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="20" fill="${textColor}">
    ${item.text}
  </text>
</svg>
    `;

    fs.writeFileSync(filePath, svgContent.trim());
    console.log(`Generated ${item.name}.svg`);
};

iconMap.forEach(generateAndSave);
console.log("All icons generated successfully.");
