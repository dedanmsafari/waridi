import { AnyAction } from "redux";

//type Definition
type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
};

//Overload
export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

//Overload
export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

//Actual Implementation
export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;

  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T = string> = {
  type: T;
};

export function createAction<T, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T>(type: T, payload: void): Action<T>;

export function createAction<T, P>(type: T, payload: P) {
  return {
    type,
    payload,
  };
}
