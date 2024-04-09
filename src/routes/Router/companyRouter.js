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
    console.log(retorno)
    return retorno
}

companyRouter.post("/",async (req,res)=>{
    let a=await existe(req.body.nombre)
    console.log("aqui "+a)
    if(a.length>0){
        res.json({message:"ya existe"})
    }
    else{
await Compania.create({nombre:req.body.nombre,activo:req.body.activo});

        res.json({message:"creando"}).status(201)
    }
})


module.exports = companyRouter;