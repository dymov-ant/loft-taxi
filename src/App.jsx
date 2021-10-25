import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainLayout from './layout';
import { authActions } from './store/actions/auth';
import { AUTH_TOKEN } from './constants';
import { orderActions } from './store/actions/order';
import { profileActions } from './store/actions/profile';

class App extends Component {
  componentDidMount() {
    const { props } = this;
    props.getAddressList();
    if (localStorage.getItem(AUTH_TOKEN)) {
      props.login(true);
      props.getProfile();
    }
  }

  render() {
    return <MainLayout />;
  }
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isLoggedIn,
    addressList: state.order.addressList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (isAuth) => dispatch(authActions.setIsAuth(isAuth)),
    getAddressList: () => dispatch(orderActions.getAddressList()),
    getProfile: () => dispatch(profileActions.getProfile()),
  };
}

App.propTypes = {
  getAddressList: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
