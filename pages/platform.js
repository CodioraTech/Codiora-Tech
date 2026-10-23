import Link from 'next/link';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const platformLayers = [
    {
        num: "01",
        title: "Global Edge Mesh Network",
        badge: "Edge Routing",
        desc: "Deploying applications across distributed global points of presence (PoPs). Assets and API caching are localized to nearest users, slashing Time to First Byte (TTFB) to record lows.",
        metrics: [
            { label: "Global TTFB", val: "<42ms" },
            { label: "Edge Availability", val: "99.99%" }
        ],
        tags: ["Anycast DNS", "Cloudflare Workers", "V8 Isolates", "Brotli Compression"]
    },
    {
        num: "02",
        title: "Autonomous AI Agent Engine",
        badge: "AI Infrastructure",
        desc: "Purpose-built runtime orchestrating multi-agent decision loops, retrieval-augmented generation (RAG), and vector embeddings with semantic caching to minimize token costs.",
        metrics: [
            { label: "Token Efficiency", val: "+45%" },
            { label: "Inference Latency", val: "<120ms" }
        ],
        tags: ["FastAPI", "LangChain", "Vector DBs", "OpenAI / Claude", "Llama 3"]
    },
    {
        num: "03",
        title: "Distributed Data & Scraping Cluster",
        badge: "Data Pipeline",
        desc: "Fault-tolerant web scraping and ETL clusters running headless browser instances with automated residential IP rotation, TLS fingerprint mimicking, and real-time schema validation.",
        metrics: [
            { label: "Daily Throughput", val: "10M+ Records" },
            { label: "Extraction Success", val: "99.4%" }
        ],
        tags: ["Playwright Cluster", "Docker Swarm", "Rotating Proxies", "Kafka Streams"]
    },
    {
        num: "04",
        title: "Zero-Downtime Database & Job Queue",
        badge: "Backend Core",
        desc: "High-concurrency PostgreSQL and Redis architectures with automated failover, read replica splitting, and distributed BullMQ workers to manage spiky traffic bursts seamlessly.",
        metrics: [
            { label: "Queue Throughput", val: "25K jobs/sec" },
            { label: "RPO / RTO Target", val: "<60 seconds" }
        ],
        tags: ["PostgreSQL", "Redis Cluster", "BullMQ", "Prisma ORM", "Docker"]
    }
];

const securityStandards = [
    {
        title: "Zero-Trust Architecture",
        desc: "Mutual TLS (mTLS) enforcement across internal microservices. Every single inter-service request is authenticated, encrypted, and logged.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
        )
    },
    {
        title: "Automated GitOps CI/CD",
        desc: "Ephemeral staging environments, automated end-to-end regression suites via Playwright, and static vulnerability scanning on every pull request.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        )
    },
    {
        title: "Predictive Telemetry & APM",
        desc: "Real-time distributed tracing with Sentry and Prometheus. Automated alerts flag latency anomalies before end-users experience degradation.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>
        )
    }
];

