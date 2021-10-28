import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './index';

describe('ErrorMessage component', () => {
  it('ErrorMessage renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorMessage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('ErrorMessage no props', () => {
    render(<ErrorMessage />);
    expect(screen.getByText(/ошибка/i)).toBeInTheDocument();
  });

  it('ErrorMessage props', () => {
    const message = 'test error message';
    render(<ErrorMessage message={message} />);
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('ErrorMessage snapshot', () => {
    const errorMessage = render(<ErrorMessage />);
    expect(errorMessage).toMatchSnapshot();
  });
});
