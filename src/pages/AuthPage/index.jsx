import React, { Component } from "react"
import logoVertical from "../../assets/img/logo-v.svg"
import LoginForm from "../../components/authForms/Login"
import RegisterForm from "../../components/authForms/Register"
import Card from "../../components/Card"
import styles from "./authPage.module.scss"

class AuthPage extends Component {
  render() {
    const location = this.props.location

    return (
      <div className={styles.authpage__wrapper}>
        <div className={styles.authpage__left}>
          <img src={logoVertical} alt="Loft Taxi"/>
        </div>
        <div className={styles.authpage__right}>
          <div className={styles.authpage__card}>
            <Card>
              {location.pathname === "/login"
                ? <LoginForm/>
                : <RegisterForm/>
              }
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default AuthPage