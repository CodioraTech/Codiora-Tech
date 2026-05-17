import { motion } from 'framer-motion';

const reasons = [
    { title: "Fast Delivery", icon: "⚡", desc: "Rapid prototyping and agile sprints to get you to market faster." },
    { title: "Scalable Solutions", icon: "📈", desc: "Architecture designed to grow seamlessly with your user base." },
    { title: "Dedicated Support", icon: "🤝", desc: "We are your long-term partners, not just a one-off vendor." },
    { title: "Global Standards", icon: "🌍", desc: "World-class code quality and best practices compliant globally." },
    { title: "Secure & Reliable", icon: "🛡️", desc: "Enterprise-grade security protocols to protect your data." },
];

export default function WhyCodiora() {
    return (
        <section className="py-24 bg-white dark:bg-[#f8fafc] relative transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
                        Why Codiora Tech?
                    </h2>
                    <p className="text-gray-600 dark:text-slate-500 max-w-2xl mx-auto">
                        We define excellence in digital engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {reasons.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="card bg-gray-50 dark:bg-[#122a46]/5 border border-black/5 dark:border-[#122a46]/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
                        >
                            <div className="card-body items-center text-center p-6">
                                <div className="text-4xl mb-4 bg-white dark:bg-[#122a46]/10 p-4 rounded-full shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="card-title text-gray-900 dark:text-[#122a46] text-lg">{item.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-500">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
