import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

const jobDetails = {
    "AI-Integrated Full-Stack Engineer": {
        slug: "ai-integrated-full-stack-engineer",
        level: "Mid to Senior Level",
        employmentType: "Full-Time (Hybrid / On-site)",
        location: "Dhaka, Bangladesh",
        department: "Engineering & AI Labs",
        description: "At Codiora Tech, we build scalable, intelligent software solutions and AI-driven platforms for modern businesses. As an AI-Integrated Full-Stack Engineer, you will operate at the intersection of modern full-stack web architecture, Machine Learning pipelines, and Large Language Models (LLMs). You will design scalable web applications, build robust Python/Node backend microservices, and seamlessly integrate AI/ML models (OpenAI, Gemini, Claude, Custom ML pipelines, Vector DBs) into real-world SaaS products.",
        responsibilities: [
            "Full-Stack Application Development: Architect, build, and maintain high-performance web applications using Next.js, React, Node.js, and Express.js.",
            "Python & AI/ML Microservices: Develop and optimize Machine Learning microservices using Python (FastAPI / Flask / PyTorch / Scikit-Learn).",
            "AI & LLM Integration: Connect and fine-tune generative AI models, custom LLM APIs (OpenAI, Gemini, Claude, DeepSeek), and build RAG pipelines or workflow automation engines.",
            "Database & API Architecture: Design efficient database schemas using PostgreSQL, MongoDB, and Prisma ORM with focus on high query performance and vector search capabilities.",
            "Automation & Data Extraction: Develop custom web scrapers, data pipelines, and automation bots to ingest structured data for ML model training and workflows.",
            "DevOps & Deployment: Containerize applications using Docker, set up CI/CD pipelines, and manage cloud hosting environments (AWS / Vercel / Render)."
        ],
        requirements: [
            "Frontend: Strong expertise in Next.js, React, TypeScript, Tailwind CSS, and modern UI/UX practices.",
            "Backend & Programming: Advanced proficiency in Python (FastAPI/Flask) and JavaScript/TypeScript (Node.js, Express.js, REST APIs, WebSockets).",
            "AI / ML Core: Practical experience with Machine Learning fundamentals, Model Fine-tuning, Prompt Engineering, LLM APIs, and Vector DBs (ChromaDB, Pinecone, PGVector).",
            "AI Frameworks: Familiarity with LangChain, LlamaIndex, PyTorch, or Scikit-Learn for AI workflow implementation.",
            "Database & DevOps: Hands-on experience with PostgreSQL, Prisma ORM, Redis, Docker, Git, and Linux environments."
        ],
        bonusSkills: [
            "Experience with Advanced Retrieval-Augmented Generation (RAG) architecture.",
            "Familiarity with MLOps frameworks (MLflow, Weights & Biases) or Model Deployment pipelines.",
            "Familiarity with web automation tools (Puppeteer, Playwright, or Selenium)."
        ],
        whatWeOffer: [
            "Competitive salary package based on skills and performance.",
            "Hands-on exposure to next-generation AI/ML projects and SaaS application development.",
            "Collaborative and modern engineering culture with continuous learning opportunities.",
            "Performance-based bonuses and career growth tracks."
        ]
    },
    "Senior Full Stack Engineer": {
        slug: "senior-full-stack-engineer",
        level: "Senior Level",
        employmentType: "Full-Time",
        location: "Remote",
        department: "Engineering",
        description: "We are looking for a Senior Engineer who thinks like an architect. You won't just move tickets; you will own entire subsystems of our core infrastructure. You will work directly with the founders to scale our platform to millions of users.",
        responsibilities: [
            "Architect and implement low-latency APIs using Node.js and Go.",
            "Build pixel-perfect, accessible UIs with React and Next.js.",
            "Optimize database queries and schema designs for high-throughput Postgres clusters.",
            "Mentor junior engineers and conduct rigorous code reviews."
        ],
        requirements: [
            "5+ years of production experience with modern JS stacks.",
            "Deep understanding of distributed systems and microservices.",
            "Obsession with performance auditing and optimization.",
            "Ability to communicate technical concepts to non-technical stakeholders."
        ]
    },
    "Product Designer (UI/UX)": {
        slug: "product-designer",
        level: "Mid to Senior Level",
        employmentType: "Full-Time",
        location: "Remote (APAC)",
        department: "Design",
        description: "We need a visionary designer who can translate complex technical requirements into intuitive, beautiful user interfaces. You will define the visual language of Codiora.",
        responsibilities: [
            "Create high-fidelity mockups and prototypes in Figma.",
            "Maintain and evolve our design system.",
            "Collaborate with engineers to ensure design implementation quality.",
            "Conduct user research and usability testing."
        ],
        requirements: [
            "Portfolio demonstrating exceptional UI/UX skills.",
            "Proficiency in Figma and Adobe Creative Suite.",
            "Understanding of basic HTML/CSS principles.",
            "Experience designing for B2B SaaS or developer tools."
        ]
    },
    "Growth Marketing Lead": {
        slug: "growth-marketing-lead",
        level: "Lead Level",
        employmentType: "Contract / Full-Time",
        location: "London / Remote",
        department: "Marketing",
        description: "You will drive our user acquisition strategy, experimenting with new channels and optimizing our conversion funnels.",
        responsibilities: [
            "Develop and execute go-to-market strategies.",
            "Manage paid acquisition campaigns across LinkedIn and Twitter.",
            "Optimize landing pages for higher conversion rates.",
            "Analyze data to identify growth opportunities."
        ],
        requirements: [
            "Proven track record of scaling B2B products.",
            "Data-driven mindset with deep analytics expertise.",
            "Experience with marketing automation tools.",
            "Strong copywriting skills."
        ]
    },
    "AI Research Scientist": {
        slug: "ai-research-scientist",
        level: "Senior Level",
        employmentType: "Full-Time",
        location: "San Francisco / Remote",
        department: "R&D",
        description: "Join our R&D team to push the boundaries of what is possible with LLMs and generative AI.",
        responsibilities: [
            "Read and implement state-of-the-art papers.",
            "Fine-tune open-source models for specific use cases.",
            "Optimize inference pipelines for latency and cost.",
            "Collaborate with product teams to integrate AI features."
        ],
        requirements: [
            "PhD or Masters in CS, AI, or related field.",
            "Strong publication record or open-source contributions.",
            "Proficiency in PyTorch or TensorFlow.",
            "Experience with large-scale model training."
        ]
    }
};

