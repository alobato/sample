const fetch = require('node-fetch')
const models = require('../models')
const BASE_API = 'http://localhost:8000'

let created

test('Create user', async () => {
  const user = { name: 'Ana' }

  created = await (await fetch(`${BASE_API}/users`, {
    method: 'POST',
    body: JSON.stringify({ user }),
    headers: { 'Content-Type': 'application/json' },
  })).json()

  expect(created.user.name).toBe('Ana')
})

test('Get user', async () => {
  const get = await (await fetch(`${BASE_API}/users/${created.user.id}`)).json()
  expect(get.user.name).toBe('Ana')
})

test('List users', async () => {
  const list = await (await fetch(`${BASE_API}/users`)).json()
  expect(list.users.length).toBe(1)
})

test('Delete user', async () => {
  const deleted = await (await fetch(`${BASE_API}/users/${created.user.id}`, { method: 'DELETE' })).json()
  expect(deleted.success).toBe(1)

  const list = await (await fetch(`${BASE_API}/users`)).json()
  expect(list.users.length).toBe(0)
})

afterAll(async () => {
  await models.sequelize.queryInterface.bulkDelete('Users')
})
