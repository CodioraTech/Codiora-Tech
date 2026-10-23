import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const projects = [
    {
        id: 1,
        title: "NeonMarket",
        slug: "neonmarket",
        category: "Solutions",
        image: "/images/portfolio/neonmarket.webp",
        client: "FinTech & Web3",
        description: "Next-generation decentralized marketplace featuring lightning-fast settlement, multi-wallet authentication, and audited liquidity pool integration.",
        tags: ["Next.js 14", "Solidity", "Ethers.js", "TailwindCSS"],
        metrics: [
            { label: "Volume Processed", val: "$4.2M+" },
            { label: "Tx Latency", val: "<120ms" }
        ]
    },
    {
        id: 2,
        title: "MediBot AI",
        slug: "medibot-ai",
        category: "AI",
        image: "/images/portfolio/medibot-ai.webp",
        client: "HealthTech & Telehealth",
        description: "Clinical patient triage and intelligent consultation copilot built on fine-tuned medical LLMs with strict HIPAA-aligned data isolation.",
        tags: ["FastAPI", "Llama 3", "Vector DB", "React"],
        metrics: [
            { label: "Triage Accuracy", val: "99.2%" },
            { label: "Consultations", val: "45K+" }
        ]
    },
    {
        id: 3,
        title: "Explorer Nature",
        slug: "explorer-nature",
        category: "Solutions",
        image: "/images/portfolio/explorer-nature.webp",
        client: "Travel & Hospitality",
        description: "Immersive eco-tourism booking engine connecting travelers with verified wilderness expeditions, featuring interactive Mapbox topography and real-time inventory.",
        tags: ["Next.js", "Stripe", "PostgreSQL", "Mapbox GL"],
        metrics: [
            { label: "Conversion Uplift", val: "+140%" },
            { label: "Uptime SLA", val: "99.9%" }
        ]
    },
    {
        id: 4,
        title: "Orbital Agency",
        slug: "orbital-agency",
        category: "Labs",
        image: "/images/portfolio/orbital-agency.webp",
        client: "Creative Studio",
        description: "Interactive 3D WebGL spatial experience designed for a luxury creative agency, engineered for high frame-rates across mobile and desktop devices.",
        tags: ["Three.js", "WebGL", "GSAP", "React"],
        metrics: [
            { label: "Avg Session", val: "3.8x" },
            { label: "Frame Rate", val: "60 FPS" }
        ]
    },
    {
        id: 5,
        title: "SmartSync",
        slug: "smartsync",
        category: "Labs",
        image: "/images/portfolio/smartsync.webp",
        client: "Industrial IoT",
        description: "Distributed telemetry core processing millions of sensor events per second with live anomaly alerting and low-latency edge synchronizations.",
        tags: ["Node.js", "MQTT", "TimescaleDB", "Tailwind"],
        metrics: [
            { label: "Ingest Rate", val: "1.2M/sec" },
            { label: "Availability", val: "99.99%" }
        ]
    },
    {
        id: 6,
        title: "AutoSupport",
        slug: "autosupport",
        category: "AI",
        image: "/images/portfolio/autosupport.webp",
        client: "Enterprise SaaS",
        description: "Autonomous customer service engine leveraging semantic document retrieval and multi-agent loops to resolve complex support tickets instantly.",
        tags: ["LangChain", "Claude 3.5", "Python", "Redis"],
        metrics: [
            { label: "Auto-Resolution", val: "78%" },
            { label: "Response Time", val: "<15s" }
        ]
    }
];

const guarantees = [
    {
        title: "100% IP & Code Ownership",
        desc: "All source code, Docker configs, and architecture documentation are transferred completely to your GitHub organization on delivery."
    },
    {
        title: "Zero Vendor Lock-In",
        desc: "We build on standard open-source runtimes (Next.js, Python, PostgreSQL) that your in-house engineers can self-host anywhere."
    },
    {
        title: "Automated Test Suites Included",
        desc: "Unit, integration, and end-to-end tests shipped with every repository to ensure reliable future feature additions."
    },
    {
        title: "30-Day Launch Hypercare",
        desc: "Dedicated monitoring and on-call engineering support following production deployment to handle edge cases."
    }
];

