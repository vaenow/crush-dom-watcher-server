const mongoose = require('mongoose');

// 创建通知模型
const schema = new mongoose.Schema({
    browser: String,
    url: String,
    mutationType: String,
    target: String,
    timestamp: String,
    ts: Number,
    traceId: String,
});

module.exports = mongoose.model('Notification', schema);