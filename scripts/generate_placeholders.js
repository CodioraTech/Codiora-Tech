const fs = require('fs');
const path = require('path');

const targetDir = path.join(process.cwd(), 'public/images/tech');

// Ensure directory exists
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const techList = [
    // Web & Core
    { name: "React", filename: "react.png", color: "#61DAFB" },
    { name: "Next.js", filename: "nextjs.png", color: "#FFFFFF" },
    { name: "Tailwind", filename: "tailwind.png", color: "#38B2AC" },
    { name: "Node.js", filename: "nodejs.png", color: "#339933" },
    { name: "GraphQL", filename: "graphql.png", color: "#E10098" },
    { name: "TypeScript", filename: "typescript.png", color: "#3178C6" },
    { name: "JavaScript", filename: "javascript.svg", color: "#F7DF1E" },
    { name: "HTML5", filename: "html5.svg", color: "#E34F26" },
    { name: "CSS3", filename: "css3.svg", color: "#1572B6" },

    // Cloud & DevOps
    { name: "AWS", filename: "aws.png", color: "#FF9900" },
    { name: "Docker", filename: "docker.png", color: "#2496ED" },
    { name: "Kubernetes", filename: "kubernetes.jpg", color: "#326CE5" },
    { name: "Terraform", filename: "terraform.svg", color: "#7B42BC" },
    { name: "Jenkins", filename: "jenkins.svg", color: "#D24939" },
    { name: "Google Cloud", filename: "gcp.png", color: "#4285F4" },
    { name: "Azure", filename: "azure.png", color: "#007FFF" },

    // Languages
    { name: "Python", filename: "python.png", color: "#3776AB" },
    { name: "Rust", filename: "rust.png", color: "#000000" },
    { name: "Solidity", filename: "solidity.png", color: "#363636" },
    { name: "Golang", filename: "golang.svg", color: "#00ADD8" },
    { name: "Swift", filename: "swift.svg", color: "#F05138" },
    { name: "Kotlin", filename: "kotlin.svg", color: "#7F52FF" },
    { name: "Dart", filename: "dart.svg", color: "#0175C2" },

    // Mobile
    { name: "Flutter", filename: "flutter.svg", color: "#02569B" },
    { name: "Android Studio", filename: "androidstudio.svg", color: "#3DDC84" },
    { name: "Xcode", filename: "xcode.svg", color: "#147EFB" },
    { name: "Firebase", filename: "firebase.svg", color: "#FFCA28" },

    // Design
    { name: "Figma", filename: "figma.svg", color: "#F24E1E" },
    { name: "Adobe XD", filename: "adobexd.svg", color: "#FF61F6" },
    { name: "Sketch", filename: "sketch.svg", color: "#F7B500" },
    { name: "Framer", filename: "framer.svg", color: "#0055FF" },
    { name: "Blender", filename: "blender.svg", color: "#E87D0D" },
    { name: "Three.js", filename: "threejs.png", color: "#000000" },

    // AI & Data
    { name: "TensorFlow", filename: "tensorflow.svg", color: "#FF6F00" },
    { name: "PyTorch", filename: "pytorch.svg", color: "#EE4C2C" },
    { name: "OpenAI", filename: "openaiapi.svg", color: "#412991" },
    { name: "Pandas", filename: "pandas.svg", color: "#150458" },
    { name: "MongoDB", filename: "mongodb.png", color: "#47A248" },
    { name: "PostgreSQL", filename: "postgresql.png", color: "#336791" },
    { name: "Redis", filename: "redis.svg", color: "#DC382D" },
    { name: "MySQL", filename: "mysql.svg", color: "#4479A1" },

    // Marketing
    { name: "GA4", filename: "googleanalytics.svg", color: "#E37400" },
    { name: "SEMrush", filename: "semrush.svg", color: "#EC5E06" },
    { name: "Ahrefs", filename: "ahrefs.svg", color: "#0064FA" },
    { name: "HubSpot", filename: "hubspot.svg", color: "#FF7A59" },
    { name: "Hotjar", filename: "hotjar.svg", color: "#FD3A4A" },
];

const generateSVG = (name, color) => {
    // Generate a nice initial or short name
    const shortName = name.length > 8 ? name.substring(0, 3).toUpperCase() : name;

    return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="grad-${shortName}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.2" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.6" />
    </linearGradient>
    <filter id="glow-${shortName}">
      <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect x="10" y="10" width="180" height="180" rx="40" fill="#111" stroke="${color}" stroke-width="2" />
  
  <!-- Inner Fill -->
  <rect x="20" y="20" width="160" height="160" rx="30" fill="url(#grad-${shortName})" />
  
  <!-- Text -->
  <text x="100" y="115" font-family="Arial, sans-serif" font-weight="bold" font-size="36" fill="#fff" text-anchor="middle" filter="url(#glow-${shortName})">
    ${shortName}
  </text>
</svg>
    `.trim();
};

techList.forEach(tech => {
    // We will generate SVGs for everything, even if the filename ends in .png (we'll save as .png-ish svg or just respect the extension but put svg content? 
    // Browsers often render SVG content even with wrong extension if headers are right, but locally it might be weird.
    // However, for the marquee which uses <img> tags, it relies on file extensions. 
    // We should probably save them ALL as .svg really, but the component expects specific names.
    // BUT! SVG content in a .png file WON'T work in <img src="file.png"> usually.
    // So we must be careful.

    // Changing strategy: modifying the Component to fallback to .svg for everything would be cleaner, 
    // but the user wants "images" to "work". 
    // We will create .svg files for ALL of them, and for those expecting .png, we MIGHT have to change the component 
    // OR we change the filenames in the array above to match what the component expects, BUT if we only generate SVGs, we should probably update the component to look for SVGs if PNGs fail?
    // Actually, let's just create SVGs for the ones we can. 
    // And for the ones expecting .png, we will TRY to make an SVG but name it .svg and update the component?
    // No, the component has hardcoded paths.

    // Better Strategy: Update TechMarquee.js to default to .svg for everything, OR serve these placeholders.
    // Since I can't generate binary PNGs easily without canvas libraries (which might not be installed), 
    // I will generate SVGs for ALL of them, and I will strictly name them as .svg.
    // Then I will run a separate regex replace on TechMarquee.js to update all extensions to .svg.

    // EXCEPT "kubernetes.jpg" -> kubernetes.svg

    const svgContent = generateSVG(tech.name, tech.color);

    // Force .svg extension for the actual file
    const safeFilename = tech.filename.replace(/\.(png|jpg|jpeg)$/, '.svg');
    const filePath = path.join(targetDir, safeFilename);

    fs.writeFileSync(filePath, svgContent);
    console.log(`Generated: ${safeFilename}`);
});

console.log('All placeholders generated!');
