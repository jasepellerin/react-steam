import React from 'react'

class SearchForm extends React.Component {
  render() {
    let input

    return (
      <form
        className='search'
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          fetch('/search/' + input.value).then(result => result.json())
            .then(result => {
              if (typeof result === 'string') {
                this.props.games([])
              } else {
                this.props.games(result.games)
              }
            })
          this.props.query(input.value)
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
