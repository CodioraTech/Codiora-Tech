import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

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
        description: "Join our dynamic design and frontend engineering team to construct robust, high-performance, and visually stunning user interfaces. As a Frontend Engineering Intern, you won't just be fixing minor bugs—you'll be architecting responsive web applications used by enterprise clients. We leverage a modern tech stack consisting of React, Next.js, and TailwindCSS.",
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
            <Head>
                <title>{`${post.title} | Codiora Tech Internship`}</title>
            </Head>

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/30 font-sans">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[0%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-8">
                            <Link href="/internship" legacyBehavior>
                                <a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-600 hover:text-teal-700 transition-colors">
                                    ← Back to Internship Tracks
                                </a>
                            </Link>
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
                                        <div className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-widest">
                                            {post.track}
                                        </div>
                                    </div>

                                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-[#122a46]">
                                        {post.title}
                                    </h1>

                                    <div className="grid grid-cols-2 gap-3 mb-6 p-4 bg-slate-50 border border-[#122a46]/10 rounded-2xl text-xs">
                                        <div>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Type</span>
                                            <span className="font-bold text-[#122a46]">Paid Internship Program</span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Location</span>
                                            <span className="font-bold text-[#122a46]">Remote / Hybrid</span>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                        {post.description}
                                    </p>
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
                                <div suppressHydrationWarning className="bg-white border border-[#122a46]/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-[#122a46]/10 relative overflow-hidden space-y-8">
                                    {/* Ambient Glow */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-600 text-xs font-bold uppercase tracking-wider mb-4">
                                            <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />
                                            Direct Email Application
                                        </div>
                                        <h3 className="text-3xl font-extrabold text-[#122a46] tracking-tight">How to Apply</h3>
                                        <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                                            Send your internship application directly to our talent team via email.
                                        </p>
                                    </div>

                                    {/* Selected Position Indicator */}
                                    <div className="p-5 bg-gradient-to-br from-slate-50 to-teal-50/40 border border-teal-500/20 rounded-2xl flex items-center justify-between gap-4">
                                        <div>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Applying For Track</span>
                                            <span className="text-base font-extrabold text-[#122a46] block mt-0.5">{post.title}</span>
                                        </div>
                                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center font-bold text-lg shrink-0">
                                            🎓
                                        </div>
                                    </div>

                                    {/* Application Checklist */}
                                    <div className="space-y-4">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Application Checklist & Requirements</h4>

                                        <div className="grid grid-cols-1 gap-3">
                                            <div className="p-4 bg-slate-50 border border-[#122a46]/5 rounded-xl flex items-center gap-3.5 hover:border-teal-500/30 transition-all">
                                                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-sm shrink-0 border border-teal-100">
                                                    1
                                                </div>
                                                <div>
                                                    <strong className="text-[#122a46] text-sm font-bold block">Attach CV / Resume (PDF)</strong>
                                                    <span className="text-xs text-slate-500">Attach a PDF copy or share your Google Drive / Dropbox link</span>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 border border-[#122a46]/5 rounded-xl flex items-center gap-3.5 hover:border-teal-500/30 transition-all">
                                                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-sm shrink-0 border border-teal-100">
                                                    2
                                                </div>
                                                <div>
                                                    <strong className="text-[#122a46] text-sm font-bold block">Portfolio & Code Links</strong>
                                                    <span className="text-xs text-slate-500 font-medium">Links to live projects, GitHub repos, or personal site</span>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 border border-[#122a46]/5 rounded-xl flex items-center gap-3.5 hover:border-teal-500/30 transition-all">
                                                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-sm shrink-0 border border-teal-100">
                                                    3
                                                </div>
                                                <div>
                                                    <strong className="text-[#122a46] text-sm font-bold block">Brief Intro (Why You?)</strong>
                                                    <span className="text-xs text-slate-500 font-medium">Add a brief introduction explaining why you are the best fit for this track</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="space-y-3 pt-2">
                                        <a
                                            href={`mailto:career@codioratech.com?subject=${encodeURIComponent(`Application for ${post.title}`)}`}
                                            className="w-full py-4 rounded-2xl bg-teal-500 text-white hover:bg-teal-400 font-bold text-base tracking-wide shadow-[0_10px_25px_rgba(20,184,166,0.35)] hover:shadow-[0_15px_35px_rgba(20,184,166,0.5)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-3"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                            Apply via Email
                                        </a>

                                        <div className="flex items-center justify-between gap-3 p-4 bg-slate-50 border border-[#122a46]/10 rounded-2xl text-xs">
                                            <div className="truncate">
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Direct Email</span>
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
