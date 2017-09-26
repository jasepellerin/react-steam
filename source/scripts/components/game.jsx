import React from 'react'

const Game = ({ game }) => (
  <div>
    {game.name}
    {game.img_logo_url
      ? <img src={'http://media.steampowered.com/steamcommunity/public/' +
        'images/apps/' + game.appid + '/' + game.img_logo_url + '.jpg'} />
      : undefined
    }
  </div>
)

export default Game
