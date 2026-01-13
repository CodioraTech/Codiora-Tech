import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/Codiora Tech logo.png';

const ServiceNetwork = () => {
    // Exact Y coordinates for the 3 rows
    const yPositions = [100, 300, 500];

    const servicesLeft = [
        { title: "Web Architecture", slug: "web-architecture", y: yPositions[0] },
        { title: "Mobile Innovation", slug: "mobile-innovation", y: yPositions[1] },
        { title: "Immersive UI/UX", slug: "immersive-ui-ux", y: yPositions[2] }
    ];

    const servicesRight = [
        { title: "DevOps & Cloud", slug: "devops-cloud", y: yPositions[0] },
        { title: "AI & Automation", slug: "ai-automation", y: yPositions[1] },
        { title: "Growth Marketing", slug: "growth-marketing", y: yPositions[2] }
    ];

    return (
        <section className="py-20 overflow-hidden">
            {/* Mobile View (Stack) */}
            <div className="md:hidden flex flex-col gap-6 px-4">
                {[...servicesLeft, ...servicesRight].map((s, i) => (
                    <Link key={i} href={`/services/${s.slug}`}>
                        <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-2xl text-center">
                            <h3 className="text-white font-bold text-xl">{s.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Desktop View (Mind Map) */}
            <div className="hidden md:block relative w-full max-w-7xl mx-auto h-[600px]">

                {/* 1. SVG Layer for Lines (Background) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 600">
                    <defs>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="1" />
                        </linearGradient>
                    </defs>

                    {/* Left Connections */}
                    {servicesLeft.map((s, i) => (
                        i !== 1 && (
                            <motion.path
                                key={`left-line-${i}`}
                                d={`M 320 ${s.y} C 420 ${s.y} 420 300 540 300`}
                                stroke="#a855f7" strokeWidth="2" fill="none" filter="url(#glow)"
                                strokeOpacity="0.8"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            />
                        )
                    ))}
                    {/* Explicit Left Middle Line */}
                    <motion.line
                        x1="320" y1="300" x2="540" y2="300"
                        stroke="#a855f7" strokeWidth="2" filter="url(#glow)" strokeOpacity="0.8"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    />

                    {/* Right Connections */}
                    {servicesRight.map((s, i) => (
                        i !== 1 && (
                            <motion.path
                                key={`right-line-${i}`}
                                d={`M 880 ${s.y} C 780 ${s.y} 780 300 660 300`}
                                stroke="#a855f7" strokeWidth="2" fill="none" filter="url(#glow)"
                                strokeOpacity="0.8"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            />
                        )
                    ))}
                    {/* Explicit Right Middle Line */}
                    <motion.line
                        x1="880" y1="300" x2="660" y2="300"
                        stroke="#a855f7" strokeWidth="2" filter="url(#glow)" strokeOpacity="0.8"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    />
                </svg>

                {/* 2. Central Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div
                        initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="w-40 h-40 bg-black border border-purple-500/20 rounded-3xl flex items-center justify-center relative shadow-[0_0_60px_rgba(168,85,247,0.2)]"
                    >
                        {/* Hub Connection Points */}
                        {/* We can visually imply a single connection area or specific points. The paths converge to the center-side. */}
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-16 bg-gradient-to-r from-purple-500 to-transparent opacity-50 blur-sm rounded-full"></div>
                        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-16 bg-gradient-to-l from-purple-500 to-transparent opacity-50 blur-sm rounded-full"></div>

                        {/* Logo */}
                        <div className="relative w-24 h-24 hover:scale-110 transition-transform duration-500">
                            <Image src={logo} alt="Codiora Hub" layout="fill" objectFit="contain" className="filter invert drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                        </div>
                    </motion.div>
                </div>

                {/* 3. Service Nodes */}
                {/* Left Side */}
                {servicesLeft.map((s, i) => (
                    <div key={i} className="absolute left-[50px] w-[270px] z-10 -translate-y-1/2" style={{ top: s.y }}>
                        <Link href={`/services/${s.slug}`}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, borderColor: '#a855f7', boxShadow: '0 0 20px rgba(168,85,247,0.2)' }}
                                className="relative bg-[#050505] border border-white/10 p-6 rounded-2xl cursor-pointer group flex items-center justify-between"
                            >
                                <span className="text-white font-bold group-hover:text-purple-400 transition-colors">{s.title}</span>
                                {/* Connection Dot */}
                                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]"></div>
                            </motion.div>
                        </Link>
                    </div>
                ))}

                {/* Right Side */}
                {servicesRight.map((s, i) => (
                    <div key={i} className="absolute right-[50px] w-[270px] z-10 -translate-y-1/2" style={{ top: s.y }}>
                        <Link href={`/services/${s.slug}`}>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, borderColor: '#a855f7', boxShadow: '0 0 20px rgba(168,85,247,0.2)' }}
                                className="relative bg-[#050505] border border-white/10 p-6 rounded-2xl cursor-pointer group flex items-center justify-center"
                            >
                                {/* Connection Dot */}
                                <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]"></div>
                                <span className="text-white font-bold group-hover:text-purple-400 transition-colors">{s.title}</span>
                            </motion.div>
                        </Link>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default ServiceNetwork;
