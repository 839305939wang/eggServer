const Service = require("egg").Service;
class User extends Service{
    constructor(ctx){
        super(ctx);
        this._User = this.ctx.model.User;
        this._Invitation = this.ctx.model.Invitation;
        this.where = this.ctx.helper.where;
    };
    /**
     * *检查邀请码是否有效
     *
     * @param {* Int} code 邀请码
     * @return {boolean} 是否有效
     * @memberof User
     */
    async checkInvitation(code){
      const invitation = await this._Invitation.find(this.where({code}));
      if(!invitation){
          return this.ctx.helper.throw(400,"code","无效邀请码")
      }
      return invitation;
    };
   
    async generateInvitations(user_id,length=1){
        let promises = [];
        for(let i=0;i<length;i++){
            let code = user_id+"00"+i;
            const promise = await this._Invitation.create({user_id,code});
            promises.push(promise);
        }
        return Promise.all(promises);
    };

    /**
     * *注册逻辑
     * @param {string} username 用户名
     * @param {string} password 密码
     * @param {Int} code 邀请码
     * @return {Object} 注册成功的用户和邀请码
     * @memberof User
     */
    async signUp(username,password,code){
        const invitation = await this.checkInvitation(code);
        if(!invitation){
            this.ctx.body = "success"
            return;
        }
        console.log("----------add-------------------",invitation)
        const user  = this._User.create({username,password});
        invitation.use_user_id = user.user_id;
        await invitation.save();
        const invitations = await this.generateInvitations(user.user_id,5);
        return {
            user,
            invitations
        }
    }
}

module.exports = User;