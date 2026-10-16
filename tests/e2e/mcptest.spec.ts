import { expect, test, type Page } from "@playwright/test";

const registrationUrl =
    "https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php";

const requiredFieldErrors = ["name", "email", "mobile", "dob", "subjects", "picture"];

async function openRegistrationForm(page: Page) {
    await page.goto(registrationUrl);
    await expect(
        page.getByRole("heading", { name: "Student Registration Form" }),
    ).toBeVisible();
}

async function fillValidRegistration(page: Page) {
    await page.locator("#name").fill("Taylor Student");
    await page.locator("#email").fill("taylor.student@example.com");
    await page.locator('input[type="radio"]').nth(0).check();
    await page.locator("#mobile").fill("1234567890");
    await page.locator("#dob").fill("2000-05-15");
    await page.locator("#subjects").fill("Mathematics");
    await page.locator('input[type="checkbox"]').nth(0).check();
    await page.locator('input[type="file"]').setInputFiles({
        name: "student.png",
        mimeType: "image/png",
        buffer: Buffer.from("sample image"),
    });
    await page.locator("textarea").fill("123 Learning Lane");
    await page.locator("#state").selectOption("Uttar Pradesh");
    await page.locator("#city").selectOption("Lucknow");
}

function fieldError(page: Page, field: string) {
    return page.locator(`label.error[for="${field}"]`);
}

