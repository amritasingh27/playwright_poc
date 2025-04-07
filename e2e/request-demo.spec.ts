import { test, expect } from "@playwright/test";
import { error } from "console";

test("visit request demo", async ({ page }) => {
  await page.goto("https://www.haptik.ai/request-demo");
  await page.screenshot({ path: "screenshots/visit.png" });
  await expect(page).toHaveTitle("Get Demo of Haptik's Gen AI Product Suite");
});

test.describe("Test Request Demo", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the request demo url before each test.
    await page.goto("https://www.haptik.ai/request-demo");
  });

  test("First name required", async ({ page }) => {
    const firstname = page.getByPlaceholder("First Name*");
    await firstname.click();
    await firstname.blur();

    await page.screenshot({ path: "screenshots/error_firstname.png" });

    const locator = page.locator(".hs_firstname .hs-error-msg");
    await expect(firstname).toHaveClass("hs-input invalid error");
    await expect(locator).toHaveText("Please complete this required field.");
  });

  test("Last name required", async ({ page }) => {
    const lastname = page.getByPlaceholder("Last Name*");
    await lastname.click();
    await lastname.blur();

    await page.screenshot({ path: "screenshots/error_lastname.png" });

    const locator = page.locator(".hs_lastname .hs-error-msg");
    await expect(lastname).toHaveClass("hs-input invalid error");
    await expect(locator).toHaveText("Please complete this required field.");
  });

  test("Company name required", async ({ page }) => {
    const companyname = page.getByPlaceholder("Your Company Name*");

    await companyname.click();
    await companyname.blur();

    await page.screenshot({ path: "screenshots/error_companyname.png" });

    const locator = page.locator(".hs_company .hs-error-msg");
    await expect(companyname).toHaveClass("hs-input invalid error");
    await expect(locator).toHaveText("Please complete this required field.");
  });

  test("Business email required", async ({ page }) => {
    const businessEmail = page.getByPlaceholder("Your Business Email*");

    await businessEmail.click();
    await businessEmail.blur();

    await page.screenshot({ path: "screenshots/error_businessEmail.png" });

    const locator = page.locator(".hs_email .hs-error-msg");
    await expect(businessEmail).toHaveClass("hs-input invalid error");
    await expect(locator).toHaveText("Please complete this required field.");
  });

  test("Job Title required", async ({ page }) => {
    const jobTitle = page.getByPlaceholder("Your Job Title*");

    await jobTitle.click();
    await jobTitle.blur();

    await page.screenshot({ path: "screenshots/error_jobTitle.png" });

    const locator = page.locator(".hs_jobtitle .hs-error-msg");
    await expect(jobTitle).toHaveClass("hs-input invalid error");
    await expect(locator).toHaveText("Please complete this required field.");
  });

  test("Mobile number required", async ({ page }) => {
    await page.getByRole("button", { name: "Submit" }).click();

    await page.screenshot({ path: "screenshots/error_mobilenumber.png" });

    const locator = page.locator(".hs_phone .mob_error");
    await expect(locator).toHaveText("Please Enter valid Mobile Number");
  });
});
