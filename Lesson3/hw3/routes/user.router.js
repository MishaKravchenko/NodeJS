const {Router} = require("express");
const userController = require("../controllers/user.controller");

userRouter = Router();

userRouter.get("/", userController.renderUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.post("/:id", userController.deleteUserById)


module.exports = userRouter;
