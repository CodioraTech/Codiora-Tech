import Head from 'next/head';
import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: "Asif Mahamud Shaon",
        role: "Founder & CEO",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop", // Placeholder
        bio: "Visionary architect behind the Codiora ecosystem. Obsessed with scalable systems and pixel-perfect UIs."
    },
    {
        name: "Sarah Jenkins",
        role: "Head of Engineering",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
        bio: "Full-stack sorceress specializing in distributed systems and AI integration."
    },
    {
        name: "David Chen",
        role: "Lead Product Designer",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
        bio: "Crafting digital experiences that feel like magic. Minimalist by design, maximalist by impact."
    },
    {
        name: "Elena Rodriguez",
        role: "Chief Strategy Officer",
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
        bio: "Driving global partnerships and ensuring every project delivers measurable ROI."
    }
];

export default function Team() {
    return (
        <>
            <Head>
                <title>Codiora Tech | The Team</title>
            </Head>

            <div className="bg-[#020202] min-h-screen text-white overflow-hidden selection:bg-purple-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10">
                    <div className="text-center mb-32">
                        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gray-700 bg-gray-800/50 text-gray-300 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                            Behind The Code
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                        >
                            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">ARCHITECTS</span>
                        </motion.h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            We are a collective of dreamers, doers, and disruptors. We don't just write code; we author the future.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-blue-600/50 rounded-3xl blur-[40px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                                <div className="relative bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:translate-y-[-10px] transition-transform duration-500 flex flex-col h-full shadow-2xl">
                                    <div className="h-[320px] overflow-hidden relative border-b border-white/5">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-60"></div>
                                        {/* Grayscale to Color hover effect */}
                                        <div
                                            className="w-full h-full bg-cover bg-center filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${member.img})` }}
                                        ></div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col bg-[#0a0a0a] relative z-20">
                                        <div className="mb-auto">
                                            <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-xs font-bold uppercase tracking-widest mb-6">{member.role}</div>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                                                {member.bio}
                                            </p>
                                        </div>

                                        {/* Micro Stats */}
                                        <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6 mb-6">
                                            <div>
                                                <div className="text-xl font-bold text-white">10+</div>
                                                <div className="text-[10px] uppercase tracking-wider text-gray-600 font-bold">Years Exp.</div>
                                            </div>
                                            <div>
                                                <div className="text-xl font-bold text-white">50+</div>
                                                <div className="text-[10px] uppercase tracking-wider text-gray-600 font-bold">Projects</div>
                                            </div>
                                        </div>

                                        <div className="flex gap-3 mt-auto">
                                            {/* LinkedIn */}
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                            </a>
                                            {/* X / Twitter */}
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-black hover:border-gray-500 transition-all duration-300">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-40 text-center">
                        <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">We are always scouting for talent</p>
                        <h2 className="text-3xl font-bold text-white mb-8">Think you have what it takes?</h2>
                        <button onClick={() => window.location.href = '/careers'} className="px-10 py-4 border border-white/30 rounded-full font-bold hover:bg-white hover:text-black transition-all">
                            Join the Team
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
