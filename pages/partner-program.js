import { useState } from 'react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const tiers = [
    {
        name: "Connector",
        fit: "For Independent Consultants & Advisors",
        commission: "10% - 15%",
        commitment: "Referral-based • No quota",
        features: [
            "Unique referral link & partner tracking portal",
            "10% - 15% revenue share on closed client contracts",
            "Co-branded sales one-pagers and pitch deck templates",
            "Monthly deal status updates & Net-30 payouts",
            "Direct referral introduction to Codiora tech leads"
        ],
        highlight: false,
        badge: "Referral Partner"
    },
    {
        name: "Solutions Partner",
        fit: "For Agencies, Studios & IT Consultancies",
        commission: "20% - 25%",
        commitment: "Project-based • Joint Delivery",
        features: [
            "Full white-label engineering delivery under your brand",
            "Dedicated engineering pod with senior tech leads",
            "Direct Slack channel bridge for real-time collaboration",
            "20% - 25% revenue margin or wholesale sprint pricing",
            "Priority engineering capacity reservation",
            "Joint case study co-authorship and technical PR"
        ],
        highlight: true,
        badge: "Most Popular"
    },
    {
        name: "Strategic Alliance",
        fit: "For Enterprise Integrators & Venture Groups",
        commission: "Up to 30%",
        commitment: "Annual Agreement • Custom Roadmap",
        features: [
            "Co-developed intellectual property and custom middleware",
            "Up to 30% revenue share with custom milestone tiers",
            "Quarterly executive roadmap sync with Codiora founder",
            "Early access to internal AI & web scraping tooling sandboxes",
            "24/7 priority SLA support with guaranteed 2-hour response",
            "Global client co-selling and keynote collaboration"
        ],
        highlight: false,
        badge: "Enterprise"
    }
];

const faqs = [
    {
        q: "How does the partner commission payout structure work?",
        a: "Commissions are calculated as a percentage of the gross contract value invoiced and collected. Payouts are distributed Net-30 following client invoice settlement via direct international wire transfer or Stripe."
    },
    {
        q: "Can Codiora Tech deliver 100% white-label projects?",
        a: "Yes. For our Solutions and Strategic Partners, our software architects and engineers can work seamlessly behind your brand name, adhering to your communication channels, email domains, and sprint reporting standards."
    },
    {
        q: "What technical due diligence does Codiora conduct before partnering?",
        a: "We evaluate prospective partners based on business legitimacy, shared commitment to engineering excellence, client satisfaction records, and mutual non-solicitation alignment."
    },
    {
        q: "Are there any fees or upfront costs to join the partner program?",
        a: "No. There are zero upfront fees, annual dues, or certification charges to join the Codiora Partner Program. We invest our engineering time and resources directly into our partner relationships."
    }
];

