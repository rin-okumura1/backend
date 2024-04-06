var {tickets}=require('../db/models')

async function crearTicket(tick){
    await tickets.create(tick)

}


async function verTickets(){
   return await tickets.findAll()

}
module.exports={crearTicket,verTickets}