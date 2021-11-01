import {
  FETCH_LOGIN,
  FETCH_REGISTRATION,
  LOGOUT,
  SET_ERROR,
  SET_IS_AUTH,
  SET_IS_LOADING,
} from '../../reducers/auth/types';

export const authActions = {
  setIsAuth: (payload) => ({ type: SET_IS_AUTH, payload }),
  setIsLoading: (payload) => ({ type: SET_IS_LOADING, payload }),
  setError: (payload) => ({ type: SET_ERROR, payload }),
  fetchLogin: (payload) => ({ type: FETCH_LOGIN, payload }),
  fetchRegistration: (payload) => ({ type: FETCH_REGISTRATION, payload }),
  logout: () => ({ type: LOGOUT }),
};
