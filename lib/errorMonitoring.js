/**
 * Error Monitoring & Telemetry for Codiora Tech
 * Handles client-side exceptions and dispatches to Sentry / error tracking endpoints
 */

export function captureException(error, context = {}) {
    if (typeof window === 'undefined') {
        console.error('[Codiora Server Error]', error, context);
        return;
    }

    const errorPayload = {
        message: error?.message || String(error),
        name: error?.name || 'Error',
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        context
    };

    // If Sentry DSN is present, forward to Sentry
    const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
    if (sentryDsn) {
        try {
            // Sentry envelope or REST capture endpoint
            fetch('/api/telemetry/error', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(errorPayload),
                keepalive: true
            }).catch(() => {});
        } catch (_) {}
    }

    // In development or when logging
    if (process.env.NODE_ENV !== 'production') {
        console.error('[Codiora Client Telemetry]', errorPayload);
    }
}

export function initErrorMonitoring() {
    if (typeof window === 'undefined') return;

    window.addEventListener('error', (event) => {
        captureException(event.error || event.message, { source: 'window.onerror' });
    });

    window.addEventListener('unhandledrejection', (event) => {
        captureException(event.reason, { source: 'unhandledrejection' });
    });
}
