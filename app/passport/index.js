const passportDebug = require("debug")("app:passport")
module.exports = {
    async verify(ctx,user){
        console.log(`user:${user.provider}`);
        return require(`./${user.provider}`)(ctx,user);
    }
}