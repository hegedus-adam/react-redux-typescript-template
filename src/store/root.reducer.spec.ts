import { rootReducer } from './root.reducer';

jest.mock('redux', () => ({
  combineReducers: jest.fn(reducers => Object.keys(reducers)),
}));

describe('rootReducer', () => {
  it('should return list of reducers', () => {
    const actual = rootReducer;

    const expected = [
      'counter',
    ];
    expect(actual).toEqual(expected);
  });
});
