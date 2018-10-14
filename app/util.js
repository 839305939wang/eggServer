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
            router[method](uri,methods[route])
         }
     }
   }
   
}

module.exports = {
    initRouterMaps
}