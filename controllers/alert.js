const Notification = require('../models/notification')
const {getLogger} = require("../utils/log4js");

const logger = getLogger(__filename);

const alert = async (req, res) => {
    const notification = { ...req.body, traceId: req.traceId };

    console.log(notification)
    // 记录详细的通知数据
    logger.info(`Received notification: ${JSON.stringify(notification)}`);

    try {
        const newNotification = new Notification(notification);
        await newNotification.save();
        res.status(200).send('Notification received and stored.');
    } catch (err) {
        logger.error(`Error saving notification: ${err}`);
        res.status(500).send('Server Error');
    }
}

module.exports = alert