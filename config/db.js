const dotenv=require('dotenv').config()

const fs = require('fs');

module.exports = {
  development: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    host: process.env.MYSQL_PRIVATE_URL,
    port:process.env.MYSQLPORT,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  test: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_PRIVATE_URL,
    dialect: 'mysql',
    port:process.env.MYSQLPORT
    ,dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_PRIVATE_URL,
    dialect: 'mysql'
    ,
    port:process.env.MYSQLPORT,
    dialectOptions: {
      bigNumberStrings: true
    }
  }
};