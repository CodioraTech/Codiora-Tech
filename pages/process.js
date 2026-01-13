import { useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
    {
        id: "01",
        title: "Discovery & Blueprint",
        desc: "We don't guess; we map. Every project starts with a deep-dive workshop to deconstruct your vision, analyze market fit, and architect the path to dominance.",
        icon: "🧭",
        color: "from-blue-400 to-cyan-500"
    },
    {
        id: "02",
        title: "UX/UI Architecture",
        desc: "Function meets seduction. We craft interfaces that are not just usable, but addictive. Wireframes turn into high-fidelity prototypes that define the user's emotional journey.",
        icon: "📐",
        color: "from-purple-400 to-pink-500"
    },
    {
        id: "03",
        title: "Agile Development",
        desc: "Code as art. Our engineering sprints are synchronized and lethal. We build modular, scalable, and clean systems using the latest tech stack (Next.js, Node, AI).",
        icon: "⚡",
        color: "from-yellow-400 to-orange-500"
    },
    {
        id: "04",
        title: "Quality Assurance",
        desc: "Zero tolerance for bugs. We stress-test, security-audit, and optimize until the product performs flawlessly under pressure.",
        icon: "🛡️",
        color: "from-green-400 to-emerald-500"
    },
    {
        id: "05",
        title: "Launch & Scale",
        desc: "The ignition point. We deploy to global CDNs, monitor realtime metrics, and iterate instantly based on user feedback. Your growth is our metric.",
        icon: "🚀",
        color: "from-red-400 to-rose-500"
    }
];

export default function Process() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <>
            <Head>
                <title>Codiora Tech | Our Process</title>
            </Head>

            <div ref={containerRef} className="bg-[#020202] min-h-screen text-white overflow-hidden selection:bg-cyan-500/30">
                {/* Background Details */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10">
                    <div className="text-center mb-32">
                        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gray-700 bg-gray-800/50 text-gray-300 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                            The Codiora Method
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                        >
                            ENGINEERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">EXCELLENCE</span>
                        </motion.h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            We have killed the chaos of traditional development. Our process is a linear accelerator for your product, moving from concept to code with surgical precision.
                        </p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Timeline Line */}
                        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 md:-translate-x-1/2 h-full rounded-full"></div>
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
                                    <div className="absolute left-[28px] md:left-1/2 top-8 md:top-1/2 w-4 h-4 rounded-full bg-[#020202] border-4 border-cyan-500 z-10 md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>

                                    {/* Content Card */}
                                    <div className="w-full md:w-1/2 pl-20 md:pl-0 pr-0 md:px-16">
                                        <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-10 rounded-3xl hover:border-white/20 transition-all group relative overflow-hidden">
                                            <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${step.color}`}></div>
                                            <div className="absolute -right-10 -top-10 text-9xl font-black text-white/5 z-0 select-none">{step.id}</div>

                                            <div className="relative z-10">
                                                <div className="text-4xl mb-4">{step.icon}</div>
                                                <h3 className={`text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${step.color}`}>
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-400 text-lg leading-relaxed">
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
