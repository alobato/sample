0) Install and start Postgres
$ brew install postgres
$ pg_ctl -D /usr/local/var/postgres start


1) Create database
Postgres:
$ createdb -Oroot -Eutf8 sample_development
MySQL:
$ npx sequelize-cli db:create


2) Generate crud files
$ npx hygen model new --name company
$ npx hygen model new --name user


3) Migrate database
$ DATABASE_DEVELOPMENT_URL=postgres://root@localhost:5432/sample_development npx sequelize-cli db:migrate


------------------------------------------------------------------------------


Associations
https://sequelize.org/master/identifiers.html#associations
------------
hasOne
hasMany         Ex.: models.User.hasMany(models.Examination)
belongsTo       Ex.: Examination.belongsTo(models.User, { foreignKey: { allowNull: false } })
belongsToMany   Ex.: Game.belongsToMany(models.Round, { through: models.Stage })

                     models/team.js
                     Team.belongsToMany(models.User, { through: models.TeamUser })
                     models/user.js
                     User.belongsToMany(models.Team, { through: models.TeamUser })

                     models/teamUser.js
                     TeamUser.belongsTo(models.Team, { foreignKey: { allowNull: false } })
                     TeamUser.belongsTo(models.User, { foreignKey: { allowNull: false } })

                     const teams = await user.getTeams()

------------------------------------------------------------------------------


Hooks
https://sequelize.org/master/manual/hooks.html
------------
beforeValidate
afterValidate
validationFailed

beforeCreate
afterCreate

beforeDestroy
afterDestroy

beforeUpdate
afterUpdate

beforeSave
afterSave


------------------------------------------------------------------------------


Most used DataTypes
https://sequelize.org/master/manual/data-types.html

INTEGER
STRING
TEXT
TIME
DATE
DATEONLY
NOW
DECIMAL
