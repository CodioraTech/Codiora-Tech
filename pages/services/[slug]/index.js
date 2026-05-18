import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { servicesData } from '../../../lib/services';

const serviceIcons = {
    web: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-teal-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3.284 14.253A8.959 8.959 0 013 12a8.959 8.959 0 011.157-4.418" />
        </svg>
    ),
    mobile: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-teal-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
    ),
    design: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-teal-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
    ),
    devops: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-teal-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
    ),
    ai: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-teal-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
        </svg>
    ),
    marketing: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-teal-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
    ),
};

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
                    <div className="text-sm text-slate-500 mb-10 font-mono flex items-center pt-8">
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


                            <h1 className="text-5xl md:text-7xl font-bold mb-8">
                                <span className="text-[#122a46] block mb-2">{service.title.split(' ')[0]}</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                                    {service.title.split(' ').slice(1).join(' ')}
                                </span>
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed mb-10 border-l-4 border-accent pl-6 bg-gradient-to-r from-[#122a46]/5 to-transparent p-6 rounded-r-xl">
                                {service.description}
                            </p>

                            <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="inline-block group relative px-8 py-4 bg-accent text-dark font-bold rounded-full overflow-hidden hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,229,255,0.4)]">
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
