import Head from 'next/head';

export default function SEO({
    title = 'Codiora Tech | AI Automation & Web Development Agency',
    description = 'Codiora Tech is an elite AI automation and web development agency in Dhaka, architecting custom web applications, workflow automation, and enterprise platforms.',
    canonicalPath = '/',
    ogType = 'website',
    ogImage = '/images/og-image.png',
    breadcrumbs,
    faqSchema,
    articleSchema
}) {
    // Strip query string and trailing slash (except root)
    const cleanPath = (canonicalPath || '/').split('?')[0].replace(/\/+$/, '') || '/';
    const canonicalUrl = `https://codioratech.com${cleanPath === '/' ? '' : cleanPath}`;
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `https://codioratech.com${ogImage}`;

    // Ensure title strictly under 60 chars
    let finalTitle = title;
    if (finalTitle.length > 60) {
        finalTitle = finalTitle.slice(0, 57).trim() + '...';
    }

    // Ensure description strictly under 160 chars
    let finalDesc = description;
    if (finalDesc.length > 160) {
        finalDesc = finalDesc.slice(0, 157).trim() + '...';
    }

    // Generate BreadcrumbList JSON-LD
    let breadcrumbJsonLd = null;
    if (breadcrumbs && breadcrumbs.length > 0) {
        const cleanBreadcrumbs = breadcrumbs
            .map(b => ({
                name: b.name || b.label || '',
                url: b.url || b.href || '/'
            }))
            .filter((b, idx) => !(idx === 0 && (b.name.toLowerCase() === 'home' || b.url === '/')));

        breadcrumbJsonLd = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                {
                    '@type': 'ListItem',
                    'position': 1,
                    'name': 'Home',
                    'item': 'https://codioratech.com'
                },
                ...cleanBreadcrumbs.map((b, idx) => ({
                    '@type': 'ListItem',
                    'position': idx + 2,
                    'name': b.name,
                    'item': b.url.startsWith('http') ? b.url : `https://codioratech.com${b.url}`
                }))
            ]
        };
    }

    return (
        <Head>
            <title>{finalTitle}</title>
            <meta name="description" content={finalDesc} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content="Codiora Tech" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDesc} />
            <meta property="og:image" content={fullOgImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={finalTitle} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@codioratech" />
            <meta name="twitter:creator" content="@codioratech" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDesc} />
            <meta name="twitter:image" content={fullOgImage} />

            {/* BreadcrumbList Schema */}
            {breadcrumbJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
                />
            )}

            {/* FAQPage Schema */}
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            {/* Article Schema */}
            {articleSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                />
            )}
        </Head>
    );
}
