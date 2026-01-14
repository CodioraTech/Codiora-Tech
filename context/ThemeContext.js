import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // Always default to 'dark'
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        // Force 'dark' class on mount and never remove it
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setTheme('dark');
    }, []);

    // Toggle function that does nothing, just in case it's called somewhere
    const toggleTheme = () => {
        console.log("Theme is locked to dark mode.");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
