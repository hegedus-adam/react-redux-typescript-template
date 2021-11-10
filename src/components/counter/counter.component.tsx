import React from 'react';
import { useDispatch } from 'react-redux';
import { addCounter, subtractCounter, useCounter } from '@/store/counter';

export function Counter() {
  const dispatch = useDispatch();
  const counter = useCounter();

  const handleOnAddClick = () => {
    dispatch(addCounter(1));
  };
  const handleOnSubstractClick = () => {
    dispatch(subtractCounter(1));
  };

  return (
    <section>
      <h2>Counter component</h2>
      <p>{counter}</p>
      <button type="button" onClick={handleOnAddClick}>+1</button>
      <button type="button" onClick={handleOnSubstractClick}>-1</button>
    </section>
  );
}
