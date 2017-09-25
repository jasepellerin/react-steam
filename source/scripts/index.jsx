import React from 'react'
import ReactDOM from 'react-dom'
import { SearchForm } from './components/search_form.jsx'

const title = 'Steam Player Information'

const element =
  <div>
    <h1>{title}</h1>
    <SearchForm />
  </div>
const root = document.getElementById('root')

ReactDOM.render(element, root)