test.describe("TutorialsPoint student registration form", () => {
    test.beforeEach(async ({ page }) => {
        await openRegistrationForm(page);
    });

    test("shows required-field validation when submitted empty", async ({ page }) => {
        await page.getByRole("button", { name: "Login" }).click();

        for (const field of requiredFieldErrors) {
            await expect(fieldError(page, field)).toBeVisible();
        }
        await expect(fieldError(page, "state")).toBeVisible();
        await expect(fieldError(page, "city")).toBeVisible();
    });

    test("accepts a valid name and clears its required error", async ({ page }) => {
        await page.getByRole("button", { name: "Login" }).click();
        await expect(fieldError(page, "name")).toBeVisible();

        await page.locator("#name").fill("Taylor Student");
        await page.getByRole("button", { name: "Login" }).click();

        await expect(fieldError(page, "name")).toBeHidden();
        await expect(page.locator("#name")).toHaveValue("Taylor Student");
    });

    test("validates email format and accepts a valid email", async ({ page }) => {
        await page.locator("#email").fill("not-an-email");
        await page.getByRole("button", { name: "Login" }).click();
        await expect(fieldError(page, "email")).toBeVisible();

        await page.locator("#email").fill("taylor.student@example.com");
        await page.getByRole("button", { name: "Login" }).click();
        await expect(fieldError(page, "email")).toBeHidden();
    });

    test("requires a ten-digit mobile number", async ({ page }) => {
        await page.locator("#mobile").fill("123456789");
        await page.getByRole("button", { name: "Login" }).click();
        await expect(fieldError(page, "mobile")).toBeVisible();

        await page.locator("#mobile").fill("1234567890");
        await page.getByRole("button", { name: "Login" }).click();
        await expect(fieldError(page, "mobile")).toBeHidden();
    });

    test("requires a date of birth and accepts a valid date", async ({ page }) => {
        await page.getByRole("button", { name: "Login" }).click();
        await expect(fieldError(page, "dob")).toBeVisible();

        await page.locator("#dob").fill("2000-05-15");
        await page.getByRole("button", { name: "Login" }).click();
        await expect(fieldError(page, "dob")).toBeHidden();
        await expect(page.locator("#dob")).toHaveValue("2000-05-15");
    });

    test("requires a subject and accepts entered subject text", async ({ page }) => {
        await page.getByRole("button", { name: "Login" }).click();
        await expect(fieldError(page, "subjects")).toBeVisible();

        await page.locator("#subjects").fill("Mathematics");
        await page.getByRole("button", { name: "Login" }).click();
        await expect(fieldError(page, "subjects")).toBeHidden();
        await expect(page.locator("#subjects")).toHaveValue("Mathematics");
    });

    test("allows selecting each gender option one at a time", async ({ page }) => {
        const genders = page.locator('input[type="radio"]');

        await expect(genders).toHaveCount(3);
        for (let index = 0; index < 3; index++) {
            await genders.nth(index).check();
            await expect(genders.nth(index)).toBeChecked();
            for (let otherIndex = 0; otherIndex < 3; otherIndex++) {
                if (otherIndex !== index) {
                    await expect(genders.nth(otherIndex)).not.toBeChecked();
                }
            }
        }
    });

    test("allows only one gender to be selected", async ({ page }) => {
        const genders = page.locator('input[type="radio"]');

        await genders.nth(0).check();
        await genders.nth(1).check();

        await expect(genders.nth(0)).not.toBeChecked();
        await expect(genders.nth(1)).toBeChecked();
    });

    test("allows hobbies to be selected independently", async ({ page }) => {
        const hobbies = page.locator('input[type="checkbox"]');

        await expect(hobbies).toHaveCount(3);
        await hobbies.nth(0).check();
        await hobbies.nth(2).check();

        await expect(hobbies.nth(0)).toBeChecked();
        await expect(hobbies.nth(1)).not.toBeChecked();
        await expect(hobbies.nth(2)).toBeChecked();

        await hobbies.nth(0).uncheck();
        await expect(hobbies.nth(0)).not.toBeChecked();
        await expect(hobbies.nth(2)).toBeChecked();
    });

    test("requires a picture and accepts a selected file", async ({ page }) => {
        await page.getByRole("button", { name: "Login" }).click();
        await expect(fieldError(page, "picture")).toBeVisible();

        const picture = page.locator('input[type="file"]');
        await picture.setInputFiles({
            name: "student.png",
            mimeType: "image/png",
            buffer: Buffer.from("sample image"),
        });
        await page.getByRole("button", { name: "Login" }).click();

        await expect(picture).toHaveValue(/student\.png$/);
        await expect(fieldError(page, "picture")).toBeHidden();
    });

    test("accepts a multiline current address and leaves it optional", async ({ page }) => {
        const address = page.locator("textarea");
        await address.fill("123 Learning Lane\nApartment 4");
        await expect(address).toHaveValue("123 Learning Lane\nApartment 4");

        await address.clear();
        await page.getByRole("button", { name: "Login" }).click();
        await expect(fieldError(page, "picture")).toBeVisible();
        await expect(address).toHaveValue("");
    });

    test("provides state and city choices and accepts selected values", async ({ page }) => {
        const state = page.locator("#state");
        const city = page.locator("#city");

        await expect(state.locator("option")).toHaveText([
            "Choose State",
            "NCR",
            "Uttar Pradesh",
            "Haryana",
            "Rajasthan",
        ]);
        await expect(city.locator("option")).toHaveText([
            "Choose City",
            "Agra",
            "Lucknow",
            "Meerut",
        ]);

        await state.selectOption("Uttar Pradesh");
        await city.selectOption("Lucknow");
        await expect(state).toHaveValue("Uttar Pradesh");
        await expect(city).toHaveValue("Lucknow");
    });

    test("rejects the default state and city options on submission", async ({ page }) => {
        await page.getByRole("button", { name: "Login" }).click();

        await expect(fieldError(page, "state")).toBeVisible();
        await expect(fieldError(page, "city")).toBeVisible();
    });

    test("retains valid entries when another required field is invalid", async ({ page }) => {
        await page.locator("#name").fill("Taylor Student");
        await page.locator("#email").fill("taylor.student@example.com");
        await page.locator("#mobile").fill("1234567890");
        await page.locator("#subjects").fill("Mathematics");
        await page.getByRole("button", { name: "Login" }).click();

        await expect(fieldError(page, "dob")).toBeVisible();
        await expect(page.locator("#name")).toHaveValue("Taylor Student");
        await expect(page.locator("#email")).toHaveValue("taylor.student@example.com");
        await expect(page.locator("#mobile")).toHaveValue("1234567890");
        await expect(page.locator("#subjects")).toHaveValue("Mathematics");
    });

    test("submits the complete registration without validation errors", async ({ page }) => {
        await fillValidRegistration(page);
        await page.getByRole("button", { name: "Login" }).click();

        await expect(page.locator("label.error:visible")).toHaveCount(0);
    });

    test("clears validation errors after correcting the corresponding fields", async ({ page }) => {
        await page.getByRole("button", { name: "Login" }).click();
        await expect(fieldError(page, "name")).toBeVisible();
        await expect(fieldError(page, "email")).toBeVisible();

        await page.locator("#name").fill("Taylor Student");
        await page.locator("#email").fill("taylor.student@example.com");
        await page.getByRole("button", { name: "Login" }).click();

        await expect(fieldError(page, "name")).toBeHidden();
        await expect(fieldError(page, "email")).toBeHidden();
    });
});
