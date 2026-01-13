import { motion } from 'framer-motion';

export default function FounderMessage() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-dark relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 p-12 rounded-3xl relative"
                    >
                        <div className="text-6xl text-cyan-500/20 absolute top-8 left-8 font-serif leading-none">“</div>

                        <blockquote className="text-2xl md:text-3xl font-light text-gray-800 dark:text-gray-200 leading-relaxed mb-10 relative z-10 font-serif italic">
                            We started Codiora Tech with one goal — to build reliable technology that truly helps businesses grow. Not just code, but solutions that matter.
                        </blockquote>

                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-[2px]">
                                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                                    {/* Placeholder Avatar */}
                                    <span className="text-2xl">👨‍💻</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Asif Mahamud Shaon</h4>
                                <p className="text-sm text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">Founder & CEO</p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
