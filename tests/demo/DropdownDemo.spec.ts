import{test,expect} from "@playwright/test";
 test("Demo on static dropdowns",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByLabel("Country:").selectOption("germany");
    await page.waitForTimeout(2000);
    await expect(page.getByLabel("Country:")).toHaveValue("germany");

 })