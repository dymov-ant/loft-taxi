import React from 'react';
import { renderWithRedux } from './utils/renderWithRedux';
import App from './App';
import { orderActions } from './store/actions/order';
import { authActions } from './store/actions/auth';
import { AUTH_TOKEN } from './constants';
import { profileActions } from './store/actions/profile';

jest.mock('./layout', () => () => <div>MainLayout</div>);
jest.mock('./components/Spinner', () => () => <div>Spinner</div>);

describe('App component', () => {
  const initialState = {
    profile: {
      isLoading: false,
    },
    isAuth: true,
    addressList: [],
  };

  it('App renders', () => {
    const { container } = renderWithRedux(<App />, initialState);
    expect(container).toBeInTheDocument();
  });

  it('App renders spinner', () => {
    initialState.profile.isLoading = true;
    const { getByText, queryByText } = renderWithRedux(<App />, initialState);
    expect(getByText(/spinner/i)).toBeInTheDocument();
    expect(queryByText(/mainLayout/i)).not.toBeInTheDocument();
  });

  it('App calledWith componentDidMount', () => {
    localStorage.setItem(AUTH_TOKEN, 'test');
    const getAddressListSpy = jest.spyOn(orderActions, 'getAddressList');
    const loginSpy = jest.spyOn(authActions, 'setIsAuth');
    const getProfileSpy = jest.spyOn(profileActions, 'getProfile');

    renderWithRedux(<App />, initialState);

    expect(getAddressListSpy).toHaveBeenCalled();
    expect(loginSpy).toHaveBeenCalled();
    expect(getProfileSpy).toHaveBeenCalled();

    localStorage.removeItem(AUTH_TOKEN);
    orderActions.getAddressList.mockRestore();
    authActions.setIsAuth.mockRestore();
    profileActions.getProfile.mockRestore();
  });

  it('App snapshot', () => {
    const app = renderWithRedux(<App />, initialState);

    expect(app).toMatchSnapshot();
  });
});
