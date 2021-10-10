import { Button, TextField } from "@material-ui/core"
import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logIn } from "../../store/auth"
import styles from "./authForm.module.scss"

const LoginForm = () => {
  const dispatch = useDispatch()

  const submitHandler = () => {
    dispatch(logIn())
  }

  return (
    <form className={styles.form} aria-label="form">
      <h2 className={styles.form__title}>Войти</h2>
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Пароль"
        type="password"
        fullWidth
        margin="normal"
      />
      <Link
        to="#"
        className={styles.form__passwordRefresh}
      >
        Забыли пароль?
      </Link>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={submitHandler}
      >
        Войти
      </Button>
      <p className={styles.form__text}>
        Новый пользователь?
        <Link to="/registration"> Регистрация</Link>
      </p>
    </form>
  )
}

export default LoginForm
