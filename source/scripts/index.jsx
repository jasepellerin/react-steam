import React from 'react'
import ReactDOM from 'react-dom'

const testURL = 'https://api.steampowered.com/ISteamNews/' +
  'GetNewsForApp/v2/?appid=440&count=3'
const title = 'Steam Player Information'
const searchBar =
  <form onSubmit={(e) => {
    e.preventDefault()
    console.log('submitted to: ' + testURL)
    fetch(testURL)
      .then(
      function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status)
          return
        }

        // Examine the text in the response
        response.json().then(function (data) {
          console.log(data)
        })
      }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err)
      })
  }} method="get">
    <input type='text' autoFocus='true' placeholder='Find users...' />
    <input type='submit' value="Search" />
  </form>

const element =
  <div>
    <h1>{title}</h1>
    {searchBar}
  </div>
const root = document.getElementById('root')

ReactDOM.render(element, root)
