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
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-600 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                                <div className="relative bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:translate-y-[-10px] transition-transform duration-500">
                                    <div className="h-[350px] overflow-hidden relative">
                                        <div className="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-transparent transition-colors z-10"></div>
                                        {/* Grayscale to Color hover effect */}
                                        <div
                                            className="w-full h-full bg-cover bg-center filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${member.img})` }}
                                        ></div>
                                    </div>
                                    <div className="p-8 relative z-20 bg-[#0a0a0a]">
                                        <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                                        <div className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">{member.role}</div>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 border-b border-white/5 pb-6">
                                            {member.bio}
                                        </p>
                                        <div className="flex gap-4">
                                            {['twitter', 'linkedin', 'github'].map(social => (
                                                <button key={social} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                                    <span className="sr-only">{social}</span>
                                                    <div className="w-3 h-3 bg-current rounded-full"></div>
                                                </button>
                                            ))}
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
