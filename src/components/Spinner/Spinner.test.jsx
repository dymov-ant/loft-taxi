import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Spinner from './index';

describe('Spinner component', () => {
  it('Spinner renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Spinner />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Spinner snapshot', () => {
    const spinner = render(<Spinner />);
    expect(spinner).toMatchSnapshot();
  });
});
