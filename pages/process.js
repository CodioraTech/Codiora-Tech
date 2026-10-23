import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const PROCESS_PHASES = [
    {
        id: "01",
        phase: "Phase 01",
        title: "Deep-Dive Discovery & Technical Scoping",
        duration: "Days 1 – 3",
        badge: "Milestone 01",
        tagline: "Uncovering architecture bottlenecks and defining precision requirements before writing a single line of code.",
        summary: "We don't do vague hand-waving or bloated 50-page PDFs. We sit down with your technical stakeholders, inspect existing APIs, audit databases, and map out exactly what needs to be engineered.",
        activities: [
            "Audit existing repositories, database schemas, and external API rate limits",
            "Identify operational bottlenecks and security vulnerabilities",
            "Establish quantifiable acceptance criteria and performance thresholds",
            "Lock milestone roadmap, delivery milestones, and sprint priorities"
        ],
        deliverables: [
            "System Architecture RFC Document",
            "API Contract & Data Schema Drafts",
            "Interactive Wireframes & Scope Matrix",
            "Fixed-Timeline Delivery Roadmap"
        ],
        tools: ["Notion", "Linear", "Miro", "Figma", "Postman"],
        clientCommitment: "2-3 hours total for discovery interviews and architecture sign-off",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
        ),
        accentColor: "from-blue-600 to-cyan-500",
        pillBg: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
        id: "02",
        phase: "Phase 02",
        title: "Architecture Blueprint & Infrastructure Design",
        duration: "Days 4 – 7",
        badge: "Milestone 02",
        tagline: "Laying the structural foundation for high concurrency, zero data loss, and sub-100ms response times.",
        summary: "Before jumping into UI, we architect the foundation. We choose the optimal database engine, set up auto-scaling cloud clusters, configure proxy rotation pools for data scrapers, and establish secure IAM roles.",
        activities: [
            "Design normalized relational (PostgreSQL) or document schemas with indexing strategy",
            "Blueprint proxy-rotation pools, anti-captcha middleware, and crawler queuing systems",
            "Configure microservices routing, Redis caching layers, and asynchronous task queues (Celery/BullMQ)",
            "Model cloud infrastructure cost forecasts to ensure lean operational overhead"
        ],
        deliverables: [
            "Complete Database ERD & Migration Scripts",
            "OpenAPI / Swagger Specification Documentation",
            "Infrastructure-as-Code (Terraform / Docker Compose)",
            "Cloud Security & Rate-Limiting Policy"
        ],
        tools: ["PostgreSQL", "Redis", "Docker", "AWS / GCP", "Terraform"],
        clientCommitment: "1 hour architecture review & sign-off call",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
        accentColor: "from-teal-600 to-cyan-500",
        pillBg: "bg-teal-50 text-teal-700 border-teal-200"
    },
    {
        id: "03",
        phase: "Phase 03",
        title: "Agile Development & Velocity Sprints",
        duration: "Weeks 2 – 6",
        badge: "Milestone 03",
        tagline: "Testable, production-grade iterations delivered every Friday. No black boxes. Zero guessing.",
        summary: "We work in structured 1-to-2 week sprints. Every pull request is peer-reviewed, automatically tested in CI, and deployed to a private staging URL. You get a video walkthrough and live staging access at the end of each sprint.",
        activities: [
            "Modular frontend implementation in Next.js / React with accessible component design systems",
            "High-throughput backend development with Python FastAPI, Node.js, and Golang",
            "Integration of LLM agents, vector embeddings, and autonomous background worker queues",
            "Daily asynchronous standup summaries in your dedicated Slack / Telegram channel"
        ],
        deliverables: [
            "Private Staging Environment updated on every Git merge",
            "Weekly Live Video Demo (Loom) + Interactive Sprint Review",
            "Real-time Linear Kanban board tracking every ticket and PR",
            "Complete, clean, typed Git commits with full commit history"
        ],
        tools: ["Next.js", "Python FastAPI", "TypeScript", "GitHub Actions", "Vercel / AWS"],
        clientCommitment: "30 minutes per week for the live sprint demo & feedback session",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        accentColor: "from-emerald-600 to-teal-500",
        pillBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
        id: "04",
        phase: "Phase 04",
        title: "Automated QA, Security Hardening & Load Testing",
        duration: "Week 7",
        badge: "Milestone 04",
        tagline: "Stress-testing your systems under peak concurrency, simulated outages, and real-world edge cases.",
        summary: "Quality is never an afterthought. Before launch, our QA engineers execute automated end-to-end user journeys, run high-volume concurrency tests, and conduct OWASP Top-10 security scans to ensure bulletproof stability.",
        activities: [
            "Automated E2E test suites with Playwright covering critical conversion funnels",
            "High-volume load testing with k6/Locust to verify system throughput under load",
            "Security vulnerability scanning, SQL injection prevention, and JWT/OAuth penetration testing",
            "Google Core Web Vitals optimization to guarantee 95+ performance scores"
        ],
        deliverables: [
            "Automated QA Test Suite & Coverage Reports",
            "Security Audit Checklist & Penetration Test Summary",
            "Load Testing Benchmark Report (Latency & Throughput)",
            "Lighthouse 95+ Performance & SEO Verification Report"
        ],
        tools: ["Playwright", "Jest", "k6 Load Testing", "OWASP ZAP", "Lighthouse"],
        clientCommitment: "1 hour for User Acceptance Testing (UAT) sign-off",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        accentColor: "from-cyan-600 to-blue-500",
        pillBg: "bg-cyan-50 text-cyan-700 border-cyan-200"
    },
    {
        id: "05",
        phase: "Phase 05",
        title: "Zero-Downtime Launch, IP Handover & 24/7 SLA",
        duration: "Post-Launch",
        badge: "Milestone 05",
        tagline: "Smooth production rollout, full IP transfer, and proactive telemetry monitoring.",
        summary: "On launch day, we execute a zero-downtime blue/green DNS cutover with zero disruption to active users. We hand over 100% of all intellectual property, credentials, and documentation, backed by ongoing warranty support.",
        activities: [
            "Seamless blue/green production deployment with automated database backup snapshotting",
            "Full IP and Git repository ownership transfer directly to your organization",
            "Real-time telemetry integration with Sentry error monitoring and Datadog uptime tracking",
            "Post-launch warranty with dedicated engineering hotline for prompt resolution"
        ],
        deliverables: [
            "100% Git Repository & Cloud Account Ownership Handover",
            "Comprehensive Architecture & Developer Setup Runbook",
            "Live Sentry / Datadog Monitoring Dashboard Access",
            "30-Day Post-Launch Zero-Bug Guarantee & SLA Support Agreement"
        ],
        tools: ["Cloudflare", "AWS ECS", "Datadog", "Sentry", "GitHub"],
        clientCommitment: "Launch celebration call & handover walk-through",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        accentColor: "from-teal-600 to-slate-900",
        pillBg: "bg-slate-100 text-slate-800 border-slate-300"
    }
];

