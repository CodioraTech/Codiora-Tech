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
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-teal-500"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>,
        description: `
            <p>Join our dynamic design and frontend engineering team to construct robust, high-performance, and visually stunning user interfaces. As a Frontend Engineering Intern, you won't just be fixing minor bugs—you'll be architecting responsive web applications used by enterprise clients. We leverage a modern tech stack consisting of React, Next.js, and TailwindCSS.</p>
            <p>You'll gain hands-on experience in rendering strategies (SSR/SSG), complex state management, web accessibility (a11y), and performance optimization techniques like code splitting and lazy loading.</p>
            <h3 class="text-[#122a46] font-bold text-xl mt-8 mb-4">Key Responsibilities & Learnings</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li>Collaborate with UI/UX designers to implement scalable component libraries.</li>
                <li>Build complex, buttery-smooth animations using Framer Motion and GSAP.</li>
                <li>Integrate deeply with RESTful APIs and GraphQL endpoints for data fetching.</li>
                <li>Establish rigorous testing protocols using Jest, React Testing Library, and Cypress.</li>
                <li>Optimize Core Web Vitals to guarantee blazing fast load times.</li>
            </ul>
        `
    },
    "backend-systems": {
        title: "Backend Systems Intern",
        track: "Backend Track",
        color: "teal",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-teal-500"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg>,
        description: `
            <p>Dive deep into the core engine of our applications. As a Backend Systems Intern, you'll tackle distributed systems, microservices architectures, and highly available databases. Your code will directly impact the reliability and speed of our data processing engines.</p>
            <p>Working primarily with Node.js, Express, Go, and PostgreSQL, you'll learn how to build secure, scalable APIs capable of handling thousands of concurrent requests.</p>
            <h3 class="text-[#122a46] font-bold text-xl mt-8 mb-4">Key Responsibilities & Learnings</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li>Design, implement, and maintain robust API systems (REST and gRPC architectures).</li>
                <li>Perform complex database modeling, query optimization, and indexing.</li>
                <li>Implement aggressive caching strategies using Redis and Memcached.</li>
                <li>Understand containerization and orchestration utilizing Docker and Kubernetes.</li>
                <li>Write comprehensive security protocols (JWT, OAuth2, Rate Limiting).</li>
            </ul>
        `
    },
    "ai-data-science": {
        title: "AI & Data Science Intern",
        track: "AI Track",
        color: "teal",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-teal-500"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" /></svg>,
        description: `
            <p>Position yourself at the forefront of the AI revolution. Our AI & Data Science Interns work on the bleeding edge of Large Language Models (LLMs), predictive analytics, and enterprise AI agent integration.</p>
            <p>You'll be working directly with the Python data stack (PyTorch, Pandas) and vector databases to create intelligent systems that actually solve business problems, moving beyond basic wrappers to deep custom fine-tuning and complex RAG (Retrieval-Augmented Generation) pipelines.</p>
            <h3 class="text-[#122a46] font-bold text-xl mt-8 mb-4">Key Responsibilities & Learnings</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li>Develop advanced Prompt Engineering techniques and RAG architectures.</li>
                <li>Manipulate and clean large datasets utilizing Pandas and NumPy.</li>
                <li>Implement vector search using Pinecone, Qdrant, or Milvus.</li>
                <li>Fine-tune open-source models (Llama 3, Mistral) for domain-specific tasks.</li>
                <li>Deploy machine learning models securely to production environments.</li>
            </ul>
        `
    },
    "full-stack-developer": {
        title: "Full Stack Developer Intern",
        track: "Full Stack Track",
        color: "teal",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-teal-500"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>,
        description: `
            <p>Become a versatile engineer capable of handling the entire application lifecycle. As a Full Stack Intern, you will bridge the gap between elegant user interfaces and powerful backend infrastructure. You'll work across the MERN stack (MongoDB, Express, React, Node.js) alongside Next.js to deliver end-to-end features.</p>
            <p>This role is designed for generalists who want to understand how all the pieces of a modern web application fit together, from the database schema up to the client-side state.</p>
            <h3 class="text-[#122a46] font-bold text-xl mt-8 mb-4">Key Responsibilities & Learnings</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li>Architect and develop end-to-end features spanning the frontend and backend.</li>
                <li>Manage NoSQL (MongoDB) databases and define Mongoose schemas.</li>
                <li>Build secure authentication flows using NextAuth, JWT, and session management.</li>
                <li>Handle seamless API integrations bridging client-side components to backend controllers.</li>
                <li>Deploy full-stack applications to platforms like Vercel, AWS, and DigitalOcean.</li>
            </ul>
        `
    },
    "devops-engineer": {
        title: "DevOps Engineer Intern",
        track: "Cloud & DevOps Track",
        color: "teal",
        svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-teal-500"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>,
        description: `
            <p>Ensure our applications run smoothly, securely, and at scale. As a DevOps Engineer Intern, you will focus on automation, continuous integration/continuous deployment (CI/CD), and cloud infrastructure architecture.</p>
            <p>You'll gain invaluable hands-on experience provisioning AWS resources, managing Docker containers, and writing infrastructure as code, ensuring that our development team can ship code reliably multiple times a day.</p>
            <h3 class="text-[#122a46] font-bold text-xl mt-8 mb-4">Key Responsibilities & Learnings</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li>Automate build, test, and deployment processes using GitHub Actions and Jenkins.</li>
                <li>Containerize applications using Docker and manage orchestration with Kubernetes.</li>
                <li>Provision cloud infrastructure on AWS (EC2, S3, RDS, Lambda) using Terraform.</li>
                <li>Implement comprehensive system monitoring and logging using Prometheus and Grafana.</li>
                <li>Ensure strict cloud security, IAM policies, and compliance standards.</li>
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

            <div className="bg-[#f8fafc] min-h-screen text-slate-600 selection:bg-teal-500/30 font-sans">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[0%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10 max-w-4xl">
                    <Link href="/internship" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-teal-600 transition-colors mb-12 uppercase tracking-widest font-bold">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        Back to Tracks
                    </Link>

                    <div className="bg-white border border-[#122a46]/5 p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden shadow-xl shadow-[#122a46]/5">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600"></div>

                        <div className="mb-10">
                            <div className="mb-6 bg-teal-500/10 w-20 h-20 rounded-2xl flex items-center justify-center">
                                {post.svg}
                            </div>
                            <div className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-widest mb-4">
                                {post.track}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-[#122a46] mb-6">{post.title}</h1>
                        </div>

                        <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed mb-12">
                            <div dangerouslySetInnerHTML={{ __html: post.description }}></div>
                        </div>

                        <div className="border-t border-[#122a46]/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <div className="text-[#122a46] font-bold mb-1">Next Cohort</div>
                                <div className="text-sm text-slate-500">Fully Remote • Paid Internship</div>
                            </div>
                            <Link href={`/careers-apply?role=${encodeURIComponent(post.title)}`}>
                                <button className="px-10 py-4 bg-teal-500 text-white font-bold rounded-full hover:bg-teal-400 hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] hover:-translate-y-1 transition-all duration-300">
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
