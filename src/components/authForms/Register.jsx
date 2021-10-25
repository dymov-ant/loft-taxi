import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import ErrorMessage from '../ErrorMessage';
import Spinner from '../Spinner';
import { authActions } from '../../store/actions/auth';
import { registrationSchema } from '../../utils/validationsSchemas';
import styles from './authForm.module.scss';

const useStyles = makeStyles((theme) => ({
  input: {
    margin: theme.spacing(2, 0),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const RegisterForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);
  const initialValues = {
    email: '',
    password: '',
    name: '',
    surname: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values) => {
      dispatch(authActions.fetchRegistration(values));
    },
  });

  return (
    <form className={styles.form} aria-label="form" onSubmit={formik.handleSubmit}>
      <h2 className={styles.form__title}>Регистрация</h2>
      <TextField
        className={classes.input}
        label="Email*"
        type="email"
        fullWidth
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        className={classes.input}
        label="Имя*"
        type="text"
        fullWidth
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        className={classes.input}
        label="Фамилия*"
        type="text"
        fullWidth
        name="surname"
        value={formik.values.surname}
        onChange={formik.handleChange}
        error={formik.touched.surname && Boolean(formik.errors.surname)}
        helperText={formik.touched.surname && formik.errors.surname}
      />
      <TextField
        className={classes.input}
        label="Придумайте пароль*"
        type="password"
        fullWidth
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      {error && <ErrorMessage message={error} />}
      {isLoading ? (
        <Spinner />
      ) : (
        <Button
          className={classes.button}
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
          disabled={isLoading}
        >
          Зарегистрироваться
        </Button>
      )}
      <p className={styles.form__text}>
        Уже зарегистрированны?
        <Link to="/login"> Войти</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
