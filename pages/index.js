import Head from 'next/head';
import dynamic from 'next/dynamic';
import ServiceCard from '@/components/ServiceCard';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import TechMarquee from '@/components/TechMarquee';

// New Components
// New Components
import LeadMagnet from '@/components/LeadMagnet';
import ServiceNetwork from '@/components/ServiceNetwork';
import TrustBadges from '@/components/TrustBadges';

// Lazy Loaded Components
const Hero3D = dynamic(() => import('@/components/Hero3D'), {
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-white dark:bg-dark z-0 transition-colors duration-300" />
});

export default function Home() {
    const services = [
        { title: "Web Architecture", description: "High-performance web applications built with Next.js and React for ultimate scalability.", icon: "💎" },
        { title: "Mobile Innovation", description: "Native-feel cross-platform apps that dominate the App Store and Play Store.", icon: "🚀" },
        { title: "Immersive UI/UX", description: "Award-winning designs that captivate users and drive engagement.", icon: "✨" },
        { title: "Enterprise AI", description: "Custom AI models and chatbots to automate and optimize your business flows.", icon: "🧠" },
        { title: "Cloud Infrastructure", description: "Secure, scalable server solutions ensuring 99.99% uptime for your critical apps.", icon: "☁️" },
        { title: "Cyber Security", description: "Advanced protection protocols to safeguard your digital assets.", icon: "🛡️" },
    ];

    // Mouse position state for parallax text
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Smooth spring for the parallax effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseSpringX = useSpring(x, { stiffness: 100, damping: 20 });
    const mouseSpringY = useSpring(y, { stiffness: 100, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Normalized coordinates -1 to 1
            const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
            const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;

            x.set(normalizedX * 30); // Move text 30px max horizontally
            y.set(normalizedY * 30); // Move text 30px max vertically
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y]);


    return (
        <>
            <Head>
                <title>Codiora Tech | Future of Digital</title>
                <meta name="description" content="Codiora Tech - Innovating Your Digital Future. Premium IT Solutions." />
            </Head>

            {/* Fixed Animated Background - Persistent across scroll */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Hero3D />
                <div className="absolute inset-0 bg-white/20 dark:bg-dark/20 z-10 pointer-events-none" /> {/* Optional overlay for text readability */}
            </div>

            {/* Hero Content Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden z-10 pointer-events-none">
                <div className="fixed inset-0 pointer-events-none" /> {/* Spacer to keep structure if needed, or just rely on relative */}

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pointer-events-none">
                    <motion.div
                        style={{ x: mouseSpringX, y: mouseSpringY }}
                        className="relative"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="mb-4 inline-block px-4 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-tracking-widest uppercase backdrop-blur-md"
                        >
                            Welcome to the Future
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight"
                        >
                            <span className="text-gray-900 dark:text-white transition-colors">Innovating Your</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-gray-900 to-secondary dark:via-white glow-text">
                                Digital Universe
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-light transition-colors"
                        >
                            We build immersive digital experiences that define the next generation of the web.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center pointer-events-auto items-center"
                    >
                        {/* Primary Button */}
                        <Link href="/contact" className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full">
                            {/* Gradient Background layer */}
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent to-secondary opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                            {/* Glow effect */}
                            <div className="absolute -inset-3 bg-gradient-to-r from-accent to-secondary rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 group-hover:duration-200 animate-tilt"></div>

                            <div className="relative flex items-center gap-3 text-white dark:text-dark font-black tracking-wider uppercase text-sm">
                                <span>Start Project</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </Link>

                        {/* Secondary Button */}
                        <Link href="/portfolio" className="group relative px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all backdrop-blur-md overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            <span className="relative text-gray-900 dark:text-white font-bold tracking-wider uppercase text-sm flex items-center gap-2">
                                View Work
                                <span className="group-hover:rotate-45 transition-transform duration-300">↗</span>
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-32 relative z-10 bg-gray-50/95 dark:bg-dark/95 backdrop-blur-xl border-t border-black/5 dark:border-white/5 transition-colors">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">Mastering the Digital Realm</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg transition-colors">
                            We blend technical expertise with artistic vision to deliver solutions that are as powerful as they are beautiful.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <ServiceNetwork />
                </div>

                {/* Tech Stack Marquee (Moved After Diagram) */}
                <div className="mt-24 relative z-10">
                    <TechMarquee />
                </div>
            </section>

            <section className="py-32 bg-white dark:bg-black relative border-t border-black/5 dark:border-white/5 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Selected Works</h2>
                            <p className="text-gray-500">Innovation in action.</p>
                        </div>
                        <Link href="/portfolio" className="hidden md:block text-accent hover:text-secondary dark:hover:text-white transition-colors">
                            View All Projects →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                id: 1,
                                title: "NeonMarket",
                                slug: "neonmarket",
                                category: "Solutions",
                                image: "/images/portfolio/neonmarket.png",
                                description: "Next-gen crypto marketplace with real-time trading engines."
                            },
                            {
                                id: 2,
                                title: "MediBot AI",
                                slug: "medibot-ai",
                                category: "AI",
                                image: "/images/portfolio/medibot-ai.png",
                                description: "AI diagnostic assistant revolutionizing preliminary triage."
                            },
                            {
                                id: 3,
                                title: "Explorer Nature",
                                slug: "explorer-nature",
                                category: "Solutions",
                                image: "/images/portfolio/explorer-nature.png",
                                description: "Premium tourism platform connecting travelers with nature."
                            }
                        ].map((project, index) => (
                            <Link href={`/portfolio/${project.slug}`} key={project.id}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-gray-900 border border-black/5 dark:border-white/10 cursor-pointer shadow-xl dark:shadow-2xl transition-all duration-500 hover:shadow-cyan-500/20"
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0 transition-all duration-700 group-hover:scale-110">
                                        <div className="relative w-full h-full">
                                            {/* Fallback gradient if image fails or loading */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black z-0" />

                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                                                onError={(e) => {
                                                    e.target.style.display = 'none'; // Hide if missing
                                                    e.target.parentElement.firstChild.style.display = 'block'; // Show gradient
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Gradient Overlay for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 z-10" />

                                    {/* Noise Texture Overlay */}
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-20 pointer-events-none"></div>

                                    {/* Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-between z-30">
                                        <div className="flex justify-between items-start">
                                            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5L19.5 4.5M19.5 4.5H8.25M19.5 4.5V15.75" />
                                                </svg>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-3xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link href="/portfolio" className="btn btn-outline border-accent text-accent w-full rounded-full">Explore All</Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 bg-gray-50 dark:bg-dark relative overflow-hidden transition-colors duration-300">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 mb-16">Trusted by Visionaries</h2>
                    <Testimonials />
                </div>
            </section>

            {/* Trust Badges */}
            <TrustBadges />

            {/* Lead Magnet */}
            <LeadMagnet />

            {/* CTA Section */}
            <section className="py-40 relative flex items-center justify-center overflow-hidden bg-white dark:bg-[#050505] border-t border-black/5 dark:border-white/5 transition-colors duration-300">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>

                {/* Glowing Orbs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

                <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-300 dark:to-gray-600 mb-6 md:mb-10 tracking-tighter leading-[0.9] selection:bg-purple-500/30">
                            READY TO <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">DISRUPT?</span>
                        </h2>
                        <p className="text-lg md:text-3xl text-gray-600 dark:text-gray-400 mb-10 md:mb-16 max-w-3xl mx-auto font-light leading-relaxed transition-colors px-4">
                            Don't just compete. Dominate. Let's build a digital experience so powerful it can't be ignored.
                        </p>

                        <Link href="/contact" className="group relative inline-flex items-center justify-center transform hover:scale-105 transition-transform duration-300 w-full md:w-auto">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
                            <button className="relative w-full md:w-auto px-8 md:px-12 py-5 md:py-6 bg-black dark:bg-[#0a0a0a] rounded-full text-white font-bold text-lg md:text-xl flex items-center justify-center gap-4 border border-white/10 group-hover:bg-gray-900 transition-all shadow-2xl">
                                <span>Start Your Project</span>
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

// Helper Component for Auto Scroll
const AutoScrollController = () => {
    useEffect(() => {
        const container = document.getElementById('service-container');

        // Check if container exists to avoid errors on page shift
        if (!container) return;

        const scrollInterval = setInterval(() => {
            const currentContainer = document.getElementById('service-container');
            if (currentContainer && !currentContainer.classList.contains('paused')) {
                // Check if we've reached the end
                if (currentContainer.scrollLeft + currentContainer.clientWidth >= currentContainer.scrollWidth - 10) {
                    currentContainer.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    currentContainer.scrollBy({ left: 400, behavior: 'smooth' });
                }
            }
        }, 3000);

        return () => clearInterval(scrollInterval);
    }, []);
    return null;
};
