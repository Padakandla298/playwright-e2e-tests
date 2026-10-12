import {test, expect } from "@playwright/test";
import constants from "../../data/constants.json"

test("Demo test on playwright locators practice",async({page})=>{
    console.log(`constant dat ${JSON.stringify (constants.statucodes)}`);

    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.locator('form input[name="name"]').click();
    await page.locator('form input[name="name"]').fill('Venkatesh');
    await page.locator('input[name="email"]').click();
    await page.locator('input[name="email"]').fill('Padakandla@mail.com');
    await expect(page.getByText('Password')).toBeVisible();
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Venky@123');
    


    


})


