

class LoginPage {

    get usernameInput() {
        return $('//input[@id="user-name"]');
    }
    
    get passwordInput() {
        return $('//input[@id="password"]');
    }
    
    get loginButton() {
        return $('//input[@type="submit" and @value="Login"]');
    }
    
    get errorMessage() {
        return $('//div[contains(@class,"error-message-container")]//h3');
    }
    
    get pageTitle() {
        return $('//div[@class="app_logo"]');
    }
    


    async clearUsername() {
        await this.usernameInput.clearValue();
    }
    
    async clearPassword() {
        await this.passwordInput.clearValue();
    }
    
    async clearBothFields() {
        await this.clearUsername();
        await this.clearPassword();
    }

    async open() {
        await browser.url('/');
    }
    
    async enterUsername(username) {
        await this.usernameInput.setValue(username);
    }
    
    async enterPassword(password) {
        await this.passwordInput.setValue(password);
    }
    
    async clickLogin() {
        await this.loginButton.click();
    }
    
    async getErrorMessage() {
        await this.errorMessage.waitForDisplayed({ timeout: 5000 });
        return await this.errorMessage.getText();
    }
    
    async getPageTitle() {
        await this.pageTitle.waitForDisplayed({ timeout: 5000 });
        return await this.pageTitle.getText();
    }
    
    async isOnInventoryPage() {
        const url = await browser.getUrl();
        return url.includes('/inventory.html');
    }
}

module.exports = new LoginPage();