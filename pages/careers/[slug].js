import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
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
    const isOpen = slug === 'senior-full-stack-engineer' || slug === 'product-designer' || slug === 'product-designer-ui-ux';

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
            <SEO
                title={`${roleName || 'Job Details'} | Codiora Tech`}
                description={`Apply for ${roleName || 'a position'} at Codiora Tech. Join our modern engineering and AI development agency in Dhaka.`}
                canonicalPath={`/careers/${slug}`}
            />

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-36 sm:pt-40 md:pt-44 pb-20 relative z-10 transition-all duration-500">
                    <div className="max-w-7xl mx-auto">
                        <Breadcrumbs
                            items={[
                                { label: 'Home', href: '/' },
                                { label: 'Careers', href: '/careers' },
                                { label: roleName || slug, href: `/careers/${slug}` }
                            ]}
                        />

                        {/* Back Button */}
                        <div className="mb-8 mt-4">
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
                                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                                <div className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-700 text-xs font-bold uppercase tracking-widest">
                                                    {isOpen ? 'Actively Hiring' : 'Selected Role'}
                                                </div>
                                                {isOpen ? (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-300">
                                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                                        Application Open
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200">
                                                        Talent Pool
                                                    </span>
                                                )}
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

                            {/* Right Column: Application Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {isOpen ? (
                                    <div suppressHydrationWarning className="bg-white border border-teal-500/20 rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-teal-500/10 relative overflow-hidden space-y-8">
                                        {/* Ambient Glow */}
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

                                        <div>
                                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                                </span>
                                                Actively Hiring • Open Role
                                            </div>
                                            <h3 className="text-3xl font-extrabold text-[#122a46] tracking-tight">Apply for this Position</h3>
                                            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                                                We are actively interviewing for the <strong>{roleName || 'this position'}</strong> role. Direct application review by engineering leadership.
                                            </p>
                                        </div>

                                        {/* Selected Position Indicator */}
                                        <div className="p-5 bg-gradient-to-br from-emerald-50/70 to-teal-50/40 border border-emerald-200/80 rounded-2xl flex items-center justify-between gap-4">
                                            <div>
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Role Availability</span>
                                                <span className="text-base font-extrabold text-[#122a46] block mt-0.5">{roleName || 'Open Position'}</span>
                                            </div>
                                            <span className="px-3.5 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                                Open Now
                                            </span>
                                        </div>

                                        {/* Direct Application Checklist */}
                                        <div className="p-5 bg-slate-50 border border-[#122a46]/10 rounded-2xl space-y-3">
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#122a46] flex items-center gap-2">
                                                <span className="text-teal-600">⚡</span> Direct Application Process
                                            </h4>
                                            <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-teal-500 font-bold">1.</span>
                                                    <span>Attach your <strong>Resume / CV (PDF)</strong> with contact details.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-teal-500 font-bold">2.</span>
                                                    <span>Include link to your <strong>GitHub / Live Portfolio</strong> or notable case studies.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-teal-500 font-bold">3.</span>
                                                    <span>A brief 2-3 sentence intro about the hardest problem you have built or designed.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Actions */}
                                        <div className="space-y-3 pt-2">
                                            <a
                                                href={`mailto:career@codioratech.com?subject=Application:%20${encodeURIComponent(roleName || 'Job')}%20-%20[Your%20Name]`}
                                                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 hover:from-teal-500 hover:to-emerald-600 text-white font-extrabold text-base tracking-wide flex items-center justify-center gap-2.5 shadow-lg shadow-teal-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                            >
                                                <span>Send Application via Email</span>
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
                                ) : (
                                    <div suppressHydrationWarning className="bg-white border border-[#122a46]/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-[#122a46]/10 relative overflow-hidden space-y-8">
                                        {/* Ambient Glow */}
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

                                        <div>
                                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
                                                <span className="w-2 h-2 rounded-full bg-amber-500" />
                                                Applications Closed
                                            </div>
                                            <h3 className="text-3xl font-extrabold text-[#122a46] tracking-tight">Status: Applications Closed</h3>
                                            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                                                We are not actively accepting applications for the <strong>{roleName || 'this position'}</strong> role at this time. All positions for this cycle have been filled.
                                            </p>
                                        </div>

                                        {/* Selected Position Indicator */}
                                        <div className="p-5 bg-gradient-to-br from-slate-50 to-amber-50/30 border border-amber-200/50 rounded-2xl flex items-center justify-between gap-4">
                                            <div>
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Position Status</span>
                                                <span className="text-base font-extrabold text-[#122a46] block mt-0.5">{roleName || 'Open Position'}</span>
                                            </div>
                                            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
                                                Filled / Closed
                                            </span>
                                        </div>

                                        {/* Talent Pool Notice */}
                                        <div className="p-5 bg-slate-50 border border-[#122a46]/10 rounded-2xl space-y-3">
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Future Hiring Cycles</h4>
                                            <p className="text-xs text-slate-600 leading-relaxed">
                                                We review candidate profiles on an ongoing basis for upcoming projects. If you would like your resume and portfolio kept on file in our talent database, you may send your details directly to our team.
                                            </p>
                                        </div>

                                        {/* Actions */}
                                        <div className="space-y-3 pt-2">
                                            <div className="w-full py-4 rounded-2xl bg-slate-100 border border-slate-200 text-slate-400 font-bold text-base tracking-wide flex items-center justify-center gap-2.5 cursor-not-allowed">
                                                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                                Applications Closed
                                            </div>

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
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
