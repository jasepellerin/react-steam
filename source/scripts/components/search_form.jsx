import React from 'react'
import { connect } from 'react-redux'
import { query } from '../redux/actions'

let SearchForm = ({ dispatch }) => {
  let input

  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      fetch('/search/' + input.value).then(result => result.json())
        .then(result => {
          dispatch(query(input.value))
          console.log(result)
        })
    }}>
      <input ref={node => {
        input = node
      }}
        type='text' name="search_term" autoFocus='true' placeholder='Find users...' />
      <input type='submit' value="Search" />
    </form>
  )
}

export default connect()(SearchForm)
