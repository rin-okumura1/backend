const {Router} = require("express");
const ticketRouter = Router()
const {Ticket,Registro}=require('../../db')


ticketRouter.get("/",async (req,res)=>{
    res.json(await Ticket.findAll())
})

ticketRouter.get("/:id",async (req,res)=>{
    const { id } = req.params;
    console.log(id)
    res.json(await Ticket.findByPk(id))
})

async function crearRegistro(body){
    await Registro.create({ticket_id:body.id,historial:JSON.stringify(body)})
}

ticketRouter.post("/",async (req,res)=>{

    let a= await Ticket.create({
        estado: req.body.estado,
        prioridad: req.body.prioridad,
        incidencia: req.body.incidencia,
        diagnostico: req.body.diagnostico,
        usuario_id: req.body.usuario_id,
      })
await crearRegistro(a)

    res.status(201)
})


module.exports = ticketRouter;