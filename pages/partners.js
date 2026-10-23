import Link from 'next/link';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const allianceTracks = [
    {
        title: "Digital & Design Agencies",
        tag: "White-Label Delivery",
        desc: "Partner with our engineering team to handle complex backend architecture, high-scale web scraping, and custom AI tools for your clients under your agency brand.",
        benefits: ["100% White-Label Delivery", "Dedicated Engineering Pod", "Fixed-Price Sprint Estimates", "Zero Client Poaching Guarantee"],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.75c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
            </svg>
        )
    },
    {
        title: "System Integrators & IT Consultants",
        tag: "AI & Middleware",
        desc: "Accelerate enterprise modernization projects by integrating our autonomous AI pipelines, custom data extractors, and microservices into legacy environments.",
        benefits: ["FastAPI & Node.js Middleware", "Custom RAG & Vector Workflows", "Enterprise Security Compliance", "End-to-End API Documentation"],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21m3-18v1.5m0 15V21m3-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
            </svg>
        )
    },
    {
        title: "VCs & Startup Incubators",
        tag: "Venture Velocity",
        desc: "We provide portfolio companies with technical due diligence, architecture audits, and rapid MVP execution to help founders reach product-market fit faster.",
        benefits: ["Pre-Seed / Seed MVP Sprints", "CTO-Level Architecture Audits", "Discounted Venture Tier Pricing", "Investor-Ready Code Handover"],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
        )
    },
    {
        title: "Technology & Cloud Affiliates",
        tag: "Revenue Share",
        desc: "Introduce high-value clients needing custom software, automation, or enterprise web platforms, and earn recurring commissions on every completed contract.",
        benefits: ["Up to 30% Deal Commissions", "Transparent Lead Tracking", "Net-30 Direct Wire Transfer", "Dedicated Alliance Manager"],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
];

const partnerMetrics = [
    { label: "Partner Pipeline Generated", value: "$2.4M+" },
    { label: "Global Partner Network", value: "25+" },
    { label: "White-Label SLA Adherence", value: "100%" },
    { label: "Guaranteed Payout Terms", value: "Net-30" }
];

export default function Partners() {
    return (
        <>
            <SEO
                title="Strategic Partnerships & Alliances | Codiora Tech"
                description="Collaborate with Codiora Tech. Join our global partner ecosystem for white-label engineering, venture acceleration, and high-scale software delivery."
                canonicalPath="/partners"
            />

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/20">
                {/* Ambient Background */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
                </div>

                <div className="container mx-auto px-6 pt-36 sm:pt-40 md:pt-44 pb-32 relative z-10">
                    <div className="mb-6">
                        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Partners', href: '/partners' }]} />
                    </div>

                    {/* Hero Header */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-widest backdrop-blur-sm"
                        >
                            Global Ecosystem & Alliances
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-[#122a46]"
                        >
                            STRATEGIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">ALLIANCES</span>
                        </motion.h1>
                        <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                            We collaborate with top-tier agencies, consultancies, venture funds, and technical leaders to co-engineer resilient software systems and expand global market reach.
                        </p>
                    </div>

                    {/* Metrics Banner */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                        {partnerMetrics.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white border border-[#122a46]/10 p-6 sm:p-8 rounded-3xl text-center shadow-lg"
                            >
                                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#122a46] mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Strategic Tracks Grid */}
                    <div className="mb-24">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Collaboration Models</span>
                            <h2 className="text-3xl md:text-5xl font-black text-[#122a46] mt-2 tracking-tight">
                                How We Partner
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {allianceTracks.map((track, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 sm:p-10 rounded-3xl bg-white border border-[#122a46]/10 hover:shadow-2xl hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center">
                                                {track.icon}
                                            </div>
                                            <span className="text-[11px] font-mono font-bold text-teal-600 bg-teal-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
                                                {track.tag}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-[#122a46] mb-3">{track.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">{track.desc}</p>

                                        {/* Benefits Checklist */}
                                        <div className="space-y-2.5 mb-8">
                                            {track.benefits.map((b, bIdx) => (
                                                <div key={bIdx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></span>
                                                    <span>{b}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-[#122a46]/5 flex items-center justify-between">
                                        <Link href="/partner-apply" className="text-xs font-bold text-teal-600 hover:text-teal-700 uppercase tracking-wider flex items-center gap-1.5 transition-colors">
                                            Apply for Track →
                                        </Link>
                                        <Link href="/partner-program" className="text-xs text-slate-400 hover:text-slate-600">
                                            View Tier Breakdown
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Partnership Principles / Why Us */}
                    <div className="p-10 md:p-14 rounded-3xl bg-white border border-[#122a46]/10 mb-28 shadow-xl">
                        <div className="max-w-3xl mb-12">
                            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Mutual Growth</span>
                            <h2 className="text-3xl md:text-4xl font-black text-[#122a46] mt-2">
                                The Codiora Alliance Standard
                            </h2>
                            <p className="text-slate-500 text-sm md:text-base mt-3">
                                Partnerships are not marketing gimmicks. We establish rigorous technical and commercial alignment to ensure both parties thrive.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="border-l-2 border-teal-500 pl-6">
                                <h4 className="text-lg font-bold text-[#122a46] mb-2">Direct Slack Integration</h4>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                                    Instant communication between your technical leaders and our architects. No bureaucratic support tickets.
                                </p>
                            </div>
                            <div className="border-l-2 border-teal-500 pl-6">
                                <h4 className="text-lg font-bold text-[#122a46] mb-2">Ironclad Non-Solicitation</h4>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                                    Your clients remain 100% your clients. We sign legally binding mutual NDAs and non-compete agreements.
                                </p>
                            </div>
                            <div className="border-l-2 border-teal-500 pl-6">
                                <h4 className="text-lg font-bold text-[#122a46] mb-2">Joint PR & Case Studies</h4>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                                    We co-author architectural teardowns, technical benchmarks, and success stories to amplify both brands globally.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* High-Converting CTA Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl bg-[#0f172a] text-white p-10 md:p-16 relative overflow-hidden shadow-2xl border border-slate-800 text-center"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest bg-teal-950/80 border border-teal-800 px-3 py-1 rounded-full inline-block mb-6">
                                Become a Strategic Partner
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                                Ready to scale software delivery together?
                            </h2>
                            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                                Submit a partnership inquiry or book an executive alliance discussion with our leadership team today.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center items-center">
                                <Link
                                    href="/partner-apply"
                                    className="px-10 py-4 bg-teal-500 text-slate-950 font-bold rounded-full hover:bg-teal-400 hover:scale-105 transition-all shadow-lg text-base"
                                >
                                    Apply For Partnership
                                </Link>
                                <Link
                                    href="/partner-program"
                                    className="px-8 py-4 border border-slate-700 text-white font-bold rounded-full hover:bg-white/10 transition-all text-base"
                                >
                                    Review Program Tiers
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
