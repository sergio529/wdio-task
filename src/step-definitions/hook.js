const { Before, After } = require('@wdio/cucumber-framework');

Before(async () => {
    await browser.maximizeWindow();
});

After(async () => {
    await browser.reloadSession();
});