import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function Services() {
    const services = [
        { title: "AI Automation & Intelligent Agents", description: "Reduce support tickets by 80% and automate repetitive workflows with custom knowledge-base bots and autonomous AI agents.", icon: "🧠", image: "/images/services/ai.jpg", slug: "ai-automation" },
        { title: "Full-Stack Enterprise Applications", description: "Secure, multi-tenant SaaS platforms and real-time interactive analytics dashboards designed to scale without tech debt.", icon: "💎", image: "/images/services/web.png", slug: "enterprise-apps" },
        { title: "Web Architecture", description: "Scalable, high-performance web architectures tailored to your business.", icon: "🌐", image: "/images/services/web-architecture.png", slug: "web-architecture" },
        { title: "Mobile Innovation", description: "Native and cross-platform mobile solutions for iOS and Android.", icon: "🚀", image: "/images/services/mobile.jpg", slug: "mobile-innovation" },
        { title: "Immersive UI/UX", description: "User-centric design that drives engagement and satisfaction.", icon: "✨", image: "/images/services/uiux.png", slug: "immersive-ui-ux" },
        { title: "DevOps & Cloud", description: "Reliable support to keep your systems running smoothly 24/7.", icon: "☁️", image: "/images/services/devops.png", slug: "devops-cloud" },
        { title: "Data Extraction & Web Scraping", description: "Bypass anti-bots and Cloudflare to extract millions of B2B leads and competitor intelligence points directly to your database.", icon: "📊", image: "/images/services/marketing.jpg", slug: "web-scraping" },
        { title: "Growth Marketing", description: "Data-driven marketing strategies ensuring real ROI.", icon: "📈", image: "/images/services/growth-marketing.png", slug: "growth-marketing" }
    ];

    return (
        <>
            <SEO
                title="Enterprise Technology & AI Services | Codiora Tech"
                description="Explore Codiora Tech's custom AI agents, web scraping, and full-stack SaaS platform engineering built to drive ROI."
                canonicalPath="/services"
            />

            <section className="min-h-screen bg-gray-50 dark:bg-[#f8fafc] pt-32 pb-20 relative transition-colors duration-300">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-8">
                        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }]} />
                    </div>

                    <div className="text-center mb-24 max-w-4xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold mb-8 text-[#122a46]"
                        >
                            Our Expertise
                        </motion.h1>
                        <p className="text-xl text-slate-500">
                            We don't offer generic services. We provide tailored digital engineering to help you conquer your market.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ServiceCard {...service} />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="mt-20 text-center bg-white dark:bg-transparent dark:glass-panel border border-black/5 dark:border-[#122a46]/10 p-16 rounded-3xl relative overflow-hidden transition-all shadow-xl dark:shadow-none"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-secondary/10 opacity-50" />
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-[#122a46] mb-6 transition-colors">Have a Wild Idea?</h2>
                            <p className="text-gray-600 dark:text-slate-600 mb-10 text-lg max-w-2xl mx-auto transition-colors">
                                The crazier, the better. We thrive on solving "impossible" problems. Let's engineer a solution that defies expectations.
                            </p>
                            <Link href="/contact" className="inline-block px-10 py-4 bg-[#122a46] text-white font-bold rounded-full hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1 transition-all duration-300">
                                Challenge Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
