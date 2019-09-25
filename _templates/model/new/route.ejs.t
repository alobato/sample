---
to: routes/<%= h.inflection.pluralize(name) %>.js
---
const express = require('express')
const router = express.Router()

const models = require('../models')

router.get('/', async (_, res) => {
  const <%= h.inflection.camelize(h.inflection.pluralize(name), true) %> = await models.<%= h.inflection.camelize(h.inflection.singularize(name)) %>.findAll()
  res.send({ <%= h.inflection.camelize(h.inflection.pluralize(name), true) %> })
})

router.get('/:id', async (req, res) => {
  const <%= h.inflection.camelize(h.inflection.singularize(name), true) %> = await models.<%= h.inflection.camelize(h.inflection.singularize(name)) %>.findByPk(req.params.id)
  res.send({ <%= h.inflection.camelize(h.inflection.singularize(name), true) %> })
})

router.post('/', async (req, res) => {
  const <%= h.inflection.camelize(h.inflection.singularize(name), true) %>Params = req.body.<%= h.inflection.camelize(h.inflection.singularize(name), true) %>
  const <%= h.inflection.camelize(h.inflection.singularize(name), true) %> = await models.<%= h.inflection.camelize(h.inflection.singularize(name)) %>.create(<%= h.inflection.camelize(h.inflection.singularize(name), true) %>Params)
  res.send({ <%= h.inflection.camelize(h.inflection.singularize(name), true) %> })
})

router.put('/:id', async (req, res) => {
  const <%= h.inflection.camelize(h.inflection.singularize(name), true) %>Params = req.body.<%= h.inflection.camelize(h.inflection.singularize(name), true) %>
  const <%= h.inflection.camelize(h.inflection.singularize(name), true) %> = await models.<%= h.inflection.camelize(h.inflection.singularize(name)) %>.findByPk(req.params.id)
  const updated<%= h.inflection.camelize(h.inflection.singularize(name)) %> = await <%= h.inflection.camelize(h.inflection.singularize(name), true) %>.update(<%= h.inflection.camelize(h.inflection.singularize(name), true) %>Params)
  res.send({ <%= h.inflection.camelize(h.inflection.singularize(name), true) %>: updated<%= h.inflection.camelize(h.inflection.singularize(name)) %> })
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  const result = await models.<%= h.inflection.camelize(h.inflection.singularize(name)) %>.destroy({ where: { id } })
  res.send({ success: result })
})

module.exports = router
