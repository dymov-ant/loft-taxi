import React from 'react';
import MapPage from './index';
import { renderWithRedux } from '../../utils/renderWithRedux';

jest.mock('../../components/Map', () => () => <div>map</div>);

describe('Map Page', () => {
  const initialState = {
    order: {
      addressList: [],
      route: [],
    },
    profile: {
      card: {
        cardName: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
      },
    },
  };
  it('MapPage renders', () => {
    const { container } = renderWithRedux(<MapPage />, initialState);

    expect(container).toBeInTheDocument();
  });

  it('MapPage snapshot', () => {
    const mapPage = renderWithRedux(<MapPage />, initialState);

    expect(mapPage).toMatchSnapshot();
  });
});
