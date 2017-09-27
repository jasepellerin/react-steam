export default (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_GAMES':
      let array = []
      // Add an ID to each game
      for (let id = 0; id < action.array.length; id++) {
        array[id] = action.array[id]
        array[id].id = id
      }
      // Sort games based on descending playtime
      array.sort((a, b) => b.playtime_forever - a.playtime_forever)
      return array
    default:
      return state
  }
}
