import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await page.getByRole('textbox', { name: 'Username' }).first().click();
  await expect(page.getByRole('radio', { name: 'Medicare' })).toBeVisible();
  await page.getByRole('radio', { name: 'Medicaid' }).check();
  await expect(page.getByRole('radio', { name: 'None' })).toBeVisible();
});
await page.getByText('Medicare').click();
await page.getByRole('radio', { name: 'Medicare' }).check();
await page.getByText('Medicaid').click();

await page.getByText('Apply for hospital readmission').click();
await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).uncheck();