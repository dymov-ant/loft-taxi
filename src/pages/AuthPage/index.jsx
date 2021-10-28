import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import logoVertical from '../../assets/img/logo-v.svg';
import { ROUTE_NAMES } from '../../router';
import LoginForm from '../../components/authForms/Login';
import RegisterForm from '../../components/authForms/Register';
import Card from '../../components/Card';
import styles from './authPage.module.scss';

class AuthPage extends PureComponent {
  render() {
    const { location } = this.props;

    return (
      <div className={styles.authpage__wrapper}>
        <div className={styles.authpage__left}>
          <img src={logoVertical} alt="Loft Taxi" />
        </div>
        <div className={styles.authpage__right}>
          <div className={styles.authpage__card}>
            <Card>{location.pathname === ROUTE_NAMES.LOGIN ? <LoginForm /> : <RegisterForm />}</Card>
          </div>
        </div>
      </div>
    );
  }
}

AuthPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default AuthPage;
