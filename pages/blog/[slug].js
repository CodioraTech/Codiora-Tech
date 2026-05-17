import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Mock Data for Blog Posts (In a real app, this would come from a CMS or MDX)
const blogContent = {
    "scaling-websockets": {
        title: "Scaling Websockets to 1M+ Concurrent Connections",
        category: "System Design",
        date: "Oct 12, 2025",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000&auto=format&fit=crop",
        content: `
            <h3 class="text-2xl font-bold text-[#122a46] mb-4">The Challenge</h3>
            <p class="mb-8">When we started building out our real-time notification engine, we hit a wall at 50k concurrent connections. The Node.js event loop was getting blocked, and memory usage was spiking unpredictably.</p>
            
            <h3 class="text-2xl font-bold text-[#122a46] mb-4">Kernel Tuning</h3>
            <p class="mb-8">The first step was to tune the Linux kernel. We increased the maximum number of open file descriptors (ulimit -n) and tweaked the TCP keepalive settings. This allowed a single server to maintain many more idle connections without crashing.</p>

            <h3 class="text-2xl font-bold text-[#122a46] mb-4">Cluster Mode & Redis Adapter</h3>
            <p class="mb-8">We moved to a clustered architecture using the Redis adapter for Socket.io. This allowed us to scale horizontally across multiple nodes. Messages published to one node were propagated to all others via Redis Pub/Sub.</p>
            
            <h3 class="text-2xl font-bold text-[#122a46] mb-4">The Result</h3>
            <p class="mb-8">With these changes, we successfully benchmarked 1M+ concurrent connections with sub-100ms latency on a cluster of just 3 standard instances.</p>
        `
    },
    "redux-vs-zustand": {
        title: "Why We Ditched Redux for Zustand",
        category: "Frontend",
        date: "Oct 08, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop",
        content: `<p>Coming soon...</p>`
    },
    // ... add placeholders for others if needed to prevent errors
};

export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;
    const post = blogContent[slug] || blogContent["scaling-websockets"]; // Fallback for demo

    // Comment State
    const [comments, setComments] = useState([
        { author: "Sarah Jenkins", role: "CTO", text: "Great detailed breakdown. The kernel tuning part is often overlooked.", date: "2 hours ago" },
        { author: "DevBot", role: "User", text: "Would love to see the specific sysctl.conf settings you used.", date: "5 hours ago" }
    ]);
    const [newComment, setNewComment] = useState("");

    const handlePostComment = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;
        setComments([...comments, { author: "You", role: "Guest", text: newComment, date: "Just now" }]);
        setNewComment("");
    };

    return (
        <>
            <Head>
                <title>{post.title} | Codiora Tech</title>
            </Head>

            <div className="bg-[#f8fafc] min-h-screen text-slate-600 selection:bg-orange-500/30 font-sans">
                {/* Progress Bar */}
                <motion.div style={{ scaleX: useScroll().scrollYProgress }} className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-50"></motion.div>

                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[0%] right-[0%] w-[800px] h-[800px] bg-orange-900/10 rounded-full blur-[150px]" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-32 pb-40 relative z-10 max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-orange-500 transition-colors mb-12 uppercase tracking-widest font-bold">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        Back to Blog
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest mb-6 text-orange-500">
                            <span>{post.category}</span>
                            <span className="text-gray-600">•</span>
                            <span className="text-slate-500">{post.readTime}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-[#122a46] leading-tight mb-8">{post.title}</h1>
                        <div className="flex items-center gap-4 mb-16 border-b border-[#122a46]/10 pb-8">
                            <div className="w-12 h-12 bg-gray-800 rounded-full"></div>
                            <div>
                                <div className="text-[#122a46] font-bold">Codiora Engineering Team</div>
                                <div className="text-xs text-slate-500">{post.date}</div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="prose prose-invert prose-lg max-w-none text-slate-600 leading-relaxed mb-24">
                        <img src={post.image} alt={post.title} className="w-full rounded-3xl mb-12 border border-[#122a46]/10" />
                        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    </div>

                    {/* Comments Section */}
                    <div className="bg-white border border-[#122a46]/5 p-10 md:p-14 rounded-[2.5rem]">
                        <h3 className="text-2xl font-bold text-[#122a46] mb-10">Discussion ({comments.length})</h3>

                        <div className="space-y-8 mb-12">
                            {comments.map((c, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#122a46]/10 flex items-center justify-center font-bold text-orange-500 flex-shrink-0">
                                        {c.author.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="flex items-baseline gap-3 mb-1">
                                            <span className="text-[#122a46] font-bold">{c.author}</span>
                                            <span className="text-xs text-orange-500 uppercase tracking-wider font-bold border border-orange-500/20 px-2 rounded-full">{c.role}</span>
                                            <span className="text-xs text-gray-600 ml-auto md:ml-0">{c.date}</span>
                                        </div>
                                        <p className="text-slate-500 text-sm leading-relaxed">{c.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <form onSubmit={handlePostComment} className="relative">
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                className="w-full bg-[#111] border border-[#122a46]/10 rounded-2xl p-6 text-[#122a46] focus:border-orange-500 outline-none transition-colors min-h-[150px] resize-none"
                                placeholder="Share your thoughts..."
                            ></textarea>
                            <button className="absolute bottom-4 right-4 bg-orange-600 text-[#122a46] px-6 py-2 rounded-xl font-bold text-sm hover:bg-orange-500 transition-colors">
                                Post Comment
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}

// Hook for scroll progress (simple version)
import { useScroll } from 'framer-motion';
