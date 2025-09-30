const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { CartPage } = require('../pages/CartPage');

test('POM', async ({ page }) => {

    // LOG IN

    const login = new LoginPage(page);
    await login.lauchUrl();
    await login.login('pavanol', 'test@123');
    await page.waitForTimeout(3000);

    // HOME PAGE

    const home = new HomePage(page);
    await home.addProduct('Samsung galaxy s6');
    await page.waitForTimeout(3000);
    await home.goToCart();

    // CART PAGE

    const cart = new CartPage(page);
    await page.waitForTimeout(3000);
    const status = await cart.CheckProductInCart('Samsung galaxy s6');
    await expect(status).toBe(true);

});

