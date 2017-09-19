import React from 'react'
import ReactDOM from 'react-dom'

const title = 'Steam Player Information'
const searchBar =
  <form onSubmit={() => { alert('hi') }} method="get">
    <input type='text' autoFocus='true' placeholder='Find users...' />
    <input type='submit' value="Search" />
  </form>

const element =
  <div>
    <h1>{title}</h1>
    {searchBar}
  </div>
const root = document.getElementById('root')

ReactDOM.render(element, root)
