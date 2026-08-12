import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

const tracks = [
    {
        title: "Frontend Engineering",
        slug: "frontend-engineering",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-500"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>,
        skills: ["React", "UI/UX", "Animation"]
    },
    {
        title: "Backend Systems",
        slug: "backend-systems",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-500"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg>,
        skills: ["API Design", "Database", "Security"]
    },
    {
        title: "AI & Data Science",
        slug: "ai-data-science",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-500"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" /></svg>,
        skills: ["ML Models", "Python", "Analytics"]
    },
    {
        title: "Full Stack Developer",
        slug: "full-stack-developer",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-500"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>,
        skills: ["Next.js", "Node.js", "MongoDB"]
    },
    {
        title: "DevOps Engineer",
        slug: "devops-engineer",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-teal-500"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>,
        skills: ["AWS", "Docker", "CI/CD"]
    }
];

export default function Internship() {
    return (
        <>
            <Head>
                <title>Codiora Tech | Intership Program</title>
            </Head>

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-32">
                        <div className="max-w-2xl">
                            <div className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-bold uppercase tracking-widest mb-6">
                                Next Gen Talent
                            </div>
                            <motion.h1
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                            >
                                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">INCUBATOR</span>
                            </motion.h1>
                            <p className="text-xl text-slate-500">
                                This is not a coffee-fetcher internship. You will push production code, break things (in dev), and learn from the best engineers in the industry.
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-48 h-48 text-teal-500 animate-[spin_10s_linear_infinite] opacity-20">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Tracks */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
                        {tracks.map((track, i) => (
                            <Link key={i} href={`/internship/${track.slug}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white border border-[#122a46]/5 p-10 rounded-[2.5rem] hover:bg-[#122a46]/5 transition-colors group cursor-pointer"
                                >
                                    <div className="mb-6 bg-teal-500/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                                        {track.svg}
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#122a46] mb-4">{track.title}</h3>
                                    <div className="flex flex-wrap gap-2 text-sm text-slate-500">
                                        {track.skills.map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-[#122a46]/5 rounded-full border border-[#122a46]/5">{skill}</span>
                                        ))}
                                    </div>
                                    <div className="mt-8 flex items-center gap-2 text-teal-500 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Details <span>→</span>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    {/* Why Apply */}
                    <div className="bg-gradient-to-br from-teal-900/20 to-[#f8fafc] border border-teal-500/20 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                        <h2 className="text-4xl font-bold mb-8">Ready to Accelerate Your Career?</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-lg">
                            We accept less than 2% of applicants. If you have the hunger to learn and the grit to solve hard problems, we want to hear from you.
                        </p>
                        <Link href="/careers">
                            <button className="inline-block px-10 py-4 bg-teal-500 text-white font-bold text-lg rounded-full hover:bg-teal-400 hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] hover:-translate-y-1 transition-all duration-300">
                                Apply for Next Cohort
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}
