const Router = require("koa-router");
const { verifyAuth } = require("../middleWare/auth");
const CategoryController = require("../controller/category.controller");

const categoryRouter = new Router({ prefix: "/category" });

categoryRouter.get("/", verifyAuth, CategoryController.getCategorList);

categoryRouter.get("/:name", verifyAuth, CategoryController.findCategory);

categoryRouter.post("/add", verifyAuth, CategoryController.addCategory);

categoryRouter.put("/update/:id", verifyAuth, CategoryController.updateCategory);

categoryRouter.delete("/delete/:id", verifyAuth, CategoryController.deleteCategory);

module.exports = categoryRouter;
