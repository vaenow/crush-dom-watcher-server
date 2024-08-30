const express = require('express');
const cors = require('cors');

require('dotenv').load();
require('./utils/mongo');

// controllers
const alert = require('./controllers/alert')

// logger
const { getLogger } = require('./utils/log4js')
const logger = getLogger(__filename);

// 创建Express应用
const app = express();

// 中间件解析JSON请求体
app.use(express.json());
app.use(cors());

// POST /alert 端点来接收DOM变化通知
app.post('/alert', alert);

// 启动服务器
const SERVER_PORT = +process.env.SERVER_PORT || 3000;
app.listen(SERVER_PORT, () => {
  logger.info(`Server is running on ${SERVER_PORT}`);
});

