import { connect } from 'react-redux'
import Profile from '../components/profile.jsx'

const mapStateToProps = (state) => ({
  games: state.games
})

export default connect(mapStateToProps)(Profile)
