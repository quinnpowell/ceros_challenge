import BasePage from './basePage';

class SwaglabsCartPage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.saucedemo.com/cart.html";
        this.checkoutBtnBy = by.id("checkout");
        this.cartItemBy = by.css(".cart_item");
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

    async getItemQuantity(cartItem) {
        return cartItem.$(".cart_quantity").getText();
    }

}
export default new SwaglabsCartPage();