import React, { useState } from "react"
import burgerIcon from "../../assets/img/icons/burger.svg"
import closeIcon from "../../assets/img/icons/close.svg"
import logoutIcon from "../../assets/img/icons/logout.svg"
import pinIcon from "../../assets/img/icons/pin.svg"
import profileIcon from "../../assets/img/icons/profile.svg"
import logo from "../../assets/img/logo.svg"
import styles from "./header.module.scss"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(true)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Loft Taxi"/>
      </div>
      <div className={styles.burgerBtn} onClick={openMenu}>
        <img src={burgerIcon} alt=""/>
      </div>
      <nav className={`${styles.navbar} ${isOpen ? styles.navbar_open : ""}`}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img src={pinIcon} alt=""/>
            Карта
          </li>
          <li className={styles.item}>
            <img src={profileIcon} alt=""/>
            Профиль
          </li>
          <li className={styles.item}>
            <img src={logoutIcon} alt=""/>
            Выйти
          </li>
        </ul>
        <div className={styles.closeBtn} onClick={closeMenu}>
          <img src={closeIcon} alt=""/>
        </div>
      </nav>
    </header>
  )
}

export default Header
