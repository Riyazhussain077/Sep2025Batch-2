const { test, expect } = require('@playwright/test');

test('Mocking' , async ({page}) => {

    // 1) Mock the api
    await page.route('https://jsonplaceholder.typicode.com/posts' , async route => {
        await route.fulfill({
            status : 404,
            contentType : 'application/json',
            body : JSON.stringify([{title : 'Mocking Post' , id : 1}])
        });
    });

    // 2) Open the page that calls the api

    await page.goto('https://jsonplaceholder.typicode.com/posts');

    // 3) Validate the fake api

    const text = await page.locator('body').innerText();
    await expect(text).toContain('Mocking Post');
});

//  1) GET   -> Fetch all posts

test('GET', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/posts');
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log("Total Posts fetched :", body.length);
    await expect(body.length).toBeGreaterThan(0);

});

// 2) POST   -> Creates a new post with your data..

test('POST', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'QA Automation with Playwright',
            body: 'This post is all about HTTP post Method',
            userId: 171     // we can set any custom user id
        }
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    console.log("Created POST Id:", body.id);
    expect(body).toHaveProperty('id');
    expect(body.title).toBe('QA Automation with Playwright');
});

// 3) PUT    -> Updating an existing Post..

test('PUT', async ({ request }) => {

    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
            id: 1,
            title: "This is the updated version of Playwright",
            body: "This is an PUT request",
            userId: 171
        }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log("Updated Post Title :", body.title);
    expect(body.title).toBe('This is the updated version of Playwright');

});

// 4) DELETE    -> Delete the created post

test('Delete', async ({ request }) => {

    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
    console.log("Post deleted successfully");
});