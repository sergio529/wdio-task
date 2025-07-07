const fs = require('fs');
const path = require('path');

// Crea carpeta logs si no existe
const logDir = path.join(__dirname, '..', 'logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

// Ruta del archivo de log
const logFilePath = path.join(logDir, 'logs.txt');

// Función para formatear los mensajes
function logToFile(message) {
    const timestamp = new Date().toISOString();
    const formattedMessage = `[${timestamp}] ${message}\n`;
    fs.appendFileSync(logFilePath, formattedMessage);
}

// Exporta funciones tipo logger
module.exports = {
    info: (msg) => {
        console.log('[INFO]', msg);
        logToFile('[INFO] ' + msg);
    },
    error: (msg) => {
        console.error('[ERROR]', msg);
        logToFile('[ERROR] ' + msg);
    },
    warn: (msg) => {
        console.warn('[WARN]', msg);
        logToFile('[WARN] ' + msg);
    }
};
