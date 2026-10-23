import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function Services() {
    const services = [
        {
            title: "AI Automation & Intelligent Agents",
            description: "Reduce support tickets by 80% and automate repetitive workflows with custom knowledge-base bots and autonomous AI agents.",
            icon: "🧠",
            image: "/images/services/ai.webp",
            slug: "ai-automation"
        },
        {
            title: "Full-Stack Enterprise Applications",
            description: "Secure, multi-tenant SaaS platforms and real-time interactive analytics dashboards designed to scale without tech debt.",
            icon: "💎",
            image: "/images/services/web.webp",
            slug: "enterprise-apps"
        },
        {
            title: "Web Architecture",
            description: "Scalable, high-performance web architectures tailored to your business, engineered for sub-second page loads.",
            icon: "🌐",
            image: "/images/services/web-architecture.webp",
            slug: "web-architecture"
        },
        {
            title: "Mobile Innovation",
            description: "Native and cross-platform mobile solutions for iOS and Android delivering fluid 60 FPS performance.",
            icon: "🚀",
            image: "/images/services/mobile.webp",
            slug: "mobile-innovation"
        },
        {
            title: "Immersive UI/UX",
            description: "User-centric interface design and design systems that drive engagement, retention, and high conversion.",
            icon: "✨",
            image: "/images/services/uiux.webp",
            slug: "immersive-ui-ux"
        },
        {
            title: "DevOps & Cloud",
            description: "Reliable cloud infrastructure, automated CI/CD pipelines, and Kubernetes to keep your systems running smoothly 24/7.",
            icon: "☁️",
            image: "/images/services/devops.webp",
            slug: "devops-cloud"
        },
        {
            title: "Data Extraction & Web Scraping",
            description: "Bypass anti-bots and Cloudflare to extract millions of B2B leads and competitor intelligence points directly to your database.",
            icon: "📊",
            image: "/images/services/marketing.webp",
            slug: "web-scraping"
        },
        {
            title: "Growth Marketing",
            description: "Data-driven marketing, technical SEO, and conversion optimization strategies ensuring real, measurable ROI.",
            icon: "📈",
            image: "/images/services/growth-marketing.webp",
            slug: "growth-marketing"
        }
    ];

    return (
        <>
            <SEO
                title="Enterprise Technology & AI Services | Codiora Tech"
                description="Explore Codiora Tech's custom AI agents, web scraping, and full-stack SaaS platform engineering built to drive ROI."
                canonicalPath="/services"
            />

            <section className="min-h-screen bg-[#f8fafc] pt-36 sm:pt-40 md:pt-44 pb-32 relative text-[#122a46] overflow-hidden selection:bg-teal-500/20">
                {/* Background Ambient Glows */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-teal-500/10 rounded-full blur-[140px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-blue-900/10 rounded-full blur-[140px] animate-pulse-slow delay-1000" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-6">
                        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }]} />
                    </div>

                    <div className="text-center mb-20 max-w-4xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-[#122a46] tracking-tight"
                        >
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Expertise</span>
                        </motion.h1>
                        <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light">
                            We don't offer generic services. We provide tailored digital engineering to help you conquer your market.
                        </p>
                    </div>

                    {/* Original Service Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <ServiceCard {...service} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA Card */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="text-center bg-white border border-[#122a46]/10 p-12 md:p-16 rounded-3xl relative overflow-hidden shadow-xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 pointer-events-none" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-black text-[#122a46] mb-4">Have a Wild Idea?</h2>
                            <p className="text-slate-500 text-base md:text-lg mb-8 leading-relaxed font-light">
                                The crazier, the better. We thrive on solving "impossible" problems. Let's engineer a solution that defies expectations.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-10 py-4 bg-[#122a46] text-white font-bold rounded-full hover:bg-teal-500 hover:text-slate-950 transition-all duration-300 shadow-lg"
                            >
                                Challenge Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
