import React from 'react'

class SearchForm extends React.Component {
  render() {
    let input

    return (
      <form
        className='search'
        onSubmit={e => {
          e.preventDefault()
          const query = input.value
          if (query.length === 0) {
            return
          }
          fetch('/search/' + query).then(result => result.json())
            .then(result => {
              if (result.hasError) {
                this.props.updateGames()
              } else {
                this.props.updateGames(result.games)
                this.props.updateQuery(query)
              }
            })
        }}>
        <input ref={node => {
          input = node
        }}
          type='search'
          placeholder='Find users...' />
        <button
          className='button'
          type='submit'>Search</button>
      </form>
    )
  }
}

export default SearchForm
