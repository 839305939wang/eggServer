module.exports = {
    /**
     * 
     * @param {Object} user 用户 
     * @param {String} rember_me 有效时间
     */
    makeToken(user, rember_me) {
        return new Promise((resolve, reject) => {
            this.app.jwt.sign(
                user.toJSON(),
                this.app.config.jwt.secret,
                {
                    expiresIn: rember_me ? '2d' : '1d'
                },
                (err, token) => {
                    err ? reject(err) : resolve(token);
                }
            )
        })
    },
    /**
     * 请求成功
     * @param {number} code 状态吗 
     * @param {Object} data 返回数据 
     * @param {String} desc 请求响应描述 
     */
    success(code=200,data=[],desc=""){
       this.body={
           code,
           data,
           desc
       }
    },
    /**
     * 请求失败
     * @param {number} code 状态吗 
     * @param {String} desc 请求响应描述 
     */
    fail(code=400,desc=""){
        this.body={
            code,
            desc
        }
     }

}