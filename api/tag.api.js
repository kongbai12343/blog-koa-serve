const Router = require("koa-router");
const { verifyAuth } = require("../middleWare/auth");
const TagController = require("../controller/tag.controller");

const tagRouter = new Router({ prefix: "/tag" });

tagRouter.get("/", verifyAuth, TagController.getTagList);

tagRouter.get("/:name", verifyAuth, TagController.findTagByName);

tagRouter.post("/add", verifyAuth, TagController.addTag);

tagRouter.put("/update/:id", verifyAuth, TagController.updateTag);

tagRouter.delete("/delete/:id", verifyAuth, TagController.deleteTag);

module.exports = tagRouter;
