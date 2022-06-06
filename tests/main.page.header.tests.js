
describe('YA.RU header ', () => {

    beforeAll(async () => {
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

    test('should include Sign in button', async () => {
        expect(await page.locator("div.b-inline").innerText()).toEqual("Войти в почту")
    });

    test('should include Start page button', async () => {
        let bText = await page.locator("//a[contains(@class, 'b-sethome')]").innerText();
        expect(bText).toEqual("Сделать стартовой");
    });
});