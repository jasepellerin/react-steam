import React from 'react'
import { App } from '../source/scripts/components/app.jsx'
import { renderToString } from 'react-dom/server'
import template from '../source/templates/template'
import express from 'express'
import steam from './steam-api'

const app = express()

// Serve static files in dist
app.use('/static', express.static('dist'))

// Display index.html when default route is accessed
app.get('/', (req, res) => {
  const appString = renderToString(<App />)

  res.send(template({
    body: appString,
    title: 'Steam Info'
  }))
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
export const server = app.listen(4000, () => {
})
