const { test, expect } = require('@playwright/test')

test('Auto Suggest', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await page.locator('//input[@id="autocomplete"]').fill('ar');

    await page.waitForSelector('//li[@class="ui-menu-item"]/div');
    const countryOptions = await page.$$('//li[@class="ui-menu-item"]/div');

    for (const option of countryOptions) {
        const value = await option.textContent();
        console.log(value);
        if (value.includes('Denmark')) {
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(3000);
});