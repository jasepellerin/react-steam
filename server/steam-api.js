import fetch from 'node-fetch'
const apiKey = require('./steam-api-key.json').key

const ownedGameURL = 'https://api.steampowered.com/IPlayerService/GetOwnedGames/' +
  'v1/?key=' + apiKey + '&input_json='

let inputJson = {
  'steamid': 0,
  'include_appinfo': true,
  'include_played_free_games': false,
  'appids_filter': false
}

function getApiResults(query) {
  inputJson.steamid = query
  return fetch(ownedGameURL + JSON.stringify(inputJson))
    .then(function (response) {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Response not ok')
      }
    }).then(response => {
      return response
    })
    .catch(function (error) {
      return error
    })
}

module.exports = getApiResults
