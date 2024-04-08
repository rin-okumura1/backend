const { Router }= require("express")
const usersRouter = require("./Router/usersRouter")
const ticketsRouter = require("./Router/ticketsRouter")
const companyRouter = require("./Router/companyRouter")

const mainRouter = Router();

mainRouter.use("/users", usersRouter)
mainRouter.use("/tickets", ticketsRouter)
mainRouter.use("/compania",companyRouter)

module.exports =mainRouter;