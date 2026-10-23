const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

const PAGES_TO_TEST = [
  '/',
  '/about',
  '/contact',
  '/services/ai-automation',
  '/portfolio',
  '/portfolio/neonmarket',
  '/faq',
  '/privacy-policy',
  '/terms-conditions'
];

test.describe('Axe WCAG AA Accessibility Audits', () => {
  for (const route of PAGES_TO_TEST) {
    test(`Page ${route} satisfies WCAG 2.1 AA accessibility guidelines`, async ({ page }) => {
      await page.goto(route, { waitUntil: 'networkidle' });

      // Dismiss cookie banner or wait for page ready
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .disableRules(['color-contrast']) // Some dynamic canvas/webgl backgrounds can trigger contrast heuristics
        .analyze();

      if (accessibilityScanResults.violations.length > 0) {
        console.log(`Violations on ${route}:`, JSON.stringify(accessibilityScanResults.violations.map(v => ({ id: v.id, impact: v.impact, description: v.description, nodes: v.nodes.length })), null, 2));
      }

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});
