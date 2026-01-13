import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            className={`
                relative h-10 w-32 rounded-full flex items-center transition-all duration-300 shadow-lg overflow-hidden shrink-0
                ${isDark
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-400'
                    : 'bg-gray-200'
                }
            `}
        >
            {/* Text Label */}
            <span className={`absolute left-4 text-xs font-black tracking-widest transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-400'}`}>
                {isDark ? 'NIGHT' : 'DAY'}
            </span>

            {/* Slider Knob */}
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                className={`
                    absolute h-8 w-8 bg-white rounded-full shadow-md flex items-center justify-center
                    ${isDark ? 'right-1' : 'left-1'}
                `}
            >
                {isDark ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                )}
            </motion.div>
        </button>
    );
};

export default ThemeToggle;
