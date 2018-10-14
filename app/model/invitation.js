module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
  
    const Invitation = app.model.define('invitations', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        code: STRING(10),
        user_id:STRING(100),
        use_user_id:STRING(100)
    },{
        timestamps: false,  //去除createAt updateAt
        freezeTableName: true,  //使用自定义表名
      });
    Invitation.exist  = async code=>{
        return await Invitation.findOne({
            where:{
                code
            }
        })
    
    }
    return Invitation;
  };