const express = require('express')

const app = express()

app.use('/static', express.static('dist'))

app.get('/', (req, res) => {
  res.redirect('static/dist/html/')
})

app.get('*', (req, res) => {
  res.sendStatus(404)
})

app.listen(4000, () => {
})
