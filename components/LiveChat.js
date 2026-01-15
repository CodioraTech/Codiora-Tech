import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// --- ADVANCED KNOWLEDGE BASE ---
// Scored system: specific keywords have higher weight
const KNOWLEDGE_BASE = [
    // --- GREETINGS & BASICS ---
    {
        id: 'greetings',
        patterns: ['hello', 'hi', 'hey', 'start', 'greetings', 'morning', 'evening', 'yo'],
        response: "Hello! 👋 I am **Codi**, the intelligent assistant for Codiora Tech. I'm here to help you navigate our services, answer technical questions, or set up a consultation. How can I assist you today?",
        score: 1
    },
    {
        id: 'identity',
        patterns: ['who are you', 'what are you', 'your name', 'bot', 'real person', 'human'],
        response: "I am **Codi**, a custom-built AI agent designed by Codiora Tech. While I'm not human, I have direct access to our company's knowledge base to answer your questions instantly!",
        score: 2
    },

    // --- WHAT (Services) ---
    {
        id: 'web_architecture',
        patterns: ['web', 'website', 'react', 'nextjs', 'frontend', 'backend', 'full stack', 'web dev'],
        response: "🚀 **Web Architecture**: We build blazing-fast, SEO-optimized web applications using the modern **MERN Stack** (MongoDB, Express, React, Node) and **Next.js**. We focus on performance, scalability, and security.",
        score: 3
    },
    {
        id: 'mobile_innovation',
        patterns: ['mobile', 'app', 'android', 'ios', 'flutter', 'react native', 'phone'],
        response: "📱 **Mobile Innovation**: We build cross-platform applications that feel purely native. Using **Flutter**, we deploy to both iOS and Android from a single codebase, saving you time and money without compromising quality.",
        score: 3
    },
    {
        id: 'ui_ux',
        patterns: ['design', 'ui', 'ux', 'figma', 'prototype', 'looks', 'interface'],
        response: "🎨 **Immersive UI/UX**: Software should be beautiful. Our design process involves deep user research, wireframing, and high-fidelity prototyping in **Figma** before a single line of code is written.",
        score: 3
    },
    {
        id: 'devops_cloud',
        patterns: ['devops', 'cloud', 'aws', 'docker', 'kubernetes', 'hosting', 'server', 'deploy'],
        response: "☁️ **DevOps & Cloud**: We ensure your infrastructure is bulletproof. We specialize in **AWS** and **Google Cloud** deployments, using **Docker** & **Kubernetes** for auto-scaling and CI/CD pipelines for automated testing.",
        score: 3
    },
    {
        id: 'ai_automation',
        patterns: ['ai', 'artificial intelligence', 'bot', 'chatgpt', 'gemini', 'automation', 'llm', 'machine learning'],
        response: "🤖 **AI & Automation**: We build intelligent systems just like me! From custom **Customer Support Bots** to internal process automation using **OpenAI** and **Gemini** APIs, we help you save time and reduce costs.",
        score: 3
    },
    {
        id: 'growth_marketing',
        patterns: ['marketing', 'seo', 'growth', 'advertising', 'social media', 'ranking', 'google'],
        response: "📈 **Growth Marketing**: Building a product is half the battle. We help you sell it. Our data-driven SEO, content strategy, and performance marketing ensure your digital product reaches the right audience.",
        score: 3
    },

    // --- HOW (Process & Expertise) ---
    {
        id: 'process',
        patterns: ['process', 'how you work', 'steps', 'workflow', 'methodology', 'timeline'],
        response: "**Our 4-Step Execution Protocol**:\n1. 🔍 **Discovery:** We map out your goals & requirements.\n2. 🏗️ **Architecture:** We design the system & UI.\n3. 💻 **Development:** Agile sprits with bi-weekly updates.\n4. 🚀 **Launch:** Rigorous testing & deployment.",
        score: 2
    },
    {
        id: 'portfolio',
        patterns: ['portfolio', 'work', 'projects', 'case study', 'examples', 'done before'],
        response: "We have shipped over **15+ major projects** globally. From E-commerce platforms to FinTech apps. You can view our detailed case studies in the **[Portfolio Section](/portfolio)**.",
        score: 2
    },
    {
        id: 'partners',
        patterns: ['partner', 'client', 'who do you work with', 'customer'],
        response: "We work with visionaries. From early-stage startups to established enterprises, we act as the **Technical Co-Founder** for our partners, ensuring their long-term success.",
        score: 2
    },
    {
        id: 'platform',
        patterns: ['tech stack', 'technology', 'language', 'platform', 'framework', 'tool'],
        response: "**Our Tech Arsenal**:\n• **Frontend:** Next.js, React, Tailwind\n• **Backend:** Node.js, Python, Go\n• **Mobile:** Flutter, Kotlin\n• **Cloud:** AWS, Vercel, Supabase",
        score: 2
    },

    // --- WHO (Company & Culture) ---
    {
        id: 'company_info',
        patterns: ['who is codiora', 'about company', 'what do you do', 'about us', 'codiora tech', 'agency'],
        response: "We are **Codiora Tech**. \n\n**Mission:** Digital Supremacy for our clients.\n**Vision:** To be the global architects of the digital future.\n\nWe don't just write code; we engineer business growth.",
        score: 2
    },
    {
        id: 'team',
        patterns: ['team', 'founder', 'developer', 'engineer', 'people', 'staff', 'ceo'],
        response: "Our team involves the **'Architects'**—a collective of elite developers, designers, and strategists. We are led by a vision to disrupt the ordinary. You can meet our leadership on the **[About Page](/about)**.",
        score: 2
    },
    {
        id: 'culture',
        patterns: ['culture', 'environment', 'values', 'dna', 'vibe'],
        response: "**Our DNA is Different.** We believe in:\n1. **Relentless Innovation**\n2. **Pixel Perfection**\n3. **User Obsession**\n\nWe operate at the bleeding edge of technology.",
        score: 2
    },
    {
        id: 'history',
        patterns: ['history', 'since', 'founded', 'start', 'how long', 'years'],
        response: "Codiora Tech was established in **2024** in Dhaka, Bangladesh. In a short time, we have rapidly expanded our footprint, serving global clients with high-end digital solutions.",
        score: 2
    },

    // --- MORE (Contact & Extras) ---
    {
        id: 'contact',
        patterns: ['contact', 'email', 'phone', 'call', 'reach', 'address', 'location', 'dhaka', 'office'],
        response: "You can connect with us directly:\n\n📧 **Email:** hello@codioratech.com\n📍 **HQ:** Dhaka, Bangladesh\n\nOr simply fill out our [Contact Form](/contact) for a priority response.",
        score: 2
    },
    {
        id: 'pricing',
        patterns: ['price', 'cost', 'rate', 'money', 'charge', 'expensive', 'quote', 'budget', 'cheap'],
        response: "We don't use fixed packages because your idea is unique. \n\n💬 **Tip:** Tell me a bit about your project features, and I can guide you, or you can request a **[Free Quote](/contact)**.",
        score: 2
    },
    {
        id: 'careers_internship',
        patterns: ['job', 'hire', 'career', 'vacancy', 'intern', 'internship', 'join', 'monitor'],
        response: "We are always looking for exceptional talent! \n\n• **Careers:** Send CV to careers@codioratech.com\n• **Internships:** Check our [CodeCamp](/codecamp) program for upcoming batches.",
        score: 2
    },
    {
        id: 'codecamp',
        patterns: ['codecamp', 'training', 'learn', 'course', 'bootcamp', 'teaching'],
        response: "**CodeCamp** is our initiative to train the next generation of elite engineers. We offer intensive mentorship programs. Stay tuned for our next intake!",
        score: 3
    },
    {
        id: 'become_partner',
        patterns: ['partnership', 'reseller', 'affiliate', 'collaborate', 'business'],
        response: "Interested in a strategic partnership? We love collaborating with other agencies and businesses. Reach out to **partners@codioratech.com** to discuss synergies.",
        score: 3
    }
];

