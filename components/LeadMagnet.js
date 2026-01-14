import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LeadMagnet() {
    const [email, setEmail] = useState('');
    const [honeypot, setHoneypot] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();

        // Anti-bot check
        if (honeypot) return;

        // Basic validation
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 2000);
    };

    return (
        <section className="py-24 relative overflow-hidden bg-[#020202] text-white">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow delay-1000" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto relative group"
                >
                    {/* Glowing Border Gradient */}
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-[2.5rem] opacity-30 group-hover:opacity-60 blur-md transition-opacity duration-500" />

                    <div className="relative bg-[#0a0a0a] border border-white/10 p-6 md:p-16 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
                        {/* Subtle inner gloss */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />

                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
                            <div>
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6"
                                >
                                    Exclusive Resource
                                </motion.span>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-4xl md:text-5xl font-black mb-6 leading-tight"
                                >
                                    How to Choose the <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Right Software Partner</span>
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-gray-400 text-lg mb-8 leading-relaxed"
                                >
                                    Stop gambling with your tech stack. Get our internal checklist used to vet top-tier engineering teams.
                                </motion.p>
                                <ul className="space-y-3 mb-8">
                                    {['Vendor Assessment Matrix', 'Technical Due Diligence Checklist', 'Hidden Cost Revealer'].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + (i * 0.1) }}
                                            className="flex items-center gap-3 text-gray-300 font-medium"
                                        >
                                            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white/5 border border-white/5 p-8 rounded-3xl backdrop-blur-sm relative">
                                <AnimatePresence mode="wait">
                                    {status === 'success' ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-10"
                                        >
                                            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                                                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-2">Check Your Inbox!</h3>
                                            <p className="text-gray-400">The guide is on its way to {email}.</p>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-5"
                                        >
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Work Email</label>
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none placeholder:text-gray-700 font-medium"
                                                    placeholder="name@company.com"
                                                />
                                                {/* Honeypot Field - Invisible to users */}
                                                <input
                                                    type="text"
                                                    name="bot_field"
                                                    value={honeypot}
                                                    onChange={(e) => setHoneypot(e.target.value)}
                                                    style={{ display: 'none', visibility: 'hidden', height: 0, width: 0, position: 'absolute' }}
                                                    tabIndex={-1}
                                                    autoComplete="off"
                                                />
                                            </div>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full py-5 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold text-lg tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all group relative overflow-hidden"
                                            >
                                                <span className="relative z-10 flex items-center justify-center gap-2">
                                                    {status === 'loading' ? 'Sending...' : 'Get Instant Access'}
                                                    {status !== 'loading' && <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>}
                                                </span>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                            </motion.button>
                                            <p className="text-xs text-center text-gray-500">
                                                Join 2,500+ CTOs and Founders reading our newsletter.
                                            </p>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
