const fs = require('fs');
const path = require('path');
const { servicesData } = require('../lib/services');

const today = new Date().toISOString().split('T')[0];

const mainRoutes = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/about', priority: '0.8', changefreq: 'monthly' },
    { loc: '/services', priority: '0.9', changefreq: 'weekly' },
    { loc: '/portfolio', priority: '0.9', changefreq: 'weekly' },
    { loc: '/contact', priority: '0.9', changefreq: 'monthly' },
    { loc: '/process', priority: '0.8', changefreq: 'monthly' },
    { loc: '/platform', priority: '0.7', changefreq: 'monthly' },
    { loc: '/expertise', priority: '0.8', changefreq: 'monthly' },
    { loc: '/partners', priority: '0.7', changefreq: 'monthly' },
    { loc: '/history', priority: '0.6', changefreq: 'monthly' },
    { loc: '/team', priority: '0.7', changefreq: 'monthly' },
    { loc: '/culture', priority: '0.7', changefreq: 'monthly' },
    { loc: '/careers', priority: '0.8', changefreq: 'weekly' },
    { loc: '/testimonials', priority: '0.8', changefreq: 'monthly' },
    { loc: '/blog', priority: '0.9', changefreq: 'weekly' },
    { loc: '/codecamp', priority: '0.7', changefreq: 'monthly' },
    { loc: '/internship', priority: '0.8', changefreq: 'weekly' },
    { loc: '/faq', priority: '0.8', changefreq: 'monthly' },
    { loc: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { loc: '/leadership', priority: '0.7', changefreq: 'monthly' },
    { loc: '/why-us', priority: '0.8', changefreq: 'monthly' },
    { loc: '/skills', priority: '0.8', changefreq: 'monthly' },
    { loc: '/partner-program', priority: '0.7', changefreq: 'monthly' },
    { loc: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
    { loc: '/terms-conditions', priority: '0.5', changefreq: 'yearly' },
    { loc: '/refund-policy', priority: '0.5', changefreq: 'yearly' },
    { loc: '/sitemap', priority: '0.6', changefreq: 'monthly' }
];

// Portfolio Slugs
const portfolioSlugs = [
    'neonmarket',
    'medibot-ai',
    'explorer-nature',
    'orbital-agency',
    'smartsync',
    'autosupport'
].map(slug => ({
    loc: `/portfolio/${slug}`,
    priority: '0.8',
    changefreq: 'monthly'
}));

// Services Slugs & Sub-services
const serviceRoutes = [];
Object.entries(servicesData).forEach(([slug, data]) => {
    serviceRoutes.push({
        loc: `/services/${slug}`,
        priority: '0.9',
        changefreq: 'weekly'
    });
    if (data.subServices) {
        data.subServices.forEach(sub => {
            serviceRoutes.push({
                loc: `/services/${slug}/${sub.id}`,
                priority: '0.7',
                changefreq: 'monthly'
            });
        });
    }
});

// Blog Posts
const blogRoutes = [
    'scaling-websockets',
    'redux-vs-zustand',
    'advanced-rag',
    'k8s-edge',
    'async-culture'
].map(slug => ({
    loc: `/blog/${slug}`,
    priority: '0.7',
    changefreq: 'monthly'
}));

// Career Slugs (exact match with pages/careers/[slug].js getStaticPaths)
const careerRoutes = [
    'ai-integrated-full-stack-engineer',
    'senior-full-stack-engineer',
    'product-designer',
    'product-designer-ui-ux',
    'growth-marketing-lead',
    'ai-research-scientist'
].map(slug => ({
    loc: `/careers/${slug}`,
    priority: '0.7',
    changefreq: 'monthly'
}));

// Internship Slugs (exact match with pages/internship/[slug].js getStaticPaths)
const internshipRoutes = [
    'frontend-engineering',
    'backend-systems',
    'ai-data-science',
    'devops-engineer',
    'full-stack-developer'
].map(slug => ({
    loc: `/internship/${slug}`,
    priority: '0.7',
    changefreq: 'monthly'
}));

const allUrls = [
    ...mainRoutes,
    ...serviceRoutes,
    ...portfolioSlugs,
    ...blogRoutes,
    ...careerRoutes,
    ...internshipRoutes
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(u => `  <url>
    <loc>https://codioratech.com${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), xml.trim());
console.log(`Generated public/sitemap.xml with ${allUrls.length} routes.`);
