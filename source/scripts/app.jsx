import React from 'react'
import { SearchForm } from './components/search_form.jsx'

const title = 'Steam Information'
export class App extends React.Component {
  render() {
    return (
      <div className="centered full-centered">
        <h1>{title}</h1>
        <SearchForm />
      </div>
    )
  }
}
