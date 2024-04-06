var {usuarios} =require("../db/models")

async function crearUsuario(user){
    await usuarios.create(user)
}

async function verUsuarios(){
    return usuarios.findAll()
}

module.exports={crearUsuario,verUsuarios}