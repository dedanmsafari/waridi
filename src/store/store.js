import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";

import { rootReducer } from "./rootReducer";

const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type:", action.type);
  console.log("payload:", action.payload);
  console.log("currentState:", store.getState());

  next(action);

  console.log("nextState:", store.getState());
};

const middleWares = [loggerMiddleWare];

const composedEnhansers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhansers);
