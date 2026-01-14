import Head from 'next/head';
import { motion } from 'framer-motion';

const philosophy = [
    {
        title: "Radical Transparency",
        desc: "We believe information belongs to everyone. No silos, no secrets. Hard truths are better than comfortable lies."
    },
    {
        title: "First Principles Thinking",
        desc: "We don't copy; we deconstruct. Every decision starts from the fundamental truths, not 'industry standards'."
    },
    {
        title: "Obsessive Craftsmanship",
        desc: "Good enough is the enemy of great. We iterate until it feels like magic. Details are not details; they make the product."
    },
    {
        title: "Bias for Action",
        desc: "Speed matters. We prefer a wrong decision made quickly over a 'perfect' decision made too late. We learn by doing."
    }
];

const leaders = [
    {
        name: "Asif Mahamud Shaon",
        role: "Founder & CEO",
        bio: "The visionary architect of the Codiora ecosystem. Asif combines deep technical prowess with a relentless drive for perfection. He leads by code, ensuring every system is scalable, secure, and aesthetic.",
        superpower: "System Architecture",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
        socials: { linkedin: "#", twitter: "#" }
    },
    {
        name: "Sarah Jenkins",
        role: "Head of Engineering",
        bio: "An engineering leader who treats code as art. Sarah empowers autonomy, pushing her team to solve impossible problems with elegant, simple solutions.",
        superpower: "Distributed Systems",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
        socials: { linkedin: "#" }
    },
    {
        name: "David Chen",
        role: "Lead Product Designer",
        bio: "David translates complex logic into intuitive emotions. He believes that if a user needs a manual, the design is broken.",
        superpower: "User Empathy",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
        socials: { linkedin: "#", twitter: "#" }
    }
];

export default function Leadership() {
    return (
        <>
            <Head>
                <title>Codiora Tech | Leadership & Philosophy</title>
                <meta name="description" content="How we lead, how we work, and the minds behind the machine." />
            </Head>

            <div className="bg-[#020202] min-h-screen text-white overflow-hidden selection:bg-purple-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10">

                    {/* Hero Section */}
                    <section className="text-center mb-40">
                        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="inline-block mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                            The Operating System
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                        >
                            ENGINEERING <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">LEADERSHIP</span>
                        </motion.h1>
                        <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-400 leading-relaxed font-light">
                            <p>
                                At Codiora Tech, leadership is not a title; it is an activity.
                                It’s about setting a standard so high it scares people, and then helping them reach it.
                            </p>
                            <p>
                                We don't manage people. We manage work. We lead by context, not control.
                                We build systems that allow creativity to flourish within constraints.
                            </p>
                        </div>
                    </section>

                    {/* The Philosophy Grid (How We Work) */}
                    <section className="mb-40">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-white mb-4">Our Core Philosophy</h2>
                            <p className="text-gray-500 uppercase tracking-widest text-sm">The Code of Conduct</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {philosophy.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group p-10 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.07] hover:border-purple-500/30 transition-all duration-500"
                                >
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Operational Model (How It Happens) */}
                    <section className="mb-40 relative rounded-[3rem] overflow-hidden bg-[#0a0a0a] border border-white/10 p-12 md:p-24">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/10 pointer-events-none" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                                    The <span className="text-cyan-400">Rhythm</span> of Business.
                                </h2>
                                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                    We operate in high-intensity sprints followed by strategic recharge periods.
                                    Our operational model is designed to minimize bureaucracy and maximize flow state.
                                </p>
                                <ul className="space-y-6">
                                    {[
                                        "Synchronous Sprints: Monday - Wednesday (Deep Work)",
                                        "Strategic Alignment: Thursday (Review & Plan)",
                                        "Creative Hack Days: Friday (Experimentation)",
                                        "No-Meeting Zones: 10am - 2pm Daily"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-gray-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative h-[400px] w-full bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden group">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
                                <div className="text-center">
                                    <div className="text-6xl font-black text-white/10 group-hover:text-cyan-500/20 transition-colors duration-500">FLOW</div>
                                    <div className="text-6xl font-black text-white/10 group-hover:text-purple-500/20 transition-colors duration-500 delay-100">STATE</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* The Leaders (Who) */}
                    <section>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-white mb-4">The Architects</h2>
                            <p className="text-gray-500 uppercase tracking-widest text-sm">Those who pave the path</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {leaders.map((leader, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="relative bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:translate-y-[-10px] transition-transform duration-500 flex flex-col h-full hover:shadow-2xl hover:shadow-purple-900/20">
                                        <div className="h-[400px] overflow-hidden relative">
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-80" />
                                            <div
                                                className="w-full h-full bg-cover bg-center filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                                style={{ backgroundImage: `url(${leader.image})` }}
                                            />
                                            <div className="absolute bottom-6 left-6 z-20">
                                                <h3 className="text-3xl font-bold text-white mb-1">{leader.name}</h3>
                                                <div className="text-cyan-400 text-xs font-bold uppercase tracking-widest">{leader.role}</div>
                                            </div>
                                        </div>
                                        <div className="p-8 flex-1 bg-[#0a0a0a] relative z-20 border-t border-white/5">
                                            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                                                {leader.bio}
                                            </p>
                                            <div className="flex gap-4">
                                                {/* LinkedIn */}
                                                <a href={leader.socials.linkedin} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                                </a>
                                                {/* Twitter */}
                                                {leader.socials.twitter && (
                                                    <a href={leader.socials.twitter} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-black hover:border-gray-500 transition-all">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="mt-40 text-center">
                        <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">Join the Revolution</p>
                        <h2 className="text-3xl font-bold text-white mb-8">Lead from where you are.</h2>
                        <button onClick={() => window.location.href = '/careers'} className="px-10 py-4 border border-white/30 rounded-full font-bold hover:bg-white hover:text-black transition-all">
                            View Open Roles
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}
