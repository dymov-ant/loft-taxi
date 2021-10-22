import React, { Component } from "react"
import MainLayout from "./layout"
import { authActions } from "./store/actions/auth"
import { AUTH_TOKEN } from "./constants"
import { connect } from "react-redux"
import { orderActions } from "./store/actions/order"

class App extends Component {

  componentDidMount() {
    this.props.getAddressList()
    if (localStorage.getItem(AUTH_TOKEN)) {
      this.props.login(true)
    }
  }

  render() {
    return (
      <MainLayout/>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isLoggedIn,
    addressList: state.order.addressList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: isAuth => dispatch(authActions.setIsAuth(isAuth)),
    getAddressList: () => dispatch(orderActions.getAddressList()),
    getRoute: (addressFrom, addressTo) => dispatch(orderActions.getRoute(addressFrom, addressTo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)