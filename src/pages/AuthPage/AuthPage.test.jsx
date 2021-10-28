import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import AuthPage from './index';
import { ROUTE_NAMES } from '../../router';

const renderAuthPage = (initialStore, initialHistory, initialLocation) =>
  render(
    <Provider store={initialStore}>
      <Router history={initialHistory}>
        <AuthPage location={initialLocation} />
      </Router>
    </Provider>,
  );

const history = createMemoryHistory();
let store;

describe('Auth page', () => {
  beforeEach(() => {
    const mockStore = configureStore();
    const initialState = {
      auth: {
        isLoading: false,
      },
    };
    store = mockStore(initialState);
  });

  it('AuthPage renders', () => {
    history.push(ROUTE_NAMES.LOGIN);
    const { container } = renderAuthPage(store, history, history.location);

    expect(container).toBeInTheDocument();
  });

  it('AuthPage render login form', () => {
    history.push(ROUTE_NAMES.LOGIN);
    const { getByTestId } = renderAuthPage(store, history, history.location);

    expect(getByTestId('loginForm')).toBeInTheDocument();
  });

  it('AuthPage render register form', () => {
    history.push(ROUTE_NAMES.REGISTRATION);
    const { getByTestId } = renderAuthPage(store, history, history.location);

    expect(getByTestId('registrationForm')).toBeInTheDocument();
  });

  it('AuthPage snapshot', () => {
    const authPage = renderAuthPage(store, history, history.location);

    expect(authPage).toMatchSnapshot();
  });
});
