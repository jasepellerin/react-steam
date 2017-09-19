import React from 'react'
import ReactDOM from 'react-dom'

const title = 'Results:'
const results =
  <div class="results">
    <result />
  </div>

const element =
  <div>
    <h1>{title}</h1>
    {results}
  </div>
const root = document.getElementById('root')

ReactDOM.render(element, root)
