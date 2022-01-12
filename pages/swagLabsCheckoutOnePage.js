import { browser, by, element } from 'protractor';
import BasePage from './basePage';

class SwaglabsCheckoutOnePage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.saucedemo.com/checkout-step-one.html";
        this.continueBtnBy = by.id("continue")

    }

     /**
     * Clicks continue on checkout page one
     */
    async clickContinueBtn() {
        await element(this.continueBtnBy).click();
    }

}
export default new SwaglabsCheckoutOnePage();