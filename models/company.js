module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define('Company', require('../types/company')(Sequelize), { paranoid: true })

  Company.associate = models => {
    Company.hasMany(models.User)
  }

  return Company
}
