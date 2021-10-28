import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import SavedCard from './index';

describe('SavedCard component', () => {
  const cardNumber = '1111 2222 3333 4444';
  const expiryDate = 'Wed Oct 27 2025 20:04:40 GMT+0500 (Екатеринбург, стандартное время)';
  it('SavedCard renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SavedCard cardNumber={cardNumber} expiryDate={expiryDate} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('SavedCard props', () => {
    render(<SavedCard cardNumber={cardNumber} expiryDate={expiryDate} />);
    expect(screen.getByText('1111')).toBeInTheDocument();
    expect(screen.getByText('10/25')).toBeInTheDocument();
  });

  it('SavedCard snapshot', () => {
    const savedCard = render(<SavedCard cardNumber={cardNumber} expiryDate={expiryDate} />);
    expect(savedCard).toMatchSnapshot();
  });
});
