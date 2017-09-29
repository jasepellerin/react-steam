import React from 'react'
import { App } from '../source/scripts/components/App.jsx'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../source/scripts/redux/reducers/'
import template from '../source/templates/'
import express from 'express'
import SteamApi from './SteamApi'
import MongoController from './MongoController'

const app = express()
const mongo = new MongoController()
const halfDayMillis = 43200000

// Handle server rendering of react app
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

// Get data from Steam
function createUserFromSteamID(query) {
  return SteamApi.getGames(query).then(result => {
    // Construct new user
    let user = {}
    user._id = query
    user.games = result.games
    user.gameCount = result.game_count
    user.lastModified = Date.now()
    // Return the new user
    return user
  })
}

// Serve static files in dist
app.use('/static', express.static('dist'))

// Display index.html when default route is accessed
app.get('/', (req, res) => {
  handleRender(req, res, 'Steam Info')
})

// Process search queries
app.get('/search/:query', (req, res) => {
  let query = parseInt(req.params.query)
  // Check that ID is a number and is not NaN
  if (typeof query !== 'number' || isNaN(query)) {
    res.json({ hasError: true, error: 'Invalid ID' })
  } else {
    // Check for user in our database
    mongo.getMatchingDocumentsInCollection('users', { _id: query })
      .then(result => {
        if (result.length !== 0) {
          const user = result[0]
          // Check if stored user is more than 12 hours old
          if (Date.now() - user.lastModified >= halfDayMillis) {
            // Create new user with Steam data
            createUserFromSteamID(query).then(newUser => {
              // Update user in mongo
              mongo.updateDocument('users', newUser)
              // Return updated user as JSON
              res.json(newUser)
            })
          } else {
            // Return local version
            res.json(user)
          }
        } else {
          // Create new user with Steam data
          createUserFromSteamID(query).then(newUser => {
            // Add the user to mongo
            mongo.addDocument('users', newUser)
            // Return new user as JSON
            res.json(newUser)
          })
        }
      })
  }
})

// Send 404 for any other routes
app.get('*', (req, res) => {
  res.sendStatus(404)
})

// Listen on port 4000
export const server = app.listen(4000, () => {
})
