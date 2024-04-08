const { Sequelize } = require("sequelize")
require("dotenv").config()
const UserModel = require("./models/User")
const TicketModel = require("./models/Ticket")
const { DATABASE_URL } = process.env;
// const pg = require('pg')

// const pool = new pg.Pool({
//     connectionString: process.env.DATABASE_URL
// })

// console.log(pool)

const sequelize = new Sequelize(process.env.DATABASE_PRIVATE_URL,

{
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
})

UserModel(sequelize);
TicketModel(sequelize);


console.log(sequelize.models)

const { User , Ticket } = sequelize.models;

//Relaciones
User.hasMany(Ticket); //Un usuario puede tener varios tickets
Ticket.belongsTo(User)  //Un ticket pertenece a un usuario

module.exports = { sequelize, ...sequelize.models};