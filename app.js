const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./routes')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

Object.keys(routes).forEach(key => {
  app.use(`/${key}`, routes[key])
})

app.listen(8000)

