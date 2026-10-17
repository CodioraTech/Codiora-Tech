import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import PricingModels from '@/components/PricingModels';

export default function Pricing() {
    return (
        <>
            <SEO
                title="Flexible Pricing Models | Codiora Tech"
                description="Explore transparent, flexible pricing models tailored to your software engineering, web development, and AI project needs."
                canonicalPath="/pricing"
            />
            <div className="pt-32 min-h-screen bg-gray-50 dark:bg-[#f8fafc]">
                <div className="container mx-auto px-6">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing' }]} />
                </div>
                <PricingModels />
            </div>
        </>
    );
}
