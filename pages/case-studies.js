import Head from 'next/head';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CaseStudyCard from '@/components/CaseStudyCard';

const studies = [
    {
        id: 1,
        title: "FinTech Revolution",
        client: "NeoBank Corp",
        category: "Web",
        icon: "💳",
        color: "from-cyan-500 to-blue-600",
        problem: "Legacy banking system was slow and lacked mobile responsiveness.",
        solution: "Built a PWA with Next.js & Node.js, implementing real-time transactions.",
        result: "🚀 200% Increase in Mobile Users"
    },
    {
        id: 2,
        title: "AI Diagnostic Tool",
        client: "HealthPlus",
        category: "AI",
        icon: "🧬",
        color: "from-emerald-400 to-teal-600",
        problem: "Manual diagnosis was time-consuming and prone to human error.",
        solution: "Developed an ML model with Python/TensorFlow integrated into a React dashboard.",
        result: "⚡ 40% Reduction in Diagnosis Time"
    },
    {
        id: 3,
        title: "E-Commerce Scale",
        client: "FashionNova",
        category: "SaaS",
        icon: "🛍️",
        color: "from-purple-500 to-pink-600",
        problem: "Server crashes during Black Friday sales due to traffic spikes.",
        solution: "Migrated to AWS serverless architecture with auto-scaling capabilities.",
        result: "📈 99.99% Uptime During Peak Sales"
    },
    {
        id: 4,
        title: "Smart Logistics",
        client: "GlobalShip",
        category: "SaaS",
        icon: "🚚",
        color: "from-orange-400 to-red-500",
        problem: "Inefficient route planning leading to high fuel costs.",
        solution: "Created a real-time fleet management system using Google Maps API.",
        result: "💰 15% Reduction in Fuel Costs"
    }
];

export default function CaseStudies() {
    const [filter, setFilter] = useState("All");
    const filteredStudies = filter === "All" ? studies : studies.filter(s => s.category === filter);

    return (
        <>
            <Head>
                <title>Codiora Tech | Case Studies</title>
                <meta name="description" content="See how we've transformed businesses with technology." />
            </Head>

            <section className="min-h-screen bg-gray-50 dark:bg-dark pt-32 pb-20 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
                        >
                            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Stories</span>
                        </motion.h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Real problems. Real solutions. Real results.
                        </p>
                    </div>

                    {/* Filter */}
                    <div className="flex justify-center gap-4 mb-16">
                        {["All", "Web", "AI", "SaaS"].map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full border text-sm font-bold transition-all ${filter === cat
                                        ? 'bg-black dark:bg-white text-white dark:text-black border-transparent scale-105'
                                        : 'bg-transparent border-gray-300 dark:border-white/20 text-gray-600 dark:text-gray-400 hover:border-gray-900 dark:hover:border-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <AnimatePresence>
                            {filteredStudies.map(study => (
                                <CaseStudyCard key={study.id} study={study} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
