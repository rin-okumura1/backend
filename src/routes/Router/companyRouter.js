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
    Compania.create(req.body).then((result) => {
        res.json(result).status(201)    
    }).catch((err) => {
        res.json(err).status(201)
    });
    
})


module.exports = companyRouter;