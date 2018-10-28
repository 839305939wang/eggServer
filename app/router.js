'use strict';
const {initRouterMaps,mountPassportToController,installPassport} = require("./util");
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  installPassport(app.passport,require('./passport'))
  mountPassportToController(['local'],app.passport,controller);
  router.get('/', controller.home.index);
  initRouterMaps(app.config.prefix,require("./api/user.js")(controller))(router);
};
