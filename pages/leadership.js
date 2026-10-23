import Link from 'next/link';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const PHILOSOPHY = [
    {
        title: "Code as the Source of Truth",
        desc: "Architecture diagrams and specifications are hypotheses; only clean, test-covered code running in production is truth. We lead by shipping real features, not by holding theoretical meetings."
    },
    {
        title: "Context Over Control",
        desc: "We hire brilliant engineers and give them full context of the business problem. When engineers understand the commercial objective, they build better architectures than any manager could dictate."
    },
    {
        title: "Zero Black Boxes",
        desc: "Clients are engineering partners, not outsiders. Every client has direct access to our git commits, linear tickets, and staging URLs. Radical visibility breeds mutual trust."
    },
    {
        title: "Velocity Through Simplicity",
        desc: "Speed is a competitive advantage. We prefer lean, elegant solutions with minimal third-party dependencies over complex, fragile multi-layer abstractions that slow down iteration."
    }
];

const LEADERS = [
    {
        name: "Asif Mahamud Shaon",
        role: "Founder & CEO",
        bio: "The visionary architect behind the Codiora ecosystem. Asif combines deep technical prowess in distributed data systems, high-scale scraping, and AI automation with a relentless drive for engineering perfection. He leads by code, ensuring every system is scalable, secure, and commercially impactful.",
        superpower: "Distributed Systems & Automation",
        image: "/images/founder/founder.webp",
        socials: { linkedin: "https://www.linkedin.com/company/codioratech", twitter: "https://x.com/codioratech" }
    },
    {
        name: "Sarah Jenkins",
        role: "Head of Engineering",
        bio: "Full-stack engineering leader specializing in resilient cloud microservices, database normalization, and automated CI/CD pipelines. Sarah treats code as craft, empowering engineering squads to solve complex technical bottlenecks with simple, elegant architectures.",
        superpower: "Cloud Architecture & Scalability",
        image: "/images/avatars/avatar-2.webp",
        socials: { linkedin: "https://www.linkedin.com/company/codioratech" }
    },
    {
        name: "David Chen",
        role: "Lead Product Designer",
        bio: "David bridges high-level technical logic with intuitive human emotion. He believes that if an enterprise interface requires a manual to navigate, the design is broken. He designs accessible, high-converting digital interfaces that users love.",
        superpower: "Design Systems & User Empathy",
        image: "/images/avatars/avatar-5.webp",
        socials: { linkedin: "https://www.linkedin.com/company/codioratech", twitter: "https://x.com/codioratech" }
    }
];

const SPRINT_CADENCE = [
    {
        days: "Mon – Wed",
        title: "Deep Work Sprints",
        desc: "Focused feature implementation, backend pipeline building, and automated unit test coverage with no unnecessary meetings."
    },
    {
        days: "Thursday",
        title: "Staging & Security QA",
        desc: "Merging feature branches into private staging environments, running regression tests, and executing automated vulnerability scans."
    },
    {
        days: "Friday",
        title: "Live Demos & Feedback",
        desc: "Delivering recorded Loom video walkthroughs and staging credentials for client testing and milestone reviews."
    },
    {
        days: "24/7",
        title: "Telemetry & Uptime Alerts",
        desc: "Continuous automated monitoring of bot pools, API error rates, and cloud resource utilization via Sentry and Datadog."
    }
];

