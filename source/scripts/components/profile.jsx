import React from 'react'
import Game from './game.jsx'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  games: state.games
})

const Profile = ({ games }) => (
  <div>
    {games ? games.map(game =>
      <Game
        key={game.id}
        game={game} />
    ) : ''}
  </div>
)

export default connect(mapStateToProps)(Profile)
