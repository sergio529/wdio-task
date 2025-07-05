// src/step-definitions/login.steps.js - VERSIÓN OPTIMIZADA

const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page.js');

/**
 * Step Definitions for SauceDemo Login Feature
 * Implements only the required steps for UC-1, UC-2, and UC-3
 */

// Background step
Given('I am on the login page', async () => {
    await LoginPage.open();
});

// UC-1: Click login without credentials
When('I click the Login button', async () => {
    await LoginPage.clickLogin();
});

When('I clear both fields', async () => {
    await LoginPage.clearUsername();
    await LoginPage.clearPassword();
});

When('I clear the password field', async () => {
    await LoginPage.clearPassword();
});

// UC-2: Enter only username
When('I enter username {string}', async (username) => {
    await LoginPage.enterUsername(username);
});

When('I leave password field empty', async () => {
    // Password field is already empty by default
    // This step is for clarity in the feature file
    await LoginPage.passwordInput.clearValue();
});


// UC-3: Enter credentials
When('I enter password {string}', async (password) => {
    await LoginPage.enterPassword(password);
});

// Error validation for UC-1 and UC-2
Then('I should see error message {string}', async (expectedMessage) => {
    const actualMessage = await LoginPage.getErrorMessage();
    await expect(actualMessage).toBe(expectedMessage);
});

// Success validation for UC-3
Then('I should be redirected to inventory page', async () => {
    const isOnInventoryPage = await LoginPage.isOnInventoryPage();
    await expect(isOnInventoryPage).toBe(true);
});

Then('I should see the page title {string}', async (expectedTitle) => {
    const actualTitle = await LoginPage.getPageTitle();
    await expect(actualTitle).toBe(expectedTitle);
});