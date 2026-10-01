import { test, expect, chromium } from "@playwright/test";

test.describe("E2e flow", () => {
  test.beforeEach("Comman steps", async ({ page ,browserName}, testinfo) => {
    test.slow();
    test.setTimeout(30_000);
    testinfo.setTimeout(10_000);
    await page.goto(
      "https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC",
    );
    await page.locator('input[name="username"]').fill("Venkuu");
    await page.locator('input[name="password"]').fill("Venky@123");
    await page.locator('input[value="Log In"]').press("Enter");
    let homepage = await page.screenshot({ fullPage: true });
    testinfo.attach("HomePage", {
      body: homepage,
      contentType: "image/png",
    });
  });
  test("Valid Login", async ({ page ,browserName}, testinfo) => {
    //testinfo.skip(browsername.)
    testinfo.skip(browserName==="firefox")
    await expect(page.getByText("Accounts Overview")).toBeVisible();
    await expect(
      page.locator("#accountTable td", { hasText: "$515.50" }),
    ).toBeVisible();
  });
});
