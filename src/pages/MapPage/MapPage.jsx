import React, { Component } from "react"
import Card from "../../components/Card"
import Map from "../../components/Map"
import OrderForm from "../../components/OrderForm"
import style from "./mapPage.module.scss"

class MapPage extends Component {
  render() {
    return (
      <div className={style.mapPage__wrapper}>
        <Map/>
        <div className={style.mapPage__orderForm}>
          <Card>
            <OrderForm/>
          </Card>
        </div>
      </div>
    )
  }
}

export default MapPage