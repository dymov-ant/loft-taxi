import authReducer from './index';
import { authActions } from '../../actions/auth';

describe('authReducer', () => {
  it('setIsAuth', () => {
    let state = {
      isLoggedIn: false,
    };

    state = authReducer(state, authActions.setIsAuth(true));

    expect(state).toEqual({ isLoggedIn: true });
  });

  it('setIsLoading', () => {
    let state = {
      isLoading: false,
    };

    state = authReducer(state, authActions.setIsLoading(true));

    expect(state).toEqual({ isLoading: true });
  });

  it('setIsError', () => {
    let state = {
      error: null,
    };

    state = authReducer(state, authActions.setError('Сообщение об ошибке'));

    expect(state).toEqual({ error: 'Сообщение об ошибке' });
  });

  it('default state', () => {
    let state = {
      isLoggedIn: false,
      isLoading: false,
      error: null,
    };

    state = authReducer(state, { type: 'INCORRECT' });

    expect(state).toEqual(state);
  });
});
