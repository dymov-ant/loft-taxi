import React, { Component } from "react"
import Header from "./components/Header"
import AuthPage from "./pages/AuthPage/AuthPage"
import MapPage from "./pages/MapPage"
import ProfilePage from "./pages/ProfilePage"


const PAGES = {
  map: <MapPage/>,
  profile: <ProfilePage/>,
  auth: <AuthPage/>
}

class App extends Component {
  state = {
    activePage: "map"
  }

  goToPage = (page) => {
    this.setState({
      activePage: page
    })
  }

  render() {
    return (
      <>
        <Header/>
        <section>
          {PAGES[this.state.activePage]}
        </section>
      </>
    )
  }
}

export default App