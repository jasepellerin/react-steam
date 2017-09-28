import React from 'react'
import TopBar from '../containers/TopBarContainer'
import Profile from '../containers/ProfileContainer'

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
