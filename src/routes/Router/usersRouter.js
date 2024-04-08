const {Router} = require("express");
const usersRouter = Router()
const {User}=require('../../models')


usersRouter.get("/", (req,res)=>{
    res.send("users")
})

usersRouter.get("/:id", (req,res)=>{
    const { id } = req.params;
    console.log(id)
    res.json(User.findByPk(id))
})


usersRouter.post("/", (req,res)=>{
    


    
})


module.exports = usersRouter;