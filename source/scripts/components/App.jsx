import React from 'react'
import TopBar from './TopBar.jsx'
import Profile from './Profile.jsx'

export class App extends React.Component {
  render() {
    return (
      <div className='main'>
        <TopBar />
        <Profile />
      </div>
    )
  }
}
