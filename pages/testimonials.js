import Head from 'next/head';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Codiora didn't just build our platform; they architected our entire digital future. Their engineering velocity is unmatched.",
        author: "Alex Rivera",
        role: "CTO, FinTech Global",
        logo: "🏦"
    },
    {
        quote: "We threw complex AI requirements at them, and they delivered a seamless, scalable solution in weeks, not months.",
        author: "Sarah Wu",
        role: "Director of Product, Nexus AI",
        logo: "🤖"
    },
    {
        quote: "The design team at Codiora operates on another level. They turned our clunky enterprise app into a consumer-grade experience.",
        author: "James Peterson",
        role: "CEO, LogiChain",
        logo: "🚚"
    },
    {
        quote: "Reliability was our #1 concern. Codiora's infrastructure hasn't flinched under millions of daily requests.",
        author: "Maria Gonzalez",
        role: "VP Engineering, HealthPlus",
        logo: "🩺"
    }
];

export default function Testimonials() {
    return (
        <>
            <Head>
                <title>Codiora Tech | Testimonials</title>
            </Head>

            <div className="bg-[#020202] min-h-screen text-white overflow-hidden selection:bg-yellow-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-yellow-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10">
                    <div className="text-center mb-32">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                        >
                            CLIENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">VICTORIES</span>
                        </motion.h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            We don't chase satisfaction; we chase success. Here is what happens when vision meets execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#0a0a0a] border border-white/5 p-12 rounded-[2rem] hover:border-yellow-500/30 transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 text-8xl text-white/5 font-serif select-none">"</div>
                                <div className="text-6xl mb-8 filter grayscale group-hover:grayscale-0 transition-all duration-500">{t.logo}</div>
                                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10 font-medium relative z-10">
                                    "{t.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-yellow-500">
                                        {t.author.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">{t.author}</div>
                                        <div className="text-yellow-500 text-xs font-bold uppercase tracking-widest">{t.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Logo Wall */}
                    <div className="border-t border-white/10 pt-20">
                        <p className="text-center text-gray-500 text-xs font-bold uppercase tracking-widest mb-12">Trusted By Industry Leaders</p>
                        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                            {/* Placeholder Logos */}
                            {['Stripe', 'Vercel', 'Linear', 'Raycast', 'OpenAI'].map((logo) => (
                                <span key={logo} className="text-2xl font-black text-white">{logo}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
