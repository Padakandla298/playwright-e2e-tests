import { test, expect } from "@playwright/test";

test.describe("Login tests", () => {

  test.beforeEach("common steps", async ({ page }) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/');

    await page.getByRole('link', { name: 'Make Appointment' }).click();
  });


  test('valid login', async ({ page }) => {

    await page.getByLabel('Username').pressSequentially('venkatesh',{delay:300});
    await page.getByLabel('Username').clear();
    await page.getByLabel('Username').fill('John Doe');

    await page.getByLabel('Password').fill('ThisIsNotAPassword');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('h2')).toContainText('Make Appointment');
  });


  test('invalid login', async ({ page }) => {

    await page.getByLabel('Username').fill('ertyu');

    await page.getByLabel('Password').fill('2345677');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(
      page.getByText('Login failed! Please ensure')
    ).toBeVisible();
  });

});


/*test.only("Demo on locators",async({page})=>{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await page.locator("//input[@value='radio1']").click();
  await page.getByPlaceholder("Type to Select Countries").fill("INDIA");
}) */

