import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { ROUTE_NAMES } from '../../router';
import { renderWithRedux } from '../../utils/renderWithRedux';
import Header from './index';
import { authActions } from '../../store/actions/auth';

describe('Header component', () => {
  const initialState = {
    auth: {
      isLoggedIn: true,
    },
  };

  it('Header renders', () => {
    const { container } = renderWithRedux(<Header />, initialState);

    expect(container).toBeInTheDocument();
  });

  it('openMenu works', () => {
    renderWithRedux(<Header />, initialState);

    const burger = document.querySelector('.burgerBtn');
    const nav = screen.getByRole('navigation');
    userEvent.click(burger);

    expect(nav).toHaveClass('navbar_open');
  });

  it('closeMenu works', () => {
    renderWithRedux(<Header />, initialState);

    const burger = document.querySelector('.burgerBtn');
    userEvent.click(burger);
    const closeBtn = document.querySelector('.closeBtn');
    const nav = screen.getByRole('navigation');
    userEvent.click(closeBtn);

    expect(nav).not.toHaveClass('navbar_open');
  });

  it('navigation works', () => {
    const history = createMemoryHistory();
    const mockStore = configureStore();

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByText(/карта/i));
    expect(history.location.pathname).toMatch(ROUTE_NAMES.MAP);
    userEvent.click(screen.getByText(/профиль/i));
    expect(history.location.pathname).toMatch(ROUTE_NAMES.PROFILE);
  });

  it('logout works', () => {
    const logOutSpy = jest.spyOn(authActions, 'logout');

    renderWithRedux(<Header />, initialState);

    userEvent.click(screen.getByText(/выйти/i));
    expect(logOutSpy).toHaveBeenCalledWith();
    logOutSpy.mockClear();
  });

  it('Header snapshot', () => {
    const header = renderWithRedux(<Header />, initialState);

    expect(header).toMatchSnapshot();
  });
});
