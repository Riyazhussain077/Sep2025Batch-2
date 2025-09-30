const { test, expect } = require('@playwright/test')

const loginData = [
    { username: 'pavanol', password: 'test@123' },
    { username: 'abc', password: '123@' },
    
];

for (const data of loginData) {
    test(`Login test : ${data.username}`, async ({ page }) => {

        await page.goto('https://demoblaze.com/');

         await page.locator('#login2').click();

        await page.fill('[id="loginusername"]', data.username);
        await page.fill('//input[@id="loginpassword"]', data.password);

        await page.click("//button[text()='Log in']");

        const logoutLink = await page.locator('//a[contains(text(),"og out")]');
        await expect(logoutLink).toBeVisible();

        await page.waitForTimeout(3000);

    });
}