import React from 'react'
import SearchForm from './search-form.jsx'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  games: state.games
})

const Title = () => (<h1>Steam User Information</h1>)

// If games exist, wrap title and search in top bar
class TopBar extends React.Component {
  render() {
    let games = this.props.games
    let gamesExist = games && games.length > 0
    return (
      <div className={gamesExist ? 'top-bar' : 'full-height'}>
        {gamesExist
          // Return array of elements, as they don't need a base element
          ? [
            <div key={1} className='top-bar-left'>
              <Title />
            </div>,
            <div key={2} className='top-bar-right'>
              <SearchForm />
            </div>]
          : [
            <Title key={1} />,
            < SearchForm key={2} />]
        }
      </div>
    )
  }
}

export default connect(mapStateToProps)(TopBar)
