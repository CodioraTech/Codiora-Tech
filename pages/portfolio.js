import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    { id: 1, title: "NeonMarket", slug: "neonmarket", category: "Solutions", image: "/images/portfolio/neonmarket.png", description: "Next-gen crypto marketplace." },
    { id: 2, title: "MediBot AI", slug: "medibot-ai", category: "AI", image: "/images/portfolio/medibot-ai.png", description: "AI diagnostic assistant." },
    { id: 3, title: "Explorer Nature", slug: "explorer-nature", category: "Solutions", image: "/images/portfolio/explorer-nature.png", description: "Premium tourism platform connecting travelers with nature." },
    { id: 4, title: "Orbital Agency", slug: "orbital-agency", category: "Labs", image: "/images/portfolio/orbital-agency.png", description: "3D immersive portfolio." },
    { id: 5, title: "SmartSync", slug: "smartsync", category: "Labs", image: "/images/portfolio/smartsync.png", description: "IoT home automation core." },
    { id: 6, title: "AutoSupport", slug: "autosupport", category: "AI", image: "/images/portfolio/autosupport.png", description: "Neural network customer service." },
];

export default function Portfolio() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

    return (
        <>
            <Head>
                <title>Codiora Tech | Portfolio</title>
                <meta name="description" content="Check out our latest projects and success stories." />
            </Head>

            <section className="min-h-screen bg-gray-50 dark:bg-[#f8fafc] pt-44 pb-20 relative transition-colors duration-300">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">



                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-6xl font-bold mb-6"
                        >
                            <span className="text-gray-900 dark:text-[#122a46] transition-colors">Selected </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Works</span>
                        </motion.h1>
                        <p className="text-xl text-gray-600 dark:text-slate-500 transition-colors">Digital experiences that set new standards.</p>
                    </div>

                    {/* Filters */}
                    <div className="flex justify-center gap-4 mb-16 flex-wrap">
                        {["All", "Solutions", "AI", "Labs"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-2 rounded-full border transition-all duration-300 ${filter === cat
                                    ? 'bg-accent border-accent text-dark font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)]'
                                    : 'bg-transparent border-gray-300 dark:border-[#122a46]/10 text-gray-600 dark:text-slate-500 hover:border-gray-400 dark:hover:border-[#122a46]/50 hover:text-gray-900 dark:hover:text-[#122a46]'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <Link href={`/portfolio/${project.slug}`} key={project.id}>
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        whileHover={{ y: -10 }}
                                        className="group relative h-80 bg-white dark:bg-gray-900 rounded-2xl border border-black/5 dark:border-[#122a46]/5 overflow-hidden cursor-pointer shadow-lg dark:shadow-none transition-colors"
                                        style={{ perspective: 1000 }}
                                    >
                                        {/* Background Image */}
                                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                            {/* Fallback & Image Container */}
                                            <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-[#f8fafc]">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none'; // Hide if missing
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Noise Texture Overlay */}
                                        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-10 pointer-events-none"></div>

                                        {/* Content Overlay */}
                                        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-colors z-20">
                                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <span className="text-secondary dark:text-accent text-xs font-bold tracking-widest uppercase mb-2 block">{project.category}</span>
                                                <h3 className="text-2xl font-bold text-[#122a46] mb-2">{project.title}</h3>
                                                <p className="text-slate-600 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.description}</p>

                                                <div className="flex items-center text-[#122a46] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                                    View Case Study <span className="ml-2">→</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
