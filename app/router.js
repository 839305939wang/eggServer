'use strict';
const initRouterMaps = require("./util").initRouterMaps
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  initRouterMaps('/bus/v1.0',require("./api/user.js")(controller))(router);
};
