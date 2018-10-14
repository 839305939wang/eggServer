module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
  
    const User = app.model.define('users', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(30),
        password: STRING(30),
        user_id:STRING(100),
        created_time: DATE,
        updated_time: DATE
    },{
        timestamps: false,  //去除createAt updateAt
        freezeTableName: true,  //使用自定义表名
      });
  
    return User;
  };