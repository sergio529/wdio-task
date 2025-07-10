class LoginPage {

    // Username input field
    get usernameInput() {
        return $('//input[@id="user-name"]');
    }

    // Password input field
    get passwordInput() {
        return $('//input[@id="password"]');
    }

    // Login button
    get loginButton() {
        return $('//input[@type="submit" and @value="Login"]');
    }

    // Error message container
    get errorMessage() {
        return $('//div[contains(@class,"error-message-container")]//h3');
    }

    // Application logo/title
    get pageTitle() {
        return $('//div[@class="app_logo"]');
    }

    // Clear username field
    async clearUsername() {
        await this.usernameInput.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Delete');
    }

    // Clear password field
    async clearPassword() {
        await this.passwordInput.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Delete');
    }

    // Clear both input fields
    async clearBothFields() {
        await this.clearUsername();
        await this.clearPassword();
    }

    // Navigate to login page
    async open() {
        await browser.url('/');
    }

    // Fill in username
    async enterUsername(username) {
        await this.usernameInput.setValue(username);
    }

    // Fill in password
    async enterPassword(password) {
        await this.passwordInput.setValue(password);
    }

    // Click login button
    async clickLogin() {
        await this.loginButton.click();
    }

    // Get error message text
    async getErrorMessage() {
        await this.errorMessage.waitForDisplayed({ timeout: 5000 });
        return await this.errorMessage.getText();
    }

    // Get page title text
    async getPageTitle() {
        await this.pageTitle.waitForDisplayed({ timeout: 5000 });
        return await this.pageTitle.getText();
    }

    // Check if user is on inventory page
    async isOnInventoryPage() {
        const url = await browser.getUrl();
        return url.includes('/inventory.html');
    }
}

module.exports = new LoginPage();
