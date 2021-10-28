import React from 'react';
import { renderWithRedux } from '../../utils/renderWithRedux';
import LoginForm from './Login';

describe('LoginForm component', () => {
  const initialState = {
    auth: {
      isLoading: false,
      error: null,
    },
  };

  it('LoginForm renders', () => {
    const { container } = renderWithRedux(<LoginForm />, initialState);
    expect(container).toBeInTheDocument();
  });

  // it('submit login form worked', () => {
  //   const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
  //   const mockDispatchFn = jest.fn();
  //   useDispatchSpy.mockReturnValue(mockDispatchFn);
  //   render(
  //     <Router history={history}>
  //       <LoginForm />
  //     </Router>,
  //   );
  //
  //   userEvent.click(screen.getByRole('button'));
  //   expect(mockDispatchFn).toHaveBeenCalledWith(logIn());
  //   useDispatchSpy.mockClear();
  // });

  it('LoginForm snapshot', () => {
    const loginForm = renderWithRedux(<LoginForm />, initialState);

    expect(loginForm).toMatchSnapshot();
  });
});
