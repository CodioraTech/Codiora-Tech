export default function TrustBadges() {
    const badges = [
        { text: "SSL Secured", icon: "🔒" },
        { text: "GDPR Ready", icon: "🇪🇺" },
        { text: "24/7 Support", icon: "🕒" },
        { text: "Data Privacy Compliant", icon: "🛡️" }
    ];

    return (
        <section className="py-12 border-t border-black/5 dark:border-white/5 bg-gray-50 dark:bg-black relative overflow-hidden">
            {/* Glossy Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent opacity-50 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                    {badges.map((badge, i) => (
                        <div key={i} className="group flex items-center gap-3 px-6 py-3 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md hover:border-cyan-500/50 hover:bg-white/80 dark:hover:bg-white/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-default">
                            <span className="text-xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-md">{badge.icon}</span>
                            <span className="font-bold text-xs uppercase tracking-[0.15em] text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                {badge.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
