// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import mapbox from 'mapbox-gl';

jest.mock('mapbox-gl', () => ({
  GeolocateControl: jest.fn(),
  Map: jest.fn(() => ({
    on: jest.fn(),
    addControl: jest.fn(),
    remove: jest.fn(),
  })),
  NavigationControl: jest.fn(),
}));

beforeEach(() => {
  mapbox.Map.mockReturnValueOnce({
    remove: jest.fn(),
    getLayer: jest.fn(),
  });
});
