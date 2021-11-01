import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { renderWithRedux } from '../../utils/renderWithRedux';
import LoginForm from './Login';
import { authActions } from '../../store/actions/auth';

jest.mock('../Spinner', () => () => <div>Spinner</div>);

describe('LoginForm component', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      auth: {
        isLoading: false,
        error: null,
      },
    };
  });

  it('LoginForm renders', () => {
    const { container } = renderWithRedux(<LoginForm />, initialState);
    expect(container).toBeInTheDocument();
  });

  it('submit login form worked', async () => {
    const fetchLoginSpy = jest.spyOn(authActions, 'fetchLogin');
    const { getByRole, getByTestId } = renderWithRedux(<LoginForm />, initialState);
    const email = getByTestId('email').querySelector('input');
    const password = getByTestId('password').querySelector('input');
    fireEvent.change(email, {
      target: { value: 'test@test.com' },
    });
    fireEvent.change(password, {
      target: { value: '123123' },
    });
    fireEvent.click(getByRole('button'));

    await waitFor(() => expect(fetchLoginSpy).toBeCalled());
    fetchLoginSpy.mockClear();
  });

  it('LoginForm Error render', () => {
    initialState.auth.error = 'Произошла ошибка';
    const { getByText } = renderWithRedux(<LoginForm />, initialState);

    expect(getByText(/Произошла ошибка/i)).toBeInTheDocument();
  });

  it('LoginForm Spinner render', () => {
    initialState.auth.isLoading = true;
    const { getByText } = renderWithRedux(<LoginForm />, initialState);

    expect(getByText(/spinner/i)).toBeInTheDocument();
  });

  it('LoginForm snapshot', () => {
    const loginForm = renderWithRedux(<LoginForm />, initialState);

    expect(loginForm).toMatchSnapshot();
  });
});
