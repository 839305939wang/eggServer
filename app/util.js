const chalk = require("chalk");
const path = require("path");
function initRouterMaps(prefix,map){
   return function(router){
    let start = `开始注册路由:`;
    console.info(chalk.green(start));
    if(!map){
        throw new Error("路由文件不存在")
        return;
     }
     for(let method in map){
         let methods = map[method];
         for(let route in methods){
            let uri = path.join(prefix,route).split(path.sep).join('/');
            console.log(chalk.green(`[${method}]-->${uri}`))
            router[method.toLowerCase()](uri,methods[route])
         }
     }
   }
   
}

function mountPassportToController(keys,passport,controller){
    if(!controller.passport){
        controller.passport = {};
    }
    keys.forEach((key)=>{
       const tips = `Begining mount passport-->:${key}`;
       console.log(chalk.green(tips));
       controller.passport[key] = passport.authenticate(key,{
           session:false,
           successRedirect:undefined
       },(err)=>{
           console.log("auth fail:",err)
       });
    })
}

function installPassport(passport,{verify}){
    passport.verify(verify);
}

module.exports = {
    initRouterMaps,
    mountPassportToController,
    installPassport
}