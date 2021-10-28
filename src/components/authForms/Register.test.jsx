import React from 'react';
import RegisterForm from './Register';
import { renderWithRedux } from '../../utils/renderWithRedux';

describe('RegisterForm component', () => {
  it('RegisterForm renders', () => {
    const initialState = {
      auth: {
        isLoading: false,
      },
    };
    const { container } = renderWithRedux(<RegisterForm />, initialState);
    expect(container).toBeInTheDocument();
  });

  // it('submit register form worked', () => {
  //   const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
  //   const mockDispatchFn = jest.fn();
  //   useDispatchSpy.mockReturnValue(mockDispatchFn);
  //   render(
  //     <Router history={history}>
  //       <RegisterForm />
  //     </Router>,
  //   );
  //
  //   userEvent.click(screen.getByRole('button'));
  //   expect(mockDispatchFn).toHaveBeenCalledWith(logIn());
  //   useDispatchSpy.mockClear();
  // });

  it('RegisterForm snapshot', () => {
    const initialState = {
      auth: {
        isLoading: false,
      },
    };
    const registerForm = renderWithRedux(<RegisterForm />, initialState);

    expect(registerForm).toMatchSnapshot();
  });
});
