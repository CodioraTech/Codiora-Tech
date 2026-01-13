import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
// Try importing with spaces - Next.js/Webpack usually handles it
import logo from '../public/Codiora Tech logo.png';


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // Mobile menu
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    // ... scroll effect ...

    const isActive = (path) => router.pathname === path;

    // Toggle Mega Menu
    const toggleMegaMenu = () => setIsMegaMenuOpen(!isMegaMenuOpen);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full pointer-events-none"
            >
                <div className={`
                relative pointer-events-auto flex items-center justify-between 
                bg-white/90 dark:bg-[#0a0a0a]/80 backdrop-blur-2xl border border-black/5 dark:border-white/10 
                rounded-2xl px-2 py-2 shadow-2xl shadow-cyan-500/10 
                transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                group hover:border-cyan-500/30 hover:shadow-cyan-500/20
                ${scrolled ? 'w-[98%] max-w-6xl' : 'w-[95%] max-w-7xl'}
            `}>
                    {/* Glowing Background Blob */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>

                    {/* Left: Logo & Text */}
                    <Link href="/" onClick={() => setIsMegaMenuOpen(false)} className="relative z-10 flex items-center gap-3 pl-4 pr-6 py-2 border-r border-white/5 mr-2 group/logo shrink-0">
                        <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-gray-800 to-black rounded-xl border border-white/10 group-hover/logo:border-cyan-500/50 transition-colors">
                            <img src={logo.src} alt="Codiora Tech Logo" className="w-6 h-6 object-contain filter brightness-125" />
                        </div>
                        <span className="text-xl font-black tracking-wider text-gray-900 dark:text-white font-['Outfit']">
                            CODIORA <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">TECH</span>
                        </span>
                    </Link>

                    {/* Center: Menu Items */}
                    <div className="hidden lg:flex items-center gap-1">
                        {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => {
                            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                            const active = isActive(path);
                            return (
                                <Link
                                    key={item}
                                    href={path}
                                    onClick={() => setIsMegaMenuOpen(false)}
                                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg overflow-hidden group/item ${active ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                                        }`}
                                >
                                    <span className={`absolute inset-0 w-full h-full bg-white/5 opacity-0 group-hover/item:opacity-100 transition-opacity rounded-lg ${active ? '!opacity-100 bg-white/10' : ''}`}></span>
                                    {active && (
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></span>
                                    )}
                                    <span className="relative z-10">{item}</span>
                                </Link>
                            );
                        })}
                        {/* More Button */}
                        <button
                            onClick={toggleMegaMenu}
                            className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg overflow-hidden group/item flex items-center gap-1 ${isMegaMenuOpen ? 'text-gray-900 dark:text-white bg-white/10' : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'}`}
                        >
                            <span className="relative z-10">More</span>
                            <motion.svg
                                animate={{ rotate: isMegaMenuOpen ? 180 : 0 }}
                                className="w-3 h-3 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                        </button>
                    </div>

                    {/* Right: CTA */}
                    <div className="hidden md:flex items-center gap-4 pl-2">
                        <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-[#0a0a0a] border border-white/10 rounded-full hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden">
                            {/* Shine Sweep */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 ease-in-out"></div>

                            <span className="relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-colors whitespace-nowrap">
                                Book a Free Consultation
                            </span>

                            {/* Arrow Icon */}
                            <div className="relative z-20 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/5 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-600 transition-all duration-300 group-hover:scale-110 group-hover:border-transparent shadow-lg text-gray-300 group-hover:text-white">
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden px-4 text-gray-900 dark:text-white/80 cursor-pointer hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="pointer-events-auto fixed top-28 left-4 right-4 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl rounded-2xl p-6 z-40 shadow-2xl overflow-hidden border border-black/5 dark:border-white/10"
                        >
                            <div className="flex flex-col items-center gap-3">
                                {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => {
                                    const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                                    const active = isActive(path);
                                    return (
                                        <Link
                                            key={item}
                                            href={path}
                                            onClick={() => setIsOpen(false)}
                                            className={`w-full text-center py-3 rounded-xl font-bold transition-all ${active
                                                ? 'bg-black/5 dark:bg-white/10 text-black dark:text-white'
                                                : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                                                }`}
                                        >
                                            {item}
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Mega Menu Overlay */}
            <AnimatePresence>
                {isMegaMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm pt-32 pb-10 overflow-y-auto"
                        onClick={() => setIsMegaMenuOpen(false)}
                    >
                        <div
                            className="container mx-auto max-w-6xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Background Effects */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
                                {/* Column 1: Services */}
                                <div>
                                    <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-6 border-b border-white/10 pb-2">Services</h3>
                                    <ul className="space-y-4">
                                        {[
                                            { name: "Web Architecture", href: "/services/web-architecture" },
                                            { name: "Mobile Innovation", href: "/services/mobile-innovation" },
                                            { name: "Immersive UI/UX", href: "/services/immersive-ui-ux" },
                                            { name: "DevOps & Cloud", href: "/services/devops-cloud" },
                                            { name: "AI & Automation", href: "/services/ai-automation" },
                                            { name: "Growth Marketing", href: "/services/growth-marketing" }
                                        ].map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsMegaMenuOpen(false)}
                                                    className="text-lg text-white/80 hover:text-cyan-400 hover:translate-x-1 transition-all inline-block font-medium"
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Column 2: Company */}
                                <div>
                                    <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-6 border-b border-white/10 pb-2">Company</h3>
                                    <div className="grid grid-cols-2 gap-8">
                                        <ul className="space-y-4">
                                            {[
                                                { name: "Expertise", href: "/skills" },
                                                { name: "About Us", href: "/about" },
                                                { name: "Our Process", href: "/process" },
                                                { name: "Leadership", href: "/team" },
                                                { name: "Careers", href: "/careers" }
                                            ].map((link) => (
                                                <li key={link.name}>
                                                    <Link
                                                        href={link.href}
                                                        onClick={() => setIsMegaMenuOpen(false)}
                                                        className={`text-lg hover:translate-x-1 transition-all inline-block font-medium ${link.name === 'Expertise' ? 'text-accent font-bold' : 'text-white/80 hover:text-purple-400'}`}
                                                    >
                                                        {link.name} {link.name === 'Expertise' && '✨'}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                        <ul className="space-y-4">
                                            {[
                                                { name: "Partners", href: "/partners" },
                                                { name: "Testimonials", href: "/testimonials" },
                                                { name: "FAQ", href: "/faq" },
                                                { name: "Contact", href: "/contact" }
                                            ].map((link) => (
                                                <li key={link.name}>
                                                    <Link
                                                        href={link.href}
                                                        onClick={() => setIsMegaMenuOpen(false)}
                                                        className="text-lg text-white/80 hover:text-pink-400 hover:translate-x-1 transition-all inline-block font-medium"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Column 3: Featured Work (Visual) */}
                                <div>
                                    <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-6 border-b border-white/10 pb-2">Featured Work</h3>
                                    <div className="space-y-4">
                                        <Link href="/portfolio/neonmarket" onClick={() => setIsMegaMenuOpen(false)} className="group block relative overflow-hidden rounded-xl h-40 border border-white/10">
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-black/50 group-hover:scale-105 transition-transform duration-700"></div>
                                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                                <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">NeonMarket</h4>
                                                <p className="text-sm text-gray-400">Next-gen Crypto Exchange</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <Link href="/portfolio" onClick={() => setIsMegaMenuOpen(false)} className="mt-4 inline-flex items-center text-sm font-bold text-cyan-400 hover:text-white transition-colors">
                                        View All Projects →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
