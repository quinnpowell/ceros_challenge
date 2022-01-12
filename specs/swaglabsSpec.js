import swaglabsLoginPage from "../pages/swagLabsLoginPage.js";
import swagLabsInventoryPage from "../pages/swagLabsInventoryPage.js";

describe ('Swag Labs tests', () => {
    beforeAll(async () => {
        browser.waitForAngularEnabled(false);
        await swaglabsLoginPage.goto();
    });

    it('should log in with standard user', async ()=> {
        await swaglabsLoginPage.loginStandardUser();
        expect(await swagLabsInventoryPage.inventoryPresent()).toBe(true);
    });

    it('should add an item to the cart', async () => {
    });

    it('should have 6 items on the inventory page', async () => {
        await swagLabsInventoryPage.goto();
        let inventoryList = swagLabsInventoryPage.getInventoryList();
        expect(await inventoryList.count()).toBe(swagLabsInventoryPage.expectedInventoryCount);
    });

    it('should complete the purchase process of an item from the inventory', async () => {
    });

    // BONUS tests! Not required for the automation challenge, but do these if you can.
    it('sort the inventory items by price, high-to-low', async () => {
    });

    it('sort the inventory items by name, Z-to-A', async () => {
    });


})
