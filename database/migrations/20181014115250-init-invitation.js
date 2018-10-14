'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   let {INTEGER,DATE,STRING} = Sequelize;
   return queryInterface.createTable('invitations', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        code:STRING(10),
        user_id:STRING(100),
        use_user_id:STRING(100),                        
      });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('invitation');
  }
};
