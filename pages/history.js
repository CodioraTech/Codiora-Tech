import Head from 'next/head';
import { motion } from 'framer-motion';

export default function History() {
    return (
        <>
            <Head>
                <title>Codiora Tech | History</title>
            </Head>
            <section className="min-h-screen bg-[#050505] text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Origins</h1>
                        <p className="text-xl text-gray-400">From a dorm room idea to a global digital powerhouse.</p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto border-l-2 border-white/10 ml-4 md:ml-auto pl-8 md:pl-0 space-y-16">
                        {[
                            { year: "2020", title: "The Inception", desc: "Codiora Tech was founded with a singular vision: to democratize elite-level software engineering." },
                            { year: "2022", title: "Global Expansion", desc: "Opened our first international office and secured partnerships with Fortune 500 innovators." },
                            { year: "2024", title: "AI Revolution", desc: "Launched our proprietary AI engine, shifting our focus to cognitive computing and predictive tech." },
                            { year: "2026", title: "The Future", desc: "Currently architecting the next generation of the decentralized web." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative md:flex items-center gap-10 group"
                            >
                                {/* Dot */}
                                <div className="absolute -left-[41px] md:left-auto md:right-1/2 md:-mr-[5px] w-5 h-5 bg-black border-4 border-gray-600 rounded-full group-hover:border-cyan-500 group-hover:scale-125 transition-all z-10"></div>

                                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-16 text-left' : 'md:order-last md:pl-16 md:text-left'} mb-4 md:mb-0`}>
                                    <span className="text-6xl font-black text-white/5 absolute -top-4 -z-10 select-none group-hover:text-white/10 transition-colors">{item.year}</span>
                                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                                <div className="hidden md:block md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
