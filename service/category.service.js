const CategoryDao = require("../dao/category.dao");

class CategoryService {
  static async addCategory(category) {
    // 先判断标签是否已经存在
    const categoryInfo = await CategoryDao.findCategoryByName(category.name);
    if (categoryInfo) {
      throw new Error("分类已存在");
    }
    await CategoryDao.addCategory(category);
  }

  static async findCategoryByName(name) {
    return await CategoryDao.findCategoryByName(name);
  }

  static async getCategoryList(queryObj) {
    return await CategoryDao.findAllCategory(queryObj);
  }

  static async updateCategory(tag) {
    const categoryInfo = await CategoryDao.findCategoryById(tag.id);
    if (!categoryInfo) {
      throw new Error("分类不存在");
    }
    await CategoryDao.updateCategory(tag);
  }

  static async deleteCategory(id) {
    const categoryInfo = await CategoryDao.findCategoryById(id);
    if (!categoryInfo) {
      throw new Error("分类不存在");
    }
    await CategoryDao.deleteCategory(id);
  }
}

module.exports = CategoryService;
