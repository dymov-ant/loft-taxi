import { Button, TextField } from "@material-ui/core"
import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logOut } from "../../store/auth"
import styles from "./authForm.module.scss"

const RegisterForm = () => {
  const dispatch = useDispatch()

  const submitHandler = () => {
    dispatch(logOut())
  }

  return (
    <form className={styles.form}>
      <h2 className={styles.form__title}>Регистрация</h2>
      <TextField
        label="Email*"
        type="email"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Как вас зовут?*"
        type="text"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Придумайте пароль*"
        type="password"
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={submitHandler}
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
