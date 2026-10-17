import dynamic from 'next/dynamic';
import Navbar from './Navbar';
import Footer from './Footer';

const LiveChat = dynamic(() => import('./LiveChat'), { ssr: false });

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-5 focus:py-3 focus:bg-teal-600 focus:text-white focus:font-bold focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-teal-300 transition-all"
            >
                Skip to main content
            </a>
            <Navbar />
            <main id="main-content" className="flex-grow">
                {children}
            </main>
            <LiveChat />
            <Footer />
        </div>
    );
};

export default Layout;
