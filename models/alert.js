const mongoose = require('mongoose');

// model schema
const schema = new mongoose.Schema({
    browser: String,
    url: String,
    mutationType: String,
    target: String,
    timestamp: String,
    ts: Number,
    traceId: String,
});

module.exports = mongoose.model('alert', schema);