export default function PartnerProgram() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <>
            <SEO
                title="Partner Program Protocols & Commission Tiers | Codiora Tech"
                description="Join the Codiora Tech partner program. Earn up to 30% commissions, deliver white-label enterprise software, and expand client capabilities."
                canonicalPath="/partner-program"
            />

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/20">
                {/* Ambient Background */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
                </div>

                <div className="container mx-auto px-6 pt-36 sm:pt-40 md:pt-44 pb-32 relative z-10">
                    <div className="mb-6">
                        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Partners', href: '/partners' }, { label: 'Partner Program', href: '/partner-program' }]} />
                    </div>

                    {/* Header */}
                    <div className="text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-widest backdrop-blur-sm"
                        >
                            Alliance Architecture & Protocols
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-[#122a46]"
                        >
                            PARTNER <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">PROGRAM</span>
                        </motion.h1>
                        <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                            A high-trust coalition of software agencies, consultants, and enterprise integrators. Earn industry-leading margins while offering your clients world-class web systems, AI, and automation.
                        </p>
                    </div>

                    {/* Advantage Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
                        {[
                            { title: "Revenue Share", val: "Up to 30%", desc: "Generous recurring commissions paid transparently on every referred or co-delivered contract." },
                            { title: "Co-Marketing", val: "Global PR", desc: "Featured case studies, joint technical teardowns, and international press distribution." },
                            { title: "Tech Sandbox", val: "Beta Access", desc: "Pre-release sandbox access to our proprietary web scrapers, AI pipelines, and internal tools." },
                            { title: "Direct SLA", val: "24/7 Bridge", desc: "Dedicated partner engineering pod and private Slack channel with leadership." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white border border-[#122a46]/10 p-8 rounded-3xl hover:shadow-xl hover:border-teal-500/30 transition-all group"
                            >
                                <span className="text-teal-600 font-bold uppercase tracking-widest text-[11px] block mb-2">{item.title}</span>
                                <div className="text-3xl sm:text-4xl font-black text-[#122a46] mb-3">{item.val}</div>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Tiers Section */}
                    <div className="mb-28">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Select Your Engagement Level</span>
                            <h2 className="text-3xl md:text-5xl font-black text-[#122a46] mt-2 tracking-tight">
                                Partnership Tiers & Compensation
                            </h2>
                            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mt-3">
                                Transparent commission schedules and clear operational agreements tailored to your business model.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {tiers.map((tier, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`relative p-8 sm:p-10 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${tier.highlight
                                        ? 'bg-[#122a46] text-white border-teal-500/50 shadow-2xl scale-[1.02]'
                                        : 'bg-white text-[#122a46] border-[#122a46]/10 hover:shadow-xl'
                                        }`}
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${tier.highlight
                                                ? 'bg-teal-500 text-slate-950'
                                                : 'bg-teal-500/10 text-teal-600'
                                                }`}>
                                                {tier.badge}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-black mb-1">{tier.name}</h3>
                                        <p className={`text-xs mb-6 ${tier.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                                            {tier.fit}
                                        </p>

                                        {/* Commission Highlight */}
                                        <div className={`p-4 rounded-2xl mb-8 ${tier.highlight ? 'bg-slate-900/60 border border-slate-700' : 'bg-slate-50 border border-slate-200'}`}>
                                            <div className="text-xs uppercase tracking-wider text-teal-500 font-semibold mb-1">Commission Share</div>
                                            <div className="text-3xl font-black">{tier.commission}</div>
                                            <div className={`text-[11px] mt-1 ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{tier.commitment}</div>
                                        </div>

                                        {/* Features List */}
                                        <ul className="space-y-3.5 mb-8">
                                            {tier.features.map((feat, j) => (
                                                <li key={j} className="flex items-start gap-3 text-xs sm:text-sm">
                                                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${tier.highlight ? 'bg-teal-400' : 'bg-teal-500'}`}></span>
                                                    <span className={tier.highlight ? 'text-slate-200' : 'text-slate-600'}>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link
                                        href="/partner-apply"
                                        className={`w-full py-4 rounded-full font-bold text-center text-sm transition-all block ${tier.highlight
                                            ? 'bg-teal-500 text-slate-950 hover:bg-teal-400'
                                            : 'bg-[#122a46] text-white hover:bg-teal-500 hover:text-slate-950'
                                            }`}
                                    >
                                        Apply for {tier.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Onboarding Timeline */}
                    <div className="mb-28 p-10 md:p-14 rounded-3xl bg-white border border-[#122a46]/10 shadow-xl">
                        <div className="text-center mb-14">
                            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Rapid Integration</span>
                            <h2 className="text-3xl md:text-4xl font-black text-[#122a46] mt-2">
                                14-Day Partner Onboarding Cadence
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                            {[
                                { step: "Step 01", time: "Days 1 - 2", title: "Application Review", text: "We review your company profile, focus domains, and client service requirements." },
                                { step: "Step 02", time: "Day 5", title: "Leadership Sync", text: "Introductory 30-minute technical sync with our founder and strategic alliance director." },
                                { step: "Step 03", time: "Day 8", title: "Mutual NDA & SLA", text: "Execution of bilateral non-solicitation agreement, IP safeguards, and commission schedule." },
                                { step: "Step 04", time: "Day 14", title: "Launch & Co-Selling", text: "Partner portal credentials issued, Slack bridge activated, and co-pitch materials deployed." }
                            ].map((item, idx) => (
                                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
                                    <span className="text-[10px] font-mono font-bold text-teal-600 bg-teal-500/10 px-2 py-0.5 rounded uppercase">
                                        {item.time}
                                    </span>
                                    <h4 className="text-lg font-bold text-[#122a46] mt-3 mb-2">{item.title}</h4>
                                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Interactive FAQ Accordion */}
                    <div className="max-w-3xl mx-auto mb-28">
                        <div className="text-center mb-12">
                            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Got Questions?</span>
                            <h2 className="text-3xl md:text-4xl font-black text-[#122a46] mt-2">
                                Program F.A.Q.
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className="bg-white border border-[#122a46]/10 rounded-2xl overflow-hidden transition-all shadow-sm"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full text-left p-6 flex justify-between items-center gap-4 text-base font-bold text-[#122a46] hover:text-teal-600 transition-colors"
                                    >
                                        <span>{faq.q}</span>
                                        <span className={`text-xl transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-teal-600' : 'text-slate-400'}`}>
                                            ▾
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="px-6 pb-6 text-slate-500 text-sm leading-relaxed"
                                            >
                                                {faq.a}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Conversion CTA Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl bg-[#0f172a] text-white p-10 md:p-16 relative overflow-hidden shadow-2xl border border-slate-800 text-center"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest bg-teal-950/80 border border-teal-800 px-3 py-1 rounded-full inline-block mb-6">
                                Limited Q1 2026 Partner Slots
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                                Expand your service offerings with Codiora Tech.
                            </h2>
                            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                                Join our partner ecosystem and start collaborating on enterprise software, AI integrations, and web platforms today.
                            </p>
                            <Link
                                href="/partner-apply"
                                className="px-10 py-4 bg-teal-500 text-slate-950 font-bold rounded-full hover:bg-teal-400 hover:scale-105 transition-all shadow-lg text-base inline-block"
                            >
                                Initiate Partner Application
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
