import React, { Component } from "react"
import MainLayout from "./layout"

class App extends Component {
  state = {
    activePage: "auth"
  }

  goToPage = (page) => {
    this.setState({
      activePage: page
    })
  }

  render() {
    return (
      <MainLayout/>
    )
  }
}

export default App