import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const teamMembers = [
    {
        id: 1,
        name: "Asif Mahamud Shaon",
        role: "Founder & Chief Software Architect",
        department: "Leadership",
        img: "/images/founder/founder.webp",
        bio: "Visionary architect steering Codiora's engineering ecosystem. Specializes in distributed cloud systems, multi-agent AI pipelines, and high-performance web applications.",
        skills: ["Next.js", "System Architecture", "Python FastAPI", "AI Systems"],
        stats: { exp: "6+ Yrs", projects: "45+", impact: "99.9% SLA" }
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Head of Engineering",
        department: "Engineering",
        img: "/images/avatars/avatar-2.webp",
        bio: "Cloud-native systems expert driving Codiora's microservices and infrastructure reliability. Passionate about concurrent backend pipelines and zero-downtime CI/CD.",
        skills: ["Go", "Kubernetes", "PostgreSQL", "Cloud Architecture"],
        stats: { exp: "8+ Yrs", projects: "50+", impact: "Zero Downtime" }
    },
    {
        id: 3,
        name: "David Chen",
        role: "Lead Product Designer",
        department: "Product & AI",
        img: "/images/avatars/avatar-5.webp",
        bio: "Translates complex system architectures into elegant, human-centric user experiences. Expert in high-converting design systems, micro-interactions, and 3D web interfaces.",
        skills: ["Figma", "Design Systems", "UX Strategy", "Interactive Prototyping"],
        stats: { exp: "6+ Yrs", projects: "35+", impact: "95+ Usability" }
    },
    {
        id: 4,
        name: "Elena Rodriguez",
        role: "VP of Strategic Partnerships",
        department: "Leadership",
        img: "/images/avatars/avatar-4.webp",
        bio: "Aligns engineering capabilities with enterprise growth. Manages global technology alliances and ensures every sprint directly accelerates client market share.",
        skills: ["Tech Alliances", "SaaS Growth", "Client Strategy", "Global Delivery"],
        stats: { exp: "7+ Yrs", projects: "60+", impact: "98% Retention" }
    },
    {
        id: 5,
        name: "Marcus Vance",
        role: "Staff AI & Machine Learning Engineer",
        department: "Product & AI",
        img: "/images/avatars/avatar-1.webp",
        bio: "Builds enterprise AI workflows, retrieval-augmented generation (RAG) pipelines, and autonomous agent loops using state-of-the-art open-source and commercial foundation models.",
        skills: ["PyTorch", "LangChain", "Vector DBs", "Model Fine-tuning"],
        stats: { exp: "5+ Yrs", projects: "30+", impact: "<120ms Inference" }
    },
    {
        id: 6,
        name: "Tanya Patel",
        role: "Lead Data & Automation Engineer",
        department: "Engineering",
        img: "/images/avatars/avatar-3.webp",
        bio: "Architect of Codiora's high-throughput web scraping cluster and real-time ETL pipelines. Master of headless browser pools and automated anomaly detection.",
        skills: ["Playwright", "Distributed Scraping", "Redis", "Kafka"],
        stats: { exp: "5+ Yrs", projects: "40+", impact: "10M+ Records/Day" }
    }
];

const engineeringStandards = [
    {
        title: "Peer-Audited Code Standard",
        desc: "Every single line of production code passes through two senior peer reviews and automated static security analysis before deployment.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        )
    },
    {
        title: "End-to-End Ownership",
        desc: "Our engineers own features from concept and system design to infrastructure deployment, telemetry monitoring, and performance tuning.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        )
    },
    {
        title: "Zero Tech Debt Culture",
        desc: "We dedicate 20% of every sprint cycle to refactoring, benchmarking, dependency upgrades, and security hardening.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        )
    },
    {
        title: "Transparent Sprint Cadence",
        desc: "Weekly demo recordings, staging environment previews, and direct Slack integration with the core developers building your platform.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
        )
    }
];

