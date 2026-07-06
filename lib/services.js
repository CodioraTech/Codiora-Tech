export const servicesData = {
    "ai-automation": {
        title: "AI Automation & Intelligent Agents",
        icon: "ai",
        description: "Unlock 24/7 operational efficiency with Custom AI Automation Services for Businesses. We build custom neural agents, workflow automation, and Large Language Model (LLM) integrations that replace manual toil with instant, secure, and context-aware execution.",
        features: ["Custom Knowledge-Base Chatbot Development", "LLM Fine-tuning & RAG Pipelines", "Custom AI automation workflows", "Custom Ai chatbot creation"],
        benefits: ["Reduce Support Tickets by 80%", "24/7 Instant Response Time", "Automated Repetitive Tasks", "Scalable Without Adding Headcount"],
        subServices: [
            {
                id: "intelligent-chatbots",
                name: "Intelligent Knowledge-Base Chatbots",
                desc: "Deploy context-aware conversational bots trained on your internal product documentation or support databases with Custom Knowledge-Base Chatbot Development.",
                details: {
                    whatWeDo: "We design, build, and deploy smart chatbots that understand context and retrieve answers from your custom knowledge bases. We specialize in Custom Ai chatbot creation, ensuring zero hallucinations and highly accurate, context-aware responses.",
                    technologies: ["OpenAI API", "Claude API", "LangChain", "Pinecone", "ChromaDB", "Python", "FastAPI", "React.js"],
                    process: [
                        { title: "Knowledge Auditing", desc: "We review and sanitize your documentation, FAQs, and data logs." },
                        { title: "RAG Pipeline Setup", desc: "Setting up vector databases and ingestion pipelines." },
                        { title: "Agent Calibration", desc: "Optimizing prompts and guardrails to eliminate hallucinations." },
                        { title: "CRM & Chat Integration", desc: "Deploying the bot to Slack, WhatsApp, or your website." }
                    ]
                }
            },
            {
                id: "workflow-automation",
                name: "Workflow & Agentic Automation",
                desc: "Integrate LLM agents to automate CRM updates, email triage, and complex business workflows with Custom AI automation.",
                details: {
                    whatWeDo: "We replace manual, multi-step administrative workflows with autonomous AI agents. These custom AI automation systems monitor email inboxes, categorize requests, extract key details, update CRMs, and trigger notifications based on your custom business logic.",
                    technologies: ["LangGraph", "CrewAI", "Python", "Node.js", "AWS Lambda", "HubSpot API", "Salesforce API"],
                    process: [
                        { title: "Process Mapping", desc: "We map out your manual workflows step-by-step to identify bottlenecks." },
                        { title: "Agent Construction", desc: "Developing specialized AI agents for specific tasks." },
                        { title: "Ecosystem Connection", desc: "Connecting agents to your existing software tools via APIs." },
                        { title: "Load & Security Testing", desc: "Verifying secure data processing and robust execution." }
                    ]
                }
            }
        ]
    },
    "web-scraping": {
        title: "Data Extraction & Web Scraping",
        icon: "marketing",
        description: "High-scale, proxy-backed data crawlers built by a premier B2B Web Scraping Agency. We bypass CAPTCHAs and Cloudflare protection to supply clean B2B lead lists and real-time market intelligence straight to your pipelines.",
        features: ["Anti-Bot & CAPTCHA Bypassing", "High-Volume Residential Proxy Pools", "Custom target-based lead generation", "Scheduled Scraping Schedulers"],
        benefits: ["Millions of Data Points Daily", "Clean, Deduplicated B2B Leads", "Real-Time Competitor Insights", "Zero Manual Copy-Pasting"],
        subServices: [
            {
                id: "lead-generation",
                name: "Automated B2B Lead Scraping",
                desc: "Harvest business directories, maps, and social platforms to compile targeted client databases using Custom target-based lead generation.",
                details: {
                    whatWeDo: "We build custom scraper networks designed for Custom target-based lead generation. We extract verified emails, phone numbers, social handles, and company sizes, delivering structured leads directly into your CRM.",
                    technologies: ["Python", "Scrapy", "Puppeteer", "Residential Proxies", "MongoDB", "PostgreSQL", "Google Sheets API"],
                    process: [
                        { title: "Target Selection", desc: "Defining the target sources and query parameters." },
                        { title: "Crawler Engineering", desc: "Writing resilient scraping code optimized for speed and stealth." },
                        { title: "Deduplication & Verification", desc: "Cleaning, verifying emails, and formatting data." },
                        { title: "Pipeline Integration", desc: "Automating lead delivery straight into your sales pipeline." }
                    ]
                }
            },
            {
                id: "market-intelligence",
                name: "Real-Time Competitor & Price Crawling",
                desc: "Track retail, e-commerce, or real estate pricing trends automatically with our B2B Web Scraping Agency solutions.",
                details: {
                    whatWeDo: "We build scheduled crawlers that monitor competitor pricing, inventory levels, and product catalogs. This intelligence lets you dynamically adjust pricing and track market trends in real-time.",
                    technologies: ["Playwright", "Selenium", "Redis", "Celery", "AWS Fargate", "PostgreSQL"],
                    process: [
                        { title: "Source Analysis", desc: "Analyzing competitor website structures and load patterns." },
                        { title: "Dynamic Crawler Build", desc: "Engineering bots that handle JS-heavy pages and infinite scrolls." },
                        { title: "Scheduler Setup", desc: "Configuring hourly, daily, or weekly scraping tasks." },
                        { title: "Alerts Configuration", desc: "Setting up real-time alerts for price drops or inventory spikes." }
                    ]
                }
            }
        ]
    },
    "enterprise-apps": {
        title: "Full-Stack Enterprise Applications",
        icon: "web",
        description: "High-performance, secure web applications, custom SaaS platforms, and enterprise dashboards. We write scalable code for Custom web Development with tenant isolation, ensuring a platform ready for millions of users.",
        features: ["Multi-Tenant Architecture", "custom business website", "multi saas based e-commerce portals", "CI/CD & Cloud Infrastructure"],
        benefits: ["Scalability Without Tech Debt", "Stripe Subscription Billing Built-In", "Highest Level Security Protocols", "Optimized Page Performance"],
        subServices: [
            {
                id: "custom-dashboards",
                name: "Scalable Enterprise Dashboards",
                desc: "Custom analytics and data visualization portals tailored to your metrics, built with professional Custom web Development.",
                details: {
                    whatWeDo: "We design and build clean, fast, and interactive dashboards to visualize your complex business data. Using React/Next.js and charting libraries, we deliver real-time data insights that empower decision makers to build a custom business website.",
                    technologies: ["React.js", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Recharts", "Docker"],
                    process: [
                        { title: "UI Mockups", desc: "Creating visual blueprints focusing on data clarity." },
                        { title: "DB Architecture", desc: "Designing high-performance schema relationships." },
                        { title: "Data Integration", desc: "Wiring database queries and APIs with cached states." },
                        { title: "Optimization", desc: "Minimizing bundle sizes and database query times." }
                    ]
                }
            },
            {
                id: "saas-platforms",
                name: "Multi-Tenant SaaS Platforms",
                desc: "Launch your next product with subscription billing, security, and user management, or a multi saas based e-commerce framework.",
                details: {
                    whatWeDo: "We develop SaaS architectures with strict tenant isolation, customizable user roles (RBAC), subscription tier setups, Stripe billing integration, and multi saas based e-commerce systems.",
                    technologies: ["Next.js", "Node.js", "Stripe API", "AWS Cognito", "Docker", "Kubernetes", "Terraform"],
                    process: [
                        { title: "Architecture Design", desc: "Structuring secure tenant data partitioning." },
                        { title: "Subscription Logic", desc: "Integrating Stripe or payment gateways with webhooks." },
                        { title: "Access Control", desc: "Implementing roles, permissions, and security guardrails." },
                        { title: "Auto-Scaling", desc: "Packaging with Docker and setting up auto-scalable cloud nodes." }
                    ]
                }
            }
        ]
    },
    "web-architecture": {
        title: "Web Architecture",
        icon: "web",
        description: "We build high-performance, scalable web architectures that serve as the backbone of your digital presence. From a custom news portal website to a custom business website using Next.js and React, we ensure speed and security.",
        features: ["Microservices Architecture", "custom news portal website development", "Real-time Data Streaming", "SEO Optimized Structure"],
        benefits: ["99.99% Uptime", "Lightning Fast Load Times", "Global Scalability", "Future-Proof Tech Stack"],
        subServices: [
            {
                id: "custom-web-applications",
                name: "Custom Web Applications",
                desc: "Tailor-made solutions solving specific business problems, including a custom business website.",
                details: {
                    whatWeDo: "We design and develop bespoke web applications and custom business websites tailored to your unique requirements. From internal tools to customer-facing portals, we build software that fits your workflow perfectly.",
                    technologies: ["React.js", "Next.js", "Node.js", "MongoDB", "MySQL", "AWS", "PostgreSQL", "Redis", "TypeScript", "Tailwind CSS", "GraphQL", "Docker", "Prisma"],
                    process: [
                        { title: "Discovery", desc: "We analyze your business needs and define technical requirements." },
                        { title: "Architecture", desc: "Designing a scalable and secure system blueprint." },
                        { title: "Development", desc: "Agile sprints with regular updates and feedback loops." },
                        { title: "Deployment", desc: "CI/CD pipelines for smooth, zero-downtime launches." }
                    ]
                }
            },
            {
                id: "saas-platforms-legacy",
                name: "SaaS Platforms",
                desc: "Multi-tenant architectures for scalable software-as-a-service products, like a custom news portal website.",
                details: {
                    whatWeDo: "We build robust multi-tenant SaaS platforms and custom news portal website structures that are secure, scalable, and easy to manage. We handle subscription billing, user management, and data isolation.",
                    technologies: ["Next.js", "AWS Cognito", "Stripe API", "Docker", "Kubernetes", "Auth0", "Terraform", "DynamoDB", "Golang", "Redis", "SendGrid"],
                    process: [
                        { title: "MVP Strategy", desc: "Defining the core value proposition for rapid market entry." },
                        { title: "Tenant Architecture", desc: "Ensuring strict data isolation and security between users." },
                        { title: "Subscription Logic", desc: "Implementing recurring billing and tiered access control." },
                        { title: "Scaling", desc: "Optimizing database and backend for high concurrency." }
                    ]
                }
            },
            {
                id: "pwa-development",
                name: "Progressive Web Apps (PWA)",
                desc: "Web apps that feel native, with offline capabilities and installability.",
                details: {
                    whatWeDo: "We transform web experiences into app-like interfaces that work offline, send push notifications, and can be installed on the home screen without an app store.",
                    technologies: ["Service Workers", "Web Manifest", "IndexedDB", "React", "Workbox", "Lighthouse", "Push API", "Cache API", "Webpack"],
                    process: [
                        { title: "Audit", desc: "Analyzing current web assets for PWA potential." },
                        { title: "Service Worker Setup", desc: "Implementing caching strategies for offline access." },
                        { title: "App Shell Design", desc: "Creating a native-like navigation and UI feel." },
                        { title: "Testing", desc: "Verifying performance across various network conditions." }
                    ]
                }
            },
            {
                id: "api-development",
                name: "API Development & Integration",
                desc: "Robust RESTful and GraphQL APIs connecting your systems.",
                details: {
                    whatWeDo: "We build secure and documented APIs that serve as the connective tissue for your digital ecosystem. We also integrate third-party APIs like payment gateways, CRMs, and maps.",
                    technologies: ["GraphQL", "REST", "Node.js", "Python", "Swagger/OpenAPI", "Apollo Server", "Postman", "JWT", "OAuth2", "gRPC"],
                    process: [
                        { title: "Contract Design", desc: "Defining API endpoints and data structures." },
                        { title: "Security Implementation", desc: "OAuth2, JWT, and rate limiting setup." },
                        { title: "Development", desc: "Building efficient resolvers and controllers." },
                        { title: "Documentation", desc: "Generating interactive API docs for developers." }
                    ]
                }
            }
        ]
    },
    "mobile-innovation": {
        title: "Mobile Innovation",
        icon: "mobile",
        description: "We craft native-quality mobile experiences and custom mobile application frameworks that users love. Whether it's iOS or Android, our cross-platform solutions ensure you reach your audience effectively without compromising on performance.",
        features: ["custom mobile application development", "Biometric Authentication", "Push Notification Systems", "Native Module Integration"],
        benefits: ["Unified Codebase", "Faster Time to Market", "Consistent User Experience", "Reduced Maintenance Costs"],
        subServices: [
            {
                id: "ios-development",
                name: "iOS App Development",
                desc: "Premium applications optimized for the Apple ecosystem, delivering a custom mobile application experience.",
                details: {
                    whatWeDo: "Developing high-fidelity iOS applications using Swift or React Native that leverage the full power of Apple devices to build a premium custom mobile application.",
                    technologies: ["Swift", "SwiftUI", "React Native", "Xcode", "CocoaPods", "TestFlight", "CoreData", "ARKit", "Combine"],
                    process: [
                        { title: "Design Guidelines", desc: "Adhering to Apple's Human Interface Guidelines." },
                        { title: "Core Logic", desc: "Building performant native features." },
                        { title: "Beta Testing", desc: "TestFlight distribution for feedback." },
                        { title: "App Store Launch", desc: "Handling the review and submission process." }
                    ]
                }
            },
            {
                id: "android-development",
                name: "Android App Development",
                desc: "Material design compatible apps for the Android market, ensuring a custom mobile application standard.",
                details: {
                    whatWeDo: "Building robust Android applications that run smoothly across the fragmented device landscape to deliver a high-performance custom mobile application.",
                    technologies: ["Kotlin", "Jetpack Compose", "React Native", "Android Studio", "Gradle", "Firebase", "Room DB", "Coroutines", "Retrofit"],
                    process: [
                        { title: "Device Strategy", desc: "Targeting key devices and OS versions." },
                        { title: "UI Implementation", desc: "Material Design implementation." },
                        { title: "Optimization", desc: "Memory and battery usage optimization." },
                        { title: "Play Store Release", desc: "Release management and rollouts." }
                    ]
                }
            },
            {
                id: "cross-platform",
                name: "Cross-Platform Dev",
                desc: "One codebase, native performance on both platforms for any custom mobile application project.",
                details: {
                    whatWeDo: "Using Flutter or React Native to build apps that run on both iOS and Android from a single codebase, saving time and budget on custom mobile application deployments.",
                    technologies: ["React Native", "Flutter", "Dart", "JavaScript", "Expo", "Redux", "MobX", "NativeBase"],
                    process: [
                        { title: "Code Architecture", desc: "Setting up a shared logic layer." },
                        { title: "Platform Adaptation", desc: "Tweaking UI for platform-specific feel." },
                        { title: "plugin Integration", desc: "Accessing native device features." },
                        { title: "Unified Testing", desc: "QA across both platforms simultaneously." }
                    ]
                }
            }
        ]
    },
    "immersive-ui-ux": {
        title: "Immersive UI/UX",
        icon: "design",
        description: "Design is not just about looks; it's about how it works. We create intuitive, engaging, and accessible interfaces.",
        features: ["User Journey Mapping", "Interactive Prototyping", "Motion Design System", "WCAG Accessibility Compliance"],
        benefits: ["Higher Conversion Rates", "Increased User Retention", "Stronger Brand Identity", "Reduced Support Costs"],
        subServices: [
            {
                id: "user-research",
                name: "User Research & Personas",
                desc: "Deep understanding of your target audience and their needs.",
                details: {
                    whatWeDo: "We conduct interviews, surveys, and usability tests to understand real user pain points.",
                    technologies: ["Hotjar", "Google Analytics", "UserTesting.com", "Miro", "Typeform", "Dscout", "Lookback"],
                    process: [
                        { title: "Data Collection", desc: "Gathering qualitative and quantitative data." },
                        { title: "Analysis", desc: "Identifying patterns and insights." },
                        { title: "Persona Creation", desc: "Defining archetypes of your users." },
                        { title: "Journey Mapping", desc: "Visualizing user steps to conversion." }
                    ]
                }
            },
            {
                id: "wireframing",
                name: "Wireframing & Prototyping",
                desc: "Visualizing structure before code.",
                details: {
                    whatWeDo: "Creating low and high fidelity blueprints of the application to validate flow and logic.",
                    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Axure", "Marvel", "Principle", "Framer"],
                    process: [
                        { title: "Low-Fi Sketches", desc: "Rapid concept iteration." },
                        { title: "Wireframes", desc: "Structural layout design." },
                        { title: "Interactive Prototype", desc: "Clickable models for testing." },
                        { title: "Validation", desc: "Stakeholder review and approval." }
                    ]
                }
            }
        ]
    },
    "devops-cloud": {
        title: "DevOps & Cloud",
        icon: "devops",
        description: "We bridge the gap between development and operations. ensuring secure, scalable, and automated infrastructure.",
        features: ["Auto-Scaling Configurations", "Serverless Computing", "Disaster Recovery Planning", "Real-time Monitoring"],
        benefits: ["Zero Downtime Deployments", "Optimized Cloud Costs", "Enhanced Security Posture", "Global Content Delivery"],
        subServices: [
            {
                id: "cloud-migration",
                name: "Cloud Migration",
                desc: "Seamlessly moving legacy systems to AWS, Azure, or GCP.",
                details: {
                    whatWeDo: "Safely transporting your applications and databases to the cloud with minimal downtime.",
                    technologies: ["AWS", "Azure", "Google Cloud", "Database Migration Service", "VMware", "CloudEndure", "Snowball"],
                    process: [
                        { title: "Assessment", desc: "Auditing current infrastructure." },
                        { title: "Planning", desc: "Choosing the 'Rehost, Replatform, or Refactor' strategy." },
                        { title: "Execution", desc: "Moving data and services." },
                        { title: "Optimization", desc: "Fine-tuning for the cloud environment." }
                    ]
                }
            },
            {
                id: "ci-cd-pipelines",
                name: "CI/CD Pipeline Setup",
                desc: "Automated testing and deployment.",
                details: {
                    whatWeDo: "Building automated pipelines that build, test, and deploy your code every time you save.",
                    technologies: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "Travis CI", "ArgoCD", "Spinnaker", "Bitbucket Pipelines"],
                    process: [
                        { title: "Source Control", desc: "Git workflow optimization." },
                        { title: "Build Automation", desc: "Compiling code automatically." },
                        { title: "Automated Testing", desc: "Running unit and integration tests." },
                        { title: "Deployment", desc: "Pushing to staging and production." }
                    ]
                }
            }
        ]
    },
    "growth-marketing": {
        title: "Growth Marketing",
        icon: "marketing",
        description: "Data-driven marketing strategies ensuring real ROI.",
        features: ["A/B Testing Frameworks", "Funnel Analysis", "Content Strategy", "Social Media Integration"],
        benefits: ["Higher ROI", "Lower Customer Acquisition Cost", "Measurable Growth", "Brand Authority"],
        subServices: [
            {
                id: "technical-seo",
                name: "Technical SEO",
                desc: "Optimizing site structure for visibility.",
                details: {
                    whatWeDo: "Ensuring search engines can crawl, index, and understand your website perfectly.",
                    technologies: ["Google Search Console", "Ahrefs", "SEMrush", "Schema.org", "Screaming Frog", "Moz", "Yoast", "PageSpeed Insights"],
                    process: [
                        { title: "Audit", desc: "Finding broken links and speed issues." },
                        { title: "Optimization", desc: "Fixing core web vitals." },
                        { title: "Schema Markup", desc: "Adding rich snippets." },
                        { title: "Monitoring", desc: "Tracking keyword rankings." }
                    ]
                }
            },
            {
                id: "cro",
                name: "Conversion Rate Optimization",
                desc: "Turning visitors into customers.",
                details: {
                    whatWeDo: "Systematically testing and improving your website to increase the percentage of users who convert.",
                    technologies: ["Google Optimize", "Hotjar", "Crazy Egg", "VWO", "Unbounce", "Optimizely", "Mixpanel"],
                    process: [
                        { title: "Hypothesis", desc: "Identifying friction points." },
                        { title: "Test Design", desc: "Creating A/B variants." },
                        { title: "Experiment", desc: "Running the test." },
                        { title: "Automation Calibration", desc: "Applying the highest efficiency variants." }
                    ]
                }
            }
        ]
    }
};
