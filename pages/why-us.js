import Head from 'next/head';
import WhyCodiora from '@/components/WhyCodiora';

export default function WhyUs() {
    return (
        <>
            <Head>
                <title>Codiora Tech | Why Choose Us</title>
                <meta name="description" content="Why Codiora Tech is the right partner for your digital transformation." />
            </Head>
            <div className="pt-24 min-h-screen bg-white dark:bg-dark">
                <WhyCodiora />
            </div>
        </>
    );
}
