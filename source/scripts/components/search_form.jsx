import React from 'react'
import { connect } from 'react-redux'
import { query, games } from '../redux/actions'

let SearchForm = ({ dispatch }) => {
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
              dispatch(games([]))
            } else {
              dispatch(games(result.games))
            }
          })
        dispatch(query(input.value))
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

export default connect()(SearchForm)
