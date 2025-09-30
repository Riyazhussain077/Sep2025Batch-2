const { test, expect } = require('@playwright/test')

test('Mouse Hover', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    const Hello = await page.locator('//span[@class="nav-line-2 "]');
    const order = await page.locator("//span[text()='Your Orders']");

    // Mouse Hover

    await Hello.hover();
    await order.click();

    await page.waitForTimeout(3000);

});