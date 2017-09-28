export const updateQuery = (text) => ({
  type: 'UPDATE_QUERY',
  text: text
})

export const updateGames = (array) => ({
  type: 'UPDATE_GAMES',
  array: array
})
