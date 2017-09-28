import React from 'react'
import TopBar from './top-bar.jsx'
import Profile from '../components/profile.jsx'

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
