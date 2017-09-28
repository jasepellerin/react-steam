import React from 'react'
import SearchFormContainer from '../containers/SearchFormContainer'

const Title = () => (<h1>Steam User Information</h1>)

// If games exist, wrap title and search in top bar
class TopBar extends React.Component {
  getTopBar(gamesExist) {
    if (gamesExist) {
      return (
        <div className='top-bar'>
          <div className='top-bar-left'>
            <Title />
          </div>
          <div className='top-bar-right'>
            <SearchFormContainer />
          </div>
        </div>
      )
    } else {
      return (
        <div className='full-height'>
          <Title />
          < SearchFormContainer />
        </div>
      )
    }
  }

  render() {
    let games = this.props.games
    let gamesExist = games && games.length > 0
    return this.getTopBar(gamesExist)
  }
}

export default TopBar
