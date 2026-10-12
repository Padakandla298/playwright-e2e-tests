import{test,expect,devices} from "@playwright/test";
 test("Demo on static dropdowns",async({page},testinfo)=>{
   //console.log(`test info ${JSON.stringify(testinfo.config)}`);
   console.log(Object.keys(devices))

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByLabel("Country:").selectOption("germany");
    await page.waitForTimeout(2000);
    await expect(page.getByLabel("Country:")).toHaveValue("germany");


 })