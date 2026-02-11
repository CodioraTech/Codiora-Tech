import { motion } from 'framer-motion';

export default function FounderMessage() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 text-center shadow-2xl"
                    >
                        {/* Decorative Gradient Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

                        {/* Quote Icon */}
                        <div className="mb-8 flex justify-center">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.0547 15.6521 15.1118 16.9015 14.1206C17.7661 13.4359 18.232 12.6322 18.232 11.4552C18.232 9.84935 15.6083 10.4363 14.3934 9.17604C13.5654 8.31885 13.1903 6.64333 13.9168 5.617C14.7317 4.46467 17.5135 4.31671 19.3323 5.48598C21.6 6.94411 22.0152 10.2721 20.8066 12.8715C19.7946 15.0483 18.0629 16.6358 16.5878 17.9238C15.4294 18.9351 14.017 19.9688 14.017 21ZM5 21L5 18C5 16.0547 6.63512 15.1118 7.88448 14.1206C8.74911 13.4359 9.21503 12.6322 9.21503 11.4552C9.21503 9.84935 6.59128 10.4363 5.37637 9.17604C4.5484 8.31885 4.17325 6.64333 4.89975 5.617C5.71465 4.46467 8.49652 4.31671 10.3153 5.48598C12.583 6.94411 12.9982 10.2721 11.7896 12.8715C10.7776 15.0483 9.04593 16.6358 7.57082 17.9238C6.41235 18.9351 5 19.9688 5 21Z" /></svg>
                            </div>
                        </div>

                        {/* Quote Text */}
                        <blockquote className="text-xl md:text-3xl font-medium text-gray-200 leading-relaxed max-w-3xl mx-auto mb-10">
                            "We started Codiora Tech with one goal — to build <span className="text-white font-semibold">reliable technology</span> that truly helps businesses grow. Not just code, but solutions that matter."
                        </blockquote>

                        {/* Profiles */}
                        <div className="flex flex-col items-center justify-center gap-4">
                            <div className="relative w-16 h-16 rounded-full p-1 bg-gradient-to-br from-gray-700 to-black border border-white/10">
                                <img
                                    src="/images/team/founder.jpg"
                                    alt="Alexander Sterling"
                                    className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = '<span class="flex items-center justify-center w-full h-full text-2xl">👨‍💻</span>';
                                    }}
                                />
                            </div>
                            <div className="text-center">
                                <h4 className="text-lg font-bold text-white">Alexander Sterling</h4>
                                <p className="text-xs font-bold text-cyan-500 uppercase tracking-widest mt-1">Founder & CEO</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
