module.exports = Sequelize => {
  return {
    id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
    name: Sequelize.STRING,
    deletedAt: Sequelize.DATE,
    createdAt: { allowNull: false, type: Sequelize.DATE },
    updatedAt: { allowNull: false, type: Sequelize.DATE },
  }
}
