const { test, expect } = require('@playwright/test')

test('Frames', async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // Total Frames

    const allFrames = await page.frames();
    console.log("Number of Frames:", allFrames.length);

    // Approach 1 : Using name or url..

    //const frameName = await page.frame('name'); // If name is present, we can use that..
    // const frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
    // await frame1.fill('[name="mytext1"]', 'Good Morning');

    // await page.waitForTimeout(2000);

    // Approach 2 : using frame Locator

    const inputBox = await page.frameLocator('//frame[@src="frame_1.html"]').locator('//input[@name="mytext1"]');
    inputBox.fill('Hello, All');


    await page.waitForTimeout(2000);

});