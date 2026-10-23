import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { motion } from 'framer-motion';
import Link from 'next/link';

const jobs = [
    {
        title: "Senior Full Stack Engineer",
        slug: "senior-full-stack-engineer",
        dept: "Engineering",
        loc: "Remote",
        type: "Full-time",
        status: "open"
    },
    {
        title: "Product Designer (UI/UX)",
        slug: "product-designer",
        dept: "Design",
        loc: "Remote (APAC)",
        type: "Full-time",
        status: "open"
    },
    {
        title: "AI-Integrated Full-Stack Engineer",
        slug: "ai-integrated-full-stack-engineer",
        dept: "Engineering & AI Labs",
        loc: "Dhaka, Bangladesh (Hybrid)",
        type: "Full-time",
        status: "closed"
    },
    {
        title: "Growth Marketing Lead",
        slug: "growth-marketing-lead",
        dept: "Marketing",
        loc: "London / Remote",
        type: "Contract",
        status: "closed"
    },
    {
        title: "AI Research Scientist",
        slug: "ai-research-scientist",
        dept: "R&D",
        loc: "San Francisco",
        type: "Full-time",
        status: "closed"
    }
];

export default function Careers() {
    return (
        <>
            <SEO
                title="Careers & Engineering Roles | Codiora Tech"
                description="Explore open engineering, design, and AI automation roles at Codiora Tech. Join our modern software engineering team."
                canonicalPath="/careers"
            />

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-green-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[0%] left-[20%] w-[600px] h-[600px] bg-green-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-36 sm:pt-40 md:pt-44 pb-40 relative z-10">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Careers', href: '/careers' }]} />

                    <div className="text-center mb-24 mt-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                        >
                            JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">VANGUARD</span>
                        </motion.h1>
                        <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                            We are building the systems that power the next generation of the web. If you want to build safe, boring software, do not apply.
                        </p>
                    </div>

                    {/* Open Roles List */}
                    <div className="max-w-5xl mx-auto space-y-4">
                        {/* Status Alert Banner */}
                        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-start sm:items-center justify-between gap-4 text-emerald-950 mb-6 shadow-sm">
                            <div className="flex items-center gap-3.5">
                                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                                <div className="text-sm">
                                    <strong className="font-bold text-emerald-900">Actively Hiring (2 Open Roles):</strong> We are actively accepting applications for <strong className="underline decoration-emerald-500 underline-offset-2">Senior Full Stack Engineer</strong> and <strong className="underline decoration-emerald-500 underline-offset-2">Product Designer (UI/UX)</strong> with direct architect review.
                                </div>
                            </div>
                            <span className="hidden sm:inline-flex text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-emerald-200/60 text-emerald-900 rounded-full shrink-0">
                                Open Positions
                            </span>
                        </div>

                        <div className="flex justify-between items-center text-xs font-bold text-slate-500 uppercase tracking-widest px-8 mb-4">
                            <span>Role</span>
                            <span className="hidden md:block">Details</span>
                        </div>

                        {jobs.map((job, i) => {
                            const isOpen = job.status === "open";
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`group bg-white border p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 transition-all ${
                                        isOpen 
                                            ? 'border-emerald-500/30 hover:border-emerald-500 shadow-sm hover:shadow-lg hover:shadow-emerald-500/5 bg-gradient-to-r from-white via-white to-emerald-50/20' 
                                            : 'border-[#122a46]/5 hover:border-slate-300 hover:bg-slate-50/50'
                                    }`}
                                >
                                    <div>
                                        <div className="flex items-center gap-2.5 mb-2">
                                            <Link href={`/careers/${job.slug}`} legacyBehavior>
                                                <a className="block">
                                                    <h3 className={`text-2xl font-bold transition-colors ${isOpen ? 'text-[#122a46] group-hover:text-teal-600' : 'text-[#122a46] hover:text-teal-600'}`}>
                                                        {job.title}
                                                    </h3>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="flex gap-4 text-sm text-slate-500 md:hidden">
                                            <span>{job.dept}</span>
                                            <span>•</span>
                                            <span>{job.loc}</span>
                                        </div>
                                    </div>

                                    <div className="hidden md:flex gap-8 text-slate-500 font-medium">
                                        <span className="w-32">{job.dept}</span>
                                        <span className="w-40">{job.loc}</span>
                                        <span className="w-24 text-right">{job.type}</span>
                                    </div>

                                    <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                                        {isOpen ? (
                                            <>
                                                <span className="px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 font-bold text-xs uppercase tracking-wider whitespace-nowrap inline-flex items-center gap-2 shadow-sm">
                                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                                    Actively Hiring
                                                </span>
                                                <Link href={`/careers/${job.slug}`} legacyBehavior>
                                                    <a className="px-5 py-2 rounded-full bg-[#122a46] hover:bg-teal-600 text-white font-bold text-xs tracking-wider uppercase transition-all whitespace-nowrap inline-block text-center shadow-sm hover:shadow-teal-500/20">
                                                        Apply Now →
                                                    </a>
                                                </Link>
                                            </>
                                        ) : (
                                            <>
                                                <span className="px-4 py-2 rounded-full border border-slate-200 bg-slate-100 text-slate-400 font-bold text-xs uppercase tracking-wider cursor-not-allowed whitespace-nowrap inline-flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                                                    Talent Pool
                                                </span>
                                                <Link href={`/careers/${job.slug}`} legacyBehavior>
                                                    <a className="px-5 py-2 rounded-full border border-[#122a46]/10 hover:border-teal-500/40 hover:bg-white text-slate-600 hover:text-[#122a46] font-bold text-xs tracking-wider uppercase transition-all whitespace-nowrap inline-block text-center">
                                                        View Role
                                                    </a>
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Direct Email Callout Banner */}
                        <div className="mt-8 p-6 bg-slate-50 border border-[#122a46]/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                            <div>
                                <h4 className="font-bold text-[#122a46] text-base">Don't see your role open right now?</h4>
                                <p className="text-slate-500 text-sm mt-0.5">We are always looking for extraordinary talent. Email your resume directly to us.</p>
                            </div>
                            <a href="mailto:career@codioratech.com" className="px-6 py-2.5 rounded-full bg-teal-500 text-white font-bold text-sm hover:bg-teal-400 transition-colors whitespace-nowrap shadow-sm">
                                Email career@codioratech.com
                            </a>
                        </div>
                    </div>

                    {/* Perks Grid */}
                    <div className="max-w-6xl mx-auto mt-40">
                        <h2 className="text-3xl font-bold text-center mb-16">Why Build With Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Work From Anywhere", desc: "We are a distributed team. Your office is wherever you have wifi." },
                                { title: "Top 1% Compensation", desc: "We pay top of market. We want the best, so we pay for the best." },
                                { title: "Learning Budget", desc: "$5,000/yr to spend on courses, conferences, or books." },
                                { title: "Health & Wellness", desc: "Comprehensive insurance + $200/mo wellness stipend." },
                                { title: "Equity for All", desc: "Every employee owns a piece of the company. When we win, you win." },
                                { title: "MacBook Pro", desc: "Latest M3 MAX chips for everyone. No slow builds allowed." }
                            ].map((perk, i) => (
                                <div key={i} className="p-8 bg-[#122a46]/5 rounded-3xl border border-[#122a46]/5">
                                    <h3 className="text-xl font-bold text-[#122a46] mb-3">{perk.title}</h3>
                                    <p className="text-slate-500 text-sm">{perk.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
