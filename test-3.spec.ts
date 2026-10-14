import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('admin@yourstore.com');
  await page.getByLabel('Password::').click();
  await page.getByLabel('Password::').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page).toHaveURL('https://admin-demo.nopcommerce.com/admin/');
});