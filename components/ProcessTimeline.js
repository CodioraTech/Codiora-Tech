import { motion } from 'framer-motion';

const steps = [
    { title: "Discover", desc: "Requirement collection & Analysis", icon: "🔍" },
    { title: "Design", desc: "UI/UX & System Architecture", icon: "🎨" },
    { title: "Develop", desc: "Agile Development Sprints", icon: "💻" },
    { title: "Test", desc: "QA, Security & Performance", icon: "🧪" },
    { title: "Deploy", desc: "Launch, Scale & Support", icon: "🚀" },
];

export default function ProcessTimeline() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-white transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-[#122a46] mb-6">How We Work</h2>
                    <p className="text-gray-600 dark:text-slate-500">A proven roadmap to digital success.</p>
                </motion.div>

                {/* Desktop Timeline */}
                <div className="hidden lg:flex justify-center items-center w-full relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 -translate-y-1/2 rounded-full"></div>

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-center flex-1 z-10 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-white dark:bg-[#f8fafc] border-4 border-gray-100 dark:border-[#122a46]/10 group-hover:border-teal-500 transition-all duration-300 flex items-center justify-center text-2xl shadow-lg relative">
                                {step.icon}
                                <div className="absolute inset-0 rounded-full bg-teal-500/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="mt-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-[#122a46]">{step.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-500 mt-2 max-w-[150px] mx-auto">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Vertical Timeline */}
                <ul className="timeline timeline-vertical lg:hidden">
                    {steps.map((step, i) => (
                        <li key={i}>
                            {i !== 0 && <hr className="bg-gray-200 dark:bg-[#122a46]/10" />}
                            <div className="timeline-start timeline-box bg-white dark:bg-[#122a46]/5 border-none shadow-md mb-4 p-4">
                                <h3 className="font-bold text-gray-900 dark:text-[#122a46]">{step.title}</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-500">{step.desc}</p>
                            </div>
                            <div className="timeline-middle text-2xl p-2 bg-gray-100 dark:bg-[#f8fafc] rounded-full border border-gray-200 dark:border-[#122a46]/10">
                                {step.icon}
                            </div>
                            {i !== steps.length - 1 && <hr className="bg-gray-200 dark:bg-[#122a46]/10" />}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
