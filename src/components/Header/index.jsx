import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import burgerIcon from '../../assets/img/icons/burger.svg';
import closeIcon from '../../assets/img/icons/close.svg';
import logoutIcon from '../../assets/img/icons/logout.svg';
import pinIcon from '../../assets/img/icons/pin.svg';
import profileIcon from '../../assets/img/icons/profile.svg';
import logo from '../../assets/img/logo.svg';
import { ROUTE_NAMES } from '../../router';
import { authActions } from '../../store/actions/auth';
import styles from './header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
    closeMenu();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Loft Taxi" />
      </div>
      <div className={styles.burgerBtn} onClick={openMenu}>
        <img src={burgerIcon} alt="" />
      </div>
      <nav className={`${styles.navbar} ${isOpen ? styles.navbar_open : ''}`}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink activeClassName={styles.active} onClick={closeMenu} to={ROUTE_NAMES.MAP} exact>
              <img src={pinIcon} alt="" />
              Карта
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink activeClassName={styles.active} onClick={closeMenu} to={ROUTE_NAMES.PROFILE}>
              <img src={profileIcon} alt="" />
              Профиль
            </NavLink>
          </li>
          <li className={styles.item} onClick={logoutHandler}>
            <img src={logoutIcon} alt="" />
            Выйти
          </li>
        </ul>
        <div className={styles.closeBtn} onClick={closeMenu}>
          <img src={closeIcon} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
