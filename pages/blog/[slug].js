import Link from 'next/link';
import Image from 'next/image';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

export const blogContent = {
    "scaling-websockets": {
        title: "Scaling Websockets to 1M+ Concurrent Connections",
        category: "System Design",
        date: "Oct 12, 2025",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=1200&auto=format&fit=crop",
        metaDesc: "How we tuned the Linux kernel and clustered Redis pub/sub to scale Node.js WebSockets to 1 million concurrent users.",
        relatedService: {
            name: "DevOps & Cloud Engineering",
            url: "/services/devops-cloud",
            anchorText: "DevOps and Cloud Architecture Services"
        },
        sections: [
            {
                heading: "The Challenge: Breaking the 50k Barrier",
                body: "When building our real-time synchronization engine, we initially hit severe memory bottlenecks at 50,000 active connections. The default Node.js event loop became sluggish, file descriptor limits triggered socket dropouts, and CPU usage climbed to 100%. To scale to enterprise volume, we had to re-engineer every tier of the networking pipeline."
            },
            {
                heading: "Linux Kernel Tuning & File Descriptors",
                body: "A socket in Unix is fundamentally a file descriptor. We raised the system-wide limits via /etc/security/limits.conf, set fs.file-max to 2,097,152, and tuned the TCP keepalive parameters. Modifying net.ipv4.tcp_tw_reuse and adjusting the ephemeral port range ensured rapid socket recycling without connection leakage."
            },
            {
                heading: "Distributed Redis Pub/Sub Cluster",
                body: "Scaling horizontally required decoupling socket connections from application logic. By attaching Socket.io to a clustered Redis Pub/Sub stream, messages published on any regional ingress node propagated instantaneously to all target sockets. For teams designing distributed systems, our DevOps and Cloud Architecture Services help automate these multi-node setups."
            },
            {
                heading: "Production Results",
                body: "Under simulated load testing with distributed artillery instances, our cluster maintained 1,200,000 active WebSocket connections with a median delivery latency under 45ms and zero dropped frames."
            }
        ]
    },
    "redux-vs-zustand": {
        title: "Why We Ditched Redux for Zustand",
        category: "Frontend",
        date: "Oct 08, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
        metaDesc: "How switching from Redux Toolkit to Zustand decreased bundle size by 40% and radically accelerated our frontend development velocity.",
        relatedService: {
            name: "Web Architecture",
            url: "/services/web-architecture",
            anchorText: "Modern Web Architecture & Engineering"
        },
        sections: [
            {
                heading: "The Boilerplate Tax",
                body: "For years, Redux was the default state management choice. However, as our applications scaled to dozens of features, action creators, reducers, and slice definitions added unnecessary cognitive overhead. Small state changes required updates across multiple files, slowing down sprint velocity."
            },
            {
                heading: "Zustand: Minimalist, Atomic State",
                body: "Zustand provides a clean, hook-based API without context providers or boilerplate ceremonies. A store is created in a single call, and components only re-render when their explicitly selected slice changes. This selective subscription model eliminated re-render bottlenecks across our complex dashboard tables."
            },
            {
                heading: "Bundle Size & Performance Gains",
                body: "Replacing Redux Toolkit and related middlewares with Zustand trimmed 42KB of compressed JavaScript from our core bundle. Initial page load times improved markedly. If you are modernizing your frontend stack, explore our Web Architecture Services to build clean, maintainable web apps."
            }
        ]
    },
    "advanced-rag": {
        title: "RAG Pipelines: Beyond the Basics",
        category: "AI Engineering",
        date: "Sep 29, 2025",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
        metaDesc: "Advanced techniques for enterprise RAG: hybrid search, Cohere re-ranking, and metadata filtering to eliminate LLM hallucinations.",
        relatedService: {
            name: "AI Automation & Intelligent Agents",
            url: "/services/ai-automation",
            anchorText: "Custom AI Automation & Agent Services"
        },
        sections: [
            {
                heading: "The Problem with Naive Vector Search",
                body: "Standard cosine similarity search on chunked embeddings frequently returns documents that are semantically close but factually irrelevant. In healthcare and fintech applications, a hallucinated answer can cause critical regulatory failures."
            },
            {
                heading: "Hybrid Search & Cross-Encoder Re-Ranking",
                body: "We implement a dual-stage retrieval engine combining sparse lexical search (BM25) with dense vector embeddings (OpenAI text-embedding-3-large). Top candidate chunks are passed through a cross-encoder re-ranker, evaluating query context against every passage simultaneously before passing it into the model prompt."
            },
            {
                heading: "Deterministic Guardrails in Production",
                body: "By attaching deterministic verification pipelines and strict context grounding, our systems reduce hallucination rates to 0%. Learn more about how we build production-ready neural workflows with our Custom AI Automation Services."
            }
        ]
    },
    "k8s-edge": {
        title: "Kubernetes at the Edge",
        category: "DevOps",
        date: "Sep 15, 2025",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1200&auto=format&fit=crop",
        metaDesc: "Deploying lightweight K3s clusters to edge devices for ultra low-latency compute and decentralized infrastructure management.",
        relatedService: {
            name: "DevOps & Cloud Engineering",
            url: "/services/devops-cloud",
            anchorText: "DevOps & Cloud Infrastructure"
        },
        sections: [
            {
                heading: "Why Move to the Edge?",
                body: "Centralized cloud regions introduce latency and bandwidth costs for telemetry-heavy applications. Running localized compute at the edge enables instant decision-making even during regional ISP disconnects."
            },
            {
                heading: "Lightweight Orchestration with K3s",
                body: "Standard Kubernetes distributions consume excessive memory for single-board computers. We leverage K3s, packaging essential control-plane components into a binary under 100MB, coupled with automated GitOps deployments using ArgoCD."
            },
            {
                heading: "Reliable Remote Synchronizations",
                body: "Edge nodes execute local transactions offline and reconcile with central database clusters using optimistic concurrency control upon reconnecting. Explore our DevOps & Cloud Services to implement resilient edge solutions."
            }
        ]
    },
    "async-culture": {
        title: "The Death of the Daily Standup",
        category: "Culture",
        date: "Sep 02, 2025",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
        metaDesc: "Why synchronous status meetings break developer focus and how async written memos doubled our engineering velocity.",
        relatedService: {
            name: "Our Engineering Process",
            url: "/process",
            anchorText: "Codiora Tech Engineering Methodology"
        },
        sections: [
            {
                heading: "The Interruption Economy",
                body: "Gathering 8 engineers for a 30-minute morning standup fractures deep work blocks. By the time context is re-established, the morning is lost to task switching."
            },
            {
                heading: "The Power of Written Communication",
                body: "We replaced verbal status updates with concise written memos inside Linear and Slack. Developers document what was shipped, blockers, and next targets asynchronously before starting their day."
            },
            {
                heading: "Protecting Deep Work Sprints",
                body: "Async coordination fosters deliberate thinking, transparent archives, and respect for global time zones. Discover how we manage client deliverables in our Engineering Methodology & Delivery Process."
            }
        ]
    }
};

