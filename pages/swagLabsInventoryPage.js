import { browser, element, ElementArrayFinder, ElementFinder } from 'protractor';
import BasePage from './basePage';

class SwaglabsInventoryPage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.saucedemo.com/inventory.html";
        this.inventoryContainerBy = by.id("inventory_container");
        this.inventoryItemBy = by.css(".inventory_item")
        this.addToCartBy = by.css(".inventory_item .btn_inventory")
        this.shoppingCartBy = by.id("shopping_cart_container")
        this.sortDropdownBy = by.css('.product_sort_container');
        this.sortZToABy = by.css('.product_sort_container [value="za"]');
        this.sortHiLoBy = by.css('.product_sort_container [value="hilo"]');
        this.expectedInventoryCount = 6;
    }

    /**
     * Go to the inventory page and validate that inventory is present
     * Assumes a user has logged in
     */
    async goto() {
        await browser.get(this.url, this.timeout.xl);
        await this.inventoryPresent()
    }

    /**
     * Checks whether inventory list is present on the page
     * @return {Promise} - resolves to true or false
     */
    async inventoryPresent() {
        return browser.wait(this.inDom(element(this.inventoryContainerBy)), 
            5000, 'Timed out waiting for inventory to load');
    }

    /**
     * Sorts the inventory by price - high to low
     */
    async sortHiLo() {
        await element(this.sortDropdownBy).click();
        await element(this.sortHiLoBy).click();
        await this.inventoryPresent();
    }

    /**
     * Sorts the inventory alphabetically - Z to A
     */
    async sortZToA() {
        await element(this.sortDropdownBy).click();
        await element(this.sortZToABy).click();
        await this.inventoryPresent();
    }

    /**
     * Gets the list of inventory elements on the page
     * @return {ElementArrayFinder}
     */
    getInventoryList() {
        return element.all(this.inventoryItemBy);
    }

    /**
     * Gets the add to cart button element
     * @return {ElementFinder} - does the element have the class?
     */
    getAddToCartBtn(inventoryItem) {
        return inventoryItem.$(".btn_inventory");
    }

    /**
     * Gets the item text given an inventory item element
     * @param  {ElementFinder} inventoryItem
     * @return {string}
     */
    getItemText(inventoryItem) {
        return inventoryItem.$(".inventory_item_name").getText();
    }

    /**
     * Gets the price of an inventory item
     * @param  {ElementFinder} inventoryItem
     * @return {Promise} - resolves to float of the price
     */
    async getItemPrice(inventoryItem) {
        const text = await inventoryItem.$(".inventory_item_price").getText()
        return parseFloat(text.slice(1));
    }

     /**
     * Gets the shopping cart item
     * @return {ElementFinder}
     */   
    getShoppingCart() {
        return element(this.shoppingCartBy)
    }

    /**
     * Adds the first item to the cart
     */
    async addItemToCart() {
        const inventoryList = this.getInventoryList();
        const firstItem = inventoryList.first();
        const firstItemAddBtn = this.getAddToCartBtn(firstItem);
        const shoppingCart = this.getShoppingCart();
        await firstItemAddBtn.click();
        await shoppingCart.click();
    }

}
export default new SwaglabsInventoryPage();