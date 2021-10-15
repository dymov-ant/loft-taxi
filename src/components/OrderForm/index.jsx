import { Button, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import classNames from "classnames/bind"
import React, { useState } from "react"
import standardImg from "../../assets/img/tariffs/tariff_1.png"
import premiumImg from "../../assets/img/tariffs/tariff_2.png"
import businessImg from "../../assets/img/tariffs/tariff_3.png"
import style from "./orderForm.module.scss"

const OrderForm = () => {
  const ADDRESS = [
    "Пункт A",
    "Пункт B",
    "Пункт C",
    "Пункт D"
  ]

  const cx = classNames.bind(style)

  const [addressFrom, setAddressFrom] = useState("")
  const [addressTo, setAddressTo] = useState("")
  const [tariff, setTariff] = useState(1)
  const [submit, setSubmit] = useState(false)

  const handleSelect = event => {
    if (event.target.name === "from") {
      setAddressFrom(event.target.value)
    } else {
      setAddressTo(event.target.value)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    setSubmit(true)
  }

  const handleReset = () => {
    setTariff(1)
    setAddressFrom("")
    setAddressTo("")
    setSubmit(false)
  }

  return (
    submit
      ? <div className={style.successForm}>
        <p className={style.successForm__title}>Заказ размещен</p>
        <p className={style.successForm__text}>
          Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
        </p>
        <Button
          color="primary"
          fullWidth
          variant="contained"
          onClick={handleReset}
        >
          Сделать новый заказ
        </Button>
      </div>
      : <div className={style.form}>
        <div className={style.form__top}>
          <FormControl
            fullWidth
            margin="normal"
          >
            <InputLabel>Откуда</InputLabel>
            <Select
              name="from"
              value={addressFrom}
              onChange={handleSelect}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left"
                },
                getContentAnchorEl: null
              }}
            >
              {ADDRESS.map(item => <MenuItem value={item} key={item}>{item}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            margin="normal"
            disabled={!addressFrom}
          >
            <InputLabel>Куда</InputLabel>
            <Select
              name="to"
              value={addressTo}
              onChange={handleSelect}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left"
                },
                getContentAnchorEl: null
              }}
            >
              {ADDRESS.map(item => item !== addressFrom && <MenuItem value={item} key={item}>{item}</MenuItem>)}
            </Select>
          </FormControl>
        </div>
        {
          (addressFrom && addressTo) && <div className={style.form__tariff}>
            <div
              className={cx(style.tariffItem, { [style.tariffItem_active]: tariff === 1 })}
              onClick={() => setTariff(1)}
            >
              <p className={style.tariffItem__name}>Стандарт</p>
              <p className={style.tariffItem__price}>Стоимость <span>150 ₽</span></p>
              <img src={standardImg} alt="стандарт"/>
            </div>
            <div
              className={cx(style.tariffItem, { [style.tariffItem_active]: tariff === 2 })}
              onClick={() => setTariff(2)}
            >
              <p className={style.tariffItem__name}>Премиум</p>
              <p className={style.tariffItem__price}>Стоимость <span>250 ₽</span></p>
              <img src={premiumImg} alt="стандарт"/>
            </div>
            <div
              className={cx(style.tariffItem, { [style.tariffItem_active]: tariff === 3 })}
              onClick={() => setTariff(3)}
            >
              <p className={style.tariffItem__name}>Бизнес</p>
              <p className={style.tariffItem__price}>Стоимость <span>300 ₽</span></p>
              <img src={businessImg} alt="стандарт"/>
            </div>
          </div>
        }

        <Button
          color="primary"
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          disabled={!(addressTo && addressFrom && tariff)}
        >
          Заказать
        </Button>
      </div>
  )
}

export default OrderForm