const GUARANTEES = [
    {
        title: "100% Code & IP Ownership",
        description: "On final payment, every single line of code, Docker container, Figma file, and database migration is 100% yours. No proprietary lock-in, ever.",
        icon: (
            <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        )
    },
    {
        title: "Weekly Demos, Zero Black Boxes",
        description: "You never wait months wondering about progress. Every Friday, you test a live staging build and receive a detailed video walkthrough of all shipped features.",
        icon: (
            <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Strict NDA & Security Baseline",
        description: "We execute mutual NDAs before any detailed technical discussion. All developer machines are encrypted, and production secrets never touch client chat channels.",
        icon: (
            <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        )
    },
    {
        title: "No Scope Creep & Transparent Backlog",
        description: "Every user story is mapped in Linear with clear acceptance criteria. If requirements change, we transparently swap backlog priorities without surprise invoices.",
        icon: (
            <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        )
    }
];

const COLLABORATION_CHANNELS = [
    {
        badge: "Daily Sync",
        title: "Private Slack or Telegram Channel",
        desc: "Direct access to the engineers writing your code. Daily morning bullet-point digest of shipped tasks and blockers, with no account-manager bottlenecks.",
        icon: "💬"
    },
    {
        badge: "Live Tracking",
        title: "Real-Time Linear / Notion Board",
        desc: "Watch your sprint progress in real-time. Every pull request, bug fix, and feature status is completely transparent and visible 24/7.",
        icon: "📊"
    },
    {
        badge: "Friday Review",
        title: "Weekly Live Staging Demos",
        desc: "Every Friday at 4 PM GMT+6 (or overlapping US/EU hours), you receive a recorded Loom video walkthrough plus credentials to test the newest build.",
        icon: "🎥"
    },
    {
        badge: "Direct Code Access",
        title: "Private GitHub Organization",
        desc: "You can inspect every commit, read our pull requests, and review code quality whenever you wish. Total engineering transparency.",
        icon: "🐙"
    }
];

const PROCESS_FAQS = [
    {
        q: "What if our business requirements evolve midway through a sprint?",
        a: "Agile flexibility is built into our core process. Because we work in two-week sprint cycles with a prioritized Linear backlog, you can adjust priorities between sprints at zero penalty. If a new high-priority feature arises, we simply swap it with an equivalent backlog item of equal estimate, keeping timelines and budgets perfectly predictable."
    },
    {
        q: "How do you handle timezone overlap with US and European clients?",
        a: "Our engineering headquarters is based in Dhaka (GMT+6), which conveniently bridges European mornings and US East Coast working hours. We schedule our live demo calls during mutual overlap windows and maintain comprehensive asynchronous daily logs on Slack/Linear so you never wake up waiting for answers."
    },
    {
        q: "Can you take over and refactor an existing or legacy codebase?",
        a: "Yes. In fact, roughly 40% of our enterprise clients came to us with an existing, partially built, or buggy codebase. During Phase 01 (Discovery), we conduct an in-depth code quality, dependency, and security audit. We present you with an honest technical diagnosis and a surgical refactoring roadmap before committing to new feature development."
    },
    {
        q: "What does post-launch handover and maintenance look like?",
        a: "We never leave you hanging after deployment. Every project includes a 30-day post-launch warranty where any unexpected edge-case bug is fixed free of charge. After that, we offer optional monthly SLA retainers covering proactive crawler proxy maintenance, security patch updates, and ongoing cloud optimizations."
    }
];

export default function Process() {
    const [activePhaseIndex, setActivePhaseIndex] = useState(0);
    const [openFaq, setOpenFaq] = useState(0);
    const containerRef = useRef(null);

    const activePhase = PROCESS_PHASES[activePhaseIndex];

    return (
        <>
            <SEO
                title="Our Engineering Process & Methodology | Codiora Tech"
                description="Discover Codiora Tech's structured 5-phase engineering methodology: deep discovery, architecture blueprints, agile velocity sprints, security QA, and cloud launch."
                canonicalPath="/process"
            />

            <div ref={containerRef} className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/20">
                {/* Ambient Background Glows */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[140px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#122a46]/5 rounded-full blur-[140px] animate-pulse-slow delay-1000" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay pointer-events-none" />
                </div>

                <div className="container mx-auto px-6 pt-36 sm:pt-40 md:pt-44 pb-32 relative z-10">
                    {/* Breadcrumbs */}
                    <div className="mb-8">
                        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Process', href: '/process' }]} />
                    </div>

                    {/* HERO HEADER */}
                    <section className="text-center max-w-4xl mx-auto mb-20 sm:mb-28">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-700 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
                        >
                            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                            The Codiora Engineering Methodology
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.05]"
                        >
                            ENGINEERED FOR <br className="hidden sm:inline" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-[#122a46]">
                                VELOCITY & SCALE.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto mb-12"
                        >
                            We have eliminated agency chaos, bloated meetings, and surprise invoices.
                            Every system we build follows a structured, milestone-driven sprint cycle designed for speed, resilience, and 100% transparency.
                        </motion.p>

                        {/* Quick Metrics Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-3xl bg-white border border-[#122a46]/8 shadow-xl shadow-[#122a46]/5 text-left"
                        >
                            <div className="p-4 border-r border-[#122a46]/5 last:border-none">
                                <div className="text-3xl font-black text-[#122a46]">4–12 Wks</div>
                                <div className="text-xs font-bold uppercase tracking-wider text-teal-600 mt-1">Average Timeline</div>
                                <div className="text-[11px] text-slate-500 mt-0.5">From discovery to production</div>
                            </div>
                            <div className="p-4 border-r border-[#122a46]/5 last:border-none">
                                <div className="text-3xl font-black text-[#122a46]">100%</div>
                                <div className="text-xs font-bold uppercase tracking-wider text-teal-600 mt-1">IP & Code Ownership</div>
                                <div className="text-[11px] text-slate-500 mt-0.5">Transferred on every sprint</div>
                            </div>
                            <div className="p-4 border-r border-[#122a46]/5 last:border-none">
                                <div className="text-3xl font-black text-[#122a46]">Weekly</div>
                                <div className="text-xs font-bold uppercase tracking-wider text-teal-600 mt-1">Live Staging Demos</div>
                                <div className="text-[11px] text-slate-500 mt-0.5">You test what we ship every Friday</div>
                            </div>
                            <div className="p-4">
                                <div className="text-3xl font-black text-[#122a46]">0%</div>
                                <div className="text-xs font-bold uppercase tracking-wider text-teal-600 mt-1">Hidden Surcharges</div>
                                <div className="text-[11px] text-slate-500 mt-0.5">Milestone-locked estimates</div>
                            </div>
                        </motion.div>
                    </section>

                    {/* INTERACTIVE 5-PHASE EXPLORER */}
                    <section className="mb-32">
                        <div className="text-center mb-12">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">Step-by-Step Architecture</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#122a46] mt-2">
                                The 5-Phase Production Cycle
                            </h2>
                            <p className="text-slate-500 max-w-2xl mx-auto mt-3 text-base">
                                Click through each phase to inspect exact engineering activities, client deliverables, tool stacks, and time commitments.
                            </p>
                        </div>

                        {/* Phase Selector Tabs */}
                        <div className="flex flex-wrap lg:flex-nowrap gap-3 mb-10 p-2 rounded-2xl bg-white border border-[#122a46]/8 shadow-sm justify-center">
                            {PROCESS_PHASES.map((p, idx) => {
                                const isActive = activePhaseIndex === idx;
                                return (
                                    <button
                                        key={p.id}
                                        type="button"
                                        onClick={() => setActivePhaseIndex(idx)}
                                        className={`flex-1 min-w-[170px] flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                                            isActive
                                                ? 'bg-[#122a46] text-white shadow-lg shadow-[#122a46]/20 scale-[1.02]'
                                                : 'text-slate-600 hover:text-[#122a46] hover:bg-slate-50'
                                        }`}
                                    >
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${
                                            isActive ? 'bg-teal-500 text-[#0f172a]' : 'bg-slate-100 text-slate-600'
                                        }`}>
                                            {p.id}
                                        </div>
                                        <div className="truncate">
                                            <div className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-teal-400' : 'text-slate-500'}`}>
                                                {p.duration}
                                            </div>
                                            <div className="text-xs font-bold truncate">
                                                {p.title.split('&')[0]}
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Active Phase Deep Dive Card */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePhase.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.35 }}
                                className="bg-white border border-[#122a46]/10 rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden"
                            >
                                {/* Top Banner */}
                                <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#122a46]/8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-teal-500/20 shrink-0">
                                            {activePhase.icon}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${activePhase.pillBg}`}>
                                                    {activePhase.badge}
                                                </span>
                                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                                                    Duration: {activePhase.duration}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#122a46]">
                                                {activePhase.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-5xl font-black text-[#122a46]/10 select-none">
                                            {activePhase.id} / 05
                                        </span>
                                    </div>
                                </div>

                                <p className="text-lg text-slate-600 leading-relaxed font-normal mt-6 max-w-4xl">
                                    {activePhase.summary}
                                </p>

                                {/* Two-Column Breakdown */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                                    {/* Activities */}
                                    <div className="bg-[#f8fafc] border border-[#122a46]/5 rounded-2xl p-6 sm:p-8">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                                            <h4 className="text-sm font-bold uppercase tracking-wider text-[#122a46]">
                                                Key Engineering Activities
                                            </h4>
                                        </div>
                                        <ul className="space-y-3.5">
                                            {activePhase.activities.map((act, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                                                    <svg className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>{act}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Deliverables */}
                                    <div className="bg-gradient-to-br from-teal-500/5 to-cyan-500/5 border border-teal-500/20 rounded-2xl p-6 sm:p-8">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                                            <h4 className="text-sm font-bold uppercase tracking-wider text-[#122a46]">
                                                Tangible Client Deliverables (What You Receive)
                                            </h4>
                                        </div>
                                        <ul className="space-y-3.5">
                                            {activePhase.deliverables.map((del, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm font-medium text-[#122a46] leading-relaxed">
                                                    <div className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                                                        ✓
                                                    </div>
                                                    <span>{del}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Bottom Meta Bar */}
                                <div className="mt-8 pt-6 border-t border-[#122a46]/8 flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Tool Stack:</span>
                                        {activePhase.tools.map((tool, i) => (
                                            <span key={i} className="px-3 py-1 rounded-lg bg-white border border-[#122a46]/10 text-xs font-semibold text-[#122a46] shadow-sm">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1.5 rounded-xl">
                                        <span>⏱ Client Time Required:</span>
                                        <span className="text-[#122a46] font-semibold">{activePhase.clientCommitment}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </section>

                    {/* THE CODIORA TRANSPARENCY GUARANTEES */}
                    <section className="mb-32">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">Risk-Free Collaboration</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#122a46] mt-2">
                                Our Engineering Guarantees
                            </h2>
                            <p className="text-slate-500 max-w-2xl mx-auto mt-3 text-base">
                                We protect your capital, intellectual property, and product timelines with contractual commitments.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {GUARANTEES.map((g, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="p-8 rounded-3xl bg-white border border-[#122a46]/8 shadow-lg shadow-[#122a46]/5 hover:border-teal-500/30 hover:shadow-xl transition-all duration-300 flex items-start gap-5"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                                        {g.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#122a46] mb-2">{g.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed font-light">
                                            {g.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* COLLABORATION & COMMUNICATION MODEL */}
                    <section className="mb-32 bg-white rounded-[2.5rem] border border-[#122a46]/10 p-8 sm:p-12 md:p-16 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

                        <div className="max-w-3xl mb-12">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">Real-Time Visibility</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#122a46] mt-2">
                                How We Communicate During Sprints
                            </h2>
                            <p className="text-slate-600 text-base mt-3 leading-relaxed">
                                You shouldn’t have to chase agencies for updates. Here is the exact cadence we use to keep every sprint flowing effortlessly.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {COLLABORATION_CHANNELS.map((item, idx) => (
                                <div key={idx} className="p-6 rounded-2xl bg-[#f8fafc] border border-[#122a46]/5 hover:border-teal-500/20 transition-all">
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-50 border border-teal-100 px-2.5 py-0.5 rounded-full">
                                        {item.badge}
                                    </span>
                                    <h4 className="text-base font-bold text-[#122a46] mt-3 mb-2">{item.title}</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* PROCESS FAQ ACCORDION */}
                    <section className="mb-32 max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">Clear Answers</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#122a46] mt-2">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-slate-500 max-w-xl mx-auto mt-3 text-base">
                                Straightforward answers to how we plan, build, deploy, and maintain software.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {PROCESS_FAQS.map((faq, i) => {
                                const isOpen = openFaq === i;
                                return (
                                    <div
                                        key={i}
                                        className="bg-white border border-[#122a46]/8 rounded-2xl overflow-hidden transition-all shadow-sm"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setOpenFaq(isOpen ? null : i)}
                                            className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                                            aria-expanded={isOpen}
                                        >
                                            <span className="text-base sm:text-lg font-bold text-[#122a46]">{faq.q}</span>
                                            <div className={`w-8 h-8 rounded-full border border-[#122a46]/10 flex items-center justify-center font-bold text-sm shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45 bg-[#122a46] text-white' : 'text-[#122a46]'}`}>
                                                +
                                            </div>
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-[#122a46]/5 pt-4">
                                                        {faq.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* HIGH-CONVERTING FINAL CTA */}
                    <section className="relative rounded-[3rem] overflow-hidden bg-[#122a46] text-white p-10 sm:p-16 md:p-20 text-center shadow-2xl">
                        {/* Background glowing gradients */}
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-teal-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8 backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                                Phase 01 Discovery Slots Open
                            </div>

                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                                Ready to Turn Requirements into <br className="hidden sm:inline" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                                    Production-Ready Code?
                                </span>
                            </h2>

                            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto font-light">
                                Book a free 30-minute discovery session with our senior engineers. We will analyze your system requirements and map out a fixed roadmap. No pushy sales pitch.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                                <Link href="/contact" className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-teal-400 hover:bg-teal-300 text-[#0f172a] font-black text-sm tracking-widest uppercase transition-all duration-300 shadow-xl shadow-teal-500/25 hover:shadow-teal-400/40 hover:-translate-y-0.5">
                                        Book a Discovery Session →
                                    </button>
                                </Link>
                                <Link href="/portfolio" className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-widest uppercase border border-white/20 transition-all duration-300 backdrop-blur-sm">
                                        Explore Case Studies ↗
                                    </button>
                                </Link>
                            </div>

                            {/* Trust badges */}
                            <div className="flex flex-wrap justify-center gap-6 text-slate-300 text-xs font-medium">
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-[10px]">✓</span>
                                    Mutual NDA Signed First
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-[10px]">✓</span>
                                    Guaranteed Response in 24h
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-[10px]">✓</span>
                                    100% Code Ownership
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
