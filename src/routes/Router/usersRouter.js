const {Router} = require("express");
const usersRouter = Router()
const {User}=require('../../db')


usersRouter.get("/",async (req,res)=>{
    res.json(await User.findAll())
})

usersRouter.get("/:id",async (req,res)=>{
    const { id } = req.params;
    console.log(id)
    res.json(await User.findByPk(id))
})


usersRouter.post("/",async (req,res)=>{
    await User.Create(req.body)
    res.status(201)
})


module.exports = usersRouter;