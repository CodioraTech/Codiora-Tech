import { motion } from 'framer-motion';

export default function TrustBadges() {
    const badges = [
        {
            text: "SSL Secured",
            color: "text-amber-400",
            shadow: "group-hover:shadow-amber-400/20",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            )
        },
        {
            text: "GDPR Ready",
            color: "text-indigo-400",
            shadow: "group-hover:shadow-indigo-400/20",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
            )
        },
        {
            text: "24/7 Support",
            color: "text-teal-600",
            shadow: "group-hover:shadow-cyan-400/20",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            )
        },
        {
            text: "Privacy Compliant",
            color: "text-emerald-400",
            shadow: "group-hover:shadow-emerald-400/20",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-[#f8fafc] border-t border-[#122a46]/5 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, staggerChildren: 0.1 }}
                    className="flex flex-wrap justify-center gap-6"
                >
                    {badges.map((badge, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`group flex items-center gap-4 px-8 py-5 rounded-2xl bg-white border border-[#122a46]/5 hover:border-[#122a46]/20 transition-all duration-300 shadow-lg ${badge.shadow} cursor-default relative overflow-hidden`}
                        >
                            {/* Inner Glow Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

                            <div className={`relative z-10 p-2 rounded-lg bg-[#122a46]/5 group-hover:bg-[#122a46]/10 transition-colors ${badge.color}`}>
                                {badge.icon}
                            </div>

                            <div className="flex flex-col">
                                <span className="font-bold text-sm uppercase tracking-[0.1em] text-slate-500 group-hover:text-[#122a46] transition-colors">
                                    {badge.text}
                                </span>
                                <span className="text-[10px] text-gray-600 group-hover:text-slate-500 font-medium tracking-wide">
                                    Verified & Secure
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
