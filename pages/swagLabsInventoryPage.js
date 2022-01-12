import BasePage from './basePage';

class SwaglabsInventoryPage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.saucedemo.com/inventory.html";
        this.inventoryContainerBy = by.id("inventory_container");
        this.inventoryItemBy = by.css(".inventory_item")
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

    getInventoryList() {
        return element.all(this.inventoryItemBy)
    }

}
export default new SwaglabsInventoryPage();