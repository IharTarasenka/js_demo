
describe('YA.RU search box', () => {

    let buttonLocator = "button[type='submit']";
    let voiceSearch = "div.input__voice-search";
    let searchBox = "input#text";

    beforeAll(async () => {
        page.setDefaultTimeout(15000);
        await page.goto('http://ya.ru');
    });

    afterAll(async () => {
        await context.close();
        await browser.close();
    });

    afterEach(async () => {
        const screenshotBuffer = await page.screenshot();
        reporter.addAttachment("Screenshot", screenshotBuffer, "image/png");
    });

    test('should button have correct text', async () => {
        expect(await page.locator(buttonLocator).innerText()).toEqual("Найти");
    });

    test('should voice serch box be enabled', async () => {
        await page.locator(searchBox).click();
        expect(await page.locator(searchBox).isVisible()).toBeTruthy();
    });
    
    test('should suggest displayed after enter text', async () => {
        await page.locator(searchBox).fill("Hello");
        let suggest = page.locator("div.mini-suggest__popup");
        page.waitForSelector("div.mini-suggest__popup");
        expect(suggest.isVisible()).toBeTruthy();
    });

});