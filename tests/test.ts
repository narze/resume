import { expect, test } from '@playwright/test';

test('index page renders the résumé', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Resumette' })).toBeVisible();
	await expect(page.getByRole('heading', { name: /Manassarn Manoonchai/ })).toBeVisible();
});

// The header's three blocks (contacts, name, links) must share one row from the
// tablet breakpoints upward. The name used to be unshrinkable at `lg`, which
// pushed the links column onto a row of its own on landscape tablets.
for (const width of [1024, 1080, 1180, 1280, 1366]) {
	test(`header keeps contacts, name and links on one row at ${width}px`, async ({ page }) => {
		await page.setViewportSize({ width, height: 800 });
		await page.goto('/');

		const tops = await page
			.getByRole('heading', { name: /Manassarn Manoonchai/ })
			.evaluate((heading) =>
				Array.from(heading.parentElement?.children ?? []).map((block) =>
					Math.round(block.getBoundingClientRect().top)
				)
			);

		expect(tops).toHaveLength(3);
		expect(new Set(tops).size).toBe(1);
	});
}

test('résumé content is prerendered without JavaScript', async ({ browser }) => {
	const context = await browser.newContext({ javaScriptEnabled: false });
	const page = await context.newPage();
	await page.goto('/');
	await expect(page.getByRole('heading', { name: /Manassarn Manoonchai/ })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Work Experience' })).toBeVisible();
	await context.close();
});