export default function Portfolio() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <>
            <SEO
                title="Our Work & Portfolio | Scalable Systems | Codiora Tech"
                description="Explore Codiora Tech's portfolio of custom web platforms, AI assistants, SaaS architectures, and high-throughput data systems."
                canonicalPath="/portfolio"
            />

            <section className="min-h-screen bg-[#f8fafc] pt-36 sm:pt-40 md:pt-44 pb-32 relative text-[#122a46]">
                {/* Background Ambient Glows */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-teal-500/10 rounded-full blur-[140px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-blue-900/10 rounded-full blur-[140px] animate-pulse-slow delay-1000" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-6">
                        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Portfolio', href: '/portfolio' }]} />
                    </div>

                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-widest backdrop-blur-sm"
                        >
                            Production Deliverables
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Works</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            A curated showcase of production applications, AI integrations, and digital platforms engineered for enterprise scale and measurable business impact.
                        </p>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex justify-center gap-3 mb-16 flex-wrap">
                        {["All", "Solutions", "AI", "Labs"].map((cat) => {
                            const count = cat === "All"
                                ? projects.length
                                : projects.filter(p => p.category === cat).length;
                            return (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setFilter(cat)}
                                    className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${filter === cat
                                        ? 'bg-[#122a46] text-white shadow-lg shadow-[#122a46]/20'
                                        : 'bg-white border border-[#122a46]/10 text-slate-600 hover:border-teal-500 hover:text-teal-600'
                                        }`}
                                >
                                    <span>{cat}</span>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${filter === cat ? 'bg-teal-500 text-slate-950 font-black' : 'bg-slate-100 text-slate-500'}`}>
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Project Cards Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <Link href={`/portfolio/${project.slug}`} key={project.id} className="group flex">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="w-full bg-white rounded-3xl border border-[#122a46]/10 overflow-hidden shadow-xl hover:shadow-2xl hover:border-teal-500/40 transition-all duration-500 flex flex-col justify-between"
                                    >
                                        {/* Image Container with high contrast badge */}
                                        <div className="relative h-60 w-full overflow-hidden bg-slate-900 border-b border-[#122a46]/5">
                                            <Image
                                                src={project.image}
                                                alt={`${project.title} - ${project.client}`}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                priority={project.id <= 2}
                                                className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                                            <div className="absolute top-4 left-4 z-10">
                                                <span className="text-[11px] font-bold text-white bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 uppercase tracking-wider">
                                                    {project.category}
                                                </span>
                                            </div>

                                            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                                                <span className="text-xs font-mono text-teal-300 bg-teal-950/80 px-2.5 py-0.5 rounded border border-teal-800">
                                                    {project.client}
                                                </span>
                                                <span className="text-xs font-semibold text-slate-200 group-hover:text-teal-400 flex items-center gap-1 transition-colors">
                                                    Explore Case Study →
                                                </span>
                                            </div>
                                        </div>

                                        {/* Card Body */}
                                        <div className="p-7 flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-2xl font-black text-[#122a46] mb-2 group-hover:text-teal-600 transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                                                    {project.description}
                                                </p>

                                                {/* Tech Tags */}
                                                <div className="flex flex-wrap gap-1.5 mb-6">
                                                    {project.tags.map((tag, tIdx) => (
                                                        <span
                                                            key={tIdx}
                                                            className="text-[11px] font-mono px-2.5 py-1 bg-[#122a46]/5 text-[#122a46] rounded-md border border-[#122a46]/5"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Micro Impact Metrics */}
                                            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#122a46]/5 bg-slate-50 -mx-7 -mb-7 px-7 py-4">
                                                {project.metrics.map((m, mIdx) => (
                                                    <div key={mIdx} className="text-center">
                                                        <div className="text-base font-black text-[#122a46]">{m.val}</div>
                                                        <div className="text-[10px] text-slate-400 uppercase font-semibold">{m.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Engineering Guarantees Banner */}
                    <div className="mb-28">
                        <div className="text-center mb-14">
                            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Our Commitment</span>
                            <h2 className="text-3xl md:text-5xl font-black text-[#122a46] mt-2">
                                Standard On Every Codiora Build
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {guarantees.map((g, gIdx) => (
                                <div
                                    key={gIdx}
                                    className="p-8 rounded-2xl bg-white border border-[#122a46]/10 hover:shadow-xl hover:border-teal-500/30 transition-all duration-300"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 flex items-center justify-center font-bold text-sm mb-4">
                                        0{gIdx + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#122a46] mb-2">{g.title}</h3>
                                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{g.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* High Converting CTA Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl bg-[#0f172a] text-white p-10 md:p-16 relative overflow-hidden shadow-2xl border border-slate-800 text-center"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest bg-teal-950/80 border border-teal-800 px-3 py-1 rounded-full inline-block mb-6">
                                Bring Your Product To Life
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                                Have a vision in mind? Let's architect your platform.
                            </h2>
                            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                                Get an architectural review and sprint projection from our senior engineering team within 24 hours.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center items-center">
                                <Link
                                    href="/contact"
                                    className="px-10 py-4 bg-teal-500 text-slate-950 font-bold rounded-full hover:bg-teal-400 hover:scale-105 transition-all shadow-lg text-base"
                                >
                                    Start Project Inquiry
                                </Link>
                                <Link
                                    href="/process"
                                    className="px-8 py-4 border border-slate-700 text-white font-bold rounded-full hover:bg-white/10 transition-all text-base"
                                >
                                    Explore How We Build
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
