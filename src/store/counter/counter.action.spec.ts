import { addCounter, subtractCounter } from './counter.action';
import { actions } from './counter.constant';

describe('addCounter', () => {
  it('should return action object', () => {
    const value = 1;

    const actual = addCounter(value);

    const expected = {
      type: actions.ADD,
      payload: {
        value: 1,
      },
    };
    expect(actual).toEqual(expected);
  });
});

describe('subtractCounter', () => {
  it('should return action object', () => {
    const value = 1;

    const actual = subtractCounter(value);

    const expected = {
      type: actions.SUBTRACT,
      payload: {
        value: 1,
      },
    };
    expect(actual).toEqual(expected);
  });
});
