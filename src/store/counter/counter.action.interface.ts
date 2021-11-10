import { actions } from './counter.constant';
import { IState } from './state.interface';

export type AddCounterAction = {
  type: actions.ADD
  payload: {
    value: number
  }
};

export type SubtractCounterAction = {
  type: actions.SUBTRACT
  payload: {
    value: number
  }
};

export type AddCounterActionCreator = (value: number) => AddCounterAction;
export type AddCounterReducer = (state: IState, action: AddCounterAction) => IState;

export type SubtractCounterActionCreator = (value: number) => SubtractCounterAction;
export type SubtractCounterReducer = (state: IState, action: SubtractCounterAction) => IState;

export type CounterActions = AddCounterAction | SubtractCounterAction;
export type CounterActionCreators = AddCounterActionCreator | SubtractCounterActionCreator;
export type CounterReducers = AddCounterReducer | SubtractCounterReducer;
