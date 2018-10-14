'use strict';

module.exports = appInfo => {
  const config = exports = {};

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
  return config;
};
