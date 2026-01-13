import Head from 'next/head';
import { motion } from 'framer-motion';

const leaders = [
    {
        name: "Alex Sterling",
        role: "Chief Executive Officer",
        bio: "Previously led engineering at SpaceX. Built 3 unicorns. Obsessed with scalable systems and heavy metal.",
        superpower: "Visionary Strategy",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop",
        socials: { twitter: "#", linkedin: "#" }
    },
    {
        name: "Sarah Chen",
        role: "Chief Technology Officer",
        bio: "Ex-Google DeepMind researcher. Published 12 papers on Neural Architecture Search. Codes in Rust for fun.",
        superpower: "Deep Tech & AI",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
        socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
        name: "Marcus Thorne",
        role: "Head of Design",
        bio: "Believes UI is a language. His designs have won 4 Apple Design Awards. Minimalist to the core.",
        superpower: "Pixel Perfection",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2000&auto=format&fit=crop",
        socials: { dribbble: "#", linkedin: "#" }
    },
    {
        name: "Elena Rodriguez",
        role: "VP of Operations",
        bio: "The engine that keeps the rocket moving. Master of agile workflows and keeping creatives grounded.",
        superpower: "Operational Velocity",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop",
        socials: { linkedin: "#" }
    }
];

export default function Leadership() {
    return (
        <>
            <Head>
                <title>Codiora Tech | Leadership</title>
            </Head>

            <div className="bg-[#020202] min-h-screen text-white overflow-hidden selection:bg-amber-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[10%] left-[20%] w-[800px] h-[800px] bg-amber-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10">
                    <div className="text-center mb-32">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">
                            The Architects
                        </div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                        >
                            MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">VANGUARD</span>
                        </motion.h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            We are builders, dreamers, and contrarians. We don't just predict the future; we write the code that runs it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {leaders.map((leader, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-amber-500/40 transition-all duration-500"
                            >
                                <div className="aspect-[4/5] md:aspect-[3/2] overflow-hidden relative">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" style={{ backgroundImage: `url(${leader.image})` }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

                                    <div className="absolute bottom-0 left-0 p-10 w-full">
                                        <div className="flex justify-between items-end mb-4">
                                            <div>
                                                <div className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-2">{leader.role}</div>
                                                <h3 className="text-4xl font-black text-white">{leader.name}</h3>
                                            </div>
                                            {/* Social Icons Placeholder */}
                                            <div className="flex gap-4">
                                                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                                                    <span className="text-xs font-bold">IN</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                                            <p className="text-gray-300 text-lg leading-relaxed mb-6 border-t border-white/10 pt-6">
                                                {leader.bio}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500">
                                                <span>⚡ Superpower:</span>
                                                <span className="text-white">{leader.superpower}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-40 text-center">
                        <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-8">Aligned on Values</p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30">
                            {["Obsession", "Velocity", "Simplicity", "Autonomy"].map(v => (
                                <span key={v} className="text-3xl md:text-5xl font-black text-white stroke-text">{v}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
