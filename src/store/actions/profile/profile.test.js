import { testSaga } from 'redux-saga-test-plan';
import { profileActions } from './index';
import {
  FETCHING_ERROR_PROFILE,
  FETCHING_PROFILE,
  FETCHING_SUCCESS_PROFILE,
  GET_PROFILE,
  IS_SUCCESS_SUBMITTING,
  SET_PROFILE,
} from '../../reducers/profile/types';
import { getProfileWorker, setProfileWorker } from './saga';
import { getProfile, setProfile } from '../../../api/profile';

describe('profileActions', () => {
  it('fetchingProfile', () => {
    const action = profileActions.fetchingProfile();

    expect(action).toEqual({ type: FETCHING_PROFILE });
  });

  it('fetchingSuccess', () => {
    const payload = {
      cardName: 'name surname',
      cardNumber: '1111 2222 3333 4444',
      expiryDate: new Date(),
      cvc: '123',
    };
    const action = profileActions.fetchingSuccess(payload);

    expect(action).toEqual({ type: FETCHING_SUCCESS_PROFILE, payload });
  });

  it('fetchingError', () => {
    const payload = 'Сообщение об ошибке';
    const action = profileActions.fetchingError(payload);

    expect(action).toEqual({ type: FETCHING_ERROR_PROFILE, payload });
  });

  it('successSubmitting', () => {
    const payload = true;
    const action = profileActions.successSubmitting(payload);

    expect(action).toEqual({ type: IS_SUCCESS_SUBMITTING, payload });
  });

  it('getProfile', () => {
    const action = profileActions.getProfile();

    expect(action).toEqual({ type: GET_PROFILE });
  });

  it('setProfile', () => {
    const payload = {
      cardName: 'name surname',
      cardNumber: '1111 2222 3333 4444',
      expiryDate: new Date(),
      cvc: '123',
    };
    const action = profileActions.setProfile(payload);

    expect(action).toEqual({ type: SET_PROFILE, payload });
  });

  describe('async profileActions', () => {
    it('getProfile success', () => {
      const response = {
        data: {
          id: 1,
          cardName: 'name surname',
          cardNumber: '1111 2222 3333 4444',
          expiryDate: new Date(),
          cvc: '123',
        },
      };

      testSaga(getProfileWorker)
        .next()
        .put(profileActions.fetchingProfile())
        .next()
        .call(getProfile)
        .next(response)
        .put(profileActions.fetchingSuccess(response.data))
        .next()
        .isDone();
    });

    it('getProfile catch error', () => {
      const response = {};

      testSaga(getProfileWorker)
        .next()
        .put(profileActions.fetchingProfile())
        .next()
        .call(getProfile)
        .next(response)
        .put(profileActions.fetchingError('Что-то пошло не так'))
        .next()
        .isDone();
    });

    it('getProfile error', () => {
      const response = {
        data: { error: 'error' },
      };

      testSaga(getProfileWorker)
        .next()
        .put(profileActions.fetchingProfile())
        .next()
        .call(getProfile)
        .next(response)
        .put(profileActions.fetchingError(response.data.error))
        .next()
        .isDone();
    });

    it('setProfile success', () => {
      const payload = {
        cardName: 'name surname',
        cardNumber: '1111 2222 3333 4444',
        expiryDate: new Date(),
        cvc: '123',
      };
      const response = {
        data: { success: true },
      };

      testSaga(setProfileWorker, profileActions.setProfile(payload))
        .next()
        .put(profileActions.fetchingProfile())
        .next()
        .call(setProfile, payload)
        .next(response)
        .put(profileActions.fetchingSuccess(payload))
        .next()
        .put(profileActions.successSubmitting(true))
        .next()
        .isDone();
    });

    it('setProfile catch error', () => {
      const payload = {
        cardName: 'name surname',
        cardNumber: '1111 2222 3333 4444',
        expiryDate: new Date(),
        cvc: '123',
      };
      const response = {};

      testSaga(setProfileWorker, profileActions.setProfile(payload))
        .next()
        .put(profileActions.fetchingProfile())
        .next()
        .call(setProfile, payload)
        .next(response)
        .put(profileActions.fetchingError('Что-то пошло не так'))
        .next()
        .isDone();
    });

    it('setProfile error', () => {
      const payload = {
        cardName: 'name surname',
        cardNumber: '1111 2222 3333 4444',
        expiryDate: new Date(),
        cvc: '123',
      };
      const response = {
        data: { error: 'error' },
      };

      testSaga(setProfileWorker, profileActions.setProfile(payload))
        .next()
        .put(profileActions.fetchingProfile())
        .next()
        .call(setProfile, payload)
        .next(response)
        .put(profileActions.fetchingError(response.data.error))
        .next()
        .isDone();
    });
  });
});
