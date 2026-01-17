import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RefundPolicy() {
    return (
        <>
            <Head>
                <title>Codiora Tech | Comprehensive Refund Policy</title>
                <meta name="description" content="Detailed Refund, Cancellation, and Service Policies of Codiora Tech." />
            </Head>

            <div className="bg-[#020202] min-h-screen text-gray-300 font-sans selection:bg-purple-500/30 overflow-hidden relative">

                {/* Global Ambient Background */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 py-44 max-w-5xl relative z-10">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-20 border-b border-white/10 pb-10 text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            Legal Framework
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
                            REFUND & <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">CANCELLATION</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Comprehensive details on our billing integrity, transparency, and refund procedures.
                        </p>
                        <p className="text-gray-600 font-mono text-xs mt-6">Effective Date: January 18, 2026</p>
                    </motion.div>

                    <div className="space-y-20">

                        {/* Section 1: Introduction */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-purple-500">01.</span> Commitment to Satisfaction
                            </h2>
                            <div className="prose prose-invert max-w-none text-gray-400 text-lg leading-relaxed">
                                <p>
                                    At <strong>Codiora Tech</strong>, our primary goal is to provide exceptional software solutions that drive value for our clients. We believe in complete transparency regarding our billing, deliverables, and refund policies.
                                </p>
                                <p className="mt-4">
                                    We encourage all clients to read this policy carefully before starting any project. By ensuring a clear understanding of our terms, we can maintain a healthy, trust-based professional relationship.
                                </p>
                            </div>
                        </motion.section>

                        {/* Section 2: General Rules */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                <span className="text-purple-500">02.</span> General Refund Guidelines
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/5 p-8 rounded-3xl">
                                    <h3 className="text-xl font-bold text-white mb-4">Refund Window</h3>
                                    <ul className="space-y-3 text-gray-400">
                                        <li className="flex items-start gap-3">
                                            <span className="text-purple-400 mt-1">▹</span>
                                            <span><strong>7 Days:</strong> Full refund for project deposits if no work has commenced.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-purple-400 mt-1">▹</span>
                                            <span><strong>14 Days:</strong> Money-back guarantee for qualifying standard packages or SaaS subscriptions.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-white/5 border border-white/5 p-8 rounded-3xl">
                                    <h3 className="text-xl font-bold text-white mb-4">Processing Time</h3>
                                    <ul className="space-y-3 text-gray-400">
                                        <li className="flex items-start gap-3">
                                            <span className="text-purple-400 mt-1">▹</span>
                                            <span>Refunds are processed within <strong>5-10 business days</strong> after approval.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-purple-400 mt-1">▹</span>
                                            <span>The exact time for funds to appear depends on your bank or payment provider.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.section>

                        {/* Section 3: Detailed Service Policies (The Core Content) */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                <span className="text-purple-500">03.</span> Service-Specific Policies
                            </h2>

                            <div className="space-y-8">
                                {/* Web & Mobile Development */}
                                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
                                    <div className="bg-white/5 px-8 py-4 border-b border-white/10">
                                        <h3 className="text-xl font-bold text-cyan-400">A. Web & Mobile App Development</h3>
                                    </div>
                                    <div className="p-8 space-y-4 text-gray-400">
                                        <p>Given the custom nature of development work, refunds are handled based on project phases:</p>
                                        <ul className="list-disc pl-5 space-y-2 marker:text-cyan-500">
                                            <li><strong>Discovery Phase:</strong> If you cancel during the initial requirement gathering phase, 50% of the deposit is refundable.</li>
                                            <li><strong>Development Phase:</strong> Once the project architecture is approved and coding begins, the initial deposit becomes <strong>non-refundable</strong> to cover resource allocation.</li>
                                            <li><strong>Milestone Payments:</strong> Payments made upon the completion and approval of specific milestones (e.g., Alpha Release, Beta Release) are final and <strong>non-refundable</strong>. Approval of a milestone implies satisfaction with the delivered work.</li>
                                            <li><strong>Bug Fixes:</strong> We provide a complimentary 30-day bug fix period post-launch. Issues found here are resolved free of charge, but do not qualify for cash refunds.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* UI/UX Design */}
                                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
                                    <div className="bg-white/5 px-8 py-4 border-b border-white/10">
                                        <h3 className="text-xl font-bold text-purple-400">B. UI/UX Design Services</h3>
                                    </div>
                                    <div className="p-8 space-y-4 text-gray-400">
                                        <p>Design is subjective, and we offer revisions to ensure satisfaction. Refund rules are as follows:</p>
                                        <ul className="list-disc pl-5 space-y-2 marker:text-purple-500">
                                            <li><strong>Before First Draft:</strong> Full refund minus a 10% administration fee if cancelled before any concepts are presented.</li>
                                            <li><strong>After First Draft:</strong> If you are unhappy with the initial concepts and choose to terminate immediately, a 50% refund is available.</li>
                                            <li><strong>After Revisions:</strong> Once you have requested revisions or changes to a design, it is considered that you have accepted the creative direction. No refunds are available after the revision process starts.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Digital Marketing & SEO */}
                                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden">
                                    <div className="bg-white/5 px-8 py-4 border-b border-white/10">
                                        <h3 className="text-xl font-bold text-green-400">C. Digital Marketing & SEO</h3>
                                    </div>
                                    <div className="p-8 space-y-4 text-gray-400">
                                        <p>Marketing involves third-party costs and long-term strategies:</p>
                                        <ul className="list-disc pl-5 space-y-2 marker:text-green-500">
                                            <li><strong>Ad Spend:</strong> Payments made to third parties (Google Ads, Facebook Ads, etc.) are strictly <strong>non-refundable</strong>. We cannot recover funds paid to ad networks.</li>
                                            <li><strong>Management Fees:</strong> Service fees are non-refundable once the campaign setup has begun.</li>
                                            <li><strong>SEO Services:</strong> SEO is a long-term process. We do not guarantee specific rankings due to search engine algorithm updates. Therefore, SEO fees are generally non-refundable once the monthly work has commenced.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Section 4: Non-Refundable Items */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                <span className="text-purple-500">04.</span> Non-Refundable Items
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { title: "Hostings & Domains", desc: "Purchase of domain names, SSL certificates, or server hosting." },
                                    { title: "Third-Party Licenses", desc: "Themes, plugins, fonts, or stock images purchased specifically for your project." },
                                    { title: "Consultation Hourly", desc: "Fees for consultation calls or workshops that have already taken place." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-red-500/5 border border-red-500/20 p-6 rounded-2xl">
                                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Section 5: Cancellation Procedure */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-purple-500">05.</span> How to Cancel
                            </h2>
                            <div className="bg-gradient-to-r from-white/5 to-transparent border-l-4 border-purple-500 p-8">
                                <p className="text-lg text-gray-300 mb-4">
                                    To cancel a service, you must submit a formal request via email. Verbal cancellations over the phone or chat are not considered valid until confirmed in writing.
                                </p>
                                <ul className="space-y-2 text-gray-400">
                                    <li><strong>1.</strong> Send an email to <span className="text-white font-bold">contact@codioratech.com</span>.</li>
                                    <li><strong>2.</strong> Use the subject line: "Cancellation Request - [Project Name/ID]".</li>
                                    <li><strong>3.</strong> Briefly explain the reason for cancellation.</li>
                                    <li><strong>4.</strong> Our team will review your request and contract terms within 48 hours.</li>
                                </ul>
                            </div>
                        </motion.section>

                        {/* Section 6: Contact Box (Updated) */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-purple-500">06.</span> Billing Disputes
                            </h2>
                            <p className="text-gray-400 mb-8">If you believe there has been a billing error, please contact us immediately. We operate in good faith and will work quickly to resolve any genuine mistakes.</p>

                            <div className="bg-gradient-to-br from-[#0a0a0a] to-[#111] p-10 rounded-3xl border border-white/10 relative overflow-hidden group max-w-2xl mx-auto text-center">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-purple-500/20 transition-colors"></div>

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <h3 className="text-white font-bold text-2xl mb-2">
                                        Codiora Tech Billing Support
                                    </h3>
                                    <p className="text-gray-400 mb-6">We are here to help you.</p>

                                    <div className="space-y-2 text-lg">
                                        <p className="text-white hover:text-purple-400 transition-colors cursor-pointer">contact@codioratech.com</p>
                                        <p className="text-gray-500 text-sm">Gulshan Lake Drive Road, Dhaka, Bangladesh, 1212</p>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                    </div>

                    <div className="mt-24 pt-10 border-t border-white/10 flex justify-between text-sm text-gray-500 font-medium tracking-wide">
                        <Link href="/" className="hover:text-purple-400 transition-colors flex items-center gap-2">
                            <span>←</span> Back to Home
                        </Link>
                        <Link href="/contact" className="hover:text-purple-400 transition-colors flex items-center gap-2">
                            Contact Us <span>→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
