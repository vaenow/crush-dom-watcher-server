const express = require('express');
const cors = require('cors');

require('dotenv').config();
require('./utils/mongo');

// middlewares
const traceId = require('./middlewares/trace-id')

// controllers
const alert = require('./controllers/alert')

// logger
const { getLogger } = require('./utils/log4js')
const logger = getLogger(__filename);

// express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(traceId);

// POST /alert endpoint
app.post('/alert', alert);

// 启动服务器
const SERVER_PORT = +process.env.SERVER_PORT || 3000;
app.listen(SERVER_PORT, () => {
  logger.info(`Server is running on ${SERVER_PORT}`);
});

