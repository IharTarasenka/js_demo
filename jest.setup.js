
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