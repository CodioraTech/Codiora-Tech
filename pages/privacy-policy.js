import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Codiora Tech | Privacy Policy</title>
            </Head>

            <div className="bg-[#020202] min-h-screen text-gray-300 font-sans selection:bg-blue-500/30">
                <div className="container mx-auto px-6 py-20 max-w-4xl">
                    <div className="mb-16 border-b border-white/10 pb-8">
                        <div className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">Legal Compliance</div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Privacy Policy</h1>
                        <p className="text-gray-500">Last Updated: January 14, 2026</p>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                            <p>
                                At Codiora Tech ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. The Data We Collect</h2>
                            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                                <li><strong className="text-white">Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong className="text-white">Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                                <li><strong className="text-white">Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, user agent, and operating system.</li>
                                <li><strong className="text-white">Usage Data:</strong> includes information about how you use our website, products and services.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
                            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal or regulatory obligation.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking Technologies</h2>
                            <p>
                                We use cookies and similar tracking technologies to track the activity on our Request Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
                            </p>
                            <p className="mt-4">
                                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                            <p>
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Links</h2>
                            <p>
                                This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
                            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
                            <div className="mt-4 bg-[#0a0a0a] p-6 rounded-2xl border border-white/5 inline-block pr-12">
                                <p className="text-white font-bold">Codiora Tech Legal Team</p>
                                <p className="mt-1">Email: legal@codioratech.com</p>
                                <p className="mt-1">Address: 123 Tech Plaza, Suite 400, San Francisco, CA 94107</p>
                            </div>
                        </section>
                    </div>

                    <div className="mt-20 pt-10 border-t border-white/10 flex justify-between text-sm text-gray-500">
                        <Link href="/" className="hover:text-white transition-colors">← Back to Home</Link>
                        <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions →</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
