import { browser, by, element } from 'protractor';
import BasePage from './basePage';

class SwaglabsCartPage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.saucedemo.com/cart.html";
        this.checkoutBtnBy = by.id("checkout");
        this.cartItemBy = by.css(".cart_item");
        this.cartCheckoutBy = by.id("checkout");
        this.checkoutInfoFormBy = by.css(".checkout_info");
        this.continueBtnBy = by.id("continue")
        this.checkoutInfoFieldBys = {
            firstName: by.id("first-name"),
            lastName: by.id("last-name"),
            zipCode: by.id("postal-code")
        };
        this.checkoutInfo = {
            firstName: "Java",
            lastName: "Script",
            zipCode: "12345"
        };
    }

    async goto() {
        await browser.get(this.url, this.timeout.xl);
        await this.checkoutBtnPresent();
    }

    async checkoutBtnPresent() {
        return browser.wait(this.inDom(element(this.checkoutBtnBy)), 
            5000, 'Timed out waiting for checkout button to load');
    }

    getCartList() {
        return element.all(this.cartItemBy);
    }

    getItemText(cartItem) {
        return cartItem.$(".inventory_item_name").getText();
    }

    async clickCheckout() {
        await element(this.cartCheckoutBy).click();
        await browser.wait(element(this.checkoutInfoFormBy), 5000)
    }

    async fillCheckoutInfo() {
        for (const field in this.checkoutInfo) {
            await element(this.checkoutInfoFieldBys[field]).sendKeys(this.checkoutInfo[field]);
        }
    }

    async getItemQuantity(cartItem) {
        return cartItem.$(".cart_quantity").getText();
    }

}
export default new SwaglabsCartPage();