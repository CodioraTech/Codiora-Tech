import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

// Helper component to render SVG icons safely without JSON serialization error
function TrackIcon({ icon }) {
    switch (icon) {
        case 'frontend':
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-teal-500"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>;
        case 'backend':
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-teal-500"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg>;
        case 'ai':
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-teal-500"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" /></svg>;
        case 'fullstack':
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-teal-500"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>;
        case 'devops':
            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-teal-500"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>;
        default:
            return <span className="text-3xl">🎓</span>;
    }
}

// Mock Data for Internship Positions
const positionData = {
    "frontend-engineering": {
        title: "Frontend Engineering Intern",
        track: "Frontend Track",
        color: "teal",
        icon: "frontend",
        description: "Join our dynamic design and frontend engineering team to construct robust, high-performance, and visually stunning user interfaces. As a Frontend Engineering Intern, you won't just be fixing minor bugs, you'll be architecting responsive web applications used by enterprise clients. We leverage a modern tech stack consisting of React, Next.js, and TailwindCSS.",
        learnings: [
            "Collaborate with UI/UX designers to implement scalable component libraries.",
            "Build complex, buttery-smooth animations using Framer Motion.",
            "Integrate deeply with RESTful APIs and GraphQL endpoints for data fetching.",
            "Optimize Core Web Vitals to guarantee blazing fast load times."
        ],
        requirements: [
            "Solid foundation in HTML5, CSS3, JavaScript (ES6+), and React.",
            "Familiarity with Tailwind CSS and Git version control.",
            "Passionate about UI design details and modern web aesthetics."
        ]
    },
    "backend-systems": {
        title: "Backend Systems Intern",
        track: "Backend Track",
        color: "teal",
        icon: "backend",
        description: "Dive deep into the core engine of our applications. As a Backend Systems Intern, you'll tackle distributed systems, microservices architectures, and highly available databases. Your code will directly impact the reliability and speed of our data processing engines.",
        learnings: [
            "Design, implement, and maintain robust API systems (REST and gRPC architectures).",
            "Perform complex database modeling, query optimization, and indexing in PostgreSQL/MongoDB.",
            "Implement caching strategies using Redis.",
            "Understand containerization and orchestration utilizing Docker."
        ],
        requirements: [
            "Good understanding of Node.js, Express, or Python (FastAPI/Flask).",
            "Basic knowledge of relational (SQL) or NoSQL databases.",
            "Understanding of REST API concepts and HTTP protocols."
        ]
    },
    "ai-data-science": {
        title: "AI & Data Science Intern",
        track: "AI Track",
        color: "teal",
        icon: "ai",
        description: "Position yourself at the forefront of the AI revolution. Our AI & Data Science Interns work on Large Language Models (LLMs), predictive analytics, and enterprise AI agent integration. You'll work with Python data stacks and vector databases to create intelligent systems that solve real business problems.",
        learnings: [
            "Develop advanced Prompt Engineering techniques and RAG (Retrieval-Augmented Generation) architectures.",
            "Manipulate and clean large datasets utilizing Pandas and NumPy.",
            "Implement vector search using ChromaDB or Pinecone.",
            "Deploy machine learning models securely to production environments."
        ],
        requirements: [
            "Proficiency in Python programming.",
            "Basic understanding of Machine Learning principles or LLM APIs (OpenAI, Gemini, Claude).",
            "Curiosity to learn Vector DBs and RAG pipelines."
        ]
    },
    "full-stack-developer": {
        title: "Full Stack Developer Intern",
        track: "Full Stack Track",
        color: "teal",
        icon: "fullstack",
        description: "Become a versatile engineer capable of handling the entire application lifecycle. As a Full Stack Intern, you will bridge the gap between elegant user interfaces and powerful backend infrastructure. You'll work across Next.js, React, Node.js, and MongoDB/PostgreSQL.",
        learnings: [
            "Architect and develop end-to-end features spanning frontend and backend.",
            "Manage databases, schemas, and RESTful API endpoints.",
            "Build secure authentication flows and session management.",
            "Deploy full-stack applications to platforms like Vercel and Docker environments."
        ],
        requirements: [
            "Hands-on practice with JavaScript/TypeScript and React.",
            "Basic experience with Node.js and database queries.",
            "Eagerness to build complete SaaS applications from scratch."
        ]
    },
    "devops-engineer": {
        title: "DevOps Engineer Intern",
        track: "Cloud & DevOps Track",
        color: "teal",
        icon: "devops",
        description: "Ensure our applications run smoothly, securely, and at scale. As a DevOps Engineer Intern, you will focus on automation, continuous integration/continuous deployment (CI/CD), and cloud infrastructure architecture.",
        learnings: [
            "Automate build, test, and deployment processes using GitHub Actions.",
            "Containerize applications using Docker.",
            "Provision cloud infrastructure resources on AWS or Render.",
            "Implement system monitoring and cloud security practices."
        ],
        requirements: [
            "Familiarity with Linux command line environments.",
            "Basic understanding of Git, Docker, and Web Servers.",
            "Interest in cloud architecture and build pipelines."
        ]
    }
};

