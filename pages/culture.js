import Link from 'next/link';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { motion } from 'framer-motion';

const values = [
    {
        num: "01",
        title: "Extreme Craftsmanship",
        desc: "Good is the enemy of exceptional. We obsess over clean abstractions, strict TypeScript typing, sub-second queries, and pixel-precise interfaces."
    },
    {
        num: "02",
        title: "Radical Transparency",
        desc: "No black boxes. We share raw telemetry, sprint velocity metrics, and post-mortems openly with clients and across the engineering collective."
    },
    {
        num: "03",
        title: "Velocity with Rigor",
        desc: "We ship code continuously. Fast iteration never means reckless shortcuts — automated CI/CD and end-to-end tests safeguard our speed."
    },
    {
        num: "04",
        title: "Total Autonomy & Ownership",
        desc: "We hire senior professionals. You own your systems end-to-end: from initial architecture proposal to production deployment and monitoring."
    },
    {
        num: "05",
        title: "Dedicated R&D Time",
        desc: "We allocate 20% of engineering bandwidth to internal tool development, exploring bleeding-edge AI models, and open-source contributions."
    },
    {
        num: "06",
        title: "Measurable Client Impact",
        desc: "Code without business impact is vanity. We measure our engineering success by user conversion, uptime, and client revenue growth."
    }
];

const operatingSystem = [
    {
        title: "Async-First Communication",
        desc: "Deep focus requires uninterrupted flow state. We default to written proposals, detailed PR descriptions, and concise video walkthroughs over calendar clutter.",
        tag: "Focus Culture"
    },
    {
        title: "4-Hour Pull Request SLA",
        desc: "Code reviews are never a bottleneck. Senior engineers review open pull requests within 4 hours to ensure engineering velocity remains unblocked.",
        tag: "Velocity"
    },
    {
        title: "Architectural Decision Records (ADRs)",
        desc: "Every major architectural choice is documented with context, considered alternatives, and trade-offs to keep the codebase maintainable for years.",
        tag: "Documentation"
    },
    {
        title: "Blameless Post-Mortems",
        desc: "When production anomalies occur, we don't point fingers. We conduct blameless incident analyses to harden the platform and prevent future occurrences.",
        tag: "Reliability"
    }
];

export default function Culture() {
    return (
        <>
            <SEO
                title="Our Engineering Culture & Operating System | Codiora Tech"
                description="Discover the engineering culture, values, and operating philosophy driving digital excellence at Codiora Tech in Dhaka."
                canonicalPath="/culture"
            />

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/20">
                {/* Ambient Background */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-teal-900/10 to-cyan-900/10 rounded-full blur-[150px]" />
                </div>

                <div className="container mx-auto px-6 pt-36 sm:pt-40 md:pt-44 pb-32 relative z-10">
                    <div className="mb-6">
                        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Culture', href: '/culture' }]} />
                    </div>

                    {/* Hero */}
                    <div className="text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-widest backdrop-blur-sm"
                        >
                            Operating Philosophy & DNA
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-[#122a46]"
                        >
                            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">DNA</span>
                        </motion.h1>
                        <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                            Culture isn't beanbag chairs or ping-pong tables. It is how we make architectural decisions when no one is watching. It is the operating system that guides every line of code we ship.
                        </p>
                    </div>

                    {/* Culture Values Grid */}
                    <div className="mb-28">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Our Guiding Pillars</span>
                            <h2 className="text-3xl md:text-5xl font-black text-[#122a46] mt-2 tracking-tight">
                                Six Core Principles
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {values.map((v, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="bg-white border border-[#122a46]/10 p-8 sm:p-10 rounded-3xl hover:shadow-2xl hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="text-teal-600 font-mono text-sm font-bold uppercase tracking-widest mb-4">
                                            {v.num}
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#122a46] mb-3">{v.title}</h3>
                                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light">{v.desc}</p>
                                    </div>
                                    <div className="w-12 h-0.5 bg-teal-500/30 mt-6"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Operating System / Work Rituals */}
                    <div className="p-10 md:p-14 rounded-3xl bg-white border border-[#122a46]/10 mb-28 shadow-xl">
                        <div className="max-w-3xl mb-12">
                            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Team Rituals</span>
                            <h2 className="text-3xl md:text-4xl font-black text-[#122a46] mt-2">
                                The Codiora Operating System
                            </h2>
                            <p className="text-slate-500 text-sm md:text-base mt-3">
                                How our engineers collaborate, solve problems, and deliver high-velocity output across distributed timezones.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {operatingSystem.map((item, idx) => (
                                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                                    <span className="text-[10px] font-mono font-bold text-teal-600 bg-teal-500/10 px-2.5 py-0.5 rounded-full uppercase">
                                        {item.tag}
                                    </span>
                                    <h4 className="text-lg font-bold text-[#122a46] mt-3 mb-2">{item.title}</h4>
                                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Culture Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-28">
                        {[
                            { lbl: "Remote-First Flexibility", val: "100%" },
                            { lbl: "PR Review SLA", val: "<4 Hours" },
                            { lbl: "Global Client Markets", val: "12+" },
                            { lbl: "Engineering Retention", val: "95%" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white border border-[#122a46]/10 p-6 sm:p-8 rounded-3xl text-center shadow-lg"
                            >
                                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#122a46] mb-2 font-mono">
                                    {stat.val}
                                </div>
                                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                                    {stat.lbl}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* High-Converting Hiring / Careers CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl bg-[#0f172a] text-white p-10 md:p-16 relative overflow-hidden shadow-2xl border border-slate-800 text-center"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest bg-teal-950/80 border border-teal-800 px-3 py-1 rounded-full inline-block mb-6">
                                Join Our Engineering Collective
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                                Want to build without bureaucracy?
                            </h2>
                            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                                We are always looking for curious, obsessive software engineers and designers who take pride in craftsmanship.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center items-center">
                                <Link
                                    href="/careers"
                                    className="px-10 py-4 bg-teal-500 text-slate-950 font-bold rounded-full hover:bg-teal-400 hover:scale-105 transition-all shadow-lg text-base"
                                >
                                    Explore Open Positions
                                </Link>
                                <Link
                                    href="/about"
                                    className="px-8 py-4 border border-slate-700 text-white font-bold rounded-full hover:bg-white/10 transition-all text-base"
                                >
                                    Read About Our Story
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
