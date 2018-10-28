'use strict';
const propertites = require("../app/propertites");
const chalk = require("chalk");
const path = require("path");
const Ramda = require("ramda");
module.exports = appInfo => {
  const config = exports = {};
  
  //route prefix
  config.prefix = "/bus/v1.0";
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539433473754_8256';

  // add your config here
  config.middleware = [];

  //add sequelize
  config.sequelize={
    dialect: "mysql", // db type
    database: "bus",
    host: "180.76.184.253",
    port: "3306",
    username: "root",
    password: "password"
  }

  config.security = {
    csrf:{
      enable:false
    }
  }

  config.passportLocal = {
     usernameField: 'username',
     passwordField: 'password',
  };

  config.jwt = {
    secret: "123456",
    enable:true,
    ignore:(ctx)=>{
      const ignorePaths = propertites.uncheckPaths;
      const url = ctx.path
      const tips = `${chalk.green(`请求路径:[${url}-->ignore auth:${ignorePaths.indexOf(url)!=-1}]`)}`
      console.log(tips);
      return Ramda.contains(url,ignorePaths)
    }
  };

  config.email = {
    client: {
       host: 'smtp-mail.outlook.com',
       secureConnection: true,
       port: 587,
       auth: {
           user: 'wang839305939@outlook.com',
           pass: '839305939wang'
       }
    }
  }
  return config;
};
