import React from 'react'
import writeDuration from '../formatDuration'

const baseURL = 'http://store.steampowered.com/app/'
const baseImgURL = 'http://media.steampowered.com/steamcommunity/' +
  'public/images/apps/'
const imgExt = '.jpg'

class Game extends React.Component {
  getImage(game) {
    if (game.img_logo_url) {
      return <img
        alt={game.name}
        title={game.name}
        src={baseImgURL + game.appid + '/' + game.img_logo_url + imgExt} />
    } else {
      return 'No Image'
    }
  }

  render() {
    const game = this.props.game
    return <div className='card game'>
      <a
        href={baseURL + game.appid}
        target='_blank'>
        <div className='card-divider'>
          <h3>{game.name}</h3>
        </div>
      </a>
      {this.getImage(game)}
      < div className="card-section">
        <p>Playtime: {writeDuration(game.playtime_forever)}</p>
      </div>
    </div >
  }
}

export default Game
