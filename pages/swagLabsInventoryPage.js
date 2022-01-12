import { browser, element } from 'protractor';
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

    async goto() {
        await browser.get(this.url, this.timeout.xl);
        await this.inventoryPresent()
    }

    async inventoryPresent() {
        return browser.wait(this.inDom(element(this.inventoryContainerBy)), 
            5000, 'Timed out waiting for inventory to load');
    }

    async sortHiLo() {
        await element(this.sortDropdownBy).click();
        await element(this.sortHiLoBy).click();
        await this.inventoryPresent();
    }

    async sortZToA() {
        await element(this.sortDropdownBy).click();
        await element(this.sortZToABy).click();
        await this.inventoryPresent();
    }

    getInventoryList() {
        return element.all(this.inventoryItemBy);
    }

    getAddToCartBtn(inventoryItem) {
        return inventoryItem.$(".btn_inventory");
    }

    getItemText(inventoryItem) {
        return inventoryItem.$(".inventory_item_name").getText();
    }

    async getItemPrice(inventoryItem) {
        const text = await inventoryItem.$(".inventory_item_price").getText()
        return parseFloat(text.slice(1));
    }

    getShoppingCart() {
        return element(this.shoppingCartBy)
    }

}
export default new SwaglabsInventoryPage();