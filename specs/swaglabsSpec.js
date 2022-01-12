import swaglabsLoginPage from "../pages/swagLabsLoginPage.js";
import swaglabsInventoryPage from "../pages/swagLabsInventoryPage.js";
import swaglabsCartPage from "../pages/swagLabsCartPage.js";

describe ('Swag Labs tests', () => {
    beforeAll(async () => {
        browser.waitForAngularEnabled(false);
        await swaglabsLoginPage.goto();
    });

    it('should log in with standard user', async ()=> {
        await swaglabsLoginPage.loginStandardUser();
        expect(await swaglabsInventoryPage.inventoryPresent()).toBe(true);
    });

    it('should add an item to the cart', async () => {
        await swaglabsInventoryPage.goto();
        const inventoryList = swaglabsInventoryPage.getInventoryList();
        const firstItem = inventoryList.first();
        const firstItemAddBtn = swaglabsInventoryPage.getAddToCartBtn(firstItem);
        const firstItemText = swaglabsInventoryPage.getItemText(firstItem);
        const shoppingCart = swaglabsInventoryPage.getShoppingCart();
        await firstItemAddBtn.click();
        await shoppingCart.click();
        expect(await swaglabsCartPage.checkoutBtnPresent()).toBe(true);
        const cartList = swaglabsCartPage.getCartList();
        expect(await cartList.count()).toBe(1);
        const cartItem = cartList.first();
        expect(await swaglabsCartPage.getItemQuantity(cartItem)).toBe("1");
        expect(await swaglabsCartPage.getItemText(cartItem)).toBe(firstItemText);
    });

    it('should have 6 items on the inventory page', async () => {
        await swaglabsInventoryPage.goto();
        const inventoryList = swaglabsInventoryPage.getInventoryList();
        expect(await inventoryList.count()).toBe(swaglabsInventoryPage.expectedInventoryCount);
    });

    // it('should complete the purchase process of an item from the inventory', async () => {
    // });

    // BONUS tests! Not required for the automation challenge, but do these if you can.
    it('sort the inventory items by price, high-to-low', async () => {
        await swaglabsInventoryPage.sortHiLo();
        const productList = swaglabsInventoryPage.getInventoryList();
        const productListMap = await productList.map(x => swaglabsInventoryPage.getItemPrice(x))
        const productListHiLo = [...productListMap].sort((a, b) => a - b).reverse()page the ;
        expect(productListMap).toEqual(productListHiLo);
    });

    it('sort the inventory items by name, Z-to-A', async () => {
        await swaglabsInventoryPage.sortZToA();
        const productList = swaglabsInventoryPage.getInventoryList();
        const productListMap = await productList.map(x => swaglabsInventoryPage.getItemText(x))
        const productListZToA = [...productListMap].sort().reverse();
        expect(productListMap).toEqual(productListZToA);
    });
})
