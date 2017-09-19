import React from 'react'
import ReactDOM from 'react-dom'

const title = 'Steam Player Information'
const searchBar =
  <form action={alert('hi')}>
    <input type='text' placeholder='Search users...' />
  </form>

const element =
  <div>
    <h1>{title}</h1>
    {searchBar}
  </div>
const root = document.getElementById('root')

ReactDOM.render(element, root)
