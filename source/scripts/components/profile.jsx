import React from 'react'
import Game from './game.jsx'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  games: state.games
})

// Render the profile section
class Profile extends React.Component {
  render() {
    let gameArray = null
    // If games exist, map them to gameArray as Game elements
    if (this.props.games) {
      gameArray = this.props.games.map(game =>
        <Game
          key={game.id}
          game={game} />
      )
    }
    return (
      gameArray
    )
  }
}

export default connect(mapStateToProps)(Profile)
