const express = require('express')
const router = express.Router()

const models = require('../models')

router.get('/', async (_, res) => {
  const users = await models.User.findAll()
  res.send({ users })
})

router.get('/:id', async (req, res) => {
  const user = await models.User.findByPk(req.params.id)
  res.send({ user })
})

router.post('/', async (req, res) => {
  const userParams = req.body.user
  const user = await models.User.create(userParams)
  res.send({ user })
})

router.put('/:id', async (req, res) => {
  const userParams = req.body.user
  const user = await models.User.findByPk(req.params.id)
  const updatedUser = await user.update(userParams)
  res.send({ user: updatedUser })
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  const result = await models.User.destroy({ where: { id } })
  res.send({ success: result })
})

module.exports = router
