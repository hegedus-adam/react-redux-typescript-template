import { reducerFactory } from './reducer-factory';

describe('reducerFactory', () => {
  it('should return default state when no handlers are present', () => {
    const defaultState = {
      value: 0,
    };
    const action = {
      type: 'test',
      payload: {
        value: 1,
      },
    };

    const actual = reducerFactory(defaultState, undefined)(undefined, action);

    expect(actual).toEqual(defaultState);
  });

  it('should call reducer when handlers and action present', () => {
    const mockTestHandler = jest.fn();
    const defaultState = {
      value: 0,
    };

    const state = {
      value: 10,
      someIrrelevantValue: 0,
    };

    const handlers = {
      test: mockTestHandler,
    };
    const action = {
      type: 'test',
      payload: {
        value: 1,
      },
    };

    reducerFactory(defaultState, handlers)(state, action);

    const expected = [state, action];
    expect(mockTestHandler.mock.calls.length).toEqual(1);
    expect(mockTestHandler.mock.calls[0]).toEqual(expected);
  });
});
