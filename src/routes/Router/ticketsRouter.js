const {Router} = require("express");
const ticketRouter = Router()
const {ticket}=require('../../db')


ticketRouter.get("/",async (req,res)=>{
    res.json(await ticket.findAll())
})

ticketRouter.get("/:id",async (req,res)=>{
    const { id } = req.params;
    console.log(id)
    res.json(await ticket.findByPk(id))
})


ticketRouter.post("/",async (req,res)=>{
    await ticket.create({
        estado: req.body.estado,
        prioridad: req.body.prioridad,
        incidencia: req.body.incidencia,
        diagnostico: req.body.diagnostico,
        usuario_id: req.body.usuario_id,
      })
    res.status(201)
})


module.exports = ticketRouter;