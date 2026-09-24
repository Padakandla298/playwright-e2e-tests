
import { test, expect } from '@playwright/test';
import { timeout } from 'nodemon/lib/config';

test.describe("inventory",()=>{
    test.beforeEach("Comman steps",async({page})=>{
        await page.goto('https://www.saucedemo.com/inventory.html');

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').click();

  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').click();

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();
  let itemCount = await page.locator('.inventory-item').count();
    console.log(`Total inventory items: ${itemCount}`);
    })
    
   //await expect(prices).toHaveCount(6);
 
})

test('test', async ({ page }) => {
 

// Alternatively, using CSS selector


  



});
