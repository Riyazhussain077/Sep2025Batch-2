const { test, expect } = require('@playwright/test')

test('Test 1', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await expect(page).toHaveURL('https://www.amazon.in/');
});

test('Test 2', async ({ page }) => {

    await page.goto('https://www.flpkart.com/');
    await expect(page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
});

test('Test 3', async ({ page }) => {

    await page.goto('https://www.swiggy.com/restaurants');
    await expect(page).toHaveURL('https://www.swiggy.com/restaurants');
});