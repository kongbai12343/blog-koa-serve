const { Model, DataTypes } = require('sequelize');

const sequelize = require('../app/db');

class UserModel extends Model {};

UserModel.init({
  id: {
    type: DataTypes.INTEGER(10).UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    comment: '用户主键ID'
  },
  username: {
    type: DataTypes.STRING(30),
    allowNull: false,
    comment: '用户名'
  },
  password: {
    type: DataTypes.STRING(32),
    allowNull: false,
    comment: '登录密码'
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: true,
    comment: '0:禁用，1:正常'
  }
},{
  sequelize,
  modelName: 'user',
  tableName: 'user'
});

module.exports = UserModel;