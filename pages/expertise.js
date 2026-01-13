import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

const domains = [
    {
        title: "Frontend Engineering",
        desc: "Pixel-perfect, responsive, and accessible interfaces that users love to touch.",
        stack: ["React", "Next.js", "Vue", "TailwindCSS", "Framer Motion", "Three.js"],
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "Backend Architecture",
        desc: "Robust, scalable server-side systems designed to handle millions of requests.",
        stack: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "GraphQL"],
        gradient: "from-green-500 to-emerald-500"
    },
    {
        title: "Cloud & DevOps",
        desc: "Infrastructure as code. We build self-healing, auto-scaling deployment pipelines.",
        stack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "CI/CD"],
        gradient: "from-orange-500 to-red-500"
    },
    {
        title: "Artificial Intelligence",
        desc: "Integrating cutting-edge ML models to automate workflows and generate insights.",
        stack: ["PyTorch", "TensorFlow", "OpenAI API", "Hugging Face", "Pinecone", "LangChain"],
        gradient: "from-purple-500 to-pink-500"
    }
];

export default function Expertise() {
    return (
        <>
            <Head>
                <title>Codiora Tech | Expertise</title>
            </Head>

            <div className="bg-[#020202] min-h-screen text-white overflow-hidden selection:bg-purple-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] opacity-30 left-[-10%] w-[800px] h-[800px] bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10">
                    <div className="text-center mb-32">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                        >
                            TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">MASTERY</span>
                        </motion.h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            We don't just use tools; we master them. Our stack is curated for speed, security, and scalability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {domains.map((domain, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white/5 border border-white/5 p-10 rounded-[2rem] hover:bg-white/10 transition-all group relative overflow-hidden"
                            >
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${domain.gradient}`}></div>
                                <div className={`absolute -right-20 -top-20 w-60 h-60 bg-gradient-to-r ${domain.gradient} opacity-20 blur-[80px] group-hover:opacity-30 transition-opacity`}></div>

                                <h3 className="text-3xl font-bold mb-4 text-white relative z-10">{domain.title}</h3>
                                <p className="text-gray-400 text-lg mb-8 relative z-10 min-h-[60px]">{domain.desc}</p>

                                <div className="flex flex-wrap gap-3 relative z-10">
                                    {domain.stack.map((tech, j) => (
                                        <span key={j} className="px-4 py-2 bg-black/50 border border-white/10 rounded-full text-sm font-bold text-gray-300 hover:text-white hover:border-white/30 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-32 p-12 bg-gradient-to-r from-gray-900 to-black rounded-3xl border border-white/10 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-20"></div>
                        <h2 className="text-3xl font-bold mb-6 relative z-10">Don't See Your Tech?</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
                            We are polyglot engineers. We adapt to the best tool for the job. Challenge us with your requirements.
                        </p>
                        <Link href="/contact">
                            <button className="px-10 py-4 border border-white/30 rounded-full font-bold hover:bg-white hover:text-black transition-all relative z-10">
                                Discuss Custom Requirements
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
