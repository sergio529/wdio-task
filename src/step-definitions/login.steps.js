const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page.js');
const log = require('../utils/logger');

// Background step
Given('I am on the login page', async () => {
    log.info('Navigating to SauceDemo login page');
    await LoginPage.open();
});

// UC-1: Click login without credentials
When('I click the Login button', async () => {
    log.info('Clicking Login button');
    await LoginPage.clickLogin();
});

When('I clear both fields', async () => {
    log.info('Clearing both Username and Password fields');
    await LoginPage.clearUsername();
    await LoginPage.clearPassword();
});

When('I clear the password field', async () => {
    log.info('Clearing Password field');
    await LoginPage.clearPassword();
});

// UC-2: Enter only username
When('I enter username {string}', async (username) => {
    log.info(`Entering username: "${username}"`);
    await LoginPage.enterUsername(username);
});

When('I leave password field empty', async () => {
    log.info('Leaving Password field empty (clearing)');
    await LoginPage.passwordInput.clearValue();
});

When('I enter password {string}', async (password) => {
    log.info(`Entering password: "${password}"`);
    await LoginPage.enterPassword(password);
});

// Error validation for UC-1 and UC-2
Then('I should see error message {string}', async (expectedMessage) => {
    const actualMessage = await LoginPage.getErrorMessage();
    log.info(`Validating error message. Expected: "${expectedMessage}" | Actual: "${actualMessage}"`);
    await expect(actualMessage).toBe(expectedMessage);
});

// Success validation for UC-3
Then('I should be redirected to inventory page', async () => {
    log.info('Checking if user was redirected to inventory page');
    const isOnInventoryPage = await LoginPage.isOnInventoryPage();
    await expect(isOnInventoryPage).toBe(true);
});

Then('I should see the page title {string}', async (expectedTitle) => {
    const actualTitle = await LoginPage.getPageTitle();
    log.info(`Validating page title. Expected: "${expectedTitle}" | Actual: "${actualTitle}"`);
    await expect(actualTitle).toBe(expectedTitle);
});