export default function Team() {
    const [selectedDepartment, setSelectedDepartment] = useState("All");

    const filteredMembers = selectedDepartment === "All"
        ? teamMembers
        : teamMembers.filter(m => m.department === selectedDepartment);

    return (
        <>
            <SEO
                title="Our Engineering Team & Architects | Codiora Tech"
                description="Meet the software engineers, system architects, and technical leaders behind Codiora Tech's scalable cloud and AI platforms."
                canonicalPath="/team"
            />

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/20">
                {/* Ambient Background */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
                </div>

                <div className="container mx-auto px-6 pt-36 sm:pt-40 md:pt-44 pb-32 relative z-10">
                    <div className="mb-6">
                        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Team', href: '/team' }]} />
                    </div>

                    {/* Hero Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-widest backdrop-blur-sm"
                        >
                            The People Behind The Code
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-[#122a46]"
                        >
                            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">ARCHITECTS</span>
                        </motion.h1>
                        <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                            A specialized collective of senior software engineers, system designers, and AI specialists based in Dhaka, building production-grade digital infrastructure for global scale.
                        </p>
                    </div>

                    {/* Department Filter Pills */}
                    <div className="flex justify-center gap-3 mb-16 flex-wrap">
                        {["All", "Leadership", "Engineering", "Product & AI"].map((dept) => (
                            <button
                                key={dept}
                                type="button"
                                onClick={() => setSelectedDepartment(dept)}
                                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${selectedDepartment === dept
                                    ? 'bg-[#122a46] text-white shadow-lg shadow-[#122a46]/20'
                                    : 'bg-white border border-[#122a46]/10 text-slate-600 hover:border-teal-500 hover:text-teal-600'
                                    }`}
                            >
                                {dept}
                            </button>
                        ))}
                    </div>

                    {/* Team Members Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
                        <AnimatePresence>
                            {filteredMembers.map((member, i) => (
                                <motion.div
                                    key={member.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="group relative bg-white border border-[#122a46]/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-teal-500/40 transition-all duration-500 flex flex-col justify-between"
                                >
                                    {/* Top Profile Header */}
                                    <div className="p-8 pb-4">
                                        <div className="flex items-center gap-5 mb-6">
                                            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-teal-500/30 flex-shrink-0 bg-slate-100 shadow-md">
                                                <img
                                                    src={member.img}
                                                    alt={`${member.name}, ${member.role}`}
                                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-bold text-teal-600 bg-teal-500/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                                                    {member.department}
                                                </span>
                                                <h2 className="text-xl font-bold text-[#122a46] mt-2 group-hover:text-teal-600 transition-colors">
                                                    {member.name}
                                                </h2>
                                                <p className="text-xs text-slate-500 font-medium">
                                                    {member.role}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                            {member.bio}
                                        </p>

                                        {/* Skill Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {member.skills.map((skill, sIdx) => (
                                                <span
                                                    key={sIdx}
                                                    className="text-[11px] font-mono px-2.5 py-1 bg-[#122a46]/5 text-[#122a46] rounded-md border border-[#122a46]/5"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Micro Stats Footer */}
                                    <div className="grid grid-cols-3 gap-2 border-t border-[#122a46]/5 bg-slate-50/80 px-6 py-4 text-center">
                                        <div>
                                            <div className="text-sm font-black text-[#122a46]">{member.stats.exp}</div>
                                            <div className="text-[10px] text-slate-400 uppercase font-semibold">Experience</div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-black text-[#122a46]">{member.stats.projects}</div>
                                            <div className="text-[10px] text-slate-400 uppercase font-semibold">Builds</div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-black text-teal-600">{member.stats.impact}</div>
                                            <div className="text-[10px] text-slate-400 uppercase font-semibold">Impact</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Engineering Standards Bar */}
                    <div className="mb-28">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">How We Work</span>
                            <h2 className="text-3xl md:text-5xl font-black text-[#122a46] mt-2 tracking-tight">
                                Our Engineering Bar
                            </h2>
                            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-3">
                                We don't hire junior warm-bodies for client contracts. Every project is built by senior contributors with high standards.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {engineeringStandards.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="p-8 rounded-2xl bg-white border border-[#122a46]/10 hover:shadow-xl hover:border-teal-500/30 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#122a46] mb-3">{item.title}</h3>
                                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* High-Converting CTA Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl bg-[#0f172a] text-white p-10 md:p-16 relative overflow-hidden shadow-2xl border border-slate-800"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
                        <div className="relative z-10 max-w-3xl">
                            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest bg-teal-950/80 border border-teal-800 px-3 py-1 rounded-full inline-block mb-6">
                                Direct Engineering Access
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                                Want to work directly with our architects?
                            </h2>
                            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                                Skip the sales middlemen. Schedule a technical deep-dive call with our founder and lead engineers to evaluate your product roadmap, tech stack, and scalability plan.
                            </p>
                            <div className="flex flex-wrap gap-4 items-center">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-teal-500 text-slate-950 font-bold rounded-full hover:bg-teal-400 hover:scale-105 transition-all shadow-lg"
                                >
                                    Schedule Tech Consult
                                </Link>
                                <Link
                                    href="/careers"
                                    className="px-8 py-4 border border-slate-700 text-white font-bold rounded-full hover:bg-white/10 transition-all"
                                >
                                    Join The Collective
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
