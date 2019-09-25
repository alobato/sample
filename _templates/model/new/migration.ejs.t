---
to: migrations/<%= `${(new Date()).toISOString().replace(/\D/g, '').slice(0, 14)}-create-${h.inflection.singularize(name)}` %>.js
---
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('<%= h.inflection.camelize(h.inflection.pluralize(name)) %>', require('../types/<%= h.inflection.singularize(name) %>')(Sequelize))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('<%= h.inflection.camelize(h.inflection.pluralize(name)) %>')
  }
}
