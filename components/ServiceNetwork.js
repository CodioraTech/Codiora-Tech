import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/Codiora Tech logo.png';

const ServiceNetwork = () => {
    const servicesLeft = [
        { title: "Web Architecture", slug: "web-architecture", color: "#22d3ee" }, // Cyan
        { title: "Mobile Innovation", slug: "mobile-innovation", color: "#a855f7" }, // Purple
        { title: "Immersive UI/UX", slug: "immersive-ui-ux", color: "#f472b6" } // Pink
    ];

    const servicesRight = [
        { title: "DevOps & Cloud", slug: "devops-cloud", color: "#3b82f6" }, // Blue
        { title: "AI & Automation", slug: "ai-automation", color: "#10b981" }, // Emerald
        { title: "Growth Marketing", slug: "growth-marketing", color: "#f59e0b" } // Amber
    ];

    // Hexagon Clip Path style
    const hexagonClip = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

    return (
        <section className="py-24 relative overflow-hidden bg-black flex items-center justify-center min-h-[700px]">

            {/* Mobile View (Stack) */}
            <div className="md:hidden flex flex-col gap-4 w-full px-6 relative z-10">
                {[...servicesLeft, ...servicesRight].map((s, i) => (
                    <Link key={i} href={`/services/${s.slug}`}>
                        <div className="bg-white/5 border-l-4 border-transparent p-4 rounded-r-xl active:border-cyan-500 transition-all">
                            <h3 className="text-white font-bold text-lg">{s.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Desktop View (Smoothed Organic Layout) */}
            <div className="hidden md:flex relative w-full max-w-7xl mx-auto h-[600px] items-center justify-center">

                {/* 1. Canvas Loop */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 600">
                    <defs>
                        {/* Soft Glow Filter for the Lights */}
                        <filter id="soft-glow" x="-100%" y="-100%" width="300%" height="300%">
                            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Left Connections (Smooth Bezier Curves) */}
                    {servicesLeft.map((s, i) => {
                        const y = 100 + i * 200; // 100, 300, 500
                        // Smooth Curve from Left Node to Center Core
                        // Control points create a smooth S-curve ("Bracket" shape)
                        const pathString = `M 280 ${y} C 450 ${y} 450 300 520 300`;

                        return (
                            <g key={`left-${i}`}>
                                {/* Path Line */}
                                <motion.path
                                    d={pathString}
                                    fill="none"
                                    stroke={s.color}
                                    strokeWidth="3"
                                    strokeOpacity="0.2"
                                    strokeLinecap="round"
                                />

                                {/* 1. The Large Soft Colored Glow Orb */}
                                <motion.circle r="8" fill={s.color} filter="url(#soft-glow)" opacity="0.8">
                                    <animateMotion
                                        dur={`${3 + i * 0.4}s`}
                                        repeatCount="indefinite"
                                        path={pathString}
                                        keyPoints="0;1"
                                        keyTimes="0;1"
                                        ease="linear"
                                    />
                                </motion.circle>

                                {/* 2. The Bright White Core (Hot Center) */}
                                <motion.circle r="3" fill="white">
                                    <animateMotion
                                        dur={`${3 + i * 0.4}s`}
                                        repeatCount="indefinite"
                                        path={pathString}
                                        keyPoints="0;1"
                                        keyTimes="0;1"
                                        ease="linear"
                                    />
                                </motion.circle>
                            </g>
                        );
                    })}

                    {/* Right Connections */}
                    {servicesRight.map((s, i) => {
                        const y = 100 + i * 200;
                        const pathString = `M 920 ${y} C 750 ${y} 750 300 680 300`;
                        return (
                            <g key={`right-${i}`}>
                                <motion.path
                                    d={pathString}
                                    fill="none"
                                    stroke={s.color}
                                    strokeWidth="3"
                                    strokeOpacity="0.2"
                                    strokeLinecap="round"
                                />
                                <motion.circle r="8" fill={s.color} filter="url(#soft-glow)" opacity="0.8">
                                    <animateMotion
                                        dur={`${3 + i * 0.4}s`}
                                        repeatCount="indefinite"
                                        path={pathString}
                                        keyPoints="0;1"
                                        keyTimes="0;1"
                                        ease="linear"
                                    />
                                </motion.circle>
                                <motion.circle r="3" fill="white">
                                    <animateMotion
                                        dur={`${3 + i * 0.4}s`}
                                        repeatCount="indefinite"
                                        path={pathString}
                                        keyPoints="0;1"
                                        keyTimes="0;1"
                                        ease="linear"
                                    />
                                </motion.circle>
                            </g>
                        );
                    })}
                </svg>

                {/* 2. Central Core (The CPU) */}
                <div className="absolute z-20 w-48 h-48 bg-black/50 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center group shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                    <div className="absolute inset-0 rounded-full border border-cyan-500/30 border-dashed animate-spin-slow pointer-events-none"></div>
                    <div className="relative w-32 h-32 hover:scale-110 transition-transform duration-500">
                        <Image src={logo} alt="Core" layout="fill" objectFit="contain" className="filter invert drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                    </div>
                </div>

                {/* 3. Left Nodes */}
                <div className="absolute left-10 flex flex-col justify-between h-[500px] w-[300px]">
                    {servicesLeft.map((s, i) => (
                        <Link key={i} href={`/services/${s.slug}`}>
                            <motion.div
                                className="relative flex items-center gap-4 group cursor-pointer"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {/* Hexagon Node */}
                                <div
                                    className="w-16 h-16 bg-[#111] flex items-center justify-center transition-all duration-300 group-hover:bg-[#222]"
                                    style={{ clipPath: hexagonClip, border: `1px solid ${s.color}` }}
                                >
                                    <div className="absolute inset-0.5 bg-black" style={{ clipPath: hexagonClip }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10 z-10" style={{ clipPath: hexagonClip }}></div>
                                    {/* Small Dot */}
                                    <div className="w-2 h-2 rounded-full z-20" style={{ backgroundColor: s.color, boxShadow: `0 0 10px ${s.color}` }}></div>
                                </div>

                                {/* Text */}
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-gray-400 group-hover:text-white transition-colors tracking-tighter" style={{ textShadow: '0 0 20px rgba(0,0,0,1)' }}>
                                        {s.title}
                                    </span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-900 group-hover:text-cyan-400 transition-colors">Explore Module</span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* 4. Right Nodes */}
                <div className="absolute right-10 flex flex-col justify-between h-[500px] w-[300px] items-end text-right">
                    {servicesRight.map((s, i) => (
                        <Link key={i} href={`/services/${s.slug}`}>
                            <motion.div
                                className="relative flex items-center flex-row-reverse gap-4 group cursor-pointer"
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {/* Hexagon Node */}
                                <div
                                    className="w-16 h-16 bg-[#111] flex items-center justify-center transition-all duration-300 group-hover:bg-[#222]"
                                    style={{ clipPath: hexagonClip }}
                                >
                                    <div className="absolute inset-0.5 bg-black" style={{ clipPath: hexagonClip }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-white/10 z-10" style={{ clipPath: hexagonClip }}></div>
                                    <div className="w-2 h-2 rounded-full z-20" style={{ backgroundColor: s.color, boxShadow: `0 0 10px ${s.color}` }}></div>
                                </div>

                                {/* Text */}
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-gray-400 group-hover:text-white transition-colors tracking-tighter">
                                        {s.title}
                                    </span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-900 group-hover:text-cyan-400 transition-colors">Explore Module</span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServiceNetwork;
