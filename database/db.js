  const Sequelize = require ("sequelize");
  const db ={};
  const sequelize = new Sequelize("nime","root","",{
      host:"localhost",
      dialect:"mysql",
      operatorsAliases: false,

      pool:{
          max:5,
          min:0,
          accuire:30000,
          idle:10000
      }
  });

  db.sequelize =sequelize;
  db.Sequelize =Sequelize;

  module.exports = db;