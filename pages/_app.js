import '@/styles/globals.css';
import '@/styles/landing.css';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { ThemeProvider } from '@/context/ThemeContext';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Layout>
                <Head>
                    <title>Codiora Tech - Innovating Your Digital Future</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/Codiora Tech logo.png" />
                </Head>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
