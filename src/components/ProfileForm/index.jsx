import DateFnsUtils from "@date-io/date-fns"
import { Button, TextField, Typography } from "@material-ui/core"
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import logoCard from "../../assets/img/icons/card-logo.svg"
import schemaCard from "../../assets/img/icons/card-schema.svg"
import mastercard from "../../assets/img/icons/master-card.svg"
import { ROUTE_NAMES } from "../../router"
import styles from "./profileForm.module.scss"

const ProfileForm = () => {
  const card = false
  const [submit, setSubmit] = useState(false)
  const [date, setDate] = useState(new Date())

  const handleDateChange = date => {
    setDate(date)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setSubmit(true)
  }

  return (
    <div className={styles.form__wrapper}>
      <h1 className={styles.form__title}>Профиль</h1>
      <p className={styles.form__text}>
        {
          submit
            ? "Платёжные данные обновлены. Теперь вы можете заказывать такси."
            : "Введите платежные данные"
        }
      </p>
      {
        submit
          ? <>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              <Link to={ROUTE_NAMES.MAP}>
                Перейти на карту
              </Link>
            </Button>
          </>
          : <>
            <form className={styles.form__formWrapper}>
              <div className={styles.form__form}>
                <div className={styles.form__row}>
                  <TextField
                    label="Имя владельца"
                    type="text"
                    fullWidth
                    margin="normal"
                  />
                </div>
                <div className={styles.form__row}>
                  <TextField
                    label="Номер карты"
                    type="text"
                    fullWidth
                    margin="normal"
                  />
                </div>
                <div className={styles.form__row}>
                  <div className={styles.form__col}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        value={date}
                        onChange={handleDateChange}
                        label="MM/YY"
                        format="MM/yy"
                        minDate={new Date()}
                        variant="inline"
                        openTo="year"
                        views={["year", "month"]}
                        autoOk
                        margin="normal"
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                  <div className={styles.form__col}>
                    <TextField
                      label="CVC"
                      type="text"
                      fullWidth
                      margin="normal"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.form__cardWrapper}>
                {
                  card
                    ? <div className={styles.card}>
                      <div className={styles.card__top}>
                        <img
                          className={styles.card__logo}
                          src={logoCard}
                          alt="лого"
                        />
                        <p className={styles.card__date}>05/08</p>
                      </div>
                      <p className={styles.card__number}>
                        <span>5545</span>
                        <span>2300</span>
                        <span>3432</span>
                        <span>4521</span>
                      </p>
                      <div className={styles.card__bottom}>
                        <img
                          className={styles.card__schema}
                          src={schemaCard}
                          alt="чип"
                        />
                        <img
                          className={styles.card__mastercard}
                          src={mastercard}
                          alt="mastercard"
                        />
                      </div>
                    </div>
                    : <Typography
                      variant="h6"
                      align="center"
                    >
                      Нет сохраненных карт
                    </Typography>
                }

              </div>
            </form>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Сохранить
            </Button>
          </>
      }
    </div>
  )
}

export default ProfileForm
