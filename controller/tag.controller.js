const TagService = require("../service/tag.service");

class TagController {
  static async addTag(ctx, next) {
    const { name, state } = ctx.request.body;

    const tag = {
      name,
      state,
    };
    try {
      await TagService.addTag(tag);
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

  static async findTagByName(ctx, next) {
    const { name } = ctx.params;
    try {
      const tag = await TagService.findTagByName(name);
      ctx.body = {
        code: 200,
        message: "success",
        data: tag,
      };
    } catch (err) {
      ctx.body = {
        code: 409,
        message: err.message,
        data: null,
      };
    }
  }

  static async getTagList(ctx, next) {
    const { pageNo, pageSize } = ctx.query;
    const queryObj = { pageNo: Number(pageNo), pageSize: Number(pageSize) };

    try {
      const tagList = await TagService.getTagList(queryObj);
      ctx.body = {
        code: 200,
        message: "success",
        data: tagList,
      };
    } catch (err) {
      ctx.body = {
        code: 409,
        message: err.message,
        data: null,
      };
    }
  }

  static async updateTag(ctx, next) {
    const { name, state } = ctx.request.body;
    const { id } = ctx.params;
    let obj = { id, name, state };
    try {
      await TagService.updateTag(obj);
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

  static async deleteTag(ctx, next) {
    const { id } = ctx.request.params;
    try {
      await TagService.deleteTag(id);
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

module.exports = TagController;
