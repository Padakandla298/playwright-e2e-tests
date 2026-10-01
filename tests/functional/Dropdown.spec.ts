import { test, expect } from "@playwright/test";

test.describe("Login tests", () => {
  test.beforeEach("common steps", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    await page.getByRole("link", { name: "Make Appointment" }).click();
  });

  test("valid login",{annotation:{type:"defect",description:"QAenv"},tag:"@smoke"},async ({ page },testinfo) => {
    await page
      .getByLabel("Username")
      .pressSequentially("venkatesh", { delay: 300 });
    await page.getByLabel("Username").clear();
    await page.getByLabel("Username").fill("John Doe");

    await page.getByLabel("Password").fill("ThisIsNotAPassword");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("h2")).toContainText("Make Appointment");

    await expect(page.getByLabel("Facility")).toHaveValue(
      "Tokyo CURA Healthcare Center"
);
    let src=await page.screenshot({fullPage:true});
    testinfo.attach("Appointmentpage",{
      body:src,
      contentType : "image/png"
    });

    await page
      .getByLabel("Facility")
      .selectOption("Hongkong CURA Healthcare Center");
    await page
      .getByLabel("Facility")
      .selectOption({ label: "Seoul CURA Healthcare Center" });
    await page.getByLabel("Facility").selectOption({ index: 0 });
    let dropdowncount = page.getByLabel("Facility").locator("option");
    await expect(dropdowncount).toHaveCount(3);
    let listofelementindropdown = await page.getByLabel("Facility").all();
    for(let ele of listofelementindropdown){
      const opt=await ele.locator("option").allTextContents();
      if(opt.includes("Seoul CURA Healthcare Center")){
    
       await ele.selectOption({label:"Seoul CURA Healthcare Center"});
        break;


      }
   
    };

    
    let array=[];
    for(let ele of listofelementindropdown){
       let element=await ele.allTextContents();
        if(element.includes("hello world")){
           await ele.selectOption(element);
          array.push(element)
        }
    }
    console.log(`list of elements are : ${array}`);

    
  });
});

/*test.only("Demo on locators",async({page})=>{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await page.locator("//input[@value='radio1']").click();
  await page.getByPlaceholder("Type to Select Countries").fill("INDIA");
}) */
