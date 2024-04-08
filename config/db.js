const dotenv=require('dotenv').config()

const fs = require('fs');

module.exports = {
  development: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    host: process.env.DB_HOST,
    port:process.env.MYSQLPORT,
    dialect: 'mysql',

  },
  test: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port:process.env.MYSQLPORT
  },
  production: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mysql'
    ,
    port:process.env.MYSQLPORT
  }
};