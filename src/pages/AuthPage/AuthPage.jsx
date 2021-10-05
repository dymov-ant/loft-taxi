import React from "react"

const AuthPage = () => {
  return (
    <>
      <form action="#">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email"/>
        <label htmlFor="password">Пароль</label>
        <input type="password" id="password" name="password"/>
      </form>
    </>
  )
}

export default AuthPage