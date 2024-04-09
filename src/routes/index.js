const { Router }= require("express")
const usersRouter = require("./Router/usersRouter")
const ticketsRouter = require("./Router/ticketsRouter")
const companyRouter = require("./Router/companyRouter")
const recordRouter=require('./Router/recordRouter')


const mainRouter = Router();

mainRouter.use("/usuarios", usersRouter)
mainRouter.use("/tickets", ticketsRouter)
mainRouter.use("/compania",companyRouter)
mainRouter.use("/registros",recordRouter)

module.exports =mainRouter;