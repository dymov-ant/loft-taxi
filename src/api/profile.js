import { api } from './index';
import { AUTH_TOKEN } from '../constants';

export const getProfile = () =>
  api.get('/card', {
    params: { token: localStorage.getItem(AUTH_TOKEN) },
  });

export const setProfile = (cardData) => api.post('/card', { ...cardData, token: localStorage.getItem(AUTH_TOKEN) });
