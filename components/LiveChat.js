import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// --- ADVANCED KNOWLEDGE BASE ---
const KNOWLEDGE_BASE = [
    // ================================
    // 1. WEB DEVELOPMENT ECOSYSTEM
    // ================================
    {
        id: 'web_detailed',
        patterns: [
            // Core Tech
            'mern', 'react', 'next.js', 'node.js', 'express.js', 'postgresql', 'mysql', 'javascript', 'typescript',
            // App Types
            'web app', 'saas platform', 'ecommerce website', 'web portal', 'admin dashboard', 'cms development', 'custom website', 'progressive web apps', 'pwa', 'web application', 'web', 'website',
            // Features & Integrations
            'api development', 'rest api', 'graphql', 'full stack web', 'payment gateway', 'stripe integration', 'bkash integration', 'web performance', 'api'
        ],
        response: "🚀 **Enterprise Web Architecture**: We engineer high-performance, scalable web applications utilizing the robust **MERN Stack** and **Next.js**. Our solutions prioritize global scalability and uncompromised security.",
        action: { label: 'View Web Services', url: '/services/web-architecture' },
        score: 5
    },

    // ================================
    // 2. MOBILE APP ECOSYSTEM
    // ================================
    {
        id: 'mobile_detailed',
        patterns: [
            // Tech & Platforms
            'flutter', 'react native', 'android app', 'ios app', 'cross platform app', 'mobile api',
            // Features
            'mobile ui', 'mobile ux', 'firebase', 'push notifications', 'in-app purchase', 'offline support', 'location based app', 'chat app',
            // Deployment
            'app store deployment', 'play store deployment', '📱 mobile apps',
            // Industry specific
            'booking app', 'on demand app', 'fintech app', 'healthcare app', 'edtech app'
        ],
        response: "📱 **Mobile Innovation**: We craft flawless, cross-platform mobile experiences with native-level performance leveraging **Flutter** & **React Native**. One sophisticated codebase, deployed globally.",
        action: { label: 'View Mobile Solutions', url: '/services/mobile-innovation' },
        score: 5
    },

    // ================================
    // 3. UI/UX DESIGN
    // ================================
    {
        id: 'ui_ux_detailed',
        patterns: [
            // Core
            'figma', 'ui design', 'ux design', 'wireframe', 'prototyping', 'design system', 'user flow', 'uiux', 'desgin', 'design',
            // Specific Design Types
            'landing page design', 'dashboard design', 'mobile ui design', 'web ui design', 'brand identity',
            // Technical Design
            'component library', 'dark mode design', 'micro interactions', 'animation ui', 'typography', 'color system', 'responsive design',
            // Research
            'usability testing', 'accessibility design'
        ],
        response: "🎨 **Immersive UI/UX**: Exceptional software demands award-winning design. Our methodical approach encompasses deep user research, wireframing, and interactive **Figma** prototyping to ensure a pixel-perfect aesthetic.",
        action: { label: 'View Design', url: '/services/immersive-ui-ux' },
        score: 5
    },

    // ================================
    // 4. DEVOPS & CLOUD
    // ================================
    {
        id: 'devops_detailed',
        patterns: [
            // Platforms
            'aws', 'vercel', 'netlify', 'ec2', 's3', 'digitalocean', 'google cloud',
            // Tools
            'docker', 'kubernetes', 'github actions', 'terraform', 'nginx', 'linux server',
            // Concepts
            'ci/cd', 'cloud deployment', 'cloud monitoring', 'server scaling', 'load balancer', 'ssl setup', 'domain configuration', 'cloud security', 'devops automation', 'infrastructure as code'
        ],
        response: "☁️ **DevOps & Cloud Operations**: We architect bulletproof, enterprise-grade infrastructures. Utilizing **AWS**, **Docker**, and **Kubernetes**, we guarantee seamless auto-scaling and unparalleled security.",
        action: { label: 'View DevOps', url: '/services/devops-cloud' },
        score: 5
    },

    // ================================
    // 5. AI & AUTOMATION
    // ================================
    {
        id: 'ai_detailed',
        patterns: [
            // Core
            'ai development', 'machine learning', 'chatbot', 'openai integration', 'python ai', 'ai saas', 'ai api',
            // Domains
            'computer vision', 'data analysis', 'natural language processing', 'speech recognition', 'face recognition', 'ocr system', 'predictive analytics', 'anomaly detection',
            // Automation
            'automation script', 'workflow automation', 'ai dashboard', 'recommendation system', 'smart assistant'
        ],
        response: "🤖 **AI & Intelligent Automation**: We integrate state-of-the-art **AI Agents**, intelligent **Chatbots**, and automated corporate workflows powered by **OpenAI** & advanced Python technologies.",
        action: { label: 'Explore AI', url: '/services/ai-automation' },
        score: 5
    },

    // ================================
    // 6. DIGITAL MARKETING & BRANDING
    // ================================
    {
        id: 'marketing_detailed',
        patterns: [
            // SEO
            'seo', 'landing page seo', 'keyword research', 'on page seo', 'off page seo', 'technical seo',
            // Ads
            'google ads', 'facebook ads', 'remarketing', 'pixel tracking',
            // Strategy
            'conversion optimization', 'content marketing', 'email marketing', 'marketing automation', 'lead generation', 'sales funnel', 'growth hacking',
            // Analytics
            'google analytics', 'tag manager', 'a/b testing', 'conversion tracking'
        ],
        response: "📈 **Growth & Performance Marketing**: We drive exponential business growth through meticulous, data-driven **SEO**, strategic **Ad Campaigns**, and premium Performance Marketing.",
        action: { label: 'View Marketing', url: '/services/growth-marketing' },
        score: 5
    },

    // ================================
    // 7. CAREERS (Internships & Jobs)
    // ================================
    {
        id: 'frontend_intern',
        patterns: ['frontend intern', 'frontend job', 'react job', 'hiring frontend'],
        response: "💻 **Frontend Engineering Requirements**:\n\n• **Core:** Mastery of **React.js** & **Next.js** 14+.\n• **Styling:** Deep knowledge of **Tailwind CSS**.\n• **State:** Redux or Zustand.\n\n*Ready to build pixel-perfect interfaces?*",
        action: { label: 'Apply for Frontend', url: '/careers-apply' },
        score: 10
    },
    {
        id: 'backend_intern',
        patterns: ['backend intern', 'backend job', 'node job', 'hiring backend'],
        response: "⚙️ **Backend Engineering Requirements**:\n\n• **Runtime:** Expert in **Node.js** & Express.\n• **Database:** MongoDB (Aggregations) & PostgreSQL.\n• **Architecture:** Microservices & REST/GraphQL APIs.\n\n*Ready to architect scalable systems?*",
        action: { label: 'Apply for Backend', url: '/careers-apply' },
        score: 10
    },
    {
        id: 'ui_ux_intern',
        patterns: ['ui/ux intern', 'design intern', 'designer job'],
        response: "🎨 **UI/UX Design Requirements**:\n\n• **Tools:** Mastery of **Figma** (Auto-layout, Components).\n• **Skills:** User Research, Wireframing, & Prototyping.\n• **Bonus:** Basic HTML/CSS understanding.\n\n*Ready to design the future?*",
        action: { label: 'Apply for Design', url: '/careers-apply' },
        score: 10
    },
    {
        id: 'careers_general',
        patterns: ['intern', 'internship', 'job', 'career', 'apply', 'hiring', 'vacancy', 'join team', 'work with you'],
        response: "🎓 **General Application Roadmap**:\n\n1. **Prepare:** Polish your Portfolio.\n2. **Apply:** Click the button below.\n3. **Challenge:** Complete our coding task.\n\n*Select a specific role (Frontend, Backend) for detailed requirements.*",
        action: { label: 'Start Application', url: '/careers-apply' },
        score: 5
    },

    // ================================
    // 8. COMPANY INFO
    // ================================
    {
        id: 'greetings',
        patterns: ['hello', 'hi', 'hey', 'start', 'greetings', 'morning', 'evening', 'yo'],
        response: "Greetings. 👋 I am **Codi**, the premier AI Assistant for Codiora Tech.\n\nI am equipped to provide detailed consultations on:\n\n• **Enterprise Engineering Services**\n• **Strategic Partnerships & Quotes**\n• **Career Opportunities**\n\nHow may I facilitate your digital transformation today?",
        action: { label: 'Explore Our Expertise', url: '/services' },
        score: 1
    },
    {
        id: 'budget_flexible',
        patterns: ['budget', 'price', 'cost', 'pricing', 'rate', 'how much', 'quote', 'money', 'expensive', 'cheap'],
        response: "💰 **Premium Consulting & Pricing**: We do not operate within rigid budget constraints. We invite you to **contact our consulting team**. We will meticulously analyze your strategic objectives and architect a bespoke solution tailored to maximize your investment ROI.",
        action: { label: 'Get a Quote', url: '/contact' },
        score: 5
    },
    {
        id: 'contact',
        patterns: ['contact', 'email', 'phone', 'call', 'address', 'location', 'office'],
        response: "You can connect with us directly:\n\n📧 **Email:** contact@codioratech.com\n📞 **Phone:** +880 9611 317 892\n💬 **WhatsApp:** [+880 1772-445954](https://wa.me/8801772445954)\n📍 **HQ:** Dhaka, Bangladesh\n\nOr simply fill out our **Contact Form** for a priority response.",
        action: { label: 'Contact Us', url: '/contact' },
        score: 2
    },
    {
        id: 'tech_stack',
        patterns: ['tech stack', 'technology', 'technologies', 'what stack', 'database', 'backend tech', 'frontend tech', 'stack'],
        response: "💻 **Our Tech Stack**:\n\n• **Frontend:** Next.js, React, Tailwind CSS\n• **Backend:** Node.js, Go\n• **Database:** PostgreSQL, MongoDB, mySQL\n• **AI:** Python, PyTorch, Pinecone",
        action: { label: 'View Expertise', url: '/services' },
        score: 8
    },
    {
        id: 'partners',
        patterns: ['partner', 'collaborate', 'business', 'reseller'],
        response: "Interested in a strategic partnership? We love collaborating with other agencies and businesses. Reach out to **partners@codioratech.com** to see how we can grow together.",
        action: { label: 'Partner With Us', url: '/partner-program' },
        score: 3
    }
];

