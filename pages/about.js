import Link from 'next/link';
import { motion } from 'framer-motion';
import FounderMessage from '@/components/FounderMessage';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function About() {
    return (
        <>
            <SEO
                title="About Us | Codiora Tech"
                description="Discover the story, mission, and engineering culture behind Codiora Tech, a web development and AI automation agency based in Dhaka."
                canonicalPath="/about"
            />

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/30">
                {/* Global Ambient Background */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#122a46]/5 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
                </div>

                <div className="relative z-10">
                    {/* 1. Hero Manifesto */}
                    <section className="pt-36 sm:pt-40 md:pt-44 pb-24 px-6">
                        <div className="container mx-auto max-w-5xl text-center">
                            <div className="mb-6 flex justify-center">
                                <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }]} />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#122a46]/10 bg-[#122a46]/5 backdrop-blur-md"
                            >
                                <span className="text-xs font-bold tracking-[0.2em] text-teal-600 uppercase">Est. 2024 • Dhaka, Bangladesh</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10 leading-none"
                            >
                                WE ARCHITECT <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#122a46] via-slate-500 to-teal-500">THE FUTURE.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light"
                            >
                                Codiora Tech is not just an agency; it is a collective of software engineers and system architects, fusing artistry with engineering to build digital experiences that scale.
                            </motion.p>
                        </div>
                    </section>

                    {/* 2. The Stats (Impact) */}
                    <section className="py-20 border-y border-[#122a46]/5 bg-white/[0.02] backdrop-blur-sm">
                        <div className="container mx-auto px-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                                {[
                                    { label: "Projects Shipped", value: "60+" },
                                    { label: "Client Satisfaction", value: "98%" },
                                    { label: "Lines of Code", value: "1M+" },
                                    { label: "First Response", value: "24h" }
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-cyan-500 mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm font-bold tracking-widest text-slate-500 uppercase">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 3. Our DNA (Values) */}
                    <section className="py-32 px-6">
                        <div className="container mx-auto max-w-7xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                                <div>
                                    <motion.h2
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="text-4xl md:text-6xl font-bold mb-8"
                                    >
                                        Our DNA is <br />
                                        <span className="text-teal-600">Different.</span>
                                    </motion.h2>
                                    <p className="text-lg text-slate-500 mb-12 leading-relaxed">
                                        We operate with obsessive craftsmanship and radical transparency. We engineer scalable systems, constantly pushing the boundaries of what is possible on the web and beyond.
                                    </p>

                                    <div className="space-y-8">
                                        {[
                                            { title: "Relentless Innovation", desc: "We explore the unknown to bring you modern technology." },
                                            { title: "Pixel Perfection", desc: "Every distinctive pixel matters. Beauty is in the details." },
                                            { title: "User Obsession", desc: "We build intuitive interfaces designed for real humans." }
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.2 }}
                                                className="flex gap-6 items-start group"
                                            >
                                                <div className="w-12 h-12 rounded-full border border-[#122a46]/10 bg-[#122a46]/5 flex items-center justify-center group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-all">
                                                    <div className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-[#122a46] mb-2">{item.title}</h3>
                                                    <p className="text-slate-500">{item.desc}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="relative w-full rounded-3xl overflow-hidden border border-[#122a46]/10 bg-[#0f172a] text-slate-300 shadow-2xl p-6 sm:p-8 flex flex-col justify-between"
                                >
                                    {/* Terminal Title Bar */}
                                    <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                                            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                                            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                                            <span className="text-xs font-mono text-slate-400 ml-2">architecture-spec.ts</span>
                                        </div>
                                        <span className="text-[10px] font-mono text-teal-400 bg-teal-950/80 border border-teal-800 px-2 py-0.5 rounded">
                                            Production Cluster • Dhaka
                                        </span>
                                    </div>

                                    {/* Code snippet */}
                                    <div className="font-mono text-xs sm:text-sm leading-relaxed space-y-2 text-slate-300 overflow-x-auto">
                                        <div className="text-teal-400">// Codiora High-Availability Service Mesh</div>
                                        <div><span className="text-purple-400">export const</span> systemArchitecture = &#123;</div>
                                        <div className="pl-4">engine: <span className="text-emerald-400">'Next.js + Python FastAPI'</span>,</div>
                                        <div className="pl-4">database: <span className="text-emerald-400">'PostgreSQL + Redis Layer'</span>,</div>
                                        <div className="pl-4">crawlers: <span className="text-emerald-400">'Playwright Cluster (Rotating IP)'</span>,</div>
                                        <div className="pl-4">telemetry: <span className="text-emerald-400">'Sentry 24/7 + Datadog'</span>,</div>
                                        <div className="pl-4">uptimeGuarantee: <span className="text-cyan-400">99.9</span>,</div>
                                        <div className="pl-4">ownership: <span className="text-emerald-400">'100% Client IP Transfer'</span></div>
                                        <div>&#125;;</div>
                                    </div>

                                    {/* Telemetry Status Bar */}
                                    <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                                        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                                            <div className="text-xs font-mono text-emerald-400">● 42ms</div>
                                            <div className="text-[10px] text-slate-400 uppercase font-semibold">p99 Latency</div>
                                        </div>
                                        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                                            <div className="text-xs font-mono text-teal-400">98.4%</div>
                                            <div className="text-[10px] text-slate-400 uppercase font-semibold">Test Coverage</div>
                                        </div>
                                        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                                            <div className="text-xs font-mono text-cyan-400">0%</div>
                                            <div className="text-[10px] text-slate-400 uppercase font-semibold">Lock-In</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* 3.5. Mission & Vision */}
                    <section className="py-20 px-6 relative">
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Mission Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="group relative p-10 rounded-3xl bg-white border border-[#122a46]/10 overflow-hidden min-h-[400px] flex flex-col justify-between"
                                >
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-teal-500/20 transition-all duration-700"></div>

                                    <div className="relative z-10 flex-grow">
                                        <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-teal-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-3xl font-black text-[#122a46] mb-6 tracking-tight">OUR MISSION</h3>
                                        <ul className="space-y-4 text-slate-500">
                                            <li className="flex gap-3 items-start">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(34,211,238,0.8)] flex-shrink-0"></span>
                                                <span><strong className="text-[#122a46]">Technical Excellence:</strong> Empowering businesses to lead their industries through superior technology.</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(34,211,238,0.8)] flex-shrink-0"></span>
                                                <span><strong className="text-[#122a46]">Growth Engineering:</strong> Building engines of growth, not just static software, to drive tangible ROI.</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(34,211,238,0.8)] flex-shrink-0"></span>
                                                <span><strong className="text-[#122a46]">Complex Problem Solving:</strong> Transforming difficult business challenges into elegant, scalable solutions.</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(34,211,238,0.8)] flex-shrink-0"></span>
                                                <span><strong className="text-[#122a46]">Strategic Partnership:</strong> Acting as a dedicated engineering partner for long-term success.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full h-1 bg-gradient-to-r from-teal-500/50 to-transparent mt-8"></div>
                                </motion.div>

                                {/* Vision Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="group relative p-10 rounded-3xl bg-white border border-[#122a46]/10 overflow-hidden min-h-[400px] flex flex-col justify-between"
                                >
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-teal-500/10 transition-all duration-700"></div>

                                    <div className="relative z-10 flex-grow">
                                        <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-teal-600">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-3xl font-black text-[#122a46] mb-6 tracking-tight">OUR VISION</h3>
                                        <ul className="space-y-4 text-slate-500">
                                            <li className="flex gap-3 items-start">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.6)] flex-shrink-0"></span>
                                                <span><strong className="text-[#122a46]">Global Architecture:</strong> To become trusted architects of digital systems worldwide.</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.6)] flex-shrink-0"></span>
                                                <span><strong className="text-[#122a46]">Technological Artistry:</strong> Creating systems where advanced engineering meets seamless usability.</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.6)] flex-shrink-0"></span>
                                                <span><strong className="text-[#122a46]">Innovation Catalyst:</strong> Inspiring creative web and AI engineering across global markets.</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.6)] flex-shrink-0"></span>
                                                <span><strong className="text-[#122a46]">Limitless Scalability:</strong> Building platforms where businesses grow without technological constraints.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full h-1 bg-gradient-to-r from-teal-500/50 to-transparent mt-8"></div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* 4. Founder's Message */}
                    <section className="py-20 bg-gradient-to-b from-transparent to-[#f8fafc]/50">
                        <div className="container mx-auto px-6">
                            <FounderMessage />
                        </div>
                    </section>

                    {/* 5. CTA */}
                    <section className="py-32 relative overflow-hidden">
                        <div className="container mx-auto px-6 relative z-10 text-center">
                            <h2 className="text-5xl md:text-7xl font-black text-[#122a46] mb-8 tracking-tighter">
                                READY TO <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">BUILD TOGETHER?</span>
                            </h2>
                            <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-light">
                                Let us build your high-performance web systems and automation solutions today.
                            </p>
                            <Link href="/contact" className="px-12 py-5 rounded-full bg-[#122a46] text-white font-bold text-lg hover:bg-teal-500 hover:text-[#0f172a] hover:scale-105 transition-all duration-300 inline-block shadow-lg">
                                Start Your Project
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

