import { testSaga } from 'redux-saga-test-plan';
import { authActions } from './index';
import {
  FETCH_LOGIN,
  FETCH_REGISTRATION,
  LOGOUT,
  SET_ERROR,
  SET_IS_AUTH,
  SET_IS_LOADING,
} from '../../reducers/auth/types';
import { loginWorker, registrationWorker } from './saga';
import { login, registration } from '../../../api/auth';
import { profileActions } from '../profile';

describe('authActions', () => {
  it('setIsAuth', () => {
    const payload = true;
    const action = authActions.setIsAuth(payload);

    expect(action).toEqual({ type: SET_IS_AUTH, payload });
  });

  it('setIsLoading', () => {
    const payload = false;
    const action = authActions.setIsLoading(payload);

    expect(action).toEqual({ type: SET_IS_LOADING, payload });
  });

  it('setError', () => {
    const payload = 'Сообщение об ошибке';
    const action = authActions.setError(payload);

    expect(action).toEqual({ type: SET_ERROR, payload });
  });

  it('fetchLogin', () => {
    const payload = {
      email: 'test@test.com',
      password: '123123',
    };
    const action = authActions.fetchLogin(payload);

    expect(action).toEqual({ type: FETCH_LOGIN, payload });
  });

  it('fetchRegistration', () => {
    const payload = {
      email: 'test@test.com',
      name: 'name',
      surname: 'surname',
      password: '123123',
    };
    const action = authActions.fetchRegistration(payload);

    expect(action).toEqual({ type: FETCH_REGISTRATION, payload });
  });

  it('logout', () => {
    const action = authActions.logout();

    expect(action).toEqual({ type: LOGOUT });
  });

  describe('async authActions', () => {
    const loginPayload = {
      email: 'test@test.com',
      password: '123123',
    };
    const registrationPayload = {
      email: 'test@test.com',
      name: 'name',
      surname: 'surname',
      password: '123123',
    };

    it('login success', () => {
      const response = { data: { success: true, token: 'test token' } };
      testSaga(loginWorker, authActions.fetchLogin(loginPayload))
        .next()
        .put(authActions.setIsLoading(true))
        .next()
        .call(login, loginPayload)
        .next(response)
        .put(authActions.setIsAuth(true))
        .next()
        .put(authActions.setError(null))
        .next()
        .put(profileActions.getProfile())
        .next()
        .put(authActions.setIsLoading(false))
        .next()
        .isDone();
    });

    it('login catch error', () => {
      const response = {};
      testSaga(loginWorker, authActions.fetchLogin(loginPayload))
        .next()
        .put(authActions.setIsLoading(true))
        .next()
        .call(login, loginPayload)
        .next(response)
        .put(authActions.setError('Ошибка авторизации'))
        .next()
        .put(authActions.setIsLoading(false))
        .next()
        .isDone();
    });

    it('login error', () => {
      const response = { data: { success: false, error: 'error' } };
      testSaga(loginWorker, authActions.fetchLogin(loginPayload))
        .next()
        .put(authActions.setIsLoading(true))
        .next()
        .call(login, loginPayload)
        .next(response)
        .put(authActions.setError('error'))
        .next()
        .put(authActions.setIsLoading(false))
        .next()
        .isDone();
    });

    it('registration success', () => {
      const response = { data: { success: true, token: 'test token' } };
      testSaga(registrationWorker, authActions.fetchRegistration(registrationPayload))
        .next()
        .put(authActions.setIsLoading(true))
        .next()
        .call(registration, registrationPayload)
        .next(response)
        .put(authActions.setIsAuth(true))
        .next()
        .put(authActions.setError(null))
        .next()
        .put(authActions.setIsLoading(false))
        .next()
        .isDone();
    });

    it('registration catch error', () => {
      const response = {};
      testSaga(registrationWorker, authActions.fetchRegistration(registrationPayload))
        .next()
        .put(authActions.setIsLoading(true))
        .next()
        .call(registration, registrationPayload)
        .next(response)
        .put(authActions.setError('Ошибка регистрации'))
        .next()
        .put(authActions.setIsLoading(false))
        .next()
        .isDone();
    });

    it('registration error', () => {
      const response = { data: { success: false, error: 'error' } };
      testSaga(registrationWorker, authActions.fetchRegistration(registrationPayload))
        .next()
        .put(authActions.setIsLoading(true))
        .next()
        .call(registration, registrationPayload)
        .next(response)
        .put(authActions.setError('error'))
        .next()
        .put(authActions.setIsLoading(false))
        .next()
        .isDone();
    });
  });
});
