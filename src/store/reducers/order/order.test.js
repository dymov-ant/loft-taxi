import orderReducer from './idnex';
import { orderActions } from '../../actions/order';

describe('orderReducer', () => {
  it('fetchingAddressList', () => {
    let state = {
      isLoading: false,
      error: 'Ошибка',
    };

    state = orderReducer(state, orderActions.fetchingAddressList());

    expect(state).toEqual({ isLoading: true, error: null });
  });

  it('fetchingSuccessAddressList', () => {
    let state = {
      isLoading: true,
      error: 'Ошибка',
      addressList: [],
    };

    const payload = ['address1', 'address2', 'address3'];

    state = orderReducer(state, orderActions.fetchingSuccessAddressList(payload));

    expect(state).toEqual({
      isLoading: false,
      error: null,
      addressList: payload,
    });
  });

  it('fetchingErrorAddressList', () => {
    let state = {
      isLoading: true,
      error: null,
    };

    state = orderReducer(state, orderActions.fetchingErrorAddressList('Сообщение об ошибке'));

    expect(state).toEqual({
      isLoading: false,
      error: 'Сообщение об ошибке',
    });
  });

  it('fetchingRoute', () => {
    let state = {
      isLoading: false,
      error: 'Сообщение об ошибке',
    };

    state = orderReducer(state, orderActions.fetchingRoute());

    expect(state).toEqual({ isLoading: true, error: null });
  });

  it('fetchingSuccessRoute', () => {
    let state = {
      isLoading: true,
      error: 'Сообщение об ошибке',
      route: [],
    };
    const payload = [
      [25, 37],
      [18, 55],
    ];

    state = orderReducer(state, orderActions.fetchingSuccessRoute(payload));

    expect(state).toEqual({ isLoading: false, error: null, route: payload });
  });

  it('fetchingErrorRoute', () => {
    let state = {
      isLoading: true,
      error: null,
    };

    state = orderReducer(state, orderActions.fetchingErrorRoute('Сообщение об ошибке'));

    expect(state).toEqual({ isLoading: false, error: 'Сообщение об ошибке' });
  });

  it('clearRoute', () => {
    let state = {
      isLoading: true,
      error: 'Сообщение об ошибке',
      route: [
        [25, 37],
        [18, 55],
      ],
    };

    state = orderReducer(state, orderActions.clearRoute());

    expect(state).toEqual({
      isLoading: false,
      error: null,
      route: [],
    });
  });

  it('default state', () => {
    let state = {
      addressList: [],
      route: [],
      isLoading: false,
      error: null,
    };

    state = orderReducer(state, { type: 'INCORRECT' });

    expect(state).toEqual(state);
  });
});
