import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PartnerProgram() {
    return (
        <>
            <Head>
                <title>Codiora Tech | Partner Program</title>
            </Head>

            <div className="bg-[#020202] min-h-screen text-white overflow-hidden selection:bg-purple-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-24">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-black tracking-tighter mb-8"
                        >
                            PARTNER <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">PROTOCOLS</span>
                        </motion.h1>
                        <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            Join a coalition of elite technology firms and consultants. We don't just sign contracts; we build integrated ecosystems that dominate markets.
                        </p>
                    </div>

                    {/* Section 1: The Advantage */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">The Competitive Edge</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-transparent mx-auto rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Revenue Share", val: "30%", desc: "Industry-leading commissions on every deal referred or closed." },
                                { title: "Co-Marketing", val: "Global", desc: "Featured case studies, joint webinars, and PR campaigns." },
                                { title: "Tech Access", val: "Beta", desc: "Sandbox access to our APIs and unreleased features." },
                                { title: "Support", val: "24/7", desc: "Dedicated partner manager and slack channel access." },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors group"
                                >
                                    <h3 className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-3">{item.title}</h3>
                                    <div className="text-4xl font-black text-white mb-3">{item.val}</div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Section 2: Tiers */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Partnership Tiers</h2>
                            <p className="text-gray-400">Choose your level of engagement.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: "Connector", icon: "🔗", fit: "For Consultants", feats: ["Referral Link", "10% Commission", "Marketing Kit"] },
                                { name: "Solutions", icon: "🛠️", fit: "For Agencies", feats: ["Dev Sandbox", "20% Commission", "Co-Selling Support", "Certifications"] },
                                { name: "Strategic", icon: "👑", fit: "For Enterprise", feats: ["Custom Integration", "30% Commission", "Executive Access", "Joint Roadmap"] }
                            ].map((tier, i) => (
                                <div key={i} className={`relative p-10 rounded-[2rem] border ${i === 1 ? 'bg-white/10 border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.1)]' : 'bg-white/5 border-white/5'} overflow-hidden`}>
                                    <div className="text-5xl mb-6">{tier.icon}</div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                                    <p className="text-purple-400 text-sm font-bold uppercase tracking-widest mb-8">{tier.fit}</p>
                                    <ul className="space-y-4">
                                        {tier.feats.map((feat, j) => (
                                            <li key={j} className="flex items-center gap-3 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 3: The Process & Requirements */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Base Requirements</h2>
                            <div className="space-y-6">
                                {[
                                    "Documented expertise in modern web technologies.",
                                    "Active client base with consistent deal flow.",
                                    "Alignment with our design-first philosophy.",
                                    "Ability to undergo technical vetting."
                                ].map((req, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="mt-1 min-w-[20px] h-5 rounded-full border border-purple-500/50 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        </div>
                                        <p className="text-gray-300">{req}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Onboarding Timeline</h2>
                            <div className="space-y-8 border-l border-white/10 pl-8 relative">
                                {[
                                    { time: "Day 1-3", title: "Application Review", text: "We analyze your dossier." },
                                    { time: "Day 7", title: "Strategic Sync", text: "Intro call with our Partner Lead." },
                                    { time: "Day 14", title: "Launch", text: "Portal access & marketing kick-off." }
                                ].map((step, i) => (
                                    <div key={i} className="relative">
                                        <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-purple-900 border border-purple-500"></div>
                                        <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">{step.time}</span>
                                        <h4 className="text-xl font-bold text-white mt-1">{step.title}</h4>
                                        <p className="text-gray-500 text-sm">{step.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Section 4: FAQ */}
                    <div className="max-w-3xl mx-auto mb-24">
                        <h2 className="text-3xl font-bold text-center mb-12">Program F.A.Q.</h2>
                        <div className="space-y-6">
                            {[
                                { q: "Is there a cost to join?", a: "No. Our partner program is free. We invest in you." },
                                { q: "Do you provide white-label options?", a: "Yes. Strategic partners can white-label our entire tech stack." },
                                { q: "What is the payout schedule?", a: "Commissions are paid out Net-30 via Stripe or Wire Transfer." }
                            ].map((faq, i) => (
                                <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                                    <h4 className="font-bold text-white mb-2">{faq.q}</h4>
                                    <p className="text-gray-400 text-sm">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <Link href="/partner-apply">
                            <button className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-lg hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] hover:scale-105 transition-all">
                                INITIATE APPLICATION
                            </button>
                        </Link>
                        <p className="text-gray-500 text-xs mt-6 uppercase tracking-widest">Limited slots available for Q1 2026</p>
                    </div>
                </div>
            </div>
        </>
    );
}
