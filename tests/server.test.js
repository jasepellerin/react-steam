import request from 'supertest'
let server

beforeEach(() => {
  server = require('../server').server
})

afterEach(() => {
  server.close()
})

test('Server is defined', () => {
  expect(server).toBeDefined()
})

test('Serves /', () => {
  request(server).get('/').expect(200)
})

test('404 on other routes', () => {
  request(server).get('/somewhere').expect(404)
})
