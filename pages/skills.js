import Head from 'next/head';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Engineering",
            icon: "🎨",
            skills: ["React.js", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion", "GSAP"]
        },
        {
            title: "Backend Architecture",
            icon: "⚙️",
            skills: ["Node.js", "Python", "Rust", "Go (Golang)", "GraphQL", "NestJS", "FastAPI", "Microservices"]
        },
        {
            title: "Mobile Development",
            icon: "📱",
            skills: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "Expo", "PWA"]
        },
        {
            title: "AI & Machine Learning",
            icon: "🧠",
            skills: ["PyTorch", "TensorFlow", "OpenAI API", "HuggingFace", "LangChain", "Computer Vision", "NLP"]
        },
        {
            title: "Cloud & DevOps",
            icon: "☁️",
            skills: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD Pipelines"]
        },
        {
            title: "Database & Storage",
            icon: "💾",
            skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase", "Elasticsearch", "ClickHouse"]
        },
        {
            title: "Blockchain & Web3",
            icon: "⛓️",
            skills: ["Solidity", "Smart Contracts", "Web3.js", "Ethers.js", "Hardhat", "IPFS", "NFT Standards"]
        },
        {
            title: "Enterprise Solutions",
            icon: "🏢",
            skills: ["Salesforce", "SAP", "ERP Integration", "CRM Customization", "Business Intelligence", "Power BI"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="bg-[#f8fafc] text-[#122a46] min-h-screen selection:bg-teal-500/10 selection:text-[#122a46] overflow-hidden">
            <Head>
                <title>Expertise & Tech Stack | Codiora Tech</title>
                <meta name="description" content="Our arsenal of cutting-edge technologies." />
            </Head>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full border border-[#122a46]/10 bg-[#122a46]/5 text-teal-600 text-sm font-bold tracking-widest uppercase mb-6"
                    >
                        Our Arsenal
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black mb-8 leading-tight"
                    >
                        Developers in Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Tech Stack.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-slate-500 max-w-2xl mx-auto"
                    >
                        From rapid prototyping to enterprise-scale systems, we leverage the most powerful tools available to build your vision.
                    </motion.p>
                </div>
            </section>

            {/* Skills Grid */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {skillCategories.map((category, index) => (
                            <motion.div
                                variants={itemVariants}
                                key={index}
                                className="group relative p-8 bg-white rounded-3xl border border-[#122a46]/5 hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-gradient-to-b from-[#122a46]/[0.02] to-transparent overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-[#122a46]/5 border border-[#122a46]/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:border-teal-500/50 group-hover:text-teal-600 transition-all duration-300">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-6 text-[#122a46] group-hover:text-teal-600 transition-colors">
                                        {category.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {category.skills.map((skill, i) => (
                                            <li key={i} className="flex items-center text-sm text-slate-500 group-hover:text-slate-600 transition-colors">
                                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3 group-hover:bg-teal-500 transition-colors" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 relative overflow-hidden bg-white/[0.02] border-t border-[#122a46]/5">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Let's redefine what's <span className="text-[#122a46]">possible</span> together.
                            </h2>
                            <p className="text-lg text-slate-500 mb-8">
                                The future is not coming. It's here, bold and audacious. Walk with us through the digital transformation journey.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-[#122a46] transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] overflow-hidden">
                                    <span className="absolute inset-0 bg-[#122a46]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm"></span>
                                    <span className="relative flex items-center gap-3">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                        Book a Call
                                    </span>
                                </a>
                                <a href="mailto:hello@codioratech.com" className="group inline-flex items-center justify-center px-8 py-4 font-bold text-[#122a46] transition-all duration-300 border border-[#122a46]/10 rounded-full hover:bg-[#122a46]/5 hover:border-cyan-400/50 hover:text-teal-600">
                                    <span className="flex items-center gap-3">
                                        <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        Send Email
                                    </span>
                                </a>
                            </div>
                        </div>
                        {/* Contact Form */}
                        <div className="bg-transparent rounded-3xl p-1 relative">
                            <form className="space-y-4">
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name*"
                                        className="w-full bg-white border border-[#122a46]/10 rounded-xl px-6 py-4 text-[#122a46] placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number*"
                                        className="w-full bg-white border border-[#122a46]/10 rounded-xl px-6 py-4 text-[#122a46] placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address*"
                                        className="w-full bg-white border border-[#122a46]/10 rounded-xl px-6 py-4 text-[#122a46] placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                                    />
                                    <textarea
                                        rows="4"
                                        placeholder="Your Message*"
                                        className="w-full bg-white border border-[#122a46]/10 rounded-xl px-6 py-4 text-[#122a46] placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <p className="text-xs text-slate-500 mt-4">
                                    By submitting this form I consent to processing my personal data as described in the <span className="text-blue-500 cursor-pointer hover:underline">Privacy Policy</span>.
                                </p>

                                <button type="submit" className="w-full group relative overflow-hidden rounded-xl bg-white border border-[#122a46]/10 px-8 py-4 font-bold text-[#122a46] transition-all hover:border-purple-500/50 mt-4 text-left flex justify-between items-center shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                                    <span className="text-xl">Submit</span>
                                    <svg className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17"></path></svg>

                                    {/* Bottom gradient line for flair */}
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-purple-600 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
