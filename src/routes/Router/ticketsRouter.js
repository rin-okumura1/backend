const {Router} = require("express");
const ticketRouter = Router()
const {Ticket,Registro}=require('../../db')


ticketRouter.get("/",async (req,res)=>{
    res.json(await Ticket.findAll())
})

ticketRouter.get("/creadoP/:idUsuario",async (req,res)=>{
    let id = parseInt(req.params.idUsuario);
    console.log(id)
    if(isNaN(id))res.json({message:"error:no es numerico"})
    else res.json(await Ticket.findAll({where:{usuario_id:id}}))
})   

ticketRouter.get("/:id",async (req,res)=>{
    let id = parseInt(req.params.id);
    console.log(id)
    if(isNaN(id))res.json({message:"error:no es numerico"})
    else res.json(await Ticket.findByPk(id))
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
        operario_id:null
      })
await crearRegistro(a)

    res.json(a)
})


module.exports = ticketRouter;