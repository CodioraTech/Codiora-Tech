import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Codiora Tech | Privacy Policy</title>
            </Head>

            <div className="bg-[#020202] min-h-screen text-gray-300 font-sans selection:bg-blue-500/30 overflow-hidden relative">

                {/* 1. Global Ambient Background */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 py-44 max-w-4xl relative z-10">

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
                            className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            Legal Compliance
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
                            PRIVACY <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">POLICY</span>
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
                                <span className="text-blue-500">01.</span> Introduction
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-400">
                                At Codiora Tech ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                            </p>
                        </motion.section>

                        {/* Section 2: The Data We Collect (Grid Layout) */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-blue-500">02.</span> The Data We Collect
                            </h2>
                            <p className="text-gray-400 mb-8">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { title: "Identity Data", icon: "ID", desc: "First name, last name, username or similar identifier." },
                                    { title: "Contact Data", icon: "@", desc: "Billing address, delivery address, email address and telephone numbers." },
                                    { title: "Technical Data", icon: "IP", desc: "Internet protocol (IP) address, login data, browser type, time zone, and OS." },
                                    { title: "Usage Data", icon: "📊", desc: "Information about how you use our website, products and services." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors group">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm border border-blue-500/30 group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-white font-bold">{item.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Section 3 */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500">03.</span> How We Use Your Data
                            </h2>
                            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 md:p-8">
                                <p className="mb-4 text-gray-400">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                                <ul className="space-y-3">
                                    {[
                                        "Where we need to perform the contract we are about to enter into or have entered into with you.",
                                        "Where it is necessary for our legitimate interests (or those of a third party) and your interests and rights do not override those interests.",
                                        "Where we need to comply with a legal or regulatory obligation."
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-gray-300">
                                            <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.section>

                        {/* Section 4 */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="text-blue-500">04.</span> Cookies & Tracking
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-400 mb-4">
                                We use cookies and similar tracking technologies to track the activity on our Request Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-400 border-l-2 border-blue-500/50 pl-4 py-1 bg-blue-500/5 rounded-r-lg">
                                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                            </p>
                        </motion.section>

                        {/* Section 5 & 6 */}
                        {[
                            {
                                num: "05",
                                title: "Data Security",
                                content: "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know."
                            },
                            {
                                num: "06",
                                title: "Third-Party Links",
                                content: "This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements."
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
                                    <span className="text-blue-500">{section.num}.</span> {section.title}
                                </h2>
                                <p className="text-lg leading-relaxed text-gray-400">
                                    {section.content}
                                </p>
                            </motion.section>
                        ))}

                        {/* Section 7: Contact Box */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-blue-500">07.</span> Contact Us
                            </h2>
                            <p className="text-gray-400 mb-6">If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>

                            <div className="bg-gradient-to-br from-[#0a0a0a] to-[#111] p-8 rounded-3xl border border-white/10 relative overflow-hidden group max-w-lg">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-blue-500/20 transition-colors"></div>

                                <div className="relative z-10">
                                    <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                        Codiora Tech Legal Team
                                    </h3>
                                    <div className="space-y-3 text-gray-400 font-medium">
                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                            <a href="mailto:contact@codioratech.com" className="hover:text-white transition-colors">contact@codioratech.com</a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                            <span>Gulshan Lake Drive Road, Dhaka, Bangladesh, 1212</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                    </div>

                    <div className="mt-20 pt-10 border-t border-white/10 flex justify-between text-sm text-gray-500 font-medium tracking-wide">
                        <Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                            <span>←</span> Back to Home
                        </Link>
                        <Link href="/terms-conditions" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                            Terms & Conditions <span>→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
