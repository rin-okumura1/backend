const {Router} = require("express");
const usersRouter = Router()
const {Usuario}=require('../../db')


usersRouter.get("/",async (req,res)=>{
    res.json(await Usuario.findAll())
})

usersRouter.get("/:id",async (req,res)=>{
    const { id } = req.params;
    console.log(id)
    res.json(await Usuario.findByPk(id))
})


usersRouter.post("/",async (req,res)=>{
    await Usuario.create(req.body)
    res.status(201)
})


module.exports = usersRouter;