import { useCounter, selector } from './counter.hook';
import { IState } from './state.interface';

const mockUseSelector = jest.fn(() => 0);

jest.mock('react-redux', () => ({
  useSelector: () => mockUseSelector(),
}));

describe('useCounter', () => {
  it('should return call useSelector', () => {
    const counter = 0;

    mockUseSelector.mockReturnValueOnce(counter);

    const actual = useCounter();

    const expected = 0;
    expect(actual).toEqual(expected);
    expect(mockUseSelector.mock.calls.length).toEqual(1);
  });
});
describe('selector', () => {
  it('should return data from state', () => {
    const counter = 0;
    const state: { counter: IState } = {
      counter: {
        value: counter,
      },
    };

    const actual = selector(state);

    const expected = 0;
    expect(actual).toEqual(expected);
  });
});
