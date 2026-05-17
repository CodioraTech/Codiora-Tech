const TeamCard = ({ name, role, image }) => {
    return (
        <div className="group w-full h-80 [perspective:1000px]">
            <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="bg-white dark:bg-[#122a46]/5 backdrop-blur-md absolute w-full h-full rounded-2xl flex flex-col items-center justify-center p-6 [backface-visibility:hidden] border border-black/5 dark:border-[#122a46]/5 shadow-xl dark:shadow-none transition-colors">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-secondary/30 mb-6 overflow-hidden p-1 shadow-inner relative">
                        {image ? (
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full rounded-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                        ) : null}
                        {/* Fallback (Hidden if image loads, shown on error or if no image) */}
                        <div className={`w-full h-full rounded-full bg-gray-50 dark:bg-[#f8fafc] flex items-center justify-center text-5xl transition-colors ${image ? 'hidden' : ''}`}>
                            👤
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-[#122a46] mb-2 transition-colors">{name}</h3>
                    <p className="text-secondary dark:text-accent font-medium uppercase tracking-wider text-sm">{role}</p>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full bg-gradient-to-br from-accent to-secondary rounded-2xl flex flex-col items-center justify-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                    <h3 className="text-2xl font-bold text-[#122a46] dark:text-dark mb-2 transition-colors">{name}</h3>
                    <p className="text-[#122a46]/90 dark:text-dark/80 font-semibold mb-6 transition-colors">{role}</p>
                    <button className="px-6 py-2 bg-white dark:bg-[#f8fafc] text-gray-900 dark:text-[#122a46] rounded-full hover:bg-gray-100 dark:hover:bg-white dark:hover:text-dark transition-colors font-bold text-sm shadow-md">
                        Connect via LinkedIn
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
