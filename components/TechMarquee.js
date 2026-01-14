import { useRef, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";


// Master list of all possible technologies with their potential logo paths
// Master list of all possible technologies with their potential logo paths
const MASTER_TECH_DATA = [
    // Web & Core
    { name: "React", logo: "/images/tech/react.png" },
    { name: "React.js", logo: "/images/tech/react.png" }, // Alias
    { name: "Next.js", logo: "/images/tech/nextjs.png" },
    { name: "Tailwind", logo: "/images/tech/tailwind.png" },
    { name: "Tailwind CSS", logo: "/images/tech/tailwind.png" }, // Alias
    { name: "Node.js", logo: "/images/tech/nodejs.png" },
    { name: "GraphQL", logo: "/images/tech/graphql.png" },
    { name: "TypeScript", logo: "/images/tech/typescript.png" },
    { name: "JavaScript", logo: "/images/tech/javascript.svg" },
    { name: "HTML5", logo: "/images/tech/html5.svg" },
    { name: "CSS3", logo: "/images/tech/css3.svg" },

    // Cloud & DevOps
    { name: "AWS", logo: "/images/tech/aws.png" },
    { name: "Docker", logo: "/images/tech/docker.png" },
    { name: "Kubernetes", logo: "/images/tech/kubernetes.jpg" },
    { name: "Terraform", logo: "/images/tech/terraform.svg" },
    { name: "Jenkins", logo: "/images/tech/jenkins.svg" },
    { name: "Google Cloud", logo: "/images/tech/gcp.png" },
    { name: "Azure", logo: "/images/tech/azure.png" },

    // Languages
    { name: "Python", logo: "/images/tech/python.png" },
    { name: "Rust", logo: "/images/tech/rust.png" },
    { name: "Solidity", logo: "/images/tech/solidity.png" },
    { name: "Golang", logo: "/images/tech/golang.svg" },
    { name: "Swift", logo: "/images/tech/swift.svg" },
    { name: "Kotlin", logo: "/images/tech/kotlin.svg" },
    { name: "Dart", logo: "/images/tech/dart.svg" },

    // Mobile
    { name: "React Native", logo: "/images/tech/react.png" },
    { name: "Flutter", logo: "/images/tech/flutter.svg" },
    { name: "Android Studio", logo: "/images/tech/androidstudio.svg" },
    { name: "Xcode", logo: "/images/tech/xcode.svg" },
    { name: "Firebase", logo: "/images/tech/firebase.svg" },

    // Design
    { name: "Figma", logo: "/images/tech/figma.svg" },
    { name: "Adobe XD", logo: "/images/tech/adobexd.svg" },
    { name: "Sketch", logo: "/images/tech/sketch.svg" },
    { name: "Framer", logo: "/images/tech/framer.svg" },
    { name: "Blender", logo: "/images/tech/blender.svg" },
    { name: "Three.js", logo: "/images/tech/threejs.png" },

    // AI & Data
    { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/images/tech/pytorch.svg" },
    { name: "OpenAI API", logo: "/images/tech/openaiapi.svg" },
    { name: "Pandas", logo: "/images/tech/pandas.svg" },

    // Databases
    { name: "MongoDB", logo: "/images/tech/mongodb.png" },
    { name: "PostgreSQL", logo: "/images/tech/postgresql.png" },
    { name: "Redis", logo: "/images/tech/redis.svg" },
    { name: "MySQL", logo: "/images/tech/mysql.svg" },

    // Marketing & Tools
    { name: "Google Analytics", logo: "/images/tech/googleanalytics.svg" },
    { name: "SEMrush", logo: "/images/tech/semrush.svg" },
    { name: "Ahrefs", logo: "/images/tech/ahrefs.svg" },
    { name: "HubSpot", logo: "/images/tech/hubspot.svg" },
    { name: "Hotjar", logo: "/images/tech/hotjar.svg" }
];

export default function TechMarquee({ technologies = [] }) {
    // defaults to empty array if undefined

    // If specific technologies are passed, map them to our master data.
    // Otherwise, default to a robust "General" stack for the home page (Core Web + Cloud + Mobile).
    const isDefault = !technologies || technologies.length === 0;

    // Explicit list for Home Page (Hero) if no prop provided
    const targetTechs = isDefault ? [
        "React", "Next.js", "Tailwind", "Node.js", "AWS", "Docker", "TypeScript", "Python", "GraphQL", "Framer"
    ] : technologies;

    const filteredTechs = targetTechs.map(techName => {
        // Safe check if techName is an object (legacy support) or string
        const nameStr = typeof techName === 'string' ? techName : techName.name;
        const found = MASTER_TECH_DATA.find(t => t.name.toLowerCase() === nameStr.toLowerCase());
        // Use SVG as default fallback for auto-generated icons
        return found || { name: nameStr, logo: `/images/tech/${nameStr.toLowerCase().replace(/\s+/g, '')}.svg` };
    });

    // Duplicate the array to ensure seamless looping, ensure at least enough items to scroll
    // Calculate how many times to repeat based on list length to ensure smooth infinite scroll
    const repeatCount = Math.ceil(20 / Math.max(1, filteredTechs.length)) + 2;
    const marqueeItems = Array(repeatCount).fill(filteredTechs).flat();

    // Removed the early return null so specific page behavior handles empty arrays by defaulting above

    return (
        <div className="relative w-full overflow-hidden py-16 bg-[#030303] border-y border-white/5">
            {/* Ambient Background Glows - Refined & Subtler */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[20%] right-[20%] w-[40%] h-[40%] bg-cyan-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
            </div>

            {/* Gradient masks for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] via-[#030303]/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] via-[#030303]/90 to-transparent z-10 pointer-events-none" />

            <div className="flex flex-col gap-12 relative z-20">
                {/* Row 1: Scroll Left */}
                <div className="flex items-center overflow-hidden">
                    <motion.div
                        className="flex gap-8 items-center whitespace-nowrap pl-8 px-8"
                        animate={{ x: [0, "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: Math.max(40, marqueeItems.length * 2),
                        }}
                    >
                        {marqueeItems.map((tech, index) => (
                            <div
                                key={`${tech.name}-r1-${index}`}
                                className="group relative flex flex-col items-center justify-center min-w-[80px] cursor-pointer"
                            >
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white/[0.02] backdrop-blur-sm rounded-2xl flex items-center justify-center p-5 border border-white/5 transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/[0.05] group-hover:border-cyan-500/30 group-hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.3)]">
                                    {/* Inner Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                    <img
                                        src={tech.logo}
                                        alt={tech.name}
                                        className="w-full h-full object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110 relative z-10"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback Text */}
                                    <div className="absolute inset-0 hidden items-center justify-center rounded-2xl text-[10px] sm:text-xs font-bold text-center p-2 text-gray-500 group-hover:text-cyan-400 uppercase tracking-wider bg-black/80 backdrop-blur-xl">
                                        {tech.name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Scroll Right (Reverse) - Only show on Home Page (Default) */}
                {isDefault && (
                    <div className="flex items-center overflow-hidden">
                        <motion.div
                            className="flex gap-8 items-center whitespace-nowrap pl-8 px-8"
                            animate={{ x: ["-50%", 0] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: Math.max(40, marqueeItems.length * 2),
                            }}
                        >
                            {marqueeItems.map((tech, index) => (
                                <div
                                    key={`${tech.name}-r2-${index}`}
                                    className="group relative flex flex-col items-center justify-center min-w-[80px] cursor-pointer"
                                >
                                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white/[0.02] backdrop-blur-sm rounded-2xl flex items-center justify-center p-5 border border-white/5 transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/[0.05] group-hover:border-purple-500/30 group-hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.3)]">
                                        {/* Inner Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                        <img
                                            src={tech.logo}
                                            alt={tech.name}
                                            className="w-full h-full object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110 relative z-10"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        {/* Fallback Text */}
                                        <div className="absolute inset-0 hidden items-center justify-center rounded-2xl text-[10px] sm:text-xs font-bold text-center p-2 text-gray-500 group-hover:text-purple-400 uppercase tracking-wider bg-black/80 backdrop-blur-xl">
                                            {tech.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
}
