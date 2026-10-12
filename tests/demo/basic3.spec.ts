import { test, expect } from "@playwright/test";
//Shift + Alt + F and Shift + Alt + down arrow
test.describe("login tests", () => {
  test.beforeEach("comman steps", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("h3")).toContainText("We Care About Your Health");
    await expect(
      page.getByRole("link", { name: "Make Appointment" }),
    ).toBeVisible();
    //await page.getByRole("link", { name: "Make Appointment" }).press("Enter");
    //await page.getByRole("link", { name: "Make Appointment" }).dblclick()
    //await page.getByRole("link", { name: "Make Appointment" }).dblclick()
    await page.getByRole("link", { name: "Make Appointment" }).click({button:"right"});
    await page.getByRole("link", { name: "Make Appointment" }).dblclick({timeout:10_000});
    
  });
  test("Login with valid credentials", {tag:"@smoke"},async ({ page }) => {
    await page.getByLabel("Password").dblclick();
    await page.getByLabel("Password").fill("ThisIsNotAPassword");

    await page.getByLabel("Username").dblclick();
    await page.getByLabel("Username").fill("John Doe");
    await page.getByRole("button", { name: "Login" }).click();
    await page.getByRole("heading", { name: "Make Appointment" }).click();
    await page
      .getByLabel("Facility")
      .selectOption("Hongkong CURA Healthcare Center");
    await page.locator(".input-group-addon").click();
    await page.getByRole("cell", { name: "9" }).first().click();
    await page.getByRole("textbox", { name: "Comment" }).click();
    await page
      .getByRole("textbox", { name: "Comment" })
      .fill("multiple commenr");
    await page.getByRole("button", { name: "Book Appointment" }).click();
    await expect(page.getByText("Please be informed that your")).toBeVisible();
  });
  test("Login with valid invalid credentials",{tag:"@smoke"}, async ({ page }) => {
    await page.getByLabel("Password").dblclick();
    await page.getByLabel("Password").fill("ThisIsNotAPassword");

    await page.getByLabel("Username").dblclick();
    await page.getByLabel("Username").fill("John Doe123");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByText("Login failed! Please ensure")).toBeVisible();
  });
});
