import AuthPage from "../pages/AuthPage"
import MapPage from "../pages/MapPage/MapPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"

export const ROUTE_NAMES = {
  LOGIN: "/login",
  REGISTRATION: "/registration",
  MAP: "/map",
  PROFILE: "/profile"
}

export const publicRoutes = [
  { path: ROUTE_NAMES.LOGIN, exact: true, component: AuthPage },
  { path: ROUTE_NAMES.REGISTRATION, exact: true, component: AuthPage }
]

export const privateRoutes = [
  { path: ROUTE_NAMES.MAP, exact: true, component: MapPage },
  { path: ROUTE_NAMES.PROFILE, exact: true, component: ProfilePage }
]