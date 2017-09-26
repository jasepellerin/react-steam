const express = require('express')
const steam = require('./steam-api')

const app = express()

// Serve static files in dist
app.use('/static', express.static('dist'))

// Display index.html when default route is accessed
app.get('/', (req, res) => {
  res.redirect('static/html/')
})

// Process search queries
app.get('/search/:query', (req, res) => {
  steam(req.params.query).then(result => { res.json(result) })
})

// Send 404 for any other routes
app.get('*', (req, res) => {
  res.sendStatus(404)
})

// Listen on port 4000
app.listen(4000, () => {
})
