const { test, expect } = require('@playwright/test')

test('KeyBoard Actions', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare');

    await page.locator('//textarea[@name="text1"]').fill('Good Morning All..');

    // Ctrl + A      -> Select the Text

    await page.keyboard.press('Control+A');

    // Crtl + C      -> Copy the Text

    await page.keyboard.press('Control+C');

    // Tab

    await page.keyboard.down('Tab');
    await page.waitForTimeout(3000);
    await page.keyboard.up('Tab');

    // Ctrl  + V           -> Patse the Text

    await page.keyboard.press('Control+V');

    await page.waitForTimeout(3000);

});