import { motion } from 'framer-motion';

export default function CaseStudyCard({ study }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="group rounded-2xl overflow-hidden bg-white dark:bg-[#f8fafc] border border-black/5 dark:border-[#122a46]/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500"
        >
            <div className={`h-48 bg-gradient-to-br ${study.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50 contrast-125 group-hover:scale-110 transition-transform duration-700">
                    {study.icon}
                </div>
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#f8fafc]/20 backdrop-blur-md text-[#122a46] text-xs font-bold uppercase tracking-wider border border-[#122a46]/10">
                        {study.category}
                    </span>
                </div>
            </div>

            <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-[#122a46] mb-2">{study.title}</h3>
                <p className="text-sm text-slate-500 mb-6">{study.client}</p>

                <div className="space-y-4 mb-6">
                    <div>
                        <h4 className="text-xs font-bold text-cyan-600 dark:text-teal-600 uppercase tracking-wide mb-1">Problem</h4>
                        <p className="text-sm text-gray-600 dark:text-slate-500 leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wide mb-1">Solution</h4>
                        <p className="text-sm text-gray-600 dark:text-slate-500 leading-relaxed">{study.solution}</p>
                    </div>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-[#122a46]/5">
                    <h4 className="text-xs font-bold text-green-500 uppercase tracking-wide mb-2">Impact</h4>
                    <p className="font-bold text-gray-900 dark:text-[#122a46]">{study.result}</p>
                </div>
            </div>
        </motion.div>
    );
}
