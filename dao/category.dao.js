const CategoryModel = require("../model/category.model");
class CategoryDao {
  static async addCategory(category) {
    await CategoryModel.create(category);
  }

  static async findCategory(name) {
    return await CategoryModel.findOne({
      attributes: ["id", "name", "state"],
      where: {
        name,
      },
    });
  }

  static async findAllCategory(queryObj) {
    return await CategoryModel.findAll({
      order: [["id", "DESC"]],
      attributes: ["id", "name", "state"],
      limit: queryObj.pageSize,
      offset: (queryObj.pageNo - 1) * queryObj.pageSize,
    });
  }

  static async updateCategory(tag) {
    await CategoryModel.update(
      { name: tag.name, state: tag.state },
      {
        where: {
          id: tag.id,
        },
      }
    );
  }

  static async deleteCategory(id) {
    await CategoryModel.destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = CategoryDao;
