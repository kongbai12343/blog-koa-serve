const UserService = require("../service/user.service");
const { createToken } = require("../utils/createToken");

class UserController {
  /**
   * @description 用户登录
   */
  static async login(ctx, next) {
    const { username, password } = ctx.request.body;
    const user = {
      username,
      password,
    };

    try {
      // 查询用户信息
      let { dataValues } = await UserService.login(user);
      delete dataValues.password;
      // 颁发token
      let token = await createToken(dataValues);
      ctx.body = {
        code: 200,
        message: "登录成功",
        token,
        data: dataValues,
      };
    } catch (error) {
      ctx.body = {
        code: 201,
        message: error.message,
        data: null,
      };
    }
  }

  /**
   * @description 用户注册
   */
  static async register(ctx, next) {
    const { username, password } = ctx.request.body;
    const user = {
      username,
      password,
    };
    try {
      await UserService.register(user);
      ctx.body = {
        code: 200,
        message: "注册成功",
        data: null,
      };
    } catch (error) {
      ctx.body = {
        code: 409,
        message: error.message,
        data: null,
      };
    }
  }
}

module.exports = UserController;
