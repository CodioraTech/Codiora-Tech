import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const intakes = [
    {
        cohort: "Spring Cohort",
        month: "January",
        badge: "Intake 01",
        dates: "January – April (16 Weeks)",
        focus: "Next.js Core Architecture, Cloud Microservices, High-Performance Frontends",
        tag: "Winter / Spring Batch"
    },
    {
        cohort: "Summer Cohort",
        month: "May",
        badge: "Intake 02",
        dates: "May – August (16 Weeks)",
        focus: "Enterprise AI Agents, LLM RAG Pipelines, Vector DBs & Python Backends",
        tag: "Summer Batch"
    },
    {
        cohort: "Fall Cohort",
        month: "September",
        badge: "Intake 03",
        dates: "September – December (16 Weeks)",
        focus: "Distributed Systems, High-Throughput APIs, Kubernetes & Cloud DevOps",
        tag: "Autumn / Fall Batch"
    }
];

const tracks = [
    {
        title: "Frontend Engineering",
        slug: "frontend-engineering",
        description: "Architect pixel-perfect, accessible, and high-performance user interfaces using React, Next.js, and Framer Motion.",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-600"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>,
        skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]
    },
    {
        title: "Backend Systems",
        slug: "backend-systems",
        description: "Construct scalable microservices, low-latency REST/gRPC endpoints, and optimized database architectures.",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-600"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg>,
        skills: ["Node.js", "Go", "PostgreSQL", "Redis", "REST & gRPC"]
    },
    {
        title: "AI & Data Science",
        slug: "ai-data-science",
        description: "Build cutting-edge AI pipelines, fine-tune models, implement RAG architectures, and harness Vector databases.",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-600"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" /></svg>,
        skills: ["Python", "PyTorch", "LangChain", "Vector DBs", "RAG"]
    },
    {
        title: "Full Stack Developer",
        slug: "full-stack-developer",
        description: "Master the complete software engineering lifecycle from modern frontend interfaces to scalable backend infrastructure.",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-600"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>,
        skills: ["Next.js", "TypeScript", "Node.js", "Prisma", "MongoDB"]
    },
    {
        title: "DevOps Engineer",
        slug: "devops-engineer",
        description: "Automate build pipelines, containerize enterprise apps, and manage cloud infrastructure across AWS and Docker.",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-600"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>,
        skills: ["AWS", "Docker", "CI/CD", "Linux", "Terraform"]
    }
];

const programPerks = [
    {
        title: "Competitive Monthly Stipend",
        desc: "We believe talent deserves fair pay. Every intern receives a guaranteed, prompt monthly stipend with performance bonuses.",
        icon: "💳"
    },
    {
        title: "1-on-1 Senior Mentorship",
        desc: "Pair directly with principal engineers and architects. Weekly code reviews, design critiques, and career roadmap guidance.",
        icon: "🎯"
    },
    {
        title: "Real Production Code",
        desc: "No dummy exercises or synthetic homework. You will ship features to production environments used by real enterprise clients.",
        icon: "🚀"
    },
    {
        title: "Full-Time Conversion Track",
        desc: "High-performing interns receive fast-tracked offers to join Codiora Tech as full-time Junior Software Engineers upon cohort completion.",
        icon: "🏆"
    }
];

const hiringSteps = [
    {
        step: "01",
        title: "Continuous Application",
        desc: "Apply anytime 365 days a year. Send your Resume, GitHub, and live projects directly to our engineering hiring team."
    },
    {
        step: "02",
        title: "Code Challenge",
        desc: "Complete a real-world asynchronous coding assessment designed to evaluate problem-solving and architectural thinking."
    },
    {
        step: "03",
        title: "Technical Deep-Dive",
        desc: "A 45-minute conversation with our technical founders to discuss your code, passions, and engineering mindset."
    },
    {
        step: "04",
        title: "Cohort Onboarding",
        desc: "Receive your formal offer and get matched to the upcoming intake cycle: January, May, or September."
    }
];

