import React from 'react';
import { renderWithRedux } from '../../utils/renderWithRedux';
import ProfilePage from './index';

describe('Profile page', () => {
  const initialState = {
    profile: {
      isLoading: false,
    },
  };
  it('ProfilePage renders', () => {
    const { container } = renderWithRedux(<ProfilePage />, initialState);

    expect(container).toBeInTheDocument();
  });

  it('MapPage snapshot', () => {
    const profilePage = renderWithRedux(<ProfilePage />, initialState);

    expect(profilePage).toMatchSnapshot();
  });
});
