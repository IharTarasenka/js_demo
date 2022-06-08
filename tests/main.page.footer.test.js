
describe('YA.RU footer ', () => {

    let footerLink = "a[data-statlog='logo']";

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

    test('should yandex link have correct text', async () => {
        let title = (await page.locator(footerLink).getAttribute("title"));
        expect(title).toEqual('Яндекс');
    });

    test('should yandex link have correct href', async () => {
        let link = (await page.locator(footerLink).getAttribute("href"));
        expect(link).toEqual('//yandex.ru');
    });
});