import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import RegisterForm from './Register';
import { renderWithRedux } from '../../utils/renderWithRedux';
import { authActions } from '../../store/actions/auth';

jest.mock('../Spinner', () => () => <div>Spinner</div>);

describe('RegisterForm component', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      auth: {
        isLoading: false,
      },
    };
  });

  it('RegisterForm renders', () => {
    const { container } = renderWithRedux(<RegisterForm />, initialState);
    expect(container).toBeInTheDocument();
  });

  it('submit register form worked', async () => {
    const fetchRegistrationSpy = jest.spyOn(authActions, 'fetchRegistration');
    const { getByRole, getByTestId } = renderWithRedux(<RegisterForm />, initialState);
    const email = getByTestId('email').querySelector('input');
    const name = getByTestId('name').querySelector('input');
    const surname = getByTestId('surname').querySelector('input');
    const password = getByTestId('password').querySelector('input');
    fireEvent.change(email, {
      target: { value: 'test@test.com' },
    });
    fireEvent.change(name, {
      target: { value: 'name' },
    });
    fireEvent.change(surname, {
      target: { value: 'surname' },
    });
    fireEvent.change(password, {
      target: { value: '123123' },
    });
    fireEvent.click(getByRole('button'));

    await waitFor(() => expect(fetchRegistrationSpy).toBeCalled());
    fetchRegistrationSpy.mockClear();
  });

  it('RegisterForm Error render', () => {
    initialState.auth.error = 'Произошла ошибка';
    const { getByText } = renderWithRedux(<RegisterForm />, initialState);

    expect(getByText(/Произошла ошибка/i)).toBeInTheDocument();
  });

  it('RegisterForm Spinner render', () => {
    initialState.auth.isLoading = true;
    const { getByText } = renderWithRedux(<RegisterForm />, initialState);

    expect(getByText(/spinner/i)).toBeInTheDocument();
  });

  it('RegisterForm snapshot', () => {
    const registerForm = renderWithRedux(<RegisterForm />, initialState);

    expect(registerForm).toMatchSnapshot();
  });
});
