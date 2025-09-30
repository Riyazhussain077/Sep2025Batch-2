const { test, expect} = require('@playwright/test')

test('Handling Tables', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('//table[@id="productTable"]');


    // 1) Total Number of rows and columns

    const columns = await table.locator('thead tr th');
    console.log("Number of Columns:", await columns.count());
    expect(await columns.count()).toBe(4);

    const rows = await table.locator('tbody tr');
    console.log("Number of Rows:", await rows.count());
    expect(await rows.count()).toBe(5);


    // 2) Select check Box for any product

    const matchecRows = rows.filter({
        has: page.locator('td'),
        hasText: 'Laptop'
    })
    const checkBox = matchecRows.locator('input').first();
    await checkBox.check();


    // 3) Select multiple products by re-usable function

    await productSelect(rows, page, 'Smartphone')
    await productSelect(rows, page, 'Tablet')
    await productSelect(rows, page, 'Smartwatch')
    await productSelect(rows, page, 'Wireless Earbuds')


    // 4) Print all product details using loop

    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i);
        const tds = row.locator('td')

        for (let j = 0; j < await tds.count() - 1; j++) {

            console.log(await tds.nth(j).textContent());

        }
    }

    // 5) Read all data from the table

    const pages = await page.locator('#pagination li a');
    console.log('Number of pages in the table:', await pages.count());

    for (let p = 0; p < await pages.count(); p++) {
        if (p > 0) {
            await pages.nth(p).click();
        }

        for (let i = 0; i < await rows.count(); i++) {
            const row = rows.nth(i);
            const tds = row.locator('td')

            for (let j = 0; j < await tds.count() - 1; j++) {


                console.log(await tds.nth(j).textContent());

            }
        }

    }
    await page.waitForTimeout(3000);

});

async function productSelect(rows, page, name) {
    const matchecRows = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchecRows.locator('input').check();
}