import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import WhyCodiora from '@/components/WhyCodiora';

export default function WhyUs() {
    return (
        <>
            <SEO
                title="Why Codiora Tech | Engineering & AI Partner"
                description="Discover why high-growth startups and enterprises choose Codiora Tech for software engineering, velocity, and enterprise AI automation."
                canonicalPath="/why-us"
            />
            <div className="pt-24 min-h-screen bg-white dark:bg-[#f8fafc]">
                <div className="container mx-auto px-6 pt-6">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Why Us', href: '/why-us' }]} />
                </div>
                <WhyCodiora />
            </div>
        </>
    );
}

