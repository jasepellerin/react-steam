export default (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return action.text
    default:
      return state
  }
}
