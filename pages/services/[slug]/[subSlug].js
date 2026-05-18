import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { servicesData } from '../../../lib/services';
import TechMarquee from '@/components/TechMarquee';

export async function getStaticPaths() {
    let paths = [];
    Object.keys(servicesData).forEach((slug) => {
        const service = servicesData[slug];
        if (service.subServices) {
            service.subServices.forEach((sub) => {
                paths.push({
                    params: { slug: slug, subSlug: sub.id }
                });
            });
        }
    });

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const service = servicesData[params.slug];
    const subService = service.subServices.find(s => s.id === params.subSlug);
    return { props: { service, subService, slug: params.slug } };
}

export default function SubServicePage({ service, subService, slug }) {
    if (!subService) return <div>Loading...</div>;

    const { details } = subService;

    return (
        <>
            <Head>
                <title>{`${subService.name} | ${service.title} | Codiora Tech`}</title>
                <meta name="description" content={subService.desc} />
            </Head>

            <div className="min-h-screen bg-[#f8fafc] text-[#122a46] pt-24 pb-20 relative overflow-hidden">
                {/* Background ambient lighting */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                    <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[150px]" />
                    <div className="absolute bottom-[-20%] left-[-20%] w-[60%] h-[60%] bg-secondary/5 rounded-full blur-[150px]" />
                </div>

                {/* Fixed Background Pattern */}
                <div className="fixed inset-0 bg-[url('/grid.svg')] z-0 opacity-10 pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    {/* Breadcrumb */}
                    <div className="text-sm text-slate-500 mb-8 font-mono flex items-center flex-wrap gap-2 pt-8">
                        <Link href="/" className="hover:text-accent transition-colors">HOME</Link>
                        <span>/</span>
                        <Link href="/services" className="hover:text-accent transition-colors">SERVICES</Link>
                        <span>/</span>
                        <Link href={`/services/${slug}`} className="hover:text-accent transition-colors">
                            {service.title.toUpperCase()}
                        </Link>
                        <span>/</span>
                        <span className="text-accent font-bold">{subService.name.toUpperCase()}</span>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-20"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#122a46]">
                                {subService.name}
                            </h1>
                            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                                {subService.desc}
                            </p>
                        </motion.div>

                        {/* What We Do Section */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-20 glass-panel p-10 rounded-3xl border border-[#122a46]/5 bg-gradient-to-b from-[#122a46]/5 to-transparent backdrop-blur-md"
                        >
                            <div className="flex flex-col md:flex-row gap-10 items-start">
                                <div className="md:w-1/3">
                                    <h2 className="text-3xl font-bold text-accent mb-4">What We Do</h2>
                                    <div className="h-1 w-20 bg-[#122a46]/20 rounded-full"></div>
                                </div>
                                <div className="md:w-2/3">
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {details.whatWeDo}
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        {/* Technologies Marquee */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-20"
                        >
                            <h2 className="text-3xl font-bold text-center mb-10">Tech Stack</h2>
                            <TechMarquee technologies={details.technologies} />
                        </motion.section>

                        {/* Process Steps - Redesigned */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-20 relative"
                        >
                            <h2 className="text-3xl font-bold text-center mb-20 text-[#122a46]">How We Execute</h2>

                            {/* Connecting Line Background (Desktop) */}
                            <div className="hidden lg:block absolute top-[160px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent z-0"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {details.process.map((step, idx) => (
                                    <div key={idx} className="relative group pt-10">
                                        {/* Glowing vertical line connector (Mobile) */}
                                        <div className="lg:hidden absolute left-1/2 -top-6 bottom-0 w-0.5 bg-[#122a46]/10 -translate-x-1/2 z-0"></div>

                                        <div className="relative z-10 flex flex-col items-center">
                                            {/* Number Bubble with Pulse */}
                                            <div className="relative mb-6">
                                                <div className="absolute inset-0 bg-accent blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500 rounded-full" />
                                                <div className="w-20 h-20 rounded-full bg-[#f8fafc] border-2 border-accent/30 group-hover:border-accent text-[#122a46] flex items-center justify-center text-2xl font-black shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all duration-300 group-hover:scale-110 relative z-10 bg-gradient-to-br from-[#122a46]/10 to-transparent backdrop-blur-md">
                                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
                                                        0{idx + 1}
                                                    </span>
                                                </div>
                                                {/* Circuit Node Dot */}
                                                <div className="absolute -bottom-3 left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1/2 shadow-[0_0_10px_#00E5FF]"></div>
                                            </div>

                                            {/* Content Card */}
                                            <div className="w-full bg-[#122a46]/5 border border-[#122a46]/5 p-6 rounded-2xl backdrop-blur-sm group-hover:bg-[#122a46]/10 group-hover:border-accent/20 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5">
                                                <div className="h-1 w-10 bg-gradient-to-r from-accent to-secondary rounded-full mb-4 mx-auto transition-all duration-500 group-hover:w-20"></div>
                                                <h3 className="text-xl font-bold text-center mb-3 text-[#122a46] group-hover:text-accent transition-colors">{step.title}</h3>
                                                <p className="text-sm text-slate-500 text-center leading-relaxed">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* CTA */}
                        <div className="text-center mt-32">
                            <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="inline-block px-12 py-5 bg-[#122a46] text-white font-bold text-lg rounded-full hover:bg-teal-500 hover:scale-105 transition-all shadow-[0_0_40px_rgba(18,42,70,0.2)]">
                                Discuss Your {subService.name} Project
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
