module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', require('../types/user')(Sequelize), { paranoid: true })

  User.associate = models => {
    User.belongsTo(models.Company, { foreignKey: { allowNull: false } })
  }

  return User
}
