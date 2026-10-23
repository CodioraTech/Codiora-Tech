import '@/styles/globals.css';
import '@/styles/landing.css';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Script from 'next/script';
import { ThemeProvider } from '@/context/ThemeContext';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { LazyMotion, domAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Poppins, DM_Sans, Bricolage_Grotesque } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
});

const dmSans = DM_Sans({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-dm-sans',
});

const bricolage = Bricolage_Grotesque({
    weight: ['700', '800'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-bricolage',
});

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Codiora Tech',
    'alternateName': 'Codiora Technologies',
    'url': 'https://codioratech.com',
    'logo': 'https://codioratech.com/Codiora%20Tech%20logo.png',
    'image': 'https://codioratech.com/images/og-image.png',
    'description': 'Codiora Tech is an elite AI automation and web development agency based in Dhaka, architecting custom web applications, workflow automation, and enterprise platforms.',
    'telephone': '+8809611317892',
    'email': 'contact@codioratech.com',
    'priceRange': '$$',
    'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Gulshan Lake Drive Road',
        'addressLocality': 'Dhaka',
        'postalCode': '1212',
        'addressCountry': 'BD'
    },
    'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 23.8103,
        'longitude': 90.4125
    },
    'contactPoint': [
        {
            '@type': 'ContactPoint',
            'telephone': '+8809611317892',
            'contactType': 'customer service',
            'areaServed': 'Global',
            'availableLanguage': ['English', 'Bengali']
        }
    ],
    'sameAs': [
        'https://www.linkedin.com/company/codioratech',
        'https://x.com/codioratech',
        'https://www.facebook.com/codioratech'
    ],
    'areaServed': [
        { '@type': 'Country', 'name': 'Bangladesh' },
        { '@type': 'Country', 'name': 'United States' },
        { '@type': 'Country', 'name': 'United Kingdom' },
        { '@type': 'AdministrativeArea', 'name': 'Global' }
    ]
};

import CookieConsent from '@/components/CookieConsent';
import ErrorBoundary from '@/components/ErrorBoundary';
import { initErrorMonitoring } from '@/lib/errorMonitoring';

export default function App({ Component, pageProps }) {
    const [mounted, setMounted] = useState(false);
    const [hasConsent, setHasConsent] = useState(false);

    useEffect(() => {
        setMounted(true);
        initErrorMonitoring();
        if (typeof window !== 'undefined') {
            const consent = localStorage.getItem('codiora_cookie_consent');
            if (consent === 'accepted') {
                setHasConsent(true);
            }
            const handleConsentUpdate = () => {
                if (localStorage.getItem('codiora_cookie_consent') === 'accepted') {
                    setHasConsent(true);
                } else {
                    setHasConsent(false);
                }
            };
            window.addEventListener('cookie_consent_updated', handleConsentUpdate);
            return () => window.removeEventListener('cookie_consent_updated', handleConsentUpdate);
        }
    }, []);

    return (
        <ThemeProvider>
            {/* Google Tag Manager - STRICTLY BLOCKED until explicit user consent */}
            {hasConsent && (
                <Script
                    id="gtm-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5WK3CP5W');`
                    }}
                />
            )}

            <div className={`${poppins.variable} ${dmSans.variable} ${bricolage.variable}`}>
                <Layout>
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                        />
                    </Head>
                    <ErrorBoundary>
                        <LazyMotion features={domAnimation} strict={false}>
                            <Component {...pageProps} />
                        </LazyMotion>
                    </ErrorBoundary>
                    {mounted && <SpeedInsights />}
                    <CookieConsent />
                </Layout>
            </div>
        </ThemeProvider>
    );
}
