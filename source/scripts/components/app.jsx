import React from 'react'
import SearchForm from './search_form.jsx'
import Profile from '../containers/profile_container.jsx'

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Steam User Information</h1>
        <SearchForm />
        <Profile />
      </div>
    )
  }
}
