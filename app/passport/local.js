module.exports =async (ctx,{username,password})=>{
    const user = await ctx.model.User.findOne({
        where:{
            name:username,
            password
        }
    });
    if(!user){
        ctx.fail(400,{},'用户名密码错误');
        return true;
    }
    //ctx.assert(user,400,'用户名密码错误');
    const token = await ctx.makeToken(user,'3d');
    ctx.success(200,{token},'请求成功');
    return token; 
}