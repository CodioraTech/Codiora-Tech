import React from 'react';
import { captureException } from '@/lib/errorMonitoring';
import Link from 'next/link';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        captureException(error, { componentStack: errorInfo?.componentStack });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-[#f8fafc] text-[#122a46] flex items-center justify-center p-6">
                    <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#122a46]/10 shadow-2xl text-center">
                        <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-black text-[#122a46] mb-3">Something went wrong</h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Our automated telemetry has logged this event. Please refresh or return to the homepage.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => this.setState({ hasError: false, error: null })}
                                className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                            >
                                Try Again
                            </button>
                            <Link
                                href="/"
                                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#122a46] font-bold text-xs uppercase tracking-wider transition-colors inline-block"
                            >
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
