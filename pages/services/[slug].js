import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TechMarquee from '@/components/TechMarquee';

const servicesData = {
    'web-development': {
        title: "Web Architecture",
        subtitle: "High-performance web applications built for scale.",
        icon: "💎",
        features: ["Next.js & React", "Server Side Rendering", "Progressive Web Apps", "API Integration"],
        techStack: ["React", "Next.js", "Node.js", "Tailwind", "TypeScript", "GraphQL", "MongoDB", "PostgreSQL"],
        content: "Blazing fast, SEO-optimized, and scalable. We architect web solutions using the bleeding edge of the Javascript ecosystem."
    },
    'mobile-app-development': {
        title: "Mobile Innovation",
        subtitle: "Native-feel cross-platform apps that dominate markets.",
        icon: "🚀",
        features: ["React Native / Flutter", "iOS & Android", "Offline Capabilities", "Smooth Animations"],
        techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Android Studio", "Xcode", "Firebase"],
        content: "Don't just build an app; create an experience. We deliver fluid, responsive, and powerful mobile applications that users love."
    },
    'ui-ux': {
        title: "Immersive UI/UX",
        subtitle: "Award-winning designs that captivate and convert.",
        icon: "✨",
        features: ["User Research", "Wireframing & Prototyping", "Interaction Design", "Design Systems"],
        techStack: ["Figma", "Adobe XD", "Sketch", "Framer", "Blender", "Three.js"],
        content: "Beauty meets function. Our design philosophy centers on creating intuitive, delightful, and memorable user journeys."
    },
    'devops': {
        title: "DevOps & Cloud",
        subtitle: "Borderless infrastructure for the modern enterprise.",
        icon: "☁️",
        features: ["AWS/Azure/GCP", "Serverless Architecture", "CI/CD Pipelines", "Cloud Security"],
        techStack: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Google Cloud", "Azure"],
        content: "Scale without limits. Our cloud-native solutions ensure your infrastructure is invisible, resilient, and infinitely scalable."
    },
    'ai-automation': {
        title: "AI & Automation",
        subtitle: "Cognitive computing that redefines possibility.",
        icon: "🧠",
        features: ["Predictive Analytics", "NLP & Chatbots", "Process Automation", "Computer Vision"],
        techStack: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "Pandas"],
        content: "We build sentient systems. From autonomous agents to predictive engines, we engineer intelligence that gives you an unfair advantage."
    },
    'digital-marketing': {
        title: "Growth Marketing",
        subtitle: "Data-driven strategies to explode your user base.",
        icon: "📈",
        features: ["SEO & SEM", "Conversion Optimization", "Social Media Strategy", "Data Analytics"],
        techStack: ["Google Analytics", "SEMrush", "Ahrefs", "HubSpot", "Hotjar"],
        content: "Building a great product is half the battle. We help you find your audience and turn them into loyal advocates through rigorous experimentation."
    }
};

export default function ServiceDetail() {
    const router = useRouter();
    const { slug } = router.query;
    const service = servicesData[slug];

    if (!service) return null; // Or a loading spinner

    return (
        <>
            <Head>
                <title>Codiora Tech | {service.title}</title>
            </Head>
            <section className="min-h-screen bg-black text-white pt-80 pb-20 relative overflow-hidden">
                {/* Background FX */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[150px] pointer-events-none animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none animate-pulse delay-700" />

                <div className="container mx-auto px-6 relative z-10">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-3 text-xs md:text-sm font-mono text-cyan-500 mb-8 uppercase tracking-widest">
                        <Link href="/" className="hover:text-white transition-colors">HOME</Link>
                        <span className="text-gray-600">/</span>
                        <Link href="/services" className="hover:text-white transition-colors">SERVICES</Link>
                        <span className="text-gray-600">/</span>
                        <span className="text-gray-300">{service.title}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-4xl mb-8 backdrop-blur-md border border-white/20">
                                {service.icon}
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                                {service.title}
                            </h1>
                            <p className="text-2xl text-cyan-400 mb-8 font-light">{service.subtitle}</p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-10 border-l-4 border-cyan-500 pl-6">
                                {service.content}
                            </p>

                            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                                Request Consultation
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm"
                        >
                            <h3 className="text-xl font-bold mb-8 tracking-widest uppercase text-gray-400">Core Capabilities</h3>
                            <ul className="space-y-6">
                                {service.features.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 + 0.5 }}
                                        className="flex items-center gap-4 text-xl"
                                    >
                                        <span className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Dedicated Tech Stack for this Service */}
                <div className="border-t border-white/10 pt-16">
                    <div className="container mx-auto px-6 mb-10 text-center">
                        <h3 className="text-2xl font-bold text-gray-400 uppercase tracking-widest mb-2">Powering Technology</h3>
                        <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                    </div>
                    <TechMarquee technologies={service.techStack} />
                </div>
            </section>
        </>
    );
}
