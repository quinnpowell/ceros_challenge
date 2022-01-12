import { browser, by, element } from 'protractor';
import BasePage from './basePage';

class SwaglabsCheckoutOnePage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.saucedemo.com/checkout-complete.html";
        this.homeBtnBy = by.id("back-to-products")
        this.checkoutCompleteBy = by.id("checkout-complete-container")
    }

    async waitForCheckoutComplete() {
        browser.wait(this.inDom(element(this.homeBtnBy)), 5000);
        browser.wait(this.inDom(element(this.checkoutCompleteBy)), 5000);
    }

}
export default new SwaglabsCheckoutOnePage();