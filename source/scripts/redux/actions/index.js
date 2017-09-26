export const query = (text) => ({
  type: 'UPDATE_QUERY',
  text: text
})

export const games = (array) => ({
  type: 'UPDATE_GAMES',
  array: array
})
