import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Partners() {
    return (
        <>
            <Head>
                <title>Codiora Tech | Partners</title>
            </Head>

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/10">
                {/* Premium Background */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                    <div className="text-center mb-20">
                        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-purple-500/30 bg-teal-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                            Get Connected
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter mb-6"
                        >
                            STRATEGIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">ALLIANCES</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-500 max-w-2xl mx-auto"
                        >
                            Collaborate with us to drive mutual growth and innovation on a global scale.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="relative bg-[#122a46]/5 backdrop-blur-2xl border border-[#122a46]/10 p-12 md:p-16 rounded-[2.5rem] overflow-hidden group text-center shadow-2xl">
                            {/* Glossy sheen */}
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#122a46]/5 to-transparent pointer-events-none" />
                            <div className="absolute -top-20 -right-20 w-60 h-60 bg-teal-500/10 rounded-full blur-[80px] group-hover:bg-teal-500/10 transition-colors" />

                            <motion.div
                                animate={{ rotate: [0, 10, 0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="text-8xl mb-8 filter drop-shadow-[0_0_30px_rgba(168,85,247,0.3)] inline-block"
                            >
                                🤝
                            </motion.div>

                            <h2 className="text-3xl md:text-5xl font-bold text-[#122a46] mb-6">Become A Strategic Partner</h2>
                            <p className="text-slate-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                                Join our ecosystem of technology leaders, consultants, and industry experts. Together, we can deliver unparalleled value to clients worldwide.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
                                <Link href="/partner-apply">
                                    <button className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold text-lg rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
                                        Apply for Partnership
                                    </button>
                                </Link>
                                <Link href="/partner-program">
                                    <button className="w-full sm:w-auto px-10 py-4 border border-white/30 text-[#122a46] font-bold text-lg rounded-full hover:bg-[#122a46]/10 hover:border-white transition-all backdrop-blur-sm">
                                        View Partner Program
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
