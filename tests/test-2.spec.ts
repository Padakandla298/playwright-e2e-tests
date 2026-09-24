import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await expect(page.getByLabel('Facility')).toContainText('Tokyo CURA Healthcare Center Hongkong CURA Healthcare Center Seoul CURA Healthcare Center');
});