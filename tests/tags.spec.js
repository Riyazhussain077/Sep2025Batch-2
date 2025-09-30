const {test,expect} = require ('@playwright/test')

test('Test 1@Amazon' , async ({page}) => {

    console.log("This is Tag Concept 1");
});

test('Test 2@Flipkart' , async ({page}) => {

    console.log("This is Tag Concept 2");
});

test('Test 3@Flipkart' , async ({page}) => {

    console.log("This is Tag Concept 3");
});

test('Test 4@Amazon' , async ({page}) => {

    console.log("This is Tag Concept 4");
});

test('Test 5@Amazon@Flipkart' , async ({page}) => {

    console.log("This is Tag Concept 5");
});
