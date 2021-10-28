import React from 'react';
import { fireEvent, within } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import OrderForm from './index';
import { renderWithRedux } from '../../utils/renderWithRedux';
import { orderActions } from '../../store/actions/order';

jest.mock('../Spinner', () => () => <div>spinner</div>);

describe('OrderForm component', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      order: {
        addressList: ['address1', 'address2', 'address3'],
        route: [],
        isLoading: false,
      },
    };
  });

  it('OrderForm renders', () => {
    const { container } = renderWithRedux(<OrderForm />, initialState);
    expect(container).toBeInTheDocument();
  });

  it('OrderForm handleSelect', () => {
    const { getByRole, getAllByRole } = renderWithRedux(<OrderForm />, initialState);
    const [fromSelect, toSelect] = getAllByRole('button');

    fireEvent.mouseDown(fromSelect);
    const fromListbox = within(getByRole('listbox'));
    act(() => {
      fireEvent.click(fromListbox.queryByText('address2'));
    });
    expect(fromSelect).toHaveTextContent('address2');

    fireEvent.mouseDown(toSelect);
    const toListbox = within(getByRole('listbox'));
    act(() => {
      fireEvent.click(toListbox.queryByText('address3'));
    });
    expect(toSelect).toHaveTextContent('address3');
  });

  it('OrderForm select tariff', () => {
    const { getByTestId, getByRole, getAllByRole } = renderWithRedux(<OrderForm />, initialState);
    const [fromSelect, toSelect] = getAllByRole('button');

    fireEvent.mouseDown(fromSelect);
    const fromListbox = within(getByRole('listbox'));
    act(() => {
      fireEvent.click(fromListbox.queryByText('address1'));
    });
    fireEvent.mouseDown(toSelect);
    const toListbox = within(getByRole('listbox'));
    act(() => {
      fireEvent.click(toListbox.queryByText('address2'));
    });

    const tariff1 = getByTestId('tariff-1');
    const tariff2 = getByTestId('tariff-2');
    const tariff3 = getByTestId('tariff-3');

    fireEvent.click(tariff1);
    expect(tariff1).toHaveClass('tariffItem_active');
    expect(tariff2).not.toHaveClass('tariffItem_active');
    expect(tariff3).not.toHaveClass('tariffItem_active');

    fireEvent.click(tariff2);
    expect(tariff1).not.toHaveClass('tariffItem_active');
    expect(tariff2).toHaveClass('tariffItem_active');
    expect(tariff3).not.toHaveClass('tariffItem_active');

    fireEvent.click(tariff3);
    expect(tariff1).not.toHaveClass('tariffItem_active');
    expect(tariff2).not.toHaveClass('tariffItem_active');
    expect(tariff3).toHaveClass('tariffItem_active');
  });

  it('OrderForm render spinner', () => {
    initialState.order.isLoading = true;
    const { getByText } = renderWithRedux(<OrderForm />, initialState);

    expect(getByText(/spinner/i)).toBeInTheDocument();
  });

  it('OrderForm submit', () => {
    const { getAllByRole, getByRole } = renderWithRedux(<OrderForm />, initialState);
    const [fromSelect, toSelect, button] = getAllByRole('button');

    fireEvent.mouseDown(fromSelect);
    const fromListbox = within(getByRole('listbox'));
    act(() => {
      fireEvent.click(fromListbox.queryByText('address2'));
    });
    fireEvent.mouseDown(toSelect);
    const toListbox = within(getByRole('listbox'));
    act(() => {
      fireEvent.click(toListbox.queryByText('address3'));
    });

    const getRouteSpy = jest.spyOn(orderActions, 'getRoute');
    fireEvent.click(button);

    expect(getRouteSpy).toBeCalled();
  });

  it('OrderForm order success', () => {
    initialState.order.route = [
      [30.316273, 59.940578],
      [30.316589, 59.940495],
    ];

    const { getByText } = renderWithRedux(<OrderForm />, initialState);

    expect(getByText(/Заказ размещен/i)).toBeInTheDocument();
  });

  it('OrderForm reset form', () => {
    initialState.order.route = [
      [30.316273, 59.940578],
      [30.316589, 59.940495],
    ];
    const clearRouteSpy = jest.spyOn(orderActions, 'clearRoute');
    const { getByText, getByRole } = renderWithRedux(<OrderForm />, initialState);

    expect(getByText(/Заказ размещен/i)).toBeInTheDocument();
    fireEvent.click(getByRole('button'));

    expect(clearRouteSpy).toBeCalled();
    // todo Разобраться почему не меняется компонент
    // expect(getByText(/Заказ размещен/i)).not.toBeInTheDocument();
    // expect(getByText(/Заказать/i)).toBeInTheDocument();
  });

  it('OrderForm snapshot', () => {
    const orderForm = renderWithRedux(<OrderForm />, initialState);

    expect(orderForm).toMatchSnapshot();
  });
});
