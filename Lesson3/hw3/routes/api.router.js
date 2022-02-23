const {Router} = require("express");
const userRouter = require("./user.router");
const loginRouter = require("./login.router");
const homeRouter = require("./home.router");
const signInRouter = require("./signIn.router");

const routes = Router();

routes.use("/", homeRouter);
routes.use("/users", userRouter);
routes.use("/login", loginRouter);
routes.use("/signIn", signInRouter);


module.exports = routes;

