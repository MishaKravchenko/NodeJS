const {Router} = require("express");
const signInController = require("../controllers/signIn.controller")

signInRouter = Router();
signInRouter.get("/", signInController.renderSignInPage);
signInRouter.post("/", signInController.renderSingleUserPage);

module.exports = signInRouter;