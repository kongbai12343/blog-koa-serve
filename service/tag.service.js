const TagDao = require("../dao/tag.dao");

class TagService {
  static async addTag(tag) {
    // 先判断标签是否已经存在
    const tagInfo = await TagDao.findTag(tag.name);
    if (tagInfo) {
      throw new Error("标签已存在");
    }
    await TagDao.addTag(tag);
  }

  static async findTag(name) {
    return await TagDao.findTag(name);
  }

  static async getTagList(queryObj) {
    return await TagDao.findAllTag(queryObj);
  }

  static async updateTag(tag) {
    await TagDao.updateTag(tag);
  }

  static async deleteTag(id) {
    await TagDao.deleteTag(id);
  }
}

module.exports = TagService;
