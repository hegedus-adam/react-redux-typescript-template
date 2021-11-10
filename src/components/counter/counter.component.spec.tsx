import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Counter } from './counter.component';

const mockDispatch = jest.fn();
const mockUseCounter = jest.fn();
const mockUseDispatch = jest.fn(() => mockDispatch);

const mockAddCounter = jest.fn();
const mockSubtractCounter = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockUseDispatch(),
}));

jest.mock('@/store/counter', () => ({
  useCounter: () => mockUseCounter(),
  addCounter: (value: number) => mockAddCounter(value),
  subtractCounter: (value: number) => mockSubtractCounter(value),
}));

describe('Counter', () => {
  it('should render component', () => {
    mockUseCounter.mockReturnValueOnce(0);
    const { container } = render(<Counter />);

    expect(container).toMatchSnapshot();
    expect(mockUseCounter.mock.calls.length).toEqual(1);
    expect(mockUseDispatch.mock.calls.length).toEqual(1);
  });

  it('should render component when +1 is clicked', async () => {
    mockUseCounter.mockReturnValueOnce(0);

    render(<Counter />);

    fireEvent.click(screen.getByText('+1'));

    expect(mockUseCounter.mock.calls.length).toEqual(1);
    expect(mockUseDispatch.mock.calls.length).toEqual(1);
    expect(mockDispatch.mock.calls.length).toEqual(1);
    expect(mockAddCounter.mock.calls.length).toEqual(1);
    expect(mockAddCounter.mock.calls[0][0]).toEqual(1);
    expect(mockSubtractCounter.mock.calls.length).toEqual(0);
  });

  it('should render component when -1 is clicked', async () => {
    mockUseCounter.mockReturnValueOnce(0);

    render(<Counter />);

    fireEvent.click(screen.getByText('-1'));

    expect(mockUseCounter.mock.calls.length).toEqual(1);
    expect(mockUseDispatch.mock.calls.length).toEqual(1);
    expect(mockDispatch.mock.calls.length).toEqual(1);
    expect(mockSubtractCounter.mock.calls.length).toEqual(1);
    expect(mockSubtractCounter.mock.calls[0][0]).toEqual(1);
    expect(mockAddCounter.mock.calls.length).toEqual(0);
  });
});
