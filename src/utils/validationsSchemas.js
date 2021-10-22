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