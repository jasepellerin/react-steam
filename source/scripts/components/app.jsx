import React from 'react'
import SearchForm from './search_form.jsx'
import Profile from '../components/profile.jsx'

export class App extends React.Component {
  render() {
    return (
      <div>
        <div className='top-bar'>
          <div className='top-bar-left'>
            <h1>Steam User Information</h1>
          </div>
          <div className='top-bar-left'>
            <SearchForm />
          </div>
        </div>
        <Profile />
      </div>
    )
  }
}
