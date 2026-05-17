import { motion } from 'framer-motion';

const plans = [
    {
        title: "Fixed Price",
        desc: "Ideal for well-defined projects with clear scopes. We deliver on time and within budget.",
        features: ["Clear Scope & Deadline", "Milestone-based Payments", "No Hidden Costs", "Perfect for MVPs"]
    },
    {
        title: "Time & Material",
        desc: "Flexible model for evolving projects. Pay only for the resources and time you use.",
        features: ["Dynamic Scope", "Hourly/Daily Rates", "High Flexibility", "Scalable Team"]
    },
    {
        title: "Monthly Retainer",
        desc: "Dedicated team extension for long-term collaboration and continuous development.",
        features: ["Dedicated Developers", "Consistent Output", "Priority Support", "Long-term Growth"]
    },
];

export default function PricingModels() {
    return (
        <section className="py-24 bg-white dark:bg-[#f8fafc] relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-[#122a46] mb-4">Flexible Pricing Models</h2>
                    <p className="text-gray-600 dark:text-slate-500">Choose the engagement model that fits your business needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-3xl border border-black/5 dark:border-[#122a46]/10 bg-gray-50 dark:bg-[#122a46]/5 hover:border-teal-500/50 transition-all duration-300 group
                                ${i === 1 ? 'md:-translate-y-4 shadow-2xl shadow-cyan-500/10 border-teal-500/30' : ''}`}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-[#122a46] mb-4">{plan.title}</h3>
                            <p className="text-gray-600 dark:text-slate-600 mb-8 text-sm leading-relaxed">{plan.desc}</p>

                            <ul className="space-y-4">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-700 dark:text-slate-500">
                                        <span className="text-teal-600">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
