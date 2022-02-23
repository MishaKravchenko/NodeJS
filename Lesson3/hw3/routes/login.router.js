const {Router} = require("express");
const loginController = require("../controllers/login.controller");
const loginMiddleware = require("../middleware/user.middleware");

loginRouter = Router();

loginRouter.get("/", loginController.getCreateLoginUser);
loginRouter.post("/", loginMiddleware, loginController.loginUser);


module.exports = loginRouter;