const slugMap = {
    "ai-integrated-full-stack-engineer": "AI-Integrated Full-Stack Engineer",
    "senior-full-stack-engineer": "Senior Full Stack Engineer",
    "product-designer": "Product Designer (UI/UX)",
    "product-designer-ui-ux": "Product Designer (UI/UX)",
    "growth-marketing-lead": "Growth Marketing Lead",
    "ai-research-scientist": "AI Research Scientist"
};

export async function getStaticPaths() {
    const paths = Object.keys(slugMap).map((slug) => ({
        params: { slug }
    }));
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const slug = params.slug || '';
    const roleName = slugMap[slug] || (slug ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : '');
    const details = jobDetails[roleName] || null;
    return {
        props: {
            slug,
            roleName,
            details
        }
    };
}

export default function CareerJobPage({ slug, roleName, details }) {
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

    return (
        <>
            <Head>
                <title>{`Codiora Tech | ${roleName || 'Job Detail'}`}</title>
            </Head>

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 transition-all duration-500">
                    <div className="max-w-7xl mx-auto">
                        {/* Back Button */}
                        <div className="mb-8">
                            <Link href="/careers" legacyBehavior>
                                <a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-600 hover:text-teal-700 transition-colors">
                                    ← Back to Careers
                                </a>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                            {/* Left Column: Job Details */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-12 lg:sticky lg:top-32"
                            >
                                {details ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-10"
                                    >
                                        <div>
                                            <div className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-widest mb-6">
                                                Selected Role
                                            </div>
                                            <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-[#122a46]">
                                                {roleName}
                                            </h1>

                                            {/* Job Metadata Chips */}
                                            {(details.location || details.employmentType || details.level || details.department) && (
                                                <div className="grid grid-cols-2 gap-3 mb-6 p-4 bg-slate-50 border border-[#122a46]/10 rounded-2xl">
                                                    {details.level && (
                                                        <div>
                                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Position Level</span>
                                                            <span className="text-sm font-bold text-[#122a46]">{details.level}</span>
                                                        </div>
                                                    )}
                                                    {details.employmentType && (
                                                        <div>
                                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Employment Type</span>
                                                            <span className="text-sm font-bold text-[#122a46]">{details.employmentType}</span>
                                                        </div>
                                                    )}
                                                    {details.location && (
                                                        <div>
                                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Location</span>
                                                            <span className="text-sm font-bold text-[#122a46]">{details.location}</span>
                                                        </div>
                                                    )}
                                                    {details.department && (
                                                        <div>
                                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Department</span>
                                                            <span className="text-sm font-bold text-[#122a46]">{details.department}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            <p className="text-slate-600 text-lg leading-relaxed">
                                                {details.description}
                                            </p>
                                        </div>

                                        {details.responsibilities && (
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-bold text-[#122a46] border-b border-[#122a46]/10 pb-2">Key Responsibilities</h3>
                                                <ul className="space-y-3">
                                                    {details.responsibilities.map((res, i) => (
                                                        <li key={i} className="flex gap-3 text-slate-600 text-base">
                                                            <span className="text-teal-500 mt-0.5">▹</span>
                                                            <span>{res}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {details.requirements && (
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-bold text-[#122a46] border-b border-[#122a46]/10 pb-2">Required Technical Skills & Qualifications</h3>
                                                <ul className="space-y-3">
                                                    {details.requirements.map((req, i) => (
                                                        <li key={i} className="flex gap-3 text-slate-600 text-base">
                                                            <span className="text-teal-500 mt-0.5">▹</span>
                                                            <span>{req}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {details.bonusSkills && (
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-bold text-[#122a46] border-b border-[#122a46]/10 pb-2">Bonus Skills (Nice To Have)</h3>
                                                <ul className="space-y-3">
                                                    {details.bonusSkills.map((bonus, i) => (
                                                        <li key={i} className="flex gap-3 text-slate-600 text-base">
                                                            <span className="text-amber-500 mt-0.5">★</span>
                                                            <span>{bonus}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {details.whatWeOffer && (
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-bold text-[#122a46] border-b border-[#122a46]/10 pb-2">What We Offer</h3>
                                                <ul className="space-y-3">
                                                    {details.whatWeOffer.map((offer, i) => (
                                                        <li key={i} className="flex gap-3 text-slate-600 text-base">
                                                            <span className="text-emerald-500 mt-0.5">✓</span>
                                                            <span>{offer}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </motion.div>
                                ) : (
                                    <div>
                                        <div className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-widest mb-6">
                                            Join The Vanguard
                                        </div>
                                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-r from-[#122a46] to-gray-500 bg-clip-text text-transparent">
                                            Your Next Chapter Starts Here.
                                        </h1>
                                        <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
                                            We don't care about your pedigree. We care about your output. Show us what you've built, and why you want to build with us.
                                        </p>
                                    </div>
                                )}
                            </motion.div>

                            {/* Right Column: Direct Email Application Instructions */}
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
                                            Send your application directly to our talent acquisition team via email.
                                        </p>
                                    </div>

                                    {/* Selected Position Indicator */}
                                    <div className="p-5 bg-gradient-to-br from-slate-50 to-teal-50/40 border border-teal-500/20 rounded-2xl flex items-center justify-between gap-4">
                                        <div>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Applying For Position</span>
                                            <span className="text-base font-extrabold text-[#122a46] block mt-0.5">{roleName || 'Open Position'}</span>
                                        </div>
                                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center font-bold text-lg shrink-0">
                                            💼
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
                                                    <span className="text-xs text-slate-500 font-medium">Links to live work, GitHub repos, or personal site</span>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-slate-50 border border-[#122a46]/5 rounded-xl flex items-center gap-3.5 hover:border-teal-500/30 transition-all">
                                                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-sm shrink-0 border border-teal-100">
                                                    3
                                                </div>
                                                <div>
                                                    <strong className="text-[#122a46] text-sm font-bold block">Brief Intro (Why You?)</strong>
                                                    <span className="text-xs text-slate-500 font-medium">Add a brief introduction explaining why you are the best fit for this role</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="space-y-3 pt-2">
                                        <a
                                            href={`mailto:career@codioratech.com?subject=${encodeURIComponent(`Application for ${roleName || 'Open Position'}`)}`}
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
