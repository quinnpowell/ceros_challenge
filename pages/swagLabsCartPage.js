import { browser, by, element, ElementArrayFinder } from 'protractor';
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

    /**
     * Go to the cart page and make sure it loaded
     * Assumes the user has logged in already
     */
    async goto() {
        await browser.get(this.url, this.timeout.xl);
        await this.checkoutBtnPresent();
    }

    /**
     * Checks if the checkout button is present
     * @return {Promise} - resolves to true or false
     */
    async checkoutBtnPresent() {
        return browser.wait(this.inDom(element(this.checkoutBtnBy)), 
            5000, 'Timed out waiting for checkout button to load');
    }

    /**
     * Gets the list of all items in the cart
     * @return {ElementArrayFinder}
     */
    getCartList() {
        return element.all(this.cartItemBy);
    }

    /**
     * Gets the text of a given cart item
     * @param  {elementFinder} cartItem
     * @return {string}
     */
    getItemText(cartItem) {
        return cartItem.$(".inventory_item_name").getText();
    }

    /**
     * Click the checkout button
     */
    async clickCheckout() {
        await element(this.cartCheckoutBy).click();
        await browser.wait(element(this.checkoutInfoFormBy), 5000)
    }

    /**
     * Fill the checkout form with fake person data
     */
    async fillCheckoutInfo() {
        for (const field in this.checkoutInfo) {
            await element(this.checkoutInfoFieldBys[field]).sendKeys(this.checkoutInfo[field]);
        }
    }

    /**
     * Get the quantity of a given item in the cart
     * @param  {elementFinder} cartItem
     * @return {Promise} - resolves with a string 
     */
    async getItemQuantity(cartItem) {
        return cartItem.$(".cart_quantity").getText();
    }

}
export default new SwaglabsCartPage();