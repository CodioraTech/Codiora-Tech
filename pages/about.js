import Head from 'next/head';

import { motion } from 'framer-motion';
import FounderMessage from '@/components/FounderMessage';

export default function About() {
    return (
        <>
            <Head>
                <title>Codiora Tech | The Avant-Garde</title>
                <meta name="description" content="We are the architects of the digital renaissance. Discover the story, the vision, and the team behind Codiora Tech." />
            </Head>

            <div className="bg-[#020202] min-h-screen text-white overflow-hidden selection:bg-cyan-500/30">
                {/* Global Ambient Background */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="relative z-10">
                    {/* 1. Hero Manifesto */}
                    <section className="pt-44 pb-32 px-6">
                        <div className="container mx-auto max-w-5xl text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                            >
                                <span className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">Est. 2024 • Dhaka, Bangladesh</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10 leading-none"
                            >
                                WE ARCHITECT <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-600">THE FUTURE.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
                            >
                                Codiora Tech is not just an agency; it is a rebellion against the ordinary.
                                We are a collective of relentless innovators, fusing artistry with engineering
                                to build digital experiences that defy expectations and define eras.
                            </motion.p>
                        </div>
                    </section>

                    {/* 2. The Stats (Impact) */}
                    <section className="py-20 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
                        <div className="container mx-auto px-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                                {[
                                    { label: "Projects Shipped", value: "15+" },
                                    { label: "Global Partners", value: "5+" },
                                    { label: "Lines of Code", value: "1M+" },
                                    { label: "Coffee Consumed", value: "∞" }
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-500 mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm font-bold tracking-widest text-gray-500 uppercase">{stat.label}</div>
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
                                        <span className="text-cyan-400">Different.</span>
                                    </motion.h2>
                                    <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                                        We don't believe in "good enough". Our culture is built on a foundation of obsessive craftsmanship and radical transparency. We operate at the bleeding edge of technology, constantly pushing the boundaries of what is possible on the web and beyond.
                                    </p>

                                    <div className="space-y-8">
                                        {[
                                            { title: "Relentless Innovation", desc: "We explore the unknown to bring you the new." },
                                            { title: "Pixel Perfection", desc: "Every distinctive pixel matters. Beauty is in the details." },
                                            { title: "User Obsession", desc: "We build for humans, distinctively designed for emotion." }
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.2 }}
                                                className="flex gap-6 items-start group"
                                            >
                                                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all">
                                                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                                    <p className="text-gray-500">{item.desc}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, rotate: 5 }}
                                    whileInView={{ opacity: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                    className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-black group"
                                >
                                    {/* Image Background - Place dna.jpg in public/images/about/ */}
                                    <img
                                        src="/images/about/dna.jpg"
                                        alt="Our DNA"
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                                        onError={(e) => e.target.style.display = 'none'}
                                    />

                                    {/* Abstract Art Overlay */}
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay pointer-events-none"></div>
                                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/30 via-transparent to-purple-900/30 pointer-events-none"></div>


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
                                    className="group relative p-10 rounded-3xl bg-[#080808] border border-white/10 overflow-hidden min-h-[400px] flex flex-col justify-between"
                                >
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/20 transition-all duration-700"></div>

                                    <div className="relative z-10 flex-grow">
                                        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-4xl font-black text-white mb-6 tracking-tight">OUR MISSION</h3>
                                        <ul className="space-y-4 text-gray-400">
                                            <li className="flex gap-3 items-start">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] flex-shrink-0"></span>
                                                <span><strong className="text-white">Digital Supremacy:</strong> Empowering businesses to dominate their industries through superior technology.</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] flex-shrink-0"></span>
                                                <span><strong className="text-white">Growth Engineering:</strong> Building engines of growth, not just static software, to drive tangible ROI.</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] flex-shrink-0"></span>
                                                <span><strong className="text-white">Complex Problem Solving:</strong> Transforming the most difficult business challenges into elegant, scalable solutions.</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] flex-shrink-0"></span>
                                                <span><strong className="text-white">Strategic Partnership:</strong> Acting as a dedicated co-pilot in our clients' journey to success.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full h-1 bg-gradient-to-r from-cyan-500/50 to-transparent mt-8"></div>
                                </motion.div>

                                {/* Vision Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="group relative p-10 rounded-3xl bg-[#080808] border border-white/10 overflow-hidden min-h-[400px] flex flex-col justify-between"
                                >
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/20 transition-all duration-700"></div>

                                    <div className="relative z-10 flex-grow">
                                        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-purple-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-4xl font-black text-white mb-6 tracking-tight">OUR VISION</h3>
                                        <ul className="space-y-4 text-gray-400">
                                            <li className="flex gap-3 items-start">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)] flex-shrink-0"></span>
                                                <span><strong className="text-white">Global Architecture:</strong> To become the primary architects of the digital future, setting new global standards.</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)] flex-shrink-0"></span>
                                                <span><strong className="text-white">Technological Artistry:</strong> Creating a world where the line between advanced engineering and functional art is invisible.</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)] flex-shrink-0"></span>
                                                <span><strong className="text-white">Innovation Catalyst:</strong> Inspiring a new wave of digital creativity that transcends borders and industries.</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)] flex-shrink-0"></span>
                                                <span><strong className="text-white">Limitless Ecosystem:</strong> Fostering an ecosystem where businesses can scale without technological limitations.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full h-1 bg-gradient-to-r from-purple-500/50 to-transparent mt-8"></div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* 4. Founder's Message */}
                    <section className="py-20 bg-gradient-to-b from-transparent to-black/50">
                        <div className="container mx-auto px-6">
                            <FounderMessage />
                        </div>
                    </section>

                    {/* 5. The Architects (Team) */}


                    {/* 6. CTA */}
                    <section className="py-40 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-900/20 pointer-events-none"></div>
                        <div className="container mx-auto px-6 relative z-10 text-center">
                            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter">
                                READY TO <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">DISRUPT?</span>
                            </h2>
                            <p className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                                The future is waiting for no one. Let's build it together, today.
                            </p>
                            <button className="px-12 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300">
                                Start Your Journey
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
