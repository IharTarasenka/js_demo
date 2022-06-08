
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
        let text = (await page.locator("div.b-inline").innerText()).replace(/\u00a0/g, ' ');
        expect(text).toEqual('Войти в почту');
    });
});