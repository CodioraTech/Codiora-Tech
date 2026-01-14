import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

export default function Counseling() {
    const [status, setStatus] = useState('idle');
    const [bookingDate, setBookingDate] = useState('');
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic Security Check
        const formData = new FormData(form.current);
        const data = Object.fromEntries(formData.entries());
        if (data.bot_check) return; // Honeypot

        setStatus('submitting');

        // Reusing the same public key/service as contact for now, user can swap if needed
        const PUBLIC_KEY = 'r5FRZ6PBbEXsb074d';

        // Sending as a standard message but with specific context
        // In a real app, we'd map 'booking_date' to a template variable or use a Calendly embed.
        // For now, we simulate a premium form submission.
        emailjs.sendForm('service_6hxh39r', 'template_6hm18xl', form.current, PUBLIC_KEY)
            .then(() => {
                setStatus('success');
            }, (err) => {
                console.error(err);
                setStatus('error');
            });
    };

    return (
        <>
            <Head>
                <title>Codiora Tech | Admission Counseling</title>
            </Head>

            <div className="bg-[#020202] min-h-screen text-white overflow-hidden selection:bg-indigo-500/30">
                {/* Premium Background Ambience */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                    {/* Header */}
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            Free 1-on-1 Session
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight"
                        >
                            FIND YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">PATH</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 max-w-2xl mx-auto"
                        >
                            Unsure if CodeCamp is right for you? Speak directly with a senior engineer or admission counselor to clarify your career goals.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">

                        {/* Left: Info/Context */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
                                <h3 className="text-xl font-bold text-white mb-6">What to expect?</h3>
                                <ul className="space-y-6">
                                    {[
                                        { title: "Career Roadmap", desc: "We'll review your background and map out a realistic timeline to getting hired." },
                                        { title: "Curriculum Deep Dive", desc: "Detailed look at our stack (React, Node, AWS) and if it fits your local market." },
                                        { title: "Financing Options", desc: "Discussion on payment plans, scholarships, and ISA availability." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 font-bold border border-indigo-500/20">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-sm">{item.title}</h4>
                                                <p className="text-gray-400 text-xs leading-relaxed mt-1">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl flex items-center gap-4">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className={`w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-gray-700 bg-cover`} style={{ backgroundImage: `url('https://i.pravatar.cc/100?img=${i + 10}')` }}></div>
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <p className="text-white font-bold">Join 500+ Graduates</p>
                                    <p className="text-gray-500 text-xs">Rated 4.9/5 by alumni</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Booking Form */}
                        <div className="lg:col-span-3">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-[#0a0a0a] border border-white/10 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group shadow-2xl"
                            >
                                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />

                                <AnimatePresence mode='wait'>
                                    {status === 'success' ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-20"
                                        >
                                            <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                                            <p className="text-gray-400">An admission counselor will contact you shortly to confirm your slot.</p>
                                            <Link href="/" className="inline-block mt-8 text-sm font-bold text-indigo-400 hover:text-indigo-300">Back to Home</Link>
                                        </motion.div>
                                    ) : (
                                        <form ref={form} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Your Details</label>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <input name="full_name" type="text" required placeholder="Full Name" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:bg-black/60 transition-all outline-none" />
                                                    <input name="email" type="email" required placeholder="Email Address" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:bg-black/60 transition-all outline-none" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Current Status</label>
                                                <select name="status" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:bg-black/60 transition-all outline-none appearance-none cursor-pointer">
                                                    <option value="Student" className="bg-black">Student</option>
                                                    <option value="Working Professional" className="bg-black">Working Professional</option>
                                                    <option value="Freelancer" className="bg-black">Freelancer</option>
                                                    <option value="Other" className="bg-black">Other</option>
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Preferred Time Check</label>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {['Morning (9am-12pm)', 'Afternoon (1pm-5pm)', 'Evening (6pm-9pm)'].map((slot) => (
                                                        <label key={slot} className="cursor-pointer">
                                                            <input type="radio" name="time_slot" value={slot} className="peer sr-only" required />
                                                            <div className="border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-400 text-center hover:bg-white/5 peer-checked:bg-indigo-600 peer-checked:text-white peer-checked:border-indigo-500 transition-all">
                                                                {slot.split(' ')[0]}
                                                            </div>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Questions / Goals</label>
                                                <textarea name="message" required placeholder="e.g. I want to switch from marketing to dev..." className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:bg-black/60 transition-all outline-none h-32 resize-none"></textarea>
                                            </div>

                                            {/* Honeypot */}
                                            <input type="text" name="bot_check" style={{ display: 'none' }} autoComplete="off" />

                                            <button
                                                disabled={status === 'submitting'}
                                                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-bold text-lg tracking-wide shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all"
                                            >
                                                {status === 'submitting' ? 'Scheduling...' : 'Schedule Call'}
                                            </button>
                                        </form>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
