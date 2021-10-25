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

export const orderActions = {
  fetchingAddressList: () => ({ type: FETCHING_ADDRESS_LIST }),
  fetchingSuccessAddressList: (addressList) => ({ type: FETCHING_SUCCESS_ADDRESS_LIST, payload: addressList }),
  fetchingErrorAddressList: (error) => ({ type: FETCHING_ERROR_ADDRESS_LIST, payload: error }),
  getAddressList: () => ({ type: GET_ADDRESS_LIST }),
  fetchingRoute: () => ({ type: FETCHING_ROUTE }),
  fetchingSuccessRoute: (route) => ({ type: FETCHING_SUCCESS_ROUTE, payload: route }),
  fetchingErrorRoute: (error) => ({ type: FETCHING_ERROR_ROUTE, payload: error }),
  clearRoute: () => ({ type: CLEAR_ROUTE }),
  getRoute: (addressFrom, addressTo) => ({ type: GET_ROUTE, payload: { addressFrom, addressTo } }),
};
