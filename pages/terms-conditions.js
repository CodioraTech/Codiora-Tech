import Head from 'next/head';
import Link from 'next/link';

export default function TermsConditions() {
    return (
        <>
            <Head>
                <title>Codiora Tech | Terms & Conditions</title>
            </Head>

            <div className="bg-[#020202] min-h-screen text-gray-300 font-sans selection:bg-purple-500/30">
                <div className="container mx-auto px-6 py-20 max-w-4xl">
                    <div className="mb-16 border-b border-white/10 pb-8">
                        <div className="text-purple-500 text-xs font-bold uppercase tracking-widest mb-4">User Agreement</div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Terms & Conditions</h1>
                        <p className="text-gray-500">Last Updated: January 14, 2026</p>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using the website operated by Codiora Tech ("we", "us", or "our"), you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, then you may not access the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
                            <p>
                                The Service and its original content, features, and functionality are and will remain the exclusive property of Codiora Tech and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Codiora Tech.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
                            <p>When using our services, you agree not to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                                <li>Use the service for any illegal or unauthorized purpose.</li>
                                <li>Attempt to gain unauthorized access to any portion of the service or any other systems or networks connected to our servers.</li>
                                <li>Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability.</li>
                                <li>Upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                            <p>
                                In no event shall Codiora Tech, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
                            <p>
                                These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Changes to Terms</h2>
                            <p>
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
                            <p>
                                We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                            </p>
                        </section>
                    </div>

                    <div className="mt-20 pt-10 border-t border-white/10 flex justify-between text-sm text-gray-500">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">← Privacy Policy</Link>
                        <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap →</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