export default function Leadership() {
    return (
        <>
            <SEO
                title="Leadership & Engineering Philosophy | Codiora Tech"
                description="Meet the engineering leadership behind Codiora Tech in Dhaka and explore our core principles in scalable software design, autonomy, and speed."
                canonicalPath="/leadership"
            />

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-teal-500/20">
                {/* Ambient Blurs */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] animate-pulse-slow delay-1000" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay pointer-events-none" />
                </div>

                <div className="container mx-auto px-6 pt-36 sm:pt-40 md:pt-44 pb-32 relative z-10">
                    <div className="mb-8">
                        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Leadership', href: '/leadership' }]} />
                    </div>

                    {/* HERO */}
                    <section className="text-center max-w-4xl mx-auto mb-20 sm:mb-28">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-700 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
                        >
                            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                            The Operating Principles
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.05]"
                        >
                            ENGINEERING <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-[#122a46]">
                                LEADERSHIP.
                            </span>
                        </motion.h1>

                        <div className="space-y-4 max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed font-light">
                            <p>
                                At Codiora Tech, leadership is not a title; it is an active discipline. It’s about setting an engineering standard so high it demands relentless focus, and providing the tools to achieve it.
                            </p>
                            <p className="text-base text-slate-500">
                                We lead by context, not control. We manage work, not people. We build systems that allow creativity and speed to flourish without friction.
                            </p>
                        </div>
                    </section>

                    {/* THE ARCHITECTS (LEADERS) */}
                    <section className="mb-32">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">The Core Architects</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#122a46] mt-2">
                                Meet the Technical Leadership
                            </h2>
                            <p className="text-slate-500 max-w-xl mx-auto mt-3 text-base">
                                Hands-on engineers and architects directly involved in project reviews and architectural decisions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {LEADERS.map((leader, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative flex flex-col h-full bg-white border border-[#122a46]/8 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-teal-500/30 transition-all duration-500"
                                >
                                    <div className="h-[380px] overflow-hidden relative bg-slate-900">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-80" />
                                        <div
                                            className="w-full h-full bg-cover bg-top filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                            style={{ backgroundImage: `url(${leader.image})` }}
                                        />
                                        <div className="absolute bottom-6 left-6 right-6 z-20">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-teal-500/30 mb-2 inline-block">
                                                {leader.superpower}
                                            </span>
                                            <h3 className="text-2xl font-bold text-white mb-0.5">{leader.name}</h3>
                                            <div className="text-teal-300 text-xs font-bold uppercase tracking-wider">{leader.role}</div>
                                        </div>
                                    </div>

                                    <div className="p-8 flex-1 flex flex-col justify-between bg-white relative z-20">
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                                            {leader.bio}
                                        </p>

                                        <div className="flex items-center gap-3 border-t border-[#122a46]/5 pt-5">
                                            {leader.socials.linkedin && (
                                                <a
                                                    href={leader.socials.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-9 h-9 rounded-full bg-[#122a46]/5 border border-[#122a46]/10 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all"
                                                    aria-label={`${leader.name} LinkedIn`}
                                                >
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                                </a>
                                            )}
                                            {leader.socials.twitter && (
                                                <a
                                                    href={leader.socials.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-9 h-9 rounded-full bg-[#122a46]/5 border border-[#122a46]/10 flex items-center justify-center text-slate-600 hover:text-white hover:bg-black hover:border-black transition-all"
                                                    aria-label={`${leader.name} X Profile`}
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* OPERATIONAL SPRINT RHYTHM */}
                    <section className="mb-32 bg-white rounded-[2.5rem] border border-[#122a46]/10 p-8 sm:p-12 md:p-16 shadow-xl relative overflow-hidden">
                        <div className="max-w-3xl mb-12">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">The Cadence of Delivery</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#122a46] mt-2">
                                The Weekly Sprint Rhythm
                            </h2>
                            <p className="text-slate-600 text-base mt-3 leading-relaxed">
                                We operate in high-intensity deep development sprints designed to eliminate bureaucratic delay and keep shipping momentum high.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {SPRINT_CADENCE.map((cadence, idx) => (
                                <div key={idx} className="p-6 rounded-2xl bg-[#f8fafc] border border-[#122a46]/5 hover:border-teal-500/20 transition-all flex flex-col justify-between">
                                    <div>
                                        <div className="text-xs font-black uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full inline-block mb-4">
                                            {cadence.days}
                                        </div>
                                        <h4 className="text-lg font-bold text-[#122a46] mb-2">{cadence.title}</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed font-light">
                                            {cadence.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CORE PHILOSOPHY GRID */}
                    <section className="mb-32">
                        <div className="text-center mb-16">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600">The Code of Conduct</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#122a46] mt-2">
                                How We Make Technical Decisions
                            </h2>
                            <p className="text-slate-500 max-w-xl mx-auto mt-3 text-base">
                                The guiding principles that govern our architectural proposals and daily code reviews.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {PHILOSOPHY.map((item, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-white border border-[#122a46]/8 shadow-sm hover:shadow-lg transition-all">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                                        <h3 className="text-xl font-bold text-[#122a46]">{item.title}</h3>
                                    </div>
                                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="relative rounded-[3rem] overflow-hidden bg-[#122a46] text-white p-10 sm:p-16 text-center shadow-2xl max-w-5xl mx-auto">
                        <div className="absolute top-0 right-1/4 w-80 h-80 bg-teal-500/20 rounded-full blur-[90px] pointer-events-none" />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-400 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 inline-block mb-6">
                                Direct Leadership Access
                            </span>
                            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
                                Talk Directly With Our Architects.
                            </h2>
                            <p className="text-slate-300 text-base mb-8 font-light">
                                No sales pitches or account managers. Book a 30-minute discovery call directly with our technical leadership.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <button className="px-8 py-4 rounded-xl bg-teal-400 hover:bg-teal-300 text-[#0f172a] font-black text-sm tracking-widest uppercase transition-all shadow-lg shadow-teal-500/20">
                                        Book Technical Discovery →
                                    </button>
                                </Link>
                                <Link href="/team">
                                    <button className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-widest uppercase border border-white/20 transition-all">
                                        Meet the Entire Team ↗
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
