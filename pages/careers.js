import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

const jobs = [
    {
        title: "Senior Full Stack Engineer",
        dept: "Engineering",
        loc: "Remote",
        type: "Full-time",
        link: "/careers-apply"
    },
    {
        title: "Product Designer (UI/UX)",
        dept: "Design",
        loc: "Remote (APAC)",
        type: "Full-time",
        link: "/careers-apply"
    },
    {
        title: "Growth Marketing Lead",
        dept: "Marketing",
        loc: "London / Remote",
        type: "Contract",
        link: "/careers-apply"
    },
    {
        title: "AI Research Scientist",
        dept: "R&D",
        loc: "San Francisco",
        type: "Full-time",
        link: "/careers-apply"
    }
];

export default function Careers() {
    return (
        <>
            <Head>
                <title>Codiora Tech | Careers</title>
            </Head>

            <div className="bg-[#020202] min-h-screen text-white overflow-hidden selection:bg-green-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[0%] left-[20%] w-[600px] h-[600px] bg-green-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10">
                    <div className="text-center mb-24">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                        >
                            JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">VANGUARD</span>
                        </motion.h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            We are building the systems that power the next generation of the web. If you want to build safe, boring software, do not apply.
                        </p>
                    </div>

                    {/* Open Roles List */}
                    <div className="max-w-5xl mx-auto space-y-4">
                        <div className="flex justify-between items-center text-xs font-bold text-gray-500 uppercase tracking-widest px-8 mb-4">
                            <span>Role</span>
                            <span className="hidden md:block">Details</span>
                        </div>

                        {jobs.map((job, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-green-500/50 transition-all hover:bg-white/5"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">{job.title}</h3>
                                    <div className="flex gap-4 text-sm text-gray-400 md:hidden">
                                        <span>{job.dept}</span>
                                        <span>•</span>
                                        <span>{job.loc}</span>
                                    </div>
                                </div>

                                <div className="hidden md:flex gap-8 text-gray-400 font-medium">
                                    <span className="w-32">{job.dept}</span>
                                    <span className="w-40">{job.loc}</span>
                                    <span className="w-24 text-right">{job.type}</span>
                                </div>

                                <Link href={job.link}>
                                    <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-green-500 hover:text-black hover:border-green-500 font-bold transition-all whitespace-nowrap">
                                        Apply Now
                                    </button>
                                </Link>
                            </motion.div>
                        ))}
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
                                <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/5">
                                    <h3 className="text-xl font-bold text-white mb-3">{perk.title}</h3>
                                    <p className="text-gray-400 text-sm">{perk.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
