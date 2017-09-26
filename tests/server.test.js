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
