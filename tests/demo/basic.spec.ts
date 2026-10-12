import { expect } from "@playwright/test";
import params from  "../../data/params";
import {test} from "../helpers/config.fixture";

test.describe("Login tests", () => {

  test.beforeEach("common steps", async ({ page },testinfo) => {
      const envconfig=testinfo.project.use as any;

    await page.goto(envconfig.appUrl);

    await page.getByRole('link', { name: 'Make Appointment' }).click();
  });
  
const testdata= params.userdata();
for (const val of testdata){


  test.only(val.testid, {tag:"@smoke"},async ({ page },testinfo) => {
     const envconfig=testinfo.project.use as any;
    console.log(`app url: ${envconfig.appUrl}`)

    await page.getByLabel('Username').pressSequentially(val.name,{delay:300});
    await page.getByLabel('Username').clear();
    await page.getByLabel('Username').fill(val.name);

    await page.getByLabel('Password').fill(val.password);

    await page.getByRole('button', { name: 'Login' }).click();
    const cookie= await page.context().cookies();
    process.env.LoginCookiees=JSON.stringify(cookie) ;
    console.log(`cookiess : ${process.env.LoginCookiees}`);



    //await expect(page.locator('h2')).toContainText('Make Appointment');
  })};



  test('invalid login', {tag:"@smoke"},async ({ page }) => {

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

