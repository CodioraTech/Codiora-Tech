import Link from 'next/link';
import Image from 'next/image';
import logopng from '../public/Codiora Tech logo.png';

export default function Footer() {
    return (
        <footer className="relative bg-[#020202] text-white overflow-hidden pt-32 pb-12 border-t border-white/5">
            {/* 1. Cinematic Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay"></div>

            {/* Massive Background Typography - Parallax Feel */}
            <div className="absolute bottom-0 left-0 w-full select-none overflow-hidden leading-none pointer-events-none">
                <h1 className="text-[18vw] font-black text-white/5 tracking-tighter text-center whitespace-nowrap -mb-10 lg:-mb-16 scale-y-125">
                    CODIORA
                </h1>
            </div>

            {/* Glowing Nebulas */}
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse delay-1000" />

            <div className="container mx-auto px-6 relative z-10">

                {/* 2. Main Footer Grid */}
                <div className="flex flex-col xl:flex-row gap-20 xl:gap-8 justify-between items-start">

                    {/* Brand Section */}
                    <div className="xl:w-1/3 space-y-8">
                        <Link href="/" className="inline-flex items-center gap-4 group">
                            <div className="relative w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-500 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                <Image
                                    src={logopng}
                                    alt="Codiora Tech Logo"
                                    layout="fill"
                                    objectFit="contain"
                                    className="p-2 filter invert drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all">
                                    CODIORA TECH
                                </span>
                                <span className="text-xs text-gray-500 tracking-widest uppercase">Future of Digital</span>
                            </div>
                        </Link>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-sm font-light">
                            A Digital Transformation & Frontier Tech Company architecting the <span className="text-white font-medium">Global Impact</span> of tomorrow.
                        </p>

                        {/* Social Orbs */}
                        <div className="flex gap-4">
                            {['twitter', 'linkedin', 'github', 'facebook'].map((social, i) => (
                                <a key={social} href="#"
                                    className="w-12 h-12 rounded-full backdrop-blur-md bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-500 hover:border-cyan-500 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group"
                                    style={{ transitionDelay: `${i * 50}ms` }}
                                >
                                    <span className="capitalize text-sm font-bold group-hover:scale-110 transition-transform">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Matrix - The "Sexy" Part */}
                    <div className="xl:w-2/3 w-full">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm relative overflow-hidden group">

                            {/* Hover Gradient Sweep */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                            {/* Column 1: WHAT */}
                            <div className="space-y-6">
                                <h4 className="text-white font-bold tracking-widest text-sm uppercase border-b border-white/10 pb-4 inline-block">WHAT</h4>
                                <ul className="space-y-3">
                                    {['Services', 'AI & ML', 'Data Science', 'Cloud', 'Engineering'].map((item, i) => (
                                        <li key={i}>
                                            <Link href="/services" className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-all flex items-center gap-2 group/link">
                                                <span className="w-1 h-1 rounded-full bg-gray-600 group-hover/link:bg-cyan-400 transition-colors"></span>
                                                <span className="group-hover/link:translate-x-1 transition-transform">{item.replace('-', '')}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 2: HOW */}
                            <div className="space-y-6">
                                <h4 className="text-white font-bold tracking-widest text-sm uppercase border-b border-white/10 pb-4 inline-block">HOW</h4>
                                <ul className="space-y-3">
                                    {[
                                        { name: 'Portfolio', link: '/portfolio' },
                                        { name: 'Partners', link: '/partners' },
                                        { name: 'Process', link: '/process' },
                                        { name: 'Platform', link: '/platform' },
                                        { name: 'Expertise', link: '/expertise' }
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.link} className="text-gray-400 hover:text-purple-400 text-sm font-medium transition-all flex items-center gap-2 group/link">
                                                <span className="w-1 h-1 rounded-full bg-gray-600 group-hover/link:bg-purple-400 transition-colors"></span>
                                                <span className="group-hover/link:translate-x-1 transition-transform">{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 3: WHO */}
                            <div className="space-y-6">
                                <h4 className="text-white font-bold tracking-widest text-sm uppercase border-b border-white/10 pb-4 inline-block">WHO</h4>
                                <ul className="space-y-3">
                                    {[
                                        { name: 'Company', link: '/about' },
                                        { name: 'History', link: '/history' },
                                        { name: 'Team', link: '/about' },
                                        { name: 'Culture', link: '/culture' },
                                        { name: 'Career', link: '/careers' },
                                        { name: 'Testimonials', link: '/testimonials' }
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.link} className="text-gray-400 hover:text-pink-400 text-sm font-medium transition-all flex items-center gap-2 group/link">
                                                <span className="w-1 h-1 rounded-full bg-gray-600 group-hover/link:bg-pink-400 transition-colors"></span>
                                                <span className="group-hover/link:translate-x-1 transition-transform">{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 4: MORE */}
                            <div className="space-y-6">
                                <h4 className="text-white font-bold tracking-widest text-sm uppercase border-b border-white/10 pb-4 inline-block">MORE</h4>
                                <ul className="space-y-3">
                                    {[
                                        { name: 'Contact Us', link: '/contact' },
                                        { name: 'Become Partner', link: '/partners' },
                                        { name: 'Blog', link: '/blog' },
                                        { name: 'CodeCamp', link: '/codecamp' },
                                        { name: 'Internship', link: '/internship' }
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.link} className="text-gray-400 hover:text-emerald-400 text-sm font-medium transition-all flex items-center gap-2 group/link">
                                                <span className="w-1 h-1 rounded-full bg-gray-600 group-hover/link:bg-emerald-400 transition-colors"></span>
                                                <span className="group-hover/link:translate-x-1 transition-transform">{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                {/* 3. Bottom Utility Bar */}
                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-medium tracking-wide">
                    <p className="flex items-center gap-2">
                        <span>&copy; {new Date().getFullYear()} Codiora Tech.</span>
                        <span className="hidden md:inline w-1 h-1 rounded-full bg-gray-700"></span>
                        <span>All rights reserved.</span>
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors relative group">
                            Privacy Policy
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/terms-conditions" className="hover:text-white transition-colors relative group">
                            Terms & Conditions
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/sitemap" className="hover:text-white transition-colors relative group">
                            Sitemap
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
