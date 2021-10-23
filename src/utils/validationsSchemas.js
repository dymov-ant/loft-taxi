import * as yup from "yup"

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Поле обязательно"),
  password: yup
    .string()
    .min(6, "Минимум 6 символов")
    .required("Поле обязательно")
})

export const registrationSchema = yup.object({
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Поле обязательно"),
  name: yup
    .string()
    .required("Поле обязательно"),
  surname: yup
    .string()
    .required("Поле обязательно"),
  password: yup
    .string()
    .min(6, "Минимум 6 символов")
    .required("Поле обязательно")
})

export const cardSchema = yup.object({
  cardName: yup
    .string()
    .required("Поле обязательно"),
  cardNumber: yup
    .string()
    .min(19, "Номер карты состоит из 16 символов")
    .max(19, "Номер карты состоит из 16 символов")
    .required("Поле обязательно"),
  expiryDate: yup
    .string()
    .nullable()
    .test("isCorrectDate", "Неверная дата", value => Boolean(Date.parse(value)))
    .test("minDate", "Дата меньше текущей", value => Date.now() < Date.parse(value)),
  cvc: yup
    .string()
    .min(3, "3 символа")
    .max(3, "3 символа")
    .required("Поле обязательно")
})