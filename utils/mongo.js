const mongoose = require("mongoose");
const {getLogger} = require("./log4js");

// 连接到MongoDB
const logger = getLogger(__filename);

const MONGO_URI = process.env.MONGO_URI;

;(async () => {
    logger.info('Connecting mongo ... ', MONGO_URI);

    // connect mongo
    await mongoose.connect(MONGO_URI);
    logger.info('Connected.')
})();

