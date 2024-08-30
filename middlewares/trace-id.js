const {v4: uuidv4} = require("uuid");
const {getLogger} = require("../utils/log4js");

const logger = getLogger(__filename);

// 中间件为每个请求生成 trace-id 并记录日志
app.use((req, res, next) => {
    req.traceId = uuidv4();
    logger.info(`Request traceId: ${req.traceId} - ${req.method} ${req.url}`);
    next();
});