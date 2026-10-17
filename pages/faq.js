import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const faqs = [
    {
        category: "General",
        questions: [
            { q: "What defines Codiora Tech?", a: "We are not a dev shop. We are a product acceleration partner. We combine elite engineering with obsessive design to build software that scales to millions." },
            { q: "Where are you located?", a: "We are a distributed-first company with our HQ in Dhaka, Bangladesh. Our team spans multiple time zones, ensuring 24/7 velocity." },
            { q: "How do we collaborate during a project?", a: "Transparency is key. We use Slack or Discord for daily comms, Linear or Trello for task tracking, and weekly Google Meet standups. You are never left in the dark." },
            { q: "Are you hiring?", a: "We are always hunting for top engineering and design talent. If you live in code, check our Careers page or drop your CV at careers@codioratech.com." },
            { q: "Do you have a referral program?", a: "Yes. We offer generous commissions for successful client referrals. Many of our partners are other agencies who trust us with their heavy technical lifting." },
            { q: "Who owns the IP rights?", a: "You do. 100%. Upon final payment, every line of code, design asset, and infrastructure config belongs to you. We are your builders, not your landlords." }
        ]
    },
    {
        category: "Services",
        questions: [
            { q: "Do you work with early-stage startups?", a: "Yes. We love zero-to-one. If you have funding and a vision, we have the engineering firepower to get you to MVP and beyond in record time (typically 4-8 weeks)." },
            { q: "What is your typical budget range?", a: "We don't have a fixed budget range. Whatever your budget is, contact us! We will analyze your needs and provide the best possible solution tailored to your investment. Our goal is to provide value, regardless of the project size." },
            { q: "Do you offer white-label services?", a: "Yes. We frequently act as the silent engineering partner for major creative agencies and consultancy firms. We respect NDAs and seamless integration." },
            { q: "Do you offer post-launch support?", a: "Absolutely. Software is strict maintenance. We offer SLA-backed support packages to ensure your infrastructure never blinks." },
            { q: "Can you take over an existing codebase?", a: "Yes, but we audit first. We perform a 'Code Health Check' to identify technical debt and security risks before we commit to feature development or refactoring." },
            { q: "What is your pricing model?", a: "We don't do hourly billing. We operate on value-based retainers or fixed-price project sprints. This aligns our incentives with yours: shipping fast, high-quality code." }
        ]
    },
    {
        category: "Technical",
        questions: [
            { q: "What is your tech stack?", a: "We are opinionated but flexible. Our core stack is Next.js, TypeScript, Node.js/Go, PostgreSQL, MongoDB, and MySQL. For AI, we leverage Python, PyTorch, and vector databases like Pinecone." },
            { q: "How do you handle Hosting & Domains?", a: "We provide a turnkey solution. We deploy on Vercel or AWS, configure your Custom Domain, and set up Professional Business Emails so your brand is launch-ready." },
            { q: "Do you build mobile apps?", a: "Yes. We specialize in cross-platform development using React Native and Flutter. This allows us to ship to both iOS and Android from a single codebase, saving you 40% on costs." },
            { q: "Do you use WordPress?", a: "Rarely. For content sites, we prefer Headless CMS solutions (like Sanity or Strapi) paired with Next.js. This offers vastly superior performance and security compared to traditional WordPress." },
            { q: "How do you handle security?", a: "Security is day zero. We implement OWASP best practices, automated dependency scanning, and zero-trust architecture by default." },
            { q: "Will you help with App Store submission?", a: "Yes. We handle the entire bureaucratic process of getting your app approved on the Apple App Store and Google Play Store, managing certificates and guidelines." }
        ]
    }
];

const flatFaqList = faqs.flatMap(cat => cat.questions);

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
            <SEO
                title="Frequently Asked Questions | Codiora Tech"
                description="Get answers about Codiora Tech's engineering sprints, AI automation, pricing models, IP ownership, and technical delivery workflows."
                canonicalPath="/faq"
                schemaData={{
                    faqItems: flatFaqList
                }}
            />

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#122a46]/5 rounded-full blur-[150px] animate-pulse-slow" />
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10 max-w-4xl">
                    <div className="mb-8">
                        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQ', href: '/faq' }]} />
                    </div>

                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            Knowledge Base
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black tracking-tighter mb-8"
                        >
                            QUESTIONS <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">DECODED</span>
                        </motion.h1>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {["All", ...faqs.map(f => f.category)].map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all border ${activeCategory === cat
                                    ? "bg-teal-500 text-black border-teal-500 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                                    : "bg-transparent text-slate-500 border-[#122a46]/10 hover:border-teal-500/30 hover:text-[#122a46]"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* FAQ Accordion */}
                    <div className="space-y-4">
                        {allQuestions.map((item, i) => (
                            <div
                                key={item.q}
                                className="group"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(i)}
                                    aria-expanded={activeindex === i}
                                    className={`w-full text-left p-8 rounded-[2rem] border transition-all duration-300 relative overflow-hidden ${activeindex === i
                                        ? "bg-white border-teal-500/50 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                                        : "bg-white shadow-sm border-[#122a46]/10 hover:border-teal-500/30 hover:shadow-md"
                                        }`}
                                >
                                    <div className="flex justify-between items-center relative z-10">
                                        <h2 className={`text-xl md:text-2xl font-bold transition-colors ${activeindex === i ? "text-teal-600" : "text-[#122a46] group-hover:text-teal-500"}`}>
                                            {item.q}
                                        </h2>
                                        <div className={`w-8 h-8 rounded-full border border-[#122a46]/10 flex items-center justify-center transition-transform duration-300 ${activeindex === i ? "rotate-45 border-teal-500 text-teal-600" : "rotate-0 text-[#122a46]"}`}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                        </div>
                                    </div>
                                    <div
                                        className={`transition-all duration-300 ${activeindex === i ? "block" : "hidden"}`}
                                        style={{ display: activeindex === i ? "block" : "none" }}
                                    >
                                        <p className="pt-6 text-slate-500 text-lg leading-relaxed max-w-3xl">
                                            {item.a}
                                        </p>
                                        {item.category && activeCategory === "All" && (
                                            <div className="mt-4 inline-block px-3 py-1 rounded bg-[#122a46]/5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                                {item.category}
                                            </div>
                                        )}
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 text-center p-12 bg-white shadow-xl shadow-teal-500/5 border border-[#122a46]/10 rounded-[3rem]">
                        <h2 className="text-2xl font-bold mb-4 text-[#122a46]">Still have questions?</h2>
                        <p className="text-slate-500 mb-8">We can't answer everything here. Let's chat about your specific needs.</p>
                        <Link href="/contact" className="inline-block px-12 py-5 bg-[#122a46] text-white font-bold rounded-full hover:bg-teal-500 hover:text-[#0f172a] hover:scale-105 transition-all shadow-lg shadow-[#122a46]/20">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

