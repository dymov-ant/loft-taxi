import React from "react"
import { connect } from "react-redux"
import { Redirect, Route } from "react-router-dom"

export const PrivateRoute = connect((state) => ({
  isLoggedIn: state.authReducer.isLoggedIn
}))(({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? <Component {...props}/> : <Redirect to="/login"/>
    }
  />
))
