import { useRef } from "react";
import { motion } from "framer-motion";

const MASTER_TECH_DATA = [
    // --- WEB & CORE ---
    { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "React.js", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/white" },
    { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "AWS", logo: "data:image/svg+xml;utf8," + encodeURIComponent('<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Amazon Web Services</title><path d="M11.892 11.7c.607 0 1.135-.205 1.583-.615.448-.41.672-.942.672-1.597 0-.655-.224-1.187-.672-1.597-.448-.41-.976-.615-1.583-.615-.607 0-1.135.205-1.583.615-.448.41-.672.942-.672 1.597 0 .655.224 1.187.672 1.597.448.41.976.615 1.583.615zm6.552-4.086h1.637l-4.502 9.076h-1.637l-1.352-2.73-1.637 2.73h-1.637l4.502-9.076h1.637l1.352 2.73 1.638-2.73zm-6.552 5.04c-1.164 0-2.136-.37-2.916-1.11-.78-.738-1.17-1.675-1.17-2.81 0-1.135.39-2.072 1.17-2.81.78-.74 1.752-1.11 2.916-1.11 1.164 0 2.136.37 2.916 1.11.78.738 1.17 1.675 1.17 2.81 0 1.135-.39 2.072-1.17 2.81-.78.74-1.752 1.11-2.916 1.11zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S16.627 0 12 0z" fill="white"/></svg>') },
    { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "Redis", logo: "https://cdn.simpleicons.org/redis/DC382D" },
    { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "GraphQL", logo: "https://cdn.simpleicons.org/graphql/E10098" },
    { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Prisma", logo: "https://cdn.simpleicons.org/prisma/white" },
    { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", logo: "https://cdn.simpleicons.org/css3/1572B6" },

    // --- CLOUD & DEVOPS ---
    { name: "Google Cloud", logo: "https://cdn.simpleicons.org/googlecloud/4285F4" },
    { name: "Azure", logo: "https://cdn.simpleicons.org/microsoftazure/0078D4" },
    { name: "AWS Cognito", logo: "https://cdn.simpleicons.org/amazonaws/232F3E" },
    { name: "DynamoDB", logo: "https://cdn.simpleicons.org/amazondynamodb/4053D6" },
    { name: "Terraform", logo: "https://cdn.simpleicons.org/terraform/7B42BC" },
    { name: "Jenkins", logo: "https://cdn.simpleicons.org/jenkins/D24939" },
    { name: "GitHub Actions", logo: "https://cdn.simpleicons.org/githubactions/2088FF" },
    { name: "GitLab CI", logo: "https://cdn.simpleicons.org/gitlab/FC6D26" },
    { name: "CircleCI", logo: "https://cdn.simpleicons.org/circleci/white" },
    { name: "Travis CI", logo: "https://cdn.simpleicons.org/travisci/3EAAAF" },
    { name: "ArgoCD", logo: "https://cdn.simpleicons.org/argo/EF7B4D" },
    { name: "Bitbucket", logo: "https://cdn.simpleicons.org/bitbucket/0052CC" },
    { name: "Bitbucket Pipelines", logo: "https://cdn.simpleicons.org/bitbucket/0052CC" },
    { name: "VMware", logo: "https://cdn.simpleicons.org/vmware/607078" },
    { name: "Golang", logo: "https://cdn.simpleicons.org/go/00ADD8" },
    { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes/326CE5" },
    { name: "CloudEndure", logo: "https://cdn.simpleicons.org/amazonaws/232F3E" },
    { name: "Snowball", logo: "https://cdn.simpleicons.org/amazonaws/232F3E" },
    { name: "Spinnaker", logo: "https://cdn.simpleicons.org/spinnaker/119DFA" },
    { name: "Database Migration Service", logo: "https://cdn.simpleicons.org/amazonaws/232F3E" },

    // --- SAAS & BACKEND ---
    { name: "Stripe API", logo: "https://cdn.simpleicons.org/stripe/008CDD" },
    { name: "Auth0", logo: "https://cdn.simpleicons.org/auth0/EB5424" },
    { name: "Apollo Server", logo: "https://cdn.simpleicons.org/apollographql/311C87" },
    { name: "Webpack", logo: "https://cdn.simpleicons.org/webpack/8DD6F9" },
    { name: "SendGrid", logo: "https://cdn.simpleicons.org/sendgrid/F22F46" },
    { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "Swagger/OpenAPI", logo: "https://cdn.simpleicons.org/swagger/85EA2D" },
    { name: "Postman", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
    { name: "JWT", logo: "https://cdn.simpleicons.org/jsonwebtokens/white" },
    { name: "OAuth2", logo: "https://cdn.simpleicons.org/auth0/white" },

    // --- SPECIAL FIXES ---
    { name: "REST", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
    { name: "Service Workers", logo: "https://cdn.simpleicons.org/pwa/5A0FC8" },
    { name: "gRPC", logo: "https://cdn.simpleicons.org/grpc/white" },
    { name: "Lighthouse", logo: "https://cdn.simpleicons.org/lighthouse/F44B21" },
    { name: "Web Manifest", logo: "https://cdn.simpleicons.org/pwa/5A0FC8" },
    { name: "Push API", logo: "https://cdn.simpleicons.org/pwa/5A0FC8" },
    { name: "IndexedDB", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "Principle", logo: "https://cdn.simpleicons.org/sketch/F7B500" },

    // --- MOBILE ---
    { name: "Swift", logo: "https://cdn.simpleicons.org/swift/F05138" },
    { name: "React Native", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Kotlin", logo: "https://cdn.simpleicons.org/kotlin/7F52FF" },
    { name: "Android Studio", logo: "https://cdn.simpleicons.org/androidstudio/3DDC84" },
    { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/FFCA28" },
    { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter/02569B" },
    { name: "Dart", logo: "https://cdn.simpleicons.org/dart/0175C2" },
    { name: "Expo", logo: "https://cdn.simpleicons.org/expo/white" },
    { name: "Jetpack Compose", logo: "https://cdn.simpleicons.org/jetpackcompose/4285F4" },
    { name: "Gradle", logo: "https://cdn.simpleicons.org/gradle/02303A" },
    { name: "Xcode", logo: "https://cdn.simpleicons.org/xcode/1575F9" },
    { name: "TestFlight", logo: "https://cdn.simpleicons.org/testflight/00ADD8" },
    { name: "SwiftUI", logo: "https://cdn.simpleicons.org/swift/F05138" },
    { name: "Combine", logo: "https://cdn.simpleicons.org/swift/F05138" },
    { name: "CoreData", logo: "https://cdn.simpleicons.org/apple/white" },
    { name: "ARKit", logo: "https://cdn.simpleicons.org/apple/white" },
    { name: "Coroutines", logo: "https://cdn.simpleicons.org/kotlin/7F52FF" },
    { name: "Retrofit", logo: "https://cdn.simpleicons.org/square/white" },
    { name: "NativeBase", logo: "https://cdn.simpleicons.org/react/61DAFB" },

    // --- AI & DATA ---
    { name: "TensorFlow", logo: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
    { name: "PyTorch", logo: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
    { name: "OpenAI API", logo: "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>') },
    { name: "Scikit-learn", logo: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
    { name: "Keras", logo: "https://cdn.simpleicons.org/keras/D00000" },
    { name: "Pandas", logo: "https://cdn.simpleicons.org/pandas/150458" },
    { name: "NumPy", logo: "https://cdn.simpleicons.org/numpy/013243" },
    { name: "Jupyter", logo: "https://cdn.simpleicons.org/jupyter/F37626" },
    { name: "Hugging Face", logo: "https://cdn.simpleicons.org/huggingface/FFD21E" },
    { name: "LangChain", logo: "https://cdn.simpleicons.org/langchain/white" },
    { name: "Pinecone", logo: "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 8 200 200" width="200" height="200"><g fill="white"><path d="M157.9 144.2c-2.3 0-5.3-1.2-8-2.6-3-1.6-9.1-5.1-13.6-7.8-4.5-2.7-11-6.5-14.4-8.5-4.7-2.7-8.7-5-15.6-9-6.9-4-15.3-8.8-18.7-10.8-3.3-1.9-8.5-5-11.4-6.8-9.4-5.6-21.6-12.2-22.1-12.7-.2-.2-.5-2.6-.7-5.3-.3-4.8-.9-6.4-3.5-9.3-1.6-1.8-3-3.2-3.1-3.2-.2 0-2.3 1.1-4.8 2.5-12.1 6.8-14.7 8.5-18.3 12-2.1 2-4.1 3.5-4.4 3.4-.3-.1 1.2-1.6 3.4-3.2 2.2-1.7 8.3-5.2 13.6-7.9 5.3-2.6 13.5-7.3 18.2-10.4 4.7-3.1 9.3-5.7 10.3-5.7.9 0 4.1-1.7 7-3.8 6.4-4.7 12.1-8 23.3-13.6 5.8-2.9 10.5-5.5 10.5-5.9 0-.4 2.2-1.8 4.9-3.2 7.7-4 13.2-7.5 13.6-8.7.2-.6 2.3-1.8 4.6-2.6 2.4-.8 4.3-1.6 4.3-1.8 0-.2 4-2.5 9-5.1 4.9-2.6 10-5 11.2-5.3 1.3-.3 2.7-.4 3.2-.3 1.5.3 17 8.7 17.5 9.5.2.3.9.5 1.5.5.6 0 5-2 9.8-4.4 4.8-2.5 9.2-4.2 9.7-3.9.5.3 6.9 3.6 14.1 7.2 11.4 5.7 13.5 6.4 16.7 5.7 6.1-1.4 16.4 1.3 22.1 5.8 2.3 1.8 4.2 2.7 4.2 2.1 0-.6 3.5 1.1 7.7 3.7 4.2 2.6 12 7.8 17.2 11.6l9.6 6.9-4.8 2.4c-2.6 1.3-8.8 4.8-13.7 7.7-4.9 2.9-10.5 5.9-12.4 6.7-1.9.8-5.7 2.9-8.4 4.7-2.7 1.8-7.9 4.7-11.4 6.4-3.6 1.7-10.5 5.5-15.4 8.5-4.9 3-10.6 6.2-12.7 7.2-2.1.9-5.1 2.9-6.8 4.4-1.6 1.5-3.6 2.7-4.4 2.7-.8 0-3.3 1.1-5.6 2.5-3.8 2.3-4.3 2.5-5.3 2.5-1 0-2.8-.2-4.2-.6zm-59.5-2.2c1.7-1 5.4-3.3 8.3-5.2 2.8-1.9 8.2-5 12-7 3.8-1.9 9.1-5 11.8-6.9 2.6-1.8 6.4-4 8.4-4.8 4.3-1.7 13.3-6.9 14.4-8.3.4-.6 1.8-1.3 2.9-1.7 1.2-.4 3.9-1.8 6-3.2 2.1-1.3 5.3-2.8 7-3.2 3.1-.8 6.5-1.1 14.5-1.1 9.3 0 10.7.2 13 1.6 2.9 1.8 11.9 9.9 14.2 12.8 1.1 1.4 2.3 2.5 2.5 2.5.3 0 3.3 2.2 6.8 4.9 3.4 2.7 6.6 5.8 7.1 6.8.5 1.1 1 1.6 1.3 1.2.3-.4 2.3.9 4.5 2.7 7.2 6.2 14.6 15.6 13.8 17.6-.7 1.7-8.9 9-11 9.8-.7.2-4.8 2.6-9.1 5.3-8.1 5-21.7 12.6-28.7 16.1-3 1.5-6.8 3.5-8.5 4.5-3.7 2.2-19.3 9.4-21.5 9.9-1.1.2-5.7 2.7-10.1 5.4-4.5 2.7-8.9 4.9-9.8 4.8-1 0-7.8 3.2-15.2 7.2-11.2 6-13.8 7.2-16 7.2-1.4 0-4.6 1.5-7.1 3.3-6.9 5-11.5 6.7-18.2 6.7-7.7 0-14.4-2.7-22.1-8.9-3.9-3.2-7.5-5.8-7.9-5.8-.4 0-2.4-1.4-4.4-3.1-26.6-22.6-43.5-30.8-60.6-29.3-5.1.5-9.3.2-9.3-.6 0-1.8 5.7-8.1 9.1-10 1.2-.7 3.3-3.4 4.5-6 1.3-2.6 3.7-6 5.3-7.5 3.3-3.2 12-7.7 25.1-13 13.6-5.5 18.6-8.5 25.9-15.1 3.3-3 6.9-5.5 8-5.5 1.1 0 3.5-1.2 5.3-2.6 3.2-2.3 13.4-6.3 16.5-6.4 1.2 0 3.9-1.2 5.9-2.5 2-1.4 4.1-2.4 4.6-2.3.6.1 2.8-1 4.9-2.3z"/></g></svg>') },
    { name: "Rasa", logo: "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800" fill="white" stroke="none"><rect width="800" height="800" fill="#554F9D"/><path d="M528 589H670V212H212V212V589H212V589H528zM212 212V589H330V212h82V589H670V212H528zM430V327H54V589H430V327z" fill="white"/></svg>') },
    { name: "Microsoft Bot Framework", logo: "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="none" stroke="#0078D4" stroke-width="4"/><path d="M35 12v22H29V36H20V31H13V12h22zM33 14H15v15H22v3h6V14h5z" fill="#0078D4"/><circle cx="20" cy="23" r="2.5" fill="#0078D4"/><circle cx="28" cy="23" r="2.5" fill="#0078D4"/></svg>') },
    { name: "Wit.ai", logo: "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800"><path d="M210 210h380v380H210z" fill="white"/></svg>'), invert: true }, // Verified box from reading 5661 and 5604 snippet

    // --- DESIGN & GROWTH ---
    { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Framer", logo: "https://cdn.simpleicons.org/framer/white" },
    { name: "Three.js", logo: "https://cdn.simpleicons.org/threedotjs/white" },
    { name: "Miro", logo: "https://cdn.simpleicons.org/miro/050038" },
    { name: "Sketch", logo: "https://cdn.simpleicons.org/sketch/F7B500" },
    { name: "Adobe XD", logo: "https://cdn.simpleicons.org/adobexd/FF61F6" },
    { name: "InVision", logo: "https://cdn.simpleicons.org/invision/FF3366" },
    { name: "Typeform", logo: "https://cdn.simpleicons.org/typeform/262627" },
    { name: "Dscout", logo: "https://cdn.simpleicons.org/surveymonkey/00BF6F" },
    { name: "UserTesting.com", logo: "https://cdn.simpleicons.org/selenium/43B02A" },
    { name: "Lookback", logo: "https://cdn.simpleicons.org/loom/625DF5" },
    { name: "Google Analytics", logo: "https://cdn.simpleicons.org/googleanalytics/E37400" },
    { name: "Hotjar", logo: "data:image/svg+xml;utf8," + encodeURIComponent('<svg width="250" height="250" viewBox="0 0 256 254" xmlns="http://www.w3.org/2000/svg"><path d="M81.8 165.4c-1.9 12.3-6 23.5-12.3 33.3-5.8 9.2-13.3 16.5-22.2 21.9-9.3 5.6-20.4 8.6-31.4 8.6v24.7c30.6-.1 59.8-15.7 77-41.6 12.8-19.3 18.5-42.8 16.2-65.8l-27.3 18.9z" fill="#F46036"/><path d="M93.8 112.1l-23.5-16.5c.6-5.2 2.1-10.2 4.4-14.8 3.2-6.2 7.4-11.5 12.5-15.9 6.2-5.4 13.3-9.5 21-12.1 7.7-2.6 15.8-3.9 24.1-3.9 8.8 0 17.5 1.5 25.7 4.5 8.2 3 15.9 7.2 22.7 12.5 6.8 5.3 12.6 11.6 17 18.7 4.4 7.1 7.5 15 9.1 23.2 1.7 8.6 2.2 17.4 1.6 26.2v11.6h24.8v-8.1c0-13.1-1.8-26.1-5.3-38.5A117.7 117.7 0 0 0 202.1 63c-10.1-12.7-22.3-23.4-36.1-31.7-13.8-8.3-29.4-14-45.6-16.6-14.8-2.4-29.9-2.5-44.8-.4-13.6 1.9-26.8 6.2-38.9 12.3-12.1 6.1-23 14.1-32 23.7-9 10-11.5 21.4-20.8 33.9-6.3 12.5-10.6 26.1-12.6 40.1l34.9 24.3-3.2-1.6H13.3v24.8h45.6L63 145.2l3.5 1.7 27.3-18.9v-15.9l82-.2c-.3-8.7-3.1-17.1-8-88 0-10.9-.7-23.9-2.1-13-5.6-24.6-17.5-34-3-12.9-9.7-23.9-8.2-33.3 3 .8 6.8-8.7 9.8-16.6 10.1l-13.3-9.2c-4-2.8-8.5-4.9-13.3-6.1-2.6-.6-5.2-.9-7.9-.9zM222.8 163.8v-33h24.8v32.9c0 9.9-1.9 19.7-5.6 28.8-3.7 9.1-9 17.4-15.7 24-6.7 6.6-14.8 11.8-23.7 15.3-8.9 3.5-18.4 5.2-28.1 5.2v-24.7c17.5 0 33.1-10.5 39.9-26.8 3.3-7.7 5.1-16 5.1-24.4l-.1-7.3zM109.4 163.8c0 3.7.8 7.4 2.3 10.8 1.5 3.4 3.7 6.5 6.4 8.9 8.2 7.4 20.8 7.5 29.1 0c5.8-5.2 8.9-12.6 8.8-20.5v-49.4h-24.8v50.1c0 3.3-1.3 6.4-3.7 8.8-1.2 1.2-2.6 2.1-4.1 2.7-1.5.6-3.1.9-4.7.9-3.1 0-6-1.2-8.2-3.4-2.2-2.2-3.4-5.2-3.4-8.3v-50.8h-24.8v49.4zM165.3 114.4v50c0 3.3-1.3 6.4-3.7 8.8-4.6 4.6-12.3 4.6-16.9 0-2.2-2.2-3.4-5.2-3.4-8.3v-50.8h-24.8v49.4c0 8 3.1 15.6 8.7 21.2 5.6 5.6 13.2 8.7 21.2 8.7 8 0 15.6-3.1 21.2-8.7 5.6-5.6 8.7-13.2 8.7-21.2v-49.4h-24.8z" fill="#F46036"/></svg>'), invert: true },
    { name: "Ahrefs", logo: "data:image/svg+xml;utf8," + encodeURIComponent('<svg width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M4 2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="#0061fd"/><path d="M12.1 10.6h8.7V14h3.7v11.8h-3.7v-7.9h-5.2v7.9h-3.5V10.6zm8.7 1.6h-5.2v2.3h5.2v-2.3z" fill="white"/></svg>') },
    { name: "SEMrush", logo: "data:image/svg+xml;utf8," + encodeURIComponent('<svg width="192px" height="192px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><path d="M33 73c-6 10-8 27 5 39 12 11 38 19 86 19 28 0 45-20 45-36 0-14-11-23-41-23-4 0-11 1-11 5 0 2 2 4 10 4 23 0 28 5 28 13 0 11-17 19-35 19-35 0-66-8-76-21-3-4-2-9 4-15 15-15 35-13 46-5 2 2 5 1 5-2 0-7-14-14-29-14-15 0-26 5-37 17z" fill="#EC5629"/></svg>') },
    { name: "Schema.org", logo: "data:image/svg+xml;utf8," + encodeURIComponent('<svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg"><text x="10" y="70" font-family="Arial" font-weight="bold" font-size="60" fill="white">schema.org</text></svg>'), invert: true },
    { name: "Screaming Frog", logo: "data:image/svg+xml;utf8," + encodeURIComponent('<svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" rx="40" fill="#75b53a"/><path d="M128 64c-35 0-64 29-64 64s29 64 64 64 64-29 64-64-29-64-64-64zm0 110c-25 0-46-21-46-46s21-46 46-46 46 21 46 46-21 46-46 46z" fill="white"/></svg>') },
    { name: "Moz", logo: "data:image/svg+xml;utf8," + encodeURIComponent('<svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg"><text x="5" y="32" font-family="Arial" font-weight="bold" font-size="30" fill="white">MOZ</text></svg>'), invert: true },
    { name: "Crazy Egg", logo: "data:image/svg+xml;utf8," + encodeURIComponent('<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 8C15 8 8 15 8 24s7 16 16 16 16-7 16-16S33 8 24 8zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z" fill="white"/></svg>'), invert: true },
    { name: "VWO", logo: "data:image/svg+xml;utf8," + encodeURIComponent('<svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg"><text x="10" y="35" font-family="Arial" font-weight="bold" font-size="30" fill="white">VWO</text></svg>'), invert: true },
    { name: "Unbounce", logo: "data:image/svg+xml;utf8," + encodeURIComponent('<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 6c-10 0-18 8-18 18s8 18 18 18 18-8 18-18S34 6 24 6zm0 32c-7.7 0-14-6.3-14-14S16.3 10 24 10s14 6.3 14 14-6.3 14-14 14z" fill="white"/></svg>'), invert: true },
    { name: "Optimizely", logo: "data:image/svg+xml;utf8," + encodeURIComponent('<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 4C12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20S35.1 4 24 4zm0 36c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" fill="white"/></svg>'), invert: true },
    { name: "Google Optimize", logo: "data:image/svg+xml;utf8," + encodeURIComponent('<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4zm0 36c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z" fill="white"/></svg>'), invert: true },
    { name: "Google Search Console", logo: "https://cdn.simpleicons.org/google/4285F4" },
    { name: "Axure", logo: "https://cdn.simpleicons.org/sketch/F7B500" },
    { name: "Marvel", logo: "https://cdn.simpleicons.org/marvelapp/white" },
    { name: "Redux", logo: "https://cdn.simpleicons.org/redux/764ABC" }
];

export default function TechMarquee({ technologies = [] }) {
    const isDefault = !technologies || technologies.length === 0;

    // Split items into two unique rows for the Home page
    const row1Names = [
        "React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS",
        "JavaScript", "AWS", "Google Cloud", "Azure", "Docker",
        "Kubernetes", "PostgreSQL", "MongoDB", "MySQL", "Redis",
        "Prisma", "GraphQL", "Auth0", "Stripe API", "Terraform",
        "DynamoDB", "Golang", "AWS Cognito", "Apollo Server", "REST",
        "gRPC", "OAuth2", "Webpack", "Service Workers", "CircleCI",
        "Travis CI", "ArgoCD", "Bitbucket Pipelines", "SendGrid", "VMware",
        "Snowball", "CloudEndure", "Spinnaker", "Database Migration Service",
        "Pinecone", "Rasa", "Microsoft Bot Framework", "Wit.ai"
    ];

    const row2Names = [
        "Flutter", "React Native", "Swift", "Kotlin", "Dart", "Expo",
        "Python", "TensorFlow", "PyTorch", "OpenAI API",
        "Figma", "Framer", "Three.js", "Android Studio", "Firebase",
        "Jenkins", "GitHub Actions", "GitLab CI",
        "Postman", "Swagger/OpenAPI", "JWT",
        "Scikit-learn", "Keras", "Pandas", "NumPy", "Jupyter",
        "Hugging Face", "LangChain", "Miro", "Sketch", "Adobe XD",
        "InVision", "Axure", "Marvel", "Typeform", "Dscout", "UserTesting.com",
        "Lookback", "Google Analytics", "Hotjar", "Ahrefs", "SEMrush",
        "Google Search Console", "Redux", "Jetpack Compose", "Gradle", "Principle",
        "Schema.org", "Screaming Frog", "Moz", "Crazy Egg", "VWO", "Unbounce",
        "Optimizely", "Google Optimize"
    ];

    // Helper to map names to data objects
    const mapTechs = (names) => names.map(techName => {
        const nameStr = typeof techName === 'string' ? techName : techName.name;
        const found = MASTER_TECH_DATA.find(t => t.name.toLowerCase() === nameStr.toLowerCase());
        return found || {
            name: nameStr,
            logo: `https://cdn.simpleicons.org/${nameStr.replace(/\s+/g, '').toLowerCase()}` // Fallback
        };
    });

    const row1 = mapTechs(isDefault ? row1Names : technologies);
    const row2 = mapTechs(isDefault ? row2Names : []);

    return (
        <section className="relative w-full overflow-hidden bg-[#050505] py-10">
            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 h-full w-20 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-20 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            <div className="flex flex-col gap-6">
                {/* Row 1: Left Stream */}
                <MarqueeRow items={row1} direction="left" speed={20} />

                {/* Row 2: Right Stream (only if default) */}
                {isDefault && <MarqueeRow items={row2} direction="right" speed={20} />}
            </div>
        </section>
    );
}

function MarqueeRow({ items, direction = "left", speed = 40 }) {
    const content = [...items, ...items];

    return (
        <div className="relative flex w-full overflow-hidden">
            <motion.div
                className="flex gap-4 md:gap-8 flex-nowrap"
                initial={{ x: direction === "left" ? "0%" : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : "0%" }}
                transition={{
                    ease: "linear",
                    duration: speed + (items.length * 1.0),
                    repeat: Infinity,
                }}
            >
                {content.map((tech, idx) => (
                    <TechCard key={`${tech.name}-${idx}`} tech={tech} />
                ))}
            </motion.div>
        </div>
    );
}

function TechCard({ tech }) {
    return (
        <div className="
            flex items-center gap-2 md:gap-3 
            px-4 py-2 md:px-6 md:py-3 
            bg-white/5 border border-white/10 rounded-full 
            backdrop-blur-sm hover:bg-white/10 transition-colors
            whitespace-nowrap shrink-0
        ">
            <div className={`w-5 h-5 md:w-6 md:h-6 flex items-center justify-center ${tech.invert ? 'filter brightness-0 invert' : ''}`}>
                <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain opacity-90"
                    onError={(e) => { e.target.style.display = 'none'; }}
                    loading="lazy"
                />
            </div>
            <span className="text-sm md:text-base font-medium text-white/90">
                {tech.name}
            </span>
        </div>
    );
}
