import { expect, test } from '@playwright/test';

test('index page renders the résumé', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Resumette' })).toBeVisible();
	await expect(page.getByRole('heading', { name: /Manassarn Manoonchai/ })).toBeVisible();
});

test('résumé content is prerendered without JavaScript', async ({ browser }) => {
	const context = await browser.newContext({ javaScriptEnabled: false });
	const page = await context.newPage();
	await page.goto('/');
	await expect(page.getByRole('heading', { name: /Manassarn Manoonchai/ })).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Work Experience' })).toBeVisible();
	await context.close();
});
