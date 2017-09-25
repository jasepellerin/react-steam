const fetch = require('node-fetch')
const testURL = 'https://api.steampowered.com/ISteamNews/' +
  'GetNewsForApp/v2/?appid=440&count=3'
const x = fetch(testURL).then(response => response.json())

module.exports = msg => console.log(msg)
