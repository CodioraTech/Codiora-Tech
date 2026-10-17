const { test, expect } = require('@playwright/test');

const KEY_PAGES = [
    { path: '/', titleExpected: 'Codiora Tech' },
    { path: '/about', titleExpected: 'About Us' },
    { path: '/contact', titleExpected: 'Contact Us' },
    { path: '/services/ai-automation', titleExpected: 'AI Automation' },
    { path: '/portfolio/neonmarket', titleExpected: 'NeonMarket' },
    { path: '/faq', titleExpected: 'Frequently Asked Questions' },
    { path: '/privacy-policy', titleExpected: 'Privacy Policy' },
];

test.describe('Codiora Tech Production Smoke Tests', () => {

    for (const pageInfo of KEY_PAGES) {
        test(`Page ${pageInfo.path} loads with HTTP 200 and single semantic H1`, async ({ page }) => {
            const response = await page.goto(pageInfo.path, { waitUntil: 'domcontentloaded' });
            expect(response.status()).toBe(200);

            // Verify exactly one H1
            const h1s = page.locator('h1');
            await expect(h1s).toHaveCount(1);

            // Verify title
            await expect(page).toHaveTitle(new RegExp(pageInfo.titleExpected, 'i'));

            // Verify canonical
            const canonical = page.locator('link[rel="canonical"]');
            await expect(canonical).toHaveCount(1);
            const href = await canonical.getAttribute('href');
            expect(href).toMatch(/^https:\/\/codioratech\.com/);
        });
    }

    test('Skip link is keyboard accessible and targets #main-content', async ({ page }) => {
        await page.goto('/');
        const skipLink = page.locator('a[href="#main-content"]');
        await expect(skipLink).toHaveCount(1);
        await expect(skipLink).toHaveText('Skip to main content');
    });

    test('Contact Form validation and honeypot mitigation', async ({ page }) => {
        await page.goto('/contact');

        // Form elements exist
        const nameInput = page.locator('#contact_full_name');
        const emailInput = page.locator('#contact_email');
        const phoneInput = page.locator('#contact_phone');
        const messageInput = page.locator('#contact_message');
        const submitBtn = page.locator('button[type="submit"]');

        await expect(nameInput).toBeVisible();
        await expect(emailInput).toBeVisible();
        await expect(phoneInput).toBeVisible();
        await expect(messageInput).toBeVisible();
        await expect(submitBtn).toBeVisible();

        // Honeypot field exists and is hidden
        const honeypot = page.locator('input[name="website_check"]');
        await expect(honeypot).toHaveCount(1);
    });

    test('Security headers are served', async ({ request }) => {
        const response = await request.get('/');
        const headers = response.headers();

        expect(headers['x-content-type-options']).toBe('nosniff');
        expect(headers['x-frame-options']).toBe('SAMEORIGIN');
        expect(headers['strict-transport-security']).toContain('max-age=');
        expect(headers['content-security-policy']).toBeDefined();
        expect(headers['content-security-policy']).toContain("frame-ancestors 'self'");
    });

    test('Cookie consent banner displays and updates preference', async ({ page }) => {
        await page.goto('/');
        const consentBanner = page.locator('[aria-label="Cookie consent banner"]');
        await expect(consentBanner).toBeVisible({ timeout: 4000 });

        const acceptBtn = page.locator('button:has-text("Accept All")');
        await acceptBtn.click();

        // Banner hides
        await expect(consentBanner).not.toBeVisible();

        // Local storage verified
        const consentValue = await page.evaluate(() => localStorage.getItem('codiora_cookie_consent'));
        expect(consentValue).toBe('accepted');
    });
});
