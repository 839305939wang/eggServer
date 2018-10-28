
module.exports = {
    where(obj,...args){
       return Object.assign({
           where:obj
       },...args)    
    },

    /**
     * 返回请求异常
     *
     * @param {*number} [code=500] 错误码
     * @param {*} field 错误字段
     * @param {*} desc 描述信息
     */
    throw(code=500,field,desc){
        this.ctx.status = code;
        this.ctx.body = {
            result:false,
            desc:desc
        }
    },

    /**
     * 封装请求成功信息对象
     *
     * @param {number} [code=200]
     * @param {*} data 用户信息
     * @param {*} desc 请求描述信息
     */
    success(code=200,data,desc){
        this.ctx.status = code
        this.ctx.body = {
            code:code,
            data:data,
            desc:desc
        }
    }
};