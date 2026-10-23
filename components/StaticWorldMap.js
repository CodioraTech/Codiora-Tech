export default function StaticWorldMap() {
    return (
        <div className="relative w-full h-full min-h-[380px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#0a192f]/40 to-[#122a46]/20">
            {/* Subtle Grid Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-teal-400" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>

            {/* Stylized World Coordinates & Arcs */}
            <svg className="w-full max-w-[500px] h-auto p-4 relative z-10" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Globe Outline Rings */}
                <circle cx="400" cy="225" r="180" stroke="rgba(20, 184, 166, 0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="400" cy="225" r="130" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" />
                <ellipse cx="400" cy="225" rx="180" ry="70" stroke="rgba(20, 184, 166, 0.2)" strokeWidth="1" strokeDasharray="6 6" />
                <ellipse cx="400" cy="225" rx="70" ry="180" stroke="rgba(20, 184, 166, 0.2)" strokeWidth="1" strokeDasharray="6 6" />

                {/* Connection Arcs to Hubs */}
                {/* Dhaka to North America */}
                <path d="M 520 200 Q 360 80 220 160" stroke="url(#arc-grad-1)" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 4" />
                {/* Dhaka to Europe */}
                <path d="M 520 200 Q 450 110 390 140" stroke="url(#arc-grad-2)" strokeWidth="2" strokeLinecap="round" />
                {/* Dhaka to East Asia */}
                <path d="M 520 200 Q 580 180 620 210" stroke="url(#arc-grad-1)" strokeWidth="2" strokeLinecap="round" />

                {/* Hub Nodes */}
                {/* North America */}
                <circle cx="220" cy="160" r="5" fill="#38bdf8" />
                <circle cx="220" cy="160" r="10" stroke="#38bdf8" strokeWidth="1" opacity="0.4" />
                <text x="220" y="145" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600">US Hub</text>

                {/* Europe */}
                <circle cx="390" cy="140" r="4" fill="#38bdf8" />
                <circle cx="390" cy="140" r="8" stroke="#38bdf8" strokeWidth="1" opacity="0.4" />
                <text x="390" y="125" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600">EU Hub</text>

                {/* East Asia */}
                <circle cx="620" cy="210" r="4" fill="#38bdf8" />
                <text x="620" y="230" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="600">APAC</text>

                {/* Dhaka, Bangladesh (HQ - Pulsing Core) */}
                <circle cx="520" cy="200" r="7" fill="#14b8a6" className="animate-pulse" />
                <circle cx="520" cy="200" r="14" stroke="#14b8a6" strokeWidth="2" opacity="0.6" className="animate-ping" style={{ transformOrigin: '520px 200px' }} />
                <text x="520" y="180" textAnchor="middle" fill="#14b8a6" fontSize="12" fontWeight="bold">HQ • Dhaka</text>

                <defs>
                    <linearGradient id="arc-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="arc-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.9" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
