import React from 'react'
import Game from './game.jsx'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  games: state.games
})

// If games exist, map them to gameArray as Game elements
function getGameArray(games) {
  let gameArray = games.map(game =>
    <Game
      key={game.id}
      game={game} />
  )
  return gameArray
}

// Render the profile section
class Profile extends React.Component {
  render() {
    let games = this.props.games
    return (
      <div className='Profile'>
        {
          games ? getGameArray(games) : null
        }
      </div>
    )
  }
}

export default connect(mapStateToProps)(Profile)
