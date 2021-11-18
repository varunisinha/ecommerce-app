//connecting code to database


//requiring sequalize 
const Sequelize = require('sequelize');

//user info
const databaseConnectionCardinalites = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "e_commerce_db",
  dialect: "mysql",
}
const sequelize = new Sequelize(databaseConnectionCardinalites.DB, databaseConnectionCardinalites.USER, databaseConnectionCardinalites.PASSWORD, {
  host: databaseConnectionCardinalites.HOST,
  dialect: databaseConnectionCardinalites.dialect,

});

//exporting module for use elsewhere 
module.exports = sequelize;