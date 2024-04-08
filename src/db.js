const { Sequelize } = require("sequelize")
require("dotenv").config()
const UserModel = require("./models/User");
const TicketModel = require("./models/Ticket");
let CompanyModel =require("./models/Company");
let RecordModel


// const pg = require('pg')

// const pool = new pg.Pool({
//     connectionString: process.env.DATABASE_URL
// })

// console.log(pool)

const sequelize = new Sequelize(
    process.env.DATABASE_URL
    )

UserModel(sequelize);
TicketModel(sequelize);
CompanyModel(sequelize)
RecordModel(sequelize)


console.log(sequelize.models)

const { Usuario , Ticket ,Compania,Registro} = sequelize.models;

//Relaciones
Compania.hasMany(Usuario,{ foreignKey: 'compania_id' })
Usuario.belongsTo(Compania,{ foreignKey: 'compania_id' })
Usuario.hasMany(Ticket); //Un usuario puede tener varios tickets
Ticket.belongsTo(Usuario)  //Un ticket pertenece a un usuario
Ticket.hasMany(Registro,{foreignKey: 'ticket_id'})
Registro.belongsTo(Ticket,{foreignKey: 'ticket_id'})


module.exports = { sequelize, ...sequelize.models};