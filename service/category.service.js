const CategoryDao = require("../dao/category.dao");

class CategoryService {
  static async addCategory(category) {
    // 先判断标签是否已经存在
    const categoryInfo = await CategoryDao.findCategory(category.name);
    if (categoryInfo) {
      throw new Error("分类已存在");
    }
    await CategoryDao.addCategory(category);
  }

  static async findCategory(name) {
    return await CategoryDao.findCategory(name);
  }

  static async getCategoryList(queryObj) {
    return await CategoryDao.findAllCategory(queryObj);
  }

  static async updateCategory(tag) {
    await CategoryDao.updateCategory(tag);
  }

  static async deleteCategory(id) {
    await CategoryDao.deleteCategory(id);
  }
}

module.exports = CategoryService;
