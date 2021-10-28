import React from 'react';
import Map from './index';
import { renderWithRedux } from '../../utils/renderWithRedux';
//
// jest.mock('mapbox-gl', () => ({
//   Map: jest.fn(() => ({
//     on: jest.fn(),
//     getLayer: jest.fn(),
//     removeLayer: jest.fn(),
//     otherMethods: jest.fn(),
//   })),
// }));

describe('Map component', () => {
  it('Map renders', () => {
    const initialState = {
      order: {
        route: [],
      },
    };
    // todo Что не так?
    const { container } = renderWithRedux(<Map />, initialState);
    expect(container).toBeInTheDocument();
  });

  it('Map snapshot', () => {
    const initialState = {
      order: {
        route: [],
      },
    };
    const map = renderWithRedux(<Map />, initialState);
    expect(map).toMatchSnapshot();
  });
});
