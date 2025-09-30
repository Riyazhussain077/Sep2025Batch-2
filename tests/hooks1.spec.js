const { test, expect } = require('@playwright/test')

test('Home Page Test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    // Login Page

    await page.locator('#login2').click();
    await page.fill('[id="loginusername"]', 'pavanol');
    await page.fill('[id="loginpassword"]', 'test@123');
    await page.click('[onclick="logIn()"]');

    // Home Page

    const products = await page.locator('.card-title');
    await expect(products).toHaveCount(9);

    // Logout Page

    await page.click("//a[text()='Log out']");

});

test('Add Product to the cart test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    // Login Page

    await page.locator('#login2').click();
    await page.fill('[id="loginusername"]', 'pavanol');
    await page.fill('[id="loginpassword"]', 'test@123');
    await page.click('[onclick="logIn()"]');

    // Add product to cart

    await page.click("//a[text()='Sony xperia z5']");
    await page.click('[onclick="addToCart(6)"]');

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept();
    });


    // Logout Page

    await page.click("//a[text()='Log out']");

});