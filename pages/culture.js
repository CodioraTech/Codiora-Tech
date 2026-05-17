import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const values = [
    { title: "Obsession", desc: "Good is the enemy of great. We obsess over every pixel, every line of code, and every millisecond of latency." },
    { title: "Transparency", desc: "No black boxes. We build in the open, communicate relentlessly, and believe trust is our currency." },
    { title: "Velocity", desc: "Speed matters. We iterate fast, ship often, and learn instantly. We don't wait for permission to innovate." },
    { title: "Autonomy", desc: "We hire adults. You own your work, your schedule, and your outcome. No micromanagement, just results." }
];

export default function Culture() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <>
            <Head>
                <title>Codiora Tech | Culture</title>
            </Head>

            <div ref={containerRef} className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-pink-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-pink-900/10 to-purple-900/10 rounded-full blur-[150px]" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10">
                    <div className="text-center mb-32">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-9xl font-black tracking-tighter mb-8"
                        >
                            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">DNA</span>
                        </motion.h1>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            Culture isn't a ping-pong table. It's how we make decisions when no one is watching. It's the operating system of our company.
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-40">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white border border-[#122a46]/5 p-16 rounded-[3rem] hover:bg-[#122a46]/5 transition-colors group"
                            >
                                <div className="text-pink-500 text-sm font-bold uppercase tracking-widest mb-6">0{i + 1}</div>
                                <h3 className="text-4xl font-bold text-[#122a46] mb-6 group-hover:text-pink-400 transition-colors">{v.title}</h3>
                                <p className="text-slate-500 text-lg leading-relaxed max-w-md">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Visual Section (Video Player) */}
                    <div className="relative rounded-[3rem] overflow-hidden aspect-video mb-40 border border-[#122a46]/10 group cursor-pointer bg-[#f8fafc]" onClick={() => setIsPlaying(true)}>
                        {isPlaying ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/hNPbaR8e56A?autoplay=1&rel=0&modestbranding=1"
                                title="Culture Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        ) : (
                            <>
                                <motion.div style={{ scale }} className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
                                    <div className="absolute inset-0 bg-[#f8fafc]/60 group-hover:bg-[#f8fafc]/40 transition-colors duration-700"></div>
                                </motion.div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full bg-[#122a46]/10 backdrop-blur-md border border-[#122a46]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                                    </div>
                                </div>
                                <div className="absolute bottom-10 left-10 text-[#122a46] pointer-events-none">
                                    <h3 className="text-2xl font-bold">A Day in the Life</h3>
                                    <p className="text-slate-600">Watch how we build the future.</p>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#122a46]/10 pt-20">
                        {[
                            { lbl: "Remote First", val: "100%" },
                            { lbl: "Team Members", val: "40+" },
                            { lbl: "Countries", val: "12" },
                            { lbl: "Avg Tenure", val: "3.5y" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-4xl md:text-6xl font-black text-[#122a46] mb-2">{stat.val}</div>
                                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.lbl}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
