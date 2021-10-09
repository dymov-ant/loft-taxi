import React from "react"
import { useSelector } from "react-redux"
import { Redirect, Route, Switch } from "react-router-dom"
import { privateRoutes, publicRoutes, ROUTE_NAMES } from "../router"

const AppRouter = () => {
  const isAuth = useSelector(state => state.auth.isLoggedIn)
  return (
    isAuth
      ?
      <Switch>
        {privateRoutes.map(route =>
          <Route {...route} key={route.path}/>
        )}
        <Redirect to={ROUTE_NAMES.MAP}/>
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route =>
          <Route {...route} key={route.path}/>
        )}
        <Redirect to={ROUTE_NAMES.LOGIN}/>
      </Switch>
  )
}

export default AppRouter
