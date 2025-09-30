const { test, expect } = require('@playwright/test')

test('Handle Radio Button', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // Radio Button

    // await page.locator('[value="radio1"]').check();
    await page.check('[value="radio2"]');

    await expect(await page.locator('[value="radio2"]')).toBeChecked();
    await expect(await page.locator('[value="radio2"]').isChecked()).toBeTruthy();

    await expect(await page.locator('[value="radio1"]').isChecked()).toBeFalsy();



    await page.waitForTimeout(3000);
});