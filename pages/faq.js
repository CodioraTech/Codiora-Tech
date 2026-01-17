import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
    {
        category: "General",
        questions: [
            { q: "What defines Codiora Tech?", a: "We are not a dev shop. We are a product acceleration partner. We combine elite engineering with obsessive design to build software that scales to millions." },
            { q: "Where are you located?", a: "We are a distributed-first company with our HQ in Dhaka, Bangladesh. Our team spans multiple time zones, ensuring 24/7 velocity." },
            { q: "How do we collaborate during a project?", a: "Transparnecy is key. We use **Slack** or **Discord** for daily comms, **Linear** or **Trello** for task tracking, and weekly **Google Meet** standups. You are never left in the dark." },
            { q: "Are you hiring?", a: "We are always hunting for the top 1% of engineering and design talent. If you live in code, check our **Careers** page or drop your CV at careers@codioratech.com." },
            { q: "Do you have a referral program?", a: "Yes. We offer generous commissions for successful client referrals. Many of our partners are other agencies who trust us with their heavy technical lifting." },
            { q: "Who owns the IP rights?", a: "You do. 100%. Upon final payment, every line of code, design asset, and infrastructure config belongs to you. We are your builders, not your landlords." }
        ]
    },
    {
        category: "Services",
        questions: [
            { q: "Do you work with early-stage startups?", a: "Yes. We love zero-to-one. If you have funding and a vision, we have the engineering firepower to get you to MVP and beyond in record time (typically 4-8 weeks)." },
            { q: "What is your typical budget range?", a: "We prioritize quality. Our engagement typically starts from **$2,500** for small specific modules and **$5,000+** for full MVPs. We create custom quotes based on complexity, not hours." },
            { q: "Do you offer white-label services?", a: "Yes. We frequently act as the silent engineering partner for major creative agencies and consultancy firms. We respect NDAs and seamless integration." },
            { q: "Do you offer post-launch support?", a: "Absolutely. Software is strict maintenance. We offer SLA-backed support packages to ensure your infrastructure never blinks." },
            { q: "Can you take over an existing codebase?", a: "Yes, but we audit first. We perform a 'Code Health Check' to identify technical debt and security risks before we commit to feature development or refactoring." },
            { q: "What is your pricing model?", a: "We don't do hourly billing. We operate on value-based retainers or fixed-price project sprints. This aligns our incentives with yours: shipping fast, high-quality code." }
        ]
    },
    {
        category: "Technical",
        questions: [
            { q: "What is your tech stack?", a: "We are opinionated but flexible. Our core stack is Next.js, TypeScript, Node.js/Go, PostgreSQL, MongoDB, and mySQL. For AI, we leverage Python, PyTorch, and vector databases like Pinecone." },
            { q: "How do you handle Hosting & Domains?", a: "We provide a turnkey solution. We deploy on **Vercel** or **AWS**, configure your **Custom Domain** (e.g., yourcompany.com), and set up **Professional Business Emails** (e.g., hello@yourcompany.com) so your brand is launch-ready." },
            { q: "Do you build mobile apps?", a: "Yes. We specialize in cross-platform development using **React Native** and **Flutter**. This allows us to ship to both iOS and Android from a single codebase, saving you 40% on costs." },
            { q: "Do you use WordPress?", a: "Rarely. For content sites, we prefer Headless CMS solutions (like Sanity or Strapi) paired with Next.js. This offers vastly superior performance and security compared to traditional WordPress." },
            { q: "How do you handle security?", a: "Security is day zero. We implement OWASP best practices, automated dependency scanning, and zero-trust architecture by default." },
            { q: "Will you help with App Store submission?", a: "Yes. We handle the entire bureaucratic process of getting your app approved on the Apple App Store and Google Play Store, managing certificates and guidelines." }
        ]
    }
];

export default function FAQ() {
    const [activeindex, setActiveIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");

    const toggleFAQ = (index) => {
        setActiveIndex(activeindex === index ? null : index);
    };

    const allQuestions = activeCategory === "All"
        ? faqs.flatMap(cat => cat.questions.map(q => ({ ...q, category: cat.category })))
        : faqs.find(cat => cat.category === activeCategory)?.questions || [];

    return (
        <>
            <Head>
                <title>Codiora Tech | FAQ</title>
            </Head>

            <div className="bg-[#020202] min-h-screen text-white overflow-hidden selection:bg-cyan-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-44 pb-40 relative z-10 max-w-4xl">
                    <div className="text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            Knowledge Base
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black tracking-tighter mb-8"
                        >
                            QUESTIONS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">DECODED</span>
                        </motion.h1>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-20">
                        {["All", ...faqs.map(f => f.category)].map((cat, i) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all border ${activeCategory === cat
                                    ? "bg-cyan-500 text-black border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                                    : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* FAQ Accordion */}
                    <div className="space-y-4">
                        <AnimatePresence mode='wait'>
                            {allQuestions.map((item, i) => (
                                <motion.div
                                    key={item.q}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="group"
                                >
                                    <button
                                        onClick={() => toggleFAQ(i)}
                                        className={`w-full text-left p-8 rounded-[2rem] border transition-all duration-300 relative overflow-hidden ${activeindex === i
                                            ? "bg-[#0a0a0a] border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                                            : "bg-[#050505] border-white/5 hover:border-white/20"
                                            }`}
                                    >
                                        <div className="flex justify-between items-center relative z-10">
                                            <h3 className={`text-xl md:text-2xl font-bold transition-colors ${activeindex === i ? "text-cyan-400" : "text-white group-hover:text-cyan-200"}`}>
                                                {item.q}
                                            </h3>
                                            <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${activeindex === i ? "rotate-45 border-cyan-500 text-cyan-500" : "rotate-0 text-white"}`}>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                            </div>
                                        </div>
                                        <AnimatePresence>
                                            {activeindex === i && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="pt-6 text-gray-400 text-lg leading-relaxed max-w-3xl">
                                                        {item.a}
                                                    </p>
                                                    {item.category && activeCategory === "All" && (
                                                        <div className="mt-4 inline-block px-3 py-1 rounded bg-white/5 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                                            {item.category}
                                                        </div>
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="mt-32 text-center p-12 bg-gradient-to-br from-cyan-900/20 to-transparent border border-cyan-500/20 rounded-[3rem]">
                        <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                        <p className="text-gray-400 mb-8">We can't answer everything here. Let's chat about your specific needs.</p>
                        <a href="/contact" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                            Contact Support
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
