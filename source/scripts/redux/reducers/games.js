export default (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_GAMES':
      let array = action.array
      // Sort games based on descending playtime
      array.sort((a, b) => b.playtime_forever - a.playtime_forever)
      return array
    default:
      return state
  }
}
