import { connect } from 'react-redux'
import Profile from '../components/Profile.jsx'

const mapStateToProps = (state) => ({
  games: state.games
})

export default connect(mapStateToProps)(Profile)
