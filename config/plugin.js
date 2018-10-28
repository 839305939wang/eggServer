'use strict';

// had enabled by egg
// exports.static = true;
module.exports = {

    //ORM
    sequelize:{
        enable:true,
        package:"egg-sequelize"
    },
    
    //密码验证
    passport:{
        enable: true,
        package: 'egg-passport' 
    },
    //本地验证
     passportLocal:{
      enable: true,
      package: 'egg-passport-local',
    },
    
    //token (jwt)
    jwt : {
      enable: true,
      package: 'egg-jwt',
    },

    email : {
        enable: true,
        package: 'egg-email',
    }
    
    
}