
module.exports = {
    where(obj,...args){
       return Object.assign({
           where:obj
       },...args)    
    },

    throw(code,field,desc){
        this.ctx.status = code||200;
        this.ctx.body = {
            result:false,
            desc:desc
        }
        
    }
};