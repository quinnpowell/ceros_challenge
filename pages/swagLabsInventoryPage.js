import BasePage from './basePage';

class SwaglabsInventoryPage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.suacedemo.com/inventory.html";
        this.inventoryContainerBy = by.id("inventory_container");
    }

    async inventoryPresent() {
        return browser.wait(this.inDom(element(this.inventoryContainerBy)), 
            5000, 'Timed out waiting for inventory to load');
    }

}
export default new SwaglabsInventoryPage();