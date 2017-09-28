import { bindActionCreators } from 'redux'
import { updateGames, updateQuery } from '../redux/actions'
import { connect } from 'react-redux'
import SearchForm from '../components/SearchForm.jsx'

const mapStateToProps = (state) => ({
  query: state.query
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateGames, updateQuery }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)
