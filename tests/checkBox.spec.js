const { test, expect } = require('@playwright/test')


test('Handle CheckBox', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // Single checkBox

    //await page.locator('//input[@id="checkBoxOption1"]').check();
    await page.check('//input[@id="checkBoxOption1"]');

    await expect(await page.locator('//input[@id="checkBoxOption1"]')).toBeChecked();
    await expect(await page.locator('//input[@id="checkBoxOption1"]').isChecked()).toBeTruthy();

    await page.waitForTimeout(3000);
    await page.uncheck('//input[@id="checkBoxOption1"]');
    await expect(await page.locator('//input[@id="checkBoxOption1"]')).not.toBeChecked();
    await expect(await page.locator('//input[@id="checkBoxOption1"]').isChecked()).toBeFalsy();
    await expect(await page.locator('//input[@id="checkBoxOption3"]').isChecked()).toBeFalsy();

    // Multiple checkBox

    const checkBoxLocators = [
        '//input[@id="checkBoxOption1"]',
        '//input[@id="checkBoxOption2"]',
        '//input[@id="checkBoxOption3"]'
    ];

    for(const locator of checkBoxLocators) {
        await page.locator(locator).check();
    }

    for (const locator of checkBoxLocators) {
        if(await page.locator(locator).isChecked()) {
            await page.locator(locator).uncheck();
        }
    }
    await page.waitForTimeout(2000);
});