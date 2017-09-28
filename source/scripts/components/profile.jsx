import React from 'react'
import Game from './game.jsx'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  games: state.games
})

class Profile extends React.Component {
  render() {
    return (
      <div className="main">
        {this.props.games ? this.props.games.map(game =>
          <Game
            key={game.id}
            game={game} />
        ) : ''}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Profile)
