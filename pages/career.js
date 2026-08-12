import Head from 'next/head';
import { motion } from 'framer-motion';

const PageLayout = ({ title, subtitle, children }) => (
    <>
        <Head>
            <title>Codiora Tech | {title}</title>
        </Head>
        <section className="min-h-screen bg-gray-50 dark:bg-[#f8fafc] pt-32 pb-20 relative overflow-hidden transition-colors duration-300">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-[#122a46]"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 dark:text-slate-500 max-w-2xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                </div>
                {children}
            </div>
        </section>
    </>
);

export default function Career() {
    return (
        <PageLayout title="Join Our Team" subtitle="Build the future with the world's best engineering team.">
            <div className="grid gap-6 max-w-4xl mx-auto">
                {['AI-Integrated Full-Stack Engineer', 'Senior Full Stack Engineer', 'AI Research Scientist', 'Product Designer'].map((job, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-2xl bg-white dark:bg-[#122a46]/5 border border-black/5 dark:border-[#122a46]/10 hover:border-teal-500/50 transition-all group cursor-pointer"
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-[#122a46] mb-2">{job}</h3>
                                <p className="text-slate-500">Remote • Full Time</p>
                            </div>
                            <span className="text-teal-600 font-bold group-hover:translate-x-2 transition-transform">Apply Now →</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </PageLayout>
    );
}
