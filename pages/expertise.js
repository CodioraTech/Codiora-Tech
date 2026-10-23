import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const DOMAINS = [
    {
        id: "ai",
        category: "AI & Automation",
        title: "Autonomous AI Agents & LLM Workflows",
        subtitle: "Integrating cognitive reasoning, RAG architectures, and autonomous background agents directly into operational workflows.",
        badge: "Frontier Tech",
        metric: "Sub-1s Agent Decisions",
        capabilities: [
            "Custom RAG pipelines powered by pgvector, Pinecone, and hybrid semantic search",
            "Autonomous multi-step function calling agents using OpenAI, Claude, and local Ollama models",
            "Structured JSON data extraction and automated validation from unformatted inputs",
            "Human-in-the-loop approval workflows for critical operational decisions"
        ],
        stack: ["OpenAI API", "Claude 3.5 Sonnet", "LangChain", "LlamaIndex", "Pinecone", "pgvector", "FastAPI"],
        icon: (
            <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        accent: "from-teal-500 to-cyan-500"
    },
    {
        id: "scraping",
        category: "Web Scraping & Data",
        title: "High-Scale Web Scraping & Data Extraction",
        subtitle: "Engineering resilient, distributed crawler clusters capable of bypassing complex anti-bot defenses at scale.",
        badge: "Core Strength",
        metric: "10M+ Records / Day",
        capabilities: [
            "Headless browser clusters powered by Playwright and Puppeteer with stealth fingerprinting",
            "Smart residential proxy rotation, auto-retry exponential backoff, and IP pool health checks",
            "Automated Cloudflare, Datadome, and reCAPTCHA bypassing algorithms",
            "Automated ETL pipelines cleaning, deduplicating, and normalizing raw web data into PostgreSQL/S3"
        ],
        stack: ["Python", "Playwright", "Scrapy", "Redis Queue", "Celery", "PostgreSQL", "DuckDB", "Docker"],
        icon: (
            <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7zm0 4h16M8 4v4m8-4v4" />
            </svg>
        ),
        accent: "from-blue-600 to-cyan-500"
    },
    {
        id: "backend",
        category: "Backend Architecture",
        title: "High-Throughput Microservices & APIs",
        subtitle: "Architecting backend systems engineered for sub-100ms response times and zero data corruption.",
        badge: "Reliability",
        metric: "< 80ms p99 Latency",
        capabilities: [
            "Async RESTful & GraphQL APIs built with Python FastAPI and Node.js TypeScript",
            "Normalized PostgreSQL relational schemas with optimal composite indexing and partitioning",
            "In-memory Redis caching layers, distributed locks, and pub/sub message brokers",
            "Strict Pydantic/Zod schema validation ensuring zero type errors across system boundaries"
        ],
        stack: ["Python FastAPI", "Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "GraphQL", "gRPC"],
        icon: (
            <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        ),
        accent: "from-emerald-600 to-teal-500"
    },
    {
        id: "frontend",
        category: "Frontend & UI/UX",
        title: "Pixel-Perfect Web Applications & SaaS",
        subtitle: "Building responsive, modern digital interfaces that delight users and load in milliseconds.",
        badge: "Design & UX",
        metric: "95+ Lighthouse Scores",
        capabilities: [
            "Full-stack Next.js (App & Pages Router) applications with Server-Side Rendering (SSR) and edge caching",
            "Accessible design systems with TailwindCSS, micro-animations, and fluid responsive viewports",
            "Real-time UI updates with WebSockets, optimistic UI rendering, and offline caching",
            "Strict WCAG 2.1 accessibility compliance and enterprise-level responsive cross-browser testing"
        ],
        stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "TanStack Query", "Vercel"],
        icon: (
            <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        accent: "from-teal-600 to-cyan-500"
    },
    {
        id: "devops",
        category: "Cloud & DevOps",
        title: "Self-Healing Cloud Infrastructure & CI/CD",
        subtitle: "Infrastructure-as-Code pipelines designed for zero-downtime rollouts, auto-scaling, and telemetry.",
        badge: "Infrastructure",
        metric: "99.9% Uptime Guarantee",
        capabilities: [
            "Containerized deployments using Docker and lightweight orchestration on AWS ECS and GCP Cloud Run",
            "Automated CI/CD pipelines with GitHub Actions running linters, unit tests, and security scans",
            "Cloudflare edge caching, SSL management, DDoS mitigation, and smart CDN routing",
            "Real-time observability with Sentry error monitoring and Datadog uptime tracking"
        ],
        stack: ["AWS", "Google Cloud", "Docker", "Terraform", "GitHub Actions", "Cloudflare", "Sentry"],
        icon: (
            <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
        accent: "from-slate-700 to-teal-500"
    },
    {
        id: "security",
        category: "Security & Auditing",
        title: "Enterprise Hardening & Code Reviews",
        subtitle: "Protecting user data with rigorous vulnerability scanning, encrypted secrets, and compliance readiness.",
        badge: "Defense",
        metric: "OWASP Top-10 Compliant",
        capabilities: [
            "OWASP Top-10 security audit covering SQL injection, XSS, CSRF, and broken access controls",
            "Strict JWT, OAuth2, and session token rotation with encrypted HTTP-only cookie storage",
            "Automated dependency vulnerability monitoring via Dependabot and Snyk scanning",
            "Zero-trust credential management ensuring production keys never touch client channels"
        ],
        stack: ["OWASP ZAP", "OAuth2", "JWT", "Snyk", "PostgreSQL RLS", "Cloudflare WAF"],
        icon: (
            <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        accent: "from-cyan-600 to-teal-500"
    }
];

const CATEGORIES = ["All", "AI & Automation", "Web Scraping & Data", "Backend Architecture", "Frontend & UI/UX", "Cloud & DevOps"];

export default function Expertise() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredDomains = selectedCategory === "All"
        ? DOMAINS
        : DOMAINS.filter(d => d.category === selectedCategory);

    return (
        <>
            <SEO
                title="Engineering Expertise & Technology Stack | Codiora Tech"
                description="Explore Codiora Tech's comprehensive technology stack: AI automation, high-scale web scraping, Next.js frontend, Python FastAPI backend, and cloud DevOps."
                canonicalPath="/expertise"
            />

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/20">
                {/* Background Ambient Glows */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[140px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#122a46]/5 rounded-full blur-[140px] animate-pulse-slow delay-1000" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay pointer-events-none" />
                </div>

                <div className="container mx-auto px-6 pt-36 sm:pt-40 md:pt-44 pb-32 relative z-10">
                    <div className="mb-8">
                        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Expertise', href: '/expertise' }]} />
                    </div>

                    {/* HERO */}
                    <section className="text-center max-w-4xl mx-auto mb-20 sm:mb-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-700 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
                        >
                            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                            Full-Stack, Cloud & AI Capabilities
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.05]"
                        >
                            ARCHITECTURAL RIGOR. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-[#122a46]">
                                PRODUCTION SPEED.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto mb-10"
                        >
                            We don't chase trendy toys. We select battle-tested engineering tools curated for speed, sub-100ms latencies, and lean operational cloud costs.
                        </motion.p>

                        {/* Category Filter Pills */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {CATEGORIES.map((cat, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                                        selectedCategory === cat
                                            ? 'bg-[#122a46] text-white shadow-md shadow-[#122a46]/20'
                                            : 'bg-white text-slate-600 border border-[#122a46]/10 hover:border-teal-500 hover:text-[#122a46]'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* DOMAIN CARDS GRID */}
                    <section className="mb-32">
                        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <AnimatePresence>
                                {filteredDomains.map((domain) => (
                                    <motion.div
                                        key={domain.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white border border-[#122a46]/8 rounded-3xl p-8 shadow-lg shadow-[#122a46]/5 hover:border-teal-500/30 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                                    >
                                        <div>
                                            {/* Header */}
                                            <div className="flex items-center justify-between gap-4 mb-6">
                                                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                                                    {domain.icon}
                                                </div>
                                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                                                    {domain.metric}
                                                </span>
                                            </div>

                                            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                                                {domain.category}
                                            </div>
                                            <h3 className="text-2xl font-bold text-[#122a46] mb-3">
                                                {domain.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                                                {domain.subtitle}
                                            </p>

                                            {/* Capabilities */}
                                            <div className="space-y-2.5 mb-8 border-t border-[#122a46]/5 pt-6">
                                                {domain.capabilities.map((cap, j) => (
                                                    <div key={j} className="flex items-start gap-2.5 text-xs text-slate-600">
                                                        <span className="text-teal-600 font-bold shrink-0 mt-0.5">✓</span>
                                                        <span>{cap}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Stack Tags */}
                                        <div className="border-t border-[#122a46]/5 pt-6">
                                            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-3">Primary Tooling</div>
                                            <div className="flex flex-wrap gap-1.5">
                                                {domain.stack.map((item, k) => (
                                                    <span key={k} className="px-2.5 py-1 rounded-md bg-[#f8fafc] border border-[#122a46]/10 text-[11px] font-semibold text-[#122a46]">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </section>

                    {/* ARCHITECTURE DECISION PRINCIPLES */}
                    <section className="mb-32 bg-white rounded-[2.5rem] border border-[#122a46]/10 p-8 sm:p-12 md:p-16 shadow-xl relative overflow-hidden">
                        <div className="max-w-3xl mb-12">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">The Decision Framework</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#122a46] mt-2">
                                How We Choose Your Stack
                            </h2>
                            <p className="text-slate-600 text-base mt-3 leading-relaxed">
                                We treat your cloud budget and development timeline like our own capital. Here are our 3 non-negotiable architectural tenets.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#122a46]/5">
                                <div className="text-2xl font-black text-teal-600 mb-2">01.</div>
                                <h4 className="text-lg font-bold text-[#122a46] mb-2">Type Safety Across Boundaries</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    From database models to API payloads and React components, strict TypeScript and Pydantic schemas prevent runtime bugs before code ever deploys.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#122a46]/5">
                                <div className="text-2xl font-black text-teal-600 mb-2">02.</div>
                                <h4 className="text-lg font-bold text-[#122a46] mb-2">Zero Proprietary Lock-In</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    We package applications in standard Docker containers and rely on open-source standards (PostgreSQL, Redis, Linux) so you can run anywhere.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#122a46]/5">
                                <div className="text-2xl font-black text-teal-600 mb-2">03.</div>
                                <h4 className="text-lg font-bold text-[#122a46] mb-2">Cost-Conscious Cloud Scaling</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    We optimize database queries, implement aggressive in-memory caching, and use serverless auto-scaling so your cloud bill stays minimal as traffic grows.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="relative rounded-[3rem] overflow-hidden bg-[#122a46] text-white p-10 sm:p-16 text-center shadow-2xl max-w-5xl mx-auto">
                        <div className="absolute top-0 right-1/4 w-80 h-80 bg-teal-500/20 rounded-full blur-[90px] pointer-events-none" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-400 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 inline-block mb-6">
                                Have an Existing Codebase?
                            </span>
                            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
                                We Are Polyglot Engineers.
                            </h2>
                            <p className="text-slate-300 text-base mb-8 font-light">
                                Whether you're starting fresh, modernizing a legacy codebase, or needing high-scale scraping, challenge us with your hardest requirements.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <button className="px-8 py-4 rounded-xl bg-teal-400 hover:bg-teal-300 text-[#0f172a] font-black text-sm tracking-widest uppercase transition-all shadow-lg shadow-teal-500/20">
                                        Discuss Technical Requirements →
                                    </button>
                                </Link>
                                <Link href="/process">
                                    <button className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-widest uppercase border border-white/20 transition-all">
                                        See How We Build ↗
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
