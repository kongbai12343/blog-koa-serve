const { Sequelize }  = require('sequelize');

const envConfig = require('./config');

const sequelize = new Sequelize(envConfig.mysql.database, envConfig.mysql.user, envConfig.mysql.password, {
  host: envConfig.mysql.host,
  dialect: 'mysql',
  timezone: '+08:00',
  logging: false
});

// 同步模型
sequelize.sync({ force: false });

// 测试连接
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;