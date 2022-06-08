
describe('YA.RU header ', () => {

    test('should include Sign in button', async () => {
        let text = (await page.locator("div.b-inline").innerText()).replace(/\u00a0/g, ' ');
        expect(text).toEqual('Войти в почту');
    });
});