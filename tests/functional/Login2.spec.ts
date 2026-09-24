import { test,expect } from "@playwright/test";

test.describe("login validation",()=>{
    test.beforeEach("user login",async({page})=>{
        await page.goto("https://practicetestautomation.com/practice-test-login/");
        await page.getByLabel("Username").pressSequentially("student");
        await page.getByLabel("Password").pressSequentially("Password123",{delay:300});
        await page.getByRole("button",{name:"Submit"}).click();



    })
    test("validations",async({page})=>{
        await expect(page.locator("h1")).toContainText("Logged In Successfully");
        await expect(page.getByText("Congratulations student. You successfully logged in!")).toContainText("Congratulations student. You successfully logged in!");

    })
})

