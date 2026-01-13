import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

const tracks = [
    {
        title: "Frontend Engineering",
        slug: "frontend-engineering",
        icon: "🎨",
        skills: ["React", "UI/UX", "Animation"]
    },
    {
        title: "Backend Systems",
        slug: "backend-systems",
        icon: "⚙️",
        skills: ["API Design", "Database", "Security"]
    },
    {
        title: "AI & Data Science",
        slug: "ai-data-science",
        icon: "🧠",
        skills: ["ML Models", "Python", "Analytics"]
    }
];

export default function Internship() {
    return (
        <>
            <Head>
                <title>Codiora Tech | Intership Program</title>
            </Head>

            <div className="bg-[#020202] min-h-screen text-white overflow-hidden selection:bg-teal-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-32">
                        <div className="max-w-2xl">
                            <div className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-bold uppercase tracking-widest mb-6">
                                Next Gen Talent
                            </div>
                            <motion.h1
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                            >
                                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">INCUBATOR</span>
                            </motion.h1>
                            <p className="text-xl text-gray-400">
                                This is not a coffee-fetcher internship. You will push production code, break things (in dev), and learn from the best engineers in the industry.
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <div className="text-9xl animate-spin-slow opacity-20">⚙️</div>
                        </div>
                    </div>

                    {/* Tracks */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
                        {tracks.map((track, i) => (
                            <Link key={i} href={`/internship/${track.slug}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[2.5rem] hover:bg-white/5 transition-colors group cursor-pointer"
                                >
                                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{track.icon}</div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{track.title}</h3>
                                    <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                                        {track.skills.map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-white/5 rounded-full border border-white/5">{skill}</span>
                                        ))}
                                    </div>
                                    <div className="mt-8 flex items-center gap-2 text-teal-500 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Details <span>→</span>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    {/* Why Apply */}
                    <div className="bg-gradient-to-br from-teal-900/20 to-black border border-teal-500/20 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                        <h2 className="text-4xl font-bold mb-8">Ready to Accelerate Your Career?</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg">
                            We accept less than 2% of applicants. If you have the hunger to learn and the grit to solve hard problems, we want to hear from you.
                        </p>
                        <Link href="/careers-apply">
                            <button className="px-12 py-5 bg-white text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                                Apply for Fall 2025
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}
