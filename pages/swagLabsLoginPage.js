import BasePage from './basePage';

class SwaglabsLoginPage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.saucedemo.com";
    }

    async goto() {
        await browser.get(this.url, this.timeout.xl);
        expect(await browser.getCurrentUrl()).toContain(this.url);
    }
}
export default new SwaglabsLoginPage();