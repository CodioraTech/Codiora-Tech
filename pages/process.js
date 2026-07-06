import { useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
    {
        id: "01",
        title: "Deep-Dive & Discovery",
        desc: "Day 1-2. We analyze your current manual workflows and data architecture to identify operational leakage points and bottleneck stages.",
        icon: "🧭",
        color: "from-blue-500 to-cyan-400"
    },
    {
        id: "02",
        title: "Architectural Blueprint",
        desc: "Day 3-5. We map out a custom database schema, proxy rotation layout, or LLM system prompt blueprint before writing any production code.",
        icon: "📐",
        color: "from-purple-500 to-pink-400"
    },
    {
        id: "03",
        title: "Agile Development & Testing",
        desc: "Sprint-based. Fast and secure iterations using Next.js/Python, integrated with regression testing and real-world high-volume load testing.",
        icon: "⚡",
        color: "from-yellow-500 to-orange-400"
    },
    {
        id: "04",
        title: "Deployment & Maintenance",
        desc: "Post-Launch. Complete cloud infrastructure integration with automated performance monitoring, error logging, and 24/7 crawler/bot maintenance.",
        icon: "🚀",
        color: "from-green-500 to-emerald-400"
    }
];

export default function Process() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <>
            <Head>
                <title>Our Engineering Methodology & Delivery Process | Codiora Tech</title>
                <meta name="description" content="Discover our 4-step agile methodology: Deep-Dive Discovery, Architectural Blueprint, Agile Development, and cloud-automated Deployment & Maintenance." />
            </Head>

            <div ref={containerRef} className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/30">
                {/* Background Details */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10">
                    <div className="text-center mb-32">
                        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gray-700 bg-gray-800/50 text-slate-600 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                            The Codiora Method
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                        >
                            ENGINEERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">EXCELLENCE</span>
                        </motion.h1>
                        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                            We have killed the chaos of traditional development. Our process is a linear accelerator for your product, moving from concept to code with surgical precision.
                        </p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Timeline Line */}
                        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-[#122a46]/5 md:-translate-x-1/2 h-full rounded-full"></div>
                        <motion.div style={{ height: lineHeight }} className="absolute left-[28px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 md:-translate-x-1/2 rounded-full box-shadow-[0_0_20px_rgba(6,182,212,0.5)]"></motion.div>

                        <div className="space-y-24">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-[28px] md:left-1/2 top-8 md:top-1/2 w-4 h-4 rounded-full bg-[#f8fafc] border-4 border-teal-500 z-10 md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>

                                    {/* Content Card */}
                                    <div className="w-full md:w-1/2 pl-20 md:pl-0 pr-0 md:px-16">
                                        <div className="bg-white border border-[#122a46]/5 p-8 md:p-10 rounded-3xl hover:border-[#122a46]/20 transition-all group relative overflow-hidden">
                                            <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${step.color}`}></div>
                                            <div className="absolute -right-10 -top-10 text-9xl font-black text-[#122a46]/5 z-0 select-none">{step.id}</div>

                                            <div className="relative z-10">
                                                <div className="text-4xl mb-4">{step.icon}</div>
                                                <h3 className={`text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${step.color}`}>
                                                    {step.title}
                                                </h3>
                                                <p className="text-slate-500 text-lg leading-relaxed">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Spacer for the other side */}
                                    <div className="hidden md:block w-1/2"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-40 text-center">
                        <h2 className="text-3xl font-bold mb-8">Ready to Start Step 01?</h2>
                        <Link href="/contact">
                            <button className="px-10 py-4 bg-white text-black font-bold rounded-full text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                                Book Discovery Session
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
