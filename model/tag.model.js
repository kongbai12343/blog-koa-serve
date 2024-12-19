const { Model, DataTypes } = require("sequelize");
const sequelize = require("../app/db");

class TagModel extends Model {}

TagModel.init(
  {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: "主键ID",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "标签名",
    },
    state: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
      comment: "状态 0:禁用 1:启用",
    },
  },
  {
    sequelize,
    tableName: "tag",
    modelName: "tag",
  }
);

module.exports = TagModel;
