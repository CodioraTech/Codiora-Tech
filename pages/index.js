import Head from 'next/head';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import ElasticStack from '@/components/ElasticStack';

const trustItems = [
    { id: 1, image: "https://randomuser.me/api/portraits/men/32.jpg", name: "Client 1" },
    { id: 2, image: "https://randomuser.me/api/portraits/women/44.jpg", name: "Client 2" },
    { id: 3, image: "https://randomuser.me/api/portraits/men/86.jpg", name: "Client 3" },
    { id: 4, image: "https://randomuser.me/api/portraits/women/68.jpg", name: "Client 4" },
    { id: 5, image: "https://randomuser.me/api/portraits/men/22.jpg", name: "Client 5" },
    { id: 6, image: "https://randomuser.me/api/portraits/women/12.jpg", name: "Client 6" }
];

const FAQItem = ({ q, a, isOpen, onToggle }) => {
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button className="faq-q" onClick={onToggle}>
                <span>{q}</span><div className="faq-icon">+</div>
            </button>
            {isOpen && <div className="faq-a">{a}</div>}
        </div>
    );
};

const CountUpAnimation = ({ start = 0, end, suffix = "", prefix = "", duration = 4, isKilo = false }) => {
    const [count, setCount] = useState(start);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
                
                // easeOutQuad
                const easeOut = progress * (2 - progress);
                const currentVal = start + (end - start) * easeOut;
                setCount(Math.floor(currentVal));
                
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [inView, start, end, duration]);

    let displayStr = count;
    if (isKilo) {
        if (count >= 1000) displayStr = `1M`;
        else displayStr = `${count}k`;
    }

    return (
        <span ref={ref}>
            {prefix}{displayStr}{suffix}
        </span>
    );
};

const HERO_WORDS = ["AI Automation", "Web Scraping", "SaaS Platforms", "Enterprise Apps"];

export default function Home() {
    const [openFaq, setOpenFaq] = useState(0);
    const [activeProcess, setActiveProcess] = useState(1);
    const [wordIdx, setWordIdx] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const interval = setInterval(() => {
            setWordIdx((prev) => (prev + 1) % HERO_WORDS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Head>
                <title>Codiora Tech | Custom AI Automation & System Engineering</title>
                <meta name="description" content="From intelligent knowledge-base chatbots to high-scale web scraping solutions, Codiora Tech automates your workflows so your business can scale without the headcount." />
            </Head>

            <div className="landing-wrapper">
                
                {/* HERO */}
                <section className="hero">
                    <div className="hero-mesh">
                        <motion.div initial={{opacity:0, scale:0.8}} animate={{opacity:0.45, scale:1}} transition={{duration:1}} className="mesh-blob blob1"></motion.div>
                        <motion.div initial={{opacity:0, scale:0.8}} animate={{opacity:0.45, scale:1}} transition={{duration:1, delay:0.2}} className="mesh-blob blob2"></motion.div>
                        <motion.div initial={{opacity:0, scale:0.8}} animate={{opacity:0.45, scale:1}} transition={{duration:1, delay:0.4}} className="mesh-blob blob3"></motion.div>
                    </div>
                    <div className="hero-grid"></div>
                    <div className="hero-inner">
                        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5, delay:0.1}} className="hero-badge">
                            <span className="badge-dot"></span>
                            <span className="badge-text">Currently accepting new clients for Q3 2026</span>
                        </motion.div>
                        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.2}}>
                            We Build Custom<br/>
                            {!mounted ? (
                                <span className="hl">AI Automation</span>
                            ) : (
                                <span className="hl inline-flex flex-col relative overflow-hidden" style={{ verticalAlign: "bottom" }}>
                                    <span className="opacity-0 pointer-events-none select-none h-0 overflow-hidden">
                                        Enterprise Apps
                                    </span>
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={wordIdx}
                                            initial={{ y: 25, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -25, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: "easeOut" }}
                                            className="absolute inset-0"
                                            style={{ whiteSpace: "nowrap" }}
                                        >
                                            {HERO_WORDS[wordIdx]}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            )}
                            <br/>& System Engineering.
                        </motion.h1>
                        <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.35}} className="hero-sub">
                            From intelligent knowledge-base chatbots to high-scale web scraping solutions, <strong>Codiora Tech automates your workflows</strong> so your business can scale without the headcount.
                        </motion.p>
                        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.5}} className="hero-actions">
                            <Link href="/contact?subject=Automation%20Audit" className="cta-main">Book a Free Automation Audit <span style={{opacity:0.8}}>→</span></Link>
                            <Link href="/portfolio" className="cta-sec">See Our Work <span style={{color:'var(--text3)'}}>↗</span></Link>
                        </motion.div>
                        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.65}} className="hero-trust">
                            <ElasticStack items={trustItems} itemSize={32} overlap={8} pushForce={8} className="trust-avatars" />
                            <div className="trust-text"><strong>Trusted by 60+ clients</strong>across 12 countries</div>
                            <div className="trust-sep"></div>
                            <div className="rating">
                                <span style={{fontSize:'13px',color:'var(--text2)',fontWeight:500}}>4.9/5 Average Rating</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* LOGO BAR */}
                <div className="logo-bar">
                    <div className="logo-bar-inner">
                        <div className="logo-bar-label">Trusted by teams at</div>
                        <div className="client-logos">
                            <div className="client-logo">NexaCorp</div>
                            <div className="client-logo">BrightMed</div>
                            <div className="client-logo">UrbanCart</div>
                            <div className="client-logo">Finvault</div>
                            <div className="client-logo">HealthOS</div>
                            <div className="client-logo">LogiTrack</div>
                            <div className="client-logo">AeroBase</div>
                        </div>
                    </div>
                </div>

                {/* STATS */}
                <div className="stats-strip">
                    <div className="stats-inner">
                        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.1}} className="stat-cell">
                            <div className="stat-num"><CountUpAnimation end={60} suffix="+" duration={4} /></div>
                            <div className="stat-label">Projects successfully delivered</div>
                        </motion.div>
                        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.2}} className="stat-cell">
                            <div className="stat-num"><CountUpAnimation end={98} suffix="%" duration={4} /></div>
                            <div className="stat-label">Client satisfaction rate</div>
                        </motion.div>
                        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.3}} className="stat-cell">
                            <div className="stat-num"><CountUpAnimation start={100} end={1000} isKilo={true} suffix="+" duration={4} /></div>
                            <div className="stat-label">Lines of production code</div>
                        </motion.div>
                        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.4}} className="stat-cell">
                            <div className="stat-num"><CountUpAnimation end={24} suffix="h" duration={4} /></div>
                            <div className="stat-label">Guaranteed first response</div>
                        </motion.div>
                    </div>
                </div>

                {/* SERVICES */}
                <section className="services-section section">
                    <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="services-head">
                        <div>
                            <div className="chip">What We Do</div>
                            <h2 className="s-title">Core Systems &<br/>Automation Services</h2>
                        </div>
                        <p className="s-sub" style={{maxWidth:'380px',fontSize:'15px'}}>We build custom solutions designed to scale your business operations and data acquisition.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 relative z-10">
                        {/* Service 1 */}
                        <Link href="/services/ai-automation" className="block outline-none">
                            <motion.div className="group/svc relative h-full bg-[#f8fafc] border border-[#122a46]/5 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-500/20">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="text-sm font-bold text-teal-600 font-serif tracking-widest uppercase">01</div>
                                    <div className="text-[#122a46]/30 group-hover/svc:text-teal-500 group-hover/svc:-rotate-45 transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#122a46] mb-3 group-hover/svc:text-teal-600 transition-colors">AI Automation & Intelligent Agents</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Custom knowledge-base chatbots and autonomous workflow agents that connect your CRM and communication channels, cutting support tickets by 80%.</p>
                            </motion.div>
                        </Link>

                        {/* Service 2 */}
                        <Link href="/services/enterprise-apps" className="block outline-none">
                            <motion.div className="group/svc relative h-full bg-[#f8fafc] border border-[#122a46]/5 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-500/20">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="text-sm font-bold text-teal-600 font-serif tracking-widest uppercase">02</div>
                                    <div className="text-[#122a46]/30 group-hover/svc:text-teal-500 group-hover/svc:-rotate-45 transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#122a46] mb-3 group-hover/svc:text-teal-600 transition-colors">Full-Stack Enterprise Applications</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Secure multi-tenant SaaS architectures, complex pricing integrations, and interactive real-time dashboards that scale without tech debt.</p>
                            </motion.div>
                        </Link>

                        {/* Service 3 */}
                        <Link href="/services/web-architecture" className="block outline-none">
                            <motion.div className="group/svc relative h-full bg-[#f8fafc] border border-[#122a46]/5 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-500/20">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="text-sm font-bold text-teal-600 font-serif tracking-widest uppercase">03</div>
                                    <div className="text-[#122a46]/30 group-hover/svc:text-teal-500 group-hover/svc:-rotate-45 transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#122a46] mb-3 group-hover/svc:text-teal-600 transition-colors">Web Architecture</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Scalable, high-performance web systems utilizing Next.js and modern serverless infrastructures designed for global traffic demands.</p>
                            </motion.div>
                        </Link>

                        {/* Service 4 */}
                        <Link href="/services/mobile-innovation" className="block outline-none">
                            <motion.div className="group/svc relative h-full bg-[#f8fafc] border border-[#122a46]/5 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-500/20">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="text-sm font-bold text-teal-600 font-serif tracking-widest uppercase">04</div>
                                    <div className="text-[#122a46]/30 group-hover/svc:text-teal-500 group-hover/svc:-rotate-45 transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#122a46] mb-3 group-hover/svc:text-teal-600 transition-colors">Mobile Innovation</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Cross-platform iOS and Android apps with native modules, biometric authentication, and offline-first architectures.</p>
                            </motion.div>
                        </Link>

                        {/* Service 5 */}
                        <Link href="/services/immersive-ui-ux" className="block outline-none">
                            <motion.div className="group/svc relative h-full bg-[#f8fafc] border border-[#122a46]/5 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-500/20">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="text-sm font-bold text-teal-600 font-serif tracking-widest uppercase">05</div>
                                    <div className="text-[#122a46]/30 group-hover/svc:text-teal-500 group-hover/svc:-rotate-45 transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#122a46] mb-3 group-hover/svc:text-teal-600 transition-colors">Immersive UI/UX</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">User journey mapping, wireframing, motion design systems, and WCAG accessibility compliance validated by interactive prototypes.</p>
                            </motion.div>
                        </Link>

                        {/* Service 6 */}
                        <Link href="/services/devops-cloud" className="block outline-none">
                            <motion.div className="group/svc relative h-full bg-[#f8fafc] border border-[#122a46]/5 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-500/20">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="text-sm font-bold text-teal-600 font-serif tracking-widest uppercase">06</div>
                                    <div className="text-[#122a46]/30 group-hover/svc:text-teal-500 group-hover/svc:-rotate-45 transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#122a46] mb-3 group-hover/svc:text-teal-600 transition-colors">DevOps & Cloud</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">CI/CD pipelines, Kubernetes container orchestration, auto-scaling setups, and 24/7 infrastructure performance monitoring.</p>
                            </motion.div>
                        </Link>

                        {/* Service 7 */}
                        <Link href="/services/web-scraping" className="block outline-none">
                            <motion.div className="group/svc relative h-full bg-[#f8fafc] border border-[#122a46]/5 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-500/20">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="text-sm font-bold text-teal-600 font-serif tracking-widest uppercase">07</div>
                                    <div className="text-[#122a46]/30 group-hover/svc:text-teal-500 group-hover/svc:-rotate-45 transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#122a46] mb-3 group-hover/svc:text-teal-600 transition-colors">Data Extraction & Web Scraping</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">High-scale residential-proxy crawlers designed to bypass CAPTCHAs and anti-bots, yielding millions of B2B leads and pricing data points daily.</p>
                            </motion.div>
                        </Link>

                        {/* Service 8 */}
                        <Link href="/services/growth-marketing" className="block outline-none">
                            <motion.div className="group/svc relative h-full bg-[#f8fafc] border border-[#122a46]/5 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/5 hover:border-teal-500/20">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="text-sm font-bold text-teal-600 font-serif tracking-widest uppercase">08</div>
                                    <div className="text-[#122a46]/30 group-hover/svc:text-teal-500 group-hover/svc:-rotate-45 transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-[#122a46] mb-3 group-hover/svc:text-teal-600 transition-colors">Growth Marketing</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Technical SEO audits, schema markup implementation, conversion rate optimization (CRO), and statistical A/B testing models.</p>
                            </motion.div>
                        </Link>
                    </div>
                </section>
                {/* WHY US */}
                <div className="why-section-wrap">
                    <section className="why-section section">
                        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>
                            <div className="chip">Why Codiora</div>
                            <h2 className="s-title">What Sets Us Apart</h2>
                        </motion.div>
                        <div className="why-grid">
                            <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.5}} className="why-card featured">
                                <div>
                                    <div className="why-metric">38%</div>
                                    <div className="why-metric-label">Faster delivery than industry average</div>
                                    <div className="why-metric-sub">Our battle-tested workflows, reusable component systems, and dedicated project managers mean you get to market faster without cutting corners on quality.</div>
                                </div>
                                <div>
                                    <div className="why-title">Speed Without Compromise</div>
                                    <div className="why-desc">We've refined our dev process across 60+ projects. Agile sprints, daily standups, and weekly demos keep everyone aligned and shipping consistently.</div>
                                    <div style={{display:'flex',gap:'10px',marginTop:'20px',flexWrap:'wrap'}}>
                                        <div style={{fontSize:'12px',padding:'4px 12px',borderRadius:'4px',background:'rgba(79,142,247,0.08)',border:'1px solid rgba(79,142,247,0.15)',color:'var(--blue)'}}>Agile methodology</div>
                                        <div style={{fontSize:'12px',padding:'4px 12px',borderRadius:'4px',background:'rgba(79,142,247,0.08)',border:'1px solid rgba(79,142,247,0.15)',color:'var(--blue)'}}>Weekly demos</div>
                                        <div style={{fontSize:'12px',padding:'4px 12px',borderRadius:'4px',background:'rgba(79,142,247,0.08)',border:'1px solid rgba(79,142,247,0.15)',color:'var(--blue)'}}>Dedicated PM</div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.1}} className="why-card">
                                <div className="why-title">Transparent Communication</div>
                                <div className="why-desc">No black boxes. You get a live project dashboard, daily progress updates, and a direct line to your dev team, not just a sales rep.</div>
                            </motion.div>
                            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.2}} className="why-card">
                                <div className="why-title">Built to Scale</div>
                                <div className="why-desc">We architect for tomorrow, not just today. Every codebase follows SOLID principles with full documentation and test coverage handoff.</div>
                            </motion.div>
                            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.3}} className="why-card">
                                <div className="why-title">Global Quality, Local Pricing</div>
                                <div className="why-desc">Enterprise-grade engineering at a fraction of Western agency costs. Our Dhaka-based team delivers world-class output, your budget goes further.</div>
                            </motion.div>
                            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.4}} className="why-card">
                                <div className="why-title">Post-Launch Support</div>
                                <div className="why-desc">We don't disappear after go-live. Every project includes 30-day post-launch monitoring and bug fixing included, no extra charge.</div>
                            </motion.div>
                        </div>
                    </section>
                </div>

                {/* PORTFOLIO */}
                <section className="portfolio-section section">
                    <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="pf-head">
                        <div>
                            <div className="chip">Selected Work</div>
                            <h2 className="s-title">Projects That<br/>Delivered Results</h2>
                        </div>
                        <Link href="/portfolio" className="cta-sec" style={{fontSize:'13.5px'}}>Browse all projects ↗</Link>
                    </motion.div>
                    <div className="pf-grid">
                        <Link href="/portfolio/medibot-ai" className="pf-card pf-main">
                            <div className="pf-thumb" style={{background:'linear-gradient(135deg,#070d1a,#0a1828)'}}>
                                <img src="/images/portfolio/medibot-ai.png" alt="MediBot AI" className="pf-image-overlay" />
                                <div className="pf-thumb-label">Healthcare · SaaS · AI</div>
                                <div className="pf-thumb-center">
                                    <div style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:'38px',fontWeight:800,color:'rgba(79,142,247,0.7)',letterSpacing:'-0.03em'}}>MediBot AI</div>
                                    <div style={{fontSize:'12px',color:'var(--text3)',marginTop:'8px',letterSpacing:'.15em'}}>AI DIAGNOSTIC ASSISTANT</div>
                                </div>
                            </div>
                            <div className="pf-body">
                                <div className="pf-cats"><span className="pf-cat">Next.js</span><span className="pf-cat">Python</span><span className="pf-cat">TensorFlow</span><span className="pf-cat">OpenAI</span></div>
                                <div className="pf-name">MediBot AI: AI Diagnostic Assistant</div>
                                <div className="text-emerald-600 font-bold text-sm mb-3 flex items-center gap-1.5 bg-emerald-500/5 border border-emerald-500/10 px-3 py-1.5 rounded-lg w-fit">
                                    <span>📈</span> <strong>Outcome: 12 hrs/week saved for clinicians | 94% diagnostic accuracy</strong>
                                </div>
                                <div className="pf-desc">Advanced AI diagnostic assistant designed to support healthcare professionals with real-time medical insights and intelligent patient data analysis.</div>
                                <div className="pf-link">View full case study ↗</div>
                            </div>
                        </Link>
                        <Link href="/portfolio/explorer-nature" className="pf-card">
                            <div className="pf-thumb" style={{background:'linear-gradient(135deg,#110d07,#1a1207)'}}>
                                <img src="/images/portfolio/explorer-nature.png" alt="Explorer Nature" className="pf-image-overlay" />
                                <div className="pf-thumb-label">Tourism · Platform</div>
                                <div className="pf-thumb-center">
                                    <div style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:'28px',fontWeight:800,color:'rgba(245,158,11,0.65)',letterSpacing:'.12em'}}>Explorer Nature</div>
                                    <div style={{fontSize:'11px',color:'var(--text3)',marginTop:'8px',letterSpacing:'.15em'}}>PREMIUM TOURISM PLATFORM</div>
                                </div>
                            </div>
                            <div className="pf-body">
                                <div className="pf-cats"><span className="pf-cat">Next.js</span><span className="pf-cat">Three.js</span><span className="pf-cat">TailwindCSS</span></div>
                                <div className="pf-name">Explorer Nature: Premium Tourism Platform</div>
                                <div className="text-emerald-600 font-bold text-sm mb-3 flex items-center gap-1.5 bg-emerald-500/5 border border-emerald-500/10 px-3 py-1.5 rounded-lg w-fit">
                                    <span>📈</span> <strong>Outcome: 42% increase in booking conversions | 3D Immersive Tours</strong>
                                </div>
                                <div className="pf-desc">Premium tourism platform connecting travelers with nature through immersive 3D experiences, custom booking flows, and curated destination guides.</div>
                                <div className="pf-link">View case study ↗</div>
                            </div>
                        </Link>
                        <Link href="/portfolio/neonmarket" className="pf-card">
                            <div className="pf-thumb" style={{background:'linear-gradient(135deg,#0a0a18,#0e0e22)'}}>
                                <img src="/images/portfolio/neonmarket.png" alt="NeonMarket" className="pf-image-overlay" />
                                <div className="pf-thumb-label">Web3 · Marketplace</div>
                                <div className="pf-thumb-center">
                                    <div style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontSize:'24px',fontWeight:800,color:'rgba(167,139,250,0.65)',letterSpacing:'.08em'}}>NeonMarket</div>
                                    <div style={{fontSize:'11px',color:'var(--text3)',marginTop:'8px',letterSpacing:'.15em'}}>NEXT-GEN CRYPTO MARKETPLACE</div>
                                </div>
                            </div>
                            <div className="pf-body">
                                <div className="pf-cats"><span className="pf-cat">Next.js</span><span className="pf-cat">Solidity</span><span className="pf-cat">Web3.js</span><span className="pf-cat">TailwindCSS</span></div>
                                <div className="pf-name">NeonMarket: Next-gen Crypto Marketplace</div>
                                <div className="text-emerald-600 font-bold text-sm mb-3 flex items-center gap-1.5 bg-emerald-500/5 border border-emerald-500/10 px-3 py-1.5 rounded-lg w-fit">
                                    <span>📈</span> <strong>Outcome: 15,000+ active concurrent traders | 99.99% system uptime</strong>
                                </div>
                                <div className="pf-desc">Next-gen crypto marketplace offering real-time token tracking, secure wallet integration, and a seamless decentralized trading experience.</div>
                                <div className="pf-link">View case study ↗</div>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <div className="testimonials-wrap">
                    <section className="testimonials">
                        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>
                            <div className="chip">Client Stories</div>
                            <h2 className="s-title">What Our Clients Say</h2>
                        </motion.div>
                        <div className="testi-grid">
                            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.1}} className="testi-card">
                                <div className="testi-quote">"</div>
                                <div className="testi-text">Codiora delivered our MVP in 6 weeks when other agencies quoted 4 months. The code quality was production-ready from day one.</div>
                                <div className="testi-divider"></div>
                                <div className="testi-author">
                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Rafiq A." className="testi-avatar" />
                                    <div><div className="testi-name">Rafiq A.</div><div className="testi-role">CTO, HealthOS</div></div>
                                </div>
                            </motion.div>
                            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.2}} className="testi-card">
                                <div className="testi-quote">"</div>
                                <div className="testi-text">We tried 3 agencies before Codiora. The difference? They actually understood our business, not just the tech requirements.</div>
                                <div className="testi-divider"></div>
                                <div className="testi-author">
                                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sophia L." className="testi-avatar" />
                                    <div><div className="testi-name">Sophia L.</div><div className="testi-role">Founder, UrbanCart</div></div>
                                </div>
                            </motion.div>
                            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.3}} className="testi-card">
                                <div className="testi-quote">"</div>
                                <div className="testi-text">Communication was flawless. Daily updates, weekly demos, zero surprises at launch. Will definitely work with them again.</div>
                                <div className="testi-divider"></div>
                                <div className="testi-author">
                                    <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="Mohammed K." className="testi-avatar" />
                                    <div><div className="testi-name">Mohammed K.</div><div className="testi-role">CEO, Finvault</div></div>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </div>

                {/* PROCESS */}
                <section className="process-section">
                    <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="process-head">
                        <div>
                            <div className="chip">How We Work</div>
                            <h2 className="s-title">Simple 4-Step Process,<br/>Zero Surprises</h2>
                        </div>
                        <p className="s-sub" style={{maxWidth:'360px',fontSize:'15px'}}>We've refined this process across 60+ projects. It works.</p>
                    </motion.div>
                    <div className="process-timeline">
                        <div className="process-line"></div>
                        <div className="process-steps">
                            <div className="process-step" onMouseEnter={() => setActiveProcess(1)}>
                                <div className={`step-bubble ${activeProcess === 1 ? 'active' : ''}`}>01</div>
                                <div className="step-duration">Day 1-2</div>
                                <div className="step-title">Deep-Dive & Discovery</div>
                                <div className="step-desc">We analyze your current manual workflows and data architecture to identify operational leakage points and bottleneck stages.</div>
                            </div>
                            <div className="process-step" onMouseEnter={() => setActiveProcess(2)}>
                                <div className={`step-bubble ${activeProcess === 2 ? 'active' : ''}`}>02</div>
                                <div className="step-duration">Day 3-5</div>
                                <div className="step-title">Architectural Blueprint</div>
                                <div className="step-desc">We map out a custom database schema, proxy rotation layout, or LLM system prompt blueprint before writing any production code.</div>
                            </div>
                            <div className="process-step" onMouseEnter={() => setActiveProcess(3)}>
                                <div className={`step-bubble ${activeProcess === 3 ? 'active' : ''}`}>03</div>
                                <div className="step-duration">Sprint-Based</div>
                                <div className="step-title">Agile Dev & Testing</div>
                                <div className="step-desc">Fast and secure iterations using Next.js/Python, integrated with regression testing and real-world high-volume load testing.</div>
                            </div>
                            <div className="process-step" onMouseEnter={() => setActiveProcess(4)}>
                                <div className={`step-bubble ${activeProcess === 4 ? 'active' : ''}`}>04</div>
                                <div className="step-duration">Post-Launch</div>
                                <div className="step-title">Deployment & SLA</div>
                                <div className="step-desc">Complete cloud infrastructure integration with automated performance monitoring, error logging, and 24/7 crawler/bot maintenance.</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ENGAGEMENT MODELS */}
                <div className="pricing-section-wrap">
                    <section className="pricing-section">
                        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} style={{textAlign:'center',marginBottom:'52px'}}>
                            <div className="chip" style={{justifyContent:'center',marginBottom:'14px'}}>Engagement Models</div>
                            <h2 className="s-title" style={{margin:'0 auto 12px'}}>Flexible Ways to Work Together</h2>
                            <p className="s-sub" style={{margin:'0 auto',textAlign:'center',maxWidth:'480px'}}>No hidden fees. No surprise invoices. Pick the model that fits your project best.</p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16 px-4 pb-12">
                            {/* Card 1 */}
                            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.1}} className="bg-white rounded-[2.5rem] p-10 border border-[#122a46]/5 hover:shadow-2xl hover:shadow-teal-500/5 transition-all duration-300 flex flex-col h-full relative group">
                                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-8 border border-teal-100">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <h3 className="text-4xl font-black text-[#0f172a] tracking-tight">Project</h3>
                                    <span className="text-[10px] font-bold text-teal-600 tracking-widest uppercase">Based</span>
                                </div>
                                <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-6">Fixed Price & MVP</div>
                                <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow pr-4">Ideal for clear scopes and defined timelines. Rapid deployment for high-growth MVPs.</p>
                                
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></div><span className="text-[11px] font-bold tracking-widest text-[#0f172a] uppercase">UI/UX Systems</span></li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></div><span className="text-[11px] font-bold tracking-widest text-[#0f172a] uppercase">Tech Architecture</span></li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></div><span className="text-[11px] font-bold tracking-widest text-[#0f172a] uppercase">Frontend & Backend</span></li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></div><span className="text-[11px] font-bold tracking-widest text-[#0f172a] uppercase">Core API Hub</span></li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></div><span className="text-[11px] font-bold tracking-widest text-[#0f172a] uppercase">QA & Weekly Demos</span></li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></div><span className="text-[11px] font-bold tracking-widest text-[#0f172a] uppercase">IP & Source Code</span></li>
                                </ul>
                                
                                <Link href="/contact" className="mt-auto block">
                                    <button className="w-full bg-white border border-slate-200 hover:bg-teal-500 hover:border-teal-500 text-[#0f172a] hover:text-white font-bold text-[11px] tracking-widest uppercase py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-teal-500/20">
                                        Engage Tier <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
                                    </button>
                                </Link>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.5, delay:0.2}} className="rounded-[2.5rem] p-10 border border-teal-400/20 shadow-2xl shadow-teal-500/20 transition-all duration-300 flex flex-col relative group -my-4" style={{background: 'linear-gradient(145deg, #2dd4bf 0%, #14b8a6 40%, #0d9488 100%)'}}>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white text-teal-600 text-[9px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-b-xl shadow-sm">Most Popular</div>
                                <div className="w-12 h-12 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-8 border border-white/20 mt-2">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </div>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <h3 className="text-4xl font-black text-white tracking-tight">Monthly</h3>
                                    <span className="text-[10px] font-bold text-teal-200 tracking-widest uppercase">Plan</span>
                                </div>
                                <div className="text-[10px] font-bold text-teal-200/80 tracking-widest uppercase mb-6">Dedicated Team</div>
                                <p className="text-teal-100/90 text-sm leading-relaxed mb-10 flex-grow pr-4">Seamless extension of your in-house team. Advanced ecosystem with agile scaling.</p>
                                
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div><span className="text-[11px] font-bold tracking-widest text-white uppercase">Senior Engineers</span></li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div><span className="text-[11px] font-bold tracking-widest text-white uppercase">Agentic AI & ML</span></li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div><span className="text-[11px] font-bold tracking-widest text-white uppercase">Multi-Platform</span></li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div><span className="text-[11px] font-bold tracking-widest text-white uppercase">Microservices</span></li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div><span className="text-[11px] font-bold tracking-widest text-white uppercase">Agile Sprints</span></li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div><span className="text-[11px] font-bold tracking-widest text-white uppercase">CI/CD & Data Ops</span></li>
                                </ul>
                                
                                <Link href="/contact" className="mt-auto block">
                                    <button className="w-full bg-white hover:bg-teal-50 text-teal-600 font-bold text-[11px] tracking-widest uppercase py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-black/10">
                                        Engage Tier <span className="text-lg leading-none transition-transform hover:translate-x-1">→</span>
                                    </button>
                                </Link>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:0.3}} className="bg-white rounded-[2.5rem] p-10 border border-[#122a46]/5 hover:shadow-2xl hover:shadow-teal-500/5 transition-all duration-300 flex flex-col h-full relative group">
                                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-8 border border-teal-100">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                </div>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <h3 className="text-4xl font-black text-[#0f172a] tracking-tight">Retainer</h3>
                                    <span className="text-[10px] font-bold text-teal-600 tracking-widest uppercase">Model</span>
                                </div>
                                <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-6">Strategic Partner</div>
                                <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow pr-4">Mission-critical architectural sovereignty and full lifecycle product ownership.</p>
                                
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></div><span className="text-[11px] font-bold tracking-widest text-[#0f172a] uppercase">Autonomous Squad</span></li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></div><span className="text-[11px] font-bold tracking-widest text-[#0f172a] uppercase">Custom LLMs</span></li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></div><span className="text-[11px] font-bold tracking-widest text-[#0f172a] uppercase">H-F Infrastructure</span></li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></div><span className="text-[11px] font-bold tracking-widest text-[#0f172a] uppercase">Enterprise Sec</span></li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></div><span className="text-[11px] font-bold tracking-widest text-[#0f172a] uppercase">Global Compliance</span></li>
                                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></div><span className="text-[11px] font-bold tracking-widest text-[#0f172a] uppercase">24/7 SLA Support</span></li>
                                </ul>
                                
                                <Link href="/contact" className="mt-auto block">
                                    <button className="w-full bg-white border border-slate-200 hover:bg-teal-500 hover:border-teal-500 text-[#0f172a] hover:text-white font-bold text-[11px] tracking-widest uppercase py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-teal-500/20">
                                        Engage Tier <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    </section>
                </div>

                {/* FAQ */}
                <section className="faq-section">
                    <div className="faq-inner">
                        <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.6}}>
                            <div className="chip">FAQ</div>
                            <h2 className="s-title" style={{fontSize:'clamp(28px,3.5vw,38px)'}}>Questions?<br/>We've Got<br/>Answers.</h2>
                            <p className="s-sub" style={{fontSize:'14px',marginTop:'14px'}}>Can't find what you need? Book a free 30-min call. No pressure, no pitch.</p>
                            <div className="faq-contact" style={{marginTop:'28px'}}>
                                <div className="faq-contact-title">Still have questions?</div>
                                <div className="faq-contact-sub">Book a free 30-minute discovery call. We'll answer everything and give you an honest assessment, even if we're not the right fit.</div>
                                <Link href="/contact"><button className="cta-main" style={{fontSize:'13.5px',padding:'11px 20px'}}>Book a Free Call →</button></Link>
                            </div>
                        </motion.div>
                        <div className="faq-list">
                            <FAQItem isOpen={openFaq === 0} onToggle={() => setOpenFaq(openFaq === 0 ? null : 0)} q="How long does a typical project take?" a="Most web projects take 4-12 weeks depending on scope. A simple landing page or MVP can be ready in 2-3 weeks. Enterprise platforms take 2-6 months. During discovery, we give you a precise timeline. We don't pad estimates." />
                            <FAQItem isOpen={openFaq === 1} onToggle={() => setOpenFaq(openFaq === 1 ? null : 1)} q="What happens if we're not happy with the work?" a="We have a structured revision process built into every project. If something isn't right, we fix it, included. We also offer a satisfaction guarantee: if you're not happy after the first sprint, you can cancel with a full refund of any unused prepayment." />
                            <FAQItem isOpen={openFaq === 2} onToggle={() => setOpenFaq(openFaq === 2 ? null : 2)} q="Do you sign NDAs?" a="Yes, absolutely. We sign NDAs before any detailed project discussion for all clients. Confidentiality is a baseline expectation, not an add-on. We also offer IP assignment agreements where all code belongs entirely to you." />
                            <FAQItem isOpen={openFaq === 3} onToggle={() => setOpenFaq(openFaq === 3 ? null : 3)} q="We have an existing codebase, can you work with it?" a="Yes, and this is one of our strengths. We do thorough code audits before joining any existing project. We'll give you an honest technical assessment and a clear plan for extending or refactoring. No sugarcoating." />
                            <FAQItem isOpen={openFaq === 4} onToggle={() => setOpenFaq(openFaq === 4 ? null : 4)} q="What's your timezone and communication style?" a="We're based in Dhaka (GMT+6) but work overlap hours with EU and US clients. You get daily Slack/email updates, weekly video demos, and a live Notion/Linear board showing every task in real-time. No chasing required." />
                            <FAQItem isOpen={openFaq === 5} onToggle={() => setOpenFaq(openFaq === 5 ? null : 5)} q="Who owns the code after the project?" a="You do. 100%. On final payment, all IP, code, assets, and documentation transfer to you. We provide full Git repository access and thorough handover documentation so your team can continue independently." />
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <div className="final-cta-wrap">
                    <section className="relative overflow-hidden py-32 px-6 bg-white">
                        {/* Decorative blobs */}
                        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] pointer-events-none" style={{background:'#2dd4bf'}}></div>
                        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-8 blur-[100px] pointer-events-none" style={{background:'#14b8a6'}}></div>

                        <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.8}} className="relative z-10 max-w-3xl mx-auto text-center">
                            {/* Status badge */}
                            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-600 text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full mb-10">
                                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                                Currently Taking New Projects
                            </div>

                            {/* Heading */}
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0f172a] leading-[1.05] tracking-tight mb-8">
                                Ready to Build<br/>
                                Something{' '}
                                <span className="relative inline-block">
                                    <span style={{background:'linear-gradient(90deg, #0d9488, #14b8a6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>Great?</span>
                                </span>
                            </h2>

                            {/* Subtext */}
                            <p className="text-slate-500 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
                                Book a free 30-minute call. We'll discuss your project, give honest feedback, and outline exactly how we'd approach it.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                                <Link href="/contact">
                                    <button className="group flex items-center gap-3 bg-teal-400 hover:bg-teal-300 text-[#0f172a] font-black text-sm tracking-widest uppercase px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl shadow-teal-500/30 hover:shadow-teal-400/40 hover:-translate-y-0.5">
                                        Book a Free Consultation
                                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                    </button>
                                </Link>
                                <Link href="/portfolio">
                                    <button className="flex items-center gap-2 bg-white border border-slate-200 hover:border-teal-400 hover:bg-teal-50 text-[#0f172a] font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-2xl transition-all duration-300">
                                        View Portfolio ↗
                                    </button>
                                </Link>
                            </div>

                            {/* Trust pills */}
                            <div className="flex flex-wrap justify-center gap-6 text-slate-500 text-xs font-semibold tracking-wide">
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 rounded-full bg-teal-100 border border-teal-200 text-teal-600 flex items-center justify-center text-[9px]">✓</span>
                                    No commitment required
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 rounded-full bg-teal-100 border border-teal-200 text-teal-600 flex items-center justify-center text-[9px]">✓</span>
                                    Response within 24 hours
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 rounded-full bg-teal-100 border border-teal-200 text-teal-600 flex items-center justify-center text-[9px]">✓</span>
                                    Free project assessment
                                </span>
                            </div>
                        </motion.div>
                    </section>
                </div>

            </div>
        </>
    );
}
