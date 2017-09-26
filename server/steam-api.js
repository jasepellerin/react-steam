import fetch from 'node-fetch'
const apiKey = require('./steam-api-key.json').key

const testURL = 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/' +
  'v2/?key=' + apiKey + '&steamids='

function getApiResults(query) {
  return fetch(testURL + query)
    .then(function (response) {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Response not ok')
      }
    }).then(response => {
      const players = response.response.players
      if (players.length > 0) {
        return players
      }
      return { 'redirect': 'static/html/' }
    })
    .catch(function (error) {
      return error
    })
}

module.exports = getApiResults
