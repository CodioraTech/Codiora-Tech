import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        text: "Codiora Tech transformed our digital presence. Incredible attention to detail!",
        author: "Jane Doe",
        role: "CEO, TechCorp",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
    },
    {
        id: 2,
        text: "The 3D innovation on our site is mind-blowing. Our engagement increased by 200%.",
        author: "John Smith",
        role: "Marketing Director, FutureScale",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    {
        id: 3,
        text: "Professional, reliable, and cutting-edge. Highly recommend for enterprise solutions.",
        author: "Robert Brown",
        role: "CTO, GlobalSystems",
        image: "https://i.pravatar.cc/150?u=a04258114e29026302d"
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(c => (c + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full max-w-6xl mx-auto relative px-4 flex flex-col items-center">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between w-full max-w-7xl px-4 pointer-events-none z-0 opacity-20">
                <div className="text-9xl font-serif text-gray-300 dark:text-white/10 hidden md:block">“</div>
                <div className="text-9xl font-serif text-gray-300 dark:text-white/10 hidden md:block">”</div>
            </div>

            <div className="relative w-full overflow-hidden h-[400px] flex items-center justify-center">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 max-w-4xl w-full bg-white dark:bg-white/5 backdrop-blur-md border border-gray-100 dark:border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-xl dark:shadow-2xl shadow-gray-200/50 dark:shadow-black/50"
                    >
                        {/* Decorative Quote Icon */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.896 14.321 16.062 14.929 15.5C15.537 14.938 16.488 14.656 17.783 14.656L19.517 14.656L19.517 9.844L17.783 9.844C15.751 9.844 14.735 9.006 14.735 7.328L14.735 3L22.017 3L22.017 12.188C22.017 13.91 21.688 15.394 21.031 16.641C20.374 17.887 19.462 18.847 18.295 19.523C17.129 20.2 15.703 20.693 14.017 21ZM4.017 21L4.017 18C4.017 16.896 4.321 16.062 4.929 15.5C5.537 14.938 6.488 14.656 7.783 14.656L9.517 14.656L9.517 9.844L7.783 9.844C5.751 9.844 4.735 9.006 4.735 7.328L4.735 3L12.017 3L12.017 12.188C12.017 13.91 11.688 15.394 11.031 16.641C10.374 17.887 9.462 18.847 8.295 19.523C7.129 20.2 5.703 20.693 4.017 21Z" /></svg>
                        </div>

                        <p className="text-2xl md:text-4xl font-light text-gray-700 dark:text-white leading-relaxed mb-8 mt-4">
                            "{testimonials[current].text}"
                        </p>

                        <div className="flex flex-col items-center gap-3">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500/50 p-1">
                                <img src={testimonials[current].image} alt={testimonials[current].author} className="w-full h-full object-cover rounded-full" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
                                    {testimonials[current].author}
                                </h4>
                                <p className="text-cyan-400 text-sm font-medium tracking-wide">
                                    {testimonials[current].role}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex gap-2 mt-8">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`transition-all duration-300 rounded-full ${idx === current ? 'w-8 h-2 bg-cyan-500' : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
