import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Globe3D = dynamic(() => import('@/components/Globe3D'), {
    ssr: false,
    loading: () => <div className="w-full h-full min-h-[400px] bg-white/5 animate-pulse rounded-3xl" />
});

export default function Contact() {
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const data = Object.fromEntries(formData.entries());

        // 1. Security: Honeypot Check (Bot Prevention)
        if (data.website_check) {
            // Silently fail for bots - pretend success
            setStatus('success');
            return;
        }

        // 2. Validation: Strict Input Sanitization
        // Email Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        // Minimum lengths
        if (data.full_name.length < 2) {
            setStatus('error');
            setErrorMessage('Name must be at least 2 characters.');
            return;
        }
        if (data.phone.length < 6) {
            setStatus('error');
            setErrorMessage('Please enter a valid phone number.');
            return;
        }
        if (data.message.length < 10) {
            setStatus('error');
            setErrorMessage('Message is too short. Please provide more details.');
            return;
        }

        setStatus('submitting');
        setErrorMessage('');

        // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS Public Key
        // You can find this in EmailJS Dashboard -> Account -> API Keys -> Public Key
        const PUBLIC_KEY = 'r5FRZ6PBbEXsb074d';

        emailjs.sendForm('service_6hxh39r', 'template_6hm18xl', form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setErrorMessage('Failed to send message. Please try again later.');
            });
    };

    return (
        <>
            <Head>
                <title>Codiora Tech | Contact</title>
                <meta name="description" content="Start your digital transformation with Codiora Tech." />
            </Head>

            <div className="bg-[#020202] min-h-screen text-white overflow-hidden selection:bg-cyan-500/30">
                {/* Ambient Background - Reusing the premium look */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black tracking-tighter mb-4"
                        >
                            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">COLLABORATE</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400"
                        >
                            Turn your vision into a digital masterpiece.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* 1. The Form (Glassy) */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group min-h-[600px] flex flex-col justify-center"
                        >
                            {/* Glossy sheen */}
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />

                            <AnimatePresence mode='wait'>
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-center py-10"
                                    >
                                        <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full mx-auto flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(74,222,128,0.5)]">
                                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                                        <p className="text-gray-400 text-lg">Thank you for reaching out. We'll be in touch shortly.</p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="mt-8 text-cyan-400 font-bold hover:text-cyan-300 transition-colors uppercase tracking-widest text-sm"
                                        >
                                            Send Another Message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        ref={form}
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6 relative z-10"
                                    >
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name <span className="text-cyan-500">*</span></label>
                                            <input name="full_name" type="text" required className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-cyan-500 focus:bg-black/60 focus:ring-1 focus:ring-cyan-500 transition-all outline-none placeholder:text-gray-700 font-medium" placeholder="Your full name" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address <span className="text-cyan-500">*</span></label>
                                                <input name="email" type="email" required className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-cyan-500 focus:bg-black/60 focus:ring-1 focus:ring-cyan-500 transition-all outline-none placeholder:text-gray-700 font-medium" placeholder="your@email.com" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Phone Number <span className="text-cyan-500">*</span></label>
                                                <input name="phone" type="tel" required className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-cyan-500 focus:bg-black/60 focus:ring-1 focus:ring-cyan-500 transition-all outline-none placeholder:text-gray-700 font-medium" placeholder="+880 ..." />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Project Type <span className="text-cyan-500">*</span></label>
                                            <div className="relative">
                                                <select name="project_type" className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-cyan-500 focus:bg-black/60 focus:ring-1 focus:ring-cyan-500 transition-all outline-none appearance-none font-medium cursor-pointer">
                                                    <option value="" className="bg-[#0a0a0a]">Select project type</option>
                                                    <option value="Web Development" className="bg-[#0a0a0a]">Web Development & Architecture</option>
                                                    <option value="Mobile App" className="bg-[#0a0a0a]">Mobile App Innovation</option>
                                                    <option value="UI/UX Design" className="bg-[#0a0a0a]">UI/UX Design</option>
                                                    <option value="AI & Automation" className="bg-[#0a0a0a]">AI & Automation</option>
                                                    <option value="DevOps & Cloud" className="bg-[#0a0a0a]">DevOps & Cloud</option>
                                                    <option value="Other" className="bg-[#0a0a0a]">Other</option>
                                                </select>
                                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Project Details <span className="text-cyan-500">*</span></label>
                                            <textarea name="message" required className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-cyan-500 focus:bg-black/60 focus:ring-1 focus:ring-cyan-500 transition-all outline-none placeholder:text-gray-700 font-medium h-40 resize-none" placeholder="Tell us about your project requirements, goals, and timeline..."></textarea>
                                        </div>

                                        {/* Honeypot Field for Security */}
                                        <input
                                            type="text"
                                            name="website_check"
                                            style={{ display: 'none', visibility: 'hidden', height: 0, width: 0, position: 'absolute' }}
                                            tabIndex="-1"
                                            autoComplete="off"
                                        />

                                        {status === 'error' && (
                                            <div className="text-red-500 text-sm text-center font-bold">
                                                {errorMessage}
                                            </div>
                                        )}

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            disabled={status === 'submitting'}
                                            type="submit"
                                            className="w-full py-5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 group"
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                {status === 'submitting' ? (
                                                    <>
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                                                    </>
                                                )}
                                            </span>
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* 2. Visuals & Contact Info */}
                        <div className="flex flex-col gap-8">
                            {/* Info Cards */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                            >
                                <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors group">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500/10 transition-colors">
                                        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Email Us</h3>
                                    <p className="text-white font-bold text-lg">contact@codioratech.com</p>
                                </div>

                                <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors group">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-500/10 transition-colors">
                                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    </div>
                                    <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Call Us</h3>
                                    <p className="text-white font-bold text-lg">+880 123 456 7890</p>
                                </div>

                                <div className="col-span-1 sm:col-span-2 bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors group">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500/10 transition-colors">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Our Location</h3>
                                    <p className="text-white font-bold text-lg">123 Innovation Drive, Tech City, Dhaka, Bangladesh</p>
                                </div>
                            </motion.div>

                            {/* 3D Globe Container */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="flex-grow w-full min-h-[400px] bg-black/40 rounded-3xl border border-white/10 relative overflow-hidden group"
                            >
                                {/* Glowing backdrop for globe */}
                                <div className="absolute inset-0 bg-radial-gradient from-cyan-900/20 to-transparent opacity-50" />

                                <div className="absolute inset-0 z-10 p-2">
                                    <Globe3D />
                                </div>

                                {/* Overlay Text */}
                                <div className="absolute bottom-6 left-8 z-20 pointer-events-none">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">System Online</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mt-1">Global Connectivity</h2>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
