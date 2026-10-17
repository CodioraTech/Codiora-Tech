import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function PartnerApply() {
    const [status, setStatus] = useState('idle');
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        const PUBLIC_KEY = 'r5FRZ6PBbEXsb074d';
        const SERVICE_ID = 'service_6hxh39r';
        const TEMPLATE_ID = 'template_6hm18xl';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
            }, (error) => {
                console.log(error.text);
                alert("Submission failed. Please try again or contact us directly.");
                setStatus('idle');
            });
    };

    return (
        <>
            <SEO
                title="Partner Application | Codiora Tech"
                description="Apply to join the Codiora Tech partner network to deliver joint engineering and digital solutions."
                canonicalPath="/partner-apply"
            />

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/10">
                {/* 1. Global Ambient Background */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-28 relative z-10 max-w-3xl">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Partners', href: '/partners' }, { label: 'Partner Application', href: '/partner-apply' }]} />

                    {/* Header */}
                    <div className="text-center mb-16 mt-8">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
                        >
                            INITIATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">ALLIANCE</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-500 text-lg md:text-xl font-light"
                        >
                            Complete the dossier below. We review every application personally.
                        </motion.p>
                    </div>

                    {/* The Dossier Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="bg-white border border-[#122a46]/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group"
                    >
                        {/* Subtle Form Glow */}
                        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-50"></div>

                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20"
                            >
                                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/50">
                                    <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h3 className="text-3xl font-bold text-[#122a46] mb-2">Transmission Secure</h3>
                                <p className="text-slate-500">Your application has been successfully logged in our secure archives.</p>
                            </motion.div>
                        ) : (
                            <form ref={form} onSubmit={handleSubmit} className="space-y-8 relative z-10">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label htmlFor="partner_org_name" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Organization Name</label>
                                        <input
                                            id="partner_org_name"
                                            type="text"
                                            name="organization_name"
                                            required
                                            placeholder="Acme Corp"
                                            className="w-full bg-white shadow-sm border border-[#122a46]/10 rounded-xl px-5 py-4 text-[#122a46] focus:border-teal-500 focus:bg-[#f8fafc] focus:ring-2 focus:ring-teal-500/20 transition-all outline-none placeholder:text-slate-400 font-medium"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor="partner_website" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Website / Portfolio</label>
                                        <input
                                            id="partner_website"
                                            type="url"
                                            name="website_link"
                                            required
                                            placeholder="https://"
                                            className="w-full bg-white shadow-sm border border-[#122a46]/10 rounded-xl px-5 py-4 text-[#122a46] focus:border-teal-500 focus:bg-[#f8fafc] focus:ring-2 focus:ring-teal-500/20 transition-all outline-none placeholder:text-slate-400 font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="partner_contact_person" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Contact Person</label>
                                    <input
                                        id="partner_contact_person"
                                        type="text"
                                        name="contact_person"
                                        required
                                        placeholder="Your Name & Role"
                                        className="w-full bg-white shadow-sm border border-[#122a46]/10 rounded-xl px-5 py-4 text-[#122a46] focus:border-teal-500 focus:bg-[#f8fafc] focus:ring-2 focus:ring-teal-500/20 transition-all outline-none placeholder:text-slate-400 font-medium"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="partner_alignment_strategy" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Alignment Strategy</label>
                                    <textarea
                                        id="partner_alignment_strategy"
                                        name="alignment_strategy"
                                        required
                                        placeholder="What is your core proposal for this alliance?"
                                        className="w-full bg-white shadow-sm border border-[#122a46]/10 rounded-xl px-5 py-4 text-[#122a46] focus:border-teal-500 focus:bg-[#f8fafc] focus:ring-2 focus:ring-teal-500/20 transition-all outline-none placeholder:text-slate-400 font-medium h-32 resize-none"
                                    ></textarea>
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="partner_market_vision" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Market Vision</label>
                                    <textarea
                                        id="partner_market_vision"
                                        name="market_vision"
                                        required
                                        placeholder="Why Codiora Tech? How do you see us dominating the market together?"
                                        className="w-full bg-white shadow-sm border border-[#122a46]/10 rounded-xl px-5 py-4 text-[#122a46] focus:border-teal-500 focus:bg-[#f8fafc] focus:ring-2 focus:ring-teal-500/20 transition-all outline-none placeholder:text-slate-400 font-medium h-32 resize-none"
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full py-5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold text-lg tracking-wide shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-[#122a46]" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Validating Dossier...
                                        </span>
                                    ) : (
                                        <>
                                            Submit Partnership Application
                                            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>

                    <div className="mt-12 text-center">
                        <p className="text-slate-500 text-sm">
                            Prefer secure comms? <a href="mailto:partners@codioratech.com" className="text-[#122a46] hover:text-pink-400 transition-colors underline decoration-pink-500/30 underline-offset-4">Email our Alliance Director directly.</a>
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
}
