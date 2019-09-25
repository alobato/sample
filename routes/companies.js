const express = require('express')
const router = express.Router()

const models = require('../models')

router.get('/', async (_, res) => {
  const companies = await models.Company.findAll()
  res.send({ companies })
})

router.get('/:id', async (req, res) => {
  const company = await models.Company.findByPk(req.params.id)
  res.send({ company })
})

router.post('/', async (req, res) => {
  const companyParams = req.body.company
  const company = await models.Company.create(companyParams)
  res.send({ company })
})

router.put('/:id', async (req, res) => {
  const companyParams = req.body.company
  const company = await models.Company.findByPk(req.params.id)
  const updatedCompany = await company.update(companyParams)
  res.send({ company: updatedCompany })
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  const result = await models.Company.destroy({ where: { id } })
  res.send({ success: result })
})

module.exports = router
