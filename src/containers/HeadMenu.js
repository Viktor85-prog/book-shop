import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as filterActions from '../actions/filter'
import * as cartActions from '../actions/cart'
import HeadMenu from "../components/headMenu/HeadMenu"

const mapStateToProps = ({ books, filter, cart }) => ({
    filterBy: filter.filterBy,
    totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
    count: cart.items.length

})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch),
    ...bindActionCreators(cartActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(HeadMenu);
