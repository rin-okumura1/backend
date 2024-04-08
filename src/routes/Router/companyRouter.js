const {Router} = require("express");
const companyRouter = Router()
const {Compania}=require('../../db')


companyRouter.get("/",async (req,res)=>{
    res.json(await Compania.findAll())
})

companyRouter.get("/:id",async (req,res)=>{
    const { id } = req.params;
    console.log(id)
    res.json(await Compania.findByPk(id))
})


companyRouter.post("/",async (req,res)=>{
    
    let retorno =await Compania.create(req.body)
    console.log(retorno)
        res.json(retorno).status(201)    
   
    
})


module.exports = companyRouter;