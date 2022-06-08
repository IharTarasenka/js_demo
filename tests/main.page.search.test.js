
describe('YA.RU search box', () => {

    let buttonLocator = "button[type='submit']";
    let searchBox = "input#text";
    // let inpuClear = "span.input__clear";

    test('should button have correct text', async () => {
        expect(await page.locator(buttonLocator).innerText()).toEqual("Найти");
    });

    test('should suggest displayed after enter text', async () => {
        await page.locator(searchBox).fill("Hello");
        let suggest = page.locator("div.mini-suggest__popup");
        expect(suggest.isVisible()).toBeTruthy();
    });

    // test('should inpput clear be enabled', async () => {
    //     await page.locator(searchBox).fill("Hello");
    //     expect(await page.locator(inpuClear).isEnabled()).toBeTruthy();
    // });

});