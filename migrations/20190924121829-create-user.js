module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', require('../types/user')(Sequelize))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users')
  }
}
