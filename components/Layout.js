import dynamic from 'next/dynamic';
import Footer from './Footer';
import LiveChat from './LiveChat';

const Navbar = dynamic(() => import('./Navbar'), { ssr: false });

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <LiveChat />
            <Footer />
        </div>
    );
};


export default Layout;
