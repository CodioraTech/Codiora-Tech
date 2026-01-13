import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const positions = [
    "Senior Full Stack Engineer",
    "Product Designer (UI/UX)",
    "Growth Marketing Lead",
    "AI Research Scientist",
    "Frontend Engineering Intern",
    "Backend Systems Intern",
    "AI & Data Science Intern"
];

export default function CareerApply() {
    const router = useRouter();
    const [status, setStatus] = useState('idle');
    const [role, setRole] = useState('');

    useEffect(() => {
        if (router.isReady && router.query.role) {
            setRole(decodeURIComponent(router.query.role));
        }
    }, [router.isReady, router.query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!role) {
            alert("Please select a position to apply for.");
            return;
        }
        setStatus('submitting');
        setTimeout(() => setStatus('success'), 2000);
    };

    return (
        <>
            <Head>
                <title>Codiora Tech | Apply Now</title>
            </Head>

            <div className="bg-[#020202] min-h-screen text-white overflow-hidden selection:bg-green-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-green-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 transition-all duration-500">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                            {/* Left Column: Context or Instructions */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-12 lg:sticky lg:top-32"
                            >
                                <div>
                                    <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest mb-6">
                                        Join The Vanguard
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                                        Your Next Chapter Starts Here.
                                    </h1>
                                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                                        We don't care about your pedigree. We care about your output. Show us what you've built, and why you want to build with us.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-green-500 font-bold border border-white/10 mt-1">1</div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg">Application Review</h3>
                                            <p className="text-gray-500 text-sm">Our engineering leads review every code sample manually. No automated filters.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-green-500 font-bold border border-white/10 mt-1">2</div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg">Technical Deep Dive</h3>
                                            <p className="text-gray-500 text-sm">A 60-minute session where we architect a system together. No whiteboard inversions.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-green-500 font-bold border border-white/10 mt-1">3</div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg">Culture Fit & Offer</h3>
                                            <p className="text-gray-500 text-sm">Meet the founders and discuss the vision. Offers are extended same-day.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Column: Application Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="bg-[#111] border border-white/5 p-8 md:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
                                    <h3 className="text-2xl font-bold text-white mb-8">Role Application</h3>

                                    <AnimatePresence mode='wait'>
                                        {status === 'success' ? (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="text-center py-20"
                                            >
                                                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-700 rounded-full mx-auto flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(34,197,94,0.5)]">
                                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-4">Application Sent</h3>
                                                <p className="text-gray-400 mb-8 max-w-xs mx-auto">
                                                    Your resume is now in our secure pipeline.
                                                </p>
                                                <button onClick={() => window.location.href = '/careers'} className="text-green-500 font-bold hover:text-white transition-colors uppercase tracking-widest text-xs">
                                                    Back to Careers
                                                </button>
                                            </motion.div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold uppercase tracking-widest text-green-500">Position Applying For</label>
                                                    <div className="relative">
                                                        <select
                                                            value={role}
                                                            onChange={(e) => setRole(e.target.value)}
                                                            className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all outline-none font-medium text-sm appearance-none cursor-pointer"
                                                        >
                                                            <option value="" disabled>Select a role...</option>
                                                            {positions.map((p, i) => (
                                                                <option key={i} value={p}>{p}</option>
                                                            ))}
                                                        </select>
                                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-5">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">First Name</label>
                                                        <input type="text" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all outline-none font-medium text-sm" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Last Name</label>
                                                        <input type="text" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all outline-none font-medium text-sm" />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                                                    <input type="email" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all outline-none font-medium text-sm" />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">CV / Resume (URL)</label>
                                                    <input type="url" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all outline-none font-medium placeholder:text-gray-800 text-sm" placeholder="Dropbox / Google Drive Link" />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Portfolio / Github</label>
                                                    <input type="url" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all outline-none font-medium text-sm" />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Why You?</label>
                                                    <textarea className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all outline-none font-medium h-24 resize-none text-sm" placeholder="Briefly introduce yourself..."></textarea>
                                                </div>

                                                <button
                                                    disabled={status === 'submitting'}
                                                    type="submit"
                                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-base tracking-wide shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] hover:scale-[1.01] transition-all duration-300"
                                                >
                                                    {status === 'submitting' ? 'Sending...' : 'Submit Application'}
                                                </button>
                                            </form>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
