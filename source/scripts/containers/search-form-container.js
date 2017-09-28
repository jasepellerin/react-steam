import { bindActionCreators } from 'redux'
import { games, query } from '../redux/actions'
import { connect } from 'react-redux'
import SearchForm from '../components/search-form.jsx'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ games, query }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchForm)
