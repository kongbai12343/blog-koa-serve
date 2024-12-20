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

  static async findTagByName(name) {
    return await TagDao.findTagByName(name);
  }

  static async getTagList(queryObj) {
    return await TagDao.findAllTag(queryObj);
  }

  static async updateTag(tag) {
    const tagInfo = await TagDao.findTagById(tag.id);
    if (!tagInfo) {
      throw new Error("标签不存在");
    }
    await TagDao.updateTag(tag);
  }

  static async deleteTag(id) {
    const tagInfo = await TagDao.findTagById(id);
    if (!tagInfo) {
      throw new Error("标签不存在");
    }
    await TagDao.deleteTag(id);
  }
}

module.exports = TagService;
