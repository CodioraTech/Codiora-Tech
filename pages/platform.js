import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Platform() {
    return (
        <>
            <Head>
                <title>Codiora Tech | Our Platform</title>
            </Head>

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-indigo-500/30 font-sans">
                {/* Background Grid */}
                <div className="fixed inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10">
                    <div className="text-center mb-32 relative">
                        {/* Glowing Orb */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[150px] pointer-events-none"></div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-6xl md:text-9xl font-black tracking-tighter mb-6 relative z-10"
                        >
                            <span className="block text-2xl md:text-4xl font-mono text-indigo-400 mb-4 tracking-widest">SYSTEM STATUS: ONLINE</span>
                            THE CORE
                        </motion.h1>
                        <p className="text-xl text-slate-500 max-w-3xl mx-auto font-mono">
                            // Proprietary infrastructure built for extreme performance.
                            <br />
                            // Zero-latency. Zero-trust. Infinite scale.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="bg-[#f8fafc]/80 border border-[#122a46]/10 p-10 md:p-14 rounded-3xl backdrop-blur-md relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-6 text-indigo-500/20 text-9xl font-black select-none group-hover:text-indigo-500/30 transition-colors">01</div>
                            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></span>
                                Edge Network
                            </h3>
                            <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                We deploy your application across a global mesh of edge nodes. Static assets are served from the nearest location to the user, ensuring fast load times regardless of geography.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#122a46]/5 p-4 rounded-xl text-center">
                                    <div className="text-2xl font-bold text-[#122a46]">50ms</div>
                                    <div className="text-xs text-slate-500 uppercase">Global Latency</div>
                                </div>
                                <div className="bg-[#122a46]/5 p-4 rounded-xl text-center">
                                    <div className="text-2xl font-bold text-[#122a46]">99.99%</div>
                                    <div className="text-xs text-slate-500 uppercase">Uptime SLA</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="bg-[#f8fafc]/80 border border-[#122a46]/10 p-10 md:p-14 rounded-3xl backdrop-blur-md relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-6 text-pink-500/20 text-9xl font-black select-none group-hover:text-pink-500/30 transition-colors">02</div>
                            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></span>
                                AI-Native Core
                            </h3>
                            <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                Deep integration with LLMs and neural networks. Your platform isn't just a database; it's a thinking engine capable of predictive analytics and personalized user experiences.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                {['OpenAI', 'Llama 2', 'Vector DB', 'LangChain'].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 text-pink-400 rounded-full text-xs font-mono">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Zero Trust Security", icon: "🔒", desc: "Every request is authenticated. Every byte is encrypted. We assume breach and design for resilience." },
                            { title: "Auto-Scaling", icon: "📈", desc: "Our Kubernetes clusters expand and contract in real-time based on traffic spikes. Pay only for what you use." },
                            { title: "CI/CD Pipeline", icon: "⚙️", desc: "We ship code daily. Automated testing and deployment pipelines ensure rapid iteration without breaking things." }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-2xl border border-[#122a46]/5 hover:border-indigo-500/50 transition-colors group"
                            >
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">{card.icon}</div>
                                <h4 className="text-xl font-bold text-[#122a46] mb-3">{card.title}</h4>
                                <p className="text-slate-500 text-sm">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}
