export default function LeadMagnet() {
    return (
        <section className="py-20 relative overflow-hidden bg-gray-900 dark:bg-black text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto glass-panel !bg-white/5 !border-white/10 p-12 rounded-3xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Free Guide: How to Choose the Right Software Partner
                    </h2>
                    <p className="text-gray-300 mb-10 text-lg">
                        Avoid costly mistakes. Get our expert checklist for evaluating tech vendors.
                    </p>

                    <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-6 py-4 rounded-full bg-black/30 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                        <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all transform hover:scale-105">
                            Get the Guide
                        </button>
                    </form>
                    <p className="mt-4 text-xs text-gray-500">We respect your inbox. Unsubscribe anytime.</p>
                </div>
            </div>
        </section>
    );
}
