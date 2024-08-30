const log4js = require("log4js");
const path = require("path");

// 配置log4js
log4js.configure({
    appenders: {
        file: {type: 'file', filename: 'logs/server.log'},
        console: {type: 'console'}
    },
    categories: {
        default: {appenders: ['file', 'console'], level: 'info'}
    }
});

// get logger
const getLogger = (filename) => {
    return log4js.getLogger(path.parse(filename).name);
}

module.exports = {
    getLogger,
}
