import React, { Component } from "react"
import MainLayout from "./layout"
import { authActions } from "./store/actions/auth"
import { AUTH_TOKEN } from "./constants"
import { connect } from "react-redux"
import { orderActions } from "./store/actions/order"
import { profileActions } from "./store/actions/profile"

class App extends Component {
  componentDidMount() {
    this.props.getAddressList()
    if (localStorage.getItem(AUTH_TOKEN)) {
      this.props.login(true)
      this.props.getProfile()
    }
  }

  render() {
    return <MainLayout/>
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
    login: (isAuth) => dispatch(authActions.setIsAuth(isAuth)),
    getAddressList: () => dispatch(orderActions.getAddressList()),
    getProfile: () => dispatch(profileActions.getProfile())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
