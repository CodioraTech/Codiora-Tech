export const servicesData = {
    "web-architecture": {
        title: "Web Architecture",
        icon: "💎",
        description: "We build high-performance, scalable web architectures that serve as the backbone of your digital presence. Using modern frameworks like Next.js and React, we ensure your application is fast, secure, and ready for future growth.",
        features: ["Microservices Architecture", "Serverless Functions", "Real-time Data Streaming", "SEO Optimized Structure"],
        benefits: ["99.99% Uptime", "Lightning Fast Load Times", "Global Scalability", "Future-Proof Tech Stack"],
        subServices: [
            {
                id: "custom-web-applications",
                name: "Custom Web Applications",
                desc: "Tailor-made solutions solving specific business problems.",
                details: {
                    whatWeDo: "We design and develop bespoke web applications tailored to your unique business requirements. From internal tools to customer-facing portals, we build software that fits your workflow perfectly.",
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
                id: "saas-platforms",
                name: "SaaS Platforms",
                desc: "Multi-tenant architectures for scalable software-as-a-service products.",
                details: {
                    whatWeDo: "We build robust multi-tenant SaaS platforms that are secure, scalable, and easy to manage. We handle subscription billing, user management, and data isolation.",
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
        icon: "🚀",
        description: "We craft native-quality mobile experiences that users love. Whether it's iOS or Android, our cross-platform solutions ensure you reach your audience effectively without compromising on performance or design.",
        features: ["Offline-First Architecture", "Biometric Authentication", "Push Notification Systems", "Native Module Integration"],
        benefits: ["Unified Codebase", "Faster Time to Market", "Consistent User Experience", "Reduced Maintenance Costs"],
        subServices: [
            {
                id: "ios-development",
                name: "iOS App Development",
                desc: "Premium applications optimized for the Apple ecosystem.",
                details: {
                    whatWeDo: "Developing high-fidelity iOS applications using Swift or React Native that leverage the full power of Apple devices.",
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
                desc: "Material design compatible apps for the vast Android market.",
                details: {
                    whatWeDo: "Building robust Android applications that run smoothly across the fragmented device landscape.",
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
                desc: "One codebase, native performance on both platforms.",
                details: {
                    whatWeDo: "Using Flutter or React Native to build apps that run on both iOS and Android from a single codebase, saving time and budget.",
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
        icon: "✨",
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
        icon: "☁️",
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
    "ai-automation": {
        title: "AI & Automation",
        icon: "🧠",
        description: "Unlock the power of artificial intelligence. Smart algorithms and automated workflows.",
        features: ["Custom Neural Networks", "OpenAI / LLM Integration", "Predictive Analytics", "Data Mining"],
        benefits: ["24/7 Operational Efficiency", "Data-Driven Decision Making", "Scalable Customer Support", "Competitive Advantage"],
        subServices: [
            {
                id: "ml-models",
                name: "Machine Learning Models",
                desc: "Predictive analytics and data classification engines.",
                details: {
                    whatWeDo: "Training custom models to recognize patterns, predict outcomes, or classify data.",
                    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Jupyter", "Pandas", "NumPy", "Hugging Face"],
                    process: [
                        { title: "Data Prep", desc: "Cleaning and labeling datasets." },
                        { title: "Model Selection", desc: "Choosing the right algorithm." },
                        { title: "Training", desc: "Iterative training and validation." },
                        { title: "Deployment", desc: "Serving the model via API." }
                    ]
                }
            },
            {
                id: "nlp-chatbots",
                name: "NLP Chatbots",
                desc: "Intelligent customer support agents.",
                details: {
                    whatWeDo: "Building smart chatbots that understand natural language and context.",
                    technologies: ["OpenAI API", "LangChain", "Dialogflow", "Pinecone", "Rasa", "Microsoft Bot Framework", "Wit.ai"],
                    process: [
                        { title: "Scope", desc: "Defining bot personality and knowledge base." },
                        { title: "Integration", desc: "Connecting to CRM availability." },
                        { title: "Prompt Engineering", desc: "Optimizing responses." },
                        { title: "Testing", desc: "Refining conversation flow." }
                    ]
                }
            }
        ]
    },
    "growth-marketing": {
        title: "Growth Marketing",
        icon: "📈",
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
                        { title: "Analysis", desc: "Implementing winners." }
                    ]
                }
            }
        ]
    }
};
