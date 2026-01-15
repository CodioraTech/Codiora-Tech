import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 | Lost in Void - Codiora Tech</title>
            </Head>

            <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden text-center p-6 selection:bg-cyan-500/30">

                {/* 1. Animated Background Noise */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                {/* 2. Ambient Glows */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[150px] animate-pulse delay-1000"></div>

                {/* 3. Main Content Container */}
                <div className="relative z-10 flex flex-col items-center">

                    {/* The Glitchy 404 Text */}
                    <div className="relative mb-2">
                        <motion.h1
                            className="text-[150px] md:text-[250px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 relative z-10 mix-blend-overlay"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "backOut" }}
                        >
                            404
                        </motion.h1>

                        {/* Glitch Layers */}
                        <motion.h1
                            className="absolute inset-0 text-[150px] md:text-[250px] font-black leading-none tracking-tighter text-cyan-500 opacity-50 z-0"
                            animate={{
                                x: [-2, 2, -1, 0],
                                y: [1, -1, 0],
                                clipPath: ['inset(20% 0 80% 0)', 'inset(60% 0 10% 0)', 'inset(0 0 0 0)']
                            }}
                            transition={{ repeat: Infinity, duration: 2, repeatType: 'mirror', ease: "linear" }}
                        >
                            404
                        </motion.h1>
                        <motion.h1
                            className="absolute inset-0 text-[150px] md:text-[250px] font-black leading-none tracking-tighter text-purple-500 opacity-50 z-0"
                            animate={{
                                x: [2, -2, 1, 0],
                                y: [-1, 2, 0],
                                clipPath: ['inset(10% 0 60% 0)', 'inset(80% 0 5% 0)', 'inset(0 0 0 0)']
                            }}
                            transition={{ repeat: Infinity, duration: 2.5, repeatType: 'mirror', ease: "linear" }}
                        >
                            404
                        </motion.h1>
                    </div>

                    {/* Subtitle / Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-6 max-w-lg"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                            <span className="text-red-500 font-mono tracking-widest text-sm font-bold uppercase">System Error: Coordinates Invalid</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Lost in the Digital Void?
                        </h2>
                        <p className="text-gray-400 text-lg font-light leading-relaxed">
                            The page you are looking for has been moved, deleted, or possibly disintegrated by our AI overlords.
                        </p>

                        {/* Return Button */}
                        <div className="pt-8">
                            <Link href="/">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full"
                                >
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-20 group-hover:opacity-100 transition-opacity duration-300 border border-white/10" />
                                    <div className="absolute inset-0 border border-white/10 rounded-full"></div>

                                    <span className="relative flex items-center gap-3 text-white font-bold tracking-widest uppercase text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                        </svg>
                                        Return to Base
                                    </span>
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                </div>

                {/* Footer Deco */}
                <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none opacity-30">
                    <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.5em]">Codiora Tech // 404_Protocol_Intiated</p>
                </div>
            </div>
        </>
    );
}
