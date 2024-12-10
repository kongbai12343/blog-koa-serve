const Router = require('koa-router');

const UserController = require('../controller/user.controller');

const userRouter = new Router({ prefix: '/user' });
/**
 * @description 用户注册
 * @api {post} /user/register 用户注册
*/
userRouter.post('/register', UserController.register);

/**
 * @description 用户登录
 * @api {post} /user/login 用户登录
*/
userRouter.post('/login', UserController.login);


module.exports = userRouter;