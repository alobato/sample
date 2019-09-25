const fs = require('fs')
const path = require('path')

const routes = fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file !== path.basename(__filename) &&
      file.slice(-3) === '.js' &&
      file.indexOf('.') !== 0
    )
  })
  .reduce((acc, fileName) => {
    return {...acc, [fileName.replace('.js', '')]: require(`./${fileName}`)}
  }, {})

module.exports = routes