export default function BlogPost({ post, slug }) {
    if (!post) {
        return (
            <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center text-[#122a46]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                    <Link href="/blog" className="text-teal-600 hover:underline">Back to Blog</Link>
                </div>
            </div>
        );
    }

    const breadcrumbs = [
        { name: 'Blog', url: '/blog' },
        { name: post.title, url: `/blog/${slug}` }
    ];

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': post.title,
        'image': post.image,
        'datePublished': '2025-10-12',
        'author': {
            '@type': 'Organization',
            'name': 'Codiora Tech',
            'url': 'https://codioratech.com'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'Codiora Tech',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://codioratech.com/Codiora%20Tech%20logo.png'
            }
        },
        'description': post.metaDesc
    };

    return (
        <div className="bg-[#f8fafc] min-h-screen text-[#122a46] pt-32 sm:pt-36 md:pt-40">
            <SEO
                title={`${post.title} | Codiora Tech`}
                description={post.metaDesc}
                canonicalPath={`/blog/${slug}`}
                ogType="article"
                ogImage={post.image}
                breadcrumbs={breadcrumbs}
                articleSchema={articleSchema}
            />

            <Breadcrumbs items={breadcrumbs} />

            <article className="max-w-4xl mx-auto px-6 py-8">
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 text-xs font-bold uppercase tracking-widest">
                            {post.category}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                            {post.date} • {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-[#122a46] tracking-tight leading-tight mb-6">
                        {post.title}
                    </h1>

                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-[#122a46]/10 bg-slate-100 shadow-md">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(max-width: 896px) 100vw, 896px"
                            className="object-cover"
                            priority
                        />
                    </div>
                </header>

                <div className="prose max-w-none space-y-10 text-slate-700 text-lg leading-relaxed">
                    {post.sections.map((section, idx) => (
                        <section key={idx} className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#122a46] tracking-tight">
                                {section.heading}
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                {section.body}
                            </p>
                        </section>
                    ))}

                    {/* Internal link to related service (Requirement 7) */}
                    {post.relatedService && (
                        <div className="my-12 p-8 rounded-2xl bg-teal-500/5 border border-teal-500/20">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-teal-600 mb-2">
                                Relevant Engineering Expertise
                            </h3>
                            <p className="text-slate-600 text-base mb-4">
                                Need help implementing these architectures in your own infrastructure? Check out our specialized services.
                            </p>
                            <Link
                                href={post.relatedService.url}
                                className="inline-flex items-center gap-2 font-bold text-[#122a46] hover:text-teal-600 transition-colors"
                            >
                                <span>{post.relatedService.anchorText}</span>
                                <span>→</span>
                            </Link>
                        </div>
                    )}
                </div>

                <footer className="mt-16 pt-8 border-t border-[#122a46]/10 flex justify-between items-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors"
                    >
                        <span>←</span>
                        <span>Back to all engineering articles</span>
                    </Link>
                    <Link
                        href="/contact"
                        className="px-6 py-2.5 rounded-full bg-[#122a46] text-white text-sm font-bold hover:bg-teal-600 transition-colors"
                    >
                        Contact Our Engineers
                    </Link>
                </footer>
            </article>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = Object.keys(blogContent).map((slug) => ({
        params: { slug }
    }));
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const post = blogContent[params.slug] || null;
    return {
        props: {
            post,
            slug: params.slug
        }
    };
}
