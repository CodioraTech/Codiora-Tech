import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

const modules = [
    { title: "Frontend Mastery", week: "Weeks 1-4", desc: "HTML5, CSS3, ES6+, React, TailwindCSS. You will build clones of Netflix and Spotify." },
    { title: "Backend Systems", week: "Weeks 5-8", desc: "Node.js, Express, PostgreSQL, Prisma. Design REST APIs and handle authentication." },
    { title: "Full Stack & DevOps", week: "Weeks 9-12", desc: "Docker, CI/CD, AWS, Next.js. Deploy your capstone project to the cloud." }
];

const plans = [
    { name: "Auditor", price: "Free", perks: ["Access to curriculum", "Discord Community", "Weekly Webinars"] },
    { name: "Pro Cohort", price: "$499", popular: true, perks: ["Live Mentorship (2x/week)", "Code Reviews", "Career Coaching", "Certificate of Completion"] },
    { name: "1-on-1", price: "$1499", perks: ["Daily Standups", "Unlimited Code Review", "Guaranteed Internship Interview", "Resume Rewrite"] }
];

export default function CodeCamp() {
    return (
        <>
            <Head>
                <title>Codiora Tech | CodeCamp</title>
            </Head>

            <div className="bg-[#020202] min-h-screen text-white overflow-hidden selection:bg-indigo-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[0%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10">
                    <div className="text-center mb-32">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
                            Zero to Engineer
                        </div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                        >
                            FORGE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-500">FUTURE</span>
                        </motion.h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Stop watching tutorials. Start shipping code. A 12-week intensive bootcamp designed to turn you into a production-ready software engineer.
                        </p>
                    </div>

                    {/* Timeline / Curriculum */}
                    <div className="max-w-4xl mx-auto mb-40 space-y-8">
                        {modules.map((mod, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-8 group"
                            >
                                <div className="hidden md:flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] z-10"></div>
                                    {i !== modules.length - 1 && <div className="w-0.5 h-full bg-white/10 mt-4 group-hover:bg-indigo-500/50 transition-colors"></div>}
                                </div>
                                <div className="flex-1 bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl group-hover:border-indigo-500/30 transition-all hover:bg-white/5">
                                    <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">{mod.week}</div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{mod.title}</h3>
                                    <p className="text-gray-400">{mod.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Pricing */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className={`relative p-10 rounded-[2rem] border ${plan.popular ? 'border-indigo-500 bg-indigo-900/10 shadow-[0_0_50px_rgba(99,102,241,0.2)]' : 'border-white/10 bg-[#0a0a0a]'}`}
                            >
                                {plan.popular && <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-[1.9rem]">POPULAR</div>}
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="text-4xl font-black text-white mb-8">{plan.price}</div>
                                <ul className="space-y-4 mb-10">
                                    {plan.perks.map((perk, j) => (
                                        <li key={j} className="flex items-center gap-3 text-gray-400 text-sm">
                                            <svg className="w-5 h-5 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            {perk}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-white/10 hover:bg-white text-white hover:text-black'}`}>
                                    Join Cohort
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-40 text-center">
                        <p className="text-gray-500 mb-4">Not sure which path is right for you?</p>
                        <Link href="/counseling" className="text-indigo-400 font-bold hover:text-white underline underline-offset-4">Talk to an Admission Counselor</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