export async function getStaticPaths() {
    const paths = Object.keys(positionData).map((slug) => ({
        params: { slug }
    }));
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const post = positionData[slug] || null;

    if (!post) {
        return { notFound: true };
    }

    return {
        props: {
            slug,
            post
        }
    };
}

export default function InternshipPost({ slug, post }) {
    const [copied, setCopied] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleCopyEmail = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText('career@codioratech.com');
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        }
    };

    if (!post) return null;

    return (
        <>
            <SEO
                title={`${post.title} | Codiora Tech`.slice(0, 58)}
                description={(post.description || `Apply for ${post.title} at Codiora Tech in Dhaka.`).slice(0, 155)}
                canonicalPath={`/internship/${slug}`}
            />

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/30 font-sans">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[0%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                </div>

                <div className="container mx-auto px-6 pt-36 sm:pt-40 md:pt-44 pb-40 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-6">
                            <Breadcrumbs
                                items={[
                                    { label: 'Home', href: '/' },
                                    { label: 'Internship', href: '/internship' },
                                    { label: post.title, href: `/internship/${post.slug || ''}` }
                                ]}
                            />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                            {/* Left Column: Internship Track Details */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-10 lg:sticky lg:top-32"
                            >
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center shrink-0">
                                            <TrackIcon icon={post.icon} />
                                        </div>
                                        <div className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-700 text-xs font-bold uppercase tracking-widest">
                                            {post.track}
                                        </div>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-300">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                            Always Open
                                        </span>
                                    </div>

                                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-[#122a46]">
                                        {post.title}
                                    </h1>

                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 bg-slate-50 border border-[#122a46]/10 rounded-2xl text-xs">
                                        <div>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Type</span>
                                            <span className="font-bold text-[#122a46]">Paid Internship</span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Annual Intakes</span>
                                            <span className="font-bold text-teal-700">Jan • May • Sep</span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Location</span>
                                            <span className="font-bold text-[#122a46]">Remote / Hybrid</span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Mentorship</span>
                                            <span className="font-bold text-emerald-700">1:1 Staff Lead</span>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                        {post.description}
                                    </p>

                                    {/* 3 Intakes Banner */}
                                    <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/80 text-xs text-teal-900 leading-relaxed mb-8">
                                        <strong className="font-bold block mb-1">📅 3 Annual Cohort Intakes:</strong>
                                        We hire interns across 3 dedicated intakes every year: <strong>January (Spring)</strong>, <strong>May (Summer)</strong>, and <strong>September (Fall)</strong>. Applications are evaluated year-round on a rolling basis.
                                    </div>
                                </div>

                                {post.learnings && (
                                    <div>
                                        <h3 className="text-xl font-extrabold text-[#122a46] mb-4">Key Responsibilities & Learnings</h3>
                                        <ul className="space-y-3">
                                            {post.learnings.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {post.requirements && (
                                    <div>
                                        <h3 className="text-xl font-extrabold text-[#122a46] mb-4">Track Requirements</h3>
                                        <ul className="space-y-3">
                                            {post.requirements.map((req, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </motion.div>

                            {/* Right Column: Direct Email Application Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div suppressHydrationWarning className="bg-white border border-teal-500/20 rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-teal-500/10 relative overflow-hidden space-y-7">
                                    {/* Ambient Glow */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                            </span>
                                            Applications Always Open
                                        </div>
                                        <h3 className="text-3xl font-extrabold text-[#122a46] tracking-tight">Apply for this Track</h3>
                                        <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                                            We review candidate profiles year-round and place accepted interns into the upcoming cohort. Direct review by engineering mentors.
                                        </p>
                                    </div>

                                    {/* Selected Track Indicator */}
                                    <div className="p-5 bg-gradient-to-br from-emerald-50/70 to-teal-50/40 border border-emerald-200/80 rounded-2xl flex items-center justify-between gap-4">
                                        <div>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Selected Track</span>
                                            <span className="text-base font-extrabold text-[#122a46] block mt-0.5">{post.title}</span>
                                        </div>
                                        <span className="px-3.5 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                            Always Open
                                        </span>
                                    </div>

                                    {/* 3 Annual Intakes Schedule */}
                                    <div className="p-5 bg-slate-50 border border-[#122a46]/10 rounded-2xl space-y-3">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#122a46] flex items-center gap-2">
                                                <span>🗓️</span> 3 Annual Cohort Intakes
                                            </h4>
                                            <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/60">3 Batches / Yr</span>
                                        </div>
                                        <div className="grid grid-cols-3 gap-2 text-center pt-1">
                                            <div className="p-2.5 rounded-xl bg-white border border-slate-200/80">
                                                <span className="text-[10px] text-slate-400 font-bold block uppercase">Intake 01</span>
                                                <strong className="text-xs text-[#122a46] block mt-0.5">January</strong>
                                            </div>
                                            <div className="p-2.5 rounded-xl bg-white border border-slate-200/80">
                                                <span className="text-[10px] text-slate-400 font-bold block uppercase">Intake 02</span>
                                                <strong className="text-xs text-[#122a46] block mt-0.5">May</strong>
                                            </div>
                                            <div className="p-2.5 rounded-xl bg-white border border-slate-200/80">
                                                <span className="text-[10px] text-slate-400 font-bold block uppercase">Intake 03</span>
                                                <strong className="text-xs text-[#122a46] block mt-0.5">September</strong>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Application Checklist */}
                                    <div className="p-5 bg-slate-50 border border-[#122a46]/10 rounded-2xl space-y-3">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#122a46] flex items-center gap-2">
                                            <span className="text-teal-600">⚡</span> Direct Application Details
                                        </h4>
                                        <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
                                            <li className="flex items-start gap-2">
                                                <span className="text-teal-500 font-bold">1.</span>
                                                <span>Attach your <strong>Resume / CV (PDF)</strong> with contact info.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-teal-500 font-bold">2.</span>
                                                <span>Include your <strong>GitHub Profile</strong> and any deployed live demos.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-teal-500 font-bold">3.</span>
                                                <span>Specify your preferred intake: <strong>January, May, or September</strong>.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Actions */}
                                    <div className="space-y-3 pt-1">
                                        <a
                                            href={`mailto:career@codioratech.com?subject=Internship%20Application:%20${encodeURIComponent(post.title)}%20-%20[Your%20Name]`}
                                            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 hover:from-teal-500 hover:to-emerald-600 text-white font-extrabold text-base tracking-wide flex items-center justify-center gap-2.5 shadow-lg shadow-teal-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            <span>Apply for this Track via Email</span>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        </a>

                                        <div className="flex items-center justify-between gap-3 p-4 bg-slate-50 border border-[#122a46]/10 rounded-2xl text-xs">
                                            <div className="truncate">
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Direct Submission Email</span>
                                                <span className="font-bold text-[#122a46] text-sm truncate">career@codioratech.com</span>
                                            </div>
                                            <button
                                                onClick={handleCopyEmail}
                                                type="button"
                                                className="text-teal-600 font-bold hover:text-[#122a46] transition-colors shrink-0 uppercase tracking-widest text-[11px] px-3.5 py-2 rounded-xl bg-white border border-teal-200 shadow-sm hover:bg-teal-50"
                                            >
                                                {copied ? '✓ Copied!' : 'Copy Email'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
