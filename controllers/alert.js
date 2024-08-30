const AlertModel = require('../models/alert')
const {getLogger} = require("../utils/log4js");

const logger = getLogger(__filename);

const alert = async (req, res) => {
    const alertList = req.body

    // 记录详细的通知数据
    logger.info(`Received alert: ${JSON.stringify(alertList)}`);

    try {
        await AlertModel.insertMany(alertList)
        res.status(200).send('AlertList received and stored.');
    } catch (err) {
        logger.error(`Error saving alert: ${err}`);
        res.status(500).send('Server Error');
    }
}

module.exports = alert