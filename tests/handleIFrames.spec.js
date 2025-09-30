const { test, expect } = require('@playwright/test')

test('IFrames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });
    //frame3.locator('//input[@name="mytext3"]').fill('How are you?..');

    //await page.waitForTimeout(2000);

    // Nested Frames (or) Inner Frames (or) Child Frames

    const childFrame = await frame3.childFrames();
    await childFrame[0].locator('//div[@id="i6"]/div[3]/div').check();

    await page.waitForTimeout(2000)

});