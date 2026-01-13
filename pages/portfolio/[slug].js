import { useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/router';


// Dummy Data Repository associated with slugs
const portfolioData = {
    'neonmarket': {
        title: "NeonMarket",
        category: "Solutions",
        tagline: "The next evolution of decentralized trading.",
        description: "NeonMarket isn't just another crypto exchange; it's a high-performance trading engine built for the institutional gaze but designed for the retail touch. We architected a platform capable of handling millions of transactions per second with near-zero latency, integrating complex liquidity aggregation protocols to ensure the best swap rates across 15+ chains. Beyond raw performance, the UI was crafted to demystify DeFi, abstracting away gas fees and chain switching to create a seamless, 'Web2-like' experience for the next billion users.",
        challenges: "The primary bottleneck was the 'blockchain bloat'—managing 100k+ concurrent WebSocket connections for real-time order book updates without lagging the user interface. Additionally, integrating a non-custodial wallet flow that didn't scare off non-technical users was a massive UX hurdle.",
        solution: "We engineered a custom matching engine using Rust and WASM to offload heavy computations from the main thread, achieving sub-millisecond order matching. For the frontend, we implemented 'Optimistic UI' updates and a Layer-2 rollup integration (Arbitrum) to make transactions feel instant and gas-free. The result is a platform that feels like NASDAQ but runs on Ethereum.",
        technologies: ["Next.js", "Solidity", "Rust/WASM", "Web3.js", "Tailwind CSS", "Redis"],
        stat1: "0.05s", stat1Label: "Latency",
        stat2: "150K+", stat2Label: "Active Traders",
        image: "/images/portfolio/neonmarket.png"
    },
    'medibot-ai': {
        title: "MediBot AI",
        category: "AI",
        tagline: "Diagnostic intelligence, democratized.",
        description: "MediBot AI represents a paradigm shift in preliminary healthcare triage. By leveraging advanced Large Language Models (LLMs) fine-tuned on millions of verified medical records and journals, MediBot acts as a tireless first-line diagnostic assistant. It parses patient symptoms, history, and genetic markers to suggest potential diagnoses with remarkable accuracy, allowing doctors to focus on treatment rather than information gathering. It essentially gives every clinic a supercomputer partner.",
        challenges: "Absolute accuracy and zero hallucination were non-negotiable legal requirements. Furthermore, handling strict PII (Personally Identifiable Information) compliance (GDPR & HIPAA) while training models in the cloud presented a security architectural nightmare.",
        solution: "We implemented a RAG (Retrieval-Augmented Generation) pipeline that forces the AI to cite sources from verified medical wikis, reducing hallucination rates to near 0%. For privacy, we deployed a 'Local-First' inference engine where patient data is sanitized locally in the browser before being encrypted and sent to a secure enclave for processing. No raw patient data ever touches our public servers.",
        technologies: ["Python", "PyTorch", "Llama-2", "FastAPI", "React", "Docker"],
        stat1: "99.9%", stat1Label: "Uptime",
        stat2: "9X", stat2Label: "Faster Triage",
        image: "/images/portfolio/medibot-ai.png"
    },
    'explorer-nature': {
        title: "Explorer Nature",
        category: "Solutions",
        tagline: "Discover the unseen beauty of the world.",
        description: "Explorer Nature represents the future of experiential tourism—a premium digital platform meticulously crafted to bridge the gap between wanderlust and authentic discovery. Designed to redefine adventure, it offers exclusively curated journeys ranging from the pristine beaches of Cox's Bazar to the mystical hills of Bandarban, extending to international frontiers including India, Nepal, Bhutan, Thailand, and Malaysia. By integrating seamless booking technology with immersive destination storytelling, Explorer Nature transforms travel planning into an effortless and inspiring experience.",
        challenges: "Integrating multi-currency payment gateways and real-time booking availability across borders was a significant hurdle. Ensuring a seamless user experience for booking complex multi-leg trips while maintaining high performance on mobile devices for travelers on the go.",
        solution: "We built a robust booking engine capable of handling dynamic pricing and real-time inventory management. The platform features an immersive UI that showcases destinations with high-quality media, inspiring wanderlust while providing a secure and effortless booking process.",
        technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
        stat1: "50+", stat1Label: "Destinations",
        stat2: "2025", stat2Label: "Founded",
        image: "/images/portfolio/explorer-nature.png"
    },
    'orbital-agency': {
        title: "Orbital Agency",
        category: "Labs",
        tagline: "The website that defies gravity.",
        description: "For Orbital Agency, we wanted to destroy the concept of a 'page'. There is no scrolling here, only flying. This immersive 3D portfolio creates a virtual space station environment where users navigate by floating through corridors and interacting with floating artifacts. It serves as a tech demo for the future of the spatial web (Web3D), pushing the limits of what a browser can render natively.",
        challenges: "Optimization. Loading high-fidelity 3D models with textures, lighting, and physics simulation on a mobile 4G network is usually a recipe for disaster. We needed console-quality graphics with website-speed loading times.",
        solution: "We utilized Draco compression to reduce 3D asset sizes by 90% without visible quality loss. We also implemented a custom 'Level of Detail' (LOD) system that dynamically adjusts geometry complexity based on the user's device power. Raycasting was used for interaction, allowing for precise clicking on 3D objects even while moving.",
        technologies: ["Three.js", "React Three Fiber", "GSAP", "Blender", "WebGL"],
        stat1: "60fps", stat1Label: "Smoothness",
        stat2: "3D", stat2Label: "Native Web",
        image: "/images/portfolio/orbital-agency.png"
    },
    'smartsync': {
        title: "SmartSync",
        category: "Labs",
        tagline: "The universal language for IoT.",
        description: "SmartSync solves the fragmentation hell of the smart home industry. Instead of having separate apps for your lights, thermostat, and locks, SmartSync unifies them all. It's a central hub application that translates disparate protocols (Zigbee, Z-Wave, WiFi, Matter) into a single, unified JSON schema, giving users a single 'God Mode' dashboard to control their entire physical environment.",
        challenges: "Protocol translation and latency. Different devices speak different languages at different speeds. Creating a UI that updates instantly when a physical light turns on, regardless of the brand, required massive backend synchronization.",
        solution: "We built the core hub logic in Rust for memory safety and raw speed. We implemented a local-first MQTT broker that runs on the user's local network, meaning lights turn on instantly even if the internet is down. We also developed a 'Predictive State' engine that updates the UI immediately when a user clicks, reconciling with the physical device state in the background.",
        technologies: ["Rust", "React Native", "MQTT", "GraphQL", "TimescaleDB"],
        stat1: "<10ms", stat1Label: "Response Time",
        stat2: "50+", stat2Label: "Device Types",
        image: "/images/portfolio/smartsync.png"
    },
    'autosupport': {
        title: "AutoSupport",
        category: "AI",
        tagline: "Empathy at scale.",
        description: "AutoSupport isn't a chatbot; it's a customer success agent. Capable of handling everything from complex technical debugging to processing refunds and upselling products, it passes the Turing test for 95% of interactions. It remembers context from conversations that happened months ago and adjusts its tone based on the user's emotional state, turning angry customers into loyal advocates.",
        challenges: "Context retention and emotional intelligence. Standard chatbots forget what you said 5 minutes ago and sound robotic. We needed an agent that could handle a 30-minute debugging session without losing the thread or getting confused.",
        solution: "We implemented a vector database (Pinecone) for long-term memory, allowing the AI to recall past user interactions instantly. We layered a Sentiment Analysis API on top of the generation model; if the user sounds frustrated, the AI switches to a more apologetic and concise 'Emergency Mode'. If the user is happy, it becomes more conversational and helpful.",
        technologies: ["OpenAI API", "Node.js", "Redis", "Pinecone", "Socket.io"],
        stat1: "95%", stat1Label: "Resolution Rate",
        stat2: "24/7", stat2Label: "Availability",
        image: "/images/portfolio/autosupport.png"
    }
};

export default function ProjectPage() {
    const router = useRouter();
    const { slug } = router.query;
    const project = portfolioData[slug];
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    // Handle loading or invalid slug
    // Ensure the hook doesn't fail by always rendering the container

    const content = () => {
        if (!slug) return <div className="min-h-screen bg-[#050505]" />;
        if (!project) return (
            <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <button onClick={() => router.push('/portfolio')} className="text-cyan-400 hover:underline">Back to Portfolio</button>
                </div>
            </div>
        );

        return (
            <>
                <Head>
                    <title>{project.title} | Codiora Tech</title>
                    <meta name="description" content={project.description} />
                </Head>

                {/* Hero Section */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[#020202] z-0">
                        {/* Background Noise & Gradient */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 text-cyan-400 text-sm font-bold tracking-widest uppercase mb-6"
                        >
                            {project.category}
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-600"
                        >
                            {project.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
                        >
                            {project.tagline}
                        </motion.p>
                    </div>
                </section>

                {/* Stats & Overview */}
                <section className="py-20 border-y border-white/5 bg-white/[0.02]">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Technologies */}
                            <div>
                                <h3 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-4">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="bg-white/10 px-3 py-1 rounded-md text-sm border border-white/5 hover:border-purple-500/50 transition-colors cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/* Stat 1 */}
                            <div className="text-center md:text-left">
                                <h3 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-2">{project.stat1Label}</h3>
                                <p className="text-5xl font-mono font-bold text-cyan-400">{project.stat1}</p>
                            </div>
                            {/* Stat 2 */}
                            <div className="text-center md:text-left">
                                <h3 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-2">{project.stat2Label}</h3>
                                <p className="text-5xl font-mono font-bold text-purple-400">{project.stat2}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Deep Dive Content */}
                <section className="py-32 relative">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-20"
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-video w-full bg-[#111] rounded-3xl border border-white/10 relative overflow-hidden group shadow-[0_0_50px_rgba(168,85,247,0.15)]">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10 pointer-events-none"></div>

                                <motion.div style={{ scale }} className="relative w-full h-full">
                                    {project.image && project.image.startsWith('/') ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="transition-transform duration-700 hover:scale-105"
                                        />
                                    ) : (
                                        /* Fallback for safety if image is still text/emoji */
                                        <div className="w-full h-full flex items-center justify-center text-9xl">{project.image}</div>
                                    )}
                                </motion.div>

                                {/* Glare effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>
                            </div>

                            {/* Description */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-white">The Vision</h2>
                                <p className="text-lg text-gray-400 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Challenges & Solutions */}
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 hover:border-red-500/30 transition-colors duration-500 group">
                                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">⚠️</div>
                                    <h3 className="text-xl font-bold mb-4 text-white">The Challenge</h3>
                                    <p className="text-gray-400">{project.challenges}</p>
                                </div>
                                <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-colors duration-500 group">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform">💡</div>
                                    <h3 className="text-xl font-bold mb-4 text-white">The Solution</h3>
                                    <p className="text-gray-400">{project.solution}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Next Project Nav */}
                <div className="py-20 text-center">
                    <button onClick={() => router.push('/portfolio')} className="px-8 py-3 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform">
                        View All Projects
                    </button>
                </div>
            </>
        );
    };

    return (
        <div className="bg-[#020202] text-white min-h-screen selection:bg-purple-500/30 selection:text-white" ref={containerRef}>
            {content()}
        </div>
    );
}
