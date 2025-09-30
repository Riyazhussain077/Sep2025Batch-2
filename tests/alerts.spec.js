const {test,expect} = require ('@playwright/test')

test.skip('Alert with OK' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Dialog window handler

    page.on('dialog' , async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });
    await page.click('//button[@id="alertBtn"]');
    await page.waitForTimeout(2000);


});

test.skip('Confirm alert with OK and cancel' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Dialog window handler

    page.on('dialog' , async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); // close by using OK button
        //await dialog.dismiss(); // close by using cancel button
    });
    await page.click('//button[@id="confirmBtn"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');
    await page.waitForTimeout(2000);

});


test('Prompt Alert' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling Dialog window handler

    page.on('dialog' , async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Raguraman'); // close by using OK button
        //await dialog.dismiss(); // close by using cancel button
    });
    await page.click('//button[@id="promptBtn"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Raguraman! How are you today?');
    await page.waitForTimeout(2000);
});

