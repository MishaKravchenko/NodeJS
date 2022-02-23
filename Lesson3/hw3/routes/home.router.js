const {Router} = require("express");
const homeController = require("../controllers/home.controller");

homeRouter = Router();
homeRouter.get("/", homeController.renderHomePage);

module.exports = homeRouter;