const fs = require('fs');
const path = require('path');

// Creates folder if not exists
const logDir = path.join(__dirname, '..', 'logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

// lof file path
const logFilePath = path.join(logDir, 'logs.txt');

// log format file
function logToFile(message) {
    const timestamp = new Date().toISOString();
    const formattedMessage = `[${timestamp}] ${message}\n`;
    fs.appendFileSync(logFilePath, formattedMessage);
}

// Log functions export
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
