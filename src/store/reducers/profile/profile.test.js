import profileReducer from './index';
import { profileActions } from '../../actions/profile';

describe('profileReducer', () => {
  it('fetchingProfile', () => {
    let state = {
      isLoading: false,
      error: 'Ошибка',
    };

    state = profileReducer(state, profileActions.fetchingProfile());

    expect(state).toEqual({ isLoading: true, error: null });
  });

  it('fetchingSuccessProfile', () => {
    let state = {
      isLoading: true,
      error: 'Ошибка',
      card: null,
    };

    const payload = {
      cardName: 'name surname',
      cardNumber: '1111 2222 3333 4444',
      expiryDate: new Date(),
      cvc: '123',
    };

    state = profileReducer(state, profileActions.fetchingSuccess(payload));

    expect(state).toEqual({
      isLoading: false,
      error: null,
      card: payload,
    });
  });

  it('fetchingErrorProfile', () => {
    let state = {
      isLoading: true,
      error: null,
    };

    state = profileReducer(state, profileActions.fetchingError('Сообщение об ошибке'));

    expect(state).toEqual({
      isLoading: false,
      error: 'Сообщение об ошибке',
    });
  });

  it('successSubmit', () => {
    let state = {
      isSuccessSubmitting: false,
    };

    state = profileReducer(state, profileActions.successSubmitting(true));

    expect(state).toEqual({ isSuccessSubmitting: true });
  });

  it('default state', () => {
    let state = {
      card: null,
      isLoading: false,
      error: null,
      isSuccessSubmitting: false,
    };

    state = profileReducer(state, { type: 'INCORRECT' });

    expect(state).toEqual(state);
  });
});
