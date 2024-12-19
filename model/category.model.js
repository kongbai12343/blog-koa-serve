const { Model, DataTypes } = require("sequelize");
const sequelize = require("../app/db");

class CategoryModel extends Model {}

CategoryModel.init(
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
      comment: "分类名",
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
    tableName: "category",
    modelName: "category",
  }
);

module.exports = CategoryModel;
