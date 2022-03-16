import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as filterActions from '../actions/filter'
import HeadMenu from "../components/headMenu/HeadMenu"

const mapStateToProps = ({ books, filter }) => ({
    filterBy: filter.filterBy

})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(HeadMenu);
