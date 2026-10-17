import Link from 'next/link';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const teamMembers = [
    {
        name: "Asif Mahamud Shaon",
        role: "Founder & CEO",
        img: "/images/team/founder.svg",
        bio: "Visionary architect behind the Codiora ecosystem. Obsessed with scalable systems and pixel-perfect UIs."
    },
    {
        name: "Sarah Jenkins",
        role: "Head of Engineering",
        img: "/images/avatars/avatar-2.svg",
        bio: "Full-stack engineer specializing in distributed cloud systems and AI automation integration."
    },
    {
        name: "David Chen",
        role: "Lead Product Designer",
        img: "/images/avatars/avatar-5.svg",
        bio: "Crafting digital experiences that feel intuitive, elegant, and engineered for high conversion."
    },
    {
        name: "Elena Rodriguez",
        role: "Chief Strategy Officer",
        img: "/images/avatars/avatar-4.svg",
        bio: "Driving global partnerships and ensuring every engineering sprint delivers measurable business ROI."
    }
];

export default function Team() {
    return (
        <>
            <SEO
                title="Our Team | The Engineers & Leaders | Codiora Tech"
                description="Meet the leadership, software engineers, and system architects behind Codiora Tech in Dhaka."
                canonicalPath="/team"
            />

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/10">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10">
                    <div className="mb-8">
                        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Team', href: '/team' }]} />
                    </div>

                    <div className="text-center mb-24">
                        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="inline-block mb-4 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                            Behind The Code
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                        >
                            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">ARCHITECTS</span>
                        </motion.h1>
                        <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                            We are a collective of engineers and designers building reliable, scalable digital solutions.
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
                                <div className="absolute inset-0 bg-gradient-to-t from-teal-600/30 to-cyan-600/30 rounded-3xl blur-[40px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                                <div className="relative bg-white border border-[#122a46]/5 rounded-3xl overflow-hidden hover:translate-y-[-10px] transition-transform duration-500 flex flex-col h-full shadow-2xl">
                                    <div className="h-[280px] overflow-hidden relative border-b border-[#122a46]/5 flex items-center justify-center bg-slate-50">
                                        <img
                                            src={member.img}
                                            alt={`${member.name}, ${member.role} at Codiora Tech`}
                                            width={140}
                                            height={140}
                                            className="w-32 h-32 rounded-full object-cover shadow-lg transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col bg-white relative z-20">
                                        <div className="mb-auto">
                                            <h2 className="text-2xl font-bold text-[#122a46] mb-2">{member.name}</h2>
                                            <div className="text-teal-600 text-xs font-bold uppercase tracking-widest mb-6">{member.role}</div>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                                                {member.bio}
                                            </p>
                                        </div>

                                        {/* Micro Stats */}
                                        <div className="grid grid-cols-2 gap-4 border-t border-[#122a46]/5 pt-6 mb-6">
                                            <div>
                                                <div className="text-xl font-bold text-[#122a46]">5+</div>
                                                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Years Exp.</div>
                                            </div>
                                            <div>
                                                <div className="text-xl font-bold text-[#122a46]">30+</div>
                                                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Projects</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-32 text-center">
                        <p className="text-slate-500 text-sm uppercase tracking-widest mb-6">We are always scouting for talent</p>
                        <h2 className="text-3xl font-bold text-[#122a46] mb-8">Think you have what it takes?</h2>
                        <Link href="/careers">
                            <button className="px-10 py-4 bg-[#122a46] text-white rounded-full font-bold hover:bg-teal-500 hover:text-[#0f172a] transition-all shadow-lg">
                                Join the Team
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
