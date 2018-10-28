const controller = require("egg").Controller
class User extends controller{
    /**
     *用户登录
     *
     * @memberof User
     */
    async signIn(){
       const {username,password} = this.ctx.request.body;
       const user = await this.ctx.service.user.signIn(username,password)
       if(user){
        this.ctx.helper.success(200,user,"请求成功")
       }else{
        this.ctx.success(401, user, "用户名或密码错误");
       }
    };
    /**
     * 用户注册
     *
     * @memberof User
    */
    async signUp(){
       const {username,password,code} = this.ctx.request.body;
       const userinfo = await this.ctx.service.user.signUp(username,password,code);
       userinfo?this.ctx.success(200,userinfo,"请求成功"):"";
    };
    
    /**
     *用户退出
     *
     * @memberof User
     */
    async signOut(){
        console.log("用户退出")
    };
    /**
     * 获取用户信息
     */
    async userInfo(){
        const userinfo = await this.ctx.service.user.getUserInfo();
        userinfo?this.ctx.success(200,userinfo):"";
    }
    
    /**
     * 发送激活邮件
     */
    async sendEmail(){
        const template = `<a href = '${this.ctx.origin}/user/emailVerify?token=2313'>点击链接进行验证</a>`
        const mailOptions = {
            from: 'wang839305939@outlook.com',
            to: '839305939@qq.com',
            subject: 'hello world',
            html: template
        };  
        const sendResult = await this.app.email.sendMail(mailOptions);
        if(sendResult){
            this.ctx.success(200,{},'邮件发送成功');
        }else{
            this.ctx.success(400,'邮件发送失败');
        }
    };
    
    /**
     * 邮箱激活验证
     */
    emailVerify(){
        console.info(chalk.green(`收到邮箱验证请求`));
        this.ctx.success(200,{},'验证成功');
    }



}

module.exports = User;