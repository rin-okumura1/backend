const { Sequelize } = require("sequelize")
require("dotenv").config()
const UserModel = require("./models/User");
const TicketModel = require("./models/Ticket");
let CompanyModel =require("./models/company");

const { DATABASE_URL } = process.env;
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

console.log(sequelize.models)

const { Usuario , Ticket ,Compania} = sequelize.models;

//Relaciones
Compania.hasMany(Usuario)
Usuario.belongsTo(Compania)
Usuario.hasMany(Ticket); //Un usuario puede tener varios tickets
Ticket.belongsTo(User)  //Un ticket pertenece a un usuario

module.exports = { sequelize, ...sequelize.models};