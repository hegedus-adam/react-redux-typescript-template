import { useSelector } from 'react-redux';
import { IState } from './state.interface';

type CounterSelector = (state: { counter: IState }) => number;
export const selector: CounterSelector = ({ counter: { value } }) => value;

export const useCounter = () => useSelector(selector);
