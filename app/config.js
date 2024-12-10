const dotenv = require('dotenv');

// 把.env文件内容加载到process.env中
dotenv.config();

module.exports = {
  // 数据库配置
  mysql: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  },
  // 端口配置
  port: process.env.APP_PORT
};