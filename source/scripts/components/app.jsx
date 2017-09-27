import React from 'react'
import SearchForm from './search_form.jsx'
import Profile from '../components/profile.jsx'

export class App extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="top-bar">
          <h1>Steam User Information</h1>
          <SearchForm />
        </div>
        <Profile />
      </div>
    )
  }
}
