const { Model, DataTypes } = require("sequelize");
const sequelize = require("../app/db");

class ArticleModel extends Model {}

ArticleModel.init(
  {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: "文章主键ID",
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "文章标题",
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "文章内容",
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: "文章关联的用户ID",
    },
    article_category_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: "文章关联的分类ID",
    },
    article_tag_ids: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "文章关联的标签IDs",
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: 1,
      comment: "文章状态，0：禁用，1：启用",
    },
    favorite_num: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "文章点赞次数",
    },
    browse_num: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "文章浏览次数",
    },
  },
  {
    sequelize,
    modelName: "article",
    tableName: "article",
  }
);

module.exports = ArticleModel;
