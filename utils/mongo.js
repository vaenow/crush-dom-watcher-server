const mongoose = require("mongoose");
const {getLogger} = require("./log4js");

// 连接到MongoDB
const logger = getLogger(__filename);

const MONGO_URI = process.env.MONGO_URI;

;(async () => {
    logger.info('Connecting mongo ... ', MONGO_URI);

    // connect mongo
    const mongoClient = await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // check mongo status
    if (await mongoClient.isConnected()) {
        logger.info('Connected.')
    } else {
        logger.error('ERR Connecting mongo!')
    }

})();

