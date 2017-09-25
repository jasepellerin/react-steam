const express = require('express')
const steam = require('./steam-api')

const app = express()

app.use('/static', express.static('dist'))

app.get('/', (req, res) => {
  res.redirect('static/html/')
})

app.get('/search', (req, res) => {
  const response = steam(req.query.search_term)
  response.then((result) => {
    if (result && result.hasOwnProperty('redirect')) {
      res.redirect(result.redirect)
    } else {
      res.send(result)
    }
  })
})

app.get('*', (req, res) => {
  res.sendStatus(404)
})

app.listen(4000, () => {
})
