const { test, expect } = require('@playwright/test')

let page;
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    await page.goto('https://www.demoblaze.com/');
    await page.locator('#login2').click();
    await page.fill('[id="loginusername"]', 'pavanol');
    await page.fill('[id="loginpassword"]', 'test@123');
    await page.click('[onclick="logIn()"]');

});

test.afterAll(async () => {
     
    await page.click("//a[text()='Log out']");

});


test('Home Page Test', async () => {

    const products = await page.locator('.card-title');
    await expect(products).toHaveCount(9);

});

test('Add Product to the cart test', async () => {


    await page.click("//a[text()='Sony xperia z5']");
    await page.click('[onclick="addToCart(6)"]');

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept();
    });

});