import React from 'react'
import { App } from '../source/scripts/components/App.jsx'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../source/scripts/redux/reducers/'
import template from '../source/templates/'
import express from 'express'
import SteamApi from './SteamApi'

const app = express()

function handleRender(req, res, title) {
  // Create a new Redux store instance
  const store = createStore(reducers)

  // Wrap the app in a Provider with the Redux store
  const body = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send(template({
    title: 'Steam Info',
    body: body,
    preloadedState: preloadedState
  }))
}

// Serve static files in dist
app.use('/static', express.static('dist'))

// Display index.html when default route is accessed
app.get('/', (req, res) => {
  handleRender(req, res, 'Steam Info')
})

// Process search queries
app.get('/search/:query', (req, res) => {
  let query
  query = parseInt(req.params.query)
  if (typeof query !== 'number' || isNaN(query)) {
    res.json({ hasError: true, error: 'Invalid ID' })
  } else {
    SteamApi.getGames(req.params.query).then(result => { res.json(result) })
  }
})

// Send 404 for any other routes
app.get('*', (req, res) => {
  res.sendStatus(404)
})

// Listen on port 4000
export const server = app.listen(4000, () => {
})
