module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Companies', require('../types/company')(Sequelize))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Companies')
  }
}
