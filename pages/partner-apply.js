import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function PartnerApply() {
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        const PUBLIC_KEY = 'r5FRZ6PBbEXsb074d';
        const SERVICE_ID = 'service_6hxh39r';
        const TEMPLATE_ID = 'template_6nzqg1r';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setErrorMessage('Transmission Failed. Secure connection interrupted.');
            });
    };

    return (
        <>
            <Head>
                <title>Codiora Tech | Apply for Partnership</title>
            </Head>

            <div className="bg-[#020202] min-h-screen text-white overflow-hidden selection:bg-purple-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-pink-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 max-w-4xl">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black tracking-tighter mb-4"
                        >
                            INITIATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">ALLIANCE</span>
                        </motion.h1>
                        <p className="text-gray-400">Complete the dossier below. We review every application personally.</p>
                    </div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#111] border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden"
                    >
                        <AnimatePresence mode='wait'>
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-20"
                                >
                                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full mx-auto flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(74,222,128,0.5)]">
                                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">Application Received</h3>
                                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                                        Your dossier rests on our desk. Our partnership directors will analyze your profile and reach out within 48 hours if we see alignment.
                                    </p>
                                    <button onClick={() => window.location.href = '/'} className="text-purple-400 font-bold hover:text-white transition-colors uppercase tracking-widest text-sm">
                                        Return to HQ
                                    </button>
                                </motion.div>
                            ) : (
                                <form ref={form} onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Organization Name</label>
                                            <input name="organization_name" type="text" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-6 py-5 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none font-medium placeholder:text-gray-700" placeholder="Acme Corp" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Website / Portfolio</label>
                                            <input name="website" type="url" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-6 py-5 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none font-medium placeholder:text-gray-700" placeholder="https://" />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Contact Person</label>
                                        <input name="contact_person" type="text" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-6 py-5 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none font-medium placeholder:text-gray-700" placeholder="Your Name & Role" />
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Alignment Strategy</label>
                                        <textarea name="strategy" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-6 py-5 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none font-medium placeholder:text-gray-700 h-40 resize-none" placeholder="Why Codiora? How do you see us dominating the market together?"></textarea>
                                    </div>

                                    {status === 'error' && (
                                        <div className="text-red-500 text-sm text-center font-bold animate-pulse">
                                            ⚠ {errorMessage}
                                        </div>
                                    )}

                                    <motion.button
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        disabled={status === 'submitting'}
                                        type="submit"
                                        className="w-full py-5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-lg tracking-wide shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all duration-300 relative overflow-hidden group"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-3">
                                            {status === 'submitting' ? (
                                                <>
                                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                                    Transmitting Data...
                                                </>
                                            ) : (
                                                <>
                                                    Submit Partnership Application
                                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                                </>
                                            )}
                                        </span>
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                                    </motion.button>
                                </form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
