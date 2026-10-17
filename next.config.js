/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    turbopack: {
        root: __dirname,
    },
    poweredByHeader: false, // Hide X-Powered-By: Next.js for security obscurity
    trailingSlash: false,
    productionBrowserSourceMaps: false,
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'www.codioratech.com',
                    },
                ],
                destination: 'https://codioratech.com/:path*',
                permanent: true,
            },
            {
                source: '/career',
                destination: '/careers',
                permanent: true,
            },
            {
                source: '/internships',
                destination: '/internship',
                permanent: true,
            },
            {
                source: '/service',
                destination: '/services',
                permanent: true,
            },
            {
                source: '/project',
                destination: '/portfolio',
                permanent: true,
            },
            {
                source: '/projects',
                destination: '/portfolio',
                permanent: true,
            },
        ];
    },
    async headers() {
        const cspHeader = `
            default-src 'self';
            script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://challenges.cloudflare.com https://*.sentry.io;
            style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
            img-src 'self' data: https: blob:;
            font-src 'self' https://fonts.gstatic.com data:;
            connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://api.emailjs.com https://*.sentry.io https://api.web3forms.com;
            frame-src 'self' https://challenges.cloudflare.com;
            frame-ancestors 'self';
            object-src 'none';
            base-uri 'self';
            form-action 'self' https://api.emailjs.com;
        `.replace(/\s{2,}/g, ' ').trim();

        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: cspHeader,
                    },
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
                    },
                ],
            },
            {
                source: '/images/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    }
                ]
            },
            {
                source: '/_next/static/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable'
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;
