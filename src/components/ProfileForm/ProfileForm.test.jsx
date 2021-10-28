import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import ProfileForm from './index';
import { renderWithRedux } from '../../utils/renderWithRedux';
import { profileActions } from '../../store/actions/profile';

describe('ProfileForm component', () => {
  const initialState = {
    profile: {
      isLoading: false,
      isSuccessSubmitting: false,
      card: null,
    },
  };
  const cardData = {
    id: 'testId',
    cardNumber: '1231 2312 3123 2131',
    expiryDate: '2022-10-31T19:00:00.000Z',
    cardName: 'Test Name',
    cvc: '123',
  };

  it('ProfileForm renders', () => {
    const { container } = renderWithRedux(<ProfileForm />, initialState);

    expect(container).toBeInTheDocument();
  });

  it('ProfileForm submit', async () => {
    initialState.profile.card = cardData;
    const { getByTestId } = renderWithRedux(<ProfileForm />, initialState);
    const setProfileSpy = jest.spyOn(profileActions, 'setProfile');
    const button = getByTestId('button');
    fireEvent.click(button);

    await waitFor(() => expect(setProfileSpy).toBeCalled());
  });

  it('ProfileForm snapshot', () => {
    const profileForm = renderWithRedux(<ProfileForm />, initialState);

    expect(profileForm).toMatchSnapshot();
  });

  it('ProfileForm with card snapshot', () => {
    initialState.profile.card = cardData;
    const profileForm = renderWithRedux(<ProfileForm />, initialState);

    expect(profileForm).toMatchSnapshot();
  });
});
