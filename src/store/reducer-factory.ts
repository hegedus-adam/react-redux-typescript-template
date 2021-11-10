/* eslint-disable @typescript-eslint/no-explicit-any */
export function reducerFactory<S, H extends Record<string, any>>(
  defaultState: S,
  handlers: H = {} as H,
) {
  return (state: S = defaultState, action: any) => (
    handlers[action.type]
      ? handlers[action.type](state, action)
      : state
  );
}
