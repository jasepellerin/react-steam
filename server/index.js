const express = require('express')
const steam = require('./steam-api')

const app = express()

app.use('/static', express.static('dist'))

app.get('/', (req, res) => {
  res.redirect('static/html/')
})

app.get('/search', (req, res) => {
  steam(req.query)
  res.redirect('static/html/')
})

app.get('*', (req, res) => {
  res.sendStatus(404)
})

app.listen(4000, () => {
})
