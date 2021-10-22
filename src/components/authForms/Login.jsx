import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useFormik } from "formik"
import { Button, TextField } from "@material-ui/core"
import { authActions } from "../../store/actions/auth"
import Spinner from "../Spinner"
import ErrorMessage from "../ErrorMessage"
import { loginSchema } from "../../utils/validationsSchemas"
import styles from "./authForm.module.scss"

const LoginForm = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.auth.isLoading)
  const error = useSelector(state => state.auth.error)
  const initialValues = {
    email: "",
    password: ""
  }

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(authActions.fetchLogin(values))
    }
  })

  return (
    <form className={styles.form} aria-label="form" onSubmit={formik.handleSubmit} noValidate>
      <h2 className={styles.form__title}>Войти</h2>
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        label="Пароль"
        type="password"
        fullWidth
        margin="normal"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Link
        to="#"
        className={styles.form__passwordRefresh}
      >
        Забыли пароль?
      </Link>
      {error && <ErrorMessage message={error}/>}
      {
        isLoading
          ? <Spinner/>
          : <Button
            variant="contained"
            type="submit"
            color="primary"
            fullWidth
          >
            Войти
          </Button>
      }
      <p className={styles.form__text}>
        Новый пользователь?
        <Link to="/registration"> Регистрация</Link>
      </p>
    </form>
  )
}

export default LoginForm
