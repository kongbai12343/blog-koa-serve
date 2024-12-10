const UserDao = require("../dao/user.dao");

class UserService {
  /**
   * @description 登录
   * @param {Object} user 用户信息
   * @return {Promise<UserModel>} user 用户信息
   */
  static async login(userInfo) {
    // 是否已存在
    let user = await UserDao.findByUsername(userInfo.username);

    if (!user) {
      throw new Error("用户不存在");
    }
    if (user.password !== userInfo.password) {
      throw new Error("密码错误");
    }
    return user;
  }

  /**
   * @description 创建用户
   * @param {Object} user 用户信息
   */
  static async register(userInfo) {
    // 是否已存在
    let user = await UserDao.findByUsername(userInfo.username);
    console.log(user, 111111111);
    if (user) {
      throw new Error("用户已存在");
    }
    await UserDao.create(userInfo);
  }
}

module.exports = UserService;
