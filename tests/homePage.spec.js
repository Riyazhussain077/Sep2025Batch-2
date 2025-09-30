const {test,expect} = require ('@playwright/test')

//import {test,expect} from '@playwright/test' ( Alternative way for 1st syntax)

test('HomePage' , async ({page}) => {

    await page.goto('https://demoblaze.com/');

    await expect(page).toHaveURL('https://demoblaze.com/');

    await expect(page).toHaveTitle('STORE');

    await page.waitForTimeout(3000);

    await page.close();

});

