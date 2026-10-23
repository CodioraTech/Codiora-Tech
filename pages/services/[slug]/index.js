import Link from 'next/link';
import { motion } from 'framer-motion';
import { servicesData } from '../../../lib/services';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

export async function getStaticPaths() {
    const paths = Object.keys(servicesData).map((slug) => ({
        params: { slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const service = servicesData[params.slug] || null;
    return { props: { service, slug: params.slug } };
}

export default function ServicePage({ service, slug }) {
    if (!service) return <div>Loading...</div>;

    const currentSlug = slug || '';
    const breadcrumbs = [
        { name: 'Services', url: '/services' },
        { name: service.title, url: `/services/${currentSlug}` }
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] text-[#122a46] relative overflow-hidden pt-32 sm:pt-36 md:pt-40">
            <SEO
                title={service.seoTitle}
                description={service.metaDescription}
                canonicalPath={`/services/${currentSlug}`}
                breadcrumbs={breadcrumbs}
            />

            <Breadcrumbs items={breadcrumbs} />

            <div className="container mx-auto px-6 relative z-10 pt-4 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* Left Column: Title & Intro */}
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black mb-8 text-[#122a46] tracking-tight">
                            {service.title}
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 border-l-4 border-teal-500 pl-6 bg-slate-50 p-6 rounded-r-xl">
                            {service.description}
                        </p>

                        <Link
                            href={`/contact?service=${encodeURIComponent(service.title)}`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#122a46] text-white font-bold rounded-full hover:bg-teal-600 transition-all shadow-lg shadow-[#122a46]/10 hover:scale-105"
                        >
                            <span>Book Technical Consultation</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Column: Sub-Services List */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-2xl font-bold text-[#122a46] mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
                            What We Deliver
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            {service.subServices && service.subServices.map((sub, idx) => (
                                <Link key={idx} href={currentSlug ? `/services/${currentSlug}/${sub.id}` : '#'}>
                                    <div className="p-6 rounded-2xl bg-white border border-[#122a46]/10 hover:border-teal-500 transition-all cursor-pointer group shadow-sm">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-lg font-bold text-teal-600 mb-1 group-hover:text-[#122a46] transition-colors">{sub.name}</h3>
                                            <span className="text-slate-400 group-hover:text-teal-600 transition-colors">→</span>
                                        </div>
                                        <p className="text-slate-500 text-sm mt-1">{sub.desc}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Capabilities & Key Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="p-8 rounded-3xl bg-white border border-[#122a46]/10 shadow-sm">
                        <h2 className="text-2xl font-bold text-[#122a46] mb-6">Capabilities</h2>
                        <ul className="space-y-3">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                                    <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-8 rounded-3xl bg-white border border-[#122a46]/10 shadow-sm">
                        <h2 className="text-2xl font-bold text-[#122a46] mb-6">Key Benefits</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {service.benefits.map((benefit, idx) => (
                                <div key={idx} className="bg-slate-50 p-4 rounded-xl text-center border border-[#122a46]/5">
                                    <span className="text-teal-600 block text-lg font-bold mb-1">✓</span>
                                    <span className="text-xs font-semibold text-slate-700">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Related Portfolio Projects (Requirement 7) */}
                {service.relatedProjects && service.relatedProjects.length > 0 && (
                    <div className="mt-16 p-8 md:p-12 rounded-3xl bg-teal-500/5 border border-teal-500/20">
                        <div className="max-w-2xl mb-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-teal-600">Case Studies &amp; Realized Works</span>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#122a46] mt-1">Featured Projects in {service.title}</h2>
                            <p className="text-slate-600 text-sm mt-2">See how our engineering team applied these solutions in live enterprise production environments.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {service.relatedProjects.map((p) => (
                                <Link key={p.slug} href={`/portfolio/${p.slug}`} className="p-6 bg-white rounded-2xl border border-[#122a46]/10 hover:border-teal-500 transition-all shadow-sm group">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-[#122a46] group-hover:text-teal-600 transition-colors">{p.title}</h3>
                                        <span className="text-teal-600 text-sm font-bold group-hover:translate-x-1 transition-transform">Read Case Study →</span>
                                    </div>
                                    <p className="text-slate-600 text-sm">{p.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
