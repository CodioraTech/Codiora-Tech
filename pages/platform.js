import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function Platform() {
    return (
        <>
            <SEO
                title="Our Technology Platform | Codiora Tech"
                description="Learn about Codiora Tech's cloud infrastructure, global edge networks, and AI-native application architectures."
                canonicalPath="/platform"
            />

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/30 font-sans">
                {/* Background Grid */}
                <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10">
                    <div className="mb-8">
                        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Platform', href: '/platform' }]} />
                    </div>

                    <div className="text-center mb-24 relative">
                        {/* Glowing Orb */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none"></div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-6xl md:text-8xl font-black tracking-tighter mb-6 relative z-10"
                        >
                            <span className="block text-xl md:text-2xl font-mono text-teal-600 mb-4 tracking-widest uppercase">System Status: Online</span>
                            THE PLATFORM CORE
                        </motion.h1>
                        <p className="text-xl text-slate-500 max-w-3xl mx-auto font-mono">
                            Proprietary infrastructure engineered for speed, high-scale data extraction, and seamless AI agent execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="bg-[#f8fafc]/80 border border-[#122a46]/10 p-10 md:p-14 rounded-3xl backdrop-blur-md relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-6 text-teal-500/20 text-9xl font-black select-none group-hover:text-teal-500/30 transition-colors">01</div>
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></span>
                                Edge Mesh Network
                            </h2>
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
                                    <div className="text-xs text-slate-500 uppercase">Uptime Target</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="bg-[#f8fafc]/80 border border-[#122a46]/10 p-10 md:p-14 rounded-3xl backdrop-blur-md relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-6 text-cyan-500/20 text-9xl font-black select-none group-hover:text-cyan-500/30 transition-colors">02</div>
                            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <span className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></span>
                                AI-Native Core
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                Deep integration with LLMs and neural networks. Your platform becomes an intelligent engine capable of predictive analytics, automated workflows, and high-conversion interactions.
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                {['OpenAI', 'Llama 3', 'Vector DB', 'LangChain'].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-600 rounded-full text-xs font-mono">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Zero Trust Security", icon: "🔒", desc: "Every request is authenticated. Every byte is encrypted. We design for resilience and zero leakage." },
                            { title: "Auto-Scaling", icon: "📈", desc: "Our Kubernetes clusters expand and contract in real-time based on traffic spikes. Maximum resource efficiency." },
                            { title: "CI/CD Pipeline", icon: "⚙️", desc: "We ship code continuously. Automated testing and deployment pipelines ensure rapid iteration without breaking changes." }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-2xl border border-[#122a46]/5 hover:border-teal-500/50 transition-colors group"
                            >
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">{card.icon}</div>
                                <h3 className="text-xl font-bold text-[#122a46] mb-3">{card.title}</h3>
                                <p className="text-slate-500 text-sm">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}
