import React from "react"
import { Button, TextField } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { authActions } from "../../store/actions/auth"
import styles from "./authForm.module.scss"

const RegisterForm = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.auth.isLoading)

  const submitHandler = () => {
    const payload = {email: "email42@example.com", password: "password", name: "Name", surname: "Surname"}
    dispatch(authActions.fetchRegistration(payload))
  }

  return (
    <form className={styles.form} aria-label="form">
      <h2 className={styles.form__title}>Регистрация</h2>
      <TextField
        label="Email*"
        type="email"
        fullWidth
        margin="normal"
        name="email"
      />
      <TextField
        label="Как вас зовут?*"
        type="text"
        fullWidth
        margin="normal"
        name="username"
      />
      <TextField
        label="Придумайте пароль*"
        type="password"
        fullWidth
        margin="normal"
        name="password"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={submitHandler}
        disabled={isLoading}
      >
        Зарегистрироваться
      </Button>
      <p className={styles.form__text}>
        Уже зарегестрированны?
        <Link to="/login"> Войти</Link>
      </p>
    </form>
  )
}

export default RegisterForm
