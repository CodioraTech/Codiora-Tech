import Link from 'next/link';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const MILESTONES = [
    {
        year: "2024 Q1",
        title: "The Genesis in Dhaka",
        tag: "Inception",
        desc: "Founded by Asif Mahamud Shaon with a clear, singular vision: build an engineering boutique that fuses Silicon Valley-grade code quality with transparent, milestone-driven execution. Started with custom Python data pipelines and high-scale web scraping architectures.",
        metrics: ["Day 1 Commitment: 0% Technical Debt", "100% IP Handover Guarantee"],
        icon: (
            <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        year: "2024 Q3",
        title: "First 25 Global Clients & Expansion",
        tag: "Global Traction",
        desc: "Expanded client engagements across the United States, United Kingdom, and Western Europe. Shipped production-ready SaaS MVPs, headless browser crawler clusters handling millions of requests daily, and automated data synchronization engines.",
        metrics: ["98% Client Retention Rate", "25+ Shipped Enterprise Systems"],
        icon: (
            <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        year: "2025",
        title: "The Agentic AI & Systems Era",
        tag: "Innovation",
        desc: "Integrated cutting-edge LLM agent workflows, RAG knowledge-base pipelines, and autonomous background workers into our core stack. Developed custom resilient proxy-rotation infrastructure capable of bypassing sophisticated anti-bot countermeasures.",
        metrics: ["1M+ Automated Data Records Processed", "Sub-100ms API Latencies"],
        icon: (
            <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        year: "2026",
        title: "60+ Global Deployments & Scaling Forward",
        tag: "Current Scale",
        desc: "Today, Codiora Tech powers digital automation, high-performance web platforms, and data infrastructure for over 60 clients across 12 countries. Still driven by our founding principle: surgical precision over agency bloat.",
        metrics: ["60+ Shipped Production Platforms", "4.9/5 Average Client Rating"],
        icon: (
            <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        )
    }
];

const CORE_PILLARS = [
    {
        title: "Engineering Over Marketing",
        desc: "We are builders, not account executives. We invest in code craftsmanship, test coverage, and scalable architecture rather than aggressive sales pitches.",
        icon: "⚡"
    },
    {
        title: "Radical Transparency",
        desc: "No black boxes. You get direct access to git commits, linear tickets, and weekly staging builds. What you see is exactly what is running in production.",
        icon: "🔍"
    },
    {
        title: "Global Overlap & Velocity",
        desc: "Operating from Dhaka with direct timezone overlap for European mornings and US East Coast afternoons, delivering continuous 24-hour turnaround velocity.",
        icon: "🌐"
    }
];

export default function History() {
    return (
        <>
            <SEO
                title="Our History & Growth Journey | Codiora Tech"
                description="Follow the journey of Codiora Tech from its founding in Dhaka to engineering mission-critical systems and AI automation for 60+ global clients."
                canonicalPath="/history"
            />

            <div className="min-h-screen bg-[#f8fafc] text-[#122a46] overflow-hidden selection:bg-teal-500/20">
                {/* Ambient Blurs */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[140px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-[140px] animate-pulse-slow delay-1000" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay pointer-events-none" />
                </div>

                <div className="container mx-auto px-6 pt-36 sm:pt-40 md:pt-44 pb-32 relative z-10">
                    <div className="mb-8">
                        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'History', href: '/history' }]} />
                    </div>

                    {/* HERO */}
                    <section className="text-center max-w-4xl mx-auto mb-20 sm:mb-28">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-700 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
                        >
                            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                            Est. 2024 • Dhaka, Bangladesh
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.05]"
                        >
                            OUR ORIGINS & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-[#122a46]">
                                ROADMAP.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto mb-12"
                        >
                            From a dedicated engineering duo in Dhaka solving high-concurrency data problems to a global development partner trusted across 12 countries.
                        </motion.p>

                        {/* Top Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-3xl bg-white border border-[#122a46]/8 shadow-xl shadow-[#122a46]/5 text-left">
                            <div className="p-4 border-r border-[#122a46]/5 last:border-none">
                                <div className="text-3xl font-black text-[#122a46]">2024</div>
                                <div className="text-xs font-bold uppercase tracking-wider text-teal-600 mt-1">Founded In Dhaka</div>
                                <div className="text-[11px] text-slate-500 mt-0.5">Built on clean code & systems</div>
                            </div>
                            <div className="p-4 border-r border-[#122a46]/5 last:border-none">
                                <div className="text-3xl font-black text-[#122a46]">60+</div>
                                <div className="text-xs font-bold uppercase tracking-wider text-teal-600 mt-1">Shipped Projects</div>
                                <div className="text-[11px] text-slate-500 mt-0.5">SaaS, Automation & Crawlers</div>
                            </div>
                            <div className="p-4 border-r border-[#122a46]/5 last:border-none">
                                <div className="text-3xl font-black text-[#122a46]">12</div>
                                <div className="text-xs font-bold uppercase tracking-wider text-teal-600 mt-1">Countries Served</div>
                                <div className="text-[11px] text-slate-500 mt-0.5">US, UK, EU, UAE, and APAC</div>
                            </div>
                            <div className="p-4">
                                <div className="text-3xl font-black text-[#122a46]">98%</div>
                                <div className="text-xs font-bold uppercase tracking-wider text-teal-600 mt-1">Satisfaction Rate</div>
                                <div className="text-[11px] text-slate-500 mt-0.5">Long-term client partnerships</div>
                            </div>
                        </div>
                    </section>

                    {/* TIMELINE */}
                    <section className="max-w-4xl mx-auto mb-32 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-cyan-500 to-[#122a46]/20 md:-translate-x-1/2"></div>

                        <div className="space-y-16">
                            {MILESTONES.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className={`relative flex flex-col md:flex-row gap-8 items-start ${
                                        i % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                                >
                                    {/* Center Node */}
                                    <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-teal-500 shadow-md shadow-teal-500/20 z-10"></div>

                                    {/* Card */}
                                    <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8">
                                        <div className="p-8 rounded-3xl bg-white border border-[#122a46]/8 shadow-lg shadow-[#122a46]/5 hover:border-teal-500/30 hover:shadow-xl transition-all">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-xs font-black uppercase tracking-widest text-teal-600 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                                                    {m.tag}
                                                </span>
                                                <span className="text-sm font-black text-[#122a46]">
                                                    {m.year}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-bold text-[#122a46] mb-3">
                                                {m.title}
                                            </h3>

                                            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                                                {m.desc}
                                            </p>

                                            <div className="space-y-2 border-t border-[#122a46]/5 pt-4">
                                                {m.metrics.map((metric, j) => (
                                                    <div key={j} className="flex items-center gap-2 text-xs font-semibold text-[#122a46]">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                                                        <span>{metric}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden md:block w-1/2"></div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* CORE PILLARS */}
                    <section className="mb-32">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">The Ground Rules</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#122a46] mt-2">
                                What Kept Us Grounded
                            </h2>
                            <p className="text-slate-500 max-w-xl mx-auto mt-3 text-base">
                                The non-negotiable principles that shaped our company from our first line of code.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {CORE_PILLARS.map((p, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-white border border-[#122a46]/8 shadow-sm hover:shadow-lg transition-all">
                                    <div className="text-3xl mb-4">{p.icon}</div>
                                    <h3 className="text-xl font-bold text-[#122a46] mb-2">{p.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                                        {p.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="relative rounded-[3rem] overflow-hidden bg-[#122a46] text-white p-10 sm:p-16 text-center shadow-2xl max-w-5xl mx-auto">
                        <div className="absolute top-0 right-1/4 w-80 h-80 bg-teal-500/20 rounded-full blur-[90px] pointer-events-none" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
                                Be Part of Our Next Chapter.
                            </h2>
                            <p className="text-slate-300 text-base mb-8 font-light">
                                Whether you need a high-scale crawler, an AI automation agent, or a full-stack platform built with precision, let’s talk.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <button className="px-8 py-4 rounded-xl bg-teal-400 hover:bg-teal-300 text-[#0f172a] font-black text-sm tracking-widest uppercase transition-all shadow-lg shadow-teal-500/20">
                                        Start a Conversation →
                                    </button>
                                </Link>
                                <Link href="/portfolio">
                                    <button className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-widest uppercase border border-white/20 transition-all">
                                        View Case Studies ↗
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
