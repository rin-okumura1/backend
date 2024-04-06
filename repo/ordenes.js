var {pagos}=require('../db/models');

async function traerOrdenes(){
    let a=await pagos.findAll();
    console.log(a)
    return a
}


module.exports={traerOrdenes}
