import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Card from './index';

describe('Card component', () => {
  it('Card renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Card>
        <div>children</div>
      </Card>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Children in the Document', () => {
    const children = <p>children</p>;
    render(<Card>{children}</Card>);
    const text = screen.getByText(/children/i);
    expect(text).toBeInTheDocument();
  });

  it('Card snapshot', () => {
    const card = render(
      <Card>
        <div>children</div>
      </Card>,
    );

    expect(card).toMatchSnapshot();
  });
});
