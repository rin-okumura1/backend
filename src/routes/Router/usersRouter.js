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
    let a=await Usuario.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        contraseña : req.body.contraseña , // Remember to handle password securely
        email: req.body.email,
        activo: req.body.activo,
        rol: req.body.rol,
        compania_id: req.body.compania_id
      })
    res.json(a).status(201)
})




module.exports = usersRouter;