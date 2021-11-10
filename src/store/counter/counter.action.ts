import { AddCounterActionCreator, SubtractCounterActionCreator } from './counter.action.interface';
import { actions } from './counter.constant';

export const addCounter: AddCounterActionCreator = value => ({
  type: actions.ADD,
  payload: {
    value,
  },
});

export const subtractCounter: SubtractCounterActionCreator = value => ({
  type: actions.SUBTRACT,
  payload: {
    value,
  },
});
