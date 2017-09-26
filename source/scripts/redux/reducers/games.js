export default (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_GAMES':
      let array = []
      for (let id = 0; id < action.array.length; id++) {
        array[id] = action.array[id]
        array[id].id = id
      }
      return array
    default:
      return state
  }
}
