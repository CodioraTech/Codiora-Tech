import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Mock Data for Internship Positions
const positionData = {
    "frontend-engineering": {
        title: "Frontend Engineering Intern",
        track: "Frontend Track",
        color: "teal",
        icon: "🎨",
        description: `
            <p>You will work directly with our Design and Product teams to build pixel-perfect user interfaces. We use React, Next.js, and TailwindCSS extensively. You will learn about state management, component lifecycles, and performance optimization.</p>
            <h3 class="text-white font-bold text-xl mt-8 mb-4">What You Will Learn</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li>Building reusable component libraries.</li>
                <li>Animating interfaces with Framer Motion.</li>
                <li>Integrating with REST and GraphQL APIs.</li>
                <li>Writing unit and integration tests (Jest, Cypress).</li>
            </ul>
        `
    },
    "backend-systems": {
        title: "Backend Systems Intern",
        track: "Backend Track",
        color: "indigo",
        icon: "⚙️",
        description: `
            <p>Dive deep into our microservices architecture. You will be responsible for building high-performance APIs and optimizing database queries. We use Node.js, Go, and PostgreSQL.</p>
            <h3 class="text-white font-bold text-xl mt-8 mb-4">What You Will Learn</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li>API Design principles (REST/gRPC).</li>
                <li>Database modeling and query optimization.</li>
                <li>Caching strategies using Redis.</li>
                <li>Containerization with Docker and Kubernetes.</li>
            </ul>
        `
    },
    "ai-data-science": {
        title: "AI & Data Science Intern",
        track: "AI Track",
        color: "rose",
        icon: "🧠",
        description: `
            <p>Work on the cutting edge of Large Language Models (LLMs) and predictive analytics. You will help fine-tune models and build RAG pipelines.</p>
            <h3 class="text-white font-bold text-xl mt-8 mb-4">What You Will Learn</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li>Prompt Engineering and RAG architectures.</li>
                <li>Python data stack (Pandas, NumPy, PyTorch).</li>
                <li>Vector databases (Pinecone, Milvus).</li>
                <li>Deploying ML models to production.</li>
            </ul>
        `
    }
};

export default function InternshipPost() {
    const router = useRouter();
    const { slug } = router.query;
    const post = positionData[slug] || positionData["frontend-engineering"]; // Fallback

    return (
        <>
            <Head>
                <title>{post.title} | Codiora Tech Internship</title>
            </Head>

            <div className="bg-[#020202] min-h-screen text-gray-300 selection:bg-teal-500/30 font-sans">
                <div className="fixed inset-0 pointer-events-none">
                    <div className={`absolute top-[0%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-${post.color}-900/10 rounded-full blur-[150px] animate-pulse-slow`} />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10 max-w-4xl">
                    <Link href="/internship" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-12 uppercase tracking-widest font-bold">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        Back to Tracks
                    </Link>

                    <div className="bg-[#0a0a0a] border border-white/5 p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden">
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${post.color}-400 to-${post.color}-600`}></div>

                        <div className="mb-10">
                            <div className="text-6xl mb-6">{post.icon}</div>
                            <div className={`inline-block px-4 py-1.5 rounded-full border border-${post.color}-500/30 bg-${post.color}-500/10 text-${post.color}-400 text-xs font-bold uppercase tracking-widest mb-4`}>
                                {post.track}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">{post.title}</h1>
                        </div>

                        <div className="prose prose-invert prose-lg max-w-none text-gray-400 leading-relaxed mb-12">
                            <div dangerouslySetInnerHTML={{ __html: post.description }}></div>
                        </div>

                        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <div className="text-white font-bold mb-1">Fall 2025 Cohort</div>
                                <div className="text-sm text-gray-500">Fully Remote • Paid Internship</div>
                            </div>
                            <Link href={`/careers-apply?role=${encodeURIComponent(post.title)}`}>
                                <button className={`px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]`}>
                                    Apply for this Track
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
