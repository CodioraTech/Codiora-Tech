import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function RoiCalculator() {
    const [workforceSize, setWorkforceSize] = useState(5);
    const [hoursPerWeek, setHoursPerWeek] = useState(15);
    const [hourlyRate, setHourlyRate] = useState(30);
    const [automationType, setAutomationType] = useState('ai'); // ai, scraping, enterprise

    const [weeklyManualCost, setWeeklyManualCost] = useState(0);
    const [yearlyManualCost, setYearlyManualCost] = useState(0);
    const [yearlySavings, setYearlySavings] = useState(0);
    const [yearlyAutomationCost, setYearlyAutomationCost] = useState(0);
    const [yearlyHoursSaved, setYearlyHoursSaved] = useState(0);

    const automationMetrics = {
        ai: {
            label: "AI Chatbots & Intelligent Agents",
            efficiencyGains: 0.85, // 85% cost reduction
            descriptor: "85% decrease in customer support & triage operational costs"
        },
        scraping: {
            label: "Data Extraction & Web Scraping",
            efficiencyGains: 0.92, // 92% cost reduction
            descriptor: "92% reduction in B2B lead generation & manual data collection hours"
        },
        enterprise: {
            label: "Full-Stack Enterprise Applications",
            efficiencyGains: 0.78, // 78% cost reduction
            descriptor: "78% reduction in administrative manual workflows & system sync friction"
        }
    };

    useEffect(() => {
        const weekly = workforceSize * hoursPerWeek * hourlyRate;
        const yearly = weekly * 52;
        const efficiency = automationMetrics[automationType].efficiencyGains;
        
        const savings = yearly * efficiency;
        const autoCost = yearly - savings;
        const hoursSaved = workforceSize * hoursPerWeek * 52;

        setWeeklyManualCost(weekly);
        setYearlyManualCost(yearly);
        setYearlySavings(savings);
        setYearlyAutomationCost(autoCost);
        setYearlyHoursSaved(hoursSaved);
    }, [workforceSize, hoursPerWeek, hourlyRate, automationType]);

    const formatCurrency = (val) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(val);
    };

    const formatNumber = (val) => {
        return new Intl.NumberFormat('en-US').format(val);
    };

    return (
        <section className="py-24 relative overflow-hidden bg-white dark:bg-[#f8fafc] text-[#122a46]">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 text-xs font-bold tracking-widest uppercase mb-4">
                        Interactive ROI Calculator
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                        Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">Automation Savings</span>
                    </h2>
                    <p className="text-lg text-slate-500">
                        See exactly how much time and money you can reclaim by automating manual processes and data workflows.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
                    {/* Left: Input sliders (7 Columns) */}
                    <div className="lg:col-span-7 bg-[#122a46]/5 border border-[#122a46]/10 p-8 md:p-10 rounded-[2rem] backdrop-blur-md flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                                Step 1: Tell Us About Your Workflow
                            </h3>

                            {/* Service Selector Tabs */}
                            <div className="mb-10">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-4">Target Automation Area</label>
                                <div className="grid grid-cols-3 gap-2 p-1.5 bg-white border border-[#122a46]/10 rounded-2xl">
                                    {Object.entries(automationMetrics).map(([key, value]) => (
                                        <button
                                            key={key}
                                            onClick={() => setAutomationType(key)}
                                            className={`py-3 px-2 rounded-xl text-xs md:text-sm font-bold tracking-wide transition-all ${
                                                automationType === key
                                                    ? 'bg-[#122a46] text-white shadow-md'
                                                    : 'text-[#122a46]/60 hover:text-[#122a46] hover:bg-slate-50'
                                            }`}
                                        >
                                            {key === 'ai' ? 'AI Agent' : key === 'scraping' ? 'Web Scraper' : 'Full-Stack'}
                                        </button>
                                    ))}
                                </div>
                                <p className="text-xs text-slate-500 mt-3 italic">
                                    *Using: {automationMetrics[automationType].descriptor}
                                </p>
                            </div>

                            {/* Input 1: Workforce Size */}
                            <div className="mb-8">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm font-bold uppercase tracking-wide text-slate-600">Workforce Size</span>
                                    <span className="text-xl font-black text-teal-600 font-mono">{workforceSize} {workforceSize === 1 ? 'employee' : 'employees'}</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value={workforceSize}
                                    onChange={(e) => setWorkforceSize(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-500 focus:outline-none"
                                />
                                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
                                    <span>1 Emp</span>
                                    <span>50 Emps</span>
                                    <span>100 Emps</span>
                                </div>
                            </div>

                            {/* Input 2: Hours Per Week */}
                            <div className="mb-8">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm font-bold uppercase tracking-wide text-slate-600">Weekly Repetitive Hours per Employee</span>
                                    <span className="text-xl font-black text-teal-600 font-mono">{hoursPerWeek} hrs / week</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="40"
                                    value={hoursPerWeek}
                                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-500 focus:outline-none"
                                />
                                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
                                    <span>1 Hr</span>
                                    <span>20 Hrs</span>
                                    <span>40 Hrs</span>
                                </div>
                            </div>

                            {/* Input 3: Hourly Rate */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm font-bold uppercase tracking-wide text-slate-600">Average Hourly Employee Rate</span>
                                    <span className="text-xl font-black text-teal-600 font-mono">{formatCurrency(hourlyRate)} / hr</span>
                                </div>
                                <input
                                    type="range"
                                    min="10"
                                    max="150"
                                    value={hourlyRate}
                                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-500 focus:outline-none"
                                />
                                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
                                    <span>$10/hr</span>
                                    <span>$80/hr</span>
                                    <span>$150/hr</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Dashboard (5 Columns) */}
                    <div className="lg:col-span-5 relative group">
                        <div className="absolute -inset-[2px] bg-gradient-to-r from-teal-500 via-purple-500 to-teal-500 rounded-[2.5rem] opacity-35 group-hover:opacity-60 blur-md transition-all duration-500" />
                        
                        <div className="relative bg-[#122a46] text-white p-8 md:p-10 rounded-[2.5rem] h-full flex flex-col justify-between overflow-hidden shadow-2xl">
                            {/* Ambient Light Inside Dashboard */}
                            <div className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] bg-teal-500/20 rounded-full blur-[100px] pointer-events-none" />
                            <div className="absolute bottom-[-20%] left-[-20%] w-[60%] h-[60%] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

                            <div className="relative z-10">
                                <h3 className="text-lg font-bold tracking-wider text-teal-300 uppercase mb-8 flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
                                    Reclaim Estimates
                                </h3>

                                <div className="space-y-6">
                                    {/* Stat: Annual Savings */}
                                    <div>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Estimated Net Annual Savings</span>
                                        <motion.div 
                                            key={yearlySavings}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-4xl md:text-5xl font-black text-teal-400 font-mono tracking-tight glow-text"
                                        >
                                            {formatCurrency(yearlySavings)}
                                        </motion.div>
                                        <div className="inline-flex items-center gap-1.5 bg-teal-500/10 border border-teal-500/20 text-teal-300 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md mt-2">
                                            ✓ {formatNumber(Math.round(automationMetrics[automationType].efficiencyGains * 100))}% cost reduction
                                        </div>
                                    </div>

                                    {/* Separator */}
                                    <div className="h-[1px] bg-white/10 w-full" />

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Hours Reclaimed / Yr</span>
                                            <motion.div 
                                                key={yearlyHoursSaved}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="text-xl md:text-2xl font-black font-mono"
                                            >
                                                {formatNumber(yearlyHoursSaved)} hrs
                                            </motion.div>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Automated Cost / Yr</span>
                                            <motion.div 
                                                key={yearlyAutomationCost}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="text-xl md:text-2xl font-black font-mono text-purple-300"
                                            >
                                                {formatCurrency(yearlyAutomationCost)}
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 mt-12">
                                <Link 
                                    href={{
                                        pathname: '/contact',
                                        query: { 
                                            service: automationMetrics[automationType].label,
                                            savings: Math.round(yearlySavings),
                                            hours: yearlyHoursSaved
                                        }
                                    }}
                                    className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-5 text-sm font-bold text-[#122a46] transition-all duration-300 bg-teal-400 rounded-2xl hover:bg-teal-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-wider">
                                        Claim Your Free Audit
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                        </svg>
                                    </span>
                                </Link>
                                <span className="text-[10px] text-slate-400 text-center block mt-3 font-semibold">
                                    No credit card required · Free 30-min system mapping session
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
