import Link from 'next/link';
import Image from 'next/image';
import logopng from '../public/Codiora Tech logo.png';

export default function Footer() {
    return (
        <footer className="relative bg-[#f8fafc] text-[#122a46] overflow-hidden pt-32 pb-12 border-t border-[#122a46]/10">
            {/* 1. Cinematic Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

            {/* Massive Background Typography - Parallax Feel */}
            <div className="absolute bottom-0 left-0 w-full select-none overflow-hidden leading-none pointer-events-none">
                <h1 className="text-[18vw] font-black text-[#122a46]/5 tracking-tighter text-center whitespace-nowrap -mb-10 lg:-mb-16 scale-y-125">
                    CODIORA
                </h1>
            </div>

            {/* Glowing Nebulas */}
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#122a46]/5 rounded-full blur-[150px] pointer-events-none animate-pulse delay-1000" />

            <div className="container mx-auto px-6 relative z-10">

                {/* 2. Main Footer Grid */}
                <div className="flex flex-col xl:flex-row gap-20 xl:gap-8 justify-between items-start">

                    {/* Brand Section */}
                    <div className="xl:w-1/3 space-y-8">
                        <Link href="/" className="flex items-center gap-4 mb-6 group inline-flex">
                            <div className="relative w-14 h-14 bg-transparent flex items-center justify-center transition-all duration-500 overflow-hidden">
                                <Image
                                    src={logopng}
                                    alt="Codiora Tech Logo"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-contain scale-[1.3] transition-transform group-hover:scale-[1.4]"
                                />
                            </div>
                            <div className="font-serif font-black tracking-widest text-3xl uppercase">
                                <span className="text-[#122a46]">CODIORA</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500 ml-2">TECH</span>
                            </div>
                        </Link>

                        <p className="text-[#0f172a] text-lg leading-relaxed max-w-sm font-light">
                            A Digital Transformation & Frontier Tech Company architecting the <span className="text-[#122a46] font-medium">Global Impact</span> of tomorrow.
                        </p>

                        {/* Social Orbs */}
                        <div className="flex gap-4">
                            {/* WhatsApp */}
                            <a href="https://wa.me/8801772445954" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-[#122a46]/10 flex items-center justify-center text-teal-600 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] shadow-sm transition-all duration-300 group">
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/company/codioratech" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-[#122a46]/10 flex items-center justify-center text-teal-600 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] shadow-sm transition-all duration-300 group">
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>

                            {/* Twitter / X */}
                            <a href="https://x.com/codioratech" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-[#122a46]/10 flex items-center justify-center text-teal-600 hover:text-white hover:bg-black hover:border-black shadow-sm transition-all duration-300 group">
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>

                            {/* Facebook */}
                            <a href="https://www.facebook.com/codioratech" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-[#122a46]/10 flex items-center justify-center text-teal-600 hover:text-white hover:bg-[#1877f2] hover:border-[#1877f2] shadow-sm transition-all duration-300 group">
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.469h3.047v-2.643c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Links Matrix - The "Sexy" Part */}
                    <div className="xl:w-2/3 w-full">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 p-8 rounded-3xl bg-white border border-[#122a46]/10 shadow-sm relative overflow-hidden group">

                            {/* Hover Gradient Sweep */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                            {/* Column 1: WHAT */}
                            <div className="space-y-6">
                                <h4 className="text-[#122a46] font-bold tracking-widest text-sm uppercase border-b border-[#122a46]/10 pb-4 inline-block">WHAT</h4>
                                <ul className="space-y-3">
                                    {[
                                        { name: 'AI Automation & Intelligent Agents', href: '/services/ai-automation' },
                                        { name: 'Full-Stack Enterprise Applications', href: '/services/enterprise-apps' },
                                        { name: 'Web Architecture', href: '/services/web-architecture' },
                                        { name: 'Mobile Innovation', href: '/services/mobile-innovation' },
                                        { name: 'Immersive UI/UX', href: '/services/immersive-ui-ux' },
                                        { name: 'DevOps & Cloud', href: '/services/devops-cloud' },
                                        { name: 'Data Extraction & Web Scraping', href: '/services/web-scraping' },
                                        { name: 'Growth Marketing', href: '/services/growth-marketing' }
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.href} className="text-[#0f172a] hover:text-teal-500 text-sm font-medium transition-all flex items-center gap-2 group/link">
                                                <span className="w-1 h-1 rounded-full bg-teal-600 group-hover/link:bg-teal-500 transition-colors"></span>
                                                <span className="group-hover/link:translate-x-1 transition-transform">{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 2: HOW */}
                            <div className="space-y-6">
                                <h4 className="text-[#122a46] font-bold tracking-widest text-sm uppercase border-b border-[#122a46]/10 pb-4 inline-block">HOW</h4>
                                <ul className="space-y-3">
                                    {[
                                        { name: 'Portfolio', link: '/portfolio' },
                                        { name: 'Partners', link: '/partners' },
                                        { name: 'Process', link: '/process' },
                                        { name: 'Platform', link: '/platform' },
                                        { name: 'Expertise', link: '/expertise' }
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.link} className="text-[#0f172a] hover:text-teal-500 text-sm font-medium transition-all flex items-center gap-2 group/link">
                                                <span className="w-1 h-1 rounded-full bg-teal-600 group-hover/link:bg-teal-500 transition-colors"></span>
                                                <span className="group-hover/link:translate-x-1 transition-transform">{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 3: WHO */}
                            <div className="space-y-6">
                                <h4 className="text-[#122a46] font-bold tracking-widest text-sm uppercase border-b border-[#122a46]/10 pb-4 inline-block">WHO</h4>
                                <ul className="space-y-3">
                                    {[
                                        { name: 'Company', link: '/about' },
                                        { name: 'History', link: '/history' },
                                        { name: 'Team', link: '/team' },
                                        { name: 'Culture', link: '/culture' },
                                        { name: 'Career', link: '/careers' },
                                        { name: 'Testimonials', link: '/testimonials' }
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.link} className="text-[#0f172a] hover:text-teal-500 text-sm font-medium transition-all flex items-center gap-2 group/link">
                                                <span className="w-1 h-1 rounded-full bg-teal-600 group-hover/link:bg-teal-500 transition-colors"></span>
                                                <span className="group-hover/link:translate-x-1 transition-transform">{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 4: MORE */}
                            <div className="space-y-6">
                                <h4 className="text-[#122a46] font-bold tracking-widest text-sm uppercase border-b border-[#122a46]/10 pb-4 inline-block">MORE</h4>
                                <ul className="space-y-3">
                                    {[
                                        { name: 'Contact Us', link: '/contact' },
                                        { name: 'Become Partner', link: '/partners' },
                                        { name: 'Blog', link: '/blog' },
                                        { name: 'CodeCamp', link: '/codecamp' },
                                        { name: 'Internship', link: '/internship' },
                                        { name: 'FAQ', link: '/faq' }
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <Link href={item.link} className="text-[#0f172a] hover:text-teal-500 text-sm font-medium transition-all flex items-center gap-2 group/link">
                                                <span className="w-1 h-1 rounded-full bg-teal-600 group-hover/link:bg-teal-500 transition-colors"></span>
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
                <div className="mt-24 pt-8 border-t border-[#122a46]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[#0f172a] font-medium tracking-wide">
                    <p className="flex items-center gap-2">
                        <span>&copy; {new Date().getFullYear()} Codiora Tech.</span>
                        <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-300"></span>
                        <span>All rights reserved.</span>
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy-policy" className="hover:text-[#122a46] transition-colors relative group">
                            Privacy Policy
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#122a46] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/terms-conditions" className="hover:text-[#122a46] transition-colors relative group">
                            Terms & Conditions
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#122a46] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/refund-policy" className="hover:text-[#122a46] transition-colors relative group">
                            Refund Policy
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#122a46] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/sitemap" className="hover:text-[#122a46] transition-colors relative group">
                            Sitemap
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#122a46] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
