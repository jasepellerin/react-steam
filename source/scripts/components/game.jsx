import React from 'react'

const baseURL = 'http://store.steampowered.com/app/'
const baseImgURL = 'http://media.steampowered.com/steamcommunity/' +
  'public/images/apps/'
const imgExt = '.jpg'

const Game = ({ game }) => (
  <a className='half-width hover-fill'
    href={baseURL + game.appid}
    target='_blank'>
    {game.img_logo_url
      ? <img
        alt={game.name}
        title={game.name}
        src={baseImgURL + game.appid + '/' + game.img_logo_url + imgExt} />
      : undefined
    }
    <h3>{game.name}</h3>
  </a>
)

export default Game
