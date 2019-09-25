---
to: models/<%= h.inflection.singularize(name) %>.js
---
module.exports = (sequelize, Sequelize) => {
  const <%= h.inflection.camelize(name) %> = sequelize.define('<%= h.inflection.camelize(name) %>', require('../types/<%= h.inflection.singularize(name) %>')(Sequelize), { paranoid: true })

  // <%= h.inflection.camelize(name) %>.associate = models => {
  //   <%= h.inflection.camelize(name) %>.hasMany(models.Xyz)
  //   <%= h.inflection.camelize(name) %>.belongsTo(models.Abc, { foreignKey: { allowNull: false } })
  // }

  return <%= h.inflection.camelize(name) %>
}
