const { test, expect } = require('@playwright/test')

test('Handle Dropdown', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');

    // Multiple ways to select option from the dropdown

    //await page.locator('#country').selectOption({ label: 'Canada' }); // label in visible text
    //await page.locator('#country').selectOption('Germany'); // by visible text
    //await page.locator('#country').selectOption({ value: "uk" }) // by using value
    //await page.locator('#country').selectOption({ index: 3 }); // by using index;
    //await page.selectOption('#country', 'India'); // by text


    // Assertions

    // 1) Check number of options in dropdown   - method 1

    // const options = await page.locator('#country option');
    // await expect(options).toHaveCount(10);

    // 2) Check number of options in dropdown   - method 2

    // const options = await page.$$('#country option');
    // console.log("Number of options :" , options.length);
    // await expect(options.length).toBe(10);

    // 3) check presence of value in the dropdown   - method 1

    // const content = await page.locator('#country').textContent();
    // await expect(content.includes('usa')).toBeFalsy();


    // 4) check presence of value in the dropdown  - method 2 (using loop)

    // const options = await page.$$('#country option');

    // for(const option of options) {
    //     //console.log(await option.textContent());
    //     let value = await option.textContent();
    //     if(value.includes('France')) {
    //         break;
    //     }
        
    // }

    // 5) Select option from the dropdown using loop

    const options = await page.$$('#country option');

    for(const option of options) {
        let value = await option.textContent();
        if(value.includes('china')) {
            await page.selectOption('#country option');
            break;
        }
    };



    







    await page.waitForTimeout(2000);
});