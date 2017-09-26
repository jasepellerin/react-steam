import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import { App } from './components/app.jsx'

const root = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, root)
