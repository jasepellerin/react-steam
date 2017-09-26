import React from 'react'
import SearchForm from './search_form.jsx'
import Profile from './profile.jsx'

export class App extends React.Component {
  render() {
    return (
      <div className="centered full-centered">
        <SearchForm />
        <Profile />
      </div>
    )
  }
}