// Fallback logic for Professional Handling
const FALLBACK_RESPONSES = [
    "That's an interesting topic! While I can't chat about everything, I'm an expert on **Digital Strategy**. How can we help apply technology to your business?",
    "I'm focusing my processing power on **Engineering & Design** today. Do you have a project in mind where we could help?",
    "I might not know much about that, but if it involves **Web**, **Mobile**, or **AI**, I'm your best resource! What are you building?"
];

export default function LiveChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'bot',
            text: "Welcome to **Codiora Tech**. I am **Codi**, your AI Assistant. 🤖\n\nI can provide insights on our **Engineering Services**, **Case Studies**, and **Development Process**.\n\nHow can we assist in accelerating your digital growth today?"
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen, isTyping]);

    // Smart Matching Algorithm
    const findBestResponse = (input) => {
        const lowerInput = input.toLowerCase();
        let bestMatch = null;
        let highestScore = 0;

        KNOWLEDGE_BASE.forEach(item => {
            let currentScore = 0;
            item.patterns.forEach(pattern => {
                if (lowerInput.includes(pattern)) {
                    // Exact match bonus or length based bonus could go here
                    currentScore += item.score;
                }
            });

            if (currentScore > highestScore) {
                highestScore = currentScore;
                bestMatch = item;
            }
        });

        if (highestScore > 0 && bestMatch) {
            return bestMatch.response;
        }

        // Return random fallback
        return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userText = inputValue;
        setInputValue(""); // Clear immediately

        // 1. Add User Message
        setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: userText }]);
        setIsTyping(true);

        // 2. Simulate Latency (randomized for realism)
        const delay = Math.floor(Math.random() * 800) + 1000; // 1s to 1.8s

        setTimeout(() => {
            const responseText = findBestResponse(userText);
            setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: responseText }]);
            setIsTyping(false);
        }, delay);
    };

    // Formatter for bold text and links
    const formatText = (text) => {
        // Regex to parse [Link Text](/url) and **Bold**
        const parts = text.split(/(\[.*?\]\(.*?\))|(\*\*.*?\*\*)/g).filter(Boolean);

        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="text-cyan-400 font-bold">{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
                const [label, url] = part.slice(1, -1).split('](');
                return (
                    <Link key={i} href={url} className="text-blue-400 hover:text-blue-300 underline underline-offset-2 decoration-blue-500/30">
                        {label}
                    </Link>
                );
            }
            return <span key={i}>{part}</span>;
        });
    };

    // Quick suggestions to jumpstart conversation
    const sendSuggestion = (text) => {
        setInputValue(text);

        const userText = text;
        setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: userText }]);
        setIsTyping(true);
        setTimeout(() => {
            const responseText = findBestResponse(userText);
            setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: responseText }]);
            setIsTyping(false);
        }, 1200);
    };

    // Reset Chat Logic
    const resetChat = () => {
        setMessages([
            {
                id: 1,
                sender: 'bot',
                text: "Welcome to **Codiora Tech**. I am **Codi**, your AI Assistant. 🤖\n\nI can provide insights on our **Engineering Services**, **Case Studies**, and **Development Process**.\n\nHow can we assist in accelerating your digital growth today?"
            }
        ]);
        setInputValue("");
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 pointer-events-none font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.9, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.9 }}
                        className="pointer-events-auto bg-[#0a0a0a]/95 backdrop-blur-xl w-[340px] sm:w-[380px] h-[600px] max-h-[80vh] rounded-3xl shadow-2xl overflow-hidden border border-white/10 flex flex-col ring-1 ring-white/10"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] p-5 flex justify-between items-center border-b border-white/5 relative overflow-hidden shrink-0">
                            <div className="absolute inset-0 bg-cyan-500/5 mix-blend-overlay"></div>

                            <div className="flex items-center gap-3.5 relative z-10">
                                <div className="relative">
                                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center border border-white/10 shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                    </div>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#0f172a]"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-base tracking-tight">Codi AI</h3>
                                    <span className="text-[11px] text-cyan-200/70 font-medium tracking-wide flex items-center gap-1.5">
                                        Support Agent
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all relative z-10"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-grow p-4 overflow-y-auto overflow-x-hidden bg-[#050505] scrollbar scrollbar-w-1 scrollbar-thumb-gray-800 scrollbar-track-transparent">

                            {/* Intro/Cleanup */}
                            <div className="text-center mb-6 mt-2">
                                <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold">Today</p>
                            </div>

                            <div className="space-y-5">
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[85%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed relative group ${msg.sender === 'user'
                                                ? 'bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-tr-sm shadow-xl shadow-cyan-900/10'
                                                : 'bg-[#18181b] border border-white/5 text-gray-200 rounded-tl-sm'
                                                }`}
                                        >
                                            <div className="whitespace-pre-wrap">{formatText(msg.text)}</div>

                                            {/* Timestamp (Optional visual detail) */}
                                            <div className={`text-[9px] mt-1.5 opacity-40 font-medium ${msg.sender === 'user' ? 'text-right text-cyan-100' : 'text-left text-gray-500'}`}>
                                                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}

                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex justify-start"
                                    >
                                        <div className="bg-[#18181b] border border-white/5 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center h-10 w-16 justify-center">
                                            <motion.span
                                                animate={{ y: [0, -4, 0] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                                                className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                                            ></motion.span>
                                            <motion.span
                                                animate={{ y: [0, -4, 0] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                                className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                                            ></motion.span>
                                            <motion.span
                                                animate={{ y: [0, -4, 0] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                                                className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                                            ></motion.span>
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Suggestions */}
                        {!isTyping && messages.length < 3 && (
                            <div className="px-4 pb-2 bg-[#050505] flex gap-2 overflow-x-auto scrollbar-none snap-x">
                                {['💰 Pricing?', '🚀 Web Dev', '📱 Mobile Apps', '📧 Contact'].map((tag, i) => (
                                    <button
                                        key={i}
                                        onClick={() => sendSuggestion(tag)}
                                        className="flex-shrink-0 snap-start text-xs bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 text-gray-400 hover:text-cyan-400 px-3 py-1.5 rounded-full transition-all whitespace-nowrap"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-4 bg-[#0a0a0a] border-t border-white/5 relative z-20">
                            <div className="relative flex items-end gap-2">
                                {/* Reset Button */}
                                <button
                                    onClick={resetChat}
                                    className="h-[46px] w-[46px] flex items-center justify-center rounded-xl bg-[#151515] border border-white/10 hover:bg-[#202020] text-gray-400 hover:text-white transition-all hover:rotate-180"
                                    title="Start New Chat"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                </button>

                                <form onSubmit={handleSendMessage} className="relative flex-grow flex items-end gap-2">
                                    <div className="relative flex-grow">
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            placeholder="Ask Codi..."
                                            className="w-full bg-[#151515] border border-white/10 rounded-xl pl-4 pr-4 py-3 text-sm text-white focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all placeholder:text-gray-600 resize-none h-[46px]"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={!inputValue.trim() || isTyping}
                                        className="h-[46px] w-[46px] flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 disabled:opacity-30 disabled:scale-95 transition-all transform active:scale-90"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5">
                                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                            <div className="text-center mt-3 flex items-center justify-center gap-1.5 opacity-30 hover:opacity-100 transition-opacity">
                                <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                                <p className="text-[9px] text-gray-500 font-medium tracking-wide">SECURE CHAT WITH CODI</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button (Floating Action Button) */}
            <motion.div
                className="relative group z-50"
            >
                {/* Ambient Glow */}
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl group-hover:bg-cyan-500/40 transition-all duration-500"></div>

                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#0a0a0a] border border-cyan-500/50 text-cyan-400 shadow-2xl flex items-center justify-center relative z-20 overflow-hidden group-hover:border-cyan-400 transition-colors"
                >
                    {/* Inner Gradient Shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.svg
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </motion.svg>
                        ) : (
                            <motion.div
                                key="chat"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                            >
                                {/* Chat Bubble Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                </svg>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>

                {/* Notification Badge */}
                {!isOpen && (
                    <div className="absolute top-0 right-0 -mr-1 -mt-1 pointer-events-none z-30">
                        <span className="relative flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-[#0a0a0a]"></span>
                        </span>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
