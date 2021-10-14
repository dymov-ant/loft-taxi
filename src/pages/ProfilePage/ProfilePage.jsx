import React, { Component } from "react"
import Card from "../../components/Card"
import ProfileForm from "../../components/ProfileForm"
import style from "./profilePage.module.scss"

class ProfilePage extends Component {
  render() {
    return (
      <div className={style.profile}>
        <Card>
          <ProfileForm/>
        </Card>
      </div>
    )
  }
}

export default ProfilePage