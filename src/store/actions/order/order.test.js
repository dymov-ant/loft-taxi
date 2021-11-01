import { testSaga } from 'redux-saga-test-plan';
import { orderActions } from './index';
import {
  CLEAR_ROUTE,
  FETCHING_ADDRESS_LIST,
  FETCHING_ERROR_ADDRESS_LIST,
  FETCHING_ERROR_ROUTE,
  FETCHING_ROUTE,
  FETCHING_SUCCESS_ADDRESS_LIST,
  FETCHING_SUCCESS_ROUTE,
  GET_ADDRESS_LIST,
  GET_ROUTE,
} from '../../reducers/order/types';
import { getAddressListWorker, getRouteWorker } from './saga';
import { getAddressList, getRoute } from '../../../api/order';

describe('orderActions', () => {
  it('fetchingAddressList', () => {
    const action = orderActions.fetchingAddressList();

    expect(action).toEqual({ type: FETCHING_ADDRESS_LIST });
  });

  it('fetchingSuccessAddressList', () => {
    const payload = ['address1', 'address2', 'address3'];
    const action = orderActions.fetchingSuccessAddressList(payload);

    expect(action).toEqual({ type: FETCHING_SUCCESS_ADDRESS_LIST, payload });
  });

  it('fetchingErrorAddressList', () => {
    const payload = 'Сообщение об ошибке';
    const action = orderActions.fetchingErrorAddressList(payload);

    expect(action).toEqual({ type: FETCHING_ERROR_ADDRESS_LIST, payload });
  });

  it('getAddressList', () => {
    const action = orderActions.getAddressList();

    expect(action).toEqual({ type: GET_ADDRESS_LIST });
  });

  it('fetchingRoute', () => {
    const action = orderActions.fetchingRoute();

    expect(action).toEqual({ type: FETCHING_ROUTE });
  });

  it('fetchingSuccessRoute', () => {
    const payload = [
      [37, 25],
      [25, 37],
    ];
    const action = orderActions.fetchingSuccessRoute(payload);

    expect(action).toEqual({ type: FETCHING_SUCCESS_ROUTE, payload });
  });

  it('fetchingErrorRoute', () => {
    const payload = 'Сообщение об ошибке';
    const action = orderActions.fetchingErrorRoute(payload);

    expect(action).toEqual({ type: FETCHING_ERROR_ROUTE, payload });
  });

  it('clearRoute', () => {
    const action = orderActions.clearRoute();

    expect(action).toEqual({ type: CLEAR_ROUTE });
  });

  it('getRoute', () => {
    const addressFrom = 'address1';
    const addressTo = 'address2';
    const action = orderActions.getRoute(addressFrom, addressTo);

    expect(action).toEqual({
      type: GET_ROUTE,
      payload: {
        addressFrom,
        addressTo,
      },
    });
  });

  describe('async orderActions', () => {
    it('getAddressList success', () => {
      const response = { data: { addresses: ['address1', 'address2'] } };

      testSaga(getAddressListWorker)
        .next()
        .put(orderActions.fetchingAddressList())
        .next()
        .call(getAddressList)
        .next(response)
        .put(orderActions.fetchingSuccessAddressList(response.data.addresses))
        .next()
        .isDone();
    });

    it('getAddressList catch error', () => {
      const response = {};

      testSaga(getAddressListWorker)
        .next()
        .put(orderActions.fetchingAddressList())
        .next()
        .call(getAddressList)
        .next(response)
        .put(orderActions.fetchingErrorAddressList('Что-то пошло не так'))
        .next()
        .isDone();
    });

    it('getAddressList error', () => {
      const response = { data: { addresses: [] } };

      testSaga(getAddressListWorker)
        .next()
        .put(orderActions.fetchingAddressList())
        .next()
        .call(getAddressList)
        .next(response)
        .put(orderActions.fetchingErrorAddressList('Ошибка при получении списка адресов'))
        .next()
        .isDone();
    });

    it('getRoute success', () => {
      const payload = { addressFrom: 'address1', addressTo: 'address2' };
      const { addressFrom } = payload;
      const { addressTo } = payload;
      const response = {
        data: [
          [37, 25],
          [45, 11],
        ],
      };

      testSaga(getRouteWorker, orderActions.getRoute(addressFrom, addressTo))
        .next()
        .put(orderActions.fetchingRoute())
        .next()
        .call(getRoute, payload)
        .next(response)
        .put(orderActions.fetchingSuccessRoute(response.data))
        .next()
        .isDone();
    });

    it('getRoute catch error', () => {
      const payload = { addressFrom: 'address1', addressTo: 'address2' };
      const { addressFrom } = payload;
      const { addressTo } = payload;
      const response = {};

      testSaga(getRouteWorker, orderActions.getRoute(addressFrom, addressTo))
        .next()
        .put(orderActions.fetchingRoute())
        .next()
        .call(getRoute, payload)
        .next(response)
        .put(orderActions.fetchingErrorRoute('Что-то пошло не так'))
        .next()
        .isDone();
    });

    it('getRoute error', () => {
      const payload = { addressFrom: 'address1', addressTo: 'address2' };
      const { addressFrom } = payload;
      const { addressTo } = payload;
      const response = { data: [] };

      testSaga(getRouteWorker, orderActions.getRoute(addressFrom, addressTo))
        .next()
        .put(orderActions.fetchingRoute())
        .next()
        .call(getRoute, payload)
        .next(response)
        .put(orderActions.fetchingErrorRoute('Ошибка при получении маршрута'))
        .next()
        .isDone();
    });
  });
});