export default function Platform() {
    return (
        <>
            <SEO
                title="Our Technology Platform & Cloud Architecture | Codiora Tech"
                description="Explore Codiora Tech's cloud platform architecture, edge mesh network, autonomous AI runtime, and high-throughput scraping clusters."
                canonicalPath="/platform"
            />

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/20 font-sans">
                {/* Tech Grid Pattern */}
                <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="container mx-auto px-6 pt-36 sm:pt-40 md:pt-44 pb-32 relative z-10">
                    <div className="mb-6">
                        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Platform', href: '/platform' }]} />
                    </div>

                    {/* Hero */}
                    <div className="text-center mb-24 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none"></div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 text-xs font-mono font-bold tracking-widest uppercase backdrop-blur-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            System Status: All Systems Operational
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-[#122a46]"
                        >
                            THE PLATFORM <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">CORE</span>
                        </motion.h1>
                        <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                            Proprietary architecture engineered for sub-50ms latency, high-scale data extraction, and seamless autonomous AI agent execution. Built to eliminate single points of failure.
                        </p>
                    </div>

                    {/* Live System Telemetry Board */}
                    <div className="bg-[#0f172a] text-slate-200 border border-slate-800 p-8 sm:p-10 rounded-3xl mb-24 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 text-slate-800 font-mono text-xs select-none">
                            REGION: GLOBAL-EDGE-MESH
                        </div>
                        <div className="mb-6">
                            <span className="text-xs font-mono uppercase tracking-widest text-teal-400">Live Architecture Telemetry</span>
                            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">Global System Performance Metrics</h3>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                                <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">99.99%</div>
                                <div className="text-[11px] text-slate-400 uppercase font-semibold mt-1">Uptime Availability</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                                <div className="text-2xl sm:text-3xl font-black font-mono text-teal-400">&lt;42ms</div>
                                <div className="text-[11px] text-slate-400 uppercase font-semibold mt-1">p99 Edge Latency</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                                <div className="text-2xl sm:text-3xl font-black font-mono text-cyan-400">10M+</div>
                                <div className="text-[11px] text-slate-400 uppercase font-semibold mt-1">Daily Records Processed</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                                <div className="text-2xl sm:text-3xl font-black font-mono text-teal-400">0%</div>
                                <div className="text-[11px] text-slate-400 uppercase font-semibold mt-1">Data Leakage SLA</div>
                            </div>
                        </div>
                    </div>

                    {/* Platform Architecture Layers */}
                    <div className="mb-28">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Architectural Layers</span>
                            <h2 className="text-3xl md:text-5xl font-black text-[#122a46] mt-2 tracking-tight">
                                Four Pillars of Codiora Platform
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {platformLayers.map((layer, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white border border-[#122a46]/10 p-8 sm:p-10 rounded-3xl hover:shadow-2xl hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-mono font-bold text-teal-600 bg-teal-500/10 px-3 py-1 rounded-full uppercase">
                                                {layer.badge}
                                            </span>
                                            <span className="text-4xl font-black text-slate-200 font-mono">
                                                {layer.num}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-[#122a46] mb-3">{layer.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">{layer.desc}</p>

                                        {/* Technology Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-8">
                                            {layer.tags.map((tag, tIdx) => (
                                                <span
                                                    key={tIdx}
                                                    className="text-[11px] font-mono px-2.5 py-1 bg-[#122a46]/5 text-[#122a46] rounded-md border border-[#122a46]/5"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Metrics Footer */}
                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#122a46]/5 bg-slate-50 -mx-8 sm:-mx-10 -mb-8 sm:-mb-10 px-8 sm:px-10 py-4 rounded-b-3xl text-center">
                                        {layer.metrics.map((m, mIdx) => (
                                            <div key={mIdx}>
                                                <div className="text-lg font-black text-[#122a46] font-mono">{m.val}</div>
                                                <div className="text-[10px] text-slate-400 uppercase font-semibold">{m.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Enterprise Security Standards */}
                    <div className="mb-28 p-10 md:p-14 rounded-3xl bg-white border border-[#122a46]/10 shadow-xl">
                        <div className="max-w-3xl mb-12">
                            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Enterprise Hardening</span>
                            <h2 className="text-3xl md:text-4xl font-black text-[#122a46] mt-2">
                                Zero-Trust & Cloud Governance
                            </h2>
                            <p className="text-slate-500 text-sm md:text-base mt-3">
                                Every platform we deploy adheres to enterprise cybersecurity baselines, including OWASP Top 10 mitigations and strict role-based access control.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {securityStandards.map((std, sIdx) => (
                                <div key={sIdx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4">
                                        {std.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-[#122a46] mb-2">{std.title}</h4>
                                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{std.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* High-Converting CTA Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl bg-[#0f172a] text-white p-10 md:p-16 relative overflow-hidden shadow-2xl border border-slate-800 text-center"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest bg-teal-950/80 border border-teal-800 px-3 py-1 rounded-full inline-block mb-6">
                                Enterprise Infrastructure Ready
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                                Ready to deploy your mission-critical workloads?
                            </h2>
                            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                                Schedule an architecture consultation with our engineering team to plan your cloud infrastructure, migration, or automation platform.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center items-center">
                                <Link
                                    href="/contact"
                                    className="px-10 py-4 bg-teal-500 text-slate-950 font-bold rounded-full hover:bg-teal-400 hover:scale-105 transition-all shadow-lg text-base"
                                >
                                    Schedule Tech Consult
                                </Link>
                                <Link
                                    href="/case-studies"
                                    className="px-8 py-4 border border-slate-700 text-white font-bold rounded-full hover:bg-white/10 transition-all text-base"
                                >
                                    View Architecture Case Studies
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