export default function Internship() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText('career@codioratech.com');
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        }
    };

    return (
        <>
            <SEO
                title="Engineering Internship Program | Codiora Tech"
                description="Launch your engineering career at Codiora Tech. Paid internship program with 3 annual intakes in January, May, and September. Applications always open."
                canonicalPath="/internship"
            />

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/30">
                {/* Background Ambient Glow */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[160px] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-36 sm:pt-40 md:pt-44 pb-32 relative z-10">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Internship', href: '/internship' }]} />

                    {/* Hero Section */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 mb-20 mt-6">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Applications Always Open • 3 Annual Intakes
                            </div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-[#122a46] leading-[1.08]"
                            >
                                THE ENGINEERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700">INCUBATOR</span>
                            </motion.h1>

                            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                                We don&apos;t do coffee-run internships. From week two, you will architect production-grade software, break things in staging, and learn directly from staff architects.
                            </p>

                            {/* Fast Metric Strip */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-200">
                                <div>
                                    <span className="text-2xl sm:text-3xl font-black text-teal-700 block">3x / Yr</span>
                                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Hiring Cycles</span>
                                </div>
                                <div>
                                    <span className="text-2xl sm:text-3xl font-black text-emerald-700 block">100%</span>
                                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Paid Stipend</span>
                                </div>
                                <div>
                                    <span className="text-2xl sm:text-3xl font-black text-[#122a46] block">1-on-1</span>
                                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Staff Mentorship</span>
                                </div>
                                <div>
                                    <span className="text-2xl sm:text-3xl font-black text-teal-700 block">80%+</span>
                                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Full-Time Hire</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Action Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full lg:w-96 bg-white border border-teal-500/20 rounded-3xl p-7 shadow-xl shadow-teal-500/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />

                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Status</span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-300">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    Always Open
                                </span>
                            </div>

                            <h3 className="text-xl font-black text-[#122a46] mb-2">Rolling Admissions</h3>
                            <p className="text-xs text-slate-600 leading-relaxed mb-6">
                                Applications are reviewed continuously. Apply now to secure placement in our next cohort intake.
                            </p>

                            <div className="space-y-2 mb-6">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Next Upcoming Intakes:</div>
                                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                                    <span className="font-bold text-[#122a46]">🌸 Spring Cohort</span>
                                    <span className="font-extrabold text-teal-700">January</span>
                                </div>
                                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                                    <span className="font-bold text-[#122a46]">☀️ Summer Cohort</span>
                                    <span className="font-extrabold text-teal-700">May</span>
                                </div>
                                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                                    <span className="font-bold text-[#122a46]">🍂 Fall Cohort</span>
                                    <span className="font-extrabold text-teal-700">September</span>
                                </div>
                            </div>

                            <a
                                href="mailto:career@codioratech.com?subject=Internship%20Application%20-%20[Your%20Track]%20-%20[Your%20Name]"
                                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-teal-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span>Apply for Internship</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </a>
                        </motion.div>
                    </div>

                    {/* Section: The 3 Annual Cohort Intakes */}
                    <div className="mb-28">
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <div className="inline-block px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-700 text-xs font-bold uppercase tracking-widest mb-3">
                                Annual Hiring Schedule
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#122a46] tracking-tight">
                                3 Cohort Intakes Every Year
                            </h2>
                            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                                We recruit new engineering batches 3 times annually. You can submit your application at any time; qualified candidates are placed in the next available intake.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {intakes.map((intake, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white border border-slate-200/90 rounded-3xl p-8 hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-500/10 transition-all group flex flex-col justify-between relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-teal-500/10 to-transparent rounded-bl-full pointer-events-none" />

                                    <div>
                                        <div className="flex items-center justify-between mb-5">
                                            <span className="text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200/60">
                                                {intake.badge}
                                            </span>
                                            <span className="text-xs font-bold text-slate-400">
                                                {intake.tag}
                                            </span>
                                        </div>

                                        <div className="mb-4">
                                            <span className="text-xs font-extrabold text-teal-600 uppercase tracking-widest block">Intake Month</span>
                                            <h3 className="text-3xl font-black text-[#122a46] tracking-tight mt-0.5">
                                                {intake.month}
                                            </h3>
                                            <span className="text-sm font-bold text-slate-500 block mt-1">
                                                {intake.cohort} • {intake.dates}
                                            </span>
                                        </div>

                                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600 leading-relaxed mb-6">
                                            <strong className="font-bold text-[#122a46] block mb-1">Key Curriculum Focus:</strong>
                                            {intake.focus}
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                            Applications Open
                                        </span>
                                        <a
                                            href={`mailto:career@codioratech.com?subject=Internship%20Application%20-%20${encodeURIComponent(intake.month)}%20Cohort`}
                                            className="text-xs font-extrabold text-teal-600 hover:text-teal-700 group-hover:translate-x-1 transition-all flex items-center gap-1"
                                        >
                                            Apply for {intake.month} →
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Section: 5 Specialized Tracks */}
                    <div className="mb-28">
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <div className="inline-block px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-700 text-xs font-bold uppercase tracking-widest mb-3">
                                Specialization Tracks
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#122a46] tracking-tight">
                                Choose Your Engineering Track
                            </h2>
                            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                                Pick the track that aligns with your technical ambition. All tracks run concurrently across our January, May, and September cohorts.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {tracks.map((track, i) => (
                                <Link key={i} href={`/internship/${track.slug}`} legacyBehavior>
                                    <a className="block group">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.08 }}
                                            className="bg-white border border-slate-200/90 p-8 rounded-3xl hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/10 transition-all h-full flex flex-col justify-between group-hover:-translate-y-1"
                                        >
                                            <div>
                                                <div className="flex items-center justify-between mb-6">
                                                    <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                                                        {track.svg}
                                                    </div>
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-300">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                        Always Open
                                                    </span>
                                                </div>

                                                <h3 className="text-2xl font-bold text-[#122a46] mb-3 group-hover:text-teal-700 transition-colors">
                                                    {track.title}
                                                </h3>

                                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                                    {track.description}
                                                </p>

                                                <div className="flex flex-wrap gap-1.5 mb-6">
                                                    {track.skills.map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="text-xs font-semibold px-2.5 py-1 bg-slate-50 text-slate-600 rounded-lg border border-slate-200/60"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                                                <span className="text-slate-400 uppercase tracking-widest text-[10px]">3 Intakes / Year</span>
                                                <span className="text-teal-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                                    View Curriculum & Apply →
                                                </span>
                                            </div>
                                        </motion.div>
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Section: Why Codiora Incubator */}
                    <div className="mb-28">
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <div className="inline-block px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-700 text-xs font-bold uppercase tracking-widest mb-3">
                                The Codiora Advantage
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#122a46] tracking-tight">
                                What Makes Our Internship Different
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {programPerks.map((perk, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-slate-200/80 rounded-3xl p-7 hover:border-teal-500/30 hover:shadow-lg transition-all"
                                >
                                    <div className="text-3xl mb-4">{perk.icon}</div>
                                    <h4 className="text-lg font-bold text-[#122a46] mb-2">{perk.title}</h4>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{perk.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section: Transparent Hiring Steps */}
                    <div className="mb-28">
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <div className="inline-block px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-700 text-xs font-bold uppercase tracking-widest mb-3">
                                Application Journey
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#122a46] tracking-tight">
                                How We Evaluate & Onboard
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {hiringSteps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-slate-200/80 rounded-3xl p-7 relative space-y-3"
                                >
                                    <span className="text-4xl font-black text-teal-600/30 block">
                                        {step.step}
                                    </span>
                                    <h4 className="text-lg font-bold text-[#122a46]">{step.title}</h4>
                                    <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Heroic CTA: Year-Round Application Card */}
                    <div className="bg-gradient-to-br from-white via-slate-50 to-teal-50/30 border border-teal-500/20 rounded-[3rem] p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-teal-500/10">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600"></div>
                        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Accepting Applications 365 Days a Year
                        </div>

                        <h2 className="text-3xl sm:text-5xl font-black text-[#122a46] tracking-tight mb-6 max-w-3xl mx-auto">
                            Ready to Build Software That Actually Matters?
                        </h2>

                        <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
                            We recruit interns 3 times a year in <strong>January</strong>, <strong>May</strong>, and <strong>September</strong>. Send us your resume, GitHub profile, and a note about what you want to master.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                            <a
                                href="mailto:career@codioratech.com?subject=Internship%20Application%20-%20[Your%20Track]%20-%20[Your%20Name]"
                                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 hover:from-teal-500 hover:to-emerald-600 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-teal-600/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                            >
                                <span>Apply via Email Now</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </a>

                            <button
                                onClick={handleCopyEmail}
                                type="button"
                                className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-slate-50 border border-teal-200 text-[#122a46] font-bold text-sm rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2"
                            >
                                <span>{copied ? '✓ Copied Email' : 'Copy career@codioratech.com'}</span>
                            </button>
                        </div>

                        <div className="mt-8 text-xs text-slate-500 flex items-center justify-center gap-6 flex-wrap">
                            <span>3 Annual Cohorts: Jan, May, Sep</span>
                            <span>•</span>
                            <span>100% Paid Stipend</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
