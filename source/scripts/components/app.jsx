import React from 'react'
import { SearchForm } from './search_form.jsx'

const title = 'Steam Information'
export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{title}</h1>
        <SearchForm />
      </div>
    )
  }
}
