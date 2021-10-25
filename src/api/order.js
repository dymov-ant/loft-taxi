import { api } from './index';

export const getAddressList = () => api.get('/addressList');

export const getRoute = (payload) =>
  api.get('/route', {
    params: {
      address1: payload.addressFrom,
      address2: payload.addressTo,
    },
  });
