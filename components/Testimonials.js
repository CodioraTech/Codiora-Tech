import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const testimonials = [
    {
        quote: "The 3D innovation on our site is mind-blowing. Our engagement increased by 200%.",
        author: "Alex Rivera",
        role: "CTO, FinTech Global",
        logo: "AR",
        src: "https://randomuser.me/api/portraits/men/32.jpg",
        color: "from-blue-500 to-cyan-500",
        shadow: "shadow-cyan-500/20"
    },
    {
        quote: "Professional, reliable, and cutting-edge. Highly recommend for enterprise solutions.",
        author: "Sarah Wu",
        role: "Director of Product, Nexus AI",
        logo: "SW",
        src: "https://randomuser.me/api/portraits/women/44.jpg",
        color: "from-purple-500 to-pink-500",
        shadow: "shadow-purple-500/20"
    },
    {
        quote: "No matter what situation I'm in, they're always there for me! Truly a partner, not a vendor.",
        author: "James Peterson",
        role: "CEO, LogiChain",
        logo: "JP",
        src: "https://randomuser.me/api/portraits/men/86.jpg",
        color: "from-orange-500 to-yellow-500",
        shadow: "shadow-orange-500/20"
    },
    {
        quote: "They are fast, efficient, completely resourceful and most importantly, trustworthy!",
        author: "Maria Gonzalez",
        role: "VP Engineering, HealthPlus",
        logo: "MG",
        src: "https://randomuser.me/api/portraits/women/68.jpg",
        color: "from-green-500 to-emerald-500",
        shadow: "shadow-green-500/20"
    },
    {
        quote: "The redesign completely transformed our brand perception. We look like a billion dollar company now.",
        author: "David Chen",
        role: "Founder, Stealth Startup",
        logo: "DC",
        src: "https://randomuser.me/api/portraits/men/11.jpg",
        color: "from-red-500 to-rose-500",
        shadow: "shadow-red-500/20"
    }
];

const Card = ({ i, title, description, src, role, color, shadow, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0 font-sans">
            <motion.div
                style={{
                    scale,
                    backgroundColor: '#050505',
                    top: `calc(-5vh + ${i * 25}px)`
                }}
                className={`flex flex-col items-center justify-center relative w-[90vw] md:w-[900px] h-[500px] rounded-[2.5rem] p-8 md:p-16 border border-[#122a46]/10 origin-top shadow-2xl ${shadow}`}
            >
                {/* Background Ambient Glow */}
                <div className={`absolute top-[-50%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-b ${color} opacity-10 blur-[100px] pointer-events-none`} />

                {/* Floating Quote Icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-10 shadow-lg shadow-black/50 relative z-10`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="opacity-90">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
                    </svg>
                </div>

                {/* Quote Text */}
                <h2 className="text-2xl md:text-4xl font-medium leading-normal text-[#122a46]/90 text-center mb-12 max-w-2xl relative z-10 tracking-tight">
                    "{title}"
                </h2>

                {/* Author Info */}
                <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="relative">
                        <div className={`w-14 h-14 rounded-full p-0.5 bg-gradient-to-br ${color}`}>
                            <div className="w-full h-full rounded-full bg-[#f8fafc] overflow-hidden relative">
                                {/* Use src for image or fallback to initials */}
                                {src.includes('http') ? (
                                    <img src={src} alt={description} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-[#122a46]/10 flex items-center justify-center text-[#122a46] font-bold">{src}</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-bold text-[#122a46] tracking-wide">{description}</div>
                        <div className={`text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r ${color} uppercase tracking-widest mt-0.5`}>
                            {role}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function Testimonials() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <div ref={container} className="bg-[#f8fafc] relative min-h-[300vh]">
            {/* Stacking Cards Container */}
            <div className="relative z-10">
                {testimonials.map((project, i) => {
                    const targetScale = 1 - ((testimonials.length - i) * 0.05);
                    return (
                        <Card
                            key={i}
                            i={i}
                            {...project}
                            title={project.quote}
                            description={project.author}
                            src={project.src || project.logo}
                            role={project.role}
                            progress={scrollYProgress}
                            range={[i * .25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </div>
    );
}
