import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TermsConditions() {
    return (
        <>
            <Head>
                <title>Codiora Tech | Terms & Conditions</title>
            </Head>

            <div className="bg-[#020202] min-h-screen text-gray-300 font-sans selection:bg-purple-500/30 overflow-hidden relative">

                {/* 1. Global Ambient Background */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 py-24 max-w-4xl relative z-10">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 border-b border-white/10 pb-8 text-center md:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            User Agreement
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
                            TERMS & <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">CONDITIONS</span>
                        </h1>
                        <p className="text-gray-500 font-mono text-sm">Last Updated: January 14, 2026</p>
                    </motion.div>

                    <div className="space-y-16">

                        {/* Section 1 */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-cyan-500">01.</span> Acceptance of Terms
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-400">
                                By accessing or using the website operated by Codiora Tech ("we", "us", or "our"), you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, then you may not access the Service.
                            </p>
                        </motion.section>

                        {/* Section 2 */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-cyan-500">02.</span> Intellectual Property
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-400">
                                The Service and its original content, features, and functionality are and will remain the exclusive property of Codiora Tech and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
                            </p>
                        </motion.section>

                        {/* Section 3 */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-cyan-500">03.</span> User Responsibilities
                            </h2>
                            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 md:p-8">
                                <p className="mb-4 text-gray-400">When using our services, you agree not to:</p>
                                <ul className="space-y-3">
                                    {[
                                        "Use the service for any illegal or unauthorized purpose.",
                                        "Attempt to gain unauthorized access to any systems connected to our servers.",
                                        "Harass, abuse, insult, harm, defame, slander, disparage, or intimidate.",
                                        "Upload or transmit viruses or malicious code."
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-gray-300">
                                            <svg className="w-6 h-6 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.section>

                        {/* Section 4: Payment Terms (The Fancy Cards) */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-cyan-500">04.</span> Payment Terms & Schedule
                            </h2>

                            <div className="bg-gradient-to-br from-white/10 to-black border border-white/10 rounded-3xl p-8 space-y-8 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-cyan-500/5 to-transparent pointer-events-none" />

                                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                                    <div className="w-20 h-20 rounded-2xl bg-[#0a0a0a] text-cyan-400 flex items-center justify-center font-black text-2xl border border-white/10 shadow-lg shadow-cyan-900/20">
                                        40%
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">Phase 1: Mobilization Deposit</h3>
                                        <p className="text-gray-400 leading-relaxed">Required upfront to initiate the project, reserve team availability, and begin the discovery/design phase.</p>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-white/10"></div>

                                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                                    <div className="w-20 h-20 rounded-2xl bg-[#0a0a0a] text-purple-400 flex items-center justify-center font-black text-2xl border border-white/10 shadow-lg shadow-purple-900/20">
                                        30%
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">Phase 2: Progress Milestone</h3>
                                        <p className="text-gray-400 leading-relaxed">Due upon completion of 50% of the total scope (typically post-design approval or core development implementation).</p>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-white/10"></div>

                                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10 group-hover:translate-x-1 transition-transform duration-300 delay-150">
                                    <div className="w-20 h-20 rounded-2xl bg-[#0a0a0a] text-emerald-400 flex items-center justify-center font-black text-2xl border border-white/10 shadow-lg shadow-emerald-900/20">
                                        30%
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">Phase 3: Final Delivery</h3>
                                        <p className="text-gray-400 leading-relaxed">The final balance is due prior to server deployment, source code handover, or final credential transfer.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Section 5: Limitation of Liability (Reformatted) */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-cyan-500">05.</span> Limitation of Liability
                            </h2>
                            <p className="mb-6 text-gray-400">
                                In no event shall Codiora Tech, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                            </p>
                            <div className="pl-6 border-l-2 border-cyan-500/30 space-y-4">
                                {[
                                    "Your access to or use of or inability to access or use the Service.",
                                    "Any conduct or content of any third party on the Service.",
                                    "Any content obtained from the Service.",
                                    "Unauthorized access, use or alteration of your transmissions or content."
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start group">
                                        <span className="text-cyan-500 font-bold bg-cyan-500/10 px-2 rounded text-sm mt-0.5 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                                            {['i', 'ii', 'iii', 'iv'][i]}
                                        </span>
                                        <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Sections 6, 7, 8 */}
                        {[
                            {
                                num: "06",
                                title: "Governing Law",
                                content: "These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights."
                            },
                            {
                                num: "07",
                                title: "Changes to Terms",
                                content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion."
                            },
                            {
                                num: "08",
                                title: "Termination",
                                content: "We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability."
                            }
                        ].map((section, idx) => (
                            <motion.section
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-cyan-500">{section.num}.</span> {section.title}
                                </h2>
                                <p className="text-lg leading-relaxed text-gray-400">
                                    {section.content}
                                </p>
                            </motion.section>
                        ))}
                    </div>

                    <div className="mt-20 pt-10 border-t border-white/10 flex justify-between text-sm text-gray-500 font-medium tracking-wide">
                        <Link href="/privacy-policy" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                            <span>←</span> Privacy Policy
                        </Link>
                        <Link href="/" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                            Home
                        </Link>
                        <Link href="/sitemap" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                            Sitemap <span>→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
