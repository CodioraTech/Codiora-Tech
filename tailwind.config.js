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
                primary: '#122a46', // Navy
                accent: '#14b8a6',  // Teal
                highlight: '#f59e0b', // Amber
                secondary: '#475569', // Slate
                dark: '#f8fafc', // Mapped to Light Slate for bg-dark
                glass: 'rgba(18, 42, 70, 0.05)',
                'glass-hover': 'rgba(18, 42, 70, 0.1)',
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
        themes: ["light"],
    },
}
