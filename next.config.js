/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        turbopack: {
            // Silence warn about multiple lockfiles
            root: __dirname,
        },
    },
    poweredByHeader: false, // Hide X-Powered-By: Next.js for security obscuxrity
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN' // Prevent clickjacking
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff' // Prevent MIME sniffing
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' // Disable unused features
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;
