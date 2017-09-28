import fetch from 'node-fetch'
const apiKey = require('./steam-api-key.json').key

const ownedGameURL = 'https://api.steampowered.com/IPlayerService/GetOwnedGames/' +
  'v1/?key=' + apiKey + '&input_json='

let ownedGameInputJson = {
  'steamid': undefined,
  'include_appinfo': true,
  'include_played_free_games': false,
  'appids_filter': false
}

class SteamApi {
  // Return array of games owned by given id
  getGames(query) {
    ownedGameInputJson.steamid = query
    return fetch(ownedGameURL + JSON.stringify(ownedGameInputJson))
      .then(function (response) {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('No games found for given ID')
        }
      }).then(response => {
        return response.response
      })
      .catch(function (error) {
        return error.message
      })
  }
}

export default new SteamApi()
