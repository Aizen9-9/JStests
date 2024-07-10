import {test, expect} from "playwright/test";

test("navigate Swagger patstore", async ({ page }) => {
await page.goto("https://petstore.swagger.io/");
await expect(page).toHaveTitle(/Swagger UI/); 
})

test('check postpet', async ({ page }) =>{
    await page.goto("https://petstore.swagger.io/");
    let postpet = page.getByRole('button', { name: 'POST /pet/{petId}/uploadImage uploads an image' });
    await expect(postpet).toBeVisible();
})

test('check find', async ({page}) => {
    await page.goto("https://petstore.swagger.io/");
    let find = page.getByRole('button', { name: 'Explore' });
    await expect(find).toBeVisible();
})

test('check logo', async ({page}) => {
    await page.goto("https://petstore.swagger.io/");
    let logo = page.locator('a').filter({ hasText: '.logo_small_svg__cls-2{fill:#' });
    await expect(logo).toBeVisible();
})

const axios = require('axios');

test('POST request example', async () => {
    const userData = {
        id: 0,
        username: "Bodya",
        firstName: "Banan",
        lastName: "Badanich",
        email: "qatesterclub@gmail.com",
        password: "12345678",
        phone: "77777777",
        userStatus: 0
    };
    const response = await axios.post('https://petstore.swagger.io/v2/user', userData);
    expect(response.status).toBe(200);
    console.log(response);
})