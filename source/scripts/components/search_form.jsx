import React from 'react'

export class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { id: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Handle user typing in input
  handleChange(event) {
    this.setState({ id: event.target.value })
  }

  // Send data to server on submit and process results
  handleSubmit(event) {
    fetch('/search/' + this.state.id).then(result => result.json()).then(result => console.log(result))
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name="search_term"
          autoFocus='true' placeholder='Find users...'
          value={this.state.id} onChange={this.handleChange} />
        <input type='submit' value="Search" />
      </form>
    )
  }
}
