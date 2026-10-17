import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404: Page Not Found | Codiora Tech</title>
                <meta name="description" content="The page you requested could not be found. Explore our services, portfolio, or return to the Codiora Tech homepage." />
                <meta name="robots" content="noindex, follow" />
            </Head>

            <div className="relative min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center overflow-hidden text-center p-6 selection:bg-teal-500/30">
                {/* Ambient Glows */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#122a46]/5 rounded-full blur-[150px] animate-pulse delay-1000"></div>

                {/* Main Content Container */}
                <div className="relative z-10 flex flex-col items-center max-w-2xl">
                    {/* The Glitchy 404 Visual (Non-heading element for decorative numbers) */}
                    <div className="relative mb-4 select-none" aria-hidden="true">
                        <motion.div
                            className="text-[130px] md:text-[200px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#122a46] via-slate-600 to-teal-600 relative z-10"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "backOut" }}
                        >
                            404
                        </motion.div>

                        {/* Glitch Shadow Layer */}
                        <motion.div
                            className="absolute inset-0 text-[130px] md:text-[200px] font-black leading-none tracking-tighter text-teal-600/30 z-0"
                            animate={{
                                x: [-2, 2, -1, 0],
                                y: [1, -1, 0]
                            }}
                            transition={{ repeat: Infinity, duration: 2, repeatType: 'mirror', ease: "linear" }}
                        >
                            404
                        </motion.div>
                    </div>

                    {/* Single H1 for Page Hierarchy */}
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-ping"></span>
                        <span className="text-teal-600 font-mono tracking-widest text-xs font-bold uppercase">Error 404 - Not Found</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-[#122a46] mb-4">
                        Page Not Found
                    </h1>

                    <p className="text-slate-600 text-base md:text-lg font-normal leading-relaxed mb-8 max-w-lg">
                        The URL you entered does not exist or has been relocated. You can return home or browse our main sections below.
                    </p>

                    {/* Return Home Button */}
                    <div className="mb-10">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#122a46] text-white font-bold rounded-full hover:bg-teal-600 transition-all shadow-lg shadow-[#122a46]/10 hover:scale-105"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            <span>Return to Homepage</span>
                        </Link>
                    </div>

                    {/* Links to Main Sections (Requirement 3) */}
                    <div className="w-full pt-8 border-t border-[#122a46]/10">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                            Explore Popular Destinations
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold">
                            <Link href="/services" className="px-4 py-2 rounded-xl bg-white border border-[#122a46]/10 text-[#122a46] hover:border-teal-500 hover:text-teal-600 transition-all shadow-sm">
                                Services
                            </Link>
                            <Link href="/portfolio" className="px-4 py-2 rounded-xl bg-white border border-[#122a46]/10 text-[#122a46] hover:border-teal-500 hover:text-teal-600 transition-all shadow-sm">
                                Portfolio
                            </Link>
                            <Link href="/about" className="px-4 py-2 rounded-xl bg-white border border-[#122a46]/10 text-[#122a46] hover:border-teal-500 hover:text-teal-600 transition-all shadow-sm">
                                About Us
                            </Link>
                            <Link href="/blog" className="px-4 py-2 rounded-xl bg-white border border-[#122a46]/10 text-[#122a46] hover:border-teal-500 hover:text-teal-600 transition-all shadow-sm">
                                Engineering Blog
                            </Link>
                            <Link href="/careers" className="px-4 py-2 rounded-xl bg-white border border-[#122a46]/10 text-[#122a46] hover:border-teal-500 hover:text-teal-600 transition-all shadow-sm">
                                Careers
                            </Link>
                            <Link href="/contact" className="px-4 py-2 rounded-xl bg-white border border-[#122a46]/10 text-[#122a46] hover:border-teal-500 hover:text-teal-600 transition-all shadow-sm">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer Decal */}
                <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none opacity-40">
                    <p className="font-mono text-[11px] text-slate-400 tracking-wider">Codiora Tech • Custom 404 Handler</p>
                </div>
            </div>
        </>
    );
}
