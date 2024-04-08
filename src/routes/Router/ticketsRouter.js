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
    await ticket.Create(req.body)
    res.status(201)
})


module.exports = ticketRouter;