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

async function existe(nombre){
    let where={where:{
        nombre:nombre
    }}
    let retorno =await Compania.findAll(where)
    return retorno
}

companyRouter.post("/",async (req,res)=>{
    
    let retorno="",obj=existe(req.body.nombre)
if(typeof  obj== "Object") {retorno=await Compania.create(req.body);

        console.log(retorno)
        res.json(retorno).status(201)    
}
else res.json({message:"valide que el nombre no este repetido"})
    
})


module.exports = companyRouter;