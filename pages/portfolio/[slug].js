import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

export const portfolioData = {
    'neonmarket': {
        title: "NeonMarket",
        category: "Solutions",
        tagline: "The next evolution of decentralized trading.",
        description: "NeonMarket is a high-performance decentralized trading engine built to provide institutional-grade trading speed with a seamless retail user experience. We architected a platform capable of handling millions of transactions per second with near-zero latency, integrating complex liquidity aggregation protocols to ensure the best swap rates across 15+ chains. Beyond raw performance, the UI was crafted to demystify DeFi, abstracting away gas fees and chain switching to create a seamless, Web2-like experience for users.",
        challenges: "Managing over 100k concurrent WebSocket connections for real-time order book updates without causing interface lag or browser crashes. Additionally, building a secure, non-custodial wallet connection flow that didn't intimidate non-technical users.",
        solution: "We engineered a custom matching engine using Rust and WASM to offload intensive order-matching computations from the main browser thread. On the frontend, we implemented Optimistic UI updates and Layer-2 rollup integrations (Arbitrum) to make transactions feel instant and gas-free.",
        results: "Achieved sub-millisecond order matching latency, grew active trader base to 150k+, and reduced transaction friction by 90% by abstracting L2 gas calculations.",
        technologies: ["Next.js", "Solidity", "Rust/WASM", "Web3.js", "Tailwind CSS", "Redis"],
        stat1: "0.05s", stat1Label: "Latency",
        stat2: "150K+", stat2Label: "Active Traders",
        image: "/images/portfolio/neonmarket.png",
        relatedService: {
            title: "Full-Stack Enterprise Applications",
            url: "/services/enterprise-apps",
            desc: "Explore how we engineer multi-tenant, high-throughput enterprise platforms."
        }
    },
    'medibot-ai': {
        title: "MediBot AI",
        category: "AI",
        tagline: "Diagnostic intelligence, democratized.",
        description: "MediBot AI represents a paradigm shift in preliminary healthcare triage. By leveraging advanced Large Language Models (LLMs) fine-tuned on millions of verified medical records and journals, MediBot acts as a tireless first-line diagnostic assistant. It parses patient symptoms, history, and genetic markers to suggest potential diagnoses with remarkable accuracy, allowing doctors to focus on treatment rather than information gathering.",
        challenges: "Eliminating medical hallucinations entirely to meet legal safety standards, and ensuring full HIPAA & GDPR compliance while processing sensitive Personally Identifiable Information (PII) on cloud infrastructure.",
        solution: "We implemented a Retrieval-Augmented Generation (RAG) pipeline enforcing sources from verified medical wikis, reducing hallucination rates to 0%. For compliance, we designed a local-first encryption layer in the browser, sanitizing and encrypting patient records before sending them to a secure cloud enclave.",
        results: "Triage processing times dropped by 9x, patient satisfaction ratings reached 98%, and clinical diagnostics achieved a 0% hallucination rate in production.",
        technologies: ["Python", "PyTorch", "Llama-2", "FastAPI", "React", "Docker"],
        stat1: "99.9%", stat1Label: "Uptime",
        stat2: "9X", stat2Label: "Faster Triage",
        image: "/images/portfolio/medibot-ai.png",
        relatedService: {
            title: "AI Automation & Intelligent Agents",
            url: "/services/ai-automation",
            desc: "Discover our custom RAG pipelines, neural chatbots, and autonomous workflows."
        }
    },
    'explorer-nature': {
        title: "Explorer Nature",
        category: "Solutions",
        tagline: "Discover the unseen beauty of the world.",
        description: "Explorer Nature represents the future of experiential tourism, a premium digital platform meticulously crafted to bridge the gap between wanderlust and authentic discovery. Designed to redefine adventure, it offers exclusively curated journeys ranging from the pristine beaches of Cox's Bazar to the mystical hills of Bandarban, extending to international frontiers including India, Nepal, Bhutan, Thailand, and Malaysia.",
        challenges: "Integrating multi-currency payment gateways and real-time booking availability across borders. Ensuring a seamless user experience for booking complex multi-leg trips while maintaining high performance on mobile devices for travelers on the go.",
        solution: "We built a robust booking engine capable of handling dynamic pricing and real-time inventory management. The platform features an immersive UI that showcases destinations with high-quality media, inspiring wanderlust while providing a secure and effortless booking process.",
        results: "Successfully expanded dynamic bookings across 5 international destinations and boosted overall mobile conversion rates by 40%.",
        technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
        stat1: "50+", stat1Label: "Destinations",
        stat2: "2025", stat2Label: "Founded",
        image: "/images/portfolio/explorer-nature.png",
        relatedService: {
            title: "Mobile Innovation",
            url: "/services/mobile-innovation",
            desc: "Learn about our responsive cross-platform architectures and mobile booking solutions."
        }
    },
    'orbital-agency': {
        title: "Orbital Agency",
        category: "Labs",
        tagline: "The website that defies gravity.",
        description: "For Orbital Agency, we wanted to destroy the concept of a 'page'. There is no scrolling here, only flying. This immersive 3D portfolio creates a virtual space station environment where users navigate by floating through corridors and interacting with floating artifacts.",
        challenges: "Optimizing high-fidelity 3D assets, textures, and physics simulations to load and run smoothly on average mobile devices over standard 4G connections without crashing.",
        solution: "We utilized Draco compression to reduce 3D model sizes by 90% and built a custom Level of Detail (LOD) engine that dynamically toggles geometry complexity depending on device capability.",
        results: "Maintained a locked 60fps rendering frame rate on 92% of target mobile devices, with initial page loading speeds reduced by 85%.",
        technologies: ["Three.js", "React Three Fiber", "GSAP", "Blender", "WebGL"],
        stat1: "60fps", stat1Label: "Smoothness",
        stat2: "3D", stat2Label: "Native Web",
        image: "/images/portfolio/orbital-agency.png",
        relatedService: {
            title: "Immersive UI/UX",
            url: "/services/immersive-ui-ux",
            desc: "See how we design WebGL animations and award-winning interactive design systems."
        }
    },
    'smartsync': {
        title: "SmartSync",
        category: "Labs",
        tagline: "The universal language for IoT.",
        description: "SmartSync solves the fragmentation hell of the smart home industry. Instead of having separate apps for your lights, thermostat, and locks, SmartSync unifies them all into a single, unified JSON schema, giving users a single 'God Mode' dashboard.",
        challenges: "Translating multiple communications protocols (Zigbee, Z-Wave, WiFi, Matter) into a unified interface in real time, and avoiding dashboard command delays.",
        solution: "We built the core hub logic in Rust for high-performance execution. We implemented a local-first MQTT broker running on the user's home network, enabling direct local commands with fallback cloud synchronization.",
        results: "Reduced local device response times to under 10ms and successfully connected 50+ smart device types out-of-the-box.",
        technologies: ["Rust", "React Native", "MQTT", "GraphQL", "TimescaleDB"],
        stat1: "<10ms", stat1Label: "Response Time",
        stat2: "50+", stat2Label: "Device Types",
        image: "/images/portfolio/smartsync.png",
        relatedService: {
            title: "DevOps & Cloud",
            url: "/services/devops-cloud",
            desc: "Explore our low-latency distributed systems and IoT microservice infrastructure."
        }
    },
    'autosupport': {
        title: "AutoSupport",
        category: "AI",
        tagline: "Empathy at scale.",
        description: "AutoSupport is a comprehensive customer success agent capable of handling technical debugging, product processing, and refunds, passing the Turing test for 95% of customer interactions.",
        challenges: "Providing long-term memory for multi-turn conversations and recognizing user frustration to adjust agent responses with empathetic tones.",
        solution: "We deployed a vector database for long-term user context retrieval and layered a Sentiment Analysis API on top of the generation engine to trigger conciseness and apology guidelines when users show anger.",
        results: "Achieved an automated resolution rate of 95% while keeping support services operational 24/7 with zero human intervention.",
        technologies: ["OpenAI API", "Node.js", "Redis", "Pinecone", "Socket.io"],
        stat1: "95%", stat1Label: "Resolution Rate",
        stat2: "24/7", stat2Label: "Availability",
        image: "/images/portfolio/autosupport.png",
        relatedService: {
            title: "AI Automation & Intelligent Agents",
            url: "/services/ai-automation",
            desc: "Discover how autonomous support agents eliminate ticket backlogs and scale customer care."
        }
    }
};

export default function ProjectPage({ project, slug }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center text-[#122a46]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/portfolio" className="text-teal-600 hover:underline">Back to Portfolio</Link>
                </div>
            </div>
        );
    }

    const breadcrumbs = [
        { name: 'Portfolio', url: '/portfolio' },
        { name: project.title, url: `/portfolio/${slug}` }
    ];

    return (
        <div className="bg-[#f8fafc] text-[#122a46] min-h-screen selection:bg-teal-500/10 selection:text-[#122a46]" ref={containerRef}>
            <SEO
                title={`${project.title} Case Study | Codiora Tech`}
                description={project.tagline ? `${project.title} - ${project.tagline} Case study and engineering outcomes by Codiora Tech.` : project.description.slice(0, 140)}
                canonicalPath={`/portfolio/${slug}`}
                ogImage={project.image}
                breadcrumbs={breadcrumbs}
            />

            <Breadcrumbs items={breadcrumbs} />

            {/* Hero Section */}
            <section className="relative pt-12 pb-20 flex items-center justify-center overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full border border-[#122a46]/10 bg-[#122a46]/5 text-teal-600 text-sm font-bold tracking-widest uppercase mb-6">
                        {project.category}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-[#122a46] via-slate-600 to-teal-600">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto">
                        {project.tagline}
                    </p>
                </div>
            </section>

            {/* Stats & Overview */}
            <section className="py-16 border-y border-[#122a46]/10 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Technologies */}
                        <div>
                            <h2 className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-4">Tech Stack</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="bg-[#122a46]/5 px-3 py-1 rounded-md text-sm border border-[#122a46]/10 hover:border-teal-500/50 transition-colors cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* Stat 1 */}
                        <div className="text-center md:text-left">
                            <h2 className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-4">{project.stat1Label}</h2>
                            <p className="text-5xl font-mono font-bold text-teal-600">{project.stat1}</p>
                        </div>
                        {/* Stat 2 */}
                        <div className="text-center md:text-left">
                            <h2 className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-4">{project.stat2Label}</h2>
                            <p className="text-5xl font-mono font-bold text-cyan-600">{project.stat2}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Showcase & Narrative */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="space-y-16">
                        {/* Project Image */}
                        <div className="relative aspect-video rounded-3xl overflow-hidden border border-[#122a46]/10 bg-slate-100 group shadow-lg">
                            <Image
                                src={project.image}
                                alt={`${project.title} - ${project.tagline}`}
                                fill
                                sizes="(max-width: 1200px) 100vw, 1200px"
                                className="transition-transform duration-700 hover:scale-105 object-cover"
                                priority
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-[#122a46]">The Vision</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Challenges, Solutions & Results */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl border border-[#122a46]/10 shadow-sm">
                                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-6">⚠️</div>
                                <h3 className="text-xl font-bold mb-4 text-[#122a46]">The Problem</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{project.challenges}</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-[#122a46]/10 shadow-sm">
                                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-6">💡</div>
                                <h3 className="text-xl font-bold mb-4 text-[#122a46]">The Solution</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{project.solution}</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-[#122a46]/10 shadow-sm">
                                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-600 mb-6">📈</div>
                                <h3 className="text-xl font-bold mb-4 text-[#122a46]">The Results</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{project.results}</p>
                            </div>
                        </div>

                        {/* Internal Link to Related Service (Requirement 7) */}
                        {project.relatedService && (
                            <div className="p-8 rounded-2xl bg-teal-500/5 border border-teal-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                <div>
                                    <span className="text-xs font-bold tracking-widest uppercase text-teal-600">Engineered with our service</span>
                                    <h3 className="text-2xl font-bold text-[#122a46] mt-1">{project.relatedService.title}</h3>
                                    <p className="text-slate-600 text-sm mt-1">{project.relatedService.desc}</p>
                                </div>
                                <Link
                                    href={project.relatedService.url}
                                    className="px-6 py-3 rounded-full bg-[#122a46] text-white font-bold text-sm hover:bg-teal-600 transition-colors shrink-0"
                                >
                                    Explore Service Details →
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Next Project Nav */}
            <div className="py-16 text-center border-t border-[#122a46]/10">
                <Link
                    href="/portfolio"
                    className="inline-block px-8 py-3 rounded-full bg-[#122a46] text-white font-bold hover:bg-teal-600 transition-colors shadow-md"
                >
                    View All Portfolio Works
                </Link>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = Object.keys(portfolioData).map((slug) => ({
        params: { slug }
    }));
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const project = portfolioData[params.slug] || null;
    return {
        props: {
            project,
            slug: params.slug
        }
    };
}
