const {
    Sequelize
} = require("sequelize")
require("dotenv").config()
const {
    User,
    Ticket,
    Company
} = require("./models");



const {
    DATABASE_URL
} = process.env;
// const pg = require('pg')

// const pool = new pg.Pool({
//     connectionString: process.env.DATABASE_URL
// })

// console.log(pool)

const sequelize = new Sequelize(
    process.env.DATABASE_URL
)

User(sequelize);
Ticket(sequelize);
Company(sequelize)

console.log(sequelize.models)

const {
    User,
    Ticket,
    Company
} = sequelize.models;

//Relaciones
User.belongsTo(Company)
User.hasMany(Ticket); //Un usuario puede tener varios tickets
Ticket.belongsTo(User) //Un ticket pertenece a un usuario

module.exports = {
    sequelize,
    ...sequelize.models
};