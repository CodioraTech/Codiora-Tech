import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { servicesData } from '../../../lib/services';

export async function getStaticPaths() {
    const paths = Object.keys(servicesData).map((slug) => ({
        params: { slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const service = servicesData[params.slug];
    return { props: { service, slug: params.slug } };
}

export default function ServicePage({ service, slug }) {
    if (!service) return <div>Loading...</div>;

    // Use slug for Link creation if available, otherwise fallback
    const currentSlug = slug || '';

    return (
        <>
            <Head>
                <title>{`${service.title} | Codiora Tech`}</title>
                <meta name="description" content={service.description} />
            </Head>

            <div className="min-h-screen bg-[#f8fafc] text-[#122a46] pt-24 pb-20 relative overflow-hidden">
                {/* Background ambient lighting */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[150px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[150px]" />
                </div>

                {/* Fixed Background Pattern */}
                <div className="fixed inset-0 bg-[url('/grid.svg')] z-0 opacity-10 pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    {/* Breadcrumb */}
                    <div className="text-sm text-slate-500 mb-12 font-mono flex items-center">
                        <Link href="/" className="hover:text-accent transition-colors">HOME</Link>
                        <span className="mx-2">/</span>
                        <Link href="/services" className="hover:text-accent transition-colors">SERVICES</Link>
                        <span className="mx-2">/</span>
                        <span className="text-accent">{service.title.toUpperCase()}</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                        {/* Left Column: Title & Intro */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block p-5 rounded-3xl bg-[#122a46]/5 border border-[#122a46]/10 mb-8 shadow-[0_0_40px_rgba(0,229,255,0.15)] bg-gradient-to-br from-[#122a46]/5 to-transparent backdrop-blur-sm">
                                <span className="text-7xl">{service.icon}</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-8">
                                <span className="text-[#122a46] block mb-2">{service.title.split(' ')[0]}</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                                    {service.title.split(' ').slice(1).join(' ')}
                                </span>
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed mb-10 border-l-4 border-accent pl-6 bg-gradient-to-r from-[#122a46]/5 to-transparent p-6 rounded-r-xl">
                                {service.description}
                            </p>

                            <Link href="/contact" className="inline-block group relative px-8 py-4 bg-accent text-dark font-bold rounded-full overflow-hidden hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Started
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </Link>
                        </motion.div>

                        {/* Right Column: Sub-Services List */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col justify-center"
                        >
                            <h3 className="text-2xl font-bold text-[#122a46] mb-8 flex items-center gap-3">
                                <span className="w-8 h-1 bg-accent rounded-full"></span>
                                What We Deliver
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {service.subServices && service.subServices.map((sub, idx) => (
                                    <Link key={idx} href={currentSlug ? `/services/${currentSlug}/${sub.id}` : '#'}>
                                        <motion.div
                                            whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.08)' }}
                                            className="p-6 rounded-2xl bg-[#122a46]/5 border border-[#122a46]/5 hover:border-accent/30 transition-all cursor-pointer group"
                                        >
                                            <div className="flex justify-between items-center">
                                                <h4 className="text-lg font-bold text-accent mb-1 group-hover:text-[#122a46] transition-colors">{sub.name}</h4>
                                                <span className="text-slate-500 group-hover:text-accent transition-colors">→</span>
                                            </div>
                                            <p className="text-slate-500 text-sm">{sub.desc}</p>
                                        </motion.div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Features Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <div className="glass-panel p-10 rounded-3xl border border-[#122a46]/5 relative overflow-hidden group hover:border-accent/20 transition-colors">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all" />
                            <h3 className="text-2xl font-bold text-[#122a46] mb-6">Capabilities</h3>
                            <ul className="space-y-4">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-600">
                                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="glass-panel p-10 rounded-3xl border border-[#122a46]/5 relative overflow-hidden group hover:border-secondary/20 transition-colors">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all" />
                            <h3 className="text-2xl font-bold text-[#122a46] mb-6">Key Benefits</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.benefits.map((benefit, idx) => (
                                    <div key={idx} className="bg-[#f8fafc]/50 p-4 rounded-xl text-center border border-[#122a46]/5">
                                        <span className="text-accent block text-xl font-bold mb-1">✓</span>
                                        <span className="text-sm text-slate-600">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
