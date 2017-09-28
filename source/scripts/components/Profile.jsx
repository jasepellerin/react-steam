import React from 'react'
import Game from './Game.jsx'

// If games exist, map them to gameArray as Game elements
function getGameArray(games) {
  let gameArray = games.map(game =>
    <Game
      key={game.appid}
      game={game} />
  )
  return gameArray
}

// Render the profile section
class Profile extends React.Component {
  render() {
    let games = this.props.games
    return (
      <div className='profile'>
        {
          games ? getGameArray(games) : null
        }
      </div>
    )
  }
}

export default Profile
