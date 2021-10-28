import React from 'react';
import MainLayout from './index';
import { renderWithRedux } from '../utils/renderWithRedux';

jest.mock('../components/Header', () => () => <div>Header</div>);
jest.mock('../components/appRouter', () => () => <div>appRouter</div>);

describe('MainLayout component', () => {
  it('MainLayout renders', () => {
    const initialState = {
      auth: {
        isLoggedIn: true,
      },
    };
    const { container } = renderWithRedux(<MainLayout />, initialState);
    expect(container).toBeInTheDocument();
  });

  it('MainLayout isLoggedIn', () => {
    const initialState = {
      auth: {
        isLoggedIn: true,
      },
    };
    const { getByText } = renderWithRedux(<MainLayout />, initialState);

    expect(getByText(/Header/i)).toBeInTheDocument();
    expect(getByText(/appRouter/i)).toBeInTheDocument();
  });

  it('MainLayout isLoggedOut', () => {
    const initialState = {
      auth: {
        isLoggedIn: false,
      },
    };
    const { getByText, queryByText } = renderWithRedux(<MainLayout />, initialState);

    expect(queryByText(/Header/i)).not.toBeInTheDocument();
    expect(getByText(/appRouter/i)).toBeInTheDocument();
  });

  it('MainLayout snapshot', () => {
    const initialState = {
      auth: {
        isLoggedIn: true,
      },
    };
    const mainLayout = renderWithRedux(<MainLayout />, initialState);

    expect(mainLayout).toMatchSnapshot();
  });
});