// Fallback logic
const FALLBACK_RESPONSES = [
    { text: "My expertise centers around **Enterprise Engineering & Premium Design**. How may we assist in architecting your next visionary project?", action: { label: 'View Portfolio', url: '/portfolio' } },
    { text: "I am currently focused on **Strategic Technological Solutions**. Would you like to schedule a consultation regarding a specific initiative?", action: { label: 'Contact Consulting Team', url: '/contact' } },
    { text: "While that falls outside my immediate scope, if your inquiry involves **Enterprise Web Architecture**, **Mobile Solutions**, or **Advanced AI**, I am fully equipped to assist.", action: { label: 'Our Expertise', url: '/services' } }
];

export default function LiveChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'bot',
            text: "Welcome to **Codiora Tech**. I am **Codi**, your Executive AI Assistant. 🤖\n\nI am here to provide strategic insights regarding our **Enterprise Engineering Services**, **Case Studies**, and **Development Architecture**.\n\nHow may we facilitate your digital transformation today?"
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

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
                    currentScore += item.score;
                }
            });

            if (currentScore > highestScore) {
                highestScore = currentScore;
                bestMatch = item;
            }
        });

        if (highestScore > 0 && bestMatch) {
            return { text: bestMatch.response, action: bestMatch.action };
        }

        // Return random fallback
        const fallback = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
        return { text: fallback.text, action: fallback.action };
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userText = inputValue;
        setInputValue("");

        const currentMessages = [...messages, { id: Date.now(), sender: 'user', text: userText }];
        setMessages(currentMessages);
        setIsTyping(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: currentMessages })
            });
            const data = await res.json();
            
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                sender: 'bot',
                text: data.text
            }]);
        } catch (error) {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                sender: 'bot',
                text: "My connection seems to be interrupted. Please try again later."
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    // Formatter for bold text and links
    const formatText = (text) => {
        const parts = text.split(/(\[.*?\]\(.*?\))|(\*\*.*?\*\*)/g).filter(Boolean);

        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                // Keep keeping bold text purely visual if it's not a link
                return <strong key={i} className="text-teal-600 font-bold">{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
                const [label, url] = part.slice(1, -1).split('](');
                return (
                    <Link key={i} href={url} className="text-blue-400 hover:text-blue-300 underline underline-offset-2 decoration-blue-500/30 font-medium">
                        {label}
                    </Link>
                );
            }
            return <span key={i}>{part}</span>;
        });
    };

    const sendSuggestion = async (text) => {
        setInputValue(""); // Clear input when suggestion is sent
        const userText = text;
        const currentMessages = [...messages, { id: Date.now(), sender: 'user', text: userText }];
        setMessages(currentMessages);
        setIsTyping(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: currentMessages })
            });
            const data = await res.json();
            
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                sender: 'bot',
                text: data.text
            }]);
        } catch (error) {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                sender: 'bot',
                text: "My connection seems to be interrupted. Please try again later."
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    // Reset Chat Logic
    const resetChat = () => {
        setMessages([
            {
                id: 1,
                sender: 'bot',
                text: "Welcome to **Codiora Tech**. I am **Codi**, your Executive AI Assistant. 🤖\n\nI am here to provide strategic insights regarding our **Enterprise Engineering Services**, **Case Studies**, and **Development Architecture**.\n\nHow may we facilitate your digital transformation today?"
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
                        className="pointer-events-auto bg-white/95 backdrop-blur-xl w-[340px] sm:w-[380px] h-[600px] max-h-[80vh] rounded-3xl shadow-2xl overflow-hidden border border-[#122a46]/10 flex flex-col ring-1 ring-white/10"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-white to-[#f1f5f9] p-5 flex justify-between items-center border-b border-[#122a46]/5 relative overflow-hidden shrink-0">
                            <div className="absolute inset-0 bg-teal-500/5 mix-blend-overlay"></div>

                            <div className="flex items-center gap-3.5 relative z-10">
                                <div className="relative">
                                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center border border-[#122a46]/10 shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#122a46]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                    </div>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#0f172a]"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#0f172a] text-base tracking-tight">Codi AI</h3>
                                    <span className="text-[11px] text-slate-500 font-medium tracking-wide flex items-center gap-1.5">
                                        Support Agent
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#122a46]/5 hover:bg-[#122a46]/10 text-[#122a46]/60 hover:text-[#122a46] transition-all relative z-10"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-grow p-4 overflow-y-auto overflow-x-hidden bg-[#f8fafc] chat-scrollbar">

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
                                        className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                                    >
                                        <div
                                            className={`max-w-[85%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed relative group ${msg.sender === 'user'
                                                ? 'bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-tr-sm shadow-xl shadow-cyan-900/10'
                                                : 'bg-white border border-[#122a46]/10 text-[#0f172a] rounded-tl-sm shadow-sm'
                                                }`}
                                        >
                                            <div className="whitespace-pre-wrap">{formatText(msg.text)}</div>

                                            {/* Action Button */}
                                            {msg.action && (
                                                <div className="mt-3 pt-3 border-t border-[#122a46]/10">
                                                    <Link href={msg.action.url} className="flex items-center justify-center gap-2 w-full py-2 bg-[#122a46]/5 hover:bg-[#122a46]/10 border border-[#122a46]/5 hover:border-teal-500/30 rounded-lg transition-all group/btn">
                                                        <span className="text-xs font-semibold text-teal-600 group-hover/btn:text-cyan-300">{msg.action.label}</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 text-teal-600 group-hover/btn:translate-x-0.5 transition-transform">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            )}

                                            {/* Timestamp */}
                                            <div className={`text-[9px] mt-1.5 opacity-40 font-medium ${msg.sender === 'user' ? 'text-right text-cyan-100' : 'text-left text-slate-500'}`}>
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
                                        <div className="bg-white border border-[#122a46]/10 shadow-sm px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1.5 items-center h-10 w-16 justify-center">
                                            <motion.span
                                                animate={{ y: [0, -4, 0] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                                                className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                                            ></motion.span>
                                            <motion.span
                                                animate={{ y: [0, -4, 0] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                                className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                                            ></motion.span>
                                            <motion.span
                                                animate={{ y: [0, -4, 0] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                                                className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                                            ></motion.span>
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Suggestions */}
                        {!isTyping && messages.length < 3 && (
                            <div className="px-4 pb-2 bg-[#f8fafc] flex gap-2 overflow-x-auto scrollbar-none snap-x">
                                {['💰 Budget?', '🚀 Web Dev', '📱 Mobile Apps', '📧 Contact'].map((tag, i) => (
                                    <button
                                        key={i}
                                        onClick={() => sendSuggestion(tag)}
                                        className="flex-shrink-0 snap-start text-xs bg-[#122a46]/5 hover:bg-[#122a46]/10 border border-[#122a46]/10 hover:border-teal-500/50 text-slate-500 hover:text-teal-600 px-3 py-1.5 rounded-full transition-all whitespace-nowrap"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-[#122a46]/5 relative z-20">
                            <div className="relative flex items-end gap-2">
                                {/* Reset Button */}
                                <button
                                    onClick={resetChat}
                                    className="h-[46px] w-[46px] flex items-center justify-center rounded-xl bg-white border border-[#122a46]/10 hover:bg-slate-50 text-slate-500 hover:text-[#122a46] transition-all hover:rotate-180 shadow-sm"
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
                                            className="w-full bg-white border border-[#122a46]/20 rounded-xl pl-4 pr-4 py-3 text-sm text-[#0f172a] focus:border-teal-500/50 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all placeholder:text-slate-500 resize-none h-[46px] shadow-sm font-medium"
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
                                <p className="text-[9px] text-slate-500 font-medium tracking-wide">SECURE CHAT WITH CODI</p>
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
                <div className="absolute inset-0 rounded-full bg-teal-500/20 blur-xl group-hover:bg-teal-500/40 transition-all duration-500"></div>

                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-teal-500/50 text-teal-600 shadow-2xl flex items-center justify-center relative z-20 overflow-hidden group-hover:border-cyan-400 transition-colors"
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
