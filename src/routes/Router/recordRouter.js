const {Router} = require("express");
const recordRouter = Router()
const {Record}=require('../../db')


recordRouter.get("/",async (req,res)=>{
    res.json(await Record.findAll())
})

recordRouter.get("/:id",async (req,res)=>{
    const { id } = req.params;
    console.log(id)
    res.json(await Record.findByPk(id))
})


recordRouter.post("/",async (req,res)=>{
    await Record.create(req.body)
    res.status(201)
})


module.exports = recordRouter;