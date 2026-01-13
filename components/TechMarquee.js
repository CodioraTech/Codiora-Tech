import { useRef, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const techData = [
    { name: "React", logo: "/images/tech/react.png" },
    { name: "Next.js", logo: "/images/tech/nextjs.png" },
    { name: "Tailwind", logo: "/images/tech/tailwind.png" },
    { name: "Three.js", logo: "/images/tech/threejs.png" },
    { name: "Node.js", logo: "/images/tech/nodejs.png" },
    { name: "GraphQL", logo: "/images/tech/graphql.png" },
    { name: "AWS", logo: "/images/tech/aws.png" },
    { name: "Framer Motion", logo: "/images/tech/framermotion.png" },
    { name: "Python", logo: "/images/tech/python.png" },
    { name: "Rust", logo: "/images/tech/rust.png" },
    { name: "Solidity", logo: "/images/tech/solidity.png" },
    { name: "TypeScript", logo: "/images/tech/typescript.png" },
    { name: "Docker", logo: "/images/tech/docker.png" },
];

export default function TechMarquee() {
    // Duplicate the array to ensure seamless looping
    const marqueeItems = [...techData, ...techData, ...techData];

    return (
        <div className="relative w-full overflow-hidden py-10 bg-gray-50 dark:bg-dark transition-colors border-y border-black/5 dark:border-white/5">
            {/* Gradient masks for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-dark to-transparent z-10 pointer-events-none transition-colors" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-dark to-transparent z-10 pointer-events-none transition-colors" />

            <div className="flex flex-col gap-12">
                {/* Row 1: Scroll Left */}
                <div className="flex items-center overflow-hidden">
                    <motion.div
                        className="flex gap-16 items-center whitespace-nowrap pl-16 px-16"
                        animate={{ x: [0, "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 50,
                        }}
                    >
                        {marqueeItems.map((tech, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col items-center justify-center gap-4 min-w-[100px] cursor-pointer"
                            >
                                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                                    <img
                                        src={tech.logo}
                                        alt={tech.name}
                                        className="w-full h-full object-contain drop-shadow-lg"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="absolute inset-0 hidden items-center justify-center bg-gray-200 dark:bg-white/10 rounded-xl text-xs font-bold text-center p-1 text-gray-500">
                                        {tech.name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Scroll Right */}
                <div className="flex items-center overflow-hidden">
                    <motion.div
                        className="flex gap-16 items-center whitespace-nowrap pl-16 px-16"
                        animate={{ x: ["-50%", 0] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 50,
                        }}
                    >
                        {marqueeItems.slice().reverse().map((tech, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col items-center justify-center gap-4 min-w-[100px] cursor-pointer"
                            >
                                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                                    <img
                                        src={tech.logo}
                                        alt={tech.name}
                                        className="w-full h-full object-contain drop-shadow-lg"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="absolute inset-0 hidden items-center justify-center bg-gray-200 dark:bg-white/10 rounded-xl text-xs font-bold text-center p-1 text-gray-500">
                                        {tech.name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
