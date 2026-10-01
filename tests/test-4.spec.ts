import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.locator('body').press('ControlOrMeta+c');
  await page.locator('iframe[name="a-e4wug8lckk63"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-e4wug8lckk63"]').contentFrame().locator('[id="8"]').click();
  await page.locator('iframe[name="c-e4wug8lckk63"]').contentFrame().locator('[id="6"]').click();
  await page.locator('iframe[name="c-e4wug8lckk63"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('iframe[name="c-e4wug8lckk63"]').contentFrame().locator('[id="2"]').click();
  await page.locator('iframe[name="c-e4wug8lckk63"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('iframe[name="c-e4wug8lckk63"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
});