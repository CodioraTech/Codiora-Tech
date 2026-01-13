import { motion } from 'framer-motion';
import Link from 'next/link';

const ServiceCard = ({ title, description, icon, image }) => {
    // Simple slugify function
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    return (
        <Link href={`/services/${slug}`}>
            <motion.div
                className="group relative w-full h-full bg-[#0a0a0a] border border-white/5 rounded-[32px] overflow-hidden cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {/* 1. Top Glassy "Showcase" Area */}
                <div className="relative h-56 w-full overflow-hidden bg-[#111]">
                    {/* Background Image */}
                    {image && (
                        <div className="absolute inset-0 z-0">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                                onError={(e) => e.target.style.display = 'none'}
                            />
                        </div>
                    )}

                    {/* Dynamic Gradient Background/Reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black opacity-30 z-10"></div>

                    {/* Atmospheric Lighting Glare */}
                    <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-b from-white/10 to-transparent -rotate-45 translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:translate-x-1/3 transition-transform duration-700 ease-out z-20"></div>


                </div>

                {/* 2. Bottom Content Area */}
                <div className="p-8 relative min-h-[220px] flex flex-col">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-200 group-hover:to-purple-200 transition-all duration-300">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3 group-hover:text-gray-400 transition-colors">
                        {description}
                    </p>

                    {/* Pill Button - Bottom Aligned */}
                    <div className="mt-auto self-start">
                        <div className="relative overflow-hidden px-6 py-2.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">
                            <span className="relative z-10 text-xs font-bold tracking-widest uppercase">Learn More</span>
                            {/* Button Fill Animation */}
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out -z-0"></div>
                        </div>
                    </div>

                    {/* Bottom Corner Glow */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px] group-hover:bg-cyan-500/10 transition-colors duration-500 pointer-events-none"></div>
                </div>
            </motion.div>
        </Link>
    );
};

export default ServiceCard;
