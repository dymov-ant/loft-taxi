import { api } from './index';

export const registration = (payload) => api.post('/register', payload);

export const login = (payload) => api.post('/auth', payload);
