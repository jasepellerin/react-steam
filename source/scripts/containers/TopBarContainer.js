import { connect } from 'react-redux'
import TopBar from '../components/TopBar.jsx'

const mapStateToProps = (state) => ({
  games: state.games
})

export default connect(mapStateToProps)(TopBar)
