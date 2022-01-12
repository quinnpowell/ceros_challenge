import BasePage from './basePage';

class SwaglabsCheckoutTwoPage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.saucedemo.com/checkout-step-two.html";
        this.finishBtnBy = by.id("finish")
    }

    async clickFinishBtn() {
        await element(this.finishBtnBy).click();
    }
}
export default new SwaglabsCheckoutTwoPage();