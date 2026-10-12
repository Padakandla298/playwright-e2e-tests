import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationpanda.com/2021/12/29/want-to-practice-test-automation-try-these-demo-sites/');
  await page.getByRole('rowgroup').getByRole('link', { name: 'Restful Booker' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page1.goto('https://automationintesting.online/');
  await expect(page1.getByRole('link', { name: 'Shady Meadows B&B' })).toBeVisible();
  await page.getByRole('rowgroup').getByRole('link', { name: 'Automation Practice Website' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('link', { name: 'Luma – Magento eCommerce' }).click({
    modifiers: ['ControlOrMeta']
  });
  await expect(page2.getByRole('link')).toBeVisible();
  await expect(page3.getByText('Invalid SSL certificate')).toBeVisible();
});