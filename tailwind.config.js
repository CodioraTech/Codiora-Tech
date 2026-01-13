/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#0F172A', // Deep Slate
                accent: '#00E5FF',  // Neon Cyan
                highlight: '#FF2E63', // Neon Pink/Red for bold accents
                secondary: '#6C63FF', // Soft Purple
                dark: '#050505',
                glass: 'rgba(255, 255, 255, 0.05)',
                'glass-hover': 'rgba(255, 255, 255, 0.1)',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #00E5FF 0deg, #6C63FF 180deg, #00E5FF 360deg)',
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["dark", "luxury"],
    },
}
