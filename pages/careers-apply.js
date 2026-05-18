import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import emailjs from '@emailjs/browser';

const jobDetails = {
    "Senior Full Stack Engineer": {
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
        description: "We need a visionary designer who can translate complex technical requirements into intuitive, beautiful user interfaces. You will defined the visual language of Codiora.",
        responsibilities: [
            "Create high-fidelity mockups and prototypes in Figma.",
            "Maintain and evolve our design system.",
            "Collaborate with engineers to ensure design implementation quality.",
            "Conduct user research and usability testing."
        ],
        requirements: [
            "Portfolio demonstrating exceptional UI/UX skills.",
            "Proficiency in Figma and Adobe Creative Suite.",
            "Understanding of basic HMTL/CSS principles.",
            "Experience designing for B2B SaaS or developer tools."
        ]
    },
    "Growth Marketing Lead": {
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
    },
    "Frontend Engineering Intern": {
        description: "You will work directly with our Design and Product teams to build pixel-perfect user interfaces. We use React, Next.js, and TailwindCSS extensively. You will learn about state management, component lifecycles, and performance optimization.",
        responsibilities: [
            "Building reusable component libraries.",
            "Animating interfaces with Framer Motion.",
            "Integrating with REST and GraphQL APIs.",
            "Writing unit and integration tests (Jest, Cypress)."
        ],
        requirements: [
            "Strong understanding of JavaScript fundamentals.",
            "Experience with React and modern CSS.",
            "Passion for UI/UX and design details.",
            "Eagerness to learn and iterate quickly."
        ]
    },
    "Backend Systems Intern": {
        description: "Dive deep into our microservices architecture. You will be responsible for building high-performance APIs and optimizing database queries. We use Node.js, Go, and PostgreSQL.",
        responsibilities: [
            "API Design principles (REST/gRPC).",
            "Database modeling and query optimization.",
            "Caching strategies using Redis.",
            "Containerization with Docker and Kubernetes."
        ],
        requirements: [
            "Proficiency in Python, Go, or Node.js.",
            "Basic understanding of databases (SQL/NoSQL).",
            "Familiarity with cloud platforms (AWS/GCP).",
            "Strong problem-solving skills."
        ]
    },
    "AI & Data Science Intern": {
        description: "Work on the cutting edge of Large Language Models (LLMs) and predictive analytics. You will help fine-tune models and build RAG pipelines.",
        responsibilities: [
            "Prompt Engineering and RAG architectures.",
            "Python data stack (Pandas, NumPy, PyTorch).",
            "Vector databases (Pinecone, Milvus).",
            "Deploying ML models to production."
        ],
        requirements: [
            "Strong math and statistics background.",
            "Experience with Python and ML libraries.",
            "Interest in NLP and generative AI.",
            "Ability to read and understand research papers."
        ]
    },
    "Full Stack Developer Intern": {
        description: "Become a versatile engineer capable of handling the entire application lifecycle. Bridge the gap between elegant user interfaces and powerful backend infrastructure.",
        responsibilities: [
            "Architect and develop end-to-end features.",
            "Manage NoSQL (MongoDB) databases.",
            "Build secure authentication flows.",
            "Handle seamless API integrations."
        ],
        requirements: [
            "Experience with React and Node.js.",
            "Understanding of RESTful APIs.",
            "Familiarity with database design.",
            "Eagerness to learn full-stack architecture."
        ]
    },
    "DevOps Engineer Intern": {
        description: "Ensure our applications run smoothly, securely, and at scale. Focus on automation, continuous integration/continuous deployment (CI/CD), and cloud infrastructure architecture.",
        responsibilities: [
            "Automate build, test, and deployment processes.",
            "Containerize applications using Docker.",
            "Provision cloud infrastructure on AWS.",
            "Implement system monitoring and logging."
        ],
        requirements: [
            "Basic understanding of Linux/Unix systems.",
            "Familiarity with Git and CI/CD concepts.",
            "Interest in cloud platforms like AWS.",
            "Knowledge of scripting languages (Bash/Python)."
        ]
    }
};

const positions = Object.keys(jobDetails);

