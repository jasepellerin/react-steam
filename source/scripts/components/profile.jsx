import React from 'react'
import Game from './game.jsx'

const Profile = ({ games }) => (
  <div>
    {games ? games.map(game =>
      <Game
        key={game.id}
        title={game.name} />
    ) : ''}
  </div>
)

export default Profile
