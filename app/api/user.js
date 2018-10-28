/** 
 * 对用户相关操作的api配置
*/
module.exports = (ctl)=>{
    return {
        "post":{
            "/user/signIn" : ctl.passport.local,
            "/user/signUp" : ctl.user.signUp,  
            "/user/signOut" : ctl.user.signOut,
            "/user/sendEmail" : ctl.user.sendEmail
        },
        "get":{
            "/user/userInfo" : ctl.user.userInfo,
            "user/emailVerify": ctl.user.emailVerify
        }  
    }
}