import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import DateFnsUtils from '@date-io/date-fns';
import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { cardSchema } from '../../utils/validationsSchemas';
import { profileActions } from '../../store/actions/profile';
import { ROUTE_NAMES } from '../../router';
import styles from './profileForm.module.scss';
import Spinner from '../Spinner';
import SavedCard from '../SavedCard';

const useStyles = makeStyles((theme) => ({
  input: {
    margin: theme.spacing(1, 0),
    // eslint-disable-next-line
    '@media (max-width:767px)': {
      margin: theme.spacing(0, 0, 0.5),
    },
  },
}));

const ProfileForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.profile.isLoading);
  const card = useSelector((state) => state.profile.card);
  const isSuccessSubmitting = useSelector((state) => state.profile.isSuccessSubmitting);
  const initialValues = card
    ? { ...card }
    : {
        cardName: '',
        cardNumber: '',
        expiryDate: new Date(),
        cvc: '',
      };

  const formik = useFormik({
    initialValues,
    validationSchema: cardSchema,
    onSubmit: (values) => {
      dispatch(profileActions.setProfile(values));
    },
  });

  useEffect(
    () => () => {
      dispatch(profileActions.successSubmitting(false));
    },
    [dispatch],
  );

  return (
    <div className={styles.form__wrapper}>
      <h1 className={styles.form__title}>Профиль</h1>
      <p className={styles.form__text}>
        {isSuccessSubmitting
          ? 'Платёжные данные обновлены. Теперь вы можете заказывать такси.'
          : 'Введите платежные данные'}
      </p>
      {isSuccessSubmitting ? (
        <>
          <Button variant="contained" color="primary" component={Link} to={ROUTE_NAMES.MAP}>
            Перейти на карту
          </Button>
        </>
      ) : (
        <>
          <form className={styles.form__formWrapper} noValidate>
            <div className={styles.form__form}>
              <div className={styles.form__row}>
                <TextField
                  label="Имя владельца"
                  type="text"
                  fullWidth
                  className={classes.input}
                  inputProps={{ style: { textTransform: 'uppercase' } }}
                  name="cardName"
                  value={formik.values.cardName}
                  onChange={formik.handleChange}
                  error={formik.touched.cardName && Boolean(formik.errors.cardName)}
                  helperText={formik.touched.cardName && formik.errors.cardName}
                />
              </div>
              <div className={styles.form__row}>
                <InputMask
                  mask="9999 9999 9999 9999"
                  value={formik.values.cardNumber}
                  onChange={formik.handleChange}
                  maskChar={null}
                >
                  {(props) => (
                    <TextField
                      {...props}
                      label="Номер карты"
                      type="text"
                      fullWidth
                      className={classes.input}
                      name="cardNumber"
                      error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
                      helperText={formik.touched.cardNumber && formik.errors.cardNumber}
                    />
                  )}
                </InputMask>
              </div>
              <div className={styles.form__row}>
                <div className={styles.form__col}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      label="MM/YY"
                      format="MM/yy"
                      minDate={new Date()}
                      variant="inline"
                      openTo="year"
                      views={['year', 'month']}
                      autoOk
                      className={classes.input}
                      name="expiryDate"
                      value={formik.values.expiryDate}
                      onChange={(val) => formik.setFieldValue('expiryDate', val)}
                      error={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}
                      helperText={formik.touched.expiryDate && formik.errors.expiryDate}
                    />
                  </MuiPickersUtilsProvider>
                </div>
                <div className={styles.form__col}>
                  <InputMask mask="999" value={formik.values.cvc} onChange={formik.handleChange} maskChar={null}>
                    {(props) => (
                      <TextField
                        {...props}
                        label="CVC"
                        type="text"
                        fullWidth
                        className={classes.input}
                        name="cvc"
                        value={formik.values.cvc}
                        onChange={formik.handleChange}
                        error={formik.touched.cvc && Boolean(formik.errors.cvc)}
                        helperText={formik.touched.cvc && formik.errors.cvc}
                      />
                    )}
                  </InputMask>
                </div>
              </div>
            </div>
            <div className={styles.form__cardWrapper}>
              {card ? (
                <SavedCard cardNumber={card.cardNumber} expiryDate={card.expiryDate} />
              ) : (
                <Typography variant="h6" align="center">
                  Нет сохраненных карт
                </Typography>
              )}
            </div>
          </form>
          {isLoading ? (
            <Spinner />
          ) : (
            <Button variant="contained" color="primary" type="submit" onClick={formik.handleSubmit}>
              Сохранить
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default ProfileForm;
