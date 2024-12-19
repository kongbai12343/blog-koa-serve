const CategoryService = require("../service/category.service");

class CategoryController {
  static async addCategory(ctx, next) {
    const { name, state } = ctx.request.body;

    const category = {
      name,
      state,
    };
    try {
      await CategoryService.addCategory(category);
      ctx.body = {
        code: 200,
        message: "success",
        data: null,
      };
    } catch (err) {
      ctx.body = {
        code: 409,
        message: err.message,
        data: null,
      };
    }
  }

  static async findCategory(ctx, next) {
    const { name } = ctx.params;
    try {
      const category = await CategoryService.findCategory(name);
      ctx.body = {
        code: 200,
        message: "success",
        data: category,
      };
    } catch (err) {
      ctx.body = {
        code: 409,
        message: err.message,
        data: null,
      };
    }
  }

  static async getCategorList(ctx, next) {
    const { pageNo, pageSize } = ctx.query;
    const queryObj = { pageNo: Number(pageNo), pageSize: Number(pageSize) };

    try {
      const categoryList = await CategoryService.getCategoryList(queryObj);
      ctx.body = {
        code: 200,
        message: "success",
        data: categoryList,
      };
    } catch (err) {
      ctx.body = {
        code: 409,
        message: err.message,
        data: null,
      };
    }
  }

  static async updateCategory(ctx, next) {
    const { name, state } = ctx.request.body;
    const { id } = ctx.params;
    let obj = { id, name, state };
    try {
      await CategoryService.updateCategory(obj);
      ctx.body = {
        code: 200,
        message: "success",
        data: null,
      };
    } catch (err) {
      ctx.body = {
        code: 409,
        message: err.message,
        data: null,
      };
    }
  }

  static async deleteCategory(ctx, next) {
    const { id } = ctx.request.params;
    try {
      await CategoryService.deleteCategory(id);
      ctx.body = {
        code: 200,
        message: "success",
        data: null,
      };
    } catch (err) {
      ctx.body = {
        code: 409,
        message: err.message,
      };
    }
  }
}

module.exports = CategoryController;
