const { test, expect } = require('@playwright/test')

test('Date Pickers', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.locator('input#datepicker').fill('10/07/2025');

    // Date Picker

    const year = '1991'
    const month = 'December'
    const date = '3'

    await page.click('[id="datepicker"]'); // Opens Calender

    while(true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if(currentYear == year && currentMonth == month) {
            break;
        }

       // await page.locator('a[title="Next"]').click();  // Next in Calender
        await page.locator('a[title="Prev"]').click(); // Past in Calender
    }

    const dates = await page.$$('//a[@class="ui-state-default"]');

    // date selection using loop

    for(const dt of dates) {
        if(await dt.textContent() == date) {
            await dt.click();
            break;
        }
    }


    //  Date selection without loop

    //await page.click('//a[@class="ui-state-default"][text()="11"]');

    await page.click(`//a[@class="ui-state-default"][text()='${date}']`)



    await page.waitForTimeout(3000);


});