import { reducerFactory } from '@/store/reducer-factory';
import { actions } from './counter.constant';
import { AddCounterReducer, SubtractCounterReducer, CounterReducers } from './counter.action.interface';
import { IState } from './state.interface';

const defaultState: IState = {
  value: 0,
};

const handleAddCounter: AddCounterReducer = (state, { payload: { value } }) => ({
  ...state,
  value: state.value + value,
});

const handleSubtractCounter: SubtractCounterReducer = (state, { payload: { value } }) => ({
  ...state,
  value: state.value - value,
});

const counterHandlers: Record<actions, CounterReducers> = {
  [actions.ADD]: handleAddCounter,
  [actions.SUBTRACT]: handleSubtractCounter,
};

export const counter = reducerFactory(defaultState, counterHandlers);