export default function CareerApply() {
    const router = useRouter();
    const [status, setStatus] = useState('idle');
    const [role, setRole] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [details, setDetails] = useState(null);
    const form = useRef();

    useEffect(() => {
        if (router.isReady && router.query.role) {
            const decodedRole = decodeURIComponent(router.query.role);
            setRole(decodedRole);
            setDetails(jobDetails[decodedRole] || null);
        }
    }, [router.isReady, router.query]);

    const handleRoleChange = (e) => {
        const selectedRole = e.target.value;
        setRole(selectedRole);
        setDetails(jobDetails[selectedRole] || null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        if (!role) {
            alert("Please select a position to apply for.");
            setStatus('idle');
            return;
        }

        const PUBLIC_KEY = 'Hc7PljQ3BUkZ1oPy7';
        const SERVICE_ID = 'service_ugzuqn3';
        const TEMPLATE_ID = 'template_e0abhoq';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setErrorMessage('Application submission failed. Please try again.');
            });
    };

    return (
        <>
            <Head>
                <title>Codiora Tech | Apply Now</title>
            </Head>

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 transition-all duration-500">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                            {/* Left Column: Context or Instructions */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-12 lg:sticky lg:top-32"
                            >
                                {details ? (
                                    // Render Specific Job Details
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        key={role} // Re-animate on role change
                                        className="space-y-10"
                                    >
                                        <div>
                                            <div className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-widest mb-6">
                                                Selected Role
                                            </div>
                                            <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-[#122a46]">
                                                {role}
                                            </h1>
                                            <p className="text-slate-600 text-lg leading-relaxed">
                                                {details.description}
                                            </p>
                                        </div>

                                        <div className="space-y-6">
                                            <h3 className="text-xl font-bold text-[#122a46] border-b border-[#122a46]/10 pb-2">Responsibilities</h3>
                                            <ul className="space-y-3">
                                                {details.responsibilities.map((res, i) => (
                                                    <li key={i} className="flex gap-3 text-slate-500">
                                                        <span className="text-teal-500 mt-1">▹</span>
                                                        {res}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="space-y-6">
                                            <h3 className="text-xl font-bold text-[#122a46] border-b border-[#122a46]/10 pb-2">Requirements</h3>
                                            <ul className="space-y-3">
                                                {details.requirements.map((req, i) => (
                                                    <li key={i} className="flex gap-3 text-slate-500">
                                                        <span className="text-teal-500 mt-1">▹</span>
                                                        {req}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ) : (
                                    // Default Content
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
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

                                        <div className="space-y-6 mt-12">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-bold border border-teal-100 mt-1">1</div>
                                                <div>
                                                    <h3 className="text-[#122a46] font-bold text-lg">Application Review</h3>
                                                    <p className="text-slate-500 text-sm">Our engineering leads review every code sample manually. No automated filters.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-bold border border-teal-100 mt-1">2</div>
                                                <div>
                                                    <h3 className="text-[#122a46] font-bold text-lg">Technical Deep Dive</h3>
                                                    <p className="text-slate-500 text-sm">A 60-minute session where we architect a system together. No whiteboard inversions.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-bold border border-teal-100 mt-1">3</div>
                                                <div>
                                                    <h3 className="text-[#122a46] font-bold text-lg">Culture Fit & Offer</h3>
                                                    <p className="text-slate-500 text-sm">Meet the founders and discuss the vision. Offers are extended same-day.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>

                            {/* Right Column: Application Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="bg-white border border-[#122a46]/10 p-8 md:p-10 rounded-[2rem] shadow-2xl shadow-[#122a46]/5 relative overflow-hidden">
                                    <h3 className="text-2xl font-bold text-[#122a46] mb-8">Role Application</h3>

                                    <AnimatePresence mode='wait'>
                                        {status === 'success' ? (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="text-center py-20"
                                            >
                                                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mx-auto flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(20,184,166,0.5)]">
                                                    <svg className="w-10 h-10 text-[#122a46]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#122a46] mb-4">Application Sent</h3>
                                                <p className="text-slate-500 mb-8 max-w-xs mx-auto">
                                                    Your resume is now in our secure pipeline.
                                                </p>
                                                <button onClick={() => window.location.href = '/careers'} className="text-teal-600 font-bold hover:text-[#122a46] transition-colors uppercase tracking-widest text-xs">
                                                    Back to Careers
                                                </button>
                                            </motion.div>
                                        ) : (
                                            <form ref={form} onSubmit={handleSubmit} className="space-y-5 relative z-10">

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold uppercase tracking-widest text-teal-600">Position Applying For</label>
                                                    <div className="relative">
                                                        <select
                                                            name="position"
                                                            value={role}
                                                            onChange={handleRoleChange}
                                                            className="w-full bg-white border border-[#122a46]/10 rounded-xl px-4 py-3 text-[#122a46] focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all outline-none font-medium text-sm appearance-none cursor-pointer"
                                                        >
                                                            <option value="" disabled>Select a role...</option>
                                                            {positions.map((p, i) => (
                                                                <option key={i} value={p}>{p}</option>
                                                            ))}
                                                        </select>
                                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-5">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">First Name</label>
                                                        <input name="first_name" type="text" required className="w-full bg-white border border-[#122a46]/10 rounded-xl px-4 py-3 text-[#122a46] focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all outline-none font-medium text-sm" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Last Name</label>
                                                        <input name="last_name" type="text" required className="w-full bg-white border border-[#122a46]/10 rounded-xl px-4 py-3 text-[#122a46] focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all outline-none font-medium text-sm" />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                                                    <input name="email" type="email" required className="w-full bg-white border border-[#122a46]/10 rounded-xl px-4 py-3 text-[#122a46] focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all outline-none font-medium text-sm" />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">CV / Resume (URL)</label>
                                                    <input name="cv_link" type="url" required className="w-full bg-white border border-[#122a46]/10 rounded-xl px-4 py-3 text-[#122a46] focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all outline-none font-medium placeholder:text-gray-400 text-sm" placeholder="Dropbox / Google Drive Link" />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Portfolio / Github</label>
                                                    <input name="portfolio" type="url" required className="w-full bg-white border border-[#122a46]/10 rounded-xl px-4 py-3 text-[#122a46] focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all outline-none font-medium text-sm" />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Why You?</label>
                                                    <textarea name="about" required className="w-full bg-white border border-[#122a46]/10 rounded-xl px-4 py-3 text-[#122a46] focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all outline-none font-medium h-24 resize-none text-sm placeholder:text-gray-400" placeholder="Briefly introduce yourself..."></textarea>
                                                </div>

                                                {status === 'error' && (
                                                    <div className="text-red-500 text-sm text-center font-bold animate-pulse">
                                                        ⚠ {errorMessage}
                                                    </div>
                                                )}

                                                <button
                                                    disabled={status === 'submitting'}
                                                    type="submit"
                                                    className="w-full py-4 rounded-xl bg-teal-500 text-white hover:bg-teal-400 font-bold text-base tracking-wide shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] hover:scale-[1.02] transition-all duration-300"
                                                >
                                                    {status === 'submitting' ? 'Sending Application...' : 'Submit Application'}
                                                </button>
                                            </form>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
