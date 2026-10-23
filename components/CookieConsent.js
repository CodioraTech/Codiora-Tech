import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const consent = localStorage.getItem('codiora_cookie_consent');
            if (!consent) {
                // Show banner if no choice has been recorded
                const timer = setTimeout(() => setVisible(true), 800);
                return () => clearTimeout(timer);
            }
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('codiora_cookie_consent', 'accepted');
        setVisible(false);
        window.dispatchEvent(new Event('cookie_consent_updated'));
    };

    const handleDecline = () => {
        localStorage.setItem('codiora_cookie_consent', 'declined');
        setVisible(false);
        window.dispatchEvent(new Event('cookie_consent_updated'));
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    role="dialog"
                    aria-live="polite"
                    aria-label="Cookie consent banner"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-lg z-50 p-6 bg-[#0f172a] text-white rounded-2xl shadow-2xl border border-teal-500/30 backdrop-blur-xl"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-base font-bold text-white mb-1">Your Privacy Choices</h3>
                            <p className="text-xs text-slate-300 leading-relaxed mb-4">
                                We use cookies and analytics tools (like Google Tag Manager) to understand site performance and deliver tailored experiences. We only activate optional analytics with your explicit consent. Read our{' '}
                                <Link href="/privacy-policy" className="text-teal-400 underline hover:text-teal-300">
                                    Privacy Policy
                                </Link>.
                            </p>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handleAccept}
                                    className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-[#0f172a] font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md shadow-teal-500/20 focus:outline-none focus:ring-2 focus:ring-teal-300"
                                >
                                    Accept All
                                </button>
                                <button
                                    onClick={handleDecline}
                                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-xs tracking-wider uppercase rounded-xl border border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-slate-500"
                                >
                                    Essential Only
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
