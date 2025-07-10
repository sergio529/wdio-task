const { Before, After } = require('@wdio/cucumber-framework');
const allure = require('@wdio/allure-reporter').default;

Before(async () => {
    // Maximize browser window before each scenario
    await browser.maximizeWindow();
});

After(async function (scenario) {
    const { result, pickle } = scenario;

    // If the scenario failed, capture and attach a screenshot
    if (result.status === 'FAILED') {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const attachmentName = `❌ ${pickle.name} @ ${timestamp}`;
        const screenshot = await browser.takeScreenshot();

        allure.addAttachment(
            attachmentName,
            Buffer.from(screenshot, 'base64'),
            'image/png'
        );
    }

    // Reset browser session after each scenario
    await browser.reloadSession();
});
