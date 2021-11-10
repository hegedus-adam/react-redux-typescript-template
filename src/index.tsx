import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Counter } from '@/components/counter';
import { store } from '@/store';

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById('app'));
