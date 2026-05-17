import Head from 'next/head';
import PricingModels from '@/components/PricingModels';

export default function Pricing() {
    return (
        <>
            <Head>
                <title>Codiora Tech | Pricing Models</title>
                <meta name="description" content="Flexible pricing models tailored to your business needs." />
            </Head>
            <div className="pt-24 min-h-screen bg-gray-50 dark:bg-[#f8fafc]">
                <PricingModels />
            </div>
        </>
    );
}
