// src/step-definitions/hooks.js
const { Before, After } = require('@wdio/cucumber-framework');
const allure = require('@wdio/allure-reporter').default;

Before(async () => {
    // Antes de cada escenario, maximiza la ventana
    await browser.maximizeWindow();
});

After(async function (scenario) {
    const { result, pickle } = scenario;
    // Solo si el escenario falla, anexamos un screenshot a Allure
    if (result.status === 'FAILED') {
        // Nombre dinámico: Nombre del escenario + timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const attachmentName = `❌ ${pickle.name} @ ${timestamp}`;

        const screenshot = await browser.takeScreenshot();
        allure.addAttachment(
            attachmentName,
            Buffer.from(screenshot, 'base64'),
            'image/png'
        );
    }
    // Recarga sesión para dejar todo limpio
    await browser.reloadSession();
});
