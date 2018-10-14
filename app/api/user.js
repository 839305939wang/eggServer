/** 
 * 对用户相关操作的api配置
*/
module.exports = (ctl)=>{
    return {
        "post":{
            "/user/signIn" : ctl.user.signIn,
            "/user/signUp" : ctl.user.signUp,  
            "/user/signOut" : ctl.user.signOut 
        }  
    }
}