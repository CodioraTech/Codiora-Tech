import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const map = [
    {
        category: "Main",
        links: [
            { name: "Home", href: "/" },
            { name: "Expertise", href: "/expertise" },
            { name: "Platform", href: "/platform" },
            { name: "Process", href: "/process" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "Case Studies", href: "/case-studies" },
            { name: "Pricing", href: "/pricing" },
            { name: "Why Us", href: "/why-us" },
            { name: "Skills", href: "/skills" },
            { name: "Contact", href: "/contact" }
        ]
    },
    {
        category: "Core Services",
        links: [
            { name: "AI & Automation", href: "/services/ai-automation" },
            { name: "Enterprise Apps", href: "/services/enterprise-apps" },
            { name: "Web Architecture", href: "/services/web-architecture" },
            { name: "Mobile Innovation", href: "/services/mobile-innovation" },
            { name: "Immersive UI/UX", href: "/services/immersive-ui-ux" },
            { name: "DevOps & Cloud", href: "/services/devops-cloud" },
            { name: "Web Scraping", href: "/services/web-scraping" },
            { name: "Growth Marketing", href: "/services/growth-marketing" }
        ]
    },
    {
        category: "Company",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Leadership", href: "/leadership" },
            { name: "Team", href: "/team" },
            { name: "Culture", href: "/culture" },
            { name: "History", href: "/history" },
            { name: "Testimonials", href: "/testimonials" },
            { name: "Partners", href: "/partners" },
            { name: "Partner Program", href: "/partner-program" }
        ]
    },
    {
        category: "Resources & Legal",
        links: [
            { name: "Blog", href: "/blog" },
            { name: "FAQ", href: "/faq" },
            { name: "CodeCamp", href: "/codecamp" },
            { name: "Internship", href: "/internship" },
            { name: "Careers", href: "/careers" },
            { name: "Privacy Policy", href: "/privacy-policy" },
            { name: "Terms & Conditions", href: "/terms-conditions" },
            { name: "Refund Policy", href: "/refund-policy" }
        ]
    }
];

export default function Sitemap() {
    return (
        <>
            <SEO
                title="HTML Sitemap | Codiora Tech"
                description="Explore the complete site map and architecture of all services, case studies, company profiles, and resources at Codiora Tech."
                canonicalPath="/sitemap"
            />

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-emerald-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute bottom-[0%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-36 sm:pt-40 md:pt-44 pb-40 relative z-10">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Sitemap', href: '/sitemap' }]} />
                    <div className="text-center mb-24">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                            Architecture
                        </div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                        >
                            SITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">MAP</span>
                        </motion.h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
                        {map.map((section, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-6"
                            >
                                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 border-b border-[#122a46]/10 pb-4">{section.category}</h2>
                                <ul className="space-y-4">
                                    {section.links.map((link, j) => (
                                        <li key={j}>
                                            <Link href={link.href} className="text-xl font-bold text-slate-600 hover:text-emerald-500 transition-colors flex items-center gap-2 group">
                                                <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-emerald-500">→</span>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
