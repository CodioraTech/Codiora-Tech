import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
// Try importing with spaces - Next.js/Webpack usually handles it
import logo from '../public/Codiora Tech logo.png';



const FEATURED_PROJECTS = [
    { title: "NeonMarket", category: "Next-gen Crypto Exchange", image: "/images/portfolio/neonmarket.png", href: "/portfolio/neonmarket" },
    { title: "MediBot AI", category: "AI Diagnostic Assistant", image: "/images/portfolio/medibot-ai.png", href: "/portfolio/medibot-ai" },
    { title: "Explorer Nature", category: "Premium Tourism Platform", image: "/images/portfolio/explorer-nature.png", href: "/portfolio/explorer-nature" },
    { title: "Orbital Agency", category: "3D Immersive Portfolio", image: "/images/portfolio/orbital-agency.png", href: "/portfolio/orbital-agency" }
];

const FeaturedProjectCarousel = ({ setIsMegaMenuOpen }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % FEATURED_PROJECTS.length);
        }, 3500); // Change every 3.5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-48 rounded-xl overflow-hidden border border-white/10 group bg-gray-900">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    <img
                        src={FEATURED_PROJECTS[currentIndex].image}
                        alt={FEATURED_PROJECTS[currentIndex].title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 w-full p-5 z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-xl font-bold text-white mb-1 drop-shadow-lg">{FEATURED_PROJECTS[currentIndex].title}</h4>
                        <p className="text-xs font-medium text-cyan-300 uppercase tracking-wider mb-3 drop-shadow-md">{FEATURED_PROJECTS[currentIndex].category}</p>
                    </motion.div>
                </AnimatePresence>

                <Link
                    href={FEATURED_PROJECTS[currentIndex].href}
                    onClick={() => setIsMegaMenuOpen(false)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 pl-3 pr-2 py-1.5 rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-105"
                >
                    View Case Study
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
            </div>

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 h-1 bg-white/10 w-full z-20">
                <motion.div
                    key={currentIndex}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3.5, ease: "linear" }}
                    className="h-full bg-cyan-500"
                />
            </div>
        </div>
    );
};

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
    const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

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
                bg-white/95 backdrop-blur-2xl border border-[#122a46]/10 
                rounded-2xl px-2 py-2 shadow-xl shadow-[#122a46]/5 
                transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                group hover:border-teal-500/30 hover:shadow-teal-500/10
                ${scrolled ? 'w-[98%] max-w-6xl' : 'w-[95%] max-w-7xl'}
            `}>
                    {/* Glowing Background Blob */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-500/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>

                    {/* Left: Logo */}
                    <Link href="/" onClick={() => setIsMegaMenuOpen(false)} className="relative z-10 flex items-center gap-3 pl-4 pr-6 py-1 border-r border-[#122a46]/5 mr-2 group/logo shrink-0">
                        <div className="overflow-hidden rounded-md flex items-center justify-center bg-transparent w-12 h-12">
                            <img src={logo.src} alt="Codiora Tech Logo" className="h-full w-full object-contain scale-[1.3] transform origin-center transition-transform group-hover/logo:scale-[1.4]" />
                        </div>
                        <div className="font-serif font-black tracking-widest text-2xl uppercase hidden sm:block">
                            <span className="text-[#122a46]">CODIORA</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500 ml-2">TECH</span>
                        </div>
                    </Link>

                    {/* Center: Menu Items — inside bordered pill */}
                    <div className="hidden lg:flex items-center">
                        <div className="flex items-center gap-1 bg-slate-50/80 border border-[#122a46]/10 rounded-full px-4 py-2 shadow-sm">
                            {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => {
                                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                                const active = isActive(path);
                                return (
                                    <Link
                                        key={item}
                                        href={path}
                                        onClick={() => setIsMegaMenuOpen(false)}
                                        className={`relative px-4 py-1.5 text-sm font-bold tracking-wide transition-all duration-300 rounded-full overflow-hidden group/item ${active ? 'text-[#0f172a] bg-white shadow-sm border border-[#122a46]/8' : 'text-[#0f172a]/60 hover:text-[#0f172a] hover:bg-white/70'}`}
                                    >
                                        {active && (
                                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[2px] bg-gradient-to-r from-teal-500 to-cyan-500 rounded-t-full"></span>
                                        )}
                                        <span className="relative z-10">{item}</span>
                                    </Link>
                                );
                            })}
                            {/* More Button */}
                            <button
                                onClick={toggleMegaMenu}
                                className={`relative px-4 py-1.5 text-sm font-bold tracking-wide transition-all duration-300 rounded-full flex items-center gap-1.5 ${isMegaMenuOpen ? 'text-[#0f172a] bg-white shadow-sm border border-[#122a46]/8' : 'text-[#0f172a]/60 hover:text-[#0f172a] hover:bg-white/70'}`}
                            >
                                <span className="relative z-10">More</span>
                                <motion.svg
                                    animate={{ rotate: isMegaMenuOpen ? 180 : 0 }}
                                    className="w-3 h-3 relative z-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </motion.svg>
                            </button>
                        </div>
                    </div>

                    {/* Right: CTA */}
                    <div className="hidden md:flex items-center gap-4 pl-2">
                        <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold text-white transition-all duration-300 bg-[#122a46] border border-[#122a46] rounded-full hover:bg-teal-500 hover:border-teal-500 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] overflow-hidden">
                            {/* Shine Sweep */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 ease-in-out"></div>

                            <span className="relative z-20 whitespace-nowrap text-white">
                                Book a Free Consultation
                            </span>

                            {/* Arrow Icon */}
                            <div className="relative z-20 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 shadow-sm text-white">
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden px-4 text-[#122a46] cursor-pointer hover:text-teal-500 transition-colors" onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95, height: 0 }}
                            animate={{ opacity: 1, y: 0, scale: 1, height: 'auto' }}
                            exit={{ opacity: 0, y: -20, scale: 0.95, height: 0 }}
                            className="pointer-events-auto fixed top-28 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl p-6 z-40 shadow-2xl overflow-y-auto border border-[#122a46]/10 max-h-[70vh]"
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
                                                ? 'bg-[#122a46]/5 text-[#122a46]'
                                                : 'text-slate-600 hover:text-[#122a46] hover:bg-[#122a46]/5'
                                                }`}
                                        >
                                            {item}
                                        </Link>
                                    );
                                })}

                                {/* Mobile More Button */}
                                <button
                                    onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                                    className={`w-full text-center py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${mobileMoreOpen
                                        ? 'bg-[#122a46]/5 text-[#122a46]'
                                        : 'text-slate-600 hover:text-[#122a46] hover:bg-[#122a46]/5'
                                        }`}
                                >
                                    <span>More</span>
                                    <motion.svg
                                        animate={{ rotate: mobileMoreOpen ? 180 : 0 }}
                                        className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </motion.svg>
                                </button>

                                {/* Mobile More Content */}
                                <AnimatePresence>
                                    {mobileMoreOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="w-full overflow-hidden"
                                        >
                                            <div className="pt-4 pb-2 space-y-6 border-t border-gray-200 dark:border-white/10 mt-2">
                                                {/* Services Section */}
                                                <div className="text-center">
                                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Expertise</h4>
                                                    <ul className="grid grid-cols-1 gap-2">
                                                        {[
                                                            { name: "Web Architecture", href: "/services/web-architecture" },
                                                            { name: "Mobile Innovation", href: "/services/mobile-innovation" },
                                                            { name: "Immersive UI/UX", href: "/services/immersive-ui-ux" },
                                                            { name: "AI & Automation", href: "/services/ai-automation" }
                                                        ].map(link => (
                                                            <li key={link.href}>
                                                                <Link href={link.href} onClick={() => setIsOpen(false)} className="block py-1 text-sm text-gray-800 dark:text-gray-300 hover:text-cyan-500">
                                                                    {link.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Company Section */}
                                                <div className="text-center">
                                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Company</h4>
                                                    <ul className="grid grid-cols-2 gap-2">
                                                        {[
                                                            { name: "Process", href: "/process" },
                                                            { name: "Team", href: "/team" },
                                                            { name: "Careers", href: "/careers" },
                                                            { name: "Partners", href: "/partners" },
                                                            { name: "FAQ", href: "/faq" },
                                                            { name: "Skills", href: "/skills" }
                                                        ].map(link => (
                                                            <li key={link.href}>
                                                                <Link href={link.href} onClick={() => setIsOpen(false)} className="block py-1 text-sm text-gray-800 dark:text-gray-300 hover:text-purple-500">
                                                                    {link.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

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
                        className="fixed inset-0 z-40 bg-[#122a46]/40 backdrop-blur-sm pt-32 pb-10 overflow-y-auto"
                        onClick={() => setIsMegaMenuOpen(false)}
                    >
                        <div
                            className="container mx-auto max-w-6xl bg-white border border-[#122a46]/10 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Background Effects */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#122a46]/5 rounded-full blur-[120px] pointer-events-none" />

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
                                {/* Column 1: Services */}
                                <div>
                                    <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-6 border-b border-[#122a46]/10 pb-2">Services</h3>
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
                                                    className="text-lg text-slate-600 hover:text-teal-500 hover:translate-x-1 transition-all inline-block font-medium"
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Column 2: Company */}
                                <div>
                                    <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-6 border-b border-[#122a46]/10 pb-2">Company</h3>
                                    <div className="grid grid-cols-2 gap-8">
                                        <ul className="space-y-4">
                                            {[
                                                { name: "Expertise", href: "/skills" },
                                                { name: "About Us", href: "/about" },
                                                { name: "Our Process", href: "/process" },
                                                { name: "Leadership", href: "/leadership" },
                                                { name: "Careers", href: "/careers" }
                                            ].map((link) => (
                                                <li key={link.name}>
                                                    <Link
                                                        href={link.href}
                                                        onClick={() => setIsMegaMenuOpen(false)}
                                                        className={`text-lg hover:translate-x-1 transition-all inline-block font-medium ${link.name === 'Expertise' ? 'text-teal-500 font-bold' : 'text-slate-600 hover:text-teal-500'}`}
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
                                                        className="text-lg text-slate-600 hover:text-teal-500 hover:translate-x-1 transition-all inline-block font-medium"
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
                                    <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-6 border-b border-[#122a46]/10 pb-2">Featured Work</h3>
                                    <div className="space-y-4">
                                        <FeaturedProjectCarousel setIsMegaMenuOpen={setIsMegaMenuOpen} />
                                    </div>
                                    <Link href="/portfolio" onClick={() => setIsMegaMenuOpen(false)} className="mt-4 inline-flex items-center text-sm font-bold text-teal-500 hover:text-[#122a46] transition-colors">
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
