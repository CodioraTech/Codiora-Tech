import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

const posts = [
    {
        category: "System Design",
        title: "Scaling Websockets to 1M+ Concurrent Connections",
        excerpt: "How we optimized our Linux kernel settings and Node.js clusters to handle massive real-time traffic without melting the servers.",
        date: "Oct 12, 2025",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000&auto=format&fit=crop",
        slug: "scaling-websockets"
    },
    {
        category: "Frontend",
        title: "Why We Ditched Redux for Zustand",
        excerpt: "Redux boilerplate was killing our velocity. Here is how switching to atomic state management reduced our bundle size by 40%.",
        date: "Oct 08, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop",
        slug: "redux-vs-zustand"
    },
    {
        category: "AI Engineering",
        title: "RAG Pipelines: Beyond the Basics",
        excerpt: "Vector databases are just the start. Learn how to implement hybrid search and re-ranking for enterprise-grade LLM applications.",
        date: "Sep 29, 2025",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
        slug: "advanced-rag"
    },
    {
        category: "DevOps",
        title: "Kubernetes at the Edge",
        excerpt: "Deploying lightweight clusters to remote IoT devices. A case study in latency reduction and decentralized orchestration.",
        date: "Sep 15, 2025",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2000&auto=format&fit=crop",
        slug: "k8s-edge"
    },
    {
        category: "Culture",
        title: "The Death of the Daily Standup",
        excerpt: "Why synchronous status updates are a relic of the past, and how async written updates improved our deep work metrics.",
        date: "Sep 02, 2025",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
        slug: "async-culture"
    }
];

export default function Blog() {
    return (
        <>
            <Head>
                <title>Codiora Tech | Engineering Blog</title>
            </Head>

            <div className="bg-[#f8fafc] min-h-screen text-[#122a46] overflow-hidden selection:bg-orange-500/30">
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[0%] w-[800px] h-[800px] bg-orange-900/10 rounded-full blur-[150px] animate-pulse-slow" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 pt-44 pb-40 relative z-10">
                    <div className="text-center mb-32">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6">
                            Insights & Rants
                        </div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                        >
                            ENGINEERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">SIGNAL</span>
                        </motion.h1>
                        <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                            No fluff. No marketing jargon. Just deep dives into the problems we solve and the technologies we bet on.
                        </p>
                    </div>

                    {/* Featured Post */}
                    <div className="mb-24">
                        <Link href={`/blog/${posts[0].slug}`}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="group relative rounded-[2.5rem] overflow-hidden bg-white border border-[#122a46]/10 aspect-[16/9] md:aspect-[21/9] cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${posts[0].image})` }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-black/50 to-transparent"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3">
                                    <div className="text-orange-400 font-bold uppercase tracking-widest mb-4 text-sm">{posts[0].category}</div>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-6 hover:underline decoration-orange-500 underline-offset-8 decoration-2">{posts[0].title}</h2>
                                    <p className="text-slate-600 text-lg md:text-xl line-clamp-2 md:line-clamp-none mb-8">{posts[0].excerpt}</p>
                                    <div className="flex items-center gap-6 text-sm font-mono text-slate-500">
                                        <span>{posts[0].date}</span>
                                        <span>•</span>
                                        <span>{posts[0].readTime}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    </div>

                    {/* Post Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {posts.slice(1).map((post, i) => (
                            <Link key={i} href={`/blog/${post.slug}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group cursor-pointer"
                                >
                                    <div className="rounded-[2rem] overflow-hidden mb-8 border border-[#122a46]/10 relative aspect-[4/3]">
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${post.image})` }}>
                                            <div className="absolute inset-0 bg-[#f8fafc]/20 group-hover:bg-transparent transition-colors"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">{post.category}</span>
                                            <span className="text-gray-600 text-xs font-mono">{post.readTime}</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-orange-500 transition-colors">{post.title}</h3>
                                        <p className="text-slate-500 leading-relaxed">{post.excerpt}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    {/* Newsletter */}
                    <div className="mt-40 p-12 bg-[#122a46]/5 border border-[#122a46]/5 rounded-[2.5rem] text-center">
                        <h3 className="text-3xl font-bold mb-4">Stay in the Loop</h3>
                        <p className="text-slate-500 mb-8">Get the latest engineering deep dives delivered to your inbox.</p>
                        <form className="max-w-md mx-auto flex gap-4">
                            <input type="email" placeholder="email@address.com" className="flex-1 bg-[#f8fafc] border border-[#122a46]/20 rounded-full px-6 py-4 text-[#122a46] outline-none focus:border-orange-500 transition-colors" />
                            <button className="bg-orange-600 text-[#122a46] font-bold px-8 py-4 rounded-full hover:bg-orange-500 transition-colors">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
