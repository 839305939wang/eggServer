const controller = require("egg").Controller
class User extends controller{
    /**
     *用户登录
     *
     * @memberof User
     */
    async signIn(){
       console.log("用户登录")
       this.ctx.body = "用户登录"
    };
    /**
     * 用户注册
     *
     * @memberof User
    */
    async signUp(){
       console.log("用户注册")
       let {username,password,code} = this.ctx.request.body;
       console.log("signUp:",username,password,code);
       this.ctx.service.user.signUp(username,password,code)
    };
    
    /**
     *用户退出
     *
     * @memberof User
     */
    async signOut(){
        console.log("用户退出")
    }
}

module.exports = User;