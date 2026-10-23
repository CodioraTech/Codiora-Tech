import Link from 'next/link';

export default function Breadcrumbs({ items = [], className = '' }) {
    if (!items || items.length === 0) return null;

    // Normalize items to { label, href } and filter out root Home if already present
    const normalizedItems = items
        .map(item => ({
            label: item.label || item.name || '',
            href: item.href || item.url || '/'
        }))
        .filter((item, index) => {
            if (index === 0 && (item.label.toLowerCase() === 'home' || item.href === '/')) {
                return false;
            }
            return Boolean(item.label);
        });

    return (
        <nav aria-label="Breadcrumb" className={`w-full max-w-7xl mx-auto px-6 pt-2 pb-4 text-xs font-medium text-slate-500 ${className}`}>
            <ol className="flex items-center flex-wrap gap-2">
                <li>
                    <Link href="/" className="hover:text-teal-600 transition-colors flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span>Home</span>
                    </Link>
                </li>
                {normalizedItems.map((item, index) => {
                    const isLast = index === normalizedItems.length - 1;
                    return (
                        <li key={item.href || index} className="flex items-center gap-2">
                            <span className="text-slate-300 dark:text-slate-600">/</span>
                            {isLast ? (
                                <span className="text-teal-600 dark:text-teal-400 font-semibold" aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <Link href={item.href} className="hover:text-teal-600 transition-colors">
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

