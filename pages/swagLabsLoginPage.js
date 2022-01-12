import BasePage from './basePage';

class SwaglabsLoginPage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.saucedemo.com";
        this.standardUserData = {
            username: "standard_user",
            password: "secret_sauce"
        };
        this.usernameBy = by.id("user-name");
        this.passwordBy = by.id("password");
        this.loginButtonBy = by.id("login-button");
    }
    /**
     * Navigate to the login page and validate that it loaded
     */
    async goto() {
        await browser.get(this.url, this.timeout.xl);
        await browser.wait(this.inDom(element(this.loginButtonBy)), 
            5000, 'Timed out waiting for login form to load');
    }

    /**
     * Login with the given user data
     * @param  {userData} object - should have username and password props
     */
    async login(userData) {
        await element(this.usernameBy).sendKeys(userData.username);
        await element(this.passwordBy).sendKeys(userData.password);
        await element(this.loginButtonBy).click();
    }
    /**
     * Login with the standard user
     */
    async loginStandardUser() {
        await this.login(this.standardUserData);
    }
}
export default new SwaglabsLoginPage();