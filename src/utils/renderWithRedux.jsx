import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
// eslint-disable-next-line import/no-extraneous-dependencies
import configureStore from 'redux-mock-store';

const history = createMemoryHistory();
const mockStore = configureStore();

export const renderWithRedux = (component, initialState = {}) => {
  const store = mockStore(initialState);
  return render(
    <Provider store={store}>
      <Router history={history}>{component}</Router>
    </Provider>,
  );
};
