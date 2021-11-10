import { counter } from './counter.reducer';
import { actions } from './counter.constant';
import { IState } from './state.interface';

describe('counter', () => {
  describe(`${actions.ADD}`, () => {
    it('should return state', () => {
      const state: IState = {
        value: 0,
      };
      const action = {
        type: actions.ADD,
        payload: {
          value: 1,
        },
      };
      const actual = counter(state, action);

      const expected: IState = {
        value: 1,
      };
      expect(actual).toEqual(expected);
    });
  });

  describe(`${actions.SUBTRACT}`, () => {
    it('should return state', () => {
      const state: IState = {
        value: 0,
      };
      const action = {
        type: actions.SUBTRACT,
        payload: {
          value: 1,
        },
      };
      const actual = counter(state, action);

      const expected: IState = {
        value: -1,
      };
      expect(actual).toEqual(expected);
    });
  });
});
