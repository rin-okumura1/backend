const {Router} = require("express");
const usersRouter = Router()
const {Usuario}=require('../../db');
const { where } = require("sequelize");


usersRouter.get("/",async (req,res)=>{
    res.json(await Usuario.findAll())
})

usersRouter.get("/:id",async (req,res)=>{
    const { id } = req.params;
    console.log(id)
    let user=res.json(await Usuario.findByPk(id))
    if(user==undefined)res.json("jodete perra")
    else res.json(user)
})

usersRouter.post('/login',async (req,res)=>{
    const { email,contraseña } = req.body;
    let user=await Usuario.findOne({where:{email:email,contraseña:contraseña}})
    if( user==undefined)res.json({message:"jodete"})
    else res.json(user)
})

usersRouter.post("/",async (req,res)=>{
   await Usuario.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        contraseña : req.body.contraseña , // Remember to handle password securely
        email: req.body.email,
        activo: req.body.activo,
        rol: req.body.rol,
        compania_id: req.body.compania_id
      })
    res.status(201)
})




module.exports = usersRouter